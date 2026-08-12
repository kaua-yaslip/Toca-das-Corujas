"use client";

import { useCallback, useEffect, useRef, useState } from "react";

// O mesmo banner3.mp4 é usado em desktop e mobile.
// Mantemos caminhos alternativos para também funcionar caso o arquivo
// tenha sido colocado diretamente em /assets/imgs-site ou em /public.
const INTRO_VIDEO_PATHS = [
  "/assets/imgs-site/banner/banner3.mp4",
  "/assets/imgs-site/banner3.mp4",
  "/banner3.mp4",
];

const BANNER_VIDEO_DESKTOP = "/assets/imgs-site/bannervideo.mp4";
const BANNER_VIDEO_MOBILE = "/assets/imgs-site/banner/bannervideo-mobile.mp4";

export default function Banner() {
  const [showIntroVideo, setShowIntroVideo] = useState(true);
  const [introVideoIndex, setIntroVideoIndex] = useState(0);
  const introVideoRef = useRef<HTMLVideoElement | null>(null);
  const audioTimersRef = useRef<number[]>([]);

  const limparTentativasDeAudio = useCallback(() => {
    audioTimersRef.current.forEach((timer) => window.clearTimeout(timer));
    audioTimersRef.current = [];
  }, []);

  const tentarLiberarSom = useCallback(() => {
    const video = introVideoRef.current;
    if (!video || !showIntroVideo) return;

    // O vídeo começa mudo para o navegador não bloquear o autoplay.
    // Assim que a reprodução já começou, tentamos liberar o áudio sem botão.
    video.volume = 0;
    video.defaultMuted = false;
    video.muted = false;

    const aumentarVolume = window.setTimeout(() => {
      const atual = introVideoRef.current;
      if (!atual || !showIntroVideo) return;

      atual.muted = false;
      atual.defaultMuted = false;
      atual.volume = 1;

      // Reforça a reprodução caso algum navegador pause ao retirar o mute.
      const tentativa = atual.play();
      if (tentativa) {
        void tentativa.catch(() => {
          // Se o navegador bloquear áudio automático, não deixamos o vídeo parar.
          atual.defaultMuted = true;
          atual.muted = true;
          atual.volume = 1;
          void atual.play().catch(() => undefined);
        });
      }
    }, 120);

    audioTimersRef.current.push(aumentarVolume);
  }, [showIntroVideo]);

  const iniciarIntro = useCallback(async () => {
    const video = introVideoRef.current;
    if (!video || !showIntroVideo) return;

    limparTentativasDeAudio();

    // Autoplay confiável: primeiro inicia mudo.
    video.autoplay = true;
    video.playsInline = true;
    video.defaultMuted = true;
    video.muted = true;
    video.volume = 1;

    try {
      await video.play();
    } catch {
      // O onCanPlay/onLoadedData fará uma nova tentativa quando o arquivo estiver pronto.
      return;
    }

    // Depois que o vídeo já está tocando, tenta habilitar o som automaticamente.
    tentarLiberarSom();

    // Alguns navegadores só aceitam a mudança alguns instantes depois.
    [350, 900, 1800].forEach((delay) => {
      const timer = window.setTimeout(() => {
        const atual = introVideoRef.current;
        if (!atual || !showIntroVideo || atual.ended) return;

        atual.defaultMuted = false;
        atual.muted = false;
        atual.volume = 1;
      }, delay);

      audioTimersRef.current.push(timer);
    });
  }, [limparTentativasDeAudio, showIntroVideo, tentarLiberarSom]);

  const fecharIntroVideo = useCallback(() => {
    limparTentativasDeAudio();

    const video = introVideoRef.current;
    if (video) {
      // Para vídeo e áudio imediatamente antes de remover o overlay.
      video.pause();
      video.muted = true;
      video.defaultMuted = true;
      video.volume = 0;

      try {
        video.currentTime = 0;
      } catch {
        // O pause acima já garante que nenhum áudio continue tocando.
      }
    }

    setShowIntroVideo(false);
  }, [limparTentativasDeAudio]);

  const tentarProximoCaminho = useCallback(() => {
    setIntroVideoIndex((indiceAtual) => {
      if (indiceAtual >= INTRO_VIDEO_PATHS.length - 1) {
        return indiceAtual;
      }
      return indiceAtual + 1;
    });
  }, []);

  useEffect(() => {
    if (!showIntroVideo) return;

    const video = introVideoRef.current;
    if (!video) return;

    // Quando o caminho muda, força o carregamento do novo arquivo.
    video.load();
    void iniciarIntro();

    return () => {
      limparTentativasDeAudio();
      video.pause();
      video.muted = true;
      video.volume = 0;
    };
  }, [introVideoIndex, iniciarIntro, limparTentativasDeAudio, showIntroVideo]);

  return (
    <>
      {showIntroVideo && (
        <div className="home-video-overlay">
          <video
            ref={introVideoRef}
            key={INTRO_VIDEO_PATHS[introVideoIndex]}
            className="home-fullscreen-video"
            src={INTRO_VIDEO_PATHS[introVideoIndex]}
            autoPlay
            muted
            playsInline
            preload="auto"
            onLoadedData={() => void iniciarIntro()}
            onCanPlay={() => void iniciarIntro()}
            onPlaying={tentarLiberarSom}
            onError={tentarProximoCaminho}
            onEnded={fecharIntroVideo}
          >
            Seu navegador não suporta vídeos HTML5.
          </video>

          <button
            type="button"
            className="home-video-close"
            onClick={fecharIntroVideo}
            aria-label="Fechar vídeo de abertura"
          >
            Fechar
          </button>
        </div>
      )}

      <div className="bannerIndex banner banners">
        <div className="banner-1 banner-css">
          <video
            className="video-banner"
            autoPlay
            loop
            muted
            playsInline
            preload="metadata"
          >
            <source media="(max-width: 900px)" src={BANNER_VIDEO_MOBILE} type="video/mp4" />
            <source src={BANNER_VIDEO_DESKTOP} type="video/mp4" />
            Seu navegador não suporta vídeos HTML5.
          </video>
        </div>
      </div>
    </>
  );
}

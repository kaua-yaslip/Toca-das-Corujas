"use client";

import { useCallback, useEffect, useRef, useState } from "react";

const INTRO_VIDEO_DESKTOP = "/assets/imgs-site/banner/banner3.mp4";
const INTRO_VIDEO_MOBILE = "/assets/imgs-site/corujamobile.mp4";
const BANNER_VIDEO_DESKTOP = "/assets/imgs-site/bannervideo.mp4";
const BANNER_VIDEO_MOBILE = "/assets/imgs-site/corujamobile.mp4";

export default function Banner() {
  const [showIntroVideo, setShowIntroVideo] = useState(true);
  const [aguardandoInteracao, setAguardandoInteracao] = useState(false);
  const [somAtivo, setSomAtivo] = useState(false);
  const introVideoRef = useRef<HTMLVideoElement | null>(null);
  const tentativaInicialRef = useRef(false);

  const fecharIntroVideo = useCallback(() => {
    const video = introVideoRef.current;

    if (video) {
      video.pause();
      video.muted = true;
      video.currentTime = 0;
    }

    setShowIntroVideo(false);
  }, []);

  const tocarComSom = useCallback(async (reiniciar = false) => {
    const video = introVideoRef.current;
    if (!video) return false;

    if (reiniciar) {
      try {
        video.currentTime = 0;
      } catch {
        // Alguns navegadores ainda podem estar preparando o arquivo.
      }
    }

    video.muted = false;
    video.defaultMuted = false;
    video.volume = 1;

    try {
      await video.play();
      setSomAtivo(true);
      setAguardandoInteracao(false);
      return true;
    } catch {
      return false;
    }
  }, []);

  const iniciarFallbackSemSom = useCallback(async () => {
    const video = introVideoRef.current;
    if (!video) return;

    video.muted = true;
    video.defaultMuted = true;
    video.volume = 1;

    try {
      await video.play();
    } catch {
      // Se nem o autoplay mudo for liberado, o primeiro toque abaixo tenta novamente.
    }

    setSomAtivo(false);
    setAguardandoInteracao(true);
  }, []);

  const tentarAutoplayComSom = useCallback(async () => {
    if (tentativaInicialRef.current) return;
    tentativaInicialRef.current = true;

    const tocouComSom = await tocarComSom(false);

    if (!tocouComSom) {
      // Chrome/Android, Safari/iOS e outros navegadores podem impedir áudio
      // automático antes de qualquer interação do visitante. Nesses casos,
      // o vídeo continua rodando e o primeiro toque ativa o som imediatamente.
      await iniciarFallbackSemSom();
    }
  }, [iniciarFallbackSemSom, tocarComSom]);

  const ativarSomAposInteracao = useCallback(async () => {
    if (!aguardandoInteracao) return;

    const tocouComSom = await tocarComSom(true);

    if (!tocouComSom) {
      await iniciarFallbackSemSom();
    }
  }, [aguardandoInteracao, iniciarFallbackSemSom, tocarComSom]);

  useEffect(() => {
    const video = introVideoRef.current;
    if (!video) return;

    if (video.readyState >= HTMLMediaElement.HAVE_CURRENT_DATA) {
      void tentarAutoplayComSom();
    }
  }, [tentarAutoplayComSom]);

  useEffect(() => {
    if (!aguardandoInteracao) return;

    const ativar = () => {
      void ativarSomAposInteracao();
    };

    document.addEventListener("pointerdown", ativar, { once: true, capture: true });
    document.addEventListener("touchstart", ativar, { once: true, capture: true, passive: true });
    document.addEventListener("keydown", ativar, { once: true, capture: true });

    return () => {
      document.removeEventListener("pointerdown", ativar, true);
      document.removeEventListener("touchstart", ativar, true);
      document.removeEventListener("keydown", ativar, true);
    };
  }, [aguardandoInteracao, ativarSomAposInteracao]);

  return (
    <>
      {showIntroVideo && (
        <div className="home-video-overlay">
          <video
            ref={introVideoRef}
            className="home-fullscreen-video"
            autoPlay
            playsInline
            preload="auto"
            muted={false}
            onLoadedData={() => void tentarAutoplayComSom()}
            onCanPlay={() => void tentarAutoplayComSom()}
            onEnded={fecharIntroVideo}
          >
            <source
              media="(max-width: 768px)"
              src={INTRO_VIDEO_MOBILE}
              type="video/mp4"
            />
            <source src={INTRO_VIDEO_DESKTOP} type="video/mp4" />
            Seu navegador não suporta vídeos HTML5.
          </video>

          {aguardandoInteracao && (
            <button
              type="button"
              className="home-video-sound"
              onClick={() => void tocarComSom(true)}
              aria-label="Ativar o som do vídeo de abertura"
            >
              Toque para ativar o som
            </button>
          )}

          {!aguardandoInteracao && somAtivo && (
            <span className="home-video-sound-status" aria-live="polite">
              Som ativado
            </span>
          )}

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
          {!showIntroVideo && (
            <video
              className="video-banner"
              autoPlay
              loop
              muted
              playsInline
              preload="auto"
            >
              <source
                media="(max-width: 900px)"
                src={BANNER_VIDEO_MOBILE}
                type="video/mp4"
              />
              <source src={BANNER_VIDEO_DESKTOP} type="video/mp4" />
              Seu navegador não suporta vídeos HTML5.
            </video>
          )}
        </div>
      </div>
    </>
  );
}

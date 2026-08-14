"use client";

import { useCallback, useEffect, useRef, useState } from "react";

const INTRO_VIDEO_DESKTOP = "/assets/imgs-site/banner/banner3.mp4";
const INTRO_VIDEO_MOBILE = "/assets/imgs-site/corujamobile.mp4";
const BANNER_VIDEO_DESKTOP = "/assets/imgs-site/bannervideo.mp4";
const BANNER_VIDEO_MOBILE = "/assets/imgs-site/corujamobile.mp4";

export default function Banner() {
  const [showIntroVideo, setShowIntroVideo] = useState(true);
  const introVideoRef = useRef<HTMLVideoElement | null>(null);

  const pararIntro = useCallback(() => {
    const video = introVideoRef.current;
    if (!video) return;

    video.pause();
    video.muted = true;
    video.defaultMuted = true;
    video.volume = 0;

    try {
      video.currentTime = 0;
    } catch {
      // O pause acima já interrompe vídeo e áudio.
    }
  }, []);

  const fecharIntroVideo = useCallback(() => {
    pararIntro();
    setShowIntroVideo(false);
  }, [pararIntro]);

  const garantirReproducao = useCallback(async () => {
    const video = introVideoRef.current;
    if (!video || !showIntroVideo) return;

    /*
     * Primeiro tentamos o áudio do próprio MP4. Caso Chrome/Safari bloqueiem
     * autoplay com som, o vídeo continua automaticamente mudo e o som é
     * liberado na primeira interação do visitante.
     */
    video.volume = 1;
    video.defaultMuted = false;
    video.muted = false;

    try {
      await video.play();
      return;
    } catch {
      video.defaultMuted = true;
      video.muted = true;
      video.volume = 1;

      try {
        await video.play();
      } catch {
        // Se o navegador também bloquear o autoplay mudo, os eventos abaixo
        // fazem uma nova tentativa assim que o arquivo estiver pronto.
      }
    }
  }, [showIntroVideo]);

  useEffect(() => {
    if (!showIntroVideo) return;

    const liberarAudio = () => {
      const video = introVideoRef.current;
      if (!video) return;

      video.defaultMuted = false;
      video.muted = false;
      video.volume = 1;
      void video.play().catch(() => undefined);
      removerEventos();
    };

    const removerEventos = () => {
      window.removeEventListener("pointerdown", liberarAudio);
      window.removeEventListener("touchstart", liberarAudio);
      window.removeEventListener("keydown", liberarAudio);
    };

    window.addEventListener("pointerdown", liberarAudio, { passive: true });
    window.addEventListener("touchstart", liberarAudio, { passive: true });
    window.addEventListener("keydown", liberarAudio);

    return removerEventos;
  }, [showIntroVideo]);

  useEffect(() => {
    return () => pararIntro();
  }, [pararIntro]);

  const usarFallbackDaCoruja = useCallback(() => {
    const video = introVideoRef.current;
    if (!video) return;

    if (!video.currentSrc.includes("corujamobile.mp4")) {
      video.src = INTRO_VIDEO_MOBILE;
      video.load();
      void garantirReproducao();
    }
  }, [garantirReproducao]);

  return (
    <>
      {showIntroVideo && (
        <div className="home-video-overlay">
          <video
            ref={introVideoRef}
            className="home-fullscreen-video"
            autoPlay
            muted
            playsInline
            preload="auto"
            onLoadedMetadata={() => void garantirReproducao()}
            onLoadedData={() => void garantirReproducao()}
            onCanPlay={() => void garantirReproducao()}
            onError={usarFallbackDaCoruja}
            onEnded={fecharIntroVideo}
          >
            {/* No celular o navegador escolhe este arquivo imediatamente. */}
            <source
              media="(max-width: 768px)"
              src={INTRO_VIDEO_MOBILE}
              type="video/mp4"
            />

            {/* Desktop mantém o banner3 quando ele existir no projeto. */}
            <source src={INTRO_VIDEO_DESKTOP} type="video/mp4" />

            {/* Fallback real: garante que o overlay nunca fique vazio. */}
            <source src={INTRO_VIDEO_MOBILE} type="video/mp4" />

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
            <source
              media="(max-width: 900px)"
              src={BANNER_VIDEO_MOBILE}
              type="video/mp4"
            />
            <source src={BANNER_VIDEO_DESKTOP} type="video/mp4" />
            <source src={INTRO_VIDEO_MOBILE} type="video/mp4" />
            Seu navegador não suporta vídeos HTML5.
          </video>
        </div>
      </div>
    </>
  );
}

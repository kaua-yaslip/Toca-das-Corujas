"use client";

import { useCallback, useEffect, useRef, useState } from "react";

const INTRO_VIDEO_DESKTOP = "/assets/imgs-site/banner/banner3.mp4";
const INTRO_VIDEO_MOBILE = "/assets/imgs-site/corujamobile.mp4";
const INTRO_VIDEO_FALLBACK = "/assets/imgs-site/corujamobile.mp4";

const BANNER_VIDEO_DESKTOP = "/assets/imgs-site/bannervideo.mp4";
const BANNER_VIDEO_MOBILE = "/assets/imgs-site/banner/bannervideo-mobile.mp4";

export default function Banner() {
  const [showIntroVideo, setShowIntroVideo] = useState(true);
  const [introSrc, setIntroSrc] = useState(INTRO_VIDEO_DESKTOP);
  const [mediaResolved, setMediaResolved] = useState(false);
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

  const iniciarIntroComSom = useCallback(async () => {
    const video = introVideoRef.current;
    if (!video || !showIntroVideo) return;

    /*
     * Primeira tentativa: reproduzir diretamente com o áudio existente
     * dentro do próprio MP4. Se o navegador permitir autoplay com som,
     * ele já inicia em volume máximo.
     */
    video.muted = false;
    video.defaultMuted = false;
    video.volume = 1;

    try {
      await video.play();
      video.muted = false;
      video.defaultMuted = false;
      video.volume = 1;
      return;
    } catch {
      /*
       * Chrome/Safari podem bloquear autoplay com áudio sem uma ação do
       * visitante. Nesse caso mantemos o vídeo rodando para não travar a
       * abertura e liberamos o som na primeira interação feita na página.
       */
      video.muted = true;
      video.defaultMuted = true;
      video.volume = 1;

      try {
        await video.play();
      } catch {
        // A primeira interação do usuário fará uma nova tentativa.
      }
    }
  }, [showIntroVideo]);

  useEffect(() => {
    const media = window.matchMedia("(max-width: 768px)");

    const atualizarVideo = () => {
      setIntroSrc(media.matches ? INTRO_VIDEO_MOBILE : INTRO_VIDEO_DESKTOP);
      setMediaResolved(true);
    };

    atualizarVideo();
    media.addEventListener("change", atualizarVideo);

    return () => media.removeEventListener("change", atualizarVideo);
  }, []);

  useEffect(() => {
    if (!showIntroVideo || !mediaResolved) return;

    const video = introVideoRef.current;
    if (!video) return;

    video.load();
    void iniciarIntroComSom();
  }, [introSrc, iniciarIntroComSom, mediaResolved, showIntroVideo]);

  useEffect(() => {
    if (!showIntroVideo) return;

    const liberarAudio = () => {
      const video = introVideoRef.current;
      if (!video) return;

      video.muted = false;
      video.defaultMuted = false;
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

  const usarFallback = useCallback(() => {
    if (introSrc !== INTRO_VIDEO_FALLBACK) {
      setIntroSrc(INTRO_VIDEO_FALLBACK);
    }
  }, [introSrc]);

  return (
    <>
      {showIntroVideo && (
        <div className="home-video-overlay">
          {mediaResolved && (
            <video
              ref={introVideoRef}
              key={introSrc}
              className="home-fullscreen-video"
              src={introSrc}
              autoPlay
              playsInline
              preload="auto"
              onLoadedMetadata={() => void iniciarIntroComSom()}
              onCanPlay={() => void iniciarIntroComSom()}
              onError={usarFallback}
              onEnded={fecharIntroVideo}
            >
              Seu navegador não suporta vídeos HTML5.
            </video>
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

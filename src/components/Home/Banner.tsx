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

  const iniciarComSom = useCallback((reiniciar = false) => {
    const video = introVideoRef.current;
    if (!video) return;

    if (reiniciar) {
      video.currentTime = 0;
    }

    video.muted = false;
    video.volume = 1;

    const tentativa = video.play();

    if (!tentativa) {
      setSomAtivo(true);
      setAguardandoInteracao(false);
      return;
    }

    tentativa
      .then(() => {
        setSomAtivo(true);
        setAguardandoInteracao(false);
      })
      .catch(() => {
        // Android/Chrome e outros navegadores podem bloquear autoplay audível.
        // Mantemos o vídeo no início e pedimos um toque real do usuário.
        video.pause();
        video.currentTime = 0;
        video.muted = true;
        setSomAtivo(false);
        setAguardandoInteracao(true);
      });
  }, []);

  const tentarAutoplayComSom = useCallback(() => {
    if (tentativaInicialRef.current) return;
    tentativaInicialRef.current = true;
    iniciarComSom(false);
  }, [iniciarComSom]);

  useEffect(() => {
    const video = introVideoRef.current;
    if (!video) return;

    if (video.readyState >= HTMLMediaElement.HAVE_CURRENT_DATA) {
      tentarAutoplayComSom();
    }
  }, [tentarAutoplayComSom]);

  return (
    <>
      {showIntroVideo && (
        <div className="home-video-overlay">
          <video
            ref={introVideoRef}
            className="home-fullscreen-video"
            playsInline
            preload="auto"
            onLoadedData={tentarAutoplayComSom}
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
              onClick={() => iniciarComSom(true)}
              aria-label="Assistir ao vídeo de abertura com som"
            >
              Assistir com som
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

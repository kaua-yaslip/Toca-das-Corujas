"use client";

import { useEffect, useRef, useState } from "react";

const INTRO_VIDEO_DESKTOP = "/assets/imgs-site/banner/banner3.mp4";
const INTRO_VIDEO_MOBILE = "/assets/imgs-site/banner/banner3-mobile.mp4";
const BANNER_VIDEO_DESKTOP = "/assets/imgs-site/bannervideo.mp4";
const BANNER_VIDEO_MOBILE = "/assets/imgs-site/banner/bannervideo-mobile.mp4";

export default function Banner() {
  const [showIntroVideo, setShowIntroVideo] = useState(true);
  const [soundBlocked, setSoundBlocked] = useState(false);
  const introVideoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    if (!showIntroVideo) return;

    const video = introVideoRef.current;
    if (!video) return;

    let unlockListenersActive = false;

    const removeUnlockListeners = () => {
      if (!unlockListenersActive) return;

      document.removeEventListener("pointerdown", unlockSound, true);
      document.removeEventListener("keydown", unlockSound, true);
      document.removeEventListener("touchstart", unlockSound, true);
      unlockListenersActive = false;
    };

    const playWithSound = async () => {
      video.defaultMuted = false;
      video.muted = false;
      video.volume = 1;
      await video.play();
      setSoundBlocked(false);
    };

    const unlockSound = () => {
      void playWithSound()
        .then(removeUnlockListeners)
        .catch(() => undefined);
    };

    const addUnlockListeners = () => {
      if (unlockListenersActive) return;

      document.addEventListener("pointerdown", unlockSound, true);
      document.addEventListener("keydown", unlockSound, true);
      document.addEventListener("touchstart", unlockSound, true);
      unlockListenersActive = true;
    };

    const startIntroVideo = async () => {
      try {
        // A Home sempre tenta iniciar o vídeo de abertura já com áudio.
        await playWithSound();
      } catch {
        // Chrome/Safari podem bloquear autoplay com som por política do navegador.
        // Nesse caso o vídeo continua automaticamente e o som é liberado na
        // primeira interação, sem interromper a abertura da Home.
        video.defaultMuted = true;
        video.muted = true;
        setSoundBlocked(true);

        try {
          await video.play();
        } catch {
          // Caso até o autoplay mudo seja bloqueado, a primeira interação tenta novamente.
        }

        addUnlockListeners();
      }
    };

    void startIntroVideo();

    return removeUnlockListeners;
  }, [showIntroVideo]);

  async function ativarSom() {
    const video = introVideoRef.current;
    if (!video) return;

    try {
      video.defaultMuted = false;
      video.muted = false;
      video.volume = 1;
      await video.play();
      setSoundBlocked(false);
    } catch {
      // Mantém o fallback visível se o navegador continuar bloqueando o áudio.
    }
  }

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
            onEnded={() => setShowIntroVideo(false)}
          >
            <source media="(max-width: 900px)" src={INTRO_VIDEO_MOBILE} type="video/mp4" />
            <source src={INTRO_VIDEO_DESKTOP} type="video/mp4" />
            Seu navegador não suporta vídeos HTML5.
          </video>

          {soundBlocked && (
            <button
              type="button"
              className="home-video-sound"
              onClick={() => void ativarSom()}
              aria-label="Ativar som do vídeo"
            >
              Ativar som
            </button>
          )}

          <button
            type="button"
            className="home-video-close"
            onClick={() => setShowIntroVideo(false)}
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

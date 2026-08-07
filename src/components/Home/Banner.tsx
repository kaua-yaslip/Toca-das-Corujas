"use client";

import { useEffect, useRef, useState } from "react";

export default function Banner() {
  const [showIntroVideo, setShowIntroVideo] = useState(false);
  const introVideoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    // Exibe o vídeo de abertura tanto no desktop quanto no mobile.
    setShowIntroVideo(true);
  }, []);

  useEffect(() => {
    if (!showIntroVideo) return;

    const video = introVideoRef.current;
    if (!video) return;

    let unlockListenersActive = false;

    const removeUnlockListeners = () => {
      if (!unlockListenersActive) return;

      document.removeEventListener("pointerdown", unlockSound, true);
      document.removeEventListener("click", unlockSound, true);
      document.removeEventListener("keydown", unlockSound, true);
      document.removeEventListener("touchstart", unlockSound, true);
      unlockListenersActive = false;
    };

    const enableSound = async () => {
      // O banner3 deve tocar com áudio. Primeiro tentamos iniciar já com som.
      video.defaultMuted = false;
      video.muted = false;
      video.volume = 1;
      await video.play();
    };

    const unlockSound = () => {
      void enableSound()
        .then(() => {
          removeUnlockListeners();
        })
        .catch(() => undefined);
    };

    const addUnlockListeners = () => {
      if (unlockListenersActive) return;

      document.addEventListener("pointerdown", unlockSound, true);
      document.addEventListener("click", unlockSound, true);
      document.addEventListener("keydown", unlockSound, true);
      document.addEventListener("touchstart", unlockSound, true);
      unlockListenersActive = true;
    };

    const startIntroVideo = async () => {
      try {
        await enableSound();
      } catch {
        // Navegadores podem bloquear autoplay com áudio até a primeira interação.
        // Mantemos o vídeo rodando e ativamos o som assim que o usuário interagir.
        video.defaultMuted = true;
        video.muted = true;

        try {
          await video.play();
        } catch {
          // A primeira interação também tentará iniciar a reprodução.
        }

        addUnlockListeners();
      }
    };

    void startIntroVideo();

    return () => {
      removeUnlockListeners();
    };
  }, [showIntroVideo]);

  return (
    <>
      {showIntroVideo && (
        <div className="home-video-overlay">
          <video
            ref={introVideoRef}
            className="home-fullscreen-video"
            src="/assets/imgs-site/banner/banner3.mp4"
            autoPlay
            playsInline
            preload="auto"
            onEnded={() => setShowIntroVideo(false)}
          >
            Seu navegador não suporta vídeos HTML5.
          </video>

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
            src="/assets/imgs-site/bannervideo.mp4"
            autoPlay
            loop
            muted
            playsInline
            preload="metadata"
          >
            Seu navegador não suporta vídeos HTML5.
          </video>
        </div>
      </div>
    </>
  );
}

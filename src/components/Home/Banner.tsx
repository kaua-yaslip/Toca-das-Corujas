"use client";

import { useCallback, useEffect, useRef, useState } from "react";

const INTRO_VIDEO = "/assets/imgs-site/banner/banner3.mp4";

const BANNER_VIDEO_DESKTOP = "/assets/imgs-site/bannervideo.mp4";
const BANNER_VIDEO_MOBILE =
  "/assets/imgs-site/banner/bannervideo-mobile.mp4";

export default function Banner() {
  const [showIntroVideo, setShowIntroVideo] = useState(true);

  const introVideoRef = useRef<HTMLVideoElement | null>(null);

  const fecharIntroVideo = useCallback(() => {
    const video = introVideoRef.current;

    if (video) {
      video.pause();
      video.muted = true;
      video.volume = 0;

      try {
        video.currentTime = 0;
      } catch {}

      video.removeAttribute("src");
      video.load();
    }

    setShowIntroVideo(false);
  }, []);

  useEffect(() => {
    if (!showIntroVideo) return;

    const video = introVideoRef.current;

    if (!video) return;

    const iniciar = async () => {
      /*
       * PRIMEIRA TENTATIVA:
       * tenta iniciar COM SOM.
       */
      video.muted = false;
      video.defaultMuted = false;
      video.volume = 1;

      try {
        await video.play();

        console.log("Vídeo iniciado com áudio.");

        return;
      } catch (error) {
        console.log(
          "Autoplay com áudio bloqueado pelo navegador.",
          error
        );
      }

      /*
       * FALLBACK:
       * se o navegador bloquear áudio,
       * inicia o vídeo mudo para ele não ficar parado.
       */
      video.muted = true;
      video.defaultMuted = true;
      video.volume = 0;

      try {
        await video.play();
      } catch (error) {
        console.error("Não foi possível iniciar o vídeo:", error);
      }
    };

    void iniciar();

    /*
     * Quando houver QUALQUER interação do usuário,
     * libera o som automaticamente.
     *
     * Não precisa clicar em botão específico.
     */
    const liberarSom = async () => {
      const atual = introVideoRef.current;

      if (!atual) return;

      atual.muted = false;
      atual.defaultMuted = false;
      atual.volume = 1;

      try {
        await atual.play();
      } catch {}

      removerEventos();
    };

    const removerEventos = () => {
      window.removeEventListener("pointerdown", liberarSom);
      window.removeEventListener("touchstart", liberarSom);
      window.removeEventListener("keydown", liberarSom);
    };

    window.addEventListener("pointerdown", liberarSom);
    window.addEventListener("touchstart", liberarSom);
    window.addEventListener("keydown", liberarSom);

    return () => {
      removerEventos();

      video.pause();
    };
  }, [showIntroVideo]);

  return (
    <>
      {showIntroVideo && (
        <div className="home-video-overlay">
          <video
            ref={introVideoRef}
            className="home-fullscreen-video"
            src={INTRO_VIDEO}
            playsInline
            preload="auto"
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
            <source
              media="(max-width: 900px)"
              src={BANNER_VIDEO_MOBILE}
              type="video/mp4"
            />

            <source
              src={BANNER_VIDEO_DESKTOP}
              type="video/mp4"
            />

            Seu navegador não suporta vídeos HTML5.
          </video>
        </div>
      </div>
    </>
  );
}
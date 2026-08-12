"use client";

import { useCallback, useEffect, useRef, useState } from "react";

const INTRO_VIDEO_PATHS = [
  "/assets/imgs-site/banner/banner3.mp4",
  "/assets/imgs-site/banner3.mp4",
  "/banner3.mp4",
];

const BANNER_VIDEO_DESKTOP = "/assets/imgs-site/bannervideo.mp4";
const BANNER_VIDEO_MOBILE =
  "/assets/imgs-site/banner/bannervideo-mobile.mp4";

export default function Banner() {
  const [showIntroVideo, setShowIntroVideo] = useState(true);
  const [introVideoIndex, setIntroVideoIndex] = useState(0);

  const introVideoRef = useRef<HTMLVideoElement | null>(null);

  /*
   * ============================================================
   * INICIA O BANNER3 COM ÁUDIO
   * ============================================================
   */
  const iniciarIntroComSom = useCallback(async () => {
    const video = introVideoRef.current;

    if (!video || !showIntroVideo) return;

    try {
      // Garante áudio ativo
      video.muted = false;
      video.defaultMuted = false;
      video.volume = 1;

      // Garante que começa do início
      if (video.currentTime <= 0.1) {
        video.currentTime = 0;
      }

      await video.play();

      // Reforça o áudio depois que começou
      video.muted = false;
      video.defaultMuted = false;
      video.volume = 1;
    } catch (error) {
      console.warn(
        "O navegador bloqueou o autoplay com áudio:",
        error
      );
    }
  }, [showIntroVideo]);

  /*
   * ============================================================
   * FECHA O VÍDEO E PARA COMPLETAMENTE O SOM
   * ============================================================
   */
  const fecharIntroVideo = useCallback(() => {
    const video = introVideoRef.current;

    if (video) {
      // Para imediatamente
      video.pause();

      // Remove o áudio
      video.volume = 0;
      video.muted = true;

      try {
        video.currentTime = 0;
      } catch {
        // Ignora caso o vídeo ainda não esteja completamente carregado
      }

      // Remove a origem do vídeo
      video.removeAttribute("src");
      video.load();
    }

    setShowIntroVideo(false);
  }, []);

  /*
   * ============================================================
   * CASO O CAMINHO NÃO EXISTA, TESTA O PRÓXIMO
   * ============================================================
   */
  const tentarProximoCaminho = useCallback(() => {
    setIntroVideoIndex((indiceAtual) => {
      if (indiceAtual >= INTRO_VIDEO_PATHS.length - 1) {
        return indiceAtual;
      }

      return indiceAtual + 1;
    });
  }, []);

  /*
   * ============================================================
   * CARREGA E TENTA TOCAR AUTOMATICAMENTE
   * ============================================================
   */
  useEffect(() => {
    if (!showIntroVideo) return;

    const video = introVideoRef.current;

    if (!video) return;

    // Áudio ligado antes da tentativa de play
    video.muted = false;
    video.defaultMuted = false;
    video.volume = 1;

    video.load();

    const timer1 = window.setTimeout(() => {
      void iniciarIntroComSom();
    }, 100);

    const timer2 = window.setTimeout(() => {
      void iniciarIntroComSom();
    }, 500);

    const timer3 = window.setTimeout(() => {
      const atual = introVideoRef.current;

      if (!atual) return;

      atual.muted = false;
      atual.defaultMuted = false;
      atual.volume = 1;

      void atual.play().catch(() => undefined);
    }, 1000);

    return () => {
      window.clearTimeout(timer1);
      window.clearTimeout(timer2);
      window.clearTimeout(timer3);

      video.pause();
    };
  }, [
    introVideoIndex,
    iniciarIntroComSom,
    showIntroVideo,
  ]);

  /*
   * ============================================================
   * CASO O NAVEGADOR BLOQUEIE O ÁUDIO
   *
   * NÃO MOSTRA BOTÃO.
   * NA PRIMEIRA INTERAÇÃO DO USUÁRIO COM A PÁGINA,
   * LIBERA O SOM AUTOMATICAMENTE.
   * ============================================================
   */
  useEffect(() => {
    if (!showIntroVideo) return;

    const liberarAudio = () => {
      const video = introVideoRef.current;

      if (!video) return;

      video.muted = false;
      video.defaultMuted = false;
      video.volume = 1;

      void video.play().catch(() => undefined);
    };

    window.addEventListener("pointerdown", liberarAudio, {
      once: true,
    });

    window.addEventListener("touchstart", liberarAudio, {
      once: true,
    });

    window.addEventListener("keydown", liberarAudio, {
      once: true,
    });

    return () => {
      window.removeEventListener("pointerdown", liberarAudio);
      window.removeEventListener("touchstart", liberarAudio);
      window.removeEventListener("keydown", liberarAudio);
    };
  }, [showIntroVideo]);

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
            playsInline
            preload="auto"
            onLoadedMetadata={() => {
              const video = introVideoRef.current;

              if (video) {
                video.muted = false;
                video.defaultMuted = false;
                video.volume = 1;
              }

              void iniciarIntroComSom();
            }}
            onLoadedData={() => {
              void iniciarIntroComSom();
            }}
            onCanPlay={() => {
              void iniciarIntroComSom();
            }}
            onPlay={() => {
              const video = introVideoRef.current;

              if (!video) return;

              video.muted = false;
              video.defaultMuted = false;
              video.volume = 1;
            }}
            onPlaying={() => {
              const video = introVideoRef.current;

              if (!video) return;

              video.muted = false;
              video.defaultMuted = false;
              video.volume = 1;
            }}
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
"use client";

import { useCallback, useRef, useState } from "react";

const INTRO_VIDEO_DESKTOP = "/assets/imgs-site/banner/banner3.mp4";
const INTRO_VIDEO_MOBILE = "/assets/imgs-site/corujamobile.mp4";
const BANNER_VIDEO_DESKTOP = "/assets/imgs-site/bannervideo.mp4";
const BANNER_VIDEO_MOBILE = "/assets/imgs-site/corujamobile.mp4";

export default function Banner() {
  const [showIntroVideo, setShowIntroVideo] = useState(true);
  const introVideoRef = useRef<HTMLVideoElement | null>(null);

  const fecharIntroVideo = useCallback(() => {
    const video = introVideoRef.current;

    if (video) {
      video.pause();
      video.muted = true;
    }

    setShowIntroVideo(false);
  }, []);

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

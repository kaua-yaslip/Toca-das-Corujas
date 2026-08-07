"use client";

import { useEffect, useState } from "react";
import "./ScrollToTopMobile.scss";

export default function ScrollToTopMobile() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const updateScroll = () => {
      const scrollHeight = document.documentElement.scrollHeight;
      const clientHeight = document.documentElement.clientHeight;
      const scrollTop = window.scrollY;

      const totalScrollable = scrollHeight - clientHeight;

      if (totalScrollable <= 0) return;

      const currentProgress = (scrollTop / totalScrollable) * 100;

      setProgress(Math.round(currentProgress));
    };

    window.addEventListener("scroll", updateScroll, { passive: true });
    window.addEventListener("resize", updateScroll);

    updateScroll();

    return () => {
      window.removeEventListener("scroll", updateScroll);
      window.removeEventListener("resize", updateScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const circumference = 2 * Math.PI * 20;
  const offset = circumference - (progress / 100) * circumference;

  return (
    <button
      onClick={scrollToTop}
      className="voltar-para-o-topo-mobile icone progress-mobile"
      aria-label="Voltar ao topo"
    >
      <svg className="progress-ring" viewBox="0 0 56 56">
        <circle
          cx="28"
          cy="28"
          r="20"
          stroke="currentColor"
          strokeWidth="3"
          fill="transparent"
          className="progress-bg"
        />
        <circle
          cx="28"
          cy="28"
          r="20"
          stroke="currentColor"
          strokeWidth="3"
          fill="transparent"
          strokeDasharray={circumference}
          style={{
            strokeDashoffset: offset,
          }}
          className="progress-bar"
        />
      </svg>

      <div className="progress-text">
        <span>{progress}%</span>
      </div>
    </button>
  );
}
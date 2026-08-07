"use client";

import { useEffect, useState } from "react";
import { FaChevronUp } from "react-icons/fa";
import "./ScrollToTop.scss";

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const updateScroll = () => setIsVisible(window.scrollY > 260);
    window.addEventListener("scroll", updateScroll, { passive: true });
    updateScroll();
    return () => window.removeEventListener("scroll", updateScroll);
  }, []);

  return (
    <button
      type="button"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className={`scroll-button ${isVisible ? "visible" : "hidden"}`}
      aria-label="Voltar ao topo"
    >
      <FaChevronUp aria-hidden="true" />
    </button>
  );
}

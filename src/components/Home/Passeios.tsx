"use client";

import Link from "next/link";
import { useState } from "react";


type VideoItem = {
  src: string;
  poster?: string;
};

const cavalos: VideoItem[] = [
  { src: "/assets/imgs-site/Pocoto.mp4" },
  { src: "/assets/imgs-site/novas-fotos/cavalo1.mp4" },
  { src: "/assets/imgs-site/novas-fotos/cavalo2.mp4" },
  { src: "/assets/imgs-site/novas-fotos/cavalo3.mp4" },
  { src: "/assets/imgs-site/novas-fotos/cavalo5.mp4" },
  { src: "/assets/imgs-site/novas-fotos/cavalo6.mp4" },
  { src: "/assets/imgs-site/novas-fotos/cavalo7.mp4" },
  { src: "/assets/imgs-site/cavalinho/cavalo1-video.mp4" },
  { src: "/assets/imgs-site/cavalinho/cavalo2-video.mp4" },
  { src: "/assets/imgs-site/cavalinho/cavalo3-video.mp4" },
  { src: "/assets/imgs-site/cavalinho/cavalo4-video.mp4" },
];

const nauticos: VideoItem[] = [
  {
    src: "/assets/imgs-site/novas-fotos/jetski1.mp4",
    poster: "/assets/imgs-site/nautico/nautico5.webp",
  },
  {
    src: "/assets/imgs-site/novas-fotos/lancha1.mp4",
  },
  {
    src: "/assets/imgs-site/novas-fotos/lancha2.mp4",
    poster: "/assets/imgs-site/nautico/nautico7.webp",
  },
  {
    src: "/assets/imgs-site/novas-fotos/nautico1.mp4",
  },
  {
    src: "/assets/imgs-site/novas-fotos/nautico2.mp4",
    poster: "/assets/imgs-site/nautico/nautico8.webp",
  },
];

interface VideoCarouselProps {
  videos: VideoItem[];
  ariaLabel: string;
}

function VideoCarousel({ videos, ariaLabel }: VideoCarouselProps) {
  const [videoAtual, setVideoAtual] = useState(0);

  function mostrarAnterior() {
    setVideoAtual((indiceAtual) =>
      indiceAtual === 0 ? videos.length - 1 : indiceAtual - 1
    );
  }

  function mostrarProximo() {
    setVideoAtual((indiceAtual) =>
      indiceAtual === videos.length - 1 ? 0 : indiceAtual + 1
    );
  }

  const video = videos[videoAtual];

  return (
    <div className="carrossel-videos" aria-label={ariaLabel}>
      <div className="video-container">
        <video
          key={video.src}
          controls
          preload="metadata"
          poster={video.poster}
        >
          <source src={video.src} type="video/mp4" />
          Seu navegador não suporta vídeos.
        </video>

        <button
          type="button"
          className="carrossel-seta carrossel-seta-anterior"
          onClick={mostrarAnterior}
          aria-label="Mostrar vídeo anterior"
        >
          ‹
        </button>

        <button
          type="button"
          className="carrossel-seta carrossel-seta-proxima"
          onClick={mostrarProximo}
          aria-label="Mostrar próximo vídeo"
        >
          ›
        </button>
      </div>

      <div className="carrossel-indicadores">
        {videos.map((item, indice) => (
          <button
            type="button"
            key={item.src}
            className={indice === videoAtual ? "ativo" : ""}
            onClick={() => setVideoAtual(indice)}
            aria-label={`Mostrar vídeo ${indice + 1}`}
            aria-current={indice === videoAtual ? "true" : undefined}
          />
        ))}
      </div>
    </div>
  );
}

export default function Passeios() {
  return (
    <section className="passeios">
      <div className="passeio-item passeio-cavalos">
        <div className="passeio-texto">
          <h2>Passeios a cavalo e pônei</h2>

          <p>
            Promovemos passeios com cavalos e pôneis, além de fotos com
            animais adestrados para que cada hóspede guarde uma bela
            recordação da Toca das Corujas.
          </p>

          <Link className="passeio-link" href="/passeio-a-cavalo">
            Ver mais
          </Link>
        </div>

        <div className="passeio-midia">
          <VideoCarousel
            videos={cavalos}
            ariaLabel="Vídeos dos passeios a cavalo e pônei"
          />
        </div>
      </div>

      <div className="passeio-item passeio-invertido">
        <div className="passeio-midia">
          <VideoCarousel
            videos={nauticos}
            ariaLabel="Vídeos dos passeios náuticos"
          />
        </div>

        <div className="passeio-texto">
          <h2>Passeios náuticos</h2>

          <p>
            A Toca das Corujas oferece aos hóspedes acesso à prática de
            esportes náuticos. A Represa de Jurumirim fica a cerca de 30
            minutos e proporciona um cenário perfeito para esse tipo de
            atividade.
          </p>

          <Link className="passeio-link" href="/passeios-nauticos">
            Ver mais
          </Link>
        </div>
      </div>
    </section>
  );
}
"use client";

import Image from "next/image";
import { useState } from "react";

const ImageGallery = ({
  contratada,
  imageCount,
  className,
}: {
  contratada: string;
  imageCount: number;
  className?: string;
}) => {
  const images = Array.from(
    { length: imageCount },
    (_, i) =>
      `/imgs-contratadas/${contratada}-${String(i + 1).padStart(2, "0")}.webp`
  );

  const [modalImage, setModalImage] = useState<string | null>(null);

  const openModal = (src: string) => setModalImage(src);
  const closeModal = () => setModalImage(null);

  return (
    <>
      {images.map((src, idx) => (
        <Image
          key={idx}
          src={src}
          title={`Imagem ${idx + 1} de ${contratada}`}
          alt={`Imagem ${idx + 1} de ${contratada}`}
          width={600}
          height={400}
          className={`${className} img-responsive`}
          onClick={() => openModal(src)}
          onError={(e) => (e.currentTarget.style.display = "none")} // Oculta se não carregar
        />
      ))}

      {modalImage && (
        <div className="modal" onClick={closeModal}>
          <div className="container">
            <Image
              src={modalImage}
              alt="Imagem ampliada"
              width={800}
              height={600}
              className="rounded-lg"
            />
            <button className="closeModal" onClick={closeModal}>
              ✕
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default ImageGallery;

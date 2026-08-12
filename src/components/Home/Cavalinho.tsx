"use client";

import Image from "next/image";
import Link from "next/link";
import { FaArrowDown, FaPlay } from "react-icons/fa6";

interface FotoCavalinho {
  numero: number;
  titulo: string;
  descricao: string;
  video?: string;
}

const VIDEO_CAVALO_COM_MUSICA = "/assets/imgs-site/videos/cavalo-com-musica.mp4";

const fotosDestaque: FotoCavalinho[] = [
  {
    numero: 1,
    titulo: "Passeios inesquecíveis",
    descricao: "Momentos especiais em contato com a natureza",
  },
  {
    numero: 11,
    titulo: "Diversão em família",
    descricao: "Uma experiência para todas as idades",
    video: VIDEO_CAVALO_COM_MUSICA,
  },
  {
    numero: 3,
    titulo: "Cavalos e pôneis",
    descricao: "Carinho, tranquilidade e boas lembranças",
  },
];

const fotosExtras: FotoCavalinho[] = [
  { numero: 4, titulo: "Natureza ao redor", descricao: "Cenários que tornam o passeio ainda mais bonito" },
  { numero: 5, titulo: "Experiência no campo", descricao: "Um passeio leve e cheio de descobertas" },
  { numero: 6, titulo: "Boas lembranças", descricao: "Registros para guardar com carinho" },
  { numero: 7, titulo: "Momentos especiais", descricao: "Diversão e tranquilidade em cada passeio" },
  { numero: 8, titulo: "Contato com os animais", descricao: "Uma experiência próxima e acolhedora" },
  { numero: 9, titulo: "Aventura tranquila", descricao: "Passeios em um ambiente agradável" },
  { numero: 10, titulo: "Diversão ao ar livre", descricao: "Tempo de qualidade junto à natureza" },
  { numero: 2, titulo: "Passeio em família", descricao: "Memórias que ficam para sempre" },
  { numero: 12, titulo: "Encanto do interior", descricao: "A simplicidade e a beleza da vida no campo" },
  { numero: 13, titulo: "Toca das Corujas", descricao: "Experiências preparadas com carinho" },
  { numero: 14, titulo: "Mais momentos", descricao: "Conheça outros registros dos nossos passeios" },
];

const fotosCavalos: Record<number, string> = {
  1: "/assets/toca-das-corujas/foto-03.webp",
  2: "/assets/toca-das-corujas/foto-07.webp",
  3: "/assets/toca-das-corujas/foto-10.webp",
  4: "/assets/toca-das-corujas/foto-11.webp",
  5: "/assets/toca-das-corujas/foto-15.webp",
  6: "/assets/toca-das-corujas/foto-16.webp",
  7: "/assets/toca-das-corujas/foto-17.webp",
  8: "/assets/toca-das-corujas/foto-26.webp",
  9: "/assets/toca-das-corujas/foto-27.webp",
  10: "/assets/toca-das-corujas/foto-29.webp",
  11: "/assets/toca-das-corujas/foto-30.webp",
  12: "/assets/toca-das-corujas/foto-31.webp",
  13: "/assets/toca-das-corujas/foto-33.webp",
  14: "/assets/toca-das-corujas/foto-34.webp",
};

const caminho = (numero: number) => fotosCavalos[numero];

const galeriaUrl =
  "https://photos.google.com/share/AF1QipO6f9j0_bksZWO0Itbvh6H1pl3D1VkQnl05augD3-tAzWIdXIvnKddjP85rReFIAA/memory/AF1QipMT_2AkCW0zasrmOITahWgHO8x1u_uB14yetH3kjNwIPHFFuAT8fm1dkeSdcErIXA?key=bjhxOHpJRkFRRHdWZ0NRT3h2aGdYc250alJtNE1B";

function FotoCard({
  foto,
  destaque = false,
  indice,
}: {
  foto: FotoCavalinho;
  destaque?: boolean;
  indice: number;
}) {
  return (
    <figure
      className={`cavalinho-foto-card${destaque ? " cavalinho-foto-card--destaque" : ""}${foto.video ? " cavalinho-foto-card--video" : ""}`}
    >
      {foto.video ? (
        <video
          src={foto.video}
          controls
          playsInline
          preload="metadata"
          aria-label={`${foto.titulo} na Toca das Corujas`}
        >
          Seu navegador não suporta vídeos HTML5.
        </video>
      ) : (
        <Image
          src={caminho(foto.numero)}
          alt={`${foto.titulo} na Toca das Corujas`}
          width={760}
          height={760}
          sizes={
            destaque
              ? "(max-width: 600px) 100vw, (max-width: 900px) 100vw, 62vw"
              : "(max-width: 600px) 100vw, (max-width: 900px) 50vw, 32vw"
          }
        />
      )}

      <figcaption>
        <span>{String(indice + 1).padStart(2, "0")}</span>
        <div>
          <strong>{foto.titulo}</strong>
          <small>{foto.descricao}</small>
        </div>
      </figcaption>
    </figure>
  );
}

export default function Cavalinho() {
  return (
    <section className="cavalinho">
      <div className="cavalinho-intro">
        <div className="text-cavalinho">
          <span className="cavalinho-kicker">Natureza, carinho e aventura</span>

          <h2>O melhor passeio a cavalo da região</h2>

          <p>
            Nossa missão é proporcionar experiências únicas e memoráveis por
            meio dos passeios com cavalos e pôneis.
          </p>

          <div className="drive-cavalinho">
            <Link
              href={galeriaUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Abrir galeria dos passeios no Google Fotos"
            >
              <FaPlay aria-hidden="true" />
            </Link>

            <div className="drive-cavalinho-texto">
              <strong>Veja nossos melhores momentos</strong>
              <span>Clique no play para abrir a galeria completa</span>
            </div>
          </div>
        </div>

        <div className="cavalinho-destaque">
          <Image
            src={caminho(11)}
            alt="Passeio a cavalo na Toca das Corujas"
            width={720}
            height={620}
            sizes="(max-width: 900px) 100vw, 48vw"
          />

          <div className="cavalinho-selo">
            <strong>Experiência para toda a família</strong>
            <span>Cavalos e pôneis em contato com a natureza</span>
          </div>
        </div>
      </div>

      <div className="cavalinho-galeria-preview">
        {fotosDestaque.map((foto, indice) => (
          <FotoCard
            key={foto.numero}
            foto={foto}
            indice={indice}
            destaque={indice === 0}
          />
        ))}
      </div>

      <div className="galeria-cavalinho">
        <details className="cavalinho-details">
          <summary className="cavalinho-summary">
            <span className="cavalinho-summary-mark" aria-hidden="true">
              +
            </span>

            <span className="cavalinho-summary-copy">
              <strong className="summary-fechado">Ver mais imagens</strong>
              <strong className="summary-aberto">Recolher galeria</strong>
              <small>Explore outros momentos dos passeios</small>
            </span>

            <span className="cavalinho-summary-arrow" aria-hidden="true">
              <FaArrowDown />
            </span>
          </summary>

          <div className="cavalinho-galeria-expandida">
            <div className="cavalinho-galeria-cabecalho">
              <span>Galeria de experiências</span>
              <h3>Mais momentos na Toca das Corujas</h3>
              <p>
                Uma seleção de registros dos passeios, do contato com os animais
                e das paisagens que fazem parte dessa experiência.
              </p>
            </div>

            <div className="cavalinho-galeria-grid">
              {fotosExtras.map((foto, indice) => (
                <FotoCard
                  key={foto.numero}
                  foto={foto}
                  indice={indice + fotosDestaque.length}
                />
              ))}
            </div>

            <Link
              className="cavalinho-album-link"
              href={galeriaUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              Abrir álbum completo
              <span aria-hidden="true">↗</span>
            </Link>
          </div>
        </details>
      </div>
    </section>
  );
}

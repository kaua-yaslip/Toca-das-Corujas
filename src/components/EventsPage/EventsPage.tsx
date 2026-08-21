import Image from "next/image";
import Link from "next/link";
import {
  FaArrowRight,
  FaCalendarDays,
  FaClock,
  FaFacebookF,
  FaInstagram,
  FaLocationDot,
  FaWhatsapp,
} from "react-icons/fa6";
import styles from "./EventsPage.module.scss";

const instagramUrl = "https://www.instagram.com/hoteltocadascorujas/";
const facebookUrl = "https://www.facebook.com/hoteltocadascorujas";
const eventWhatsapp =
  "https://wa.me/5511972763604?text=Olá!%20Vi%20o%20Workshop%20de%20Constelação%20Familiar%20com%20Cavalos%20no%20site%20da%20Toca%20das%20Corujas%20e%20gostaria%20de%20mais%20informações.";

const eventImages = [
  {
    src: "/assets/imgs-site/eventos/constelacao-familiar-01.webp",
    alt: "Workshop Constelação Familiar com Cavalos na Toca das Corujas",
  },
  {
    src: "/assets/imgs-site/eventos/constelacao-familiar-02.webp",
    alt: "Programação do Workshop de Constelação Familiar com Cavalos em Angatuba",
  },
  {
    src: "/assets/imgs-site/eventos/constelacao-familiar-03.webp",
    alt: "Divulgação do Workshop Constelação Familiar com Cavalos com Dani Rocha",
  },
];

export default function EventsPage() {
  return (
    <main className={styles.eventsPage}>
      <section className={styles.hero}>
        <div className={styles.heroGlow} aria-hidden="true" />
        <div className={styles.heroContent}>
          <span className={styles.eyebrow}>Agenda Toca das Corujas</span>
          <h1>Eventos que aproximam pessoas, natureza e novas experiências.</h1>
          <p>
            Confira os próximos encontros realizados na Toca das Corujas e acompanhe
            nossas redes sociais para receber novidades, novas datas e registros de
            cada experiência.
          </p>
          <div className={styles.heroActions}>
            <Link href="#proximo-evento" className={styles.primaryButton}>
              Ver próximo evento <FaArrowRight aria-hidden="true" />
            </Link>
            <Link
              href={instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.secondaryButton}
            >
              <FaInstagram aria-hidden="true" /> Instagram
            </Link>
            <Link
              href={facebookUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.secondaryButton}
            >
              <FaFacebookF aria-hidden="true" /> Facebook
            </Link>
          </div>
        </div>

        <div className={styles.heroAside} aria-hidden="true">
          <span>12</span>
          <small>SET<br />2026</small>
        </div>
      </section>

      <section id="proximo-evento" className={styles.featuredSection}>
        <div className={styles.sectionIntro}>
          <span className={styles.sectionTag}>Próximo evento</span>
          <h2>Workshop Constelação Familiar com Cavalos</h2>
          <p>
            Uma vivência conduzida por Dani Rocha, em contato com os cavalos e com a
            natureza da Toca das Corujas, em Angatuba.
          </p>
        </div>

        <article className={styles.featuredCard}>
          <div className={styles.featuredImage}>
            <Image
              src={eventImages[0].src}
              alt={eventImages[0].alt}
              fill
              sizes="(max-width: 900px) 100vw, 50vw"
              priority
            />
          </div>

          <div className={styles.featuredContent}>
            <span className={styles.eventLabel}>Constelação familiar com cavalos</span>
            <h3>Vivências reais que transformam sua história.</h3>
            <p>
              Um encontro voltado à conexão, reconexão e transformação em um ambiente
              acolhedor, cercado pela natureza e pela presença dos cavalos.
            </p>

            <div className={styles.eventDetails}>
              <div>
                <FaCalendarDays aria-hidden="true" />
                <span><strong>12 de setembro de 2026</strong><small>Sábado</small></span>
              </div>
              <div>
                <FaClock aria-hidden="true" />
                <span><strong>11h às 16h</strong><small>Programação especial</small></span>
              </div>
              <div>
                <FaLocationDot aria-hidden="true" />
                <span><strong>Toca das Corujas</strong><small>Angatuba - SP</small></span>
              </div>
            </div>

            <div className={styles.includesBox}>
              <span>A experiência inclui</span>
              <p>Constelação individual, Reiki com cavalos e breakfast incluso.</p>
            </div>

            <Link
              href={eventWhatsapp}
              target="_blank"
              rel="noopener noreferrer nofollow"
              className={styles.whatsappButton}
            >
              <FaWhatsapp aria-hidden="true" />
              Consultar últimas vagas
            </Link>
          </div>
        </article>
      </section>

      <section className={styles.gallerySection}>
        <div className={styles.galleryHeading}>
          <div>
            <span className={styles.sectionTag}>Confira os detalhes</span>
            <h2>Materiais do próximo encontro</h2>
          </div>
          <p>
            Veja as informações divulgadas para o evento. Para confirmar horários,
            disponibilidade e participação, fale diretamente pelo WhatsApp.
          </p>
        </div>

        <div className={styles.galleryGrid}>
          {eventImages.map((image, index) => (
            <figure className={styles.galleryItem} key={image.src}>
              <Image
                src={image.src}
                alt={image.alt}
                fill
                sizes="(max-width: 700px) 100vw, (max-width: 1100px) 50vw, 33vw"
              />
              <figcaption>Material {String(index + 1).padStart(2, "0")}</figcaption>
            </figure>
          ))}
        </div>
      </section>

      <section className={styles.socialSection}>
        <div className={styles.socialText}>
          <span className={styles.sectionTagLight}>Acompanhe a Toca</span>
          <h2>Novos eventos também chegam primeiro nas nossas redes.</h2>
          <p>
            Siga a Toca das Corujas para acompanhar fotos, vídeos, novidades e os
            próximos encontros realizados por aqui.
          </p>
        </div>

        <div className={styles.socialCards}>
          <Link
            href={instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.socialCard}
          >
            <FaInstagram aria-hidden="true" />
            <span><small>Instagram</small><strong>@hoteltocadascorujas</strong></span>
            <FaArrowRight className={styles.socialArrow} aria-hidden="true" />
          </Link>

          <Link
            href={facebookUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.socialCard}
          >
            <FaFacebookF aria-hidden="true" />
            <span><small>Facebook</small><strong>Hotel Toca das Corujas</strong></span>
            <FaArrowRight className={styles.socialArrow} aria-hidden="true" />
          </Link>
        </div>
      </section>
    </main>
  );
}

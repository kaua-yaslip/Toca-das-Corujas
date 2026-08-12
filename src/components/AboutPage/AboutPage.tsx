import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  BedDouble,
  Fish,
  MapPin,
  PartyPopper,
  Sparkles,
  Trees,
  UtensilsCrossed,
  Waves,
} from "lucide-react";
import styles from "./AboutPage.module.scss";

const VIDEO_ORIGINAL = "/assets/imgs-site/videos/video-original-mulher.mp4";
const VIDEO_ORIGINAL_POSTER = "/assets/imgs-site/sobre/video-original-poster.webp";

const experiences = [
  {
    icon: BedDouble,
    title: "Hospedagem acolhedora",
    text: "Ambientes confortáveis para descansar e aproveitar Angatuba com tranquilidade.",
  },
  {
    icon: PartyPopper,
    title: "Eventos especiais",
    text: "Estrutura para festas, confraternizações, encontros e celebrações inesquecíveis.",
  },
  {
    icon: Trees,
    title: "Natureza e aventura",
    text: "Áreas verdes, passeios, cavalos e atividades para viver o melhor do campo.",
  },
  {
    icon: UtensilsCrossed,
    title: "Estrutura completa",
    text: "Salão de festas, cozinha com churrasqueira, piscina, saunas e espaços de lazer.",
  },
];

// Mais fotos na página Sobre, como solicitado. As imagens finais podem ser
// substituídas mantendo exatamente estes caminhos.
const gallery = [
  { src: "/assets/imgs-site/sobre/galeria-01.webp", alt: "Área externa da Toca das Corujas", className: styles.galleryWide },
  { src: "/assets/imgs-site/sobre/galeria-02.webp", alt: "Piscina da Toca das Corujas", className: styles.galleryTall },
  { src: "/assets/imgs-site/sobre/galeria-03.webp", alt: "Espaço interno para eventos", className: "" },
  { src: "/assets/imgs-site/sobre/galeria-04.webp", alt: "Passeio com cavalos na propriedade", className: "" },
  { src: "/assets/imgs-site/sobre/galeria-05.webp", alt: "Varanda e área de convivência", className: styles.galleryTall },
  { src: "/assets/imgs-site/sobre/galeria-06.webp", alt: "Natureza e área verde do hotel fazenda", className: "" },
  { src: "/assets/imgs-site/sobre/galeria-07.webp", alt: "Acomodações da Toca das Corujas", className: styles.galleryWide },
  { src: "/assets/imgs-site/sobre/galeria-08.webp", alt: "Espaço de convivência da Toca das Corujas", className: "" },
  { src: "/assets/imgs-site/sobre/galeria-09.webp", alt: "Campo e área esportiva", className: "" },
  { src: "/assets/imgs-site/sobre/galeria-10.webp", alt: "Detalhes da estrutura do hotel fazenda", className: styles.galleryWide },
  { src: "/assets/imgs-site/sobre/galeria-11.webp", alt: "Momento de lazer em família", className: "" },
  { src: "/assets/imgs-site/sobre/galeria-12.webp", alt: "Paisagem da Toca das Corujas", className: styles.galleryTall },
  { src: "/assets/imgs-site/sobre/galeria-13.webp", alt: "Área de descanso da Toca das Corujas", className: "" },
  { src: "/assets/imgs-site/sobre/galeria-14.webp", alt: "Ambiente para hóspedes na Toca das Corujas", className: "" },
  { src: "/assets/imgs-site/sobre/galeria-15.webp", alt: "Outro espaço da Toca das Corujas", className: styles.galleryWide },
];

export default function AboutPage() {
  return (
    <main className={styles.aboutPage}>
      <section className={styles.hero}>
        <div className={styles.heroOverlay} />
        <div className={styles.heroContent}>
          <span className={styles.eyebrow}>Hotel fazenda em Angatuba</span>
          <h1>Um refúgio feito para viver bons momentos</h1>
          <p>
            Hospedagem, natureza, lazer e espaços para celebrar reunidos em um só lugar.
          </p>
          <div className={styles.heroActions}>
            <Link href="/lazer" className={styles.primaryButton}>
              Conheça o lazer <ArrowRight size={18} aria-hidden="true" />
            </Link>
            <Link href="/contato" className={styles.secondaryButton}>
              Fale com a equipe
            </Link>
          </div>
        </div>

        <div className={styles.heroLocation}>
          <MapPin size={18} aria-hidden="true" />
          <span>Angatuba, interior de São Paulo</span>
        </div>
      </section>

      <section className={styles.introSection}>
        <div className={styles.introImages}>
          <div className={styles.mainImage}>
            <Image
              src="/assets/imgs-site/sobre/sobre-destaque-01.webp"
              alt="Vista externa da Toca das Corujas"
              fill
              sizes="(max-width: 900px) 100vw, 52vw"
              priority
            />
          </div>
          <div className={styles.secondaryImage}>
            <Image
              src="/assets/imgs-site/sobre/sobre-destaque-02.webp"
              alt="Ambiente interno e acolhedor da Toca das Corujas"
              fill
              sizes="(max-width: 900px) 48vw, 24vw"
            />
          </div>
          <div className={styles.imageSeal}>
            <Sparkles size={22} aria-hidden="true" />
            <span>Natureza, lazer e acolhimento</span>
          </div>
        </div>

        <div className={styles.introText}>
          <span className={styles.sectionTag}>Sobre a Toca das Corujas</span>
          <h2>Muito mais do que uma hospedagem</h2>
          <p>
            A Toca das Corujas reúne a tranquilidade do campo com uma estrutura pensada
            para receber hóspedes, famílias, grupos e convidados. Cada espaço convida a
            desacelerar, respirar ar puro e aproveitar o tempo com quem realmente importa.
          </p>
          <p>
            Além das acomodações, o local oferece salão de festas com palco, cozinha com
            churrasqueira, piscina, pesca, sauna seca e a vapor, campo de futebol, cavalos,
            pôneis e diferentes opções de lazer em meio à natureza.
          </p>
          <div className={styles.signatureLine}>
            <span />
            <strong>Experiências que ficam na memória</strong>
          </div>
        </div>
      </section>

      <section className={styles.originalVideoSection} aria-labelledby="video-original-titulo">
        <div className={styles.originalVideoText}>
          <span className={styles.sectionTag}>Conheça de perto</span>
          <h2 id="video-original-titulo">Um pouco da Toca das Corujas em vídeo</h2>
          <p>
            Este espaço foi reservado para o vídeo original, com a apresentação falada,
            mantendo o registro mais próximo e pessoal da experiência no hotel fazenda.
          </p>
        </div>

        <div className={styles.originalVideoFrame}>
          <video controls playsInline preload="metadata" poster={VIDEO_ORIGINAL_POSTER}>
            <source src={VIDEO_ORIGINAL} type="video/mp4" />
            Seu navegador não suporta vídeos HTML5.
          </video>
        </div>
      </section>

      <section className={styles.experienceSection}>
        <div className={styles.sectionHeading}>
          <div>
            <span className={styles.sectionTag}>Tudo em um só lugar</span>
            <h2>Uma experiência completa no interior</h2>
          </div>
          <p>
            Do descanso à comemoração, cada ambiente foi pensado para tornar a estadia
            leve, agradável e cheia de possibilidades.
          </p>
        </div>

        <div className={styles.experienceGrid}>
          {experiences.map(({ icon: Icon, title, text }) => (
            <article className={styles.experienceCard} key={title}>
              <div className={styles.iconBox}>
                <Icon size={28} strokeWidth={1.7} aria-hidden="true" />
              </div>
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className={styles.highlightsSection}>
        <div className={styles.highlightsImage}>
          <Image
            src="/assets/imgs-site/sobre/sobre-lazer-destaque.webp"
            alt="Momento de lazer na Toca das Corujas"
            fill
            sizes="(max-width: 900px) 100vw, 45vw"
          />
        </div>

        <div className={styles.highlightsContent}>
          <span className={styles.sectionTagLight}>Viva o espaço</span>
          <h2>Diversão e descanso no ritmo da natureza</h2>
          <p>
            Aqui, cada pessoa escolhe como aproveitar o dia: descansar perto da piscina,
            pescar, caminhar pelas áreas verdes, reunir a família ou celebrar uma ocasião
            especial.
          </p>

          <div className={styles.highlightList}>
            <div>
              <Fish size={24} aria-hidden="true" />
              <span>4 lagos para pesca</span>
            </div>
            <div>
              <Waves size={24} aria-hidden="true" />
              <span>Piscina e saunas</span>
            </div>
            <div>
              <Trees size={24} aria-hidden="true" />
              <span>Contato com a natureza</span>
            </div>
            <div>
              <PartyPopper size={24} aria-hidden="true" />
              <span>Espaços para eventos</span>
            </div>
          </div>

          <Link href="/contato" className={styles.lightButton}>
            Planeje sua visita <ArrowRight size={18} aria-hidden="true" />
          </Link>
        </div>
      </section>

      <section className={styles.gallerySection}>
        <div className={styles.galleryHeading}>
          <div>
            <span className={styles.sectionTag}>Galeria de imagens</span>
            <h2>Conheça mais espaços da Toca das Corujas</h2>
          </div>
          <p>
            Uma seleção maior de ambientes, paisagens e experiências para mostrar com
            mais detalhes tudo o que faz parte do hotel fazenda.
          </p>
        </div>

        <div className={styles.galleryGrid}>
          {gallery.map((image, index) => (
            <figure className={`${styles.galleryItem} ${image.className}`} key={image.src}>
              <Image
                src={image.src}
                alt={image.alt}
                fill
                sizes="(max-width: 650px) 100vw, (max-width: 1000px) 50vw, 33vw"
              />
              <span>{String(index + 1).padStart(2, "0")}</span>
            </figure>
          ))}
        </div>
      </section>

      <section className={styles.ctaSection}>
        <div className={styles.ctaOverlay} />
        <div className={styles.ctaContent}>
          <span>Seu próximo momento especial começa aqui</span>
          <h2>Venha conhecer a Toca das Corujas</h2>
          <p>
            Entre em contato e descubra as possibilidades de hospedagem, lazer e eventos.
          </p>
          <Link href="/contato">
            Solicitar informações <ArrowRight size={18} aria-hidden="true" />
          </Link>
        </div>
      </section>
    </main>
  );
}

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

const gallery = [
  { src: "/card-backgrounds/hospedagem-exterior.webp", alt: "Área externa da Toca das Corujas", className: styles.galleryWide },
  { src: "/card-backgrounds/piscina.webp", alt: "Piscina da Toca das Corujas", className: styles.galleryTall },
  { src: "/card-backgrounds/eventos-salao.webp", alt: "Espaço interno para eventos", className: "" },
  { src: "/card-backgrounds/cavalos-grupo.webp", alt: "Passeio com cavalos na propriedade", className: "" },
  { src: "/card-backgrounds/varanda.webp", alt: "Varanda e área de convivência", className: styles.galleryTall },
  { src: "/card-backgrounds/natureza.webp", alt: "Natureza e área verde do hotel fazenda", className: "" },
  { src: "/card-backgrounds/acomodacoes.webp", alt: "Acomodações da Toca das Corujas", className: styles.galleryWide },
  { src: "/card-backgrounds/gastronomia.webp", alt: "Gastronomia servida no espaço", className: "" },
  { src: "/card-backgrounds/campo-quadra.webp", alt: "Campo e área esportiva", className: "" },
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
              src="/card-backgrounds/hospedagem-exterior.webp"
              alt="Vista externa da Toca das Corujas"
              fill
              sizes="(max-width: 900px) 100vw, 52vw"
              priority
            />
          </div>
          <div className={styles.secondaryImage}>
            <Image
              src="/card-backgrounds/acomodacoes.webp"
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
            src="/card-backgrounds/pesca.webp"
            alt="Momento de pesca na Toca das Corujas"
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
            <h2>Conheça alguns dos nossos espaços</h2>
          </div>
          <p>
            Um pequeno passeio visual por ambientes feitos para descansar, celebrar e
            aproveitar o melhor do interior paulista.
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

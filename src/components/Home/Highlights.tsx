import Image from "next/image";

const cards = [
  { imagem: "/assets/toca-das-corujas/foto-04.webp", titulo: "Nosso recinto geral", alt: "Recinto geral da Toca das Corujas" },
  { imagem: "/assets/toca-das-corujas/foto-18.webp", titulo: "Piscina", alt: "Piscina da Toca das Corujas" },
  { imagem: "/assets/toca-das-corujas/foto-21.webp", titulo: "Cozinha", alt: "Cozinha da Toca das Corujas" },
];

export default function Highlights() {
  return (
    <section className="second" aria-label="Destaques da Toca das Corujas">
      <div className="base">
        <div className="cards">
          {cards.map((card) => (
            <article className="card" key={card.titulo}>
              <Image className="imagem-card" src={card.imagem} alt={card.alt} width={380} height={700} />
              <span>{card.titulo}</span>
              <Image className="coruja" src="/assets/imgs-site/logo-icon.png" alt="" width={50} height={50} aria-hidden="true" />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

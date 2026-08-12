import Image from "next/image";

const cards = [
  { imagem: "/assets/toca-das-corujas/foto-04.webp", titulo: "Nosso recinto geral", alt: "Recinto geral da Toca das Corujas" },
  { imagem: "/assets/toca-das-corujas/foto-18.webp", titulo: "Piscina", alt: "Piscina da Toca das Corujas" },
  { imagem: "/assets/toca-das-corujas/foto-21.webp", titulo: "Cozinha", alt: "Cozinha da Toca das Corujas" },
];

const CORUJAS_DESTAQUE = "/assets/imgs-site/corujas/coruja-mae-filhote.png";

export default function Highlights() {
  return (
    <section className="second" aria-label="Destaques da Toca das Corujas">
      <div className="base">
        <div className="cards">
          {cards.map((card) => (
            <article className="card" key={card.titulo}>
              <Image className="imagem-card" src={card.imagem} alt={card.alt} width={380} height={700} />
              <span>{card.titulo}</span>
              <Image
                className="coruja"
                src={CORUJAS_DESTAQUE}
                alt="Corujas da Toca das Corujas"
                width={90}
                height={120}
              />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

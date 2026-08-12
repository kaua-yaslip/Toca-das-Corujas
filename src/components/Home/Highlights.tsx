import Image from "next/image";

const cards = [
  { imagem: "/assets/toca-das-corujas/foto-04.webp", titulo: "Nosso recinto geral", alt: "Recinto geral da Toca das Corujas" },
  { imagem: "/assets/toca-das-corujas/foto-18.webp", titulo: "Piscina", alt: "Piscina da Toca das Corujas" },
  { imagem: "/assets/toca-das-corujas/foto-21.webp", titulo: "Cozinha", alt: "Cozinha da Toca das Corujas" },
];

// Ícone enviado para substituir o símbolo antigo da coruja nos cards.
const CORUJA_DESTAQUE = "/assets/imgs-site/corujas/corujaicone.png";

export default function Highlights() {
  return (
    <section className="second" aria-label="Destaques da Toca das Corujas">
      <div className="base">
        <div className="cards">
          {cards.map((card) => (
            <article className="card" key={card.titulo}>
              <Image
                className="imagem-card"
                src={card.imagem}
                alt={card.alt}
                width={380}
                height={700}
              />

              <span>{card.titulo}</span>

              <div className="coruja-icone">
                <Image
                  className="coruja"
                  src={CORUJA_DESTAQUE}
                  alt="Coruja com filhote"
                  width={92}
                  height={122}
                />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

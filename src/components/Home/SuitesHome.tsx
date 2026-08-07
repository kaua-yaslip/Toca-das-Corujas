import Image from "next/image";

const imagens = [
  {
    src: "/assets/toca-das-corujas/foto-48.webp",
    alt: "Lago e área de lazer da Toca das Corujas",
  },
  {
    src: "/assets/toca-das-corujas/foto-08.webp",
    alt: "Experiência de lazer na Toca das Corujas",
  },
  {
    src: "/assets/toca-das-corujas/foto-12.webp",
    alt: "Vista da represa próxima à Toca das Corujas",
  },
];

export default function SuitesHome() {
  return (
    <section className="suites">
      <div className="suites-overlay" />

      <div className="suites-conteudo">
        <div className="texto-suites">
          <span>Suítes para todos os gostos</span>

          <h2>
            Nossas Suítes de Luxo na Toca das Corujas são o ápice do conforto e
            elegância, oferecendo um santuário tranquilo para os nossos hóspedes.
          </h2>
        </div>

        <div className="comidas-suites">
          {imagens.map((imagem, index) => (
            <div
              className={`suites-imagem suites-imagem-${index + 1}`}
              key={imagem.src}
            >
              <Image
                src={imagem.src}
                alt={imagem.alt}
                width={700}
                height={900}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

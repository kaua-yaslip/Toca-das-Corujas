import Image from "next/image";

const suites = [
  {
    nome: "Suíte Standard",
    descricao:
      "A opção mais simples e aconchegante, com quarto revestido em azulejos, uma cama de casal e uma beliche.",
    src: "/assets/imgs-site/suites/ImagensSuites1.jpeg",
    alt: "Suíte Standard da Toca das Corujas com quarto revestido em azulejos",
  },
  {
    nome: "Suíte Luxo",
    descricao:
      "Uma suíte com visual renovado e varanda, ideal para quem procura mais conforto sem perder o clima acolhedor do hotel fazenda.",
    src: "/assets/imgs-site/suites/ImagensSuites7.jpeg",
    alt: "Suíte Luxo renovada da Toca das Corujas com acesso à varanda",
  },
  {
    nome: "Suíte Master",
    descricao:
      "Nossa categoria mais completa, indicada para quem deseja uma estadia com mais comodidades e suítes com banheira.",
    src: "/assets/imgs-site/suites/ImagensSuites4.jpeg",
    alt: "Banheiro da Suíte Master da Toca das Corujas",
  },
];

export default function SuitesHome() {
  return (
    <section className="suites" aria-labelledby="suites-home-titulo">
      <div className="suites-overlay" aria-hidden="true" />

      <div className="suites-conteudo">
        <div className="texto-suites">
          <span>3 tipos de suíte</span>

          <h2 id="suites-home-titulo">
            Standard, Luxo e Master para diferentes estilos de hospedagem.
          </h2>

          <p>
            Escolha a acomodação que combina melhor com a sua estadia na Toca
            das Corujas, desde uma opção mais simples até suítes com mais
            conforto e comodidades.
          </p>
        </div>

        <div className="comidas-suites">
          {suites.map((suite, index) => (
            <article className="suites-item" key={suite.nome}>
              <div className="suites-imagem">
                <Image
                  src={suite.src}
                  alt={suite.alt}
                  width={1280}
                  height={960}
                  sizes="(max-width: 760px) 100vw, (max-width: 1100px) 50vw, 33vw"
                />
                <span className="suites-numero" aria-hidden="true">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </div>

              <div className="suites-informacoes">
                <h3>{suite.nome}</h3>
                <p>{suite.descricao}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

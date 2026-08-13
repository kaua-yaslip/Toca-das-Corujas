import Image from "next/image";

type Suite = {
  id: string;
  nome: string;
  descricao: string;
  fotos: { src: string; alt: string }[];
};

const suites: Suite[] = [
  {
    id: "suites-standard",
    nome: "Suíte Standard",
    descricao:
      "Uma opção acolhedora e prática, com cama de casal, ambiente confortável e detalhes pensados para uma estadia tranquila. Agora a suíte aparece com vários ângulos para mostrar melhor o quarto, a varanda e o banheiro.",
    fotos: [
      { src: "/assets/imgs-site/suites/ImagensSuites7.jpeg", alt: "Suíte Standard com cama de casal e acesso à varanda" },
      { src: "/assets/imgs-site/suites/ImagensSuites6.jpeg", alt: "Cama de casal da Suíte Standard" },
      { src: "/assets/imgs-site/suites/ImagensSuites3.jpeg", alt: "Outro ângulo do quarto da Suíte Standard" },
      { src: "/assets/imgs-site/suites/ImagensSuites2.jpeg", alt: "Área interna da Suíte Standard" },
      { src: "/assets/imgs-site/suites/ImagensSuites5.jpeg", alt: "Banheiro da Suíte Standard" },
    ],
  },
  {
    id: "suites-luxo",
    nome: "Suíte Luxo",
    descricao:
      "Uma acomodação renovada para quem procura mais conforto, com ambientes bem cuidados e uma apresentação mais completa de cada detalhe da suíte.",
    fotos: [
      { src: "/assets/imgs-site/suites/suite-luxo1.webp", alt: "Quarto da Suíte Luxo" },
      { src: "/assets/imgs-site/suites/suite-luxo2.webp", alt: "Outro ângulo da Suíte Luxo" },
      { src: "/assets/imgs-site/suites/suite-luxo4.webp", alt: "Detalhes da acomodação da Suíte Luxo" },
      { src: "/assets/imgs-site/suites/suite-luxo5.webp", alt: "Área interna da Suíte Luxo" },
      { src: "/assets/imgs-site/suites/suite-luxo6.webp", alt: "Conforto e acabamento da Suíte Luxo" },
    ],
  },
  {
    id: "suites-master",
    nome: "Suíte Master",
    descricao:
      "A categoria mais completa para quem deseja mais comodidade durante a hospedagem. A galeria reúne diferentes ângulos do quarto e dos espaços da suíte.",
    fotos: [
      { src: "/assets/imgs-site/suites/suite2-luxo1.webp", alt: "Quarto da Suíte Master" },
      { src: "/assets/imgs-site/suites/suite2-luxo2.webp", alt: "Outro ângulo da Suíte Master" },
      { src: "/assets/imgs-site/suites/suite2-luxo5.webp", alt: "Detalhes da Suíte Master" },
      { src: "/assets/imgs-site/suites/suite3-luxo4.webp", alt: "Área interna da Suíte Master" },
      { src: "/assets/imgs-site/suites/suite4-luxo2.webp", alt: "Ambiente da Suíte Master" },
    ],
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
            Standard, Luxo e Master com mais fotos para você conhecer cada detalhe.
          </h2>

          <p>
            Cada categoria agora reúne uma pequena galeria, mostrando diferentes
            ângulos das acomodações em vez de apenas uma única foto.
          </p>
        </div>

        <div className="comidas-suites">
          {suites.map((suite, index) => (
            <article className="suites-item" id={suite.id} key={suite.nome}>
              <div className="suites-informacoes">
                <span className="suites-numero" aria-hidden="true">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3>{suite.nome}</h3>
                <p>{suite.descricao}</p>
              </div>

              <div className="suites-galeria" aria-label={`Galeria de fotos da ${suite.nome}`}>
                {suite.fotos.map((foto, fotoIndex) => (
                  <figure
                    className={`suites-foto suites-foto--${fotoIndex + 1}`}
                    key={foto.src}
                  >
                    <Image
                      src={foto.src}
                      alt={foto.alt}
                      fill
                      sizes="(max-width: 760px) 100vw, (max-width: 1100px) 100vw, 58vw"
                    />
                  </figure>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

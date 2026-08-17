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
    nome: "Quarto Standard",
    descricao:
      "Quarto simples com uma cama de casal e um beliche, pensado para quem busca uma acomodação prática e confortável durante a estadia.",
    fotos: [
      { src: "/assets/imgs-site/suites/ImagensSuites7.jpeg", alt: "Quarto Standard com cama de casal e acesso à varanda" },
      { src: "/assets/imgs-site/suites/ImagensSuites6.jpeg", alt: "Cama de casal do Quarto Standard" },
      { src: "/assets/imgs-site/suites/ImagensSuites3.jpeg", alt: "Outro ângulo do Quarto Standard" },
      { src: "/assets/imgs-site/suites/ImagensSuites2.jpeg", alt: "Área interna do Quarto Standard" },
      { src: "/assets/imgs-site/suites/ImagensSuites5.jpeg", alt: "Banheiro do Quarto Standard" },
    ],
  },
  {
    id: "suites-premium",
    nome: "Quarto Premium",
    descricao:
      "Quartos com decoração azul, vermelha e amarela, além de opções com tapete vermelho ou azul. Cada ambiente possui uma composição própria e mais marcante.",
    fotos: [
      { src: "/assets/imgs-site/suites/motelFazenda03.jpg", alt: "Quarto Premium com decoração em tons vermelhos" },
      { src: "/assets/imgs-site/suites/motelFazenda05.jpg", alt: "Quarto Premium com detalhes em vermelho" },
      { src: "/assets/imgs-site/suites/motelFazenda15.jpg", alt: "Quarto Premium com decoração em azul e roxo" },
      { src: "/assets/imgs-site/suites/motelFazenda16.jpg", alt: "Quarto Premium com decoração azul" },
      { src: "/assets/imgs-site/suites/motelFazenda18.jpg", alt: "Outro ângulo do Quarto Premium azul" },
    ],
  },
  {
    id: "suites-master",
    nome: "Quarto Master",
    descricao:
      "Quartos com visual diferenciado, incluindo colunas gregas, camas redondas e opções com banheiras, para quem procura uma acomodação mais completa e temática.",
    fotos: [
      { src: "/assets/imgs-site/suites/motelFazenda04.jpg", alt: "Quarto Master com banheira" },
      { src: "/assets/imgs-site/suites/motelFazenda11.jpg", alt: "Quarto Master com cama redonda" },
      { src: "/assets/imgs-site/suites/motelFazenda12.jpg", alt: "Quarto Master com coluna decorativa" },
      { src: "/assets/imgs-site/suites/motelFazenda15.jpg", alt: "Quarto Master com coluna em estilo grego" },
      { src: "/assets/imgs-site/suites/motelFazenda22.jpg", alt: "Quarto Master com área de banho elevada" },
    ],
  },
];

const galeriaMotelFazenda = Array.from({ length: 24 }, (_, index) => {
  const numero = String(index + 1).padStart(2, "0");

  return {
    src: `/assets/imgs-site/suites/motelFazenda${numero}.jpg`,
    alt: `Acomodação da Toca das Corujas - foto ${index + 1}`,
  };
});

export default function SuitesHome() {
  return (
    <section className="suites" aria-labelledby="suites-home-titulo">
      <div className="suites-overlay" aria-hidden="true" />

      <div className="suites-conteudo">
        <div className="texto-suites">
          <span>3 tipos de quarto</span>

          <h2 id="suites-home-titulo">
            Standard, Premium e Master para diferentes estilos de hospedagem.
          </h2>

          <p>
            Conheça as características de cada categoria e veja mais fotos das
            acomodações disponíveis na Toca das Corujas.
          </p>
        </div>

        <div className="comidas-suites">
          {suites.map((suite, index) => (
            <article className="suites-item" id={suite.id} key={suite.nome}>
              {suite.id === "suites-premium" && (
                <span id="suites-luxo" className="suites-anchor-legado" aria-hidden="true" />
              )}

              <div className="suites-informacoes">
                <span className="suites-numero" aria-hidden="true">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3>{suite.nome}</h3>
                <p>{suite.descricao}</p>
              </div>

              <div className="suites-galeria" aria-label={`Galeria de fotos do ${suite.nome}`}>
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

        <section className="suites-galeria-completa" aria-labelledby="suites-galeria-completa-titulo">
          <div className="suites-galeria-completa-cabecalho">
            <span>Mais imagens</span>
            <h3 id="suites-galeria-completa-titulo">Galeria das acomodações</h3>
            <p>
              Confira todas as novas fotos adicionadas dos quartos e ambientes das suítes.
            </p>
          </div>

          <div className="suites-galeria-completa-grid">
            {galeriaMotelFazenda.map((foto, index) => (
              <figure
                className={`suites-galeria-completa-item suites-galeria-completa-item--${index + 1}`}
                key={foto.src}
              >
                <Image
                  src={foto.src}
                  alt={foto.alt}
                  fill
                  sizes="(max-width: 600px) 50vw, (max-width: 1000px) 33vw, 25vw"
                />
              </figure>
            ))}
          </div>
        </section>
      </div>
    </section>
  );
}

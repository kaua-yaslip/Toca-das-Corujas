import Image from "next/image";

// A galeria foi preparada para misturar entrada, estrutura, lazer, suítes e natureza.
// Basta colocar as imagens finais exatamente nos caminhos abaixo.
const fotos = [
  {
    src: "/assets/imgs-site/galeria-geral/entrada-01.webp",
    alt: "Entrada da Toca das Corujas",
  },
  {
    src: "/assets/imgs-site/galeria-geral/estrutura-01.webp",
    alt: "Estrutura e área de convivência da Toca das Corujas",
  },
  {
    src: "/assets/imgs-site/galeria-geral/lazer-01.webp",
    alt: "Área de lazer da Toca das Corujas",
  },
  {
    src: "/assets/imgs-site/galeria-geral/suite-01.webp",
    alt: "Suíte da Toca das Corujas",
  },
  {
    src: "/assets/imgs-site/galeria-geral/natureza-01.webp",
    alt: "Natureza ao redor da Toca das Corujas",
  },
  {
    src: "/assets/imgs-site/galeria-geral/entrada-02.webp",
    alt: "Outro registro da entrada da Toca das Corujas",
  },
  {
    src: "/assets/imgs-site/galeria-geral/cavalos-01.webp",
    alt: "Cavalos e experiências no campo na Toca das Corujas",
  },
  {
    src: "/assets/imgs-site/galeria-geral/piscina-01.webp",
    alt: "Piscina da Toca das Corujas",
  },
];

export default function GaleriaAtualizada() {
  return (
    <section className="galeria-atualizada" aria-labelledby="galeria-atualizada-titulo">
      <div className="galeria-atualizada-cabecalho">
        <span>Novos registros</span>
        <h2 id="galeria-atualizada-titulo">Conheça cada espaço da Toca das Corujas</h2>
        <p>
          A galeria reúne entrada, acomodações, áreas de convivência, lazer e momentos
          em contato com a natureza para você conhecer melhor cada detalhe da sua visita.
        </p>
      </div>

      <div className="galeria-atualizada-grid galeria-atualizada-grid--principal">
        {fotos.map((foto, indice) => (
          <figure
            className={`galeria-atualizada-item galeria-atualizada-item--${indice + 1}`}
            key={foto.src}
          >
            <Image
              src={foto.src}
              alt={foto.alt}
              width={1280}
              height={960}
              sizes="(max-width: 620px) 100vw, (max-width: 1000px) 50vw, 25vw"
            />
          </figure>
        ))}
      </div>
    </section>
  );
}

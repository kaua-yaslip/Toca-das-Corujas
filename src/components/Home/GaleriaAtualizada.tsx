import Image from "next/image";

const fotos = [
  { src: "/assets/imgs-site/galeria-geral/entrada-01.webp", alt: "Entrada da Toca das Corujas" },
  { src: "/assets/toca-das-corujas/foto-40.webp", alt: "Estrutura e área de convivência da Toca das Corujas" },
  { src: "/assets/imgs-site/suites/ImagensSuites7.jpeg", alt: "Suíte da Toca das Corujas" },
  { src: "/assets/toca-das-corujas/foto-18.webp", alt: "Piscina da Toca das Corujas" },
  { src: "/assets/imgs-site/galeria-geral/entrada-02.webp", alt: "Outro registro da entrada da Toca das Corujas" },
  { src: "/assets/toca-das-corujas/foto-21.webp", alt: "Cozinha da Toca das Corujas" },
  { src: "/assets/imgs-site/suites/ImagensSuites6.jpeg", alt: "Acomodação da Toca das Corujas" },
  { src: "/assets/toca-das-corujas/foto-32.webp", alt: "Área de lazer da Toca das Corujas" },
  { src: "/assets/imgs-site/galeria-geral/entrada-03.webp", alt: "Detalhe da entrada da Toca das Corujas" },
  { src: "/assets/toca-das-corujas/foto-38.webp", alt: "Natureza e área externa da Toca das Corujas" },
  { src: "/assets/imgs-site/suites/ImagensSuites4.jpeg", alt: "Banheiro de uma das suítes da Toca das Corujas" },
  { src: "/assets/imgs-site/galeria-geral/entrada-04.webp", alt: "Portão e acesso da Toca das Corujas" },
  { src: "/assets/toca-das-corujas/foto-47.webp", alt: "Área tranquila para descanso na Toca das Corujas" },
  { src: "/assets/imgs-site/suites/ImagensSuites5.jpeg", alt: "Detalhes de uma suíte da Toca das Corujas" },
  { src: "/assets/imgs-site/galeria-geral/entrada-05.webp", alt: "Paisagem próxima à entrada da Toca das Corujas" },
  { src: "/assets/toca-das-corujas/foto-06.webp", alt: "Espaços verdes da Toca das Corujas" },
  { src: "/assets/imgs-site/galeria-geral/entrada-06.webp", alt: "Mais um ângulo da entrada da Toca das Corujas" },
  { src: "/assets/imgs-site/suites/ImagensSuites3.jpeg", alt: "Quarto de uma das acomodações da Toca das Corujas" },
];

export default function GaleriaAtualizada() {
  return (
    <section className="galeria-atualizada" aria-labelledby="galeria-atualizada-titulo">
      <div className="galeria-atualizada-cabecalho">
        <span>Mais registros</span>
        <h2 id="galeria-atualizada-titulo">Conheça mais partes da Toca das Corujas</h2>
        <p>
          Adicionamos mais fotos e mesclamos registros da entrada, suítes, áreas de
          convivência, lazer, piscina, cozinha e natureza para mostrar melhor toda a propriedade.
        </p>
      </div>

      <div className="galeria-atualizada-grid galeria-atualizada-grid--principal">
        {fotos.map((foto, indice) => (
          <figure
            className={`galeria-atualizada-item galeria-atualizada-item--${indice + 1}`}
            key={`${foto.src}-${indice}`}
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

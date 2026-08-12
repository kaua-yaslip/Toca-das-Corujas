import Image from "next/image";

const fotos = [
  {
    src: "/assets/imgs-site/entrada-toca/EntradaToca1.jpeg",
    alt: "Entrada da Toca das Corujas com jardim e portal de madeira",
  },
  {
    src: "/assets/imgs-site/entrada-toca/EntradaToca2.jpeg",
    alt: "Vista ampla da entrada da Toca das Corujas",
  },
  {
    src: "/assets/imgs-site/entrada-toca/EntradaToca4.jpeg",
    alt: "Portal de entrada da Toca das Corujas em dia ensolarado",
  },
  {
    src: "/assets/imgs-site/entrada-toca/EntradaToca6.jpeg",
    alt: "Entrada da Toca das Corujas vista pela área externa",
  },
  {
    src: "/assets/imgs-site/entrada-toca/EntradaToca3.jpeg",
    alt: "Detalhe da placa Toca das Corujas no portal de entrada",
  },
  {
    src: "/assets/imgs-site/entrada-toca/EntradaToca5.jpeg",
    alt: "Portão principal da Toca das Corujas",
  },
];

export default function GaleriaAtualizada() {
  return (
    <section className="galeria-atualizada" aria-labelledby="galeria-atualizada-titulo">
      <div className="galeria-atualizada-cabecalho">
        <span>Novos registros</span>
        <h2 id="galeria-atualizada-titulo">Conheça cada espaço da Toca das Corujas</h2>
        <p>
          Veja alguns registros da entrada e dos primeiros detalhes que recebem
          você na Toca das Corujas antes mesmo de começar a sua estadia.
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

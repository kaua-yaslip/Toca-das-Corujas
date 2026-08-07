import Image from "next/image";

const fotos = Array.from({ length: 53 }, (_, indice) => ({
  src: `/assets/galeria-atualizada/galeria-${String(indice + 1).padStart(2, "0")}.webp`,
  alt: `Registro ${indice + 1} da Toca das Corujas`,
}));

export default function GaleriaAtualizada() {
  const fotosPrincipais = fotos.slice(0, 12);
  const fotosExtras = fotos.slice(12);

  return (
    <section className="galeria-atualizada" aria-labelledby="galeria-atualizada-titulo">
      <div className="galeria-atualizada-cabecalho">
        <span>Novos registros</span>
        <h2 id="galeria-atualizada-titulo">Conheça cada espaço da Toca das Corujas</h2>
        <p>
          A galeria reúne ambientes, acomodações, áreas de convivência e momentos com os
          animais para você conhecer melhor cada detalhe antes da sua visita.
        </p>
      </div>

      <div className="galeria-atualizada-grid galeria-atualizada-grid--principal">
        {fotosPrincipais.map((foto, indice) => (
          <figure className={`galeria-atualizada-item galeria-atualizada-item--${(indice % 6) + 1}`} key={foto.src}>
            <Image
              src={foto.src}
              alt={foto.alt}
              width={1200}
              height={900}
              sizes="(max-width: 620px) 100vw, (max-width: 980px) 50vw, 33vw"
            />
          </figure>
        ))}
      </div>

      <details className="galeria-atualizada-details">
        <summary>
          <span className="galeria-atualizada-mais">Ver todas as 53 imagens</span>
          <span className="galeria-atualizada-menos">Recolher galeria</span>
        </summary>

        <div className="galeria-atualizada-grid galeria-atualizada-grid--extra">
          {fotosExtras.map((foto, indice) => (
            <figure className={`galeria-atualizada-item galeria-atualizada-item--${(indice % 6) + 1}`} key={foto.src}>
              <Image
                src={foto.src}
                alt={foto.alt}
                width={1200}
                height={900}
                sizes="(max-width: 620px) 100vw, (max-width: 980px) 50vw, 25vw"
              />
            </figure>
          ))}
        </div>
      </details>
    </section>
  );
}

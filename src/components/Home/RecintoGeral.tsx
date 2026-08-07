import Image from "next/image";
import Link from "next/link";

const itens = [
  { imagem: "/assets/toca-das-corujas/foto-40.webp", titulo: "Refúgio na Natureza", subtitulo: "Onde o Moderno Encontra o Natural", texto: "Em Angatuba, a Toca das Corujas oferece um refúgio onde o conforto moderno se mistura à tranquilidade do campo.", lado: "imagem" },
  { imagem: "/assets/toca-das-corujas/foto-37.webp", titulo: "Sinfonia da Serenidade", subtitulo: "Música da Natureza", texto: "O som das folhas e o canto dos pássaros criam um ambiente de paz e tranquilidade incomparável.", lado: "texto" },
  { imagem: "/assets/toca-das-corujas/foto-06.webp", titulo: "Caminhos de Descoberta", subtitulo: "Explorando a Flora Vibrante", texto: "Passeie pelos caminhos da pousada e descubra recantos onde a natureza revela seus detalhes.", lado: "imagem" },
  { imagem: "/assets/toca-das-corujas/foto-18.webp", titulo: "Santuário de Paz", subtitulo: "Espaços para Introspecção", texto: "Encontre seu lugar sob as árvores ou próximo ao lago e aproveite momentos de contemplação.", lado: "texto" },
  { imagem: "/assets/toca-das-corujas/foto-47.webp", titulo: "Abraço do Sol", subtitulo: "Momentos de Relaxamento", texto: "Descanse em uma rede, leia um livro ou simplesmente aproveite a tranquilidade do hotel fazenda.", lado: "imagem" },
];

export default function RecintoGeral() {
  return (
    <section className="recinto-geral">
      <div className="cards-recinto">
        {itens.map((item, index) => {
          const imageClass = item.lado === "imagem" ? "container-esquerda1" : "container-direita2";
          const textClass = item.lado === "imagem" ? "container-direita1" : "container-esquerda2";
          const imagem = <div className={imageClass}><Image src={item.imagem} alt={item.titulo} width={900} height={650} /></div>;
          const texto = <div className={textClass}><h3>{item.titulo}</h3><span>{item.subtitulo}</span><p>{item.texto}</p><Link href="/sobre">Saiba mais</Link></div>;
          return <article className="recinto-container" key={item.titulo}>{item.lado === "imagem" ? <>{imagem}{texto}</> : <>{texto}{imagem}</>}</article>;
        })}
      </div>
    </section>
  );
}

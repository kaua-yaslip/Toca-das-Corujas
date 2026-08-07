import type { Metadata } from "next";
import Form from "@/components/Home/Form";
import InformacoesPage, {
  type InformacaoCategoria,
  type InformacaoItem,
} from "@/components/Informacoes/InformacoesPage";
import legacyPages from "@/data/legacyPages";

export const metadata: Metadata = {
  title: "Informações sobre hospedagem, lazer e eventos",
  description:
    "Consulte informações sobre hospedagem, suítes, lazer, eventos e experiências na Toca das Corujas, em Angatuba.",
  keywords:
    "Toca das Corujas, informações, hotel fazenda em Angatuba, hospedagem, lazer, suítes, eventos",
};

const excludedPages = new Set([
  "index",
  "contato",
  "informacoes",
  "mapa-site",
  "erro-404",
  "sobre",
  "lazer",
  "suites",
]);

function getCategory(slug: string, title: string): InformacaoCategoria {
  const value = `${slug} ${title}`.toLowerCase();

  if (
    /(casamento|aniversario|festas|festa|salao|retiro|locacao|aluguel-de-(sitio|chacara|salao))/.test(
      value,
    )
  ) {
    return "Eventos e retiros";
  }

  if (
    /(piscina|pesca|pesqueiro|lagos|passeio|quadriciclo|motos|cavalo|poneis|nauticos|sauna|campo-de-futebol|quadra|sala-de-jogos|churrasqueira|charrete|trole|trilha|cachoeira)/.test(
      value,
    )
  ) {
    return "Lazer e experiências";
  }

  if (/(suite|suites|banheira|hidromassagem|ar-condicionado|luxo)/.test(value)) {
    return "Acomodações e conforto";
  }

  if (/(bom-retiro|rechan|polenghi|polengui|campina-do-monte-alegre)/.test(value)) {
    return "Região e localização";
  }

  return "Hospedagem";
}


const cardImages = {
  acomodacoes: "/card-backgrounds/acomodacoes.webp",
  bebidas: "/card-backgrounds/bebidas.webp",
  campo: "/card-backgrounds/campo-quadra.webp",
  cavalo: "/card-backgrounds/cavalo.webp",
  cavalos: "/card-backgrounds/cavalos-grupo.webp",
  eventos: "/card-backgrounds/eventos-salao.webp",
  gastronomia: "/card-backgrounds/gastronomia.webp",
  hospedagem: "/card-backgrounds/hospedagem-exterior.webp",
  natureza: "/card-backgrounds/natureza.webp",
  pesca: "/card-backgrounds/pesca.webp",
  piscina: "/card-backgrounds/piscina.webp",
  varanda: "/card-backgrounds/varanda.webp",
} as const;

function getCardImage(
  slug: string,
  title: string,
  category: InformacaoCategoria,
): string {
  const value = normalizeForImage(`${slug} ${title}`);

  if (/(pesca|pesqueiro|pesca-e-solte|lagos)/.test(value)) {
    return cardImages.pesca;
  }

  if (/(cavalo|ponei|charrete|trole|biga)/.test(value)) {
    return value.includes("adestrado") || value.includes("passeio")
      ? cardImages.cavalos
      : cardImages.cavalo;
  }

  if (/(campo-de-futebol|quadra|poliesportiva|futebol)/.test(value)) {
    return cardImages.campo;
  }

  if (/(piscina|sauna|hidromassagem|banheira)/.test(value)) {
    return cardImages.piscina;
  }

  if (/(churrasqueira|pizza|gastronomia|restaurante|alimentacao)/.test(value)) {
    return cardImages.gastronomia;
  }

  if (/(casamento|aniversario|festa|salao|evento|retiro|chacara|sitio|locacao|aluguel)/.test(value)) {
    return value.includes("salao") ? cardImages.eventos : cardImages.varanda;
  }

  if (/(suite|suites|ar-condicionado|luxo|executivo)/.test(value)) {
    return cardImages.acomodacoes;
  }

  if (/(bom-retiro|rechan|polenghi|polengui|campina-do-monte-alegre|trilha|cachoeira|nautico|quadriciclo|moto)/.test(value)) {
    return cardImages.natureza;
  }

  if (category === "Lazer e experiências") {
    return cardImages.natureza;
  }

  if (category === "Acomodações e conforto") {
    return cardImages.acomodacoes;
  }

  if (category === "Eventos e retiros") {
    return cardImages.eventos;
  }

  if (category === "Região e localização") {
    return cardImages.natureza;
  }

  const variation = slug.length % 3;
  if (variation === 0) return cardImages.hospedagem;
  if (variation === 1) return cardImages.piscina;
  return cardImages.varanda;
}

function normalizeForImage(value: string): string {
  return value
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase();
}

const informationItems: InformacaoItem[] = legacyPages
  .filter((page) => !excludedPages.has(page.slug))
  .map((page) => {
    const category = getCategory(page.slug, page.title);

    return {
      slug: page.slug,
      title: page.title,
      description:
        page.description && page.description !== page.title
          ? page.description
          : `Conheça detalhes sobre ${page.title.toLowerCase()} na Toca das Corujas.`,
      category,
      image: getCardImage(page.slug, page.title, category),
    };
  })
  .sort((first, second) => first.title.localeCompare(second.title, "pt-BR"));

export default function Page() {
  return (
    <>
      <InformacoesPage items={informationItems} />
      <Form />
    </>
  );
}

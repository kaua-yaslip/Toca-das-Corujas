import { SiteSettings } from "@/types";

const siteName = "Toca das Corujas";
const title = `Início | ${siteName}`;
const description = "Toca das Corujas, hotel fazenda em Angatuba, São Paulo.";
const keywords = "Toca das Corujas, hotel fazenda, hospedagem, Angatuba";
export const url = "https://www.tocadascorujas.com.br/";

// True = Ativo || False = Inativo - Para ativar ou desativar os includes das páginas contratadas
export const includes = {
  SaibaMais: true,
  OutrosAssuntos: true,
  MaisVisitados: true,
  TagsPagina: true,
  Copyright: true,
};

export const settings: SiteSettings = {
  title,
  description,
  siteName,
  keywords,
  canonical: url,
  ddd: "11",
  selosDark: true,
  numeroTelefone: "99564-5738",
  whatsappApi: "https://api.whatsapp.com/send?phone=5511995645738&text=Olá!%20Vim%20do%20Google%20e%20gostaria%20de%20mais%20informações%20e%20Orçamento",
  numeroWhatsapp: "99564-5738",
  email: "marcos@yaslip.com.br",
  emailDestinatario: "marcos@yaslip.com.br",
  endereco: {
    // Localização oficial enviada para a Toca das Corujas.
    urlMaps:
      "https://www.google.com/maps?cid=15877795217209804611&g_mp=CiVnb29nbGUubWFwcy5wbGFjZXMudjEuUGxhY2VzLkdldFBsYWNlEAMYASAF&hl=pt-BR&gl=BR&source=embed",
    rua: "Rodovia Raposo Tavares",
    numero: "KM 205",
    bairro: "",
    cidade: "Angatuba",
    estado: "SP",
    cep: "",
    // URL própria para iframe. O parâmetro output=embed evita o bloqueio
    // que ocorre ao tentar carregar a página normal do Google Maps em um iframe.
    mapaEmbed:
      "https://maps.google.com/maps?cid=15877795217209804611&z=15&output=embed",
  },
  openGraph: {
    url,
    title,
    description,
    images: [
      {
        url: "/assets/imgs-site/logo.webp",
        width: 300,
        height: 200,
        alt: "Toca das Corujas",
      },
    ],
    siteName,
    locale: "pt_BR",
    region: "Brasil",
  },
  robots: "index, follow",
};

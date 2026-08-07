import { SiteSettings } from "@/types";

const siteName = "Toca das Corujas";
const title = `Início | ${siteName}`;
const description = "Toca das Corujas, hotel fazenda em Angatuba, São Paulo.";
const keywords = "Toca das Corujas, hotel fazenda, hospedagem, Angatuba";
export const url = "https://www.nomesite.com.br/";

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
  whatsappApi: "https://api.whatsapp.com/send?phone=5511995645738",
  numeroWhatsapp: "99564-5738",
  email: "marcos@yaslip.com.br",
  emailDestinatario: "marcos@yaslip.com.br",
  endereco: {
    urlMaps: "https://www.google.com/maps/search/?api=1&query=-23.490212,-48.414266",
    // O PHP enviado contém um endereço-modelo ("Rua base").
    // Mantemos aqui a localização específica que já constava na página de contato.
    rua: "Rodovia Raposo Tavares",
    numero: "KM 205",
    bairro: "",
    cidade: "Angatuba",
    estado: "SP",
    cep: "",
    mapaEmbed:
      "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d8619.425290861653!2d-48.41790158760671!3d-23.493660122372894!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94c41fe847e94c4b%3A0xdc5942a03a2fc743!2sR.%20Esp%C3%ADrito%20Santo%20-%20Angatuba%2C%20SP%2C%2018240-000!5e0!3m2!1spt-BR!2sbr!4v1763056418263!5m2!1spt-BR!2sbr",
  },
  openGraph: {
    url,
    title,
    description,
    images: [
      {
        url: "/assets/imgs-site/toca-das-corujas-logo.png",
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

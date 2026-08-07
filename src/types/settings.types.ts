export interface SiteSettings {
  title: string;
  description: string;
  keywords: string;
  canonical: string;
  siteName: string;
  ddd: string;
  selosDark: boolean;
  numeroTelefone: string;
  whatsappApi: string;
  numeroWhatsapp: string;
  email: string;
  emailDestinatario: string;
  endereco: {
    rua: string;
    numero: string;
    bairro: string;
    cidade: string;
    urlMaps: string;
    estado: string;
    mapaEmbed: string;
    cep: string;
  };
  openGraph: {
    url: string;
    title: string;
    description: string;
    images: [
      {
        url: string;
        width: number;
        height: number;
        alt: string;
      }
    ];
    siteName: string;
    locale: string;
    region: string;
  };
  robots: string;
}

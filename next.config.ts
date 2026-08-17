import type { NextConfig } from "next";
import { url } from "@/settings/settings";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      // ==================================================
      // REDIRECTS DO SITE ANTIGO PHP
      // ==================================================

      // Adventure
      {
        source: "/adventure.php",
        destination: "/lazer",
        statusCode: 301,
      },

      // Campo de futebol
      {
        source: "/campo-futebol-society.php",
        destination: "/campo-de-futebol",
        statusCode: 301,
      },

      // Cavalos e pôneis adestrados
      {
        source: "/cavalos-poneis-adestrados.php",
        destination: "/hotel-fazenda-com-passeio-de-cavalos-e-poneis-adestrados",
        statusCode: 301,
      },

      // Contato
      {
        source: "/contato.php",
        destination: "/contato",
        statusCode: 301,
      },

      // Rapel
      {
        source: "/descida-rapel.php",
        destination: "/lazer",
        statusCode: 301,
      },

      // Lazer
      {
        source: "/lazer.php",
        destination: "/lazer",
        statusCode: 301,
      },

      // Localização
      {
        source: "/localizacao.php",
        destination: "/contato",
        statusCode: 301,
      },

      // Mapa do site
      {
        source: "/mapa-site.php",
        destination: "/mapa-site",
        statusCode: 301,
      },

      // Motel fazenda
      {
        source: "/motel-fazenda.php",
        destination: "/hotel-fazenda",
        statusCode: 301,
      },

      // Passeio ecológico
      {
        source: "/passeio-ecologico.php",
        destination: "/hotel-fazenda-com-trilha",
        statusCode: 301,
      },

      // Passeios com cavalos e pôneis
      {
        source: "/passeios-fotos-cavalos-poneis.php",
        destination: "/hotel-fazenda-com-passeio-de-cavalos-e-poneis",
        statusCode: 301,
      },

      // Pesca esportiva
      {
        source: "/pesca-esportiva.php",
        destination: "/hotel-fazenda-com-pesca-esportiva",
        statusCode: 301,
      },

      // Piscina
      {
        source: "/piscina-com-cascata-trampolim.php",
        destination: "/piscina",
        statusCode: 301,
      },

      // Próxima festa
      {
        source: "/proxima-festa.php",
        destination: "/salao-para-festas",
        statusCode: 301,
      },

      // Sauna
      {
        source: "/sauna-seca-vapor.php",
        destination: "/saunas-seca-e-a-vapor",
        statusCode: 301,
      },

      // Suítes
      {
        source: "/suites.php",
        destination: "/suites",
        statusCode: 301,
      },

      // Última festa
      {
        source: "/ultima-festa.php",
        destination: "/salao-para-festas",
        statusCode: 301,
      },

      // Venda de cavalos e pôneis
      {
        source: "/venda-cavalos-poneis-adestrados.php",
        destination: "/hotel-fazenda-com-passeio-de-cavalos-e-poneis-adestrados",
        statusCode: 301,
      },

      // ==================================================
      // REDIRECT DO DOMÍNIO SEM WWW -> COM WWW
      // Deixe essa regra POR ÚLTIMO
      // ==================================================

      {
        source: "/:path*",
        has: [
          {
            type: "host",
            value: "tocadascorujas.com.br",
          },
        ],
        destination: `${url}/:path*`,
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
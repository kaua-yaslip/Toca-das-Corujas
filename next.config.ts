import type { NextConfig } from "next";
import { url } from "@/settings/settings";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      // ==================================================
      // REDIRECTS DO SITE ANTIGO PHP
      // ==================================================

      {
        source: "/animais-cavalos-montados.php",
        destination: "/passeio-a-cavalo",
        statusCode: 301,
      },
      {
        source: "/cavalo-garanhao-apache.php",
        destination: "/passeio-a-cavalo",
        statusCode: 301,
      },
      {
        source: "/cavalo-garanhao-flape.php",
        destination: "/passeio-a-cavalo",
        statusCode: 301,
      },
      {
        source: "/cavalos-animais-toca-das-corujas.php",
        destination: "/hotel-fazenda-com-passeio-de-cavalos-e-poneis",
        statusCode: 301,
      },
      {
        source: "/cavalos-garanhao.php",
        destination: "/passeio-a-cavalo",
        statusCode: 301,
      },
      {
        source: "/cavalos-potros.php",
        destination: "/hotel-fazenda-com-passeio-de-cavalos-e-poneis",
        statusCode: 301,
      },
      {
        source: "/egua-matrizes-lusitana.php",
        destination: "/passeio-a-cavalo",
        statusCode: 301,
      },
      {
        source: "/egua-matriz-tulipa.php",
        destination: "/passeio-a-cavalo",
        statusCode: 301,
      },
      {
        source: "/esportes-nauticos.php",
        destination: "/passeios-nauticos",
        statusCode: 301,
      },
      {
        source: "/potro-lusitano-beaujolais.php",
        destination: "/passeio-a-cavalo",
        statusCode: 301,
      },
      {
        source: "/salao-festas.php",
        destination: "/salao-para-festas",
        statusCode: 301,
      },
      {
        source: "/sauna-vapor-1.php",
        destination: "/saunas-seca-e-a-vapor",
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
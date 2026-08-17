import type { Metadata } from "next";
import Script from "next/script";
import Topo from "@/partials/Topo";
import Rodape from "@/partials/Rodape";
import RodapeMobile from "@/partials/RodapeMobile";
import "@/styles/Scss/index.scss";
import "@/styles/Scss/formulario.scss";
import "@/styles/Scss/contratadas.scss";

export const metadata: Metadata = {
  title: {
    default: "Toca das Corujas",
    template: "%s | Toca das Corujas",
  },
  description: "Toca das Corujas, hotel fazenda em Angatuba, São Paulo.",
  verification: {
    google: "YIY17hdR-i_UsdW-LNMkEogg8ZvYNDkjkgpor8YcVZM",
  },
  icons: {
    icon: [
      {
        url: "/favicon.ico",
        type: "image/x-icon",
      },
      {
        url: "/favicon.png",
        type: "image/png",
      },
    ],
    shortcut: "/favicon.ico",
    apple: "/apple-icon.png",
  },
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="pt-BR">
      <body>
        {/* Google Tag Manager */}
        <Script id="google-tag-manager" strategy="beforeInteractive">
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-NJB32JXZ');`}
        </Script>
        {/* End Google Tag Manager */}

        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-NJB32JXZ"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        {/* End Google Tag Manager (noscript) */}

        <Topo />
        {children}
        <Rodape />
        <RodapeMobile />
      </body>
    </html>
  );
}

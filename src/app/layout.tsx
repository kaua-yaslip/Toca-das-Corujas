import type { Metadata } from "next";
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
  icons: {
    icon: [
      { url: "/favicon.ico", type: "image/x-icon" },
      { url: "/assets/imgs-site/logo-icon.png", type: "image/png" },
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
        <Topo />
        {children}
        <Rodape />
        <RodapeMobile />
      </body>
    </html>
  );
}

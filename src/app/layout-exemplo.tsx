import type { Metadata } from "next";
import Header from "@/components/Header/Header";
import "@/styles/Scss/index.scss";
import "@/styles/Scss/topo.scss";

export const metadata: Metadata = {
  title: "Toca das Corujas",
  description: "Hotel fazenda em Angatuba, São Paulo.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR">
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import SuitesHome from "@/components/Home/SuitesHome";

export const metadata: Metadata = {
  title: "Suítes",
  description:
    "Conheça as suítes Standard, Luxo e Master da Toca das Corujas, com diferentes fotos de cada acomodação.",
};

export default function SuitesPage() {
  return (
    <main className="pagina-suites-atualizada">
      <SuitesHome />
    </main>
  );
}

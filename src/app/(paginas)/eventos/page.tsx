import type { Metadata } from "next";
import EventsPage from "@/components/EventsPage/EventsPage";

export const metadata: Metadata = {
  title: "Eventos",
  description:
    "Confira os próximos eventos da Toca das Corujas em Angatuba, acompanhe novidades e veja os canais oficiais no Instagram e Facebook.",
  keywords: [
    "eventos Toca das Corujas",
    "eventos em Angatuba",
    "workshop com cavalos",
    "constelação familiar com cavalos",
  ],
  alternates: {
    canonical: "/eventos",
  },
};

export default function Page() {
  return <EventsPage />;
}

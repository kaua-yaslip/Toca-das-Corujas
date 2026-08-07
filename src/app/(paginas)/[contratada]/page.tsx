import { notFound } from "next/navigation";
import LegacyPage from "@/components/LegacyPage";
import { getLegacyPage, legacyPages } from "@/data/legacyPages";

export function generateStaticParams() {
  return legacyPages
    .filter((page) => !["index", "contato", "informacoes", "mapa-site"].includes(page.slug))
    .map((page) => ({ contratada: page.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ contratada: string }> }) {
  const { contratada } = await params;
  const page = getLegacyPage(contratada);
  if (!page) return {};
  return {
    title: page.title,
    description: page.description,
    keywords: page.keywords,
    alternates: { canonical: page.route },
    openGraph: { title: page.title, description: page.description, url: page.route, type: "website", locale: "pt_BR" },
  };
}

export default async function Page({ params }: { params: Promise<{ contratada: string }> }) {
  const { contratada } = await params;
  const page = getLegacyPage(contratada);
  if (!page) notFound();
  return <LegacyPage page={page} />;
}

import { notFound } from "next/navigation";
import LegacyPage from "@/components/LegacyPage";
import { getLegacyPage } from "@/data/legacyPages";

const pageData = getLegacyPage("mapa-site");
export const metadata = pageData ? { title: pageData.title, description: pageData.description, keywords: pageData.keywords } : {};
export default function Page() {
  if (!pageData) notFound();
  return <LegacyPage page={pageData} />;
}

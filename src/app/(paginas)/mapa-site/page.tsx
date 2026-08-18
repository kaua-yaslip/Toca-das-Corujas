import { notFound } from "next/navigation";
import LegacyPage from "@/components/LegacyPage";
import legacyPages, { getLegacyPage } from "@/data/legacyPages";

const pageData = getLegacyPage("mapa-site");

export const metadata = pageData
  ? {
      title: pageData.title,
      description: pageData.description,
      keywords: pageData.keywords,
    }
  : {};

const excludedPages = new Set([
  "index",
  "contato",
  "informacoes",
  "mapa-site",
  "erro-404",
  "sobre",
  "lazer",
  "suites",
]);

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

const informationLinks = legacyPages
  .filter((page) => !excludedPages.has(page.slug))
  .sort((first, second) => first.title.localeCompare(second.title, "pt-BR"))
  .map(
    (page) =>
      `<li><a href="/${escapeHtml(page.slug)}">${escapeHtml(page.title)}</a></li>`,
  )
  .join("\n");

export default function Page() {
  if (!pageData) notFound();

  const contentWithInformationPages = pageData.content
    .replace(
      '<li><a class="nav-link" href="/contato">Contato</a></li>',
      '<li><a class="nav-link" href="/contato#como-chegar">Como chegar</a></li>\n<li><a class="nav-link" href="/contato">Contato</a></li>',
    )
    .replace(
      '<ul class="sitemapList">\n</ul>',
      `<ul class="sitemapList">\n${informationLinks}\n</ul>`,
    );

  return (
    <LegacyPage
      page={{
        ...pageData,
        content: contentWithInformationPages,
      }}
    />
  );
}

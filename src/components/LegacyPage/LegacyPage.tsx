import AboutPage from "@/components/AboutPage";
import Form from "@/components/Home/Form";
import type { LegacyPageData } from "@/data/legacyPages";

const bannerClassMap: Record<string, string> = {
  sobre: "titulo-pagina",
  lazer: "titulo-pagina2",
  suites: "titulo-pagina3",
  contato: "titulo-pagina4",
  informacoes: "titulo-pagina4",
};

export default function LegacyPage({ page }: { page: LegacyPageData }) {
  const slug = page.slug || "";
  let bannerClass = bannerClassMap[slug] || "titulo-pagina";

  if (slug.includes("lazer")) bannerClass = "titulo-pagina2";
  else if (slug.includes("suite")) bannerClass = "titulo-pagina3";
  else if (slug.includes("contato")) bannerClass = "titulo-pagina4";

  if (slug === "sobre") {
    return (
      <>
        <AboutPage />
        <Form />
      </>
    );
  }

  return (
    <>
      <div className={bannerClass}>
        <h1>{page.title}</h1>
      </div>
      <main className="legacy-page-content">
        <div dangerouslySetInnerHTML={{ __html: page.content }} />
      </main>
      <Form />
    </>
  );
}

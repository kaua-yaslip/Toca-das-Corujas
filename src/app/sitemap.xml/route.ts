import { legacyPages } from "@/data/legacyPages";
import { url } from "@/settings/settings";
export async function GET() {
  const base = url.replace(/\/$/, "");
  const urls = legacyPages.map((p) => `<url><loc>${base}${p.route}</loc><changefreq>monthly</changefreq><priority>${p.slug === "index" ? "1.0" : "0.7"}</priority></url>`).join("");
  const xml = `<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${urls}</urlset>`;
  return new Response(xml, { headers: { "Content-Type": "application/xml" } });
}

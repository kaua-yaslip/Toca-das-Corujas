import Link from "next/link";
import pagesData from "@/data/pagesData";

export default function MaisVisitadas() {
  return (
    <div className="mais-visitadas">
      <div className="base">
        <h2>Mais Visitados</h2>
        <ul className="mais-visitadas-box">
          {pagesData.map((page) => (
            <li key={page.contratada}>
              <Link href={`/${page.contratada}`}>{page.palavra}</Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

import Link from "next/link";
import pagesData from "@/data/pagesData";

export default function Sidebar() {
  return (
    <div className="sidebar-content">
      <h2><Link href="/informacoes">Informações</Link></h2>
      <ul>
        {pagesData.map((page) => (
          <li key={page.contratada}>
            <Link href={`/${page.contratada}`}>{page.palavra}</Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
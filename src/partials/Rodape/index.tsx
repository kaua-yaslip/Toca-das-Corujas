"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

import "@/partials/Rodape/rodape.scss";
import ScrollToTop from "@/components/ui/ScrollToTop";
import { settings, url } from "@/settings/settings";

export default function Rodape() {
  const { siteName, whatsappApi } = settings;
  const pathname = usePathname();
  const year = new Date().getFullYear();
  const fullUrl = `${url.replace(/\/$/, "")}${pathname}`;

  return (
    <footer className="site-footer">
      <div className="top">
        <div className="logoFooter">
          <Link href="/" aria-label="Página inicial">
            <Image
              src="/assets/imgs-site/toca-das-corujas-logo.png"
              width={300}
              height={112}
              alt="Toca das Corujas Hotel Fazenda"
            />
          </Link>

          <p>
            A Toca das Corujas oferece a você e seus convidados a melhor opção na
            região para festas, eventos, bailes, confraternização de empresas,
            despedidas, lazer e hospedagem.
          </p>
        </div>

        <nav className="menuFooter" aria-label="Menu do rodapé">
          <ul>
            <li><Link href="/">Home</Link></li>
            <li><Link href="/sobre">Sobre</Link></li>
            <li><Link href="/lazer">Lazer</Link></li>
            <li><Link href="/suites">Suítes</Link></li>
            <li><Link href="/contato">Contato</Link></li>
            <li><Link href="/informacoes">Informações</Link></li>
          </ul>
        </nav>
      </div>

      <div className="bottomRowFooter">
        <p>
          Copyright © {year} {siteName}. Todos os direitos reservados.
        </p>

        <div className="footerSelos" aria-label="Qualidade e validações do site">
          <Link
            className="logoYaslip"
            href="https://www.yaslip.com.br"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Desenvolvido por Yaslip"
          >
            <object
              data="/selos/selo-branco.svg"
              type="image/svg+xml"
              aria-label="Desenvolvido por Yaslip"
            />
          </Link>

          <div className="validator-seals">
            <Link
              href={`https://validator.w3.org/nu/?doc=${encodeURIComponent(fullUrl)}`}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Validar HTML no W3C"
            >
              <Image src="/selos/w3c-html.webp" width={42} height={60} alt="HTML W3C" />
            </Link>

            <Link
              href={`https://jigsaw.w3.org/css-validator/validator?uri=${encodeURIComponent(fullUrl)}`}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Validar CSS no W3C"
            >
              <Image src="/selos/w3c-css.webp" width={42} height={60} alt="CSS W3C" />
            </Link>

            <Link
              href={`https://pagespeed.web.dev/analysis?url=${encodeURIComponent(fullUrl)}`}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Analisar no PageSpeed"
            >
              <Image src="/selos/pagespeed.webp" width={42} height={60} alt="PageSpeed" />
            </Link>
          </div>
        </div>
      </div>

      <div className="whatsapp-btn">
        <a
          target="_blank"
          rel="nofollow noopener noreferrer"
          href={whatsappApi}
          aria-label="Falar pelo WhatsApp"
        >
          <div className="animated infinite zoomIn whatsapp-animate-circulo-pulse" />
          <div className="animated infinite pulse whatsapp-btn-bg" />
          <div className="animated infinite tada whatsapp-btn-config" />
        </a>
      </div>

      <ScrollToTop />
    </footer>
  );
}

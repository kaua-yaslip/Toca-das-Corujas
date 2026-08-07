"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { FaCaretDown, FaMinus, FaPlus } from "react-icons/fa6";
import "@/partials/Topo/topo.scss";

const linksLazer = [
  ["/passeio-a-cavalo", "Passeio a Cavalo e Pônei"],
  ["/passeios-nauticos", "Passeios Náuticos"],
  ["/piscina", "Piscina"],
  ["/saunas-seca-e-a-vapor", "Saunas seca e a vapor"],
  ["/campo-de-futebol", "Campo de Futebol"],
  ["/quadra-poliesportiva", "Quadra Poliesportiva"],
  ["/lagos-para-pesca", "Lagos para pesca"],
  ["/passeio-de-quadriciclo-e-motos", "Passeio de quadriciclo e motos"],
  ["/sala-de-jogos", "Sala de Jogos"],
  ["/churrasqueira-e-forno-para-pizzas", "Churrasqueira e Forno para Pizzas"],
  ["/salao-para-festas", "Salão para Festas"],
  ["/charretes-troles-e-bigas-romana", "Passeios de Charretes, Tróles e Bigas Romanas"],
] as const;

const linksSuites = [
  ["/suites#suites-luxo", "Suítes Luxo"],
  ["/suites#suites-master-sem-banheiras", "Suítes Master sem Banheiras"],
  ["/suites#suites-master-com-banheiras", "Suítes Master com Banheiras"],
  ["/suites#suites-simples", "Suítes Simples"],
] as const;

export default function Topo() {
  const pathname = usePathname();
  const [menuAberto, setMenuAberto] = useState(false);
  const [lazerAberto, setLazerAberto] = useState(false);
  const [suitesAberto, setSuitesAberto] = useState(false);
  const [rolado, setRolado] = useState(false);

  function fecharMenu() {
    setMenuAberto(false);
    setLazerAberto(false);
    setSuitesAberto(false);
  }

  useEffect(() => {
    fecharMenu();
  }, [pathname]);

  useEffect(() => {
    const observarRolagem = () => setRolado(window.scrollY > 30);
    observarRolagem();
    window.addEventListener("scroll", observarRolagem, { passive: true });
    return () => window.removeEventListener("scroll", observarRolagem);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuAberto ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuAberto]);

  const rotaAtiva = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href.split("#")[0]);
  };

  return (
    <header className={rolado ? "topo-scroll" : ""}>
      <div className="topo">
        <div className="topo-menu">
          <div className="topo-logo">
            <Link href="/" aria-label="Página inicial">
              <Image
                src="/assets/imgs-site/toca-das-corujas-logo.png"
                alt="Toca das Corujas"
                width={220}
                height={80}
                priority
              />
            </Link>
          </div>


          <nav aria-label="Menu principal">
            <ul className="menu-desktop">
              <li><Link href="/" className={`nav-link ${rotaAtiva("/") ? "ativo" : ""}`}>HOME</Link></li>
              <li><Link href="/sobre" className={`nav-link ${rotaAtiva("/sobre") ? "ativo" : ""}`}>SOBRE</Link></li>

              <li className="dropdown">
                <Link href="/lazer" className={`nav-link dropdown-link ${rotaAtiva("/lazer") ? "ativo" : ""}`}>
                  LAZER <FaCaretDown aria-hidden="true" />
                </Link>
                <ul className="dropdown-list">
                  {linksLazer.map(([href, label]) => (
                    <li key={href}><Link href={href}>{label}</Link></li>
                  ))}
                </ul>
              </li>

              <li className="dropdown">
                <Link href="/suites" className={`nav-link dropdown-link ${rotaAtiva("/suites") ? "ativo" : ""}`}>
                  SUÍTES <FaCaretDown aria-hidden="true" />
                </Link>
                <ul className="dropdown-list">
                  {linksSuites.map(([href, label]) => (
                    <li key={href}><Link href={href}>{label}</Link></li>
                  ))}
                </ul>
              </li>

              <li><Link href="/contato" className={`nav-link ${rotaAtiva("/contato") ? "ativo" : ""}`}>CONTATO</Link></li>
              <li><Link href="/informacoes" className={`nav-link link-mais ${rotaAtiva("/informacoes") ? "ativo" : ""}`} aria-label="Mais informações">+</Link></li>
            </ul>
          </nav>
        </div>
      </div>

      <div className="topo-mobile">
        <div className="topo-logo-mobile">
          <Link href="/" aria-label="Página inicial" onClick={fecharMenu}>
            <Image
              src="/assets/imgs-site/toca-das-corujas-logo.png"
              alt="Toca das Corujas"
              width={180}
              height={70}
              priority
            />
          </Link>
        </div>

        <button
          type="button"
          className={`hamburger-lines ${menuAberto ? "active" : ""}`}
          onClick={() => setMenuAberto((valor) => !valor)}
          aria-label={menuAberto ? "Fechar menu" : "Abrir menu"}
          aria-expanded={menuAberto}
          aria-controls="menuMobile"
        >
          <span className="line line1" />
          <span className="line line2" />
          <span className="line line3" />
        </button>

        <button
          type="button"
          className={`menu-mobile-overlay ${menuAberto ? "overlay-ativo" : ""}`}
          onClick={fecharMenu}
          aria-label="Fechar menu"
          tabIndex={menuAberto ? 0 : -1}
        />

        <nav id="menuMobile" className={menuAberto ? "activeMenu" : ""} aria-label="Menu mobile">
          <ul>
            <li><Link href="/" className={`nav-link ${rotaAtiva("/") ? "ativo" : ""}`} onClick={fecharMenu}>HOME</Link></li>
            <li><Link href="/sobre" className={`nav-link ${rotaAtiva("/sobre") ? "ativo" : ""}`} onClick={fecharMenu}>SOBRE</Link></li>

            <li className="dropdown-mobile">
              <div className="dropdown-mobile-header">
                <Link href="/lazer" className={`nav-link ${rotaAtiva("/lazer") ? "ativo" : ""}`} onClick={fecharMenu}>LAZER</Link>
                <button type="button" onClick={() => setLazerAberto((valor) => !valor)} aria-label="Abrir submenu de lazer" aria-expanded={lazerAberto}>
                  {lazerAberto ? <FaMinus /> : <FaPlus />}
                </button>
              </div>
              <ul className={`dropdown-list-mobile ${lazerAberto ? "ativo" : ""}`}>
                {linksLazer.map(([href, label]) => (
                  <li key={href}><Link href={href} onClick={fecharMenu}>{label}</Link></li>
                ))}
              </ul>
            </li>

            <li className="dropdown-mobile">
              <div className="dropdown-mobile-header">
                <Link href="/suites" className={`nav-link ${rotaAtiva("/suites") ? "ativo" : ""}`} onClick={fecharMenu}>SUÍTES</Link>
                <button type="button" onClick={() => setSuitesAberto((valor) => !valor)} aria-label="Abrir submenu de suítes" aria-expanded={suitesAberto}>
                  {suitesAberto ? <FaMinus /> : <FaPlus />}
                </button>
              </div>
              <ul className={`dropdown-list-mobile ${suitesAberto ? "ativo" : ""}`}>
                {linksSuites.map(([href, label]) => (
                  <li key={href}><Link href={href} onClick={fecharMenu}>{label}</Link></li>
                ))}
              </ul>
            </li>

            <li><Link href="/contato" className={`nav-link ${rotaAtiva("/contato") ? "ativo" : ""}`} onClick={fecharMenu}>CONTATO</Link></li>
            <li><Link href="/informacoes" className={`nav-link ${rotaAtiva("/informacoes") ? "ativo" : ""}`} onClick={fecharMenu}>MAIS INFORMAÇÕES</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { FaCaretDown, FaMinus, FaPlus } from "react-icons/fa6";

const lazerLinks = [
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

const suitesLinks = [
  ["/suites#suites-luxo", "Suítes Luxo"],
  ["/suites#suites-master-sem-banheiras", "Suítes Master sem Banheiras"],
  ["/suites#suites-master-com-banheiras", "Suítes Master com Banheiras"],
  ["/suites#suites-simples", "Suítes Standart"],
] as const;

export default function Header() {
  const [menuAberto, setMenuAberto] = useState(false);
  const [lazerAberto, setLazerAberto] = useState(false);
  const [suitesAberto, setSuitesAberto] = useState(false);
  const [rolou, setRolou] = useState(false);

  useEffect(() => {
    const atualizarTopo = () => setRolou(window.scrollY > 40);
    atualizarTopo();
    window.addEventListener("scroll", atualizarTopo, { passive: true });
    return () => window.removeEventListener("scroll", atualizarTopo);
  }, []);

  useEffect(() => {
    document.body.classList.toggle("menu-mobile-bloqueado", menuAberto);
    return () => document.body.classList.remove("menu-mobile-bloqueado");
  }, [menuAberto]);

  function fecharMenu() {
    setMenuAberto(false);
    setLazerAberto(false);
    setSuitesAberto(false);
  }

  return (
    <header className={rolou ? "topo-scroll" : ""}>
      <div id="add_to_me" />

      <div className="topo">
        <div className="topo-menu">
          <div className="topo-logo">
            <Link href="/" aria-label="Página inicial da Toca das Corujas">
              <Image
                src="/assets/imgs-site/logo.webp"
                alt="Toca das Corujas"
                width={200}
                height={80}
                priority
              />
            </Link>
          </div>

          <nav aria-label="Menu principal">
            <ul>
              <li><Link href="/" className="nav-link">HOME</Link></li>
              <li><Link href="/sobre" className="nav-link">SOBRE</Link></li>

              <li className="dropdown">
                <Link href="/lazer" className="nav-link dropdown-trigger">
                  LAZER <FaCaretDown aria-hidden="true" />
                </Link>
                <ul className="dropdown-list">
                  {lazerLinks.map(([href, label]) => (
                    <li key={href}><Link href={href}>{label}</Link></li>
                  ))}
                </ul>
              </li>

              <li className="dropdown">
                <Link href="/suites" className="nav-link dropdown-trigger">
                  SUÍTES <FaCaretDown aria-hidden="true" />
                </Link>
                <ul className="dropdown-list">
                  {suitesLinks.map(([href, label]) => (
                    <li key={href}><Link href={href}>{label}</Link></li>
                  ))}
                </ul>
              </li>

              <li><Link href="/contato" className="nav-link">CONTATO</Link></li>
              <li><Link href="/informacoes" className="nav-link" aria-label="Mais informações">+</Link></li>
            </ul>
          </nav>
        </div>
      </div>

      <div className="topo-mobile">
        <div className="topo-logo-mobile">
          <Link href="/" onClick={fecharMenu} aria-label="Página inicial da Toca das Corujas">
            <Image
              src="/assets/imgs-site/logo.webp"
              alt="Toca das Corujas"
              width={230}
              height={92}
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

        <nav
          id="menuMobile"
          className={menuAberto ? "activeMenu" : ""}
          aria-label="Menu para celular"
        >
          <ul>
            <li><Link href="/" className="nav-link" onClick={fecharMenu}>HOME</Link></li>
            <li><Link href="/sobre" className="nav-link" onClick={fecharMenu}>SOBRE</Link></li>

            <li className="dropdown-mobile">
              <div className="dropdown-mobile-cabecalho">
                <Link href="/lazer" className="nav-link" onClick={fecharMenu}>LAZER</Link>
                <button
                  type="button"
                  onClick={() => setLazerAberto((valor) => !valor)}
                  aria-label={lazerAberto ? "Fechar submenu de lazer" : "Abrir submenu de lazer"}
                  aria-expanded={lazerAberto}
                >
                  {lazerAberto ? <FaMinus /> : <FaPlus />}
                </button>
              </div>
              <ul className={`dropdown-list-mobile ${lazerAberto ? "ativo" : ""}`}>
                {lazerLinks.map(([href, label]) => (
                  <li key={href}><Link href={href} onClick={fecharMenu}>{label}</Link></li>
                ))}
              </ul>
            </li>

            <li className="dropdown-mobile">
              <div className="dropdown-mobile-cabecalho">
                <Link href="/suites" className="nav-link" onClick={fecharMenu}>SUÍTES</Link>
                <button
                  type="button"
                  onClick={() => setSuitesAberto((valor) => !valor)}
                  aria-label={suitesAberto ? "Fechar submenu de suítes" : "Abrir submenu de suítes"}
                  aria-expanded={suitesAberto}
                >
                  {suitesAberto ? <FaMinus /> : <FaPlus />}
                </button>
              </div>
              <ul className={`dropdown-list-mobile ${suitesAberto ? "ativo" : ""}`}>
                {suitesLinks.map(([href, label]) => (
                  <li key={href}><Link href={href} onClick={fecharMenu}>{label}</Link></li>
                ))}
              </ul>
            </li>

            <li><Link href="/contato" className="nav-link" onClick={fecharMenu}>CONTATO</Link></li>
            <li><Link href="/informacoes" className="nav-link" onClick={fecharMenu}>+</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

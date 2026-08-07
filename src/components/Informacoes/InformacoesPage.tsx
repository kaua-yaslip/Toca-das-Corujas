"use client";

import Link from "next/link";
import type { CSSProperties } from "react";
import { useMemo, useState } from "react";
import {
  FaArrowRight,
  FaBed,
  FaCalendarCheck,
  FaCircleInfo,
  FaHouseChimney,
  FaLocationDot,
  FaMagnifyingGlass,
  FaUmbrellaBeach,
} from "react-icons/fa6";
import styles from "./InformacoesPage.module.scss";

export type InformacaoCategoria =
  | "Hospedagem"
  | "Lazer e experiências"
  | "Eventos e retiros"
  | "Acomodações e conforto"
  | "Região e localização";

export interface InformacaoItem {
  slug: string;
  title: string;
  description: string;
  category: InformacaoCategoria;
  image: string;
}

interface InformacoesPageProps {
  items: InformacaoItem[];
}

const categoryOrder: InformacaoCategoria[] = [
  "Hospedagem",
  "Lazer e experiências",
  "Eventos e retiros",
  "Acomodações e conforto",
  "Região e localização",
];

const categoryIcons = {
  Hospedagem: FaHouseChimney,
  "Lazer e experiências": FaUmbrellaBeach,
  "Eventos e retiros": FaCalendarCheck,
  "Acomodações e conforto": FaBed,
  "Região e localização": FaLocationDot,
} satisfies Record<InformacaoCategoria, typeof FaCircleInfo>;

function normalizeText(value: string) {
  return value
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase();
}

export default function InformacoesPage({ items }: InformacoesPageProps) {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState<"Todos" | InformacaoCategoria>("Todos");

  const categoryTotals = useMemo(() => {
    return categoryOrder.reduce<Record<InformacaoCategoria, number>>(
      (accumulator, category) => {
        accumulator[category] = items.filter((item) => item.category === category).length;
        return accumulator;
      },
      {
        Hospedagem: 0,
        "Lazer e experiências": 0,
        "Eventos e retiros": 0,
        "Acomodações e conforto": 0,
        "Região e localização": 0,
      },
    );
  }, [items]);

  const filteredItems = useMemo(() => {
    const normalizedSearch = normalizeText(search.trim());

    return items.filter((item) => {
      const matchesCategory = activeCategory === "Todos" || item.category === activeCategory;
      const searchableContent = normalizeText(`${item.title} ${item.description} ${item.category}`);
      const matchesSearch = !normalizedSearch || searchableContent.includes(normalizedSearch);

      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, items, search]);

  return (
    <main className={styles.page}>
      <section className={styles.hero} aria-labelledby="informacoes-title">
        <div className={styles.heroDecorationOne} aria-hidden="true" />
        <div className={styles.heroDecorationTwo} aria-hidden="true" />

        <div className={styles.heroContent}>
          <span className={styles.eyebrow}>Toca das Corujas</span>
          <h1 id="informacoes-title">Informações para planejar sua estadia</h1>
          <p>
            Encontre conteúdos sobre hospedagem, lazer, suítes, eventos e experiências disponíveis
            na Toca das Corujas e na região de Angatuba.
          </p>
          <a className={styles.heroButton} href="#conteudos">
            Explorar informações <FaArrowRight aria-hidden="true" />
          </a>
        </div>
      </section>

      <section className={styles.introduction}>
        <div className={styles.introductionText}>
          <span>Guia completo</span>
          <h2>Tudo o que você precisa saber em um só lugar</h2>
          <p>
            Os conteúdos foram organizados em categorias para facilitar a navegação. Use a busca ou selecione um tema para encontrar rapidamente a informação que
            procura.
          </p>
        </div>

        <div className={styles.summaryCard}>
          <strong>{items.length}</strong>
          <span>conteúdos disponíveis</span>
          <small>Informações sobre a estrutura, serviços e atrações</small>
        </div>
      </section>

      <section id="conteudos" className={styles.catalog} aria-labelledby="catalog-title">
        <div className={styles.catalogHeader}>
          <div>
            <span>Explore por assunto</span>
            <h2 id="catalog-title">Informações da Toca das Corujas</h2>
          </div>

          <label className={styles.searchBox}>
            <FaMagnifyingGlass aria-hidden="true" />
            <span className={styles.srOnly}>Pesquisar informações</span>
            <input
              type="search"
              value={search}
              onChange={(event) => setSearch(event.target.value)}
              placeholder="Digite o que deseja encontrar..."
            />
          </label>
        </div>

        <div className={styles.filters} aria-label="Filtrar informações por categoria">
          <button
            type="button"
            className={activeCategory === "Todos" ? styles.activeFilter : ""}
            onClick={() => setActiveCategory("Todos")}
          >
            Todos <span>{items.length}</span>
          </button>

          {categoryOrder.map((category) => (
            <button
              key={category}
              type="button"
              className={activeCategory === category ? styles.activeFilter : ""}
              onClick={() => setActiveCategory(category)}
            >
              {category} <span>{categoryTotals[category]}</span>
            </button>
          ))}
        </div>

        <div className={styles.resultsBar} aria-live="polite">
          <strong>{filteredItems.length}</strong>
          {filteredItems.length === 1 ? " conteúdo encontrado" : " conteúdos encontrados"}
        </div>

        {filteredItems.length > 0 ? (
          <div className={styles.grid}>
            {filteredItems.map((item) => {
              const Icon = categoryIcons[item.category];

              return (
                <article
                  key={item.slug}
                  className={styles.card}
                  style={{ "--card-image": `url("${item.image}")` } as CSSProperties}
                >
                  <div className={styles.cardTop}>
                    <span className={styles.iconBox} aria-hidden="true">
                      <Icon />
                    </span>
                    <span className={styles.category}>{item.category}</span>
                  </div>

                  <h3>{item.title}</h3>
                  <p>{item.description}</p>

                  <Link href={`/${item.slug}`} className={styles.cardLink}>
                    Ver informações <FaArrowRight aria-hidden="true" />
                  </Link>
                </article>
              );
            })}
          </div>
        ) : (
          <div className={styles.emptyState}>
            <FaCircleInfo aria-hidden="true" />
            <h3>Nenhum conteúdo encontrado</h3>
            <p>Tente pesquisar outro termo ou selecione uma categoria diferente.</p>
            <button
              type="button"
              onClick={() => {
                setSearch("");
                setActiveCategory("Todos");
              }}
            >
              Limpar filtros
            </button>
          </div>
        )}
      </section>

      <section className={styles.contactCta}>
        <div>
          <span>Atendimento personalizado</span>
          <h2>Ainda ficou com alguma dúvida?</h2>
          <p>
            Converse com a equipe da Toca das Corujas para consultar disponibilidade, acomodações e
            opções de lazer para sua estadia.
          </p>
        </div>
        <Link href="/contato">
          Falar com a equipe <FaArrowRight aria-hidden="true" />
        </Link>
      </section>
    </main>
  );
}

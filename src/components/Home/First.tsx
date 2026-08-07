"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function First() {
  const [imagemAtiva, setImagemAtiva] = useState<"img1" | "img2">("img1");

  return (
    <section className="first">
      <div className="base">
        <div className="left">
          <div className="texto">

            <h1>
              Seja bem-vindo à
              <br />
              Toca das Corujas
            </h1>

            <p>
              A Toca das Corujas oferece a você e seus convidados uma excelente
              opção na região para festas de aniversário, casamentos, eventos,
              workshops, cursos, confraternizações de empresas, lazer e hospedagem.
            </p>

            <p>
              Unimos hotel fazenda, hospedagem e lazer em uma estrutura completa,
              equipada com salão de festas, palco, cozinha com churrasqueira,
              piscina, área de pesca, sauna seca e sauna a vapor.
            </p>

            <div className="botoes">
              <Link href="/sobre">Saiba mais</Link>
              <Link href="/contato">Entre em contato</Link>
            </div>
          </div>
        </div>

        <div
          className={`right imagem-ativa-${imagemAtiva}`}
          aria-label="Fotos da estrutura da Toca das Corujas"
        >
          <div
            className="img1"
            tabIndex={0}
            onMouseEnter={() => setImagemAtiva("img1")}
            onFocus={() => setImagemAtiva("img1")}
          >
            <Image
              src="/assets/toca-das-corujas/foto-40.webp"
              alt="Área externa da Toca das Corujas"
              width={700}
              height={900}
              priority
            />
          </div>

          <div
            className="img2"
            tabIndex={0}
            onMouseEnter={() => setImagemAtiva("img2")}
            onFocus={() => setImagemAtiva("img2")}
          >
            <Image
              src="/assets/toca-das-corujas/foto-25.webp"
              alt="Estrutura interna da Toca das Corujas"
              width={600}
              height={800}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
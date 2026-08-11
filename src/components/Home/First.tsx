"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function First() {
  const [imagemAtiva, setImagemAtiva] = useState<"img1" | "img2">("img1");

  useEffect(() => {
    const intervalo = setInterval(() => {
      setImagemAtiva((imagemAtual) =>
        imagemAtual === "img1" ? "img2" : "img1"
      );
    }, 4000); // troca a cada 4 segundos

    return () => clearInterval(intervalo);
  }, []);

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
              workshops, cursos, confraternizações de empresas, lazer e
              hospedagem...
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
          <div className="img1">
            <Image
              src="/assets/toca-das-corujas/foto-40.webp"
              alt="Área externa da Toca das Corujas"
              width={700}
              height={900}
              priority
            />
          </div>

          <div className="img2">
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
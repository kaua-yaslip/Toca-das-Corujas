import type { Metadata } from "next";
import Link from "next/link";
import {
  FaClock,
  FaEnvelope,
  FaLocationDot,
  FaPhone,
  FaWhatsapp,
} from "react-icons/fa6";
import Form from "@/components/Home/Form";
import { getLegacyPage } from "@/data/legacyPages";
import { settings } from "@/settings/settings";

const pageData = getLegacyPage("contato");

export const metadata: Metadata = pageData
  ? {
      title: pageData.title,
      description: pageData.description,
      keywords: pageData.keywords,
      alternates: { canonical: pageData.route },
    }
  : {};

export default function Page() {
  const { siteName, ddd, numeroTelefone, numeroWhatsapp, whatsappApi, email } =
    settings;
  const { rua, numero, bairro, cidade, estado, cep, urlMaps, mapaEmbed } =
    settings.endereco;

  const phoneDigits = `${ddd}${numeroTelefone}`.replace(/\D/g, "");
  const completeAddress = [
    `${rua}${numero ? `, ${numero}` : ""}`,
    bairro,
    `${cidade}/${estado}`,
    cep ? `CEP ${cep}` : "",
  ]
    .filter(Boolean)
    .join(" - ");

  return (
    <main className="page-contato">
      <section className="contato-banner" aria-labelledby="titulo-contato">
        <div className="contato-banner-conteudo">
          <span>Atendimento Toca das Corujas</span>
          <h1 id="titulo-contato">
            {pageData?.title ?? "Entre em contato conosco"}
          </h1>
          <p>
            Fale com nossa equipe para tirar dúvidas, consultar disponibilidade e
            planejar sua estadia.
          </p>
        </div>
      </section>

      <section className="contato-informacoes" aria-label="Informações de contato">
        <div className="contato-informacoes-conteudo">
          <div className="contato-cartao">
            <div className="contato-cartao-cabecalho">
              <span>Fale conosco</span>
              <h2>Atendimento - {siteName}</h2>
              <p>
                Escolha o canal mais prático. Nossa equipe está pronta para ajudar
                com informações sobre hospedagem, lazer e reservas.
              </p>
            </div>

            <div className="contato-lista">
              <Link href={`tel:0${phoneDigits}`} className="contato-item">
                <span className="contato-icone" aria-hidden="true">
                  <FaPhone />
                </span>
                <span>
                  <strong>Telefone</strong>
                  <small>{`(${ddd}) ${numeroTelefone}`}</small>
                </span>
              </Link>

              <Link
                href={whatsappApi}
                target="_blank"
                rel="noopener noreferrer nofollow"
                className="contato-item"
              >
                <span className="contato-icone" aria-hidden="true">
                  <FaWhatsapp />
                </span>
                <span>
                  <strong>WhatsApp</strong>
                  <small>{`(${ddd}) ${numeroWhatsapp}`}</small>
                </span>
              </Link>

              <Link href={`mailto:${email}`} className="contato-item">
                <span className="contato-icone" aria-hidden="true">
                  <FaEnvelope />
                </span>
                <span>
                  <strong>E-mail</strong>
                  <small>{email}</small>
                </span>
              </Link>

              <Link
                href={urlMaps}
                target="_blank"
                rel="noopener noreferrer"
                className="contato-item contato-item-endereco"
              >
                <span className="contato-icone" aria-hidden="true">
                  <FaLocationDot />
                </span>
                <span>
                  <strong>Endereço</strong>
                  <small>{completeAddress}</small>
                </span>
              </Link>

              <div className="contato-item contato-item-estatico">
                <span className="contato-icone" aria-hidden="true">
                  <FaClock />
                </span>
                <span>
                  <strong>Atendimento</strong>
                  <small>Consulte nossa equipe para informações e reservas.</small>
                </span>
              </div>
            </div>

            <Link
              className="contato-botao-whatsapp"
              href={whatsappApi}
              target="_blank"
              rel="noopener noreferrer nofollow"
            >
              <FaWhatsapp aria-hidden="true" />
              Conversar pelo WhatsApp
            </Link>
          </div>

          <div className="contato-mapa">
            <iframe
              className="contato-mapa-iframe"
              src={mapaEmbed}
              title={`Localização da ${siteName} no Google Maps`}
              loading="lazy"
              allowFullScreen
              referrerPolicy="strict-origin-when-cross-origin"
            />

            <Link
              href={urlMaps}
              target="_blank"
              rel="noopener noreferrer"
              className="contato-mapa-abrir"
              aria-label={`Abrir a localização da ${siteName} no Google Maps`}
            >
              Abrir no Google Maps
            </Link>

            <div className="contato-mapa-legenda">
              <FaLocationDot aria-hidden="true" />
              <div>
                <strong>Como chegar</strong>
                <span>{completeAddress}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Form />
    </main>
  );
}

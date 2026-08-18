"use client";

import Image from "next/image";
import Link from "next/link";
import { FaMapMarkedAlt, FaPhone } from "react-icons/fa";
import { FiMail } from "react-icons/fi";
import ContactForm from "../ContactForm/ContactForm";
import { settings } from "@/settings/settings";

const { numeroTelefone, ddd, email } = settings;
const { rua, numero, bairro, cidade, estado, cep, urlMaps } = settings.endereco;
const phoneDigits = `${ddd}${numeroTelefone}`.replace(/\D/g, "");
const completeAddress = [
  `${rua}${numero ? `, ${numero}` : ""}`,
  bairro,
  `${cidade}/${estado}`,
  cep ? `CEP ${cep}` : "",
]
  .filter(Boolean)
  .join(" - ");

export default function Form() {
  return (
    <section className="included-form" id="como-chegar">
      <div className="base">
        <div className="box-details">
          <div className="box-title">
            <h2 className="title">Entre em contato</h2>
            <p className="description">
              Tire suas dúvidas e consulte a disponibilidade para sua estadia.
            </p>
          </div>

          <div className="contact">
            <Link href={`tel:0${phoneDigits}`}>
              <FaPhone aria-hidden="true" />
              <span>{`(${ddd}) ${numeroTelefone}`}</span>
            </Link>

            <Link href={`mailto:${email}`}>
              <FiMail aria-hidden="true" />
              <span>{email}</span>
            </Link>

            <Link href={urlMaps} target="_blank" rel="noopener noreferrer">
              <FaMapMarkedAlt aria-hidden="true" />
              <span>{completeAddress}</span>
            </Link>
          </div>
        </div>

        <div className="included-form-layout">
          <aside className="included-form-map" aria-label="Mapa desenhado para chegar à Toca das Corujas">
            <div className="included-form-map-card">
              <span className="included-form-map-kicker">Como chegar</span>
              <h3>Mapa de referência</h3>

              <div className="included-form-map-image">
                <Image
                  src="/assets/imgs-site/DesenhadoMapa.webp"
                  alt="Mapa desenhado com referências do caminho até a Toca das Corujas"
                  width={576}
                  height={1024}
                  sizes="(max-width: 900px) 92vw, 38vw"
                />
              </div>

              <Link
                href={urlMaps}
                target="_blank"
                rel="noopener noreferrer"
                className="included-form-map-link"
              >
                <FaMapMarkedAlt aria-hidden="true" />
                Abrir localização no Google Maps
              </Link>
            </div>
          </aside>

          <div className="included-form-fields">
            <ContactForm variation="contatoFormIncluded" />
          </div>
        </div>
      </div>
    </section>
  );
}

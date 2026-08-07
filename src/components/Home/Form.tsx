"use client";

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
    <section className="included-form">
      <div className="base">
        <div className="box-details">
          <div className="box-title">
            <h2 className="title">Entre em contato</h2>
            <p className="description">
              Tire suas dúvidas e consulte a disponibilidade para sua estadia.
            </p>
          </div>

          <div className="contact">
            <Link href={`tel:+55${phoneDigits}`}>
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

        <ContactForm variation="contatoFormIncluded" />
      </div>
    </section>
  );
}

"use client";

import Script from "next/script";
import { useState } from "react";
import { settings, url } from "@/settings/settings";
import { ResponseData, FormData } from "@/types";
import styles from "./ContactForm.module.scss";
import { FormDataSchema } from "@/schemas/form";

const { siteName, emailDestinatario } = settings;
const RECAPTCHA_SITE_KEY = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY ?? "";
const RECAPTCHA_ENABLED =
  process.env.NEXT_PUBLIC_RECAPTCHA_ENABLED === "true" &&
  RECAPTCHA_SITE_KEY.length > 0;

function encodeBase64Utf8(value: string): string {
  const bytes = new TextEncoder().encode(value);
  let binary = "";

  bytes.forEach((byte) => {
    binary += String.fromCharCode(byte);
  });

  return btoa(binary);
}

export default function ContactForm({ variation }: { variation: string }) {
  const [formData, setFormData] = useState<FormData>({
    nome: "",
    email: "",
    empresa: "",
    telefone: "",
    como_nos_conheceu: "",
    mensagem: "",
  });
  const [message, setMessage] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  function phoneFormat(e: React.FormEvent<HTMLInputElement>): void {
    let value = e.currentTarget.value.replace(/\D/g, "").slice(0, 11);

    if (value.length > 10) {
      value = value.replace(/^(\d{2})(\d{5})(\d{4})$/, "($1) $2-$3");
    } else if (value.length > 6) {
      value = value.replace(/^(\d{2})(\d{4})(\d{0,4})$/, "($1) $2-$3");
    } else if (value.length > 2) {
      value = value.replace(/^(\d{2})(\d+)/, "($1) $2");
    } else if (value.length > 0) {
      value = value.replace(/^(\d{0,2})/, "($1");
    }

    setFormData((current) => ({ ...current, telefone: value }));
  }

  async function getRecaptchaToken(): Promise<string | undefined> {
    if (!RECAPTCHA_ENABLED) return undefined;

    if (!window.grecaptcha) {
      throw new Error("reCAPTCHA ainda não carregou. Tente novamente.");
    }

    return new Promise((resolve, reject) => {
      window.grecaptcha?.ready(() => {
        window.grecaptcha
          ?.execute(RECAPTCHA_SITE_KEY, { action: "contact_form" })
          .then(resolve)
          .catch(reject);
      });
    });
  }

  async function handleSubmit(e: React.FormEvent): Promise<void> {
    e.preventDefault();
    setLoading(true);
    setMessage("Enviando e-mail...");

    try {
      const formDataValid = FormDataSchema.parse(formData);
      const recaptchaToken = await getRecaptchaToken();

      const res = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...formDataValid, recaptchaToken }),
      });

      const data: ResponseData = await res.json();
      setMessage(data.message || data.error || "Erro ao enviar email.");

      if (!res.ok) return;

      const backupHtml = `
        <h2>Formulário via site - ${siteName}</h2>
        <p><strong>Nome:</strong> ${formData.nome}</p>
        <p><strong>Email:</strong> ${formData.email}</p>
        <p><strong>Empresa:</strong> ${formData.empresa}</p>
        <p><strong>Telefone:</strong> ${formData.telefone}</p>
        <p><strong>Como nos Conheceu:</strong> ${formData.como_nos_conheceu}</p>
        <p><strong>Mensagem:</strong> ${formData.mensagem}</p>
        <br>
        <p><strong>Email enviado na data:</strong> ${new Date().toLocaleString("pt-BR")}</p>
        <p><strong>Email Destinatario:</strong> ${emailDestinatario}</p>
      `;

      setFormData({
        nome: "",
        email: "",
        empresa: "",
        telefone: "",
        como_nos_conheceu: "",
        mensagem: "",
      });

      // O backup não deve transformar um envio de e-mail bem-sucedido em erro visual.
      fetch("/api/salvar-backup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          nome: siteName,
          endereco: url,
          mensagem: encodeBase64Utf8(backupHtml),
        }),
      }).catch((error) => {
        console.error("Erro ao salvar backup do formulário:", error);
      });

      setMessage("Email enviado com sucesso, aguarde o retorno!");
    } catch (error) {
      console.error("Erro no formulário:", error);
      setMessage(
        error instanceof Error ? error.message : "Erro ao enviar email."
      );
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      {RECAPTCHA_ENABLED && (
        <Script
          id="recaptcha-v3"
          src={`https://www.google.com/recaptcha/api.js?render=${RECAPTCHA_SITE_KEY}`}
          strategy="afterInteractive"
        />
      )}

      <form onSubmit={handleSubmit} className={`${styles[variation]}`}>
        {message && <p className={styles.formSuccess}>{message}</p>}
        <div className={styles.boxInput}>
          <div className={styles.inputForm}>
            <label htmlFor="nome">Nome <span style={{ color: "red" }}>*</span></label>
            <input
              type="text"
              name="nome"
              id="nome"
              placeholder="Nome"
              value={formData.nome}
              onChange={(e) => setFormData({ ...formData, nome: e.target.value })}
              required
            />
          </div>
          <div className={styles.inputForm}>
            <label htmlFor="email">Email <span style={{ color: "red" }}>*</span></label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Email"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              required
            />
          </div>
        </div>
        <div className={styles.boxInput}>
          <div className={styles.inputForm}>
            <label htmlFor="telefone">Telefone <span style={{ color: "red" }}>*</span></label>
            <input
              type="text"
              inputMode="tel"
              maxLength={15}
              name="telefone"
              id="telefone"
              placeholder="Telefone"
              value={formData.telefone}
              onChange={phoneFormat}
              required
            />
          </div>
          <div className={styles.inputForm}>
            <label htmlFor="empresa">Empresa <span style={{ color: "red" }}>*</span></label>
            <input
              type="text"
              name="empresa"
              id="empresa"
              placeholder="Empresa"
              value={formData.empresa}
              onChange={(e) =>
                setFormData({ ...formData, empresa: e.target.value })
              }
              required
            />
          </div>
        </div>
        <div className={styles.inputForm}>
          <label htmlFor="como_nos_conheceu">Como nos conheceu? <span style={{ color: "red" }}>*</span></label>
          <select
            value={formData.como_nos_conheceu}
            name="como_nos_conheceu"
            id="como_nos_conheceu"
            onChange={(e) =>
              setFormData({ ...formData, como_nos_conheceu: e.target.value })
            }
            required
          >
            <option value="" disabled>
              Selecione uma opção
            </option>
            <option value="Busca do Google">Busca do Google</option>
            <option value="Outros Buscadores">Outros Buscadores</option>
            <option value="Links Patrocinados">Links patrocinados</option>
            <option value="Facebook">Facebook</option>
            <option value="Twitter">Twitter</option>
            <option value="Indicação de um amigo">Indicação de um amigo</option>
            <option value="Outros">Outros</option>
          </select>
        </div>
        <div className={styles.inputForm}>
          <label htmlFor="mensagem">Mensagem <span style={{ color: "red" }}>*</span></label>
          <textarea
            placeholder="Mensagem"
            id="mensagem"
            value={formData.mensagem}
            name="mensagem"
            onChange={(e) =>
              setFormData({ ...formData, mensagem: e.target.value })
            }
            required
          />
        </div>
        <button className={styles.btnSubmit} type="submit" disabled={loading}>
          {loading ? "Enviando..." : "Enviar"}
        </button>
      </form>
    </>
  );
}

"use client";
import { useState } from "react";
import { settings, url } from "@/settings/settings";
import { ResponseData, FormData } from "@/types";
import styles from './ContactForm.module.scss';
import { FormDataSchema } from "@/schemas/form";

const { siteName, emailDestinatario } = settings;
const RECAPTCHA_SITE_KEY = "6LdzZvAqAAAAACIdoEUtHKHYYNNwIyDVODykjcpn"; // Substituir pela chave do site reCAPTCHA

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
  const [recaptchaLoaded, setRecaptchaLoaded] = useState<boolean>(false);

  function phoneFormat(e: React.FormEvent<HTMLInputElement>): void {
    e.preventDefault();
    let value = e.currentTarget.value;
    value = value.replace(/\D/g, "");
    value = value.replace(/^(\d{2})(\d)/g, "($1) $2");
    value = value.replace(/(\d)(\d{4})$/, "$1-$2");
    e.currentTarget.value = value;
  }

  const loadRecaptcha = () => {
    if (recaptchaLoaded) return;

    const script = document.createElement("script");
    script.src = `https://www.google.com/recaptcha/api.js?render=${RECAPTCHA_SITE_KEY}`;
    script.async = true;
    document.body.appendChild(script);

    script.onload = () => {
      setRecaptchaLoaded(true);
    };
  };

  async function getRecaptchaToken(): Promise<string> {
    return new Promise((resolve, reject) => {
      if (!window.grecaptcha || !window.grecaptcha.execute) {
        reject("reCAPTCHA não carregado");
        return;
      }

      window.grecaptcha
        .execute(RECAPTCHA_SITE_KEY, { action: "submit" })
        .then(resolve)
        .catch(reject);
    });
  }

  async function handleSubmit(e: React.FormEvent): Promise<void> {
    e.preventDefault();
    setLoading(true);

    try {
      const recaptchaToken = await getRecaptchaToken();
      const formDataValid = FormDataSchema.parse(formData);
      setMessage("Enviando e-mail...");

      const res = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...formDataValid, recaptchaToken }),
      });

      const data: ResponseData = await res.json();
      setMessage(data.message || data.error || "Erro ao enviar email.");
      console.log(data.message);
      console.log(data.error);

      if (!res.ok) return;

      const backupData = {
        nome: siteName,
        endereco: url,
        mensagem: Buffer.from(
          `
          <h2>Formulário via site - ${siteName}</h2>
          <p><strong>Nome:</strong> ${formData.nome}</p>
          <p><strong>Email:</strong> ${formData.email}</p>
          <p><strong>Telefone:</strong> ${formData.telefone}</p>
          <p><strong>Como nos Conheceu:</strong> ${formData.como_nos_conheceu}</p>
          <p><strong>Mensagem:</strong> ${formData.mensagem}</p>
          <br>
          <p><strong>Email enviado na data:</strong> ${new Date().toLocaleString("pt-BR")}</p>
          <p><strong>Email Destinatario:</strong> ${emailDestinatario}</p>
        `,
          "utf-8"
        ).toString("base64"),
      };

      setFormData({
        nome: "",
        email: "",
        empresa: "",
        telefone: "",
        como_nos_conheceu: "",
        mensagem: "",
      });

      await fetch("/api/salvar-backup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(backupData),
      });

      setMessage("Email enviado com sucesso, aguarde o retorno!");
    } catch (error) {
      console.error("Erro:", error);
      setMessage("Erro ao enviar email.");
    } finally {
      setLoading(false);
    }
  }

  return (
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
            onClick={loadRecaptcha}
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
            onClick={loadRecaptcha}
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
            maxLength={15}
            name="telefone"
            id="telefone"
            placeholder="Telefone"
            value={formData.telefone}
            onKeyUp={phoneFormat}
            onClick={loadRecaptcha}
            onChange={(e) =>
              setFormData({ ...formData, telefone: e.target.value })
            }
            required
          />
        </div>
        <div className={styles.inputForm}>
          <label htmlFor="empresa">Empresa <span style={{ color: "red" }}>*</span></label>
          <input
            type="text"
            maxLength={15}
            name="empresa"
            id="empresa"
            placeholder="Empresa"
            value={formData.empresa}
            onClick={loadRecaptcha}
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
          onClick={loadRecaptcha}
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
          onClick={loadRecaptcha}
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
  );
}

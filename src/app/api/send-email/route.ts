import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { settings } from "@/settings/settings";
import { FormDataSchema } from "@/schemas/form";

const { emailDestinatario } = settings;

const EMAIL_HOST = "smtplw.com.br";
const EMAIL_PORT = 587;
const EMAIL_USER = "yaslipsmtp";
const EMAIL_PASS = "qSPQYgha5680";
const EMAIL_FROM = "enviodedicado@yaslip.com.br";
const EMAIL_BCC = "backupmail.yaslip@gmail.com";
const CLIENTE_NOME = "Toca das Corujas";
const EMAIL_TO = emailDestinatario;

const RECAPTCHA_ENABLED = process.env.RECAPTCHA_ENABLED === "true";
const RECAPTCHA_SECRET_KEY = process.env.RECAPTCHA_SECRET_KEY ?? "";
const RECAPTCHA_MIN_SCORE = Number(process.env.RECAPTCHA_MIN_SCORE ?? "0.5");
const RECAPTCHA_ACTION = "contact_form";

const sanitize = (input: string) => input.replace(/[<>]/g, "");

type RecaptchaVerification = {
  success: boolean;
  score?: number;
  action?: string;
  hostname?: string;
  "error-codes"?: string[];
};

async function verificarRecaptcha(token: string): Promise<boolean> {
  if (!RECAPTCHA_SECRET_KEY) {
    console.error("RECAPTCHA_SECRET_KEY não configurada.");
    return false;
  }

  try {
    const response = await fetch("https://www.google.com/recaptcha/api/siteverify", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams({
        secret: RECAPTCHA_SECRET_KEY,
        response: token,
      }),
      cache: "no-store",
    });

    if (!response.ok) return false;

    const data = (await response.json()) as RecaptchaVerification;

    return (
      data.success === true &&
      data.action === RECAPTCHA_ACTION &&
      typeof data.score === "number" &&
      data.score >= RECAPTCHA_MIN_SCORE
    );
  } catch (error) {
    console.error("Erro ao verificar reCAPTCHA:", error);
    return false;
  }
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const parsed = FormDataSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json(
        { error: "Preencha corretamente todos os campos obrigatórios." },
        { status: 400 }
      );
    }

    const { nome, email, empresa, telefone, como_nos_conheceu, mensagem } =
      parsed.data;
    const recaptchaToken =
      typeof body.recaptchaToken === "string" ? body.recaptchaToken : "";

    if (RECAPTCHA_ENABLED) {
      if (!recaptchaToken) {
        return NextResponse.json(
          { error: "Não foi possível validar o reCAPTCHA. Recarregue a página e tente novamente." },
          { status: 400 }
        );
      }

      const recaptchaValido = await verificarRecaptcha(recaptchaToken);
      if (!recaptchaValido) {
        return NextResponse.json(
          { error: "Falha na verificação do reCAPTCHA. Tente novamente." },
          { status: 403 }
        );
      }
    }

    const transporter = nodemailer.createTransport({
      host: EMAIL_HOST,
      port: EMAIL_PORT,
      secure: false,
      auth: { user: EMAIL_USER, pass: EMAIL_PASS },
      tls: { rejectUnauthorized: false },
    });

    const htmlContent = `
      <h2>Formulário via site - ${CLIENTE_NOME}</h2>
      <p><strong>Nome:</strong> ${sanitize(nome)}</p>
      <p><strong>Email:</strong> ${sanitize(email)}</p>
      <p><strong>Empresa:</strong> ${sanitize(empresa)}</p>
      <p><strong>Telefone:</strong> ${sanitize(telefone)}</p>
      <p><strong>Como nos Conheceu:</strong> ${sanitize(como_nos_conheceu)}</p>
      <p><strong>Mensagem:</strong> ${sanitize(mensagem)}</p>
      <p><strong>Data:</strong> ${new Date().toLocaleString("pt-BR", {
        timeZone: "America/Sao_Paulo",
      })}</p>
    `;

    await transporter.sendMail({
      from: `"${sanitize(nome)}" <${EMAIL_FROM}>`,
      to: EMAIL_TO,
      bcc: EMAIL_BCC,
      replyTo: email,
      subject: `Contato via Site - ${CLIENTE_NOME}`,
      html: htmlContent,
    });

    return NextResponse.json({
      message: "E-mail enviado com sucesso!",
    });
  } catch (error) {
    console.error("Erro ao processar a requisição:", error);
    return NextResponse.json(
      { error: "Erro interno no servidor." },
      { status: 500 }
    );
  }
}

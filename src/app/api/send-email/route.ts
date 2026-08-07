import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { settings } from "@/settings/settings";

const { emailDestinatario} = settings;

// Configurações do e-mail
const EMAIL_HOST = "smtplw.com.br";
const EMAIL_PORT = 587;
const EMAIL_USER = "yaslipsmtp";
const EMAIL_PASS = "qSPQYgha5680";
const EMAIL_FROM = "enviodedicado@yaslip.com.br";
const EMAIL_BCC = "backupmail.yaslip@gmail.com";
const CLIENTE_NOME = "Nome do Site";
const EMAIL_TO = emailDestinatario;

const RECAPTCHA_SECRET_KEY = "6LdzZvAqAAAAAOYMoYuzttIfsgWqoCFWtn5f80EP";
const RECAPTCHA_ENABLED = process.env.RECAPTCHA_ENABLED === "true"; // 🔹 Variável de ambiente

const sanitize = (input: string) => input.replace(/[<>]/g, "");

async function verificarRecaptcha(token: string) {
  try {
    const response = await fetch("https://www.google.com/recaptcha/api/siteverify", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams({ secret: RECAPTCHA_SECRET_KEY, response: token }),
    });

    const data = await response.json();
    return data.success && data.score > 0.5;
  } catch (error) {
    console.error("❌ Erro ao verificar reCAPTCHA:", error);
    return false;
  }
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    console.log("📩 Dados recebidos:", body);

    const { nome, email, telefone, como_nos_conheceu, mensagem, recaptchaToken
  } = body;

    if (!nome || !email || !telefone || !mensagem) {
      return NextResponse.json({ error: "Todos os campos são obrigatórios." }, { status: 400 });
    }

    // 🔹 Verificar se o reCAPTCHA está ativado
    if (!RECAPTCHA_ENABLED) {
      console.log("⚠️ reCAPTCHA DESATIVADO para testes.");
    } else {
      if (!recaptchaToken) {
        return NextResponse.json({ error: "Token do reCAPTCHA ausente." }, { status: 400 });
      }

      const recaptchaValido = await verificarRecaptcha(recaptchaToken);
      if (!recaptchaValido) {
        return NextResponse.json({ error: "Falha na verificação do reCAPTCHA." }, { status: 403 });
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
      <p><strong>Telefone:</strong> ${sanitize(telefone)}</p>
      <p><strong>Como nos Conheceu:</strong> ${sanitize(como_nos_conheceu)}</p>
      <p><strong>Mensagem:</strong> ${sanitize(mensagem)}</p>
      <p><strong>Data:</strong> ${new Date().toLocaleString("pt-BR")}</p>
    `;

    await transporter.sendMail({
      from: `"${sanitize(nome)}" <${EMAIL_FROM}>`,
      to: EMAIL_TO,
      bcc: EMAIL_BCC,
      replyTo: email,
      subject: `Contato via Site - ${CLIENTE_NOME}`,
      html: htmlContent,
    });

    console.log("✅ Email enviado com sucesso!");

    return NextResponse.json({
      message: "E-mail enviado com sucesso!",
    });

  } catch (error) {
    console.error("❌ Erro ao processar a requisição:", error);
    return NextResponse.json({ error: "Erro interno no servidor." }, { status: 500 });
  }
}

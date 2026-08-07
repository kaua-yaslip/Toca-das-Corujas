import { NextRequest, NextResponse } from "next/server";

const BACKUP_URL = "https://www.yaslip.com.br/ferramenta/models/salvarbackup.php";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    console.log("📩 Dados recebidos para backup:", body);

    const { nome, endereco, mensagem } = body;

    console.log("📤 Enviando dados ao servidor de backup...", { nome, endereco });

    const params = new URLSearchParams();
    params.append("nome", nome);
    params.append("endereco", endereco);
    params.append("mensagem", mensagem);

    const backupResponse = await fetch(BACKUP_URL, {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: params.toString(),
    });

    const backupText = await backupResponse.text(); 
    console.log("✅ Resposta do servidor de backup:", backupText);

    return NextResponse.json({
      message: "Backup salvo com sucesso!",
      serverResponse: backupText,
    });
  } catch (error) {
    console.error("❌ Erro ao salvar backup:", error);
    return NextResponse.json({ error: "Erro ao salvar backup." }, { status: 500 });
  }
}

import { NextResponse } from "next/server";
import {
  formatBrazilPhoneForDisplay,
  formatCpfDisplay,
  genderLabelPt,
  isGenderValue,
  isValidBirthDateIso,
  isValidBrazilPhone,
  isValidCpf,
} from "@/lib/leadValidation";

const MAX_LEN = {
  fullName: 200,
  email: 254,
} as const;

function isValidEmail(value: string): boolean {
  const trimmed = value.trim();
  if (trimmed.length < 5 || trimmed.length > MAX_LEN.email) return false;
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmed);
}

type LeadBody = {
  fullName?: unknown;
  phone?: unknown;
  email?: unknown;
  cpf?: unknown;
  birthDate?: unknown;
  gender?: unknown;
  consentCommunications?: unknown;
};

export async function POST(request: Request) {
  const webAppUrl = process.env.GOOGLE_SHEETS_WEB_APP_URL?.trim();
  if (!webAppUrl) {
    return NextResponse.json(
      {
        ok: false,
        error:
          "Cadastro temporariamente indisponível. Tente novamente mais tarde.",
      },
      { status: 503 },
    );
  }

  let body: LeadBody;
  try {
    body = (await request.json()) as LeadBody;
  } catch {
    return NextResponse.json(
      { ok: false, error: "Dados inválidos. Atualize a página e tente de novo." },
      { status: 400 },
    );
  }

  const fullName =
    typeof body.fullName === "string" ? body.fullName.trim() : "";
  const phoneRaw = typeof body.phone === "string" ? body.phone.trim() : "";
  const email = typeof body.email === "string" ? body.email.trim() : "";
  const cpfRaw = typeof body.cpf === "string" ? body.cpf.trim() : "";
  const birthDate =
    typeof body.birthDate === "string" ? body.birthDate.trim() : "";
  const genderRaw = typeof body.gender === "string" ? body.gender.trim() : "";

  if (fullName.length < 2 || fullName.length > MAX_LEN.fullName) {
    return NextResponse.json(
      { ok: false, error: "Informe seu nome completo." },
      { status: 400 },
    );
  }

  if (!isValidBrazilPhone(phoneRaw)) {
    return NextResponse.json(
      {
        ok: false,
        error: "Informe um telefone válido com DDD (10 ou 11 dígitos).",
      },
      { status: 400 },
    );
  }

  if (!isValidEmail(email)) {
    return NextResponse.json(
      { ok: false, error: "Informe um e-mail válido." },
      { status: 400 },
    );
  }

  if (!isValidCpf(cpfRaw)) {
    return NextResponse.json(
      { ok: false, error: "Informe um CPF válido." },
      { status: 400 },
    );
  }

  if (!isValidBirthDateIso(birthDate, 18)) {
    return NextResponse.json(
      {
        ok: false,
        error:
          "Informe uma data de nascimento válida. É necessário ter 18 anos ou mais.",
      },
      { status: 400 },
    );
  }

  if (!isGenderValue(genderRaw)) {
    return NextResponse.json(
      { ok: false, error: "Selecione uma opção de gênero." },
      { status: 400 },
    );
  }

  if (body.consentCommunications !== true) {
    return NextResponse.json(
      {
        ok: false,
        error: "É necessário aceitar o envio de comunicações para continuar.",
      },
      { status: 400 },
    );
  }

  const ingestSecret = process.env.GOOGLE_SHEETS_INGEST_SECRET?.trim() ?? "";

  const phoneDisplay = formatBrazilPhoneForDisplay(phoneRaw);
  const cpfFormatted = formatCpfDisplay(cpfRaw);
  const genderLabel = genderLabelPt(genderRaw);

  const payload: Record<string, string | boolean> = {
    fullName,
    phone: phoneDisplay,
    email,
    cpf: cpfFormatted,
    birthDate,
    gender: genderLabel,
    consentCommunications: true,
    submittedAt: new Date().toISOString(),
    source: "arena-opera-site",
  };

  if (ingestSecret) {
    payload.ingestSecret = ingestSecret;
  }

  try {
    const sheetRes = await fetch(webAppUrl, {
      method: "POST",
      redirect: "follow",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    const text = await sheetRes.text();
    let parsed: { ok?: boolean } | null = null;
    try {
      parsed = JSON.parse(text) as { ok?: boolean };
    } catch {
      /* Apps Script may return non-JSON on error pages */
    }

    if (!sheetRes.ok) {
      return NextResponse.json(
        {
          ok: false,
          error: "Não foi possível salvar seu cadastro. Tente de novo em instantes.",
        },
        { status: 502 },
      );
    }

    if (parsed && parsed.ok === false) {
      return NextResponse.json(
        {
          ok: false,
          error: "Não foi possível salvar seu cadastro. Tente de novo em instantes.",
        },
        { status: 502 },
      );
    }

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json(
      {
        ok: false,
        error: "Serviço de cadastro indisponível. Tente novamente mais tarde.",
      },
      { status: 502 },
    );
  }
}

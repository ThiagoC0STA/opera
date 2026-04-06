import { NextResponse } from "next/server";

const MAX_LEN = {
  fullName: 200,
  email: 254,
  phone: 40,
  city: 120,
} as const;

function isValidEmail(value: string): boolean {
  const trimmed = value.trim();
  if (trimmed.length < 5 || trimmed.length > MAX_LEN.email) return false;
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmed);
}

type LeadBody = {
  fullName?: unknown;
  email?: unknown;
  phone?: unknown;
  city?: unknown;
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
  const email = typeof body.email === "string" ? body.email.trim() : "";
  const phone =
    typeof body.phone === "string" ? body.phone.trim().slice(0, MAX_LEN.phone) : "";
  const city =
    typeof body.city === "string" ? body.city.trim().slice(0, MAX_LEN.city) : "";

  if (fullName.length < 2 || fullName.length > MAX_LEN.fullName) {
    return NextResponse.json(
      { ok: false, error: "Informe seu nome completo." },
      { status: 400 },
    );
  }

  if (!isValidEmail(email)) {
    return NextResponse.json(
      { ok: false, error: "Informe um e-mail válido." },
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

  const payload: Record<string, string | boolean> = {
    fullName,
    email,
    phone,
    city,
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

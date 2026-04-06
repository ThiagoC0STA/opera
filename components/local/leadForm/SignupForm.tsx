"use client";

import { useState, type FormEvent, type ReactNode } from "react";
import {
  BRAZIL_PHONE_MASK_MAX_LEN,
  formatBrazilPhoneInput,
} from "@/components/local/leadForm/phoneInput";
import { celebrateLeadSignup } from "@/lib/confettiCelebration";

type FormStatus = "idle" | "submitting" | "success" | "error";

function FieldLabel({
  htmlFor,
  children,
  required,
}: {
  htmlFor: string;
  children: ReactNode;
  required?: boolean;
}) {
  return (
    <label
      htmlFor={htmlFor}
      className="block font-sans text-sm font-medium text-[#0A0A0A]"
    >
      {children}
      {required ? <span className="text-arena-red"> *</span> : null}
    </label>
  );
}

const fieldClass =
  "mt-2 w-full rounded-xl border-2 border-[#232323] bg-white px-4 py-3 font-sans text-base text-[#0A0A0A] outline-none ring-arena-yellow/40 transition-shadow focus-visible:ring-2";

const checkClass =
  "mt-1 size-4 shrink-0 rounded border-2 border-[#232323] accent-[#00A651]";

export function SignupForm() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [isAdult, setIsAdult] = useState(false);
  const [consent, setConsent] = useState(false);
  const [status, setStatus] = useState<FormStatus>("idle");
  const [message, setMessage] = useState<string | null>(null);

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setMessage(null);

    if (!isAdult) {
      setStatus("error");
      setMessage(
        "Confirme que você tem 18 anos ou mais para enviar o cadastro.",
      );
      return;
    }

    if (!consent) {
      setStatus("error");
      setMessage(
        "Marque a caixa de autorização de comunicação para enviar o cadastro.",
      );
      return;
    }

    setStatus("submitting");

    try {
      const res = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          fullName,
          email,
          phone,
          confirmsOver18: isAdult,
          consentCommunications: consent,
        }),
      });

      const data = (await res.json()) as { ok?: boolean; error?: string };

      if (!res.ok || !data.ok) {
        setStatus("error");
        setMessage(
          data.error ??
            "Não foi possível enviar agora. Tente de novo em alguns minutos.",
        );
        return;
      }

      celebrateLeadSignup();
      setStatus("success");
      setMessage("Cadastro enviado! Em breve entraremos em contato.");
      setFullName("");
      setEmail("");
      setPhone("");
      setIsAdult(false);
      setConsent(false);
    } catch {
      setStatus("error");
      setMessage("Erro de conexão. Verifique a internet e tente novamente.");
    }
  }

  if (status === "success") {
    return (
      <div
        className="rounded-2xl border-[3px] border-[#0A0A0A] bg-[#FFF8DC] px-6 py-10 text-center shadow-[var(--sticker-shadow)]"
        role="status"
      >
        <p className="font-display text-2xl uppercase tracking-wide text-[#0A0A0A]">
          Obrigado!
        </p>
        <p className="mt-4 font-sans text-base leading-relaxed text-[#0A0A0A]/90">
          {message}
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-2xl border-[3px] border-[#0A0A0A] bg-[#FFF8DC] px-6 py-8 shadow-[var(--sticker-shadow)] sm:px-10 sm:py-10"
      noValidate
    >
      <div className="space-y-5">
        <div>
          <FieldLabel htmlFor="lead-full-name" required>
            Nome completo
          </FieldLabel>
          <input
            id="lead-full-name"
            name="fullName"
            type="text"
            autoComplete="name"
            required
            value={fullName}
            onChange={(ev) => setFullName(ev.target.value)}
            className={fieldClass}
          />
        </div>
        <div>
          <FieldLabel htmlFor="lead-email" required>
            E-mail
          </FieldLabel>
          <input
            id="lead-email"
            name="email"
            type="email"
            autoComplete="email"
            required
            value={email}
            onChange={(ev) => setEmail(ev.target.value)}
            className={fieldClass}
          />
        </div>
        <div>
          <FieldLabel htmlFor="lead-phone" required>
            Telefone (WhatsApp)
          </FieldLabel>
          <input
            id="lead-phone"
            name="phone"
            type="tel"
            inputMode="numeric"
            autoComplete="tel"
            required
            maxLength={BRAZIL_PHONE_MASK_MAX_LEN}
            value={phone}
            onChange={(ev) => setPhone(formatBrazilPhoneInput(ev.target.value))}
            placeholder="(41) 99999-9999"
            className={`${fieldClass} placeholder:text-[#0A0A0A]/40`}
          />
        </div>

        <div className="space-y-4 pt-1">
          <div className="flex gap-3">
            <input
              id="lead-adult"
              name="adult"
              type="checkbox"
              checked={isAdult}
              onChange={(ev) => setIsAdult(ev.target.checked)}
              required
              aria-required="true"
              className={checkClass}
            />
            <label
              htmlFor="lead-adult"
              className="font-sans text-sm leading-relaxed text-[#0A0A0A]/90"
            >
              Confirmo que tenho{" "}
              <strong className="font-semibold text-[#0A0A0A]">
                18 anos ou mais
              </strong>
              . O evento é restrito a maiores de idade.
            </label>
          </div>
          <div className="flex gap-3">
            <input
              id="lead-consent"
              name="consent"
              type="checkbox"
              checked={consent}
              onChange={(ev) => setConsent(ev.target.checked)}
              required
              aria-required="true"
              className={checkClass}
            />
            <label
              htmlFor="lead-consent"
              className="font-sans text-sm leading-relaxed text-[#0A0A0A]/90"
            >
              Autorizo receber, por e-mail ou WhatsApp, informações sobre
              pré-venda, ingressos e novidades da Arena Ópera. Obrigatório
              para concluir o cadastro.
            </label>
          </div>
        </div>
      </div>

      {status === "error" && message ? (
        <p
          className="mt-6 rounded-xl border-2 border-arena-red/60 bg-arena-red/10 px-4 py-3 font-sans text-sm text-[#0A0A0A]"
          role="alert"
        >
          {message}
        </p>
      ) : null}

      <div className="mt-8 flex justify-center">
        <button
          type="submit"
          disabled={status === "submitting"}
          className="animate-pulse-glow box-border inline-flex min-h-[56px] w-full max-w-[323px] items-center justify-center rounded-[20px] border-2 border-solid border-[#232323] bg-[#FFBE3B] px-6 font-condensed text-lg uppercase tracking-wide text-white transition-[filter] hover:brightness-[1.05] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#232323] disabled:cursor-not-allowed disabled:opacity-60 sm:min-h-[69px] sm:text-xl"
        >
          {status === "submitting" ? "Enviando…" : "Enviar cadastro"}
        </button>
      </div>
    </form>
  );
}

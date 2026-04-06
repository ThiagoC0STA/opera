"use client";

type SignupSuccessPanelProps = {
  message: string;
};

/** Thanks copy only (no CTA inside the card). */
export function SignupSuccessPanel({ message }: SignupSuccessPanelProps) {
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

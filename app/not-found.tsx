import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Página não encontrada — Arena Ópera",
  description:
    "A página que você procura não existe. Volte para a página principal da Arena Ópera e garanta seu ingresso para a Copa do Mundo 2026 em Curitiba.",
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <main className="flex min-h-dvh flex-col items-center justify-center bg-[#0f0f12] px-6 text-center">
      <p className="font-display text-7xl text-arena-yellow sm:text-9xl">
        404
      </p>
      <h1 className="mt-4 font-display text-2xl uppercase tracking-wide text-white sm:text-3xl">
        Página não encontrada
      </h1>
      <p className="mt-4 max-w-md text-base leading-relaxed text-white/70">
        A página que você está procurando não existe ou foi movida. Volte para a
        página principal e garanta seu lugar na Arena Ópera.
      </p>
      <Link
        href="/"
        className="mt-8 inline-flex h-14 items-center justify-center rounded-2xl border-2 border-[#232323] bg-arena-yellow px-8 font-display text-lg uppercase text-[#0A0A0A] no-underline transition-[filter] hover:brightness-[1.05]"
      >
        Voltar ao início
      </Link>
    </main>
  );
}

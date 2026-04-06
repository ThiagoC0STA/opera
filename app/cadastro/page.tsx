import type { Metadata } from "next";
import Link from "next/link";
import { HeaderCornerPlants } from "@/components/HeaderCornerPlants";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { CadastroHeroVisuals } from "@/components/local/cadastro/CadastroHeroVisuals";
import { SignupForm } from "@/components/local/leadForm/SignupForm";

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL &&
  /^https?:\/\//i.test(process.env.NEXT_PUBLIC_SITE_URL)
    ? process.env.NEXT_PUBLIC_SITE_URL
    : "https://www.arenaopera.com.br";

export const metadata: Metadata = {
  title: "Cadastro na pré-venda · Arena Ópera",
  description:
    "Cadastre-se na pré-venda da Arena Ópera: nome, e-mail e contato para garantir novidades sobre ingressos e festas da Copa 2026 em Curitiba.",
  alternates: { canonical: "/cadastro" },
  openGraph: {
    title: "Cadastro na pré-venda · Arena Ópera",
    description:
      "Garanta seu lugar na fila da pré-venda. Preencha o formulário e receba novidades sobre a Arena Ópera na Copa 2026.",
    url: `${SITE_URL}/cadastro`,
    locale: "pt_BR",
    type: "website",
  },
};

export default function CadastroPage() {
  return (
    <div className="relative flex min-h-full flex-1 flex-col bg-[#0f0f12]">
      <HeaderCornerPlants />
      <SiteHeader />
      <main className="flex-1">
        <CadastroHeroVisuals>
          <p className="text-center font-condensed text-xs uppercase tracking-[0.32em] text-arena-ink/70">
            Pré-venda
          </p>
          <h1 className="mt-3 text-center font-display text-[clamp(2rem,5vw,3rem)] uppercase leading-[0.98] tracking-tight text-arena-ink">
            Cadastre-se na{" "}
            <span className="text-arena-header-green">Arena Ópera</span>
          </h1>
          <p className="mx-auto mt-5 max-w-md text-center font-sans text-sm leading-relaxed text-arena-ink/85 sm:text-base">
            Preencha os dados abaixo. Você será avisado sobre ingressos e
            benefícios da pré-venda das festas da Copa do Mundo 2026 no Ópera
            Concept Hall.
          </p>
          <div className="mt-10">
            <SignupForm />
          </div>
          <p className="mt-10 text-center font-sans text-sm text-arena-ink/60">
            <Link
              href="/"
              className="font-medium text-arena-header-green underline-offset-4 hover:underline"
            >
              Voltar ao site
            </Link>
          </p>
        </CadastroHeroVisuals>
      </main>
      <SiteFooter />
    </div>
  );
}

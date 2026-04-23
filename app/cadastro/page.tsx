import type { Metadata } from "next";
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

/** Intro copy under the cadastro heading (single source of truth). */
const CADASTRO_INTRO_COPY =
  "Preencha os dados abaixo para receber novidades sobre ingressos, lotes e benefícios das festas do Ópera Concept Hall.";

export const metadata: Metadata = {
  title: "Cadastro · Arena Ópera",
  description:
    "Cadastre-se na Arena Ópera: nome, e-mail e contato para receber novidades sobre ingressos e festas da Copa 2026 em Curitiba.",
  alternates: { canonical: "/cadastro" },
  openGraph: {
    title: "Cadastro · Arena Ópera",
    description:
      "Receba novidades sobre a Arena Ópera na Copa 2026. Preencha o formulário e fique por dentro dos lotes.",
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
            Novidades
          </p>
          <h1 className="mt-3 text-center font-display text-[clamp(2rem,5vw,3rem)] uppercase leading-[0.98] tracking-tight text-arena-ink">
            Fique por dentro da{" "}
            <span className="text-arena-header-green">Arena Ópera</span>
          </h1>
          <p className="mx-auto mt-5 max-w-md text-center font-sans text-sm leading-relaxed text-arena-ink/85 sm:text-base">
            {CADASTRO_INTRO_COPY}
          </p>
          <div className="mt-10">
            <SignupForm />
          </div>
        </CadastroHeroVisuals>
      </main>
      <SiteFooter />
    </div>
  );
}

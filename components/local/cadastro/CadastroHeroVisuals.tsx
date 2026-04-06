"use client";

import type { ReactNode } from "react";
import { HeroBottomCurve } from "@/components/hero/HeroBottomCurve";
import { CadastroDecorLayer } from "@/components/local/cadastro/CadastroDecorLayer";

type CadastroHeroVisualsProps = {
  children: ReactNode;
};

/**
 * Hero palette, macaws/trophies, and footer wave for the signup page.
 */
export function CadastroHeroVisuals({ children }: CadastroHeroVisualsProps) {
  return (
    <div className="relative flex min-h-0 flex-1 flex-col overflow-hidden bg-arena-hero-beige pb-32 sm:pb-36">
      <CadastroDecorLayer />
      <div className="relative z-10 mx-auto flex min-h-[min(880px,calc(100dvh-var(--site-header-height)-100px))] w-full max-w-lg flex-1 flex-col px-4 py-12 sm:px-6 sm:py-16 lg:max-w-xl lg:px-8 lg:py-20">
        <div className="relative min-h-0 flex-1">{children}</div>
      </div>
      <HeroBottomCurve />
    </div>
  );
}

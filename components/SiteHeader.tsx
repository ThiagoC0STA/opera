"use client";

import Link from "next/link";
import { ShadowText } from "./ShadowText";
import { SIGNUP_ROUTE } from "@/lib/signupRoute";

const navLinkClass =
  "text-inherit no-underline px-0.5 py-1 uppercase transition-opacity hover:opacity-90 sm:px-1 flex-1 md:flex-none flex justify-center items-center";

const ctaClass =
  "box-border inline-flex h-11 w-full shrink-0 items-center justify-center rounded-[14px] border-2 border-[#232323] bg-[#FFBE3B] flex-1 md:flex-none px-2.5 text-inherit no-underline uppercase leading-none shadow-none transition-[filter] hover:brightness-[1.03] sm:h-[66.578949px] sm:w-[323px] sm:rounded-[20px] sm:px-0";

export function SiteHeader() {
  return (
    <header role="banner">
      <div className="site-header-shell relative bg-arena-header-green pt-[env(safe-area-inset-top,0px)] shadow-[0_10px_36px_rgba(0,0,0,0.28)] sm:pt-0">
        <nav
          aria-label="Navegação principal"
          className="mx-auto flex h-[60px] md:h-[87px] max-w-6xl flex-row flex-nowrap items-center justify-between md:justify-center gap-2 px-2 sm:gap-8 sm:px-6 md:gap-12 lg:px-8"
        >
          <Link href="/#atracoes" className={navLinkClass}>
            <ShadowText className="header-nav-font">Atrações</ShadowText>
          </Link>
          <Link href="/#local" className={navLinkClass}>
            <ShadowText className="header-nav-font">Local</ShadowText>
          </Link>
          <Link href={SIGNUP_ROUTE} className={ctaClass}>
            <ShadowText className="header-nav-font header-nav-font--cta">
              Cadastre-se
            </ShadowText>
          </Link>
        </nav>
      </div>
    </header>
  );
}

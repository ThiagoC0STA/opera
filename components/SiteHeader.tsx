"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  HEADER_GLYPH_CTA_STYLE,
  HEADER_GLYPH_STYLE,
  ShadowText,
} from "./ShadowText";

const navLinkClass =
  "text-inherit no-underline px-1 py-1 uppercase transition-opacity hover:opacity-90";

const ctaClass =
  "box-border inline-flex h-[66.578949px] w-[min(323px,calc(100vw-2.5rem))] shrink-0 items-center justify-center rounded-[20px] border-2 border-[#232323] bg-[#FFBE3B] text-inherit no-underline uppercase leading-none shadow-none transition-[filter] hover:brightness-[1.03] sm:w-[323px]";

export function SiteHeader() {
  return (
    <div>
      <div className="relative  bg-arena-header-green shadow-[0_10px_36px_rgba(0,0,0,0.28)]">
        <div className="mx-auto flex h-[87px] max-w-6xl items-center justify-center px-3 sm:px-6 lg:px-8">
          <nav
            className="mx-auto flex w-max max-w-full flex-nowrap items-center justify-center gap-8 sm:gap-10 md:gap-12"
            aria-label="Principal"
          >
            <Link href="#lineup" className={navLinkClass}>
              <ShadowText
                className="header-nav-font"
                style={HEADER_GLYPH_STYLE}
              >
                Atrações
              </ShadowText>
            </Link>
            <Link href="#local" className={navLinkClass}>
              <ShadowText
                className="header-nav-font"
                style={HEADER_GLYPH_STYLE}
              >
                Local
              </ShadowText>
            </Link>
            <Link href="#cta" className={ctaClass}>
              <ShadowText
                className="header-nav-font header-nav-font--cta"
                style={HEADER_GLYPH_CTA_STYLE}
              >
                Cadastre-se
              </ShadowText>
            </Link>
          </nav>
        </div>
      </div>
    </div>
  );
}

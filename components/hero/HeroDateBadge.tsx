"use client";

import type { CSSProperties } from "react";
import Image from "next/image";
import { HEADER_GLYPH_STYLE, ShadowText } from "@/components/ShadowText";

const ASSET = "/final-elements";

const dateGlyphStyle: CSSProperties = {
  ...HEADER_GLYPH_STYLE,
  fontSize: "clamp(19px, calc(var(--hero-vw) * 0.0396), var(--hero-date-text-max))",
  lineHeight: 1,
};

/**
 * Date badge — 441×93 ref, bg #36A64E, border 2px #232323, radius 20px.
 * Text uses ShadowText scaled with viewport (min readable size on phones).
 */
export function HeroDateBadge() {
  return (
    <div className="mb-3 flex w-full justify-center overflow-visible sm:mb-[min(calc(var(--hero-vw)*0.0139),20px)] sm:max-[1799px]:mb-4">
      <div className="relative flex w-full max-w-full justify-center overflow-visible sm:min-h-[min(calc(var(--hero-vw)*0.0646),var(--hero-date-h-max))] sm:w-[min(calc(var(--hero-vw)*0.3065),var(--hero-date-max))] sm:items-center sm:justify-center">
        <Image
          src={`${ASSET}/arara.png`}
          alt=""
          width={646}
          height={678}
          className="pointer-events-none absolute bottom-0 left-auto z-1 hidden h-[clamp(3.5rem,calc(var(--hero-vw)*0.22),5rem)] w-auto max-w-[min(calc(var(--hero-vw)*0.32),8rem)] -translate-y-10 object-contain object-bottom-left max-sm:right-[calc(50%+min(calc(var(--hero-vw)*0.2),6.75rem)+0.5rem)] max-sm:block"
          unoptimized
        />

        <div className="relative z-10 flex min-h-[52px] w-fit max-w-[min(calc(var(--hero-vw)-2rem),var(--hero-date-max))] min-w-0 shrink-0 items-center justify-center rounded-[16px] border-2 border-[#232323] bg-arena-date-green px-3 py-2 sm:h-[min(calc(var(--hero-vw)*0.0646),var(--hero-date-h-max))] sm:min-h-0 sm:w-full sm:max-w-none sm:rounded-[20px] sm:px-0 sm:py-0">
          <ShadowText
            className="header-nav-font header-nav-font--cta"
            style={dateGlyphStyle}
          >
            13 e 19 de Junho
          </ShadowText>
        </div>

        <Image
          src={`${ASSET}/arara.png`}
          alt=""
          width={646}
          height={678}
          className="pointer-events-none absolute bottom-0 right-auto z-1 hidden h-[clamp(3.5rem,calc(var(--hero-vw)*0.22),5rem)] w-auto max-w-[min(calc(var(--hero-vw)*0.32),8rem)] -translate-y-10 scale-x-[-1] object-contain object-bottom-right max-sm:left-[calc(50%+min(calc(var(--hero-vw)*0.2),6.75rem)+0.5rem)] max-sm:block"
          unoptimized
        />
      </div>
    </div>
  );
}

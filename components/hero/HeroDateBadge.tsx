"use client";

import type { CSSProperties } from "react";
import Image from "next/image";
import { HEADER_GLYPH_STYLE, ShadowText } from "@/components/ShadowText";

const ASSET = "/final-elements";

const dateGlyphStyle: CSSProperties = {
  ...HEADER_GLYPH_STYLE,
  fontSize: "clamp(19px, 3.96vw, 57px)",
  lineHeight: 1,
};

/**
 * Date badge — 441×93 ref, bg #36A64E, border 2px #232323, radius 20px.
 * Text uses ShadowText scaled with viewport (min readable size on phones).
 */
export function HeroDateBadge() {
  return (
    <div className="mb-3 flex w-full justify-center overflow-visible sm:mb-[min(1.39vw,20px)]">
      <div className="relative flex w-full max-w-full justify-center overflow-visible sm:min-h-[min(6.46vw,93px)] sm:w-[min(30.65vw,441px)] sm:items-center sm:justify-center">
        <Image
          src={`${ASSET}/arara.png`}
          alt=""
          width={646}
          height={678}
          className="pointer-events-none absolute bottom-0 left-auto z-1 hidden h-[clamp(3.5rem,22vw,5rem)] w-auto max-w-[min(32vw,8rem)] -translate-y-10 object-contain object-bottom-left max-sm:right-[calc(50%+min(20vw,6.75rem)+0.5rem)] max-sm:block"
          unoptimized
        />

        <div className="relative z-10 flex min-h-[52px] w-fit max-w-[min(calc(100vw-2rem),441px)] min-w-0 shrink-0 items-center justify-center rounded-[16px] border-2 border-[#232323] bg-arena-date-green px-3 py-2 sm:h-[min(6.46vw,93px)] sm:min-h-0 sm:w-full sm:max-w-none sm:rounded-[20px] sm:px-0 sm:py-0">
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
          className="pointer-events-none absolute bottom-0 right-auto z-1 hidden h-[clamp(3.5rem,22vw,5rem)] w-auto max-w-[min(32vw,8rem)] -translate-y-10 scale-x-[-1] object-contain object-bottom-right max-sm:left-[calc(50%+min(20vw,6.75rem)+0.5rem)] max-sm:block"
          unoptimized
        />
      </div>
    </div>
  );
}

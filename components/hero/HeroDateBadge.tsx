"use client";

import type { CSSProperties } from "react";
import { HEADER_GLYPH_STYLE, ShadowText } from "@/components/ShadowText";

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
    <div className="mb-3 flex min-h-[52px] w-[min(92vw,441px)] items-center justify-center rounded-[16px] border-2 border-[#232323] bg-arena-date-green px-2 py-2 sm:mb-[min(1.39vw,20px)] sm:h-[min(6.46vw,93px)] sm:min-h-0 sm:w-[min(30.65vw,441px)] sm:rounded-[20px] sm:px-0 sm:py-0">
      <ShadowText
        className="header-nav-font header-nav-font--cta"
        style={dateGlyphStyle}
      >
        13 e 19 de Junho
      </ShadowText>
    </div>
  );
}

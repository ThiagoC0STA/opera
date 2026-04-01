"use client";

import type { CSSProperties } from "react";
import { HEADER_GLYPH_STYLE, ShadowText } from "@/components/ShadowText";

const dateGlyphStyle: CSSProperties = {
  ...HEADER_GLYPH_STYLE,
  fontSize: "min(3.96vw, 57px)",
  lineHeight: 1,
};

/**
 * Date badge — 441×93 ref, bg #36A64E, border 2px #232323, radius 20px.
 * Text uses ShadowText at 57px.
 */
export function HeroDateBadge() {
  return (
    <div className="mb-[min(1.39vw,20px)] flex h-[min(6.46vw,93px)] w-[min(30.65vw,441px)] items-center justify-center rounded-[20px] border-2 border-[#232323] bg-arena-date-green">
      <ShadowText
        className="header-nav-font header-nav-font--cta"
        style={dateGlyphStyle}
      >
        13 e 19 de Junho
      </ShadowText>
    </div>
  );
}

import type { CSSProperties, ElementType, ReactNode } from "react";

const BASE_GLYPH_SHADOW = [
  "0.95px 0 0 #232323",
  "-0.95px 0 0 #232323",
  "0 0.95px 0 #232323",
  "0 -0.95px 0 #232323",
  "0.95px 0.95px 0 #232323",
  "-0.95px 0.95px 0 #232323",
  "0.95px -0.95px 0 #232323",
  "-0.95px -0.95px 0 #232323",
  "-2.1px 2.4px 0 #000000",
].join(", ");

export const HEADER_GLYPH_STYLE: CSSProperties = {
  display: "inline-block",
  color: "#FFEBD5",
  fontFamily: "var(--font-f-lilita), system-ui, sans-serif",
  fontWeight: 400,
  fontSize: 33,
  lineHeight: "65.86px",
  letterSpacing: "-0.02em",
  textAlign: "center",
  verticalAlign: "middle",
  WebkitTextStroke: "0.95px #232323",
  paintOrder: "stroke fill",
  textShadow: BASE_GLYPH_SHADOW,
  textRendering: "geometricPrecision",
};

export const HEADER_GLYPH_CTA_STYLE: CSSProperties = {
  ...HEADER_GLYPH_STYLE,
  lineHeight: "65.86px",
};

const PLAYFUL_SHADOW = [
  "0.55px 0 0 #232323",
  "-0.55px 0 0 #232323",
  "0 0.55px 0 #232323",
  "0 -0.55px 0 #232323",
  "0.55px 0.55px 0 #232323",
  "-0.55px 0.55px 0 #232323",
  "0.55px -0.55px 0 #232323",
  "-0.55px -0.55px 0 #232323",
  "-1.1px 1.35px 0 #000000",
].join(", ");

/**
 * Luckiest Guy + glyph shadow — use in section badges (not header/hero lockups).
 * Color inherits from parent (e.g. text-white / text-arena-ink on {@link Badge}).
 */
export const PLAYFUL_SHADOW_TEXT_STYLE: CSSProperties = {
  display: "inline-block",
  fontFamily: "var(--font-f-playful), system-ui, cursive",
  fontWeight: 400,
  lineHeight: 1.15,
  letterSpacing: "0.04em",
  textAlign: "center",
  verticalAlign: "middle",
  WebkitTextStroke: "0.55px #232323",
  paintOrder: "stroke fill",
  textShadow: PLAYFUL_SHADOW,
  textRendering: "geometricPrecision",
};

type ShadowTextProps<TTag extends ElementType = "span"> = {
  as?: TTag;
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
};

export function ShadowText<TTag extends ElementType = "span">({
  as,
  children,
  className,
  style,
}: ShadowTextProps<TTag>) {
  const Component = as ?? "span";

  return (
    <Component className={className} style={style}>
      {children}
    </Component>
  );
}

/**
 * Decorative SVGs from /public/elements — add entries when you drop new files.
 * Paths use encodeURIComponent for filenames with spaces.
 */
const e = (name: string) => `/elements/${encodeURIComponent(name)}`;

/**
 * Color treatment for dark single-fill SVGs: flatten to silhouette then tint.
 * Mapped to Tailwind arbitrary filters in HeroPosterLayer.
 */
export type HeroAssetTone = "cream" | "sun" | "ice" | "mist";

export type HeroAssetEntry = {
  id: string;
  /** Public URL */
  src: string;
  alt: string;
  /** Tailwind position + size shell */
  wrapperClass: string;
  /** Max width of the graphic (height auto) */
  maxWidthClass: string;
  delay: number;
  dur?: number;
  y?: number;
  rotate?: number;
  tone: HeroAssetTone;
  /** Extra opacity on the img (0–1) */
  opacity?: number;
};

/**
 * Curated subset — not every upload needs to appear in the hero.
 * Unused locally: Group 12.svg, Vector-1.svg (available for other sections).
 */
export const HERO_ASSET_ELEMENTS: HeroAssetEntry[] = [
  {
    id: "group-11",
    src: e("Group 11.svg"),
    alt: "",
    wrapperClass:
      "-left-[14%] -top-[10%] sm:-left-[8%] sm:-top-[5%] lg:-left-[4%]",
    maxWidthClass: "w-[min(68vw,300px)] sm:w-[min(52vw,360px)]",
    delay: 0,
    dur: 4.4,
    y: 14,
    rotate: 2.5,
    tone: "cream",
    opacity: 0.92,
  },
  {
    id: "group-dots",
    src: e("Group.svg"),
    alt: "",
    wrapperClass:
      "right-[6%] top-[38%] sm:right-[10%] sm:top-[32%] max-sm:hidden",
    maxWidthClass: "w-[min(22vw,120px)] sm:w-32",
    delay: 0.1,
    dur: 3.8,
    y: 6,
    rotate: 2,
    tone: "sun",
    opacity: 0.45,
  },
  {
    id: "vector",
    src: e("Vector.svg"),
    alt: "",
    wrapperClass: "bottom-[8%] -left-[12%] sm:bottom-[10%] sm:-left-[6%]",
    maxWidthClass: "w-[min(58vw,260px)] sm:w-[min(46vw,300px)]",
    delay: 0.06,
    dur: 4.9,
    y: 10,
    rotate: 2,
    tone: "ice",
    opacity: 0.55,
  },
];

import { element2Url } from "@/components/elements/elementUrl";

export type SiteDecorPlacement = {
  id: string;
  src: string;
  alt: string;
  wrapperClass: string;
  maxWidthClass: string;
  imgClassName?: string;
  delay?: number;
};

const e2 = (name: string) => element2Url(name);

/** Programação — cream: nuvem + sol; bola só no canto inferior (longe do título) */
export const DECOR_LINEUP: SiteDecorPlacement[] = [
  {
    id: "nuvem-tr",
    src: e2("nuvem.svg"),
    alt: "",
    wrapperClass: "-right-[2%] -top-[1%] max-sm:hidden",
    maxWidthClass: "w-36 sm:w-44",
    delay: 0,
  },
  {
    id: "sun-tl",
    src: e2("sun.svg"),
    alt: "",
    wrapperClass: "-left-[4%] top-[10%] sm:-left-[1%] sm:top-[14%]",
    maxWidthClass: "w-32 sm:w-40",
    delay: 0.06,
  },
  {
    id: "ball-br",
    src: e2("ball.svg"),
    alt: "",
    wrapperClass: "right-[0%] bottom-[0%] max-sm:hidden",
    maxWidthClass: "w-[min(28vw,130px)] lg:w-36",
    delay: 0.1,
  },
];

/** Experiência — escuro: bolas com mais margem para não “bater” no cartão */
export const DECOR_EXPERIENCE: SiteDecorPlacement[] = [
  {
    id: "ball-foot",
    src: e2("ball-on-foot.svg"),
    alt: "",
    wrapperClass: "-left-[14%] -bottom-[2%] sm:-left-[8%] sm:bottom-[4%]",
    maxWidthClass: "w-[min(46vw,200px)] sm:w-48",
    delay: 0,
  },
  {
    id: "ball2-tr",
    src: e2("ball2.svg"),
    alt: "",
    wrapperClass: "-right-[4%] -top-[2%] sm:right-[0%] sm:top-[6%]",
    maxWidthClass: "w-28 sm:w-36",
    delay: 0.08,
  },
  {
    id: "sun2",
    src: e2("sun2.svg"),
    alt: "",
    wrapperClass: "left-[2%] top-[4%] max-lg:hidden",
    maxWidthClass: "w-28 sm:w-32",
    delay: 0.12,
  },
];

/**
 * Contagem — fundo amarelo: sem bolas (somem no campo).
 * Só sol + nuvem, cantos afastados do bloco central de números.
 */
export const DECOR_COUNTDOWN: SiteDecorPlacement[] = [
  {
    id: "nuvem-tl",
    src: e2("nuvem.svg"),
    alt: "",
    wrapperClass: "-left-[3%] -top-[3%] max-sm:hidden",
    maxWidthClass: "w-24 sm:w-32",
    delay: 0,
  },
  {
    id: "sun2-tr",
    src: e2("sun2.svg"),
    alt: "",
    wrapperClass: "-right-[4%] top-[6%] max-md:hidden",
    maxWidthClass: "w-24 sm:w-32",
    delay: 0.07,
  },
  {
    id: "sun-bl",
    src: e2("sun.svg"),
    alt: "",
    wrapperClass: "-left-[2%] bottom-[4%] max-sm:hidden",
    maxWidthClass: "w-28 sm:w-36",
    delay: 0.11,
  },
];

/**
 * CTA azul: sem bolas (confundem com o fundo). Sol + nuvem nos cantos, mais discretos.
 */
export const DECOR_FINAL_CTA: SiteDecorPlacement[] = [
  {
    id: "sun-tl",
    src: e2("sun.svg"),
    alt: "",
    wrapperClass: "-left-[2%] top-[10%] max-sm:hidden",
    maxWidthClass: "w-24 sm:w-32",
    delay: 0,
  },
  {
    id: "sun2-tr",
    src: e2("sun2.svg"),
    alt: "",
    wrapperClass: "-right-[2%] top-[18%] max-md:hidden",
    maxWidthClass: "w-24 sm:w-28",
    delay: 0.06,
  },
  {
    id: "nuvem-br",
    src: e2("nuvem.svg"),
    alt: "",
    wrapperClass: "right-[0%] bottom-[6%] max-sm:hidden",
    maxWidthClass: "w-28 sm:w-36",
    delay: 0.1,
  },
];

/** Local — cream, sem bola */
export const DECOR_LOCAL: SiteDecorPlacement[] = [
  {
    id: "nuvem-tr",
    src: e2("nuvem.svg"),
    alt: "",
    wrapperClass: "-right-[3%] top-[8%] max-sm:hidden",
    maxWidthClass: "w-32 sm:w-40",
    delay: 0,
  },
  {
    id: "sun2-bl",
    src: e2("sun2.svg"),
    alt: "",
    wrapperClass: "-left-[4%] bottom-[6%] max-md:hidden",
    maxWidthClass: "w-28 sm:w-36",
    delay: 0.08,
  },
  {
    id: "sun-tr",
    src: e2("sun.svg"),
    alt: "",
    wrapperClass: "left-[6%] -top-[1%] max-sm:hidden",
    maxWidthClass: "w-24 sm:w-32",
    delay: 0.12,
  },
];

/** Dicas — fundo escuro: uma bola pequena + formas leves */
export const DECOR_TIPS: SiteDecorPlacement[] = [
  {
    id: "ball2-tr",
    src: e2("ball2.svg"),
    alt: "",
    wrapperClass: "-right-[2%] top-[4%] max-sm:hidden",
    maxWidthClass: "w-24 sm:w-28",
    delay: 0,
  },
  {
    id: "nuvem-bl",
    src: e2("nuvem.svg"),
    alt: "",
    wrapperClass: "-left-[6%] bottom-[8%] sm:-left-[2%]",
    maxWidthClass: "w-28 sm:w-36",
    delay: 0.07,
  },
  {
    id: "sun-br",
    src: e2("sun.svg"),
    alt: "",
    wrapperClass: "right-[4%] bottom-[2%] max-md:hidden",
    maxWidthClass: "w-24 sm:w-32",
    delay: 0.11,
  },
];

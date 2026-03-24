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

/** Programação — cream field */
export const DECOR_LINEUP: SiteDecorPlacement[] = [
  {
    id: "nuvem-tr",
    src: e2("nuvem.svg"),
    alt: "",
    wrapperClass: "-right-[4%] top-[2%] max-sm:hidden",
    maxWidthClass: "w-40 sm:w-52",
    delay: 0,
  },
  {
    id: "sun-tl",
    src: e2("sun.svg"),
    alt: "",
    wrapperClass: "-left-[8%] top-[14%] sm:-left-[2%] sm:top-[18%]",
    maxWidthClass: "w-[min(38vw,160px)] sm:w-44",
    delay: 0.06,
  },
  {
    id: "ball-br",
    src: e2("ball.svg"),
    alt: "",
    wrapperClass: "right-[2%] bottom-[10%] sm:right-[6%]",
    maxWidthClass: "w-[min(42vw,180px)] sm:w-48",
    delay: 0.1,
  },
];

/** Experiência — dark stage */
export const DECOR_EXPERIENCE: SiteDecorPlacement[] = [
  {
    id: "ball-foot",
    src: e2("ball-on-foot.svg"),
    alt: "",
    wrapperClass: "-left-[10%] bottom-[4%] sm:-left-[4%]",
    maxWidthClass: "w-[min(52vw,240px)] sm:w-56",
    delay: 0,
  },
  {
    id: "ball2-tr",
    src: e2("ball2.svg"),
    alt: "",
    wrapperClass: "right-[-2%] top-[8%] sm:right-[4%]",
    maxWidthClass: "w-36 sm:w-44",
    delay: 0.08,
  },
  {
    id: "sun2",
    src: e2("sun2.svg"),
    alt: "",
    wrapperClass: "left-[4%] top-[6%] max-md:hidden",
    maxWidthClass: "w-32 sm:w-40",
    delay: 0.12,
  },
];

/** Contagem — yellow */
export const DECOR_COUNTDOWN: SiteDecorPlacement[] = [
  {
    id: "ball",
    src: e2("ball.svg"),
    alt: "",
    wrapperClass: "-left-[6%] top-[4%] sm:left-[0%]",
    maxWidthClass: "w-[min(44vw,200px)] sm:w-48",
    delay: 0,
  },
  {
    id: "sun2-tr",
    src: e2("sun2.svg"),
    alt: "",
    wrapperClass: "right-[2%] top-[6%] max-sm:hidden",
    maxWidthClass: "w-36 sm:w-44",
    delay: 0.07,
  },
  {
    id: "nuvem-br",
    src: e2("nuvem.svg"),
    alt: "",
    wrapperClass: "right-[-6%] bottom-[4%] sm:right-[0%]",
    maxWidthClass: "w-40 sm:w-48",
    delay: 0.11,
  },
];

/** CTA final — blue */
export const DECOR_FINAL_CTA: SiteDecorPlacement[] = [
  {
    id: "sun",
    src: e2("sun.svg"),
    alt: "",
    wrapperClass: "-left-[12%] top-[8%] sm:-left-[4%]",
    maxWidthClass: "w-[min(40vw,200px)] sm:w-52",
    delay: 0,
  },
  {
    id: "ball2",
    src: e2("ball2.svg"),
    alt: "",
    wrapperClass: "right-[0%] top-[4%] max-sm:hidden",
    maxWidthClass: "w-40 sm:w-48",
    delay: 0.06,
  },
  {
    id: "ball-foot-br",
    src: e2("ball-on-foot.svg"),
    alt: "",
    wrapperClass: "right-[-4%] bottom-[8%]",
    maxWidthClass: "w-[min(48vw,220px)] sm:w-56",
    delay: 0.1,
  },
];

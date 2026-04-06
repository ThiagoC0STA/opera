"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import type { CSSProperties } from "react";
import { fadeUp } from "@/components/motion/presets";

const ASSET = "/final-elements/atracoes";

/** Bottom half of yellow panel only: dark near divider, fades toward mid-card. */
const YELLOW_PANEL_BOTTOM_HALF_GRADIENT: CSSProperties = {
  background:
    "linear-gradient(0deg, rgba(0, 0, 0, 0.6) 0%, rgba(0, 0, 0, 0.2) 50%, rgba(0, 0, 0, 0) 100%)",
};

type BottomTone = "green" | "white";

export type AtracoesEventCardProps = {
  /** 0 = tilt left, 1 = tilt right, 2 = tilt left (alternating). */
  index?: number;
  topImageSrc: string;
  topImageWidth: number;
  topImageHeight: number;
  topImageAlt: string;
  dateBadge?: string;
  bottomTone: BottomTone;
  title: string;
  lines: string[];
  imageClassName?: string;
};

const titleStyle: CSSProperties = {
  fontFamily: "var(--font-f-display), system-ui, sans-serif",
  fontWeight: 400,
  fontStyle: "normal",
  fontSize: "36px",
  lineHeight: "36px",
  letterSpacing: "0.9px",
  textTransform: "uppercase",
  verticalAlign: "middle",
};

const lineStyle: CSSProperties = {
  fontFamily: "var(--font-f-condensed), system-ui, sans-serif",
  fontWeight: 400,
  fontStyle: "normal",
  fontSize: "18px",
  lineHeight: "28px",
  letterSpacing: "0.45px",
  textTransform: "uppercase",
  verticalAlign: "middle",
};

const dateBadgeTextStyle: CSSProperties = {
  fontFamily: "var(--font-f-condensed), system-ui, sans-serif",
  fontWeight: 400,
  fontStyle: "normal",
  fontSize: "34px",
  lineHeight: "20px",
  letterSpacing: "0",
  textAlign: "center",
  verticalAlign: "middle",
};

const CARD_TILT_DEG = 1.1;

export function AtracoesEventCard({
  index = 0,
  topImageSrc,
  topImageWidth,
  topImageHeight,
  topImageAlt,
  dateBadge,
  bottomTone,
  title,
  lines,
  imageClassName = "relative z-2 max-h-[min(48vw,200px)] w-auto object-contain",
}: AtracoesEventCardProps) {
  const bottomBg =
    bottomTone === "green" ? "bg-[#00A651]" : "bg-white";
  const titleColor = "#0A0A0A";
  const lineColor = "#0A0A0A";

  const cardRotateDeg =
    index % 2 === 0 ? -CARD_TILT_DEG : CARD_TILT_DEG;

  return (
    <motion.div variants={fadeUp} className="mx-auto w-full max-w-[336px]">
      <article
        className="box-border flex flex-col overflow-hidden rounded-[16px] border-4 border-solid border-[#0A0A0A] bg-white"
        style={{ transform: `rotate(${cardRotateDeg}deg)` }}
      >
        <div className="relative box-border border-0 border-b-4 border-solid border-[#0A0A0A] bg-[#FFBE3B]">
          <div
            className="pointer-events-none absolute inset-x-0 top-1/2 bottom-0 z-2"
            style={YELLOW_PANEL_BOTTOM_HALF_GRADIENT}
            aria-hidden
          />
          {dateBadge ? (
            <div
              className="absolute right-[10px] top-[14px] z-3 box-border flex h-[65px] w-[103px] items-center justify-center rounded-[8px] border-[3px] border-solid border-[#0A0A0A] bg-white shadow-[4px_4px_0_#0A0A0A] sm:right-3 sm:top-4"
              style={{ transform: "rotate(1.97deg)" }}
            >
              <span className="text-[#0A0A0A]" style={dateBadgeTextStyle}>
                {dateBadge}
              </span>
            </div>
          ) : null}
          <div className="relative z-1 flex items-center justify-center px-4 pb-10 pt-14 sm:pb-12 sm:pt-16">
            <Image
              src={topImageSrc}
              alt={topImageAlt}
              width={topImageWidth}
              height={topImageHeight}
              className={imageClassName}
              
            />
          </div>
        </div>
        <div
          className={`box-border border-0 px-4 py-5 sm:px-5 sm:py-6 ${bottomBg}`}
        >
          <h3 className="m-0" style={{ ...titleStyle, color: titleColor }}>
            {title}
          </h3>
          <div className="mt-1 space-y-1">
            {lines.map((line) => (
              <p
                key={line}
                className="m-0"
                style={{ ...lineStyle, color: lineColor }}
              >
                {line}
              </p>
            ))}
          </div>
        </div>
      </article>
    </motion.div>
  );
}

export const atracoesJo = {
  topImageSrc: `${ASSET}/jo.png`,
  topImageWidth: 113,
  topImageHeight: 192,
  topImageAlt: "Baile do Jô",
  dateBadge: "13.06",
  bottomTone: "green" as const,
  title: "Baile do Jô",
  lines: [
    "Brasil x Marrocos",
    "Dia 13 de junho a partir das 17h",
  ],
};

export const atracoesWoods = {
  topImageSrc: `${ASSET}/woods.svg`,
  topImageWidth: 163,
  topImageHeight: 173,
  topImageAlt: "Wood's",
  dateBadge: "19.06",
  bottomTone: "green" as const,
  title: "Wood's",
  lines: ["Brasil x Haiti", "Dia 19 de junho a partir das 19h"],
};

export const atracoesMore = {
  topImageSrc: `${ASSET}/arena-black-and-white.png`,
  topImageWidth: 166,
  topImageHeight: 166,
  topImageAlt: "Arena Ópera",
  bottomTone: "white" as const,
  title: "E muito mais!",
  lines: ["Aguardem novidades de programação em breve"],
  imageClassName:
    "relative z-2 max-h-[min(48vw,200px)] w-auto object-contain",
};

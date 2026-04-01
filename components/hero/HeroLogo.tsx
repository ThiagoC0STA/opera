"use client";

import Image from "next/image";

const LOGO_W = 516;
const LOGO_H = 415;

type HeroLogoProps = {
  className?: string;
};

export function HeroLogo({ className = "" }: HeroLogoProps) {
  return (
    <div
      className={`mx-auto w-full max-w-[min(320px,min(calc(var(--hero-vw)*0.82),calc(var(--hero-vw)-2rem)))] sm:max-w-[var(--hero-logo-sm-max)] lg:max-w-[var(--hero-logo-lg-max)] ${className}`}
    >
      <Image
        src="/final-elements/logo.svg"
        alt="Arena Ópera"
        width={LOGO_W}
        height={LOGO_H}
        priority
        unoptimized
        className="mx-auto h-auto w-full max-w-full object-contain"
        sizes="(max-width: 420px) 80vw, 420px"
      />
    </div>
  );
}

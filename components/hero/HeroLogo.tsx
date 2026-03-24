"use client";

import Image from "next/image";

type HeroLogoProps = {
  className?: string;
};

/** Arena Ópera mark — `public/logoop.png` */
export function HeroLogo({ className = "" }: HeroLogoProps) {
  return (
    <div
      className={`relative mx-auto w-[min(84vw,280px)] sm:w-[min(72vw,340px)] md:w-[min(58vw,400px)] lg:w-[min(46vw,440px)] ${className}`}
    >
      <Image
        src="/logoop.png"
        alt="Arena Ópera"
        width={1200}
        height={1200}
        priority
        unoptimized
        className="h-auto w-full object-contain drop-shadow-[0_2px_12px_rgba(0,0,0,0.18)]"
        sizes="(max-width: 768px) 84vw, min(80vw,440px)"
      />
    </div>
  );
}

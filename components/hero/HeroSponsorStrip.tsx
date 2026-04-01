"use client";

import Image from "next/image";

const ASSET = "/final-elements";

const ballClass =
  "h-12 w-12 shrink-0 sm:h-[min(calc(var(--hero-vw)*0.032),var(--hero-ball))] sm:w-[min(calc(var(--hero-vw)*0.032),var(--hero-ball))]";

/**
 * Budweiser lockup — ball · badge · ball. On small screens the row is centered;
 * macaws render beside the date badge in {@link HeroDateBadge} (desktop macaws
 * stay in {@link HeroDecorLayer}).
 */
export function HeroSponsorStrip() {
  return (
    <div className="mb-[clamp(0.5rem,calc(var(--hero-vw)*0.03),1.5rem)] sm:mb-[clamp(0.75rem,calc(var(--hero-vw)*0.03),1.5rem)] sm:max-[1799px]:mb-[clamp(1rem,calc(var(--hero-vw)*0.038),1.75rem)] mt-4 md:mt-0">
      {/* Mobile: balls + Budweiser only, centered. Macaws sit beside the date badge (HeroDateBadge). */}
      <div className="mx-auto flex w-full max-w-full items-center justify-center sm:max-w-none sm:gap-[clamp(10px,min(calc(var(--hero-vw)*0.0278),40px),40px)]">
        <div className="flex items-center justify-center gap-5 sm:contents sm:gap-0">
          <Image
            src={`${ASSET}/ball.svg`}
            alt=""
            width={46}
            height={46}
            className={ballClass}
            unoptimized
          />
          <div className="flex h-[3.75rem] w-[min(calc(var(--hero-vw)*0.6),268px)] shrink-0 items-center justify-center rounded-lg border-2 border-[#232323] bg-[#FBE297] px-3 sm:h-[min(calc(var(--hero-vw)*0.0518),var(--hero-bud-outer-h))] sm:w-[min(calc(var(--hero-vw)*0.1973),var(--hero-bud-outer-w))] sm:px-0">
            <Image
              src={`${ASSET}/black-budweiser.svg`}
              alt="Budweiser"
              width={148}
              height={47}
              className="h-12 w-auto max-h-full max-w-[min(94%,220px)] object-contain sm:h-[min(calc(var(--hero-vw)*0.0326),var(--hero-bud-logo-h))] sm:w-[min(calc(var(--hero-vw)*0.1028),var(--hero-bud-logo-w))] sm:max-w-none"
              unoptimized
            />
          </div>
          <Image
            src={`${ASSET}/ball.svg`}
            alt=""
            width={46}
            height={46}
            className={ballClass}
            unoptimized
          />
        </div>
      </div>
    </div>
  );
}

"use client";

import { Section } from "@/components/Section";
import { FinalCtaPanel } from "@/components/local/finalCta/FinalCtaPanel";
import { FinalCtaTrophy } from "@/components/local/finalCta/FinalCtaTrophy";

const trophySize =
  "h-[clamp(88px,22vw,220px)] w-[clamp(68px,16vw,170px)] max-w-none";

/**
 * Final band: trophies absolutely positioned at the sides; panel stays centered in flow.
 */
export function FinalCtaSection() {
  return (
    <Section
      id="cta"
      variant="blue"
      className="overflow-visible"
      innerClassName="relative py-20 sm:py-24 md:py-28"
    >
      <div className="relative mx-auto w-full max-w-[min(1220px,calc(100vw-1.5rem))]">
        <FinalCtaTrophy
          className={`absolute left-0 top-1/2 z-[1] ${trophySize} -translate-x-4 -translate-y-1/2 sm:-translate-x-8 md:-translate-x-12 lg:-translate-x-16 xl:-translate-x-20`}
        />
        <FinalCtaTrophy
          mirrored
          className={`absolute right-0 top-1/2 z-[1] ${trophySize} translate-x-4 -translate-y-1/2 sm:translate-x-8 md:translate-x-12 lg:translate-x-16 xl:translate-x-20`}
        />
        <FinalCtaPanel className="relative z-10 mx-auto max-w-xl lg:max-w-2xl" />
      </div>
    </Section>
  );
}

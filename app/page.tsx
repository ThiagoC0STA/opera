import { HeaderCornerPlants } from "@/components/HeaderCornerPlants";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { CountdownSection } from "@/sections/CountdownSection";
import { ExperienceSection } from "@/sections/ExperienceSection";
import { FinalCtaSection } from "@/sections/FinalCtaSection";
import { HeroSection } from "@/sections/HeroSection";
import { LineupSection } from "@/sections/LineupSection";
import { LocalSection } from "@/sections/LocalSection";
import { TipsSection } from "@/sections/TipsSection";

export default function Home() {
  return (
    <div className="relative flex min-h-full flex-1 flex-col bg-[#0f0f12]">
      <HeaderCornerPlants />
      <SiteHeader />
      <main className="flex-1 bg-arena-cream">
        <HeroSection />
        <CountdownSection />
        <LineupSection />
        <ExperienceSection />
        <LocalSection />
        <TipsSection />
        <FinalCtaSection />
      </main>
      <SiteFooter />
    </div>
  );
}

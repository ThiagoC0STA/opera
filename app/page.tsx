import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { CountdownSection } from "@/sections/CountdownSection";
import { ExperienceSection } from "@/sections/ExperienceSection";
import { FinalCtaSection } from "@/sections/FinalCtaSection";
import { HeroSection } from "@/sections/HeroSection";
import { LineupSection } from "@/sections/LineupSection";

export default function Home() {
  return (
    <div className="flex min-h-full flex-1 flex-col bg-[#0f0f12]">
      <SiteHeader />
      <main className="flex-1 bg-arena-cream">
        <HeroSection />
        <LineupSection />
        <ExperienceSection />
        <CountdownSection />
        <FinalCtaSection />
      </main>
      <SiteFooter />
    </div>
  );
}

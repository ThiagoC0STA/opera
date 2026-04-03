import { HeaderCornerPlants } from "@/components/HeaderCornerPlants";
import { JsonLd } from "@/components/JsonLd";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { CountdownSection } from "@/sections/CountdownSection";
import { ExperienceSection } from "@/sections/ExperienceSection";
import { FinalCtaSection } from "@/sections/FinalCtaSection";
import { HeroSection } from "@/sections/HeroSection";
import { AtracoesSection } from "@/sections/AtracoesSection";
import { LocalSection } from "@/sections/LocalSection";
import { TipsSection } from "@/sections/TipsSection";

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL &&
  /^https?:\/\//i.test(process.env.NEXT_PUBLIC_SITE_URL)
    ? process.env.NEXT_PUBLIC_SITE_URL
    : "https://www.arenaopera.com.br";

const EVENT_VENUE = {
  "@type": "Place",
  name: "Ópera Concept Hall",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Rua João Gava, 920 — Abranches",
    addressLocality: "Curitiba",
    addressRegion: "PR",
    postalCode: "82130-010",
    addressCountry: "BR",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: -25.4206,
    longitude: -49.2733,
  },
};

const eventJsonLd = {
  "@context": "https://schema.org",
  "@type": "EventSeries",
  name: "Arena Ópera — Copa do Mundo 2026",
  description:
    "Festas épicas durante os jogos do Brasil na Copa do Mundo 2026. Telão LED 8×5m, atrações nacionais e experiência imersiva no Ópera Concept Hall em Curitiba.",
  url: SITE_URL,
  image: `${SITE_URL}/arena-opera.png`,
  startDate: "2026-06-13",
  endDate: "2026-06-19",
  eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
  eventStatus: "https://schema.org/EventScheduled",
  location: EVENT_VENUE,
  organizer: {
    "@type": "Organization",
    name: "Arena Ópera",
    url: SITE_URL,
    logo: `${SITE_URL}/arena-opera.png`,
  },
  subEvent: [
    {
      "@type": "Event",
      name: "Baile do Jô — Brasil x Marrocos",
      startDate: "2026-06-13T17:00:00-03:00",
      description:
        "Festa Baile do Jô durante o jogo Brasil x Marrocos pela Copa do Mundo 2026 no Ópera Concept Hall.",
      location: EVENT_VENUE,
      eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
      eventStatus: "https://schema.org/EventScheduled",
      offers: {
        "@type": "Offer",
        url: SITE_URL,
        availability: "https://schema.org/PreOrder",
        priceCurrency: "BRL",
      },
    },
    {
      "@type": "Event",
      name: "Wood's — Brasil x Haiti",
      startDate: "2026-06-19T19:00:00-03:00",
      description:
        "Festa Wood's durante o jogo Brasil x Haiti pela Copa do Mundo 2026 no Ópera Concept Hall.",
      location: EVENT_VENUE,
      eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
      eventStatus: "https://schema.org/EventScheduled",
      offers: {
        "@type": "Offer",
        url: SITE_URL,
        availability: "https://schema.org/PreOrder",
        priceCurrency: "BRL",
      },
    },
  ],
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Arena Ópera",
  url: SITE_URL,
  logo: `${SITE_URL}/arena-opera.png`,
  sameAs: [],
};

export default function Home() {
  return (
    <div className="relative flex min-h-full flex-1 flex-col bg-[#0f0f12]">
      <JsonLd data={eventJsonLd} />
      <JsonLd data={organizationJsonLd} />
      <HeaderCornerPlants />
      <SiteHeader />
      <main className="flex-1 bg-arena-cream">
        <HeroSection />
        <CountdownSection />
        <AtracoesSection />
        {/* <ExperienceSection /> */}
        <LocalSection />
        {/* <TipsSection /> */}
        <FinalCtaSection />
      </main>
      <SiteFooter />
    </div>
  );
}

import type { Metadata, Viewport } from "next";
import { Alexandria, Anton, Bebas_Neue, DM_Sans, Lilita_One, Luckiest_Guy } from "next/font/google";
import "./globals.css";

const bebasNeue = Bebas_Neue({
  weight: "400",
  variable: "--font-f-display",
  subsets: ["latin"],
});

const anton = Anton({
  weight: "400",
  variable: "--font-f-condensed",
  subsets: ["latin"],
});

const luckiestGuy = Luckiest_Guy({
  weight: "400",
  variable: "--font-f-playful",
  subsets: ["latin"],
});

const dmSans = DM_Sans({
  variable: "--font-f-body",
  subsets: ["latin"],
});

const lilitaOne = Lilita_One({
  weight: "400",
  variable: "--font-f-lilita",
  subsets: ["latin"],
});

const alexandria = Alexandria({
  weight: "700",
  variable: "--font-f-alexandria",
  subsets: ["latin"],
});

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL &&
  /^https?:\/\//i.test(process.env.NEXT_PUBLIC_SITE_URL)
    ? process.env.NEXT_PUBLIC_SITE_URL
    : "http://localhost:3000";

const ogTitle = "Arena Ópera — Experiência ao vivo";
const ogDescription =
  "Energia de estádio brasileiro, luzes de festival e o rugido da noite de show. Sede em Curitiba (CWB), dezembro de 2026.";
const brandLogoPath = "/arena-opera.png";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: ogTitle,
  description: ogDescription,
  icons: {
    icon: [{ url: brandLogoPath, type: "image/png" }],
    apple: [{ url: brandLogoPath, type: "image/png" }],
  },
  openGraph: {
    title: ogTitle,
    description: ogDescription,
    locale: "pt_BR",
    type: "website",
    siteName: "Arena Ópera",
    images: [
      {
        url: brandLogoPath,
        width: 512,
        height: 512,
        alt: "Arena Ópera",
      },
    ],
  },
  twitter: {
    card: "summary",
    title: ogTitle,
    description: ogDescription,
    images: [brandLogoPath],
  },
};

export const viewport: Viewport = {
  viewportFit: "cover",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${bebasNeue.variable} ${anton.variable} ${luckiestGuy.variable} ${dmSans.variable} ${lilitaOne.variable} ${alexandria.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col overflow-x-hidden font-sans">
        {children}
      </body>
    </html>
  );
}

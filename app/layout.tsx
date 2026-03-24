import type { Metadata, Viewport } from "next";
import { Anton, Bebas_Neue, Luckiest_Guy, DM_Sans } from "next/font/google";
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

export const metadata: Metadata = {
  title: "Arena Ópera — Experiência ao vivo",
  description:
    "Energia de estádio brasileiro, luzes de festival e o rugido da noite de show. Sede em Curitiba (CWB), dezembro de 2026.",
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
      className={`${bebasNeue.variable} ${anton.variable} ${luckiestGuy.variable} ${dmSans.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col overflow-x-hidden font-sans">
        {children}
      </body>
    </html>
  );
}

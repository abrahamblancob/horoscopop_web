import type { Metadata } from "next";
import { Playfair_Display, DM_Sans, Space_Mono } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["700", "900"],
  display: "swap",
});

const dmSans = DM_Sans({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const spaceMono = Space_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "HoroscoPoP — Tu cosmos, cada día",
  description:
    "Horóscopo diario personalizado basado en tránsitos planetarios reales. Powered by Astral PoP Engine™. Descarga gratis.",
  keywords: [
    "horóscopo",
    "horóscopo diario",
    "astrología",
    "signos zodiacales",
    "predicción diaria",
    "horoscopop",
  ],
  authors: [{ name: "HoroscoPoP" }],
  openGraph: {
    title: "HoroscoPoP — Tu cosmos, cada día",
    description:
      "Horóscopo diario personalizado basado en tránsitos planetarios reales. Powered by Astral PoP Engine™.",
    url: "https://www.horoscopop.app",
    siteName: "HoroscoPoP",
    locale: "es_ES",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "HoroscoPoP — Tu cosmos, cada día",
    description:
      "Horóscopo diario personalizado basado en tránsitos planetarios reales.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="scroll-smooth">
      <body
        className={`${playfair.variable} ${dmSans.variable} ${spaceMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

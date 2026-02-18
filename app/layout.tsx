import type { Metadata } from "next";
import Script from "next/script";
import { Playfair_Display, DM_Sans, Space_Mono } from "next/font/google";
import StructuredData from "@/components/StructuredData";
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
  metadataBase: new URL("https://www.horoscopop.app"),
  title: {
    default: "HoroscoPoP — Tu cosmos, cada día",
    template: "%s | HoroscoPoP",
  },
  description:
    "Horóscopo diario personalizado basado en tránsitos planetarios reales. Powered by Astral PoP Engine™. Descarga gratis para iOS y Android.",
  keywords: [
    "horóscopo",
    "horóscopo diario",
    "horóscopo de hoy",
    "astrología",
    "signos zodiacales",
    "predicción diaria",
    "horoscopop",
    "horóscopo personalizado",
    "tránsitos planetarios",
    "fase lunar",
    "carta astral",
    "zodíaco",
  ],
  authors: [{ name: "HoroscoPoP" }],
  creator: "HoroscoPoP",
  publisher: "HoroscoPoP",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "HoroscoPoP — Tu cosmos, cada día",
    description:
      "Horóscopo diario personalizado basado en tránsitos planetarios reales. Powered by Astral PoP Engine™.",
    url: "https://www.horoscopop.app",
    siteName: "HoroscoPoP",
    locale: "es_ES",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "HoroscoPoP — Horóscopo diario personalizado",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "HoroscoPoP — Tu cosmos, cada día",
    description:
      "Horóscopo diario personalizado basado en tránsitos planetarios reales. Powered by Astral PoP Engine™.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.svg",
    apple: "/favicon.svg",
  },
  category: "lifestyle",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="scroll-smooth">
      <head>
        {/* Google Tag Manager */}
        <Script id="gtm-init" strategy="afterInteractive">
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-54SXZLNP');`}
        </Script>
        {/* Google Analytics 4 */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-SYNMBVRN41"
          strategy="afterInteractive"
        />
        <Script id="ga4-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-SYNMBVRN41');
          `}
        </Script>
      </head>
      <body
        className={`${playfair.variable} ${dmSans.variable} ${spaceMono.variable} antialiased`}
      >
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-54SXZLNP"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        <StructuredData />
        {children}
      </body>
    </html>
  );
}

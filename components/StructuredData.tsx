export default function StructuredData() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "HoroscoPoP",
    url: "https://www.horoscopop.app",
    logo: "https://www.horoscopop.app/favicon.svg",
    description:
      "Horóscopo diario personalizado basado en tránsitos planetarios reales. Powered by Astral PoP Engine™.",
    sameAs: [],
  };

  const softwareAppSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "HoroscoPoP",
    operatingSystem: "iOS, Android",
    applicationCategory: "LifestyleApplication",
    description:
      "Horóscopo diario personalizado basado en tránsitos planetarios reales. Predicción única cada mañana con medidores de amor, trabajo y salud.",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    },
    aggregateRating: undefined,
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Inicio",
        item: "https://www.horoscopop.app/",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Características",
        item: "https://www.horoscopop.app/#features",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Cómo funciona",
        item: "https://www.horoscopop.app/#how-it-works",
      },
      {
        "@type": "ListItem",
        position: 4,
        name: "Descargar",
        item: "https://www.horoscopop.app/#download",
      },
    ],
  };

  const webSiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "HoroscoPoP",
    url: "https://www.horoscopop.app",
    inLanguage: "es",
    description:
      "Horóscopo diario personalizado basado en tránsitos planetarios reales. Powered by Astral PoP Engine™.",
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(softwareAppSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(webSiteSchema),
        }}
      />
    </>
  );
}

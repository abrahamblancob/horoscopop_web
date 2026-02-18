"use client";

import Image from "next/image";
import { DOWNLOAD_CTA, STORE_URLS } from "@/lib/constants";
import GlassCard from "@/components/ui/GlassCard";

export default function DownloadCTA() {
  return (
    <section id="download" className="section-padding relative z-10">
      <div className="mx-auto max-w-7xl">
        <GlassCard index={0} className="!px-6 !pt-[26px] !pb-[26px] sm:!px-10 sm:!pt-7 sm:!pb-7 lg:!px-14 lg:!pt-10 lg:!pb-10 flex flex-col items-center text-center">
          <div className="mb-6 sm:mb-7">
            <Image
              src="/favicon.svg"
              alt="HoroscoPoP"
              width={72}
              height={72}
              style={{ width: 72, height: 72 }}
            />
          </div>
          <h2 className="t-display text-xl font-bold text-white sm:text-2xl md:text-3xl lg:text-4xl">
            {DOWNLOAD_CTA.title}
          </h2>
          <p className="t-body mt-3 max-w-md text-sm leading-relaxed text-silver-mist sm:mt-4 sm:text-base" style={{ margin: "0.75rem auto 0" }}>
            {DOWNLOAD_CTA.subtitle}
          </p>

          {/* Store buttons */}
          {/* Store buttons */}
          <div className="mt-8 flex w-full flex-col items-center justify-center gap-5 sm:mt-10 sm:flex-row sm:gap-6">
            <a
              href={STORE_URLS.appStore}
              className="inline-flex w-full items-center justify-center rounded-2xl text-base font-semibold text-white transition-transform hover:scale-[1.02] sm:w-auto sm:text-lg"
              style={{
                padding: "24px 56px",
                gap: 20,
                background: "linear-gradient(135deg, #7B2FFF 0%, #FF6B9D 100%)",
                boxShadow: "0 8px 32px rgba(123,47,255,0.3)",
              }}
            >
              <svg width="26" height="26" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
              </svg>
              App Store
            </a>
            <a
              href={STORE_URLS.googlePlay}
              className="inline-flex w-full items-center justify-center rounded-2xl text-base font-semibold text-stardust transition-transform hover:scale-[1.02] sm:w-auto sm:text-lg"
              style={{
                padding: "24px 56px",
                gap: 20,
                background: "rgba(123,47,255,0.08)",
                border: "1.5px solid rgba(123,47,255,0.3)",
                boxShadow: "0 4px 20px rgba(123,47,255,0.1)",
              }}
            >
              <svg width="26" height="26" viewBox="0 0 24 24" fill="currentColor">
                <path d="M3 20.5v-17c0-.59.34-1.11.84-1.35L13.69 12l-9.85 9.85c-.5-.24-.84-.76-.84-1.35zm13.81-5.38L6.05 21.34l8.49-8.49 2.27 2.27zm.91-.91L19.59 12l-1.87-2.21-2.27 2.27 2.27 2.15zM6.05 2.66l10.76 6.22-2.27 2.27-8.49-8.49z" />
              </svg>
              Google Play
            </a>
          </div>

          <p className="t-mono mt-4 text-[10px] text-cosmic-gray sm:mt-6 sm:text-xs">
            Disponible para iOS y Android · Gratis
          </p>
        </GlassCard>
      </div>
    </section>
  );
}

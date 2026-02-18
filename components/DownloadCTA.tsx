"use client";

import { motion } from "framer-motion";
import { DOWNLOAD_CTA, STORE_URLS } from "@/lib/constants";

export default function DownloadCTA() {
  return (
    <section id="download" className="section-padding relative z-10">
      <div className="mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="glass relative overflow-hidden rounded-[28px] p-10 text-center sm:p-16"
        >
          {/* Glow orb */}
          <div
            className="pointer-events-none absolute -top-20 left-1/2 h-40 w-80 -translate-x-1/2"
            style={{
              background: "radial-gradient(ellipse, rgba(123,47,255,0.3) 0%, transparent 70%)",
            }}
          />

          <h2 className="relative t-display text-3xl font-bold text-white sm:text-4xl md:text-5xl">
            {DOWNLOAD_CTA.title}
          </h2>
          <p className="relative mt-4 t-body text-lg text-silver-mist">
            {DOWNLOAD_CTA.subtitle}
          </p>

          {/* Store buttons */}
          <div className="relative mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href={STORE_URLS.appStore}
              className="btn-cta inline-flex items-center gap-3 px-8 py-4 text-base font-semibold text-white sm:text-lg"
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
              </svg>
              App Store
            </a>
            <a
              href={STORE_URLS.googlePlay}
              className="btn-secondary inline-flex items-center gap-3 px-8 py-4 text-base font-semibold sm:text-lg"
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                <path d="M3 20.5v-17c0-.59.34-1.11.84-1.35L13.69 12l-9.85 9.85c-.5-.24-.84-.76-.84-1.35zm13.81-5.38L6.05 21.34l8.49-8.49 2.27 2.27zm.91-.91L19.59 12l-1.87-2.21-2.27 2.27 2.27 2.15zM6.05 2.66l10.76 6.22-2.27 2.27-8.49-8.49z" />
              </svg>
              Google Play
            </a>
          </div>

          <p className="relative mt-6 t-mono text-xs text-cosmic-gray">
            Disponible para iOS y Android · Gratis
          </p>
        </motion.div>
      </div>
    </section>
  );
}

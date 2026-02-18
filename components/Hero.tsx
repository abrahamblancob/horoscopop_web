"use client";

import { motion } from "framer-motion";
import { HERO } from "@/lib/constants";
import { ZODIAC_SIGNS } from "@/lib/zodiac";

export default function Hero() {
  return (
    <section className="gradient-main relative z-10 flex min-h-[100dvh] flex-col items-center justify-center overflow-hidden px-5 pb-12 pt-24 text-center sm:px-8 sm:pt-28">
      {/* Floating glow orbs (brand guide) */}
      <div
        className="pointer-events-none absolute -right-24 -top-48 h-[600px] w-[600px] opacity-60"
        style={{
          background:
            "radial-gradient(circle, rgba(123,47,255,0.3) 0%, transparent 70%)",
          animation: "float 8s ease-in-out infinite",
        }}
      />
      <div
        className="pointer-events-none absolute -bottom-24 -left-24 h-[400px] w-[400px] opacity-50"
        style={{
          background:
            "radial-gradient(circle, rgba(74,123,247,0.2) 0%, transparent 70%)",
          animation: "float 10s ease-in-out infinite reverse",
        }}
      />

      <div className="relative z-10 mx-auto w-full max-w-3xl">
        {/* Zodiac ring */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="mb-5 flex flex-wrap items-center justify-center gap-2 sm:mb-6 sm:gap-3"
        >
          {ZODIAC_SIGNS.map((sign, i) => (
            <motion.span
              key={sign.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 + i * 0.05, duration: 0.4 }}
              className="text-xl sm:text-2xl md:text-3xl"
              title={sign.name}
            >
              {sign.emoji}
            </motion.span>
          ))}
        </motion.div>

        {/* Brand Logo Title (brand guide style) */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="t-display text-[clamp(3rem,8vw,6rem)] font-black leading-none tracking-tight"
        >
          <span className="gradient-text-hero">Horósco</span>
          <span className="gradient-text">PoP</span>
        </motion.h1>

        {/* Tagline (Space Mono, brand guide style) */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="t-mono mt-4 text-xs uppercase tracking-[6px] text-stardust sm:text-sm"
        >
          {HERO.title}
        </motion.p>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="t-body mx-auto mt-6 max-w-lg text-base text-silver-mist sm:mt-8 sm:text-lg md:max-w-xl"
          style={{ lineHeight: 1.7 }}
        >
          {HERO.subtitle}
        </motion.p>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="mt-8 flex flex-col items-center gap-3 sm:mt-10 sm:flex-row sm:justify-center sm:gap-4"
        >
          <a href="#download" className="btn-cta w-full px-10 py-4 text-base sm:w-auto sm:text-lg">
            {HERO.cta}
          </a>
          <a
            href="#features"
            className="btn-secondary w-full px-10 py-4 text-base sm:w-auto sm:text-lg"
          >
            Conoce más
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 sm:bottom-10"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="flex flex-col items-center gap-2"
        >
          <span className="t-mono text-[10px] uppercase tracking-[3px] text-cosmic-gray">
            Explora
          </span>
          <div className="h-5 w-5 rotate-45 border-b-2 border-r-2 border-cosmic-gray" />
        </motion.div>
      </motion.div>
    </section>
  );
}

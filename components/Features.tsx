"use client";

import { FEATURES } from "@/lib/constants";
import SectionHeader from "@/components/ui/SectionHeader";
import GlassCard from "@/components/ui/GlassCard";

export default function Features() {
  return (
    <section id="features" className="section-padding relative z-10">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          title={
            <>
              Todo lo que necesitas en{" "}
              <span className="gradient-text">una app</span>
            </>
          }
          subtitle="Funcionalidades diseñadas para conectar tu día con el cosmos"
        />

        {/* 1 col mobile → 2 col tablet → 3 col desktop */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3 lg:gap-7">
          {FEATURES.map((feature, i) => (
            <GlassCard key={feature.title} index={i} className="!pt-[26px] !pb-[26px] sm:!pt-7 sm:!pb-7 lg:!pt-7 lg:!pb-7 flex flex-col items-center text-center">
              <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-white/[0.06] text-3xl sm:mb-7 sm:h-[72px] sm:w-[72px] sm:text-4xl">
                {feature.emoji}
              </div>
              <h3 className="t-display text-lg font-bold text-white sm:text-xl">
                {feature.title}
              </h3>
              <p className="t-body mt-3 text-sm leading-relaxed text-silver-mist sm:mt-4 sm:text-base">
                {feature.description}
              </p>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
}

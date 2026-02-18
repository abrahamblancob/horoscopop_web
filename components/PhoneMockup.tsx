"use client";

import { motion } from "framer-motion";
import SectionHeader from "@/components/ui/SectionHeader";
import GlassCard from "@/components/ui/GlassCard";

function MeterBar({ label, value, gradient }: { label: string; value: number; gradient: string }) {
  return (
    <div className="flex-1 text-center">
      <p className="t-mono mb-1.5 text-[9px] uppercase tracking-wider text-cosmic-gray">{label}</p>
      <div className="mx-auto h-1 overflow-hidden rounded-full bg-white/10">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${value}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="h-full rounded-full"
          style={{ background: gradient }}
        />
      </div>
      <p className="t-mono mt-1 text-[10px] text-stardust">{value}%</p>
    </div>
  );
}

export default function PhoneMockup() {
  return (
    <section className="section-padding relative z-10">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          title={
            <>
              Así se ve{" "}
              <span className="gradient-text">tu horóscopo</span>
            </>
          }
          subtitle="El usuario abre la app y ve su horóscopo inmediatamente. Sin scroll, sin distracciones."
        />

        <div className="flex flex-col items-center gap-12 lg:flex-row lg:items-center lg:justify-center lg:gap-20">

          {/* Phone */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8 }}
            className="relative shrink-0"
          >
            {/* Glow */}
            <div
              className="pointer-events-none absolute -inset-20 -z-10"
              style={{ background: "radial-gradient(circle, rgba(123,47,255,0.25) 0%, transparent 70%)" }}
            />

            {/* Side buttons */}
            <div style={{ position: "absolute", right: -3, top: 140, width: 4, height: 70, background: "#2A2A3E", borderRadius: "0 3px 3px 0", zIndex: 20 }} />
            <div style={{ position: "absolute", left: -3, top: 100, width: 4, height: 26, background: "#2A2A3E", borderRadius: "3px 0 0 3px", zIndex: 20 }} />
            <div style={{ position: "absolute", left: -3, top: 140, width: 4, height: 50, background: "#2A2A3E", borderRadius: "3px 0 0 3px", zIndex: 20 }} />
            <div style={{ position: "absolute", left: -3, top: 200, width: 4, height: 50, background: "#2A2A3E", borderRadius: "3px 0 0 3px", zIndex: 20 }} />

            {/* Phone body — thick padding simulates chassis */}
            <div
              style={{
                width: 340,
                padding: 14,
                borderRadius: 56,
                background: "linear-gradient(145deg, #2A2A3E 0%, #1C1C2E 30%, #111120 100%)",
                boxShadow: "0 0 0 1px rgba(255,255,255,0.06), inset 0 1px 0 rgba(255,255,255,0.06), 0 50px 100px rgba(0,0,0,0.7), 0 0 140px rgba(123,47,255,0.15)",
              }}
            >
              {/* Screen */}
              <div
                style={{
                  borderRadius: 42,
                  overflow: "hidden",
                  background: "linear-gradient(135deg, #1A1033 0%, #0A0A12 40%, #1E3A5F 100%)",
                  position: "relative",
                }}
              >
                {/* Status bar */}
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "10px 22px 4px" }}>
                  <span className="t-mono" style={{ fontSize: 11, fontWeight: 600, color: "rgba(255,255,255,0.8)" }}>9:41</span>
                  {/* Dynamic Island */}
                  <div style={{ width: 110, height: 30, borderRadius: 20, background: "#000" }} />
                  <div style={{ display: "flex", alignItems: "center", gap: 4, color: "rgba(255,255,255,0.8)" }}>
                    <svg width="15" height="11" viewBox="0 0 15 11" fill="currentColor"><rect x="0" y="7" width="3" height="4" rx="0.5" opacity="0.4"/><rect x="4" y="5" width="3" height="6" rx="0.5" opacity="0.6"/><rect x="8" y="2.5" width="3" height="8.5" rx="0.5" opacity="0.8"/><rect x="12" y="0" width="3" height="11" rx="0.5"/></svg>
                    <svg width="22" height="11" viewBox="0 0 22 11" fill="currentColor"><rect x="0.5" y="0.5" width="18" height="10" rx="2" stroke="currentColor" strokeWidth="1" fill="none" opacity="0.4"/><rect x="2" y="2" width="12" height="7" rx="1"/><rect x="19.5" y="3" width="2" height="5" rx="1" opacity="0.4"/></svg>
                  </div>
                </div>

                {/* Glow orb */}
                <div
                  style={{
                    position: "absolute", right: 0, top: 0, width: 220, height: 220,
                    background: "radial-gradient(circle, rgba(123,47,255,0.25) 0%, transparent 70%)",
                    pointerEvents: "none",
                  }}
                />

                {/* App content */}
                <div style={{ position: "relative", padding: "14px 22px 10px" }}>
                  <p style={{ fontSize: 13, color: "#C4B5FD", marginBottom: 2 }}>Buenos días, María ✨</p>
                  <h2 className="t-display" style={{ fontSize: "1.9rem", fontWeight: 700, color: "#fff", lineHeight: 1.1 }}>Escorpio</h2>
                  <p className="t-mono" style={{ fontSize: 9, letterSpacing: 2, color: "#6B6882", marginBottom: 18 }}>17 FEB 2026 · MARTES</p>

                  {/* Zodiac icon */}
                  <div
                    style={{
                      width: 76, height: 76, borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center",
                      fontSize: "2.1rem", marginBottom: 18,
                      background: "linear-gradient(160deg, rgba(123,47,255,0.2) 0%, rgba(74,123,247,0.1) 100%)",
                      border: "1px solid rgba(123,47,255,0.3)",
                      boxShadow: "0 0 30px rgba(123,47,255,0.2)",
                    }}
                  >
                    ♏
                  </div>

                  {/* Meters */}
                  <div className="mb-4 flex gap-2.5">
                    <MeterBar label="Amor" value={85} gradient="linear-gradient(90deg, #FF6B9D, #7B2FFF)" />
                    <MeterBar label="Trabajo" value={72} gradient="linear-gradient(90deg, #4A7BF7, #06D6A0)" />
                    <MeterBar label="Salud" value={90} gradient="linear-gradient(90deg, #06D6A0, #FFD166)" />
                  </div>

                  {/* Horoscope card */}
                  <div
                    style={{
                      background: "linear-gradient(160deg, rgba(123,47,255,0.15) 0%, rgba(74,123,247,0.08) 100%)",
                      border: "1px solid rgba(123,47,255,0.15)",
                      borderRadius: 18, padding: 14, marginBottom: 14,
                    }}
                  >
                    <h3 style={{ fontSize: 10, fontWeight: 600, textTransform: "uppercase", letterSpacing: 2, color: "#C4B5FD", marginBottom: 6 }}>☀️ Tu día</h3>
                    <p style={{ fontSize: 12, lineHeight: 1.6, color: "#B8B5C8" }}>
                      Las estrellas favorecen tus relaciones hoy. Es momento de expresar lo que sientes sin miedo. En el trabajo, una sorpresa positiva te espera.
                    </p>
                  </div>

                  {/* Lucky row */}
                  <div style={{ display: "flex", gap: 8, marginBottom: 14 }}>
                    {[
                      { emoji: "🔢", label: "Número", value: "7" },
                      { emoji: "🎨", label: "Color", value: "Azul" },
                      { emoji: "💫", label: "Hora", value: "15:00" },
                    ].map((item) => (
                      <div
                        key={item.label}
                        style={{
                          flex: 1, display: "flex", flexDirection: "column", alignItems: "center",
                          borderRadius: 14, padding: "10px 6px",
                          background: "rgba(123,47,255,0.08)", border: "1px solid rgba(123,47,255,0.1)",
                        }}
                      >
                        <span style={{ fontSize: 18, marginBottom: 3 }}>{item.emoji}</span>
                        <span className="t-mono" style={{ fontSize: 7, textTransform: "uppercase", letterSpacing: 1, color: "#6B6882" }}>{item.label}</span>
                        <span className="t-mono" style={{ fontSize: 11, color: "#fff" }}>{item.value}</span>
                      </div>
                    ))}
                  </div>

                  {/* Bottom nav */}
                  <div style={{ display: "flex", justifyContent: "space-around", borderTop: "1px solid rgba(255,255,255,0.06)", paddingTop: 10, paddingBottom: 4 }}>
                    {[
                      { icon: "☀️", label: "Hoy", active: true },
                      { icon: "🌙", label: "Lunar", active: false },
                      { icon: "💜", label: "Match", active: false },
                      { icon: "👤", label: "Perfil", active: false },
                    ].map((nav) => (
                      <div key={nav.label} style={{ textAlign: "center", opacity: nav.active ? 1 : 0.4 }}>
                        <div style={{ fontSize: 18 }}>{nav.icon}</div>
                        <div style={{ fontSize: 8, color: nav.active ? "#7B2FFF" : "#fff" }}>{nav.label}</div>
                      </div>
                    ))}
                  </div>

                  {/* Home indicator */}
                  <div style={{ width: 100, height: 4, borderRadius: 4, background: "rgba(255,255,255,0.2)", margin: "8px auto 0" }} />
                </div>
              </div>
            </div>
          </motion.div>

          {/* Feature list */}
          <GlassCard index={1} className="!px-8 !pt-[26px] !pb-[26px] sm:!px-10 sm:!pt-7 sm:!pb-7 lg:!px-10 lg:!pt-7 lg:!pb-7 max-w-md flex flex-col items-center text-center lg:items-start lg:text-left">
            <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-white/[0.06] text-3xl sm:mb-7 sm:h-[72px] sm:w-[72px] sm:text-4xl">
              📱
            </div>
            <h3 className="t-display text-lg font-bold text-white sm:text-xl">
              Toda la información que necesitas
            </h3>
            <p className="t-body mt-3 text-sm leading-relaxed text-silver-mist sm:mt-4 sm:text-base">
              Contenido personalizado desde el primer segundo.
            </p>
            <ul className="mt-5 space-y-4 sm:mt-6">
              {[
                "Medidores de amor, trabajo y salud",
                "Predicción diaria concisa y accionable",
                "Datos lucky para compartir en redes",
                "Navegación simple con 4 secciones",
              ].map((feat) => (
                <li key={feat} className="flex items-start gap-3 text-left">
                  <span className="mt-0.5 text-sm text-aurora-teal">✦</span>
                  <span className="t-body text-sm text-silver-mist sm:text-base">{feat}</span>
                </li>
              ))}
            </ul>
          </GlassCard>
        </div>
      </div>
    </section>
  );
}

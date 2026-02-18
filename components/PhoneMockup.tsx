"use client";

import { motion } from "framer-motion";

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
    <section className="section-padding relative z-10 overflow-hidden">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col items-center gap-12 sm:gap-16 lg:flex-row lg:items-center lg:justify-center lg:gap-16">

          {/* Phone */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="relative shrink-0"
          >
            {/* Glow */}
            <div
              className="pointer-events-none absolute -inset-20 -z-10"
              style={{ background: "radial-gradient(circle, rgba(123,47,255,0.15) 0%, transparent 70%)" }}
            />

            {/* Phone frame */}
            <div
              className="relative w-[280px] overflow-hidden rounded-[44px] sm:w-[320px]"
              style={{
                background: "#0A0A12",
                border: "3px solid rgba(123,47,255,0.3)",
                boxShadow: "0 0 0 1px rgba(255,255,255,0.05), 0 25px 80px rgba(0,0,0,0.5), 0 0 120px rgba(123,47,255,0.15)",
              }}
            >
              {/* Notch */}
              <div className="absolute left-1/2 top-0 z-10 h-[34px] w-[150px] -translate-x-1/2 rounded-b-3xl bg-[#0A0A12]" />

              {/* Screen */}
              <div
                className="relative px-5 pb-5 pt-[50px]"
                style={{ background: "linear-gradient(135deg, #1A1033 0%, #0A0A12 40%, #1E3A5F 100%)" }}
              >
                {/* Glow orb inside screen */}
                <div
                  className="pointer-events-none absolute right-0 top-0 h-[200px] w-[200px]"
                  style={{ background: "radial-gradient(circle, rgba(123,47,255,0.25) 0%, transparent 70%)" }}
                />

                {/* Greeting */}
                <p className="relative text-[13px] text-stardust">Buenos días, María ✨</p>
                <h2 className="t-display relative text-[2rem] font-bold text-white leading-tight">Escorpio</h2>
                <p className="t-mono relative mb-5 text-[10px] tracking-[2px] text-cosmic-gray">17 FEB 2026 · MARTES</p>

                {/* Zodiac icon */}
                <div
                  className="relative mb-5 flex h-[80px] w-[80px] items-center justify-center rounded-full text-[2.2rem]"
                  style={{
                    background: "linear-gradient(160deg, rgba(123,47,255,0.15) 0%, rgba(74,123,247,0.08) 100%)",
                    border: "1px solid rgba(123,47,255,0.3)",
                    boxShadow: "0 0 30px rgba(123,47,255,0.2)",
                  }}
                >
                  ♏
                </div>

                {/* Meters */}
                <div className="relative mb-4 flex gap-2.5">
                  <MeterBar label="Amor" value={85} gradient="linear-gradient(90deg, #FF6B9D, #7B2FFF)" />
                  <MeterBar label="Trabajo" value={72} gradient="linear-gradient(90deg, #4A7BF7, #06D6A0)" />
                  <MeterBar label="Salud" value={90} gradient="linear-gradient(90deg, #06D6A0, #FFD166)" />
                </div>

                {/* Horoscope card */}
                <div
                  className="relative mb-4 rounded-[20px] p-4"
                  style={{
                    background: "linear-gradient(160deg, rgba(123,47,255,0.15) 0%, rgba(74,123,247,0.08) 100%)",
                    border: "1px solid rgba(123,47,255,0.15)",
                    backdropFilter: "blur(20px)",
                  }}
                >
                  <h3 className="mb-2 text-xs font-semibold uppercase tracking-[2px] text-stardust">☀️ Tu día</h3>
                  <p className="text-[13px] leading-relaxed text-silver-mist">
                    Las estrellas favorecen tus relaciones hoy. Es momento de expresar lo que sientes sin miedo. En el trabajo, una sorpresa positiva te espera.
                  </p>
                </div>

                {/* Lucky row */}
                <div className="relative mb-5 flex gap-2">
                  {[
                    { emoji: "🔢", label: "Número", value: "7" },
                    { emoji: "🎨", label: "Color", value: "Azul" },
                    { emoji: "💫", label: "Hora", value: "15:00" },
                  ].map((item) => (
                    <div
                      key={item.label}
                      className="flex flex-1 flex-col items-center rounded-xl px-2 py-3"
                      style={{
                        background: "rgba(123,47,255,0.08)",
                        border: "1px solid rgba(123,47,255,0.1)",
                      }}
                    >
                      <span className="mb-1 text-lg">{item.emoji}</span>
                      <span className="t-mono text-[8px] uppercase tracking-wider text-cosmic-gray">{item.label}</span>
                      <span className="t-mono text-[11px] text-white">{item.value}</span>
                    </div>
                  ))}
                </div>

                {/* Bottom nav */}
                <div className="relative flex justify-around border-t border-white/[0.08] pt-3">
                  {[
                    { icon: "☀️", label: "Hoy", active: true },
                    { icon: "🌙", label: "Lunar", active: false },
                    { icon: "💜", label: "Match", active: false },
                    { icon: "👤", label: "Perfil", active: false },
                  ].map((nav) => (
                    <div key={nav.label} className={`text-center ${nav.active ? "opacity-100" : "opacity-40"}`}>
                      <div className="text-lg">{nav.icon}</div>
                      <div className={`text-[9px] ${nav.active ? "text-electric-violet" : "text-white"}`}>{nav.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Text side */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="max-w-md text-center lg:text-left"
          >
            <p className="t-mono mb-3 text-[10px] uppercase tracking-[5px] text-electric-violet sm:text-xs">
              Pantalla Principal
            </p>
            <h2 className="t-display text-3xl font-bold text-white sm:text-4xl">
              Así se ve{" "}
              <span className="gradient-text">tu horóscopo</span>
            </h2>
            <p className="t-body mt-4 text-base leading-relaxed text-silver-mist sm:text-lg">
              El usuario abre la app y ve su horóscopo inmediatamente. Sin scroll innecesario, sin distracciones. Contenido personalizado desde el primer segundo.
            </p>

            {/* Feature list */}
            <ul className="mt-8 space-y-4">
              {[
                "Saludo personalizado con el nombre del usuario",
                "Medidores de amor, trabajo y salud",
                "Predicción diaria concisa y accionable",
                "Datos lucky para compartir en redes",
              ].map((feat) => (
                <li key={feat} className="flex items-start gap-3 text-left">
                  <span className="mt-0.5 text-sm text-aurora-teal">✦</span>
                  <span className="t-body text-sm text-silver-mist sm:text-base">{feat}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

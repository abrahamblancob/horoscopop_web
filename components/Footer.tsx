"use client";

import { FOOTER } from "@/lib/constants";

export default function Footer() {
  return (
    <footer className="relative z-10 border-t border-white/5 px-5 py-12 sm:px-8 sm:py-16">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col items-center gap-6 text-center">
          {/* Logo */}
          <a href="#" className="t-display text-2xl font-bold text-white">
            Horosco<span className="gradient-text">PoP</span>
          </a>

          {/* Tagline */}
          <p className="t-mono text-xs uppercase tracking-[5px] text-cosmic-gray">
            Tu cosmos, cada día
          </p>

          {/* Divider */}
          <div className="divider-accent mx-auto" />

          {/* Links */}
          <div className="flex gap-8">
            <a
              href="/terminos"
              className="t-body text-sm text-silver-mist transition-colors hover:text-white"
            >
              Términos
            </a>
            <a
              href="/privacidad"
              className="t-body text-sm text-silver-mist transition-colors hover:text-white"
            >
              Privacidad
            </a>
          </div>

          {/* Disclaimer */}
          <p className="max-w-lg t-body text-xs leading-relaxed text-cosmic-gray">
            {FOOTER.disclaimer}
          </p>

          {/* Copyright */}
          <p className="t-mono text-[11px] text-cosmic-gray/60">
            {FOOTER.copyright}
          </p>
        </div>
      </div>
    </footer>
  );
}

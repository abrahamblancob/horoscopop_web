"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { NAV_LINKS } from "@/lib/constants";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "" : "bg-transparent"
      }`}
      style={
        scrolled
          ? {
              background: "rgba(10, 10, 18, 0.85)",
              backdropFilter: "blur(24px)",
              WebkitBackdropFilter: "blur(24px)",
              borderBottom: "1px solid rgba(123, 47, 255, 0.1)",
              boxShadow: "0 4px 30px rgba(0, 0, 0, 0.3)",
            }
          : undefined
      }
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between" style={{ padding: "20px 20px" }}>
        {/* Logo */}
        <a href="#" className="t-display text-xl font-bold text-white sm:text-2xl">
          Horosco<span className="gradient-text">PoP</span>
        </a>

        {/* Desktop links */}
        <div className="hidden items-center gap-8 md:flex lg:gap-10">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="t-body relative text-sm text-silver-mist transition-colors duration-300 hover:text-white"
              style={{ letterSpacing: "0.3px" }}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#download"
            className="inline-flex items-center justify-center rounded-xl text-sm font-semibold text-white transition-all duration-300 hover:scale-[1.03]"
            style={{
              padding: "10px 28px",
              background: "linear-gradient(135deg, #7B2FFF 0%, #FF6B9D 100%)",
              boxShadow: "0 4px 20px rgba(123,47,255,0.3)",
            }}
          >
            Descarga gratis
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          className="flex flex-col gap-1.5 md:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Menú"
        >
          <span
            className={`block h-0.5 w-6 bg-white transition-all duration-300 ${
              mobileOpen ? "translate-y-2 rotate-45" : ""
            }`}
          />
          <span
            className={`block h-0.5 w-6 bg-white transition-all duration-300 ${
              mobileOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block h-0.5 w-6 bg-white transition-all duration-300 ${
              mobileOpen ? "-translate-y-2 -rotate-45" : ""
            }`}
          />
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="overflow-hidden md:hidden"
            style={{
              background: "rgba(10, 10, 18, 0.95)",
              backdropFilter: "blur(24px)",
              WebkitBackdropFilter: "blur(24px)",
              borderTop: "1px solid rgba(123, 47, 255, 0.08)",
            }}
          >
            <div className="flex flex-col gap-1 px-5 py-5">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="t-body rounded-xl px-4 py-3.5 text-base text-silver-mist transition-colors hover:bg-white/5 hover:text-white"
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#download"
                className="mt-3 inline-flex items-center justify-center rounded-xl text-sm font-semibold text-white transition-all duration-300"
                style={{
                  padding: "14px 28px",
                  background: "linear-gradient(135deg, #7B2FFF 0%, #FF6B9D 100%)",
                  boxShadow: "0 4px 20px rgba(123,47,255,0.3)",
                }}
                onClick={() => setMobileOpen(false)}
              >
                Descarga gratis
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}

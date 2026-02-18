"use client";

import { motion } from "framer-motion";

interface SectionHeaderProps {
  title: React.ReactNode;
  subtitle?: string;
}

export default function SectionHeader({ title, subtitle }: SectionHeaderProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6 }}
      className="mb-10 text-center sm:mb-14 lg:mb-16"
    >
      <h2 className="t-display text-2xl font-bold text-white sm:text-3xl md:text-4xl lg:text-5xl">
        {title}
      </h2>
      {subtitle && (
        <p className="t-body mt-4 max-w-xl text-center text-sm text-silver-mist sm:mt-5 sm:text-base" style={{ margin: "1rem auto 0" }}>
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}

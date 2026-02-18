"use client";

import { motion, type Variants } from "framer-motion";

interface GlassCardProps {
  children: React.ReactNode;
  index?: number;
  className?: string;
}

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5, ease: "easeOut" },
  }),
};

export default function GlassCard({ children, index = 0, className = "" }: GlassCardProps) {
  return (
    <motion.div
      custom={index}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-40px" }}
      variants={cardVariants}
      whileHover={{ scale: 1.02 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className={`glass glow-card cursor-default rounded-[24px] p-8 sm:p-9 lg:p-10 ${className}`}
    >
      {children}
    </motion.div>
  );
}

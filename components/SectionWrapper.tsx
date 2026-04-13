"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

type Variant = "white" | "light" | "dark";

interface SectionWrapperProps {
  children: ReactNode;
  variant?: Variant;
  className?: string;
  id?: string;
}

const bgMap: Record<Variant, string> = {
  white: "bg-white",
  light: "bg-gradient-to-b from-slate-50 to-blue-50/20",
  dark:  "bg-brand-black",
};

export default function SectionWrapper({ children, variant = "white", className = "", id }: SectionWrapperProps) {
  return (
    <motion.section
      id={id}
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={`${bgMap[variant]} ${className}`}
    >
      <div className="w-full px-6 lg:px-16 xl:px-24 py-section">
        {children}
      </div>
    </motion.section>
  );
}
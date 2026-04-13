"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

interface CTASectionProps {
  heading?: string;
  subheading?: string;
  buttonLabel?: string;
  buttonHref?: string;
}

export default function CTASection({
  heading     = "Ready to Transform Your Business?",
  subheading  = "Let's build a strategy that drives measurable growth. Book a free consultation with our team today.",
  buttonLabel = "Book a Free Consultation",
  buttonHref  = "/contact",
}: CTASectionProps) {
  return (
    <section className="relative bg-hero-gradient overflow-hidden">
      <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-brand-blue-500/10 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-20 -left-20 w-72 h-72 rounded-full bg-brand-blue-700/10 blur-3xl pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="relative z-10 max-w-4xl mx-auto px-6 lg:px-8 py-24 text-center"
      >
        <p className="text-brand-blue-400 text-sm font-semibold uppercase tracking-widest mb-4">
          Let's Work Together
        </p>
        <h2 className="font-display text-white text-display-lg font-bold mb-6">{heading}</h2>
        <p className="text-white/65 text-lg leading-relaxed max-w-2xl mx-auto mb-10">{subheading}</p>
        <Link
          href={buttonHref}
          className="inline-flex items-center gap-3 bg-brand-blue-500 hover:bg-brand-blue-400 text-white font-semibold px-8 py-4 rounded-lg transition-all duration-200 shadow-blue hover:shadow-lg hover:-translate-y-0.5 group"
        >
          {buttonLabel}
          <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform duration-200" />
        </Link>
      </motion.div>
    </section>
  );
}
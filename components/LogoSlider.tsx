"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const LABELS: Record<string, { tag: string; title: string }> = {
  fr: { tag: "Ils nous font confiance", title: "Nos Partenaires & Clients" },
  en: { tag: "Trusted by",              title: "Our Partners & Clients"    },
  pt: { tag: "Confiam em nós",          title: "Nossos Parceiros & Clientes" },
};

// Files: /public/logos/1.jpg … 11.jpg
const LOGOS = Array.from({ length: 11 }, (_, i) => ({
  src: `/logos/${i + 1}.jpg`,
  alt: `Partner ${i + 1}`,
}));

interface LogoSliderProps {
  lang?: "fr" | "en" | "pt";
}

export default function LogoSlider({ lang = "fr" }: LogoSliderProps) {
  const { tag, title } = LABELS[lang] ?? LABELS.fr;
  const doubled = [...LOGOS, ...LOGOS];

  return (
    <section
      style={{
        background: "#151A24",
        borderTop: "1px solid rgba(255,255,255,0.05)",
        borderBottom: "1px solid rgba(255,255,255,0.05)",
        padding: "4rem 0",
        overflow: "hidden",
        position: "relative",
      }}
    >
      {/* Subtle blue glow */}
      <div aria-hidden style={{
        position: "absolute", top: "-60px", left: "10%",
        width: "400px", height: "200px",
        background: "radial-gradient(ellipse, #29ABE222 0%, transparent 70%)",
        pointerEvents: "none",
      }} />

      {/* Header */}
      <div style={{ textAlign: "center", marginBottom: "2.5rem", padding: "0 1.5rem" }}>
        <motion.p
          initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.5 }}
          style={{
            fontSize: ".68rem", fontWeight: 700, letterSpacing: ".2em",
            textTransform: "uppercase" as const, color: "#29ABE2", marginBottom: ".5rem",
          }}
        >
          {tag}
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.08 }}
          style={{
            fontFamily: "'Bebas Neue', sans-serif",
            fontSize: "clamp(1.6rem, 3.5vw, 2.4rem)",
            fontWeight: 400, letterSpacing: ".04em", color: "#fff",
          }}
        >
          {title}
        </motion.h2>
      </div>

      {/* Left fade mask */}
      <div aria-hidden style={{
        position: "absolute", top: 0, left: 0, bottom: 0, width: "120px",
        background: "linear-gradient(to right, #151A24, transparent)",
        zIndex: 2, pointerEvents: "none",
      }} />
      {/* Right fade mask */}
      <div aria-hidden style={{
        position: "absolute", top: 0, right: 0, bottom: 0, width: "120px",
        background: "linear-gradient(to left, #151A24, transparent)",
        zIndex: 2, pointerEvents: "none",
      }} />

      {/* Scrolling track */}
      <div style={{ display: "flex", width: "100%", overflow: "hidden" }}>
        <div className="logo-marquee-track">
          {doubled.map((logo, idx) => (
            <div key={idx} className="logo-marquee-item">
              <Image
                src={logo.src}
                alt={logo.alt}
                width={140}
                height={70}
                style={{
                  objectFit: "contain",
                  width: "100%",
                  height: "100%",
                  /* No filter, no background, no border — just the raw image */
                }}
              />
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes marquee {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .logo-marquee-track {
          display: flex;
          align-items: center;
          gap: 4rem;
          animation: marquee 30s linear infinite;
          will-change: transform;
        }
        .logo-marquee-track:hover {
          animation-play-state: paused;
        }
        .logo-marquee-item {
          flex-shrink: 0;
          width: 140px;
          height: 70px;
          display: flex;
          align-items: center;
          justify-content: center;
          /* No background, no border, no box-shadow */
        }
      `}</style>
    </section>
  );
}
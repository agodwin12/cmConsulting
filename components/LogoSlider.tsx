"use client";

import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, useRef } from "react";

const LABELS: Record<string, { tag: string; title: string }> = {
  fr: { tag: "Ils nous font confiance", title: "Nos Partenaires & Clients" },
  en: { tag: "Trusted by",              title: "Our Partners & Clients"    },
  pt: { tag: "Confiam em nós",          title: "Nossos Parceiros & Clientes" },
};

const LOGOS = Array.from({ length: 11 }, (_, i) => ({
  src: `/logos/${i + 1}.jpg`,
  alt: `Partner ${i + 1}`,
}));

function chunk<T>(arr: T[], size: number): T[][] {
  const out: T[][] = [];
  for (let i = 0; i < arr.length; i += size) out.push(arr.slice(i, i + size));
  return out;
}

const GROUPS = chunk(LOGOS, 4);

interface LogoSliderProps {
  lang?: "fr" | "en" | "pt";
}

export default function LogoSlider({ lang = "fr" }: LogoSliderProps) {
  const { tag, title } = LABELS[lang] ?? LABELS.fr;
  const [current, setCurrent] = useState(0);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const goTo = (index: number) => setCurrent(index);

  const startTimer = () => {
    timerRef.current = setInterval(() => {
      setCurrent(prev => (prev + 1) % GROUPS.length);
    }, 3000);
  };

  const stopTimer = () => {
    if (timerRef.current) clearInterval(timerRef.current);
  };

  useEffect(() => {
    startTimer();
    return stopTimer;
  }, []);

  return (
    <section
      style={{
        background: "#151A24",
        borderTop: "1px solid rgba(255,255,255,0.05)",
        borderBottom: "1px solid rgba(255,255,255,0.05)",
        padding: "4rem 2rem",
        overflow: "hidden",
        position: "relative",
      }}
    >
      {/* Glow */}
      <div aria-hidden style={{
        position: "absolute", top: "-60px", left: "10%",
        width: "400px", height: "200px",
        background: "radial-gradient(ellipse, #29ABE222 0%, transparent 70%)",
        pointerEvents: "none",
      }} />

      {/* Header */}
      <div style={{ textAlign: "center", marginBottom: "2.5rem" }}>
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          style={{
            fontSize: ".68rem", fontWeight: 700, letterSpacing: ".22em",
            textTransform: "uppercase" as const, color: "#29ABE2", marginBottom: ".5rem",
          }}
        >
          {tag}
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.08 }}
          style={{
            fontFamily: "'Bebas Neue', sans-serif",
            fontSize: "clamp(1.6rem, 3.5vw, 2.4rem)",
            fontWeight: 400, letterSpacing: ".04em", color: "#fff", margin: 0,
          }}
        >
          {title}
        </motion.h2>
      </div>

      {/* Logo stage */}
      <div
        onMouseEnter={stopTimer}
        onMouseLeave={startTimer}
        style={{
          position: "relative",
          height: 140,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.7, ease: "easeInOut" }}
            style={{ display: "flex", alignItems: "center", gap: "1.5rem" }}
          >
            {GROUPS[current].map((logo, i) => (
              <div
                key={i}
                style={{
                  width: 180,
                  height: 110,
                  background: "#fff",
                  border: "1.5px solid #e2e8f0",
                  borderRadius: 10,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  overflow: "hidden",
                  flexShrink: 0,
                  padding: 6,
                  boxSizing: "border-box" as const,
                  transition: "transform 0.2s ease",
                }}
              >
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  width={180}
                  height={110}
                  style={{ objectFit: "contain", width: "100%", height: "100%" }}
                />
              </div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Dots */}
      <div style={{ display: "flex", justifyContent: "center", gap: 7, marginTop: "1.8rem" }}>
        {GROUPS.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            aria-label={`Set ${i + 1}`}
            style={{
              width: 6, height: 6,
              borderRadius: "50%",
              border: "none",
              cursor: "pointer",
              padding: 0,
              background: i === current ? "#29ABE2" : "rgba(255,255,255,0.2)",
              transform: i === current ? "scale(1.3)" : "scale(1)",
              transition: "background 0.3s ease, transform 0.3s ease",
            }}
          />
        ))}
      </div>
    </section>
  );
}
"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";

const slides = [
  {
    id:       "conseil",
    brand:    "Conseil & Stratégie",
    eyebrow:  "Strategy · Growth · Leadership",
    headline: ["Helping African", "Businesses", "Grow & Scale."],
    accent:   2,
    sub:      "Stratégie d'entreprise, plans de croissance et accompagnement des dirigeants camerounais. Du cap au résultat.",
    cta:      { label: "Demander un Devis", href: "/contact" },
    ctaAlt:   { label: "Nos Services", href: "/services#conseil" },
    image:    "https://images.unsplash.com/photo-1573497491765-dccce02b29df?w=1920&h=1080&fit=crop",
    color:    "#3B82F6",
    colorName:"blue",
    stat:     { value: "200+", label: "Projets Réalisés" },
  },
  {
    id:       "depannage",
    brand:    "Informatique & Dépannage",
    eyebrow:  "Repair · Maintenance · Support",
    headline: ["Votre Tech,", "Toujours", "Opérationnelle."],
    accent:   2,
    sub:      "Réparation PC, téléphones, imprimantes et réseaux — intervention rapide à Douala avec des tarifs transparents.",
    cta:      { label: "Contacter D-Panneur", href: "/contact" },
    ctaAlt:   { label: "Voir les Services", href: "/services#depannage" },
    image:    "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=1920&h=1080&fit=crop",
    color:    "#F97316",
    colorName:"orange",
    stat:     { value: "24h", label: "Délai d'Intervention" },
  },
  {
    id:       "graphique",
    brand:    "Création Graphique",
    eyebrow:  "Design · Branding · Print",
    headline: ["Votre Marque,", "Une Image", "Inoubliable."],
    accent:   2,
    sub:      "Logos, identité visuelle, supports print et réseaux sociaux — CM Graphic donne vie à votre communication.",
    cta:      { label: "Lancer un Projet", href: "/contact" },
    ctaAlt:   { label: "Nos Créations", href: "/services#graphique" },
    image:    "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=1920&h=1080&fit=crop",
    color:    "#EC4899",
    colorName:"pink",
    stat:     { value: "500+", label: "Designs Livrés" },
  },
  {
    id:       "dev",
    brand:    "Développement Logiciel",
    eyebrow:  "Web · Mobile · Software",
    headline: ["Des Solutions", "Digitales Pour", "l'Afrique."],
    accent:   2,
    sub:      "Sites web, apps mobiles, logiciels métier — conçus pour le contexte africain : Mobile Money, mode offline, faible débit.",
    cta:      { label: "Démarrer un Projet", href: "/contact" },
    ctaAlt:   { label: "Nos Réalisations", href: "/services#dev" },
    image:    "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=1920&h=1080&fit=crop",
    color:    "#22C55E",
    colorName:"green",
    stat:     { value: "50+", label: "Apps Déployées" },
  },
  {
    id:       "shop",
    brand:    "CM Shop",
    eyebrow:  "Boutique en ligne ",
    headline: ["Des Articles", "De Qualité,", "Au Meilleur Prix."],
    accent:   1,
    sub:      "Ordinateurs, téléphones, accessoires et consommables —",
    cta:      { label: "Voir la Boutique", href: "/shop" },
    ctaAlt:   { label: "Commander WhatsApp", href: "https://wa.me/237694890230" },
    image:    "https://images.unsplash.com/photo-1491933382434-500287f9b54b?w=1920&h=1080&fit=crop",
    color:    "#EAB308",
    colorName:"yellow",
    stat:     { value: "500+", label: "Produits en Stock" },
  },
  {
    id:       "cloud",
    brand:    "Solutions Cloud",
    eyebrow:  "Cloud · Security · Infrastructure",
    headline: ["Vos Données", "Sécurisées,", "Partout."],
    accent:   1,
    sub:      "Hébergement, migration cloud, cybersécurité — une infrastructure fiable pour que votre business ne s'arrête jamais.",
    cta:      { label: "Audit Gratuit", href: "/contact" },
    ctaAlt:   { label: "En Savoir Plus", href: "/services#cloud" },
    image:    "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1920&h=1080&fit=crop",
    color:    "#A855F7",
    colorName:"purple",
    stat:     { value: "99.9%", label: "Uptime Garanti" },
  },
];

const DURATION = 6000;

export default function HeroSection() {
  const [current,  setCurrent]  = useState(0);
  const [paused,   setPaused]   = useState(false);
  const [progress, setProgress] = useState(0);

  const total = slides.length;

  const next = useCallback(() => { setCurrent((c) => (c + 1) % total); setProgress(0); }, [total]);
  const prev = useCallback(() => { setCurrent((c) => (c - 1 + total) % total); setProgress(0); }, [total]);
  const goTo = useCallback((i: number) => { setCurrent(i); setProgress(0); }, []);

  useEffect(() => {
    if (paused) return;
    const interval = setInterval(() => {
      setProgress((p) => {
        if (p >= 100) { next(); return 0; }
        return p + (100 / (DURATION / 100));
      });
    }, 100);
    return () => clearInterval(interval);
  }, [paused, next]);

  const slide = slides[current];

  return (
    <section
      className="relative min-h-screen flex items-center overflow-hidden"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* Background image — no brightness filter, full color */}
      <AnimatePresence mode="sync">
        <motion.div
          key={slide.id + "-bg"}
          initial={{ opacity: 0, scale: 1.04 }}
          animate={{ opacity: 1,  scale: 1 }}
          exit={{    opacity: 0,  scale: 0.98 }}
          transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
          className="absolute inset-0 z-0"
        >
          <Image
            src={slide.image}
            alt={slide.brand}
            fill
            className="object-cover"
            priority
          />
          {/*
            OVERLAY STRATEGY:
            - Left side: enough darkness for white text to be readable (0.60)
            - Right side: nearly transparent (0.10) so the image shines through
            - Top/bottom: very light vignette only (0.25) — not a black wash
          */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/35 to-black/10" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-black/10" />
        </motion.div>
      </AnimatePresence>

      {/* Colored accent glow */}
      <AnimatePresence mode="sync">
        <motion.div
          key={slide.id + "-glow"}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{    opacity: 0 }}
          transition={{ duration: 1.2 }}
          className="absolute top-0 right-0 w-[700px] h-[700px] rounded-full blur-[180px] pointer-events-none z-0"
          style={{ background: slide.color + "22" }}
        />
      </AnimatePresence>

      {/* Grain texture */}
      <div
        className="absolute inset-0 z-0 opacity-[0.035] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
          backgroundSize: "200px 200px",
        }}
      />

      {/* Main content */}
      <div className="relative z-10 w-full px-6 lg:px-16 xl:px-24 pt-36 pb-32">
        <div className="max-w-3xl">

          {/* Eyebrow */}
          <AnimatePresence mode="wait">
            <motion.div
              key={slide.id + "-eyebrow"}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{    opacity: 0, y: -8 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="flex items-center gap-3 mb-7"
            >
              <span className="h-px w-10" style={{ background: slide.color }} />
              <span className="text-xs font-bold uppercase tracking-[0.2em]" style={{ color: slide.color }}>
                {slide.eyebrow}
              </span>
            </motion.div>
          </AnimatePresence>

          {/* Headline */}
          <AnimatePresence mode="wait">
            <motion.h1
              key={slide.id + "-headline"}
              className="font-display text-[clamp(3rem,7vw,5.5rem)] text-white font-bold leading-[1.05] mb-6"
              style={{ textShadow: "0 2px 20px rgba(0,0,0,0.4)" }}
            >
              {slide.headline.map((line, li) => (
                <motion.span
                  key={li}
                  className="block"
                  initial={{ opacity: 0, y: 32 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.65, delay: li * 0.12, ease: [0.22, 1, 0.36, 1] }}
                  style={li === slide.accent ? { color: slide.color } : {}}
                >
                  {line}
                </motion.span>
              ))}
            </motion.h1>
          </AnimatePresence>

          {/* Sub */}
          <AnimatePresence mode="wait">
            <motion.p
              key={slide.id + "-sub"}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{    opacity: 0, y: -10 }}
              transition={{ duration: 0.55, delay: 0.35, ease: "easeOut" }}
              className="text-white/80 text-base lg:text-lg leading-relaxed max-w-xl mb-10"
              style={{ textShadow: "0 1px 8px rgba(0,0,0,0.5)" }}
            >
              {slide.sub}
            </motion.p>
          </AnimatePresence>

          {/* CTAs */}
          <AnimatePresence mode="wait">
            <motion.div
              key={slide.id + "-ctas"}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{    opacity: 0, y: -10 }}
              transition={{ duration: 0.5, delay: 0.45, ease: "easeOut" }}
              className="flex flex-wrap items-center gap-4 mb-16"
            >
              <Link
                href={slide.cta.href}
                className="inline-flex items-center gap-2 text-white font-semibold px-7 py-3.5 rounded-xl transition-all duration-200 hover:-translate-y-0.5 group text-sm shadow-lg"
                style={{ background: slide.color }}
              >
                {slide.cta.label}
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href={slide.ctaAlt.href}
                className="inline-flex items-center gap-2 text-white border border-white/40 hover:border-white/70 hover:bg-white/10 px-7 py-3.5 rounded-xl text-sm font-semibold transition-all duration-200 backdrop-blur-sm"
              >
                {slide.ctaAlt.label}
              </Link>
            </motion.div>
          </AnimatePresence>

          {/* Stat pill */}
          <AnimatePresence mode="wait">
            <motion.div
              key={slide.id + "-stat"}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{    opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.45, delay: 0.55 }}
              className="inline-flex items-center gap-4 bg-black/30 backdrop-blur-md border border-white/20 rounded-2xl px-6 py-4"
            >
              <div>
                <div className="font-display text-3xl font-bold leading-none" style={{ color: slide.color }}>
                  {slide.stat.value}
                </div>
                <div className="text-white/70 text-xs mt-1">{slide.stat.label}</div>
              </div>
              <div className="w-px h-10 bg-white/20" />
              <div className="text-white/70 text-xs leading-relaxed max-w-[120px]">
                {slide.brand}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Bottom nav */}
      <div className="absolute bottom-10 left-0 right-0 z-20 flex items-center justify-center gap-6 px-6">
        <button
          onClick={prev}
          className="w-9 h-9 rounded-full bg-black/30 hover:bg-black/50 border border-white/25 flex items-center justify-center text-white/80 hover:text-white transition-all backdrop-blur-sm"
          aria-label="Précédent"
        >
          <ChevronLeft size={16} />
        </button>

        <div className="flex items-center gap-2">
          {slides.map((s, i) => (
            <button
              key={s.id}
              onClick={() => goTo(i)}
              aria-label={s.brand}
              className="relative h-1 rounded-full overflow-hidden transition-all duration-300"
              style={{ width: i === current ? 48 : 20, background: "rgba(255,255,255,0.3)" }}
            >
              {i === current && (
                <motion.div
                  className="absolute inset-y-0 left-0 rounded-full"
                  style={{ background: slide.color, width: `${progress}%` }}
                />
              )}
            </button>
          ))}
        </div>

        <button
          onClick={next}
          className="w-9 h-9 rounded-full bg-black/30 hover:bg-black/50 border border-white/25 flex items-center justify-center text-white/80 hover:text-white transition-all backdrop-blur-sm"
          aria-label="Suivant"
        >
          <ChevronRight size={16} />
        </button>

        <span className="text-white/50 text-xs font-mono tabular-nums">
          {String(current + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
        </span>
      </div>

      {/* Right-side vertical tabs */}
      <div className="absolute right-6 top-1/2 -translate-y-1/2 z-20 hidden xl:flex flex-col gap-2">
        {slides.map((s, i) => (
          <button
            key={s.id}
            onClick={() => goTo(i)}
            className={`group flex items-center gap-2 px-3 py-2 rounded-lg transition-all duration-300 text-right ${
              i === current ? "bg-black/30 backdrop-blur-sm border border-white/20" : "hover:bg-black/20"
            }`}
          >
            <span
              className={`text-xs font-semibold transition-all duration-300 ${
                i === current ? "text-white" : "text-white/50 group-hover:text-white/75"
              }`}
              style={{ maxWidth: 120, textAlign: "right", display: "block" }}
            >
              {s.brand}
            </span>
            <span
              className="w-1.5 h-1.5 rounded-full shrink-0 transition-all duration-300"
              style={{
                background: i === current ? s.color : "rgba(255,255,255,0.35)",
                boxShadow: i === current ? `0 0 8px ${s.color}` : "none",
              }}
            />
          </button>
        ))}
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-28 bg-gradient-to-t from-white to-transparent pointer-events-none z-10" />
    </section>
  );
}
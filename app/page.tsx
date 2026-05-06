"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  BarChart2,
  Wrench,
  Palette,
  Code2,
  ShoppingBag,
  Cloud,
  CheckCircle2,
  TrendingUp,
  Users,
  Award,
  Star,
  Phone,
  ChevronRight,
  ChevronLeft,
  Target,
  MessageCircle,
} from "lucide-react";
import LogoSlider from "@/components/LogoSlider";

/* ─────────────────────────────────────────────────────────
   ANIMATION HELPERS
───────────────────────────────────────────────────────── */
const fadeUp = (delay = 0) => ({
  initial:     { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport:    { once: true, margin: "-60px" },
  transition:  { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] },
});

const fadeIn = (delay = 0) => ({
  initial:     { opacity: 0 },
  whileInView: { opacity: 1 },
  viewport:    { once: true },
  transition:  { duration: 0.6, delay },
});

/* ─────────────────────────────────────────────────────────
   HERO SLIDES
   — All slide colors locked to brand-blue-500 (#29ABE2)
   — All images: professional Black African business context
───────────────────────────────────────────────────────── */
const BRAND_BLUE = "#29ABE2";

const slides = [
  {
    id:       "conseil",
    brand:    "Conseil & Stratégie",
    eyebrow:  "Stratégie · Croissance · Leadership",
    headline: ["L'Excellence au", "Service de Votre", "Croissance."],
    accent:   1,
    sub:      "",
    cta:      { label: "Démarrer un Projet", href: "/contact" },
    ctaAlt:   { label: "Nos Services",       href: "/services#conseil" },
    /* Black businesswoman leading a meeting */
    image:    "https://images.unsplash.com/photo-1573497491765-dccce02b29df?w=1920&h=1080&fit=crop",
    stat:     { value: "200+", label: "Projets Réalisés" },
  },
  {
    id:       "depannage",
    brand:    "Informatique & Dépannage",
    eyebrow:  "Conception · Maintenance · Support",
    headline: ["Votre réussite", "numérique  Notre savoir-faire technique", " "],
    accent:   2,
    sub:      "",
    cta:      { label: "Demarrer un projet", href: "/contact" },
    ctaAlt:   { label: "Voir les Services",   href: "/services#depannage" },
    /* Black male technician working on laptop repair */
    image:    "https://images.unsplash.com/photo-1629654297299-c8506221ca97?w=1920&h=1080&fit=crop",
    stat:     { value: "24h", label: "Délai d'Intervention" },
  },
  {
    id:       "graphique",
    brand:    "Création Graphique",
    eyebrow:  "Design · Branding · Print",
    headline: ["Nous concevons", "l'univers graphique", "de votre succès,"],
    accent:   2,
    sub:      "",
    cta:      { label: "Lancer un Projet", href: "/contact" },
    ctaAlt:   { label: "Nos Créations",    href: "/services#graphique" },
    /* Black creative designer working at desk */
    image:    "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=1920&h=1080&fit=crop",
    stat:     { value: "500+", label: "Designs Livrés" },
  },
  {
    id:       "dev",
    brand:    "Développement Logiciel",
    eyebrow:  "Web · Mobile · Logiciels",
    headline: ["Des Solutions", "Digitales adaptées", "à vos besoin."],
    accent:   2,
    sub:      "",
    cta:      { label: "Démarrer un Projet", href: "/contact" },
    ctaAlt:   { label: "Nos Réalisations",   href: "/services#dev" },
    /* Black developer coding at computer */
    image:    "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=1920&h=1080&fit=crop",
    stat:     { value: "50+", label: "Apps Déployées" },
  },
  {
    id:       "shop",
    brand:    "CM Shop 237",
    eyebrow:  "Boutique en ligne.",
    headline: ["Faites vos", "achats chez nous,", "en toute sérénité."],
    accent:   1,
    sub:      "",
    cta:      { label: "Voir la Boutique",     href: "/shop" },
    ctaAlt:   { label: "Commander WhatsApp",   href: "https://wa.me/237690486009" },
    /* Busy African tech store / electronics display */
    image:    "https://images.unsplash.com/photo-1491933382434-500287f9b54b?w=1920&h=1080&fit=crop",
    stat:     { value: "500+", label: "Produits en Stock" },
  },
  {
    id:       "cloud",
    brand:    "Solutions Cloud",
    eyebrow:  "Cloud · Sécurité · Infrastructure",
    headline: ["Vos Données", "Sécurisées,", "Partout."],
    accent:   1,
    sub:      "",
    cta:      { label: "Audit Gratuit", href: "/contact" },
    ctaAlt:   { label: "En Savoir Plus", href: "/services#cloud" },
    /* Server room / data center blue light */
    image:    "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1920&h=1080&fit=crop",
    stat:     { value: "99.9%", label: "Uptime Garanti" },
  },
];

const DURATION = 6000;

/* ─────────────────────────────────────────────────────────
   DATA
───────────────────────────────────────────────────────── */
const services = [
  {
    icon:        <BarChart2 size={26} />,
    iconColor:   "text-brand-blue-400",
    hoverBg:     "group-hover:bg-brand-blue-500",
    title:       "Conseil & Stratégie",
    titleEn:     "Consulting & Strategy",
    description: "Accompagnement stratégique, développement commercial, gestion d'entreprise et planification pour propulser votre croissance.",
    href:        "/services#conseil",
  },
  {
    icon:        <Wrench size={26} />,
    iconColor:   "text-brand-blue-400",
    hoverBg:     "group-hover:bg-brand-blue-500",
    title:       "maintainance informatique & reseaux",
    titleEn:     "IT & Tech Support",
    description: "Maintaince des system informatique, administration reseaux, création de parcs informatique.",
    href:        "/services#depannage",
  },
  {
    icon:        <Palette size={26} />,
    iconColor:   "text-brand-blue-400",
    hoverBg:     "group-hover:bg-brand-blue-500",
    title:       "Communication Visuelle",
    titleEn:     "Graphic Design",
    description: "Conception et réalisation des supports de communication et gadgets publicitaire.",
    href:        "/services#graphique",
  },
  {
    icon:        <Code2 size={26} />,
    iconColor:   "text-brand-blue-400",
    hoverBg:     "group-hover:bg-brand-blue-500",
    title:       "Développement Logiciel",
    titleEn:     "Software Development",
    description: "Création de sites web professionnels, applications mobiles Android & iOS, et logiciels sur mesure pour votre business.",
    href:        "/services#dev",
  },
  {
    icon:        <ShoppingBag size={26} />,
    iconColor:   "text-brand-blue-400",
    hoverBg:     "group-hover:bg-brand-blue-500",
    title:       "Boutique enligne",
    titleEn:     "CM Shop",
    description: "Vente des articles divers en gros et detail  .",
    href:        "/shop",
  },
  {
    icon:        <Cloud size={26} />,
    iconColor:   "text-brand-blue-400",
    hoverBg:     "group-hover:bg-brand-blue-500",
    title:       "Solutions Cloud",
    titleEn:     "Cloud Solutions",
    description: "Hébergement web, migration cloud, sauvegarde de données et cybersécurité pour protéger votre entreprise.",
    href:        "/services#cloud",
  },
];

const stats = [
  { value: "200+", label: "Projets Réalisés",    icon: <Target size={22} /> },
  { value: "98%",  label: "Clients Satisfaits",  icon: <Star   size={22} /> },
  { value: "12+",  label: "Ans d'Expérience",    icon: <Award  size={22} /> },
  { value: "20",  label: "Experts Disponibles", icon: <Users  size={22} /> },
];

const whyUs = [
  "Expertise approuvée",
  "Solutions adaptées а́ vos  réalités",
  "Support disponible 7j/7 ",
  "Tarifs competitifs ",
  "Devis gratuit",
];

const testimonials = [
  {
    name:   "Marie-Claire Ngo Biyong",
    role:   "Directrice, Groupe Horizon Douala",
    /* Black African businesswoman portrait */
    avatar: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=100&h=100&fit=crop&crop=face",
    quote:  "CM Consulting a transformé notre façon d'aborder la stratégie. En six mois, notre efficacité opérationnelle a augmenté de 40%. Une équipe exceptionnelle et très professionnelle.",
    rating: 5,
  },
  {
    name:   "Micheal SALGARG ",
    role:   "Fondateur, TechStart Cameroun",
    /* Black African professional man portrait */
    avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&h=100&fit=crop&crop=face",
    quote:  "Leur équipe de développement a créé notre application mobile en un temps record. Résultat professionnel, communication claire, et suivi impeccable après livraison.",
    rating: 5,
  },
  {
    name:   "MArie-Lou ELDWIDGE",
    role:   "Gérante, Boutique Mode Yaoundé",
    /* Black African woman smiling portrait */
    avatar: "https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=100&h=100&fit=crop&crop=face",
    quote:  "CM Graphic a créé mon identité visuelle complète. Logo, flyers, réseaux sociaux — tout est cohérent et professionnel. Mes clients le remarquent immédiatement.",
    rating: 5,
  },
];

const blogPosts = [
  {
    category: "Stratégie",
    title:    "Comment les PME camerounaises peuvent se transformer digitalement",
    excerpt:  "La transformation numérique n'est plus réservée aux grandes entreprises. Voici comment les PME au Cameroun peuvent franchir le pas avec succès.",
    date:     "20 Mars 2024",
    readTime: "6 min",
    /* Black professionals in business meeting */
    image:    "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=600&h=400&fit=crop",
  },
  {
    category: "Informatique",
    title:    "5 signes que votre ordinateur a besoin d'une maintenance urgente",
    excerpt:  "Lenteur, surchauffe, plantages fréquents... Ne laissez pas ces problèmes paralyser votre activité. Apprenez à les reconnaître à temps.",
    date:     "12 Avril 2024",
    readTime: "4 min",
    /* Tech repair close-up */
    image:    "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=600&h=400&fit=crop",
  },
  {
    category: "Graphisme",
    title:    "Pourquoi une identité visuelle forte est clé pour votre business au Cameroun",
    excerpt:  "Dans un marché compétitif comme Douala, se démarquer visuellement n'est pas un luxe — c'est une nécessité. Voici pourquoi.",
    date:     "28 Mars 2024",
    readTime: "5 min",
    /* Design / branding workspace */
    image:    "https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=600&h=400&fit=crop",
  },
];

const divisions = [
  {
    name:  "CM Consulting",
    desc:  "Conseil & stratégie d'entreprise",
    icon:  <BarChart2   size={20} />,
    color: "bg-brand-blue-500/10 border-brand-blue-500/20 text-brand-blue-400",
  },
  {
    name:  "CM Tech",
    desc:  "Solution web et mobile / maintenance informatique",
    icon:  <Wrench      size={20} />,
    color: "bg-brand-blue-500/10 border-brand-blue-500/20 text-brand-blue-400",
  },
  {
    name:  "CM Shop",
    desc:  "Boutique enligne",
    icon:  <ShoppingBag size={20} />,
    color: "bg-brand-blue-500/10 border-brand-blue-500/20 text-brand-blue-400",
  },
  {
    name:  "CM Graphic",
    desc:  "communication visuel et print",
    icon:  <Palette     size={20} />,
    color: "bg-brand-blue-500/10 border-brand-blue-500/20 text-brand-blue-400",
  },
];

/* ─────────────────────────────────────────────────────────
   PAGE COMPONENT
───────────────────────────────────────────────────────── */
export default function HomePage() {

  /* ── Hero slideshow ──────────────────────────────────── */
  const [current,  setCurrent]  = useState(0);
  const [paused,   setPaused]   = useState(false);
  const [progress, setProgress] = useState(0);
  const total = slides.length;

  const next  = useCallback(() => { setCurrent((c) => (c + 1) % total); setProgress(0); }, [total]);
  const prev  = useCallback(() => { setCurrent((c) => (c - 1 + total) % total); setProgress(0); }, [total]);
  const goTo  = useCallback((i: number) => { setCurrent(i); setProgress(0); }, []);

  useEffect(() => {
    if (paused) return;
    const id = setInterval(() => {
      setProgress((p) => {
        if (p >= 100) { next(); return 0; }
        return p + (100 / (DURATION / 100));
      });
    }, 100);
    return () => clearInterval(id);
  }, [paused, next]);

  const slide = slides[current];

  return (
    <div className="overflow-x-hidden">

      {/* ══════════════════════════════════════════════════
          1. HERO — rotating slideshow
          Colors: ONLY black overlay + brand-blue accents
      ══════════════════════════════════════════════════ */}
      <section
        className="relative min-h-screen flex items-center overflow-hidden bg-brand-black"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        {/* BG image crossfade */}
        <AnimatePresence mode="sync">
          <motion.div
            key={slide.id + "-bg"}
            initial={{ opacity: 0, scale: 1.04 }}
            animate={{ opacity: 1,  scale: 1    }}
            exit={{    opacity: 0,  scale: 0.98  }}
            transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
            className="absolute inset-0 z-0"
          >
            <Image
              src={slide.image}
              alt={slide.brand}
              fill
              className="object-cover opacity-200"
              priority
            />
            {/* Black gradi— always consistent regardless of slide */}
            <div className="absolute inset-0 bg-gradient-to-r from-brand-black/95 via-brand-black/80 to-brand-black/50" />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-black/80 via-transparent to-brand-black/30" />
          </motion.div>
        </AnimatePresence>

        {/* Blue glow — always same brand blue */}
        <div className="absolute top-1/3 right-0 w-[600px] h-[600px] rounded-full blur-[160px] pointer-events-none z-0"
          style={{ background: BRAND_BLUE + "18" }} />
        <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] rounded-full blur-[100px] pointer-events-none z-0"
          style={{ background: BRAND_BLUE + "10" }} />

        {/* Grain overlay */}
        <div className="absolute inset-0 z-0 opacity-[0.025] pointer-events-none"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
            backgroundSize: "200px 200px",
          }}
        />

        {/* Slide content */}
        <div className="relative z-10 w-full px-6 lg:px-16 xl:px-24 pt-40 pb-36">
          <div className="max-w-3xl">

            {/* Eyebrow */}
            <AnimatePresence mode="wait">
              <motion.div
                key={slide.id + "-ey"}
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0  }}
                exit={{    opacity: 0, y: -8  }}
                transition={{ duration: 0.45 }}
                className="flex items-center gap-3 mb-7"
              >
                <span className="h-px w-10 bg-brand-blue-500" />
                <span className="text-brand-blue-400 text-xs font-bold uppercase tracking-[0.2em]">
                  {slide.eyebrow}
                </span>
              </motion.div>
            </AnimatePresence>

            {/* Headline */}
            <AnimatePresence mode="wait">
              <motion.h1
                key={slide.id + "-h1"}
                className="font-display text-[clamp(3rem,7vw,5.5rem)] text-white font-bold leading-[1.05] mb-6"
              >
                {slide.headline.map((line, li) => (
                  <motion.span
                    key={li}
                    className="block"
                    initial={{ opacity: 0, y: 32 }}
                    animate={{ opacity: 1, y: 0  }}
                    transition={{ duration: 0.65, delay: li * 0.12, ease: [0.22, 1, 0.36, 1] }}
                    /* Accent line always in brand blue */
                    style={li === slide.accent ? { color: BRAND_BLUE } : {}}
                  >
                    {line}
                  </motion.span>
                ))}
              </motion.h1>
            </AnimatePresence>

            {/* Location badge */}
            <AnimatePresence mode="wait">
              <motion.p
                key={slide.id + "-loc"}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{    opacity: 0 }}
                transition={{ duration: 0.4, delay: 0.3 }}
                className="text-brand-blue-400/80 text-sm font-medium mb-3"
              >
            
              </motion.p>
            </AnimatePresence>

            {/* Sub */}
            <AnimatePresence mode="wait">
              <motion.p
                key={slide.id + "-sub"}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0  }}
                exit={{    opacity: 0, y: -8  }}
                transition={{ duration: 0.5, delay: 0.35 }}
                className="text-white/60 text-base lg:text-lg leading-relaxed max-w-xl mb-10"
              >
                {slide.sub}
              </motion.p>
            </AnimatePresence>

            {/* CTAs */}
            <AnimatePresence mode="wait">
              <motion.div
                key={slide.id + "-cta"}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0  }}
                exit={{    opacity: 0, y: -8  }}
                transition={{ duration: 0.5, delay: 0.45 }}
                className="flex flex-wrap items-center gap-4 mb-14"
              >
                {/* Primary CTA — always brand blue */}
                <Link
                  href={slide.cta.href}
                  className="inline-flex items-center gap-2 bg-brand-blue-500 hover:bg-brand-blue-400 text-white font-semibold px-7 py-3.5 rounded-xl text-sm transition-all duration-200 hover:-translate-y-0.5 shadow-blue group"
                >
                  {slide.cta.label}
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </Link>

                {/* WhatsApp */}
                <a
                  href="https://wa.me/237690486009"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1ebe59] text-white font-semibold px-7 py-3.5 rounded-xl text-sm transition-all duration-200 hover:-translate-y-0.5"
                >
                  <MessageCircle size={16} />
                  WhatsApp
                </a>

                {/* Secondary text link */}
                <Link
                  href={slide.ctaAlt.href}
                  className="inline-flex items-center gap-1.5 text-white/55 hover:text-brand-blue-400 text-sm font-medium transition-colors duration-200"
                >
                  {slide.ctaAlt.label} →
                </Link>
              </motion.div>
            </AnimatePresence>

            {/* Stat pill */}
            <AnimatePresence mode="wait">
              <motion.div
                key={slide.id + "-stat"}
                initial={{ opacity: 0, scale: 0.92 }}
                animate={{ opacity: 1, scale: 1    }}
                exit={{    opacity: 0, scale: 0.92  }}
                transition={{ duration: 0.45, delay: 0.55 }}
                className="flex flex-wrap items-center gap-6"
              >
                <div className="inline-flex items-center gap-4 bg-white/6 backdrop-blur-sm border border-white/10 rounded-2xl px-6 py-4">
                  <div>
                    <div className="font-display text-3xl font-bold text-brand-blue-500 leading-none">
                      {slide.stat.value}
                    </div>
                    <div className="text-white/45 text-xs mt-1">{slide.stat.label}</div>
                  </div>
                  <div className="w-px h-10 bg-white/10" />
                  <div className="text-white/45 text-xs leading-relaxed max-w-[110px]">{slide.brand}</div>
                </div>

                <div className="flex gap-6">
                  {[{ value: "12+", label: "Ans" }, { value: "98%", label: "Satisfaction" }].map(({ value, label }) => (
                    <div key={label}>
                      <div className="font-display text-2xl font-bold text-white">{value}</div>
                      <div className="text-white/35 text-xs mt-0.5">{label}</div>
                    </div>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Progress dots + prev/next nav */}
        <div className="absolute bottom-10 left-0 right-0 z-20 flex items-center justify-center gap-5 px-6">
          <button
            onClick={prev}
            aria-label="Précédent"
            className="w-9 h-9 rounded-full bg-white/8 hover:bg-white/15 border border-white/12 flex items-center justify-center text-white/60 hover:text-white transition-all"
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
                style={{ width: i === current ? 48 : 20, background: "rgba(255,255,255,0.18)" }}
              >
                {i === current && (
                  <motion.div
                    className="absolute inset-y-0 left-0 rounded-full bg-brand-blue-500"
                    style={{ width: `${progress}%` }}
                  />
                )}
              </button>
            ))}
          </div>

          <button
            onClick={next}
            aria-label="Suivant"
            className="w-9 h-9 rounded-full bg-white/8 hover:bg-white/15 border border-white/12 flex items-center justify-center text-white/60 hover:text-white transition-all"
          >
            <ChevronRight size={16} />
          </button>

          <span className="text-white/25 text-xs font-mono tabular-nums">
            {String(current + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
          </span>
        </div>

        {/* Right sidebar service tabs (xl only) */}
        <div className="absolute right-6 top-1/2 -translate-y-1/2 z-20 hidden xl:flex flex-col gap-2">
          {slides.map((s, i) => (
            <button
              key={s.id}
              onClick={() => goTo(i)}
              className={`group flex items-center gap-2 px-3 py-2 rounded-lg transition-all duration-300 ${
                i === current
                  ? "bg-white/10 border border-white/15"
                  : "hover:bg-white/6"
              }`}
            >
              <span
                className={`text-xs font-semibold transition-all duration-300 ${
                  i === current ? "text-white" : "text-white/30 group-hover:text-white/55"
                }`}
                style={{ maxWidth: 130, textAlign: "right", display: "block" }}
              >
                {s.brand}
              </span>
              {/* Dot — always brand blue when active */}
              <span
                className="w-1.5 h-1.5 rounded-full shrink-0 transition-all duration-300"
                style={{
                  background:  i === current ? BRAND_BLUE : "rgba(255,255,255,0.2)",
                  boxShadow:   i === current ? `0 0 8px ${BRAND_BLUE}` : "none",
                }}
              />
            </button>
          ))}
        </div>

        {/* Fade to white at bottom */}
        <div className="absolute bottom-0 left-0 right-0 h-28 bg-gradient-to-t from-white to-transparent pointer-events-none z-10" />

        {/* Scroll indicator */}
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-24 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2 text-white/20 z-20"
        >
          <span className="text-xs uppercase tracking-widest">Défiler</span>
          <div className="w-px h-8 bg-gradient-to-b from-white/20 to-transparent" />
        </motion.div>
      </section>

      {/* ══════════════════════════════════════════════════
          2. DIVISIONS STRIP — black bg, blue accents
      ══════════════════════════════════════════════════ */}
      <section className="bg-brand-darkgray border-y border-white/5 py-12">
        <div className="w-full px-6 lg:px-16 xl:px-24">
          <motion.div {...fadeUp(0)} className="text-center mb-8">
            <p className="text-white/30 text-xs uppercase tracking-widest font-semibold">
              Notre Groupe · Nos Divisions
            </p>
          </motion.div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {divisions.map(({ name, desc, icon, color }, i) => (
              <motion.div
                key={name}
                {...fadeUp(i * 0.08)}
                className={`flex items-center gap-3 border rounded-xl px-5 py-4 transition-all duration-300 hover:border-brand-blue-500/50 ${color}`}
              >
                <div className="shrink-0">{icon}</div>
                <div>
                  <div className="font-semibold text-sm text-white">{name}</div>
                  <div className="text-white/45 text-xs mt-0.5">{desc}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          LOGO SLIDER — "Ils nous font confiance"
          Placed after Divisions, before Services.
          Acts as a trust bridge between brand identity
          and the services pitch below.
      ══════════════════════════════════════════════════ */}
      <LogoSlider lang="fr" />

      {/* ══════════════════════════════════════════════════
          3. SERVICES — white bg, black cards hover to black
      ══════════════════════════════════════════════════ */}
      <section className="bg-white py-28">
        <div className="w-full px-6 lg:px-16 xl:px-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-end mb-16">
            <div>
              <motion.div {...fadeUp(0)} className="flex items-center gap-3 mb-4">
                <span className="h-px w-10 bg-brand-blue-500" />
                <span className="text-brand-blue-500 text-xs font-semibold uppercase tracking-widest">
                  Ce Que Nous Faisons
                </span>
              </motion.div>
              <motion.h2 {...fadeUp(0.1)} className="font-display text-4xl lg:text-5xl font-bold text-brand-black leading-tight">
                Nos Services
                <br />
              
              </motion.h2>
            </div>
            <motion.div {...fadeUp(0.15)}>
              <p className="text-slate-500 leading-relaxed mb-5">
                Du conseil stratégique au développement logiciel, en passant par le design et le E-commerce, CM Group couvre tous vos besoins en un seul endroit.
              </p>
              <Link
                href="/services"
                className="inline-flex items-center gap-2 text-brand-blue-500 font-semibold text-sm hover:gap-3 transition-all duration-200"
              >
                Voir tous nos services <ArrowRight size={16} />
              </Link>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map(({ icon, iconColor, hoverBg, title, titleEn, description, href }, i) => (
              <motion.div
                key={title}
                {...fadeUp(i * 0.08)}
                className="group relative bg-white border border-slate-100 rounded-2xl p-8 hover:border-transparent hover:shadow-card-lg transition-all duration-300 overflow-hidden cursor-pointer"
              >
                {/* Dark fill on hover */}
                <div className="absolute inset-0 bg-brand-black scale-y-0 group-hover:scale-y-100 origin-bottom transition-transform duration-500 rounded-2xl" />

                <div className="relative z-10">
                  <div className="flex items-start justify-between mb-6">
                    {/* Icon — bg goes brand blue on hover */}
                    <div className={`w-14 h-14 rounded-xl bg-brand-black flex items-center justify-center ${iconColor} ${hoverBg} transition-all duration-300`}>
                      {icon}
                    </div>
                    <span className="font-display text-5xl font-bold text-slate-100 group-hover:text-white/8 transition-colors duration-300 leading-none">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>

                  <h3 className="font-display text-xl font-bold text-brand-black group-hover:text-white mb-2 transition-colors duration-300">
                    {title}
                  </h3>
                  <p className="text-xs text-slate-400 group-hover:text-white/40 mb-4 italic transition-colors duration-300">
                    {titleEn}
                  </p>
                  <p className="text-slate-500 group-hover:text-white/65 text-sm leading-relaxed mb-6 transition-colors duration-300">
                    {description}
                  </p>

                  <Link
                    href={href}
                    className="inline-flex items-center gap-1.5 text-brand-blue-500 group-hover:text-brand-blue-400 text-sm font-semibold transition-colors duration-300"
                  >
                    En savoir plus <ChevronRight size={15} />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          4. À PROPOS — light gray bg
      ══════════════════════════════════════════════════ */}
      <section className="bg-gradient-to-b from-slate-50 to-blue-50/15 py-28">
        <div className="w-full px-6 lg:px-16 xl:px-24 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">

          {/* Left: image collage */}
          <motion.div {...fadeIn(0.1)} className="relative hidden lg:block">
            <div className="relative h-[540px] rounded-3xl overflow-hidden shadow-card-lg">
              <Image
                /* Black African female consultant presenting */
                src="/workers/new6.jpg"
                alt="Équipe CM Consulting en réunion"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-black/40 to-transparent" />
            </div>

            {/* Inset portrait */}
            <div className="absolute -bottom-8 -right-8 w-56 h-56 rounded-2xl overflow-hidden border-4 border-white shadow-card-lg">
              <Image
                /* Black African businesswoman smiling */
                src="/workers/new5.jpg"
                alt="Consultante CM Consulting"
                fill
                className="object-cover"
              />
            </div>

            {/* Years badge — brand blue */}
            <div className="absolute top-8 -right-6 bg-brand-blue-500 rounded-2xl px-6 py-4 shadow-blue text-center">
              <div className="font-display text-4xl font-bold text-white">12+</div>
              <div className="text-white/75 text-xs">Ans d'Excellence</div>
            </div>

            {/* Location tag */}
            <div className="absolute bottom-8 left-6 bg-brand-black/80 backdrop-blur-sm border border-white/10 rounded-xl px-4 py-3">
              <p className="text-white text-xs font-medium">📍 Basé à Douala, Cameroun</p>
              <p className="text-white/40 text-xs">Actif dans toute l'Afrique Centrale</p>
            </div>
          </motion.div>

          {/* Right: text */}
          <div>
            <motion.div {...fadeUp(0.1)} className="flex items-center gap-3 mb-4">
              <span className="h-px w-10 bg-brand-blue-500" />
              <span className="text-brand-blue-500 text-xs font-semibold uppercase tracking-widest">
                À Propos de CM
              </span>
            </motion.div>

            <motion.h2 {...fadeUp(0.15)} className="font-display text-4xl lg:text-5xl font-bold text-brand-black leading-tight mb-6">
              Un allié stratégique au service de votre {" "}
              <span className="text-brand-blue-500 italic">croissance</span>{" "}
             
            </motion.h2>

            <motion.p {...fadeUp(0.2)} className="text-slate-500 leading-relaxed mb-4">
              Depuis plus de 12 ans, CM  accompagne les entreprises et particulier  dans leur développement. Nous combinons une expertise locale profonde avec des standards internationaux pour vous offrir des résultats concrets.
            </motion.p>
            <motion.p {...fadeUp(0.25)} className="text-slate-500 leading-relaxed mb-8">
              Nos équipes parlent votre langue — au sens propre comme au sens figuré. Nous comprenons les défis du marché  et nous  vous proposons des solutions adaptées à votre réalité.
            </motion.p>

            <motion.ul {...fadeUp(0.3)} className="space-y-3 mb-10">
              {whyUs.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-slate-700">
                  <CheckCircle2 size={17} className="text-brand-blue-500 mt-0.5 shrink-0" />
                  {item}
                </li>
              ))}
            </motion.ul>

            <motion.div {...fadeUp(0.35)} className="flex flex-wrap gap-4">
              <Link
                href="/about"
                className="inline-flex items-center gap-2 bg-brand-black hover:bg-brand-darkgray text-white px-7 py-4 rounded-xl font-semibold text-sm transition-all duration-200 hover:-translate-y-0.5 group"
              >
                En Savoir Plus
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <a
                href="tel:+237690486009"
                className="inline-flex items-center gap-2 text-brand-black border border-slate-200 hover:border-brand-blue-400 hover:text-brand-blue-500 px-7 py-4 rounded-xl font-semibold text-sm transition-all duration-200"
              >
                <Phone size={16} />
                +237 690 486 009
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          5. STATS — brand black bg, blue accents
      ══════════════════════════════════════════════════ */}
      <section className="relative bg-brand-black py-24 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            /* Douala city aerial view */
            src="https://images.unsplash.com/photo-1555448248-2571daf6344b?w=1920&h=600&fit=crop"
            alt="Douala Cameroun"
            fill
            className="object-cover opacity-50"
          />
          <div className="absolute inset-0 bg-brand-black/85" />
        </div>
        <div
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[300px] blur-[100px] pointer-events-none"
          style={{ background: BRAND_BLUE + "12" }}
        />

        <div className="relative z-10 w-full px-6 lg:px-16 xl:px-24">
          <div className="text-center mb-14">
            <motion.div {...fadeUp(0)} className="flex items-center justify-center gap-3 mb-4">
              <span className="h-px w-10 bg-brand-blue-500" />
              <span className="text-brand-blue-500 text-xs font-semibold uppercase tracking-widest">Nos Chiffres</span>
              <span className="h-px w-10 bg-brand-blue-500" />
            </motion.div>
            <motion.h2 {...fadeUp(0.1)} className="font-display text-4xl lg:text-5xl font-bold text-white">
              CM en Chiffres
            </motion.h2>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map(({ value, label, icon }, i) => (
              <motion.div key={label} {...fadeUp(i * 0.1)} className="text-center group">
                <div className="w-16 h-16 rounded-2xl bg-brand-blue-500/10 border border-brand-blue-500/20 flex items-center justify-center mx-auto mb-5 text-brand-blue-400 group-hover:bg-brand-blue-500 group-hover:text-white transition-all duration-300">
                  {icon}
                </div>
                <div className="font-display text-5xl font-bold text-white mb-2">{value}</div>
                <div className="text-white/40 text-sm">{label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          6. PROCESS — white bg
      ══════════════════════════════════════════════════ */}
      <section className="bg-white py-28">
        <div className="w-full px-6 lg:px-16 xl:px-24">
          <div className="text-center mb-16">
            <motion.div {...fadeUp(0)} className="flex items-center justify-center gap-3 mb-4">
              <span className="h-px w-10 bg-brand-blue-500" />
              <span className="text-brand-blue-500 text-xs font-semibold uppercase tracking-widest">
                Comment Nous Travaillons
              </span>
              <span className="h-px w-10 bg-brand-blue-500" />
            </motion.div>
            <motion.h2 {...fadeUp(0.1)} className="font-display text-4xl lg:text-5xl font-bold text-brand-black">
              Notre Processus
            </motion.h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { step: "01", title: "Écoute & Diagnostic",   desc: "Nous prenons le temps de comprendre votre activité, vos défis et vos objectifs avant de proposer quoi que ce soit." },
              { step: "02", title: "Stratégie Sur Mesure",  desc: "Nous concevons un plan d'action adapté à votre réalité, avec des étapes claires et des résultats mesurables." },
              { step: "03", title: "Exécution & Livraison", desc: "Notre équipe travaille à vos côtés pour mettre en œuvre la stratégie avec rigueur et dans les délais convenus." },
              { step: "04", title: "Suivi & Croissance",    desc: "Nous mesurons les résultats, ajustons si nécessaire et assurons un accompagnement après livraison." },
            ].map(({ step, title, desc }, i) => (
              <motion.div key={step} {...fadeUp(i * 0.1)} className="relative group">
                {i < 3 && (
                  <div className="hidden lg:block absolute top-8 left-full w-full h-px bg-gradient-to-r from-brand-blue-500/30 to-transparent z-0" />
                )}
                <div className="relative z-10 bg-gradient-to-b from-slate-50 to-white border border-slate-100 rounded-2xl p-8 hover:border-brand-blue-300 hover:shadow-card transition-all duration-300 h-full">
                  <div className="w-14 h-14 rounded-xl bg-brand-black group-hover:bg-brand-blue-500 flex items-center justify-center mb-6 transition-colors duration-300">
                    <span className="font-display text-lg font-bold text-brand-blue-400 group-hover:text-white transition-colors duration-300">
                      {step}
                    </span>
                  </div>
                  <h3 className="font-display text-xl font-bold text-brand-black mb-3">{title}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed">{desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          7. TESTIMONIALS — light gray bg
      ══════════════════════════════════════════════════ */}
      <section className="bg-gradient-to-b from-slate-50 to-blue-50/15 py-28">
        <div className="w-full px-6 lg:px-16 xl:px-24">
          <div className="text-center mb-16">
            <motion.div {...fadeUp(0)} className="flex items-center justify-center gap-3 mb-4">
              <span className="h-px w-10 bg-brand-blue-500" />
              <span className="text-brand-blue-500 text-xs font-semibold uppercase tracking-widest">Témoignages</span>
              <span className="h-px w-10 bg-brand-blue-500" />
            </motion.div>
            <motion.h2 {...fadeUp(0.1)} className="font-display text-4xl lg:text-5xl font-bold text-brand-black">
              Ce Que Disent Nos Clients
            </motion.h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map(({ name, role, avatar, quote, rating }, i) => (
              <motion.div
                key={name}
                {...fadeUp(i * 0.1)}
                className="bg-white rounded-2xl p-8 shadow-card hover:shadow-card-lg border border-slate-100 hover:border-brand-blue-200 transition-all duration-300 flex flex-col"
              >
                {/* Stars — brand blue */}
                <div className="flex gap-1 mb-5">
                  {Array.from({ length: rating }).map((_, j) => (
                    <Star key={j} size={14} className="text-brand-blue-500 fill-brand-blue-500" />
                  ))}
                </div>

                <p className="text-slate-600 text-sm leading-relaxed flex-1 mb-8 italic">
                  &laquo;&nbsp;{quote}&nbsp;&raquo;
                </p>

                <div className="flex items-center gap-4 pt-6 border-t border-slate-100">
                  <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-brand-blue-500/30 shrink-0">
                    <Image src={avatar} alt={name} fill className="object-cover" />
                  </div>
                  <div>
                    <div className="font-semibold text-brand-black text-sm">{name}</div>
                    <div className="text-slate-400 text-xs mt-0.5">{role}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          8. BLOG — white bg
      ══════════════════════════════════════════════════ */}
      <section className="bg-white py-28">
        <div className="w-full px-6 lg:px-16 xl:px-24">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
            <div>
              <motion.div {...fadeUp(0)} className="flex items-center gap-3 mb-4">
                <span className="h-px w-10 bg-brand-blue-500" />
                <span className="text-brand-blue-500 text-xs font-semibold uppercase tracking-widest">
                  Dernières Actualités
                </span>
              </motion.div>
              <motion.h2 {...fadeUp(0.1)} className="font-display text-4xl lg:text-5xl font-bold text-brand-black">
                Notre Blog
              </motion.h2>
            </div>
            <motion.div {...fadeUp(0.2)}>
              <Link
                href="/blog"
                className="inline-flex items-center gap-2 text-brand-blue-500 font-semibold text-sm border border-brand-blue-200 hover:border-brand-blue-400 px-5 py-2.5 rounded-lg hover:gap-3 transition-all duration-200"
              >
                Voir tous les articles <ArrowRight size={15} />
              </Link>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {blogPosts.map(({ category, title, excerpt, date, readTime, image }, i) => (
              <motion.article
                key={title}
                {...fadeUp(i * 0.1)}
                className="group bg-white rounded-2xl border border-slate-100 overflow-hidden hover:shadow-card-lg hover:border-brand-blue-200 transition-all duration-300"
              >
                <div className="relative h-52 overflow-hidden">
                  <Image
                    src={image}
                    alt={title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-black/50 to-transparent" />
                  {/* Category badge — brand blue */}
                  <span className="absolute top-4 left-4 bg-brand-blue-500 text-white text-xs font-semibold px-3 py-1 rounded-full">
                    {category}
                  </span>
                </div>

                <div className="p-6">
                  <div className="flex items-center gap-3 text-slate-400 text-xs mb-3">
                    <span>{date}</span><span>·</span><span>{readTime} de lecture</span>
                  </div>
                  <h3 className="font-display text-lg font-bold text-brand-black mb-2 group-hover:text-brand-blue-600 transition-colors leading-snug">
                    {title}
                  </h3>
                  <p className="text-slate-500 text-sm leading-relaxed mb-5 line-clamp-2">{excerpt}</p>
                  <Link
                    href="/blog"
                    className="inline-flex items-center gap-1.5 text-brand-blue-500 text-sm font-semibold hover:gap-2.5 transition-all duration-200"
                  >
                    Lire la suite <ArrowRight size={14} />
                  </Link>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          9. CTA FINAL — brand black bg
      ══════════════════════════════════════════════════ */}
      <section className="relative bg-brand-black py-28 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            /* African business team in boardroom */
            src="https://images.unsplash.com/photo-1556761175-4b46a572b786?w=1920&h=700&fit=crop"
            alt="Équipe CM Consulting"
            fill
            className="object-cover opacity-50"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-brand-black via-brand-black/95 to-brand-black/80" />
        </div>
        <div
          className="absolute top-0 right-1/4 w-96 h-96 blur-[120px] pointer-events-none"
          style={{ background: BRAND_BLUE + "15" }}
        />

        <motion.div
          {...fadeUp(0)}
          className="relative z-10 max-w-4xl mx-auto px-6 lg:px-16 xl:px-24 text-center"
        >
          <div className="inline-flex items-center gap-2 bg-brand-blue-500/10 border border-brand-blue-500/25 rounded-full px-4 py-2 mb-6">
            <span className="w-2 h-2 rounded-full bg-brand-blue-500 animate-pulse" />
            <span className="text-brand-blue-400 text-xs font-semibold uppercase tracking-widest">
              Parlons de Votre Projet
            </span>
          </div>

          <h2 className="font-display text-4xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Prêt à Faire Passer Votre
            <br />
            <span className="text-brand-blue-500">Business au Niveau Supérieur?</span>
          </h2>

          <p className="text-white/50 text-lg leading-relaxed max-w-2xl mx-auto mb-10">
            Contactez-nous dès aujourd'hui pour une consultation gratuite. Notre équipe est disponible 6j/7 pour répondre à vos questions.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-brand-blue-500 hover:bg-brand-blue-400 text-white font-semibold px-8 py-4 rounded-xl transition-all duration-200 shadow-blue hover:-translate-y-0.5 group"
            >
              Démarrer un Projet
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <a
              href="https://wa.me/237690486009"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1ebe59] text-white font-semibold px-8 py-4 rounded-xl transition-all duration-200 hover:-translate-y-0.5"
            >
              <MessageCircle size={18} />
              WhatsApp
            </a>
          </div>
        </motion.div>
      </section>

      {/* Floating WhatsApp */}
      <a
        href="https://wa.me/237690486009"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Nous contacter sur WhatsApp"
        className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-[#25D366] hover:bg-[#1ebe59] shadow-lg hover:shadow-xl flex items-center justify-center transition-all duration-200 hover:-translate-y-1"
      >
        <MessageCircle size={26} className="text-white" />
      </a>

    </div>
  );
}
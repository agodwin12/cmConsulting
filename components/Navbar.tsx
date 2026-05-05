"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import {
  Menu, X, ChevronDown,
  BarChart2, Wrench, Palette,
  Code2, ShoppingBag, Cloud,
  ArrowRight, FolderOpen,
} from "lucide-react";

/* ─────────────────────────────────────────────
   TYPES
───────────────────────────────────────────── */
type Lang = "fr" | "en";

/* ─────────────────────────────────────────────
   TRANSLATIONS
───────────────────────────────────────────── */
const t = {
  fr: {
    home:       "Accueil",
    about:      "À Propos",
    services:   "Services",
    projets:    "Projets",
    blog:       "Blog",
    contact:    "Contact",
    cta:        "Nous Contacter",
    allServices:"Voir tous nos services →",
    categories: [
      {
        icon: BarChart2,
        label: "Conseil & Stratégie",
        desc:  "Stratégie d'entreprise, gestion, développement commercial",
        href:  "/services#conseil",
        color: "text-blue-400",
      },
      {
        icon: Wrench,
        label: "Informatique & Dépannage",
        desc:  "Réparation PC/téléphone, maintenance, assistance technique",
        href:  "/services#depannage",
        color: "text-orange-400",
      },
      {
        icon: Palette,
        label: "Création Graphique",
        desc:  "Logos, identité visuelle, impression, communication",
        href:  "/services#graphique",
        color: "text-pink-400",
      },
      {
        icon: Code2,
        label: "Développement Logiciel",
        desc:  "Sites web, applications mobiles, logiciels sur mesure",
        href:  "/services#dev",
        color: "text-green-400",
      },
      {
        icon: ShoppingBag,
        label: "CM Shop",
        desc:  "Vente de matériel informatique et accessoires",
        href:  "/services#shop",
        color: "text-yellow-400",
      },
      {
        icon: Cloud,
        label: "Solutions Cloud",
        desc:  "Hébergement, migration cloud, cybersécurité",
        href:  "/services#cloud",
        color: "text-purple-400",
      },
    ],
  },
  en: {
    home:       "Home",
    about:      "About",
    services:   "Services",
    projets:    "Projects",
    blog:       "Blog",
    contact:    "Contact",
    cta:        "Contact Us",
    allServices:"View all our services →",
    categories: [
      {
        icon: BarChart2,
        label: "Consulting & Strategy",
        desc:  "Business strategy, management, commercial development",
        href:  "/services#conseil",
        color: "text-blue-400",
      },
      {
        icon: Wrench,
        label: "IT & Tech Support",
        desc:  "PC/phone repair, maintenance, technical assistance",
        href:  "/services#depannage",
        color: "text-orange-400",
      },
      {
        icon: Palette,
        label: "Graphic Design",
        desc:  "Logos, visual identity, printing, communication",
        href:  "/services#graphique",
        color: "text-pink-400",
      },
      {
        icon: Code2,
        label: "Software Development",
        desc:  "Websites, mobile apps, custom software",
        href:  "/services#dev",
        color: "text-green-400",
      },
      {
        icon: ShoppingBag,
        label: "CM Shop",
        desc:  "Computer hardware and accessories sales",
        href:  "/services#shop",
        color: "text-yellow-400",
      },
      {
        icon: Cloud,
        label: "Cloud Solutions",
        desc:  "Hosting, cloud migration, cybersecurity",
        href:  "/services#cloud",
        color: "text-purple-400",
      },
    ],
  },
};

/* ─────────────────────────────────────────────
   COMPONENT
───────────────────────────────────────────── */
export default function Navbar() {
  const pathname = usePathname();

  const [open,       setOpen]       = useState(false);
  const [dropdown,   setDropdown]   = useState(false);
  const [mobileServ, setMobileServ] = useState(false);
  const [lang,       setLang]       = useState<Lang>("fr");

  const dropdownRef = useRef<HTMLLIElement>(null);

  /* close mobile menu on route change */
  useEffect(() => { setOpen(false); setDropdown(false); }, [pathname]);

  /* close dropdown on outside click */
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setDropdown(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const tx = t[lang];

  return (
    /* ── Always solid black, never transparent ── */
    <header className="fixed top-0 left-0 right-0 z-50 bg-black border-b border-white/10">

      {/* ── Top info bar ───────────────────────────────── */}
      <div className="hidden lg:flex items-center justify-between bg-[#0a0a0a] border-b border-white/5 px-6 lg:px-16 xl:px-24 py-2 text-xs text-white/40">
        <span>📍 Douala, Cameroun &nbsp;·&nbsp; ✉ contact@cmconsulting.cm</span>
        <span>📞 +237 690 486 009 &nbsp;·&nbsp; Lun–Sam : 08h–18h</span>
      </div>

      {/* ── Main navbar ────────────────────────────────── */}
      <nav className="w-full px-6 lg:px-16 xl:px-24 flex items-center justify-between h-20 bg-black">

        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 group shrink-0">
          <div className=" w-15 h-15 bg-transparent  overflow-hidden flex items-center justify-center p-1 group-hover:scale-105 transition-transform duration-200">
            <Image
              src="/logo.png"
              alt="CM Consulting Logo"
              width={80}
              height={70}
              className="object-contain"
              priority
            />
          </div>
          <span className="font-display text-white text-lg font-semibold tracking-wide">
            <span className="text-blue-500"></span>
          </span>
        </Link>

        {/* ── Desktop nav ─────────────────────────────── */}
        <ul className="hidden lg:flex items-center gap-7">

          {/* Accueil */}
          <li>
            <Link
              href="/"
              className={`relative text-sm font-medium tracking-wide transition-colors duration-200
                ${pathname === "/" ? "text-blue-500" : "text-white hover:text-white/75"}`}
            >
              {tx.home}
              {pathname === "/" && (
                <motion.span
                  layoutId="nav-underline"
                  className="absolute -bottom-1 left-0 right-0 h-0.5 bg-blue-500 rounded-full"
                />
              )}
            </Link>
          </li>

          {/* À Propos */}
          <li>
            <Link
              href="/about"
              className={`relative text-sm font-medium tracking-wide transition-colors duration-200
                ${pathname === "/about" ? "text-blue-500" : "text-white hover:text-white/75"}`}
            >
              {tx.about}
              {pathname === "/about" && (
                <motion.span
                  layoutId="nav-underline"
                  className="absolute -bottom-1 left-0 right-0 h-0.5 bg-blue-500 rounded-full"
                />
              )}
            </Link>
          </li>

          {/* Boutique */}
          <li>
            <Link
              href="/shop"
              className={`relative text-sm font-medium tracking-wide transition-colors duration-200
                ${pathname === "/shop" ? "text-yellow-400" : "text-white hover:text-white/75"}`}
            >
              {lang === "fr" ? "Boutique" : "Shop"}
              {pathname === "/shop" && (
                <motion.span
                  layoutId="nav-underline"
                  className="absolute -bottom-1 left-0 right-0 h-0.5 bg-yellow-400 rounded-full"
                />
              )}
            </Link>
          </li>

          {/* Services dropdown */}
          <li className="relative" ref={dropdownRef}>
            <button
              onClick={() => setDropdown(!dropdown)}
              onMouseEnter={() => setDropdown(true)}
              className={`flex items-center gap-1.5 text-sm font-medium tracking-wide transition-colors duration-200
                ${pathname.startsWith("/services") ? "text-blue-500" : "text-white hover:text-white/75"}`}
            >
              {tx.services}
              <ChevronDown
                size={14}
                className={`transition-transform duration-200 ${dropdown ? "rotate-180" : ""}`}
              />
            </button>

            <AnimatePresence>
              {dropdown && (
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 8 }}
                  transition={{ duration: 0.2 }}
                  onMouseLeave={() => setDropdown(false)}
                  className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-[580px] bg-[#111111] border border-white/10 rounded-2xl shadow-2xl shadow-black/60 overflow-hidden"
                >
                  <div className="px-6 pt-5 pb-3 border-b border-white/5">
                    <p className="text-xs text-white/40 uppercase tracking-widest font-semibold">
                      {lang === "fr" ? "Nos Services" : "Our Services"}
                    </p>
                  </div>

                  <div className="p-4 grid grid-cols-2 gap-2">
                    {tx.categories.map(({ icon: Icon, label, desc, href, color }) => (
                      <Link
                        key={label}
                        href={href}
                        onClick={() => setDropdown(false)}
                        className="group flex items-start gap-3 p-3 rounded-xl hover:bg-white/5 border border-transparent hover:border-white/10 transition-all duration-200"
                      >
                        <div className={`mt-0.5 shrink-0 ${color}`}>
                          <Icon size={18} />
                        </div>
                        <div>
                          <p className="text-white text-sm font-medium leading-snug mb-0.5 group-hover:text-blue-400 transition-colors">
                            {label}
                          </p>
                          <p className="text-white/45 text-xs leading-relaxed">{desc}</p>
                        </div>
                      </Link>
                    ))}
                  </div>

                  <div className="px-5 py-3 border-t border-white/5 bg-white/[0.02]">
                    <Link
                      href="/services"
                      onClick={() => setDropdown(false)}
                      className="flex items-center gap-2 text-blue-400 hover:text-blue-300 text-xs font-semibold transition-colors group"
                    >
                      {tx.allServices}
                      <ArrowRight size={13} className="group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </li>

          {/* Projets */}
          <li>
            <Link
              href="/projets"
              className={`relative flex items-center gap-1.5 text-sm font-medium tracking-wide transition-colors duration-200
                ${pathname === "/projets" ? "text-blue-500" : "text-white hover:text-white/75"}`}
            >
              <FolderOpen size={14} className={pathname === "/projets" ? "text-blue-500" : "text-white/40"} />
              {tx.projets}
              {pathname === "/projets" && (
                <motion.span
                  layoutId="nav-underline"
                  className="absolute -bottom-1 left-0 right-0 h-0.5 bg-blue-500 rounded-full"
                />
              )}
            </Link>
          </li>

          {/* Blog */}
          <li>
            <Link
              href="/blog"
              className={`relative text-sm font-medium tracking-wide transition-colors duration-200
                ${pathname === "/blog" ? "text-blue-500" : "text-white hover:text-white/75"}`}
            >
              {tx.blog}
              {pathname === "/blog" && (
                <motion.span
                  layoutId="nav-underline"
                  className="absolute -bottom-1 left-0 right-0 h-0.5 bg-blue-500 rounded-full"
                />
              )}
            </Link>
          </li>

          {/* Contact */}
          <li>
            <Link
              href="/contact"
              className={`relative text-sm font-medium tracking-wide transition-colors duration-200
                ${pathname === "/contact" ? "text-blue-500" : "text-white hover:text-white/75"}`}
            >
              {tx.contact}
              {pathname === "/contact" && (
                <motion.span
                  layoutId="nav-underline"
                  className="absolute -bottom-1 left-0 right-0 h-0.5 bg-blue-500 rounded-full"
                />
              )}
            </Link>
          </li>
        </ul>

        {/* ── Right side: Lang switcher + CTA ─────────── */}
        <div className="hidden lg:flex items-center gap-4">

          <div className="flex items-center bg-white/8 rounded-full border border-white/10 overflow-hidden text-xs font-semibold">
            <button
              onClick={() => setLang("fr")}
              className={`px-3 py-1.5 transition-all duration-200 ${
                lang === "fr"
                  ? "bg-blue-500 text-white"
                  : "text-white/50 hover:text-white"
              }`}
            >
              FR
            </button>
            <button
              onClick={() => setLang("en")}
              className={`px-3 py-1.5 transition-all duration-200 ${
                lang === "en"
                  ? "bg-blue-500 text-white"
                  : "text-white/50 hover:text-white"
              }`}
            >
              EN
            </button>
          </div>

          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-blue-500 hover:bg-blue-400 text-white text-sm font-semibold rounded-lg transition-all duration-200 shadow-lg hover:-translate-y-0.5"
          >
            {tx.cta}
          </Link>
        </div>

        {/* ── Mobile hamburger ───────────────────────── */}
        <button
          onClick={() => setOpen(!open)}
          aria-label="Menu"
          className="lg:hidden text-white p-2 rounded hover:bg-white/10 transition-colors"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {/* ── Mobile drawer ──────────────────────────────── */}
      <AnimatePresence>
        {open && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="lg:hidden bg-black border-t border-white/10 overflow-hidden"
          >
            <div className="px-6 py-4 space-y-1">

              {/* Lang switcher */}
              <div className="flex items-center gap-2 pb-4 border-b border-white/5 mb-2">
                <span className="text-white/40 text-xs uppercase tracking-widest">Langue:</span>
                <button
                  onClick={() => setLang("fr")}
                  className={`text-xs font-semibold px-3 py-1 rounded-full transition-all ${
                    lang === "fr" ? "bg-blue-500 text-white" : "text-white/50"
                  }`}
                >
                  Français
                </button>
                <button
                  onClick={() => setLang("en")}
                  className={`text-xs font-semibold px-3 py-1 rounded-full transition-all ${
                    lang === "en" ? "bg-blue-500 text-white" : "text-white/50"
                  }`}
                >
                  English
                </button>
              </div>

              {/* Accueil */}
              <Link
                href="/"
                className={`block py-3 text-sm font-medium border-b border-white/5 transition-colors
                  ${pathname === "/" ? "text-blue-500" : "text-white hover:text-white/75"}`}
              >
                {tx.home}
              </Link>

              {/* À Propos */}
              <Link
                href="/about"
                className={`block py-3 text-sm font-medium border-b border-white/5 transition-colors
                  ${pathname === "/about" ? "text-blue-500" : "text-white hover:text-white/75"}`}
              >
                {tx.about}
              </Link>

              {/* Boutique */}
              <Link
                href="/shop"
                className={`flex items-center gap-2 py-3 text-sm font-medium border-b border-white/5 transition-colors
                  ${pathname === "/shop" ? "text-yellow-400" : "text-white hover:text-white/75"}`}
              >
                <ShoppingBag size={15} className={pathname === "/shop" ? "text-yellow-400" : "text-white/40"} />
                {lang === "fr" ? "Boutique" : "Shop"}
              </Link>

              {/* Services accordion */}
              <div className="border-b border-white/5">
                <button
                  onClick={() => setMobileServ(!mobileServ)}
                  className="w-full flex items-center justify-between py-3 text-sm font-medium text-white"
                >
                  {tx.services}
                  <ChevronDown
                    size={14}
                    className={`transition-transform duration-200 ${mobileServ ? "rotate-180" : ""}`}
                  />
                </button>

                <AnimatePresence>
                  {mobileServ && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                      className="overflow-hidden"
                    >
                      <div className="pb-3 space-y-1 pl-2">
                        {tx.categories.map(({ icon: Icon, label, href, color }) => (
                          <Link
                            key={label}
                            href={href}
                            className="flex items-center gap-3 py-2.5 text-sm text-white/60 hover:text-white transition-colors"
                          >
                            <span className={color}><Icon size={15} /></span>
                            {label}
                          </Link>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Projets */}
              <Link
                href="/projets"
                className={`flex items-center gap-2 py-3 text-sm font-medium border-b border-white/5 transition-colors
                  ${pathname === "/projets" ? "text-blue-500" : "text-white hover:text-white/75"}`}
              >
                <FolderOpen size={15} className={pathname === "/projets" ? "text-blue-500" : "text-white/40"} />
                {tx.projets}
              </Link>

              {/* Blog */}
              <Link
                href="/blog"
                className={`block py-3 text-sm font-medium border-b border-white/5 transition-colors
                  ${pathname === "/blog" ? "text-blue-500" : "text-white hover:text-white/75"}`}
              >
                {tx.blog}
              </Link>

              {/* Contact */}
              <Link
                href="/contact"
                className={`block py-3 text-sm font-medium border-b border-white/5 transition-colors
                  ${pathname === "/contact" ? "text-blue-500" : "text-white hover:text-white/75"}`}
              >
                {tx.contact}
              </Link>

              {/* CTA button */}
              <div className="pt-4">
                <Link
                  href="/contact"
                  className="block text-center py-3.5 bg-blue-500 hover:bg-blue-400 text-white text-sm font-semibold rounded-xl transition-colors"
                >
                  {tx.cta}
                </Link>
              </div>

            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
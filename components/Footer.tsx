import Link from "next/link";
import Image from "next/image";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Facebook,
  Instagram,
  Linkedin,
  BarChart2,
  Wrench,
  Palette,
  Code2,
  ShoppingBag,
  Cloud,
  MessageCircle,
  ArrowRight,
} from "lucide-react";

/* ─────────────────────────────────────────────────────────
   DATA
───────────────────────────────────────────────────────── */
const divisions = [
  {
    icon:  <BarChart2 size={15} />,
    name:  "CM Consulting",
    href:  "/services#conseil",
    color: "text-brand-blue-400",
  },
  {
    icon:  <Wrench size={15} />,
    name:  "D-Panneur",
    href:  "/services#depannage",
    color: "text-orange-400",
  },
  {
    icon:  <Palette size={15} />,
    name:  "CM Graphic",
    href:  "/services#graphique",
    color: "text-pink-400",
  },
  {
    icon:  <Code2 size={15} />,
    name:  "Développement Logiciel",
    href:  "/services#dev",
    color: "text-green-400",
  },
  {
    icon:  <ShoppingBag size={15} />,
    name:  "CM Shop",
    href:  "/services#shop",
    color: "text-yellow-400",
  },
  {
    icon:  <Cloud size={15} />,
    name:  "Solutions Cloud",
    href:  "/services#cloud",
    color: "text-purple-400",
  },
];

const quickLinks = [
  { label: "Accueil",          labelEn: "Home",     href: "/" },
  { label: "À Propos",         labelEn: "About",    href: "/about" },
  { label: "Nos Services",     labelEn: "Services", href: "/services" },
  { label: "Blog",             labelEn: "Blog",     href: "/blog" },
  { label: "Contact",          labelEn: "Contact",  href: "/contact" },
];

const socials = [
  {
    icon:  <Facebook size={16} />,
    href:  "https://web.facebook.com/CMConsultingSarl",
    label: "Facebook CM Consulting",
  },
  {
    icon:  <Facebook size={16} />,
    href:  "https://web.facebook.com/CMGraphicOfficiel",
    label: "Facebook CM Graphic",
  },
  {
    icon:  <Facebook size={16} />,
    href:  "https://web.facebook.com/CMShop237",
    label: "Facebook CM Shop",
  },
  {
    icon:  <Instagram size={16} />,
    href:  "#",
    label: "Instagram",
  },
  {
    icon:  <Linkedin size={16} />,
    href:  "#",
    label: "LinkedIn",
  },
];

const legalLinks = [
  { label: "Politique de confidentialité", href: "#" },
  { label: "Conditions d'utilisation",     href: "#" },
  { label: "Mentions légales",             href: "#" },
];

/* ─────────────────────────────────────────────────────────
   COMPONENT
───────────────────────────────────────────────────────── */
export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-brand-black text-white/65">

      {/* ══════════════════════════════════════════════
          TOP CTA BAND
      ══════════════════════════════════════════════ */}
      <div className="border-b border-white/8 bg-brand-darkgray">
        <div className="w-full px-6 lg:px-16 xl:px-24 py-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="font-display text-white text-2xl font-bold mb-1">
              Prêt à Démarrer Votre Projet ?
            </h3>
            <p className="text-white/45 text-sm">
              Notre équipe est disponible du lundi au samedi, de 08h à 18h.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-brand-blue-500 hover:bg-brand-blue-400 text-white font-semibold px-6 py-3 rounded-xl text-sm transition-all duration-200 hover:-translate-y-0.5 group"
            >
              Nous Contacter
              <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <a
              href="https://wa.me/237694890230"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1ebe59] text-white font-semibold px-6 py-3 rounded-xl text-sm transition-all duration-200 hover:-translate-y-0.5"
            >
              <MessageCircle size={15} />
              WhatsApp
            </a>
          </div>
        </div>
      </div>

      {/* ══════════════════════════════════════════════
          MAIN FOOTER GRID
      ══════════════════════════════════════════════ */}
      <div className="w-full px-6 lg:px-16 xl:px-24 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">

          {/* ── Column 1: Brand ───────────────────────── */}
          <div className="lg:col-span-1">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 mb-5 group">
              <div className="w-10 h-10 bg-white rounded-lg overflow-hidden flex items-center justify-center p-1 group-hover:scale-105 transition-transform duration-200">
                <Image
                  src="/logo.png"
                  alt="CM Consulting Logo"
                  width={36}
                  height={36}
                  className="object-contain"
                />
              </div>
              <span className="font-display text-white text-lg font-semibold">
                ChristianMerlin.com <span className="text-brand-blue-500"></span>
              </span>
            </Link>

            <p className="text-sm leading-relaxed mb-6 text-white/50">
              Votre partenaire de confiance pour la croissance de votre entreprise .
            </p>

            {/* Social links */}
            <div className="flex flex-wrap gap-2 mb-6">
              {socials.map(({ icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-9 h-9 rounded-lg border border-white/10 flex items-center justify-center hover:border-brand-blue-500 hover:text-brand-blue-400 hover:bg-brand-blue-500/10 transition-all duration-200"
                >
                  {icon}
                </a>
              ))}
            </div>

            {/* Language note */}
            <div className="flex items-center gap-2 text-xs text-white/30">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-blue-500" />
              <span>Bilingue · Français & English</span>
            </div>
          </div>

          {/* ── Column 2: Nos Services (Divisions) ────── */}
          <div>
            <h4 className="text-white text-xs font-bold uppercase tracking-widest mb-6 flex items-center gap-2">
              <span className="h-3 w-0.5 bg-brand-blue-500 rounded-full" />
              Nos Services
            </h4>
            <ul className="space-y-3">
              {divisions.map(({ icon, name, href, color }) => (
                <li key={name}>
                  <Link
                    href={href}
                    className="flex items-center gap-2.5 text-sm text-white/50 hover:text-white transition-colors duration-200 group"
                  >
                    <span className={`${color} group-hover:scale-110 transition-transform duration-200`}>
                      {icon}
                    </span>
                    {name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* ── Column 3: Liens Rapides ────────────────── */}
          <div>
            <h4 className="text-white text-xs font-bold uppercase tracking-widest mb-6 flex items-center gap-2">
              <span className="h-3 w-0.5 bg-brand-blue-500 rounded-full" />
              Liens Rapides
            </h4>
            <ul className="space-y-3">
              {quickLinks.map(({ label, labelEn, href }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="flex items-center justify-between text-sm text-white/50 hover:text-white transition-colors duration-200 group"
                  >
                    <span>{label}</span>
                    <span className="text-white/20 text-xs group-hover:text-white/40 transition-colors">
                      {labelEn}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>

            {/* Facebook pages */}
            <h4 className="text-white text-xs font-bold uppercase tracking-widest mt-8 mb-4 flex items-center gap-2">
              <span className="h-3 w-0.5 bg-brand-blue-500 rounded-full" />
              Nos Pages Facebook
            </h4>
            <ul className="space-y-2.5">
              {[
                { name: "CM Consulting",  href: "https://web.facebook.com/CMConsultingSarl" },
                { name: "D-Panneur",      href: "https://web.facebook.com/dpanneur" },
                { name: "CM Shop 237",    href: "https://web.facebook.com/CMShop237" },
                { name: "CM Graphic",     href: "https://web.facebook.com/CMGraphicOfficiel" },
              ].map(({ name, href }) => (
                <li key={name}>
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm text-white/50 hover:text-brand-blue-400 transition-colors duration-200"
                  >
                    <Facebook size={13} className="text-brand-blue-500/60" />
                    {name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* ── Column 4: Contact ─────────────────────── */}
          <div>
            <h4 className="text-white text-xs font-bold uppercase tracking-widest mb-6 flex items-center gap-2">
              <span className="h-3 w-0.5 bg-brand-blue-500 rounded-full" />
              Contactez-Nous
            </h4>
            <ul className="space-y-5">
              <li className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-brand-blue-500/10 border border-brand-blue-500/20 flex items-center justify-center shrink-0 mt-0.5">
                  <MapPin size={14} className="text-brand-blue-400" />
                </div>
                <div>
                  <p className="text-xs text-white/30 uppercase tracking-wider mb-0.5">Adresse</p>
                  <p className="text-sm text-white/65 leading-snug">
                    Douala, Cameroun
                    <br />
                    <span className="text-white/35 text-xs">Akwa / Bonapriso</span>
                  </p>
                </div>
              </li>

              <li className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-brand-blue-500/10 border border-brand-blue-500/20 flex items-center justify-center shrink-0 mt-0.5">
                  <Phone size={14} className="text-brand-blue-400" />
                </div>
                <div>
                  <p className="text-xs text-white/30 uppercase tracking-wider mb-0.5">Téléphone</p>
                  <a
                    href="tel:+237694890230"
                    className="text-sm text-white/65 hover:text-brand-blue-400 transition-colors"
                  >
                    +237 694 890 230
                  </a>
                  <br />
                  <a
                    href="tel:+237 694 890 230"
                    className="text-sm text-white/65 hover:text-brand-blue-400 transition-colors"
                  >
                    +237 694 890 230
                  </a>
                </div>
              </li>

              <li className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-brand-blue-500/10 border border-brand-blue-500/20 flex items-center justify-center shrink-0 mt-0.5">
                  <Mail size={14} className="text-brand-blue-400" />
                </div>
                <div>
                  <p className="text-xs text-white/30 uppercase tracking-wider mb-0.5">Email</p>
                  <a
                    href="mailto:contact@cmconsulting.cm"
                    className="text-sm text-white/65 hover:text-brand-blue-400 transition-colors break-all"
                  >
                    contact@cmconsulting.cm
                  </a>
                </div>
              </li>

              <li className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-brand-blue-500/10 border border-brand-blue-500/20 flex items-center justify-center shrink-0 mt-0.5">
                  <Clock size={14} className="text-brand-blue-400" />
                </div>
                <div>
                  <p className="text-xs text-white/30 uppercase tracking-wider mb-0.5">Horaires</p>
                  <p className="text-sm text-white/65 leading-snug">
                    Lun – Sam : 08h00 – 18h00
                    <br />
                    <span className="text-white/35 text-xs">Dimanche : Fermé</span>
                  </p>
                </div>
              </li>
            </ul>

            {/* WhatsApp quick contact */}
            <a
              href="https://wa.me/237694890230"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 flex items-center gap-2.5 bg-[#25D366]/10 border border-[#25D366]/20 hover:border-[#25D366]/50 text-[#25D366] hover:bg-[#25D366]/15 px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200 group"
            >
              <MessageCircle size={16} />
              <span>Discuter sur WhatsApp</span>
              <ArrowRight size={13} className="ml-auto group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      </div>

      {/* ══════════════════════════════════════════════
          DIVIDER WITH MAP HINT
      ══════════════════════════════════════════════ */}
      <div className="w-full px-6 lg:px-16 xl:px-24">
        <div className="border-t border-white/8 pt-8 pb-4">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6">

            {/* Left: copyright */}
            <div className="flex flex-col sm:flex-row items-center gap-4 text-xs text-white/30">
              <span>
                © {year} CM Consulting SARL. Tous droits réservés.
              </span>
              <span className="hidden sm:block text-white/15">·</span>
              <span>
                Fait avec ❤ à Douala, Cameroun 🇨🇲
              </span>
            </div>

            {/* Right: legal links */}
            <div className="flex flex-wrap items-center justify-center gap-4">
              {legalLinks.map(({ label, href }) => (
                <Link
                  key={label}
                  href={href}
                  className="text-xs text-white/25 hover:text-white/60 transition-colors duration-200"
                >
                  {label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>

    </footer>
  );
}
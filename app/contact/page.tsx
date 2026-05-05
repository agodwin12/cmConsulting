"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  MessageCircle,
  ArrowRight,
  Facebook,
  Send,
  CheckCircle2,
  BarChart2,
  Wrench,
  Palette,
  ShoppingBag,
  ChevronDown,
  X,
} from "lucide-react";

/* ─────────────────────────────────────────────────────────
   DATA
───────────────────────────────────────────────────────── */
const contactDetails = [
  {
    icon: <MapPin size={18} />,
    label: "Adresse",
    value: "Douala, Cameroun",
    sub: "Logpom, Carrefour express",
    href: "https://maps.google.com/?q=Logpom+Douala+Cameroun",
    colorClass: "card-blue",
  },
  {
    icon: <Phone size={18} />,
    label: "Téléphone",
    value: "+237 690 486 009",
    sub: "Lun–Sam · 08h–18h",
    href: "tel:+237690486009",
    colorClass: "card-green",
  },
  {
    icon: <Mail size={18} />,
    label: "Email",
    value: "contact@cmconsulting.cm",
    sub: "info@cmconsulting.cm",
    href: "mailto:contact@cmconsulting.cm",
    colorClass: "card-orange",
  },
  {
    icon: <Clock size={18} />,
    label: "Horaires",
    value: "Lundi – Samedi",
    sub: "08h00 – 18h00",
    href: null,
    colorClass: "card-purple",
  },
];

const facebookPages = [
  {
    icon: <BarChart2 size={15} />,
    name: "CM Consulting",
    desc: "Conseil & Stratégie",
    href: "https://web.facebook.com/CMConsultingSarl",
    dot: "#3b82f6",
  },
  {
    icon: <Wrench size={15} />,
    name: "D-Panneur",
    desc: "Dépannage informatique",
    href: "https://web.facebook.com/dpanneur",
    dot: "#f97316",
  },
  {
    icon: <ShoppingBag size={15} />,
    name: "CM Shop 237",
    desc: "Vente de matériel",
    href: "https://web.facebook.com/CMShop237",
    dot: "#eab308",
  },
  {
    icon: <Palette size={15} />,
    name: "CM Graphic",
    desc: "Création graphique",
    href: "https://web.facebook.com/CMGraphicOfficiel",
    dot: "#ec4899",
  },
];

const subjects = [
  "Conseil & Stratégie d'entreprise",
  "Dépannage informatique (D-Panneur)",
  "Création graphique (CM Graphic)",
  "Développement de site web / application",
  "Achat de matériel (CM Shop)",
  "Solutions Cloud & Hébergement",
  "Autre demande",
];

const faqs = [
  {
    q: "La consultation initiale est-elle vraiment gratuite ?",
    a: "Oui, totalement. Nous prenons 30 à 60 minutes pour comprendre votre projet avant de vous faire une proposition, sans engagement de votre côté.",
  },
  {
    q: "Combien de temps pour recevoir un devis ?",
    a: "Pour la plupart des demandes, nous envoyons un devis détaillé sous 24 heures ouvrables. Pour les projets complexes, sous 48h.",
  },
  {
    q: "Intervenez-vous en dehors de Douala ?",
    a: "Oui. Nous intervenons dans toutes les grandes villes du Cameroun (Yaoundé, Bafoussam, Bamenda, Garoua...) et proposons des services en ligne pour toute l'Afrique.",
  },
  {
    q: "Proposez-vous des facilités de paiement ?",
    a: "Nous acceptons les paiements en plusieurs tranches. Nous supportons Mobile Money (MTN & Orange), virement et espèces.",
  },
  {
    q: "En quelle langue travaillez-vous ?",
    a: "Notre équipe est parfaitement bilingue français/anglais. Vous pouvez nous contacter et recevoir vos livrables dans la langue de votre choix.",
  },
  {
    q: "Avez-vous un service après-vente ?",
    a: "Absolument. Chaque projet livré bénéficie d'une période de suivi et de garantie. Notre équipe D-Panneur assure le SAV matériel.",
  },
];

/* ─────────────────────────────────────────────────────────
   FAQ ACCORDION ITEM
───────────────────────────────────────────────────────── */
function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div
      className={`border rounded-2xl overflow-hidden transition-all duration-300 ${
        open
          ? "border-brand-blue-300 bg-brand-blue-500/3 shadow-sm"
          : "border-slate-100 bg-white hover:border-brand-blue-200"
      }`}
    >
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between gap-4 px-5 py-4 text-left"
      >
        <span className="font-semibold text-brand-black text-sm leading-snug">{q}</span>
        <ChevronDown
          size={16}
          className={`text-brand-blue-500 shrink-0 transition-transform duration-300 ${open ? "rotate-180" : ""}`}
        />
      </button>
      {open && (
        <div className="px-5 pb-4">
          <p className="text-slate-500 text-sm leading-relaxed">{a}</p>
        </div>
      )}
    </div>
  );
}

/* ─────────────────────────────────────────────────────────
   MAIN PAGE
───────────────────────────────────────────────────────── */
export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
    lang: "fr",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      {/* ══════════════════════════════════════════════════
          STYLES (scoped)
      ══════════════════════════════════════════════════ */}
      <style jsx global>{`
        /* Contact card color variants */
        .card-blue  { --card-bg: rgba(59,130,246,0.08); --card-border: rgba(59,130,246,0.22); --card-icon-bg: rgba(59,130,246,0.15); --card-icon-color: #60a5fa; }
        .card-green { --card-bg: rgba(34,197,94,0.08);  --card-border: rgba(34,197,94,0.22);  --card-icon-bg: rgba(34,197,94,0.15);  --card-icon-color: #4ade80; }
        .card-orange{ --card-bg: rgba(249,115,22,0.08); --card-border: rgba(249,115,22,0.22); --card-icon-bg: rgba(249,115,22,0.15); --card-icon-color: #fb923c; }
        .card-purple{ --card-bg: rgba(168,85,247,0.08); --card-border: rgba(168,85,247,0.22); --card-icon-bg: rgba(168,85,247,0.15); --card-icon-color: #c084fc; }

        .contact-card {
          background: var(--card-bg);
          border: 1px solid var(--card-border);
        }
        .contact-card-icon {
          background: var(--card-icon-bg);
          color: var(--card-icon-color);
        }

        /* Input focus ring */
        .cm-input:focus {
          outline: none;
          border-color: #3b82f6;
          box-shadow: 0 0 0 3px rgba(59,130,246,0.12);
        }

        /* Floating label animation */
        @keyframes fadeSlideUp {
          from { opacity: 0; transform: translateY(10px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .animate-fsu { animation: fadeSlideUp 0.4s ease both; }
        .delay-100   { animation-delay: 0.1s; }
        .delay-200   { animation-delay: 0.2s; }
        .delay-300   { animation-delay: 0.3s; }
        .delay-400   { animation-delay: 0.4s; }
        .delay-500   { animation-delay: 0.5s; }
      `}</style>

      {/* ══════════════════════════════════════════════════
          1. HERO HEADER
      ══════════════════════════════════════════════════ */}
      <section className="relative bg-brand-black pt-44 pb-28 overflow-hidden">
        {/* Background image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=1920&h=800&fit=crop"
            alt="Contact CM Consulting Douala"
            fill
            className="object-cover opacity-10"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-brand-black via-brand-black/90 to-brand-black/50" />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-transparent to-transparent" />
        </div>

        {/* Glow orbs */}
        <div className="absolute top-1/3 right-1/4 w-[500px] h-[500px] bg-brand-blue-500/8 blur-[120px] pointer-events-none rounded-full" />
        <div className="absolute bottom-0 left-1/4 w-[300px] h-[300px] bg-blue-400/5 blur-[80px] pointer-events-none rounded-full" />

        {/* Grid texture overlay */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />

        <div className="relative z-10 w-full px-6 lg:px-16 xl:px-24">
          {/* Eyebrow */}
          <div className="flex items-center gap-3 mb-6 animate-fsu">
            <span className="h-px w-10 bg-brand-blue-500" />
            <span className="text-brand-blue-400 text-xs font-semibold uppercase tracking-widest">
              Prenons Contact
            </span>
          </div>

          <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl text-white font-bold max-w-3xl leading-[1.05] mb-6 animate-fsu delay-100">
            Parlons de{" "}
            <br className="hidden sm:block" />
            Votre{" "}
            <span className="text-brand-blue-500 relative">
              Projet
              <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-brand-blue-500/40 rounded" />
            </span>
          </h1>

          <p className="text-white/55 text-base sm:text-lg max-w-xl leading-relaxed mb-10 animate-fsu delay-200">
            Notre équipe est à votre écoute du lundi au samedi.{" "}
            <span className="text-white/75">Consultation initiale gratuite</span>, réponse garantie sous 24h.
          </p>

          {/* Quick action pills */}
          <div className="flex flex-wrap gap-3 animate-fsu delay-300">
            <a
              href="https://wa.me/237694890230"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1ebe59] text-white font-semibold px-5 py-2.5 rounded-full text-sm transition-all duration-200 hover:-translate-y-0.5 shadow-lg shadow-green-500/20"
            >
              <MessageCircle size={15} />
              WhatsApp Rapide
            </a>
            <a
              href="tel:+237690486009"
              className="inline-flex items-center gap-2 border border-white/20 hover:border-brand-blue-500/50 bg-white/5 hover:bg-white/10 text-white/80 hover:text-white font-semibold px-5 py-2.5 rounded-full text-sm transition-all duration-200"
            >
              <Phone size={14} />
              +237 690 486 009
            </a>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          2. CONTACT INFO CARDS STRIP
      ══════════════════════════════════════════════════ */}
      <section className="bg-brand-darkgray border-b border-white/8 py-8">
        <div className="w-full px-6 lg:px-16 xl:px-24">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 lg:gap-4">
            {contactDetails.map(({ icon, label, value, sub, href, colorClass }) => {
              const inner = (
                <div className={`contact-card ${colorClass} flex items-center gap-3 p-4 rounded-2xl transition-all duration-200 hover:scale-[1.02] cursor-default ${href ? "cursor-pointer" : ""}`}>
                  {/* Icon */}
                  <div className={`contact-card-icon w-10 h-10 rounded-xl flex items-center justify-center shrink-0`}>
                    {icon}
                  </div>
                  {/* Text — min-w-0 is critical for truncation in flex */}
                  <div className="min-w-0 flex-1">
                    <p className="text-white/35 text-[10px] uppercase tracking-widest font-bold mb-0.5">
                      {label}
                    </p>
                    <p className="text-white text-sm font-semibold leading-snug truncate">{value}</p>
                    <p className="text-white/35 text-xs mt-0.5 truncate">{sub}</p>
                  </div>
                </div>
              );

              return href ? (
                <a key={label} href={href} target={href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer">
                  {inner}
                </a>
              ) : (
                <div key={label}>{inner}</div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          3. MAIN CONTENT — FORM + SIDEBAR
      ══════════════════════════════════════════════════ */}
      <section className="bg-white py-16 lg:py-24">
        <div className="w-full px-6 lg:px-16 xl:px-24">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-16">

            {/* ── LEFT: Form (3/5) ─────────────────────── */}
            <div className="lg:col-span-3">
              <div className="mb-8">
                <div className="flex items-center gap-3 mb-3">
                  <span className="h-px w-8 bg-brand-blue-500" />
                  <span className="text-brand-blue-500 text-xs font-bold uppercase tracking-widest">
                    Formulaire
                  </span>
                </div>
                <h2 className="font-display text-3xl lg:text-4xl font-bold text-brand-black mb-2 leading-tight">
                  Envoyez-Nous<br />un Message
                </h2>
                <p className="text-slate-400 text-sm leading-relaxed">
                  Remplissez le formulaire ci-dessous. Nous vous répondons dans les 24 heures ouvrables.
                </p>
              </div>

              {submitted ? (
                /* ── Success state ── */
                <div className="flex flex-col items-center justify-center text-center py-16 px-6 bg-gradient-to-b from-brand-blue-500/5 to-transparent rounded-3xl border border-brand-blue-500/20">
                  <div className="relative mb-6">
                    <div className="w-20 h-20 rounded-full bg-brand-blue-500/15 border-2 border-brand-blue-500/30 flex items-center justify-center">
                      <CheckCircle2 size={36} className="text-brand-blue-500" />
                    </div>
                    <div className="absolute -top-1 -right-1 w-6 h-6 rounded-full bg-[#25D366] border-2 border-white flex items-center justify-center">
                      <span className="text-white text-xs">✓</span>
                    </div>
                  </div>
                  <h3 className="font-display text-2xl font-bold text-brand-black mb-3">
                    Message Envoyé !
                  </h3>
                  <p className="text-slate-500 text-sm leading-relaxed max-w-sm mb-8">
                    Merci pour votre message. Notre équipe l'a bien reçu et vous répondra sous 24h ouvrables. En attendant, n'hésitez pas à nous joindre sur WhatsApp.
                  </p>
                  <div className="flex flex-wrap justify-center gap-3">
                    <a
                      href="https://wa.me/237694890230"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-[#25D366] text-white font-semibold px-5 py-3 rounded-xl text-sm hover:bg-[#1ebe59] transition-colors"
                    >
                      <MessageCircle size={15} />
                      Écrire sur WhatsApp
                    </a>
                    <button
                      onClick={() => { setSubmitted(false); setFormData({ name: "", email: "", phone: "", subject: "", message: "", lang: "fr" }); }}
                      className="inline-flex items-center gap-2 text-brand-black border border-slate-200 hover:border-brand-blue-300 hover:text-brand-blue-500 px-5 py-3 rounded-xl text-sm font-medium transition-colors"
                    >
                      <X size={14} />
                      Nouveau message
                    </button>
                  </div>
                </div>
              ) : (
                /* ── Form ── */
                <form onSubmit={handleSubmit} className="space-y-5">

                  {/* Name + Phone */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-2">
                        Nom Complet <span className="text-red-400">*</span>
                      </label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Ex : Jean-Paul Mbarga"
                        className="cm-input w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3.5 text-sm text-brand-black placeholder-slate-300 transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-2">
                        Téléphone / WhatsApp
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+237 6XX XXX XXX"
                        className="cm-input w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3.5 text-sm text-brand-black placeholder-slate-300 transition-all"
                      />
                    </div>
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-2">
                      Adresse Email <span className="text-red-400">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="votre@email.com"
                      className="cm-input w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3.5 text-sm text-brand-black placeholder-slate-300 transition-all"
                    />
                  </div>

                  {/* Subject */}
                  <div>
                    <label className="block text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-2">
                      Objet de la demande <span className="text-red-400">*</span>
                    </label>
                    <div className="relative">
                      <select
                        name="subject"
                        required
                        value={formData.subject}
                        onChange={handleChange}
                        className="cm-input w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3.5 text-sm text-brand-black appearance-none cursor-pointer transition-all pr-10"
                      >
                        <option value="" disabled>Choisissez un service...</option>
                        {subjects.map((s) => (
                          <option key={s} value={s}>{s}</option>
                        ))}
                      </select>
                      <ChevronDown size={15} className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" />
                    </div>
                  </div>

                  {/* Language toggle */}
                  <div>
                    <label className="block text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-2">
                      Langue préférée
                    </label>
                    <div className="flex gap-3">
                      {[
                        { value: "fr", flag: "🇫🇷", label: "Français" },
                        { value: "en", flag: "🇬🇧", label: "English" },
                      ].map(({ value, flag, label }) => (
                        <button
                          key={value}
                          type="button"
                          onClick={() => setFormData({ ...formData, lang: value })}
                          className={`flex-1 flex items-center justify-center gap-2 py-3 rounded-xl text-sm font-semibold border transition-all duration-200 ${
                            formData.lang === value
                              ? "bg-brand-blue-500 text-white border-brand-blue-500 shadow-sm"
                              : "bg-slate-50 text-slate-500 border-slate-200 hover:border-brand-blue-300 hover:text-brand-blue-500"
                          }`}
                        >
                          <span>{flag}</span>
                          {label}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-2">
                      Votre Message <span className="text-red-400">*</span>
                    </label>
                    <textarea
                      name="message"
                      required
                      rows={6}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Décrivez votre projet, vos besoins ou votre question en détail. Plus vous nous donnez d'informations, plus notre réponse sera précise et utile."
                      className="cm-input w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3.5 text-sm text-brand-black placeholder-slate-300 transition-all resize-none"
                    />
                  </div>

                  {/* Submit */}
                  <button
                    type="submit"
                    className="w-full inline-flex items-center justify-center gap-2.5 bg-brand-blue-500 hover:bg-brand-blue-400 active:bg-brand-blue-600 text-white font-bold py-4 rounded-xl transition-all duration-200 hover:-translate-y-0.5 shadow-lg shadow-blue-500/25 group text-sm"
                  >
                    <Send size={15} />
                    Envoyer le Message
                    <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                  </button>

                  <p className="text-center text-xs text-slate-400 leading-relaxed">
                    ✅ Réponse garantie sous 24h · Consultation initiale gratuite · Sans engagement
                  </p>
                </form>
              )}
            </div>

            {/* ── RIGHT: Sidebar (2/5) ─────────────────── */}
            <div className="lg:col-span-2 space-y-5">

              {/* WhatsApp CTA */}
              <div
                className="rounded-2xl p-5 relative overflow-hidden"
                style={{ background: "linear-gradient(135deg, rgba(37,211,102,0.12) 0%, rgba(37,211,102,0.05) 100%)", border: "1px solid rgba(37,211,102,0.25)" }}
              >
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-[#25D366]/10 rounded-full blur-xl" />
                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-xl bg-[#25D366] flex items-center justify-center shrink-0 shadow-lg shadow-green-500/30">
                      <MessageCircle size={19} className="text-white" />
                    </div>
                    <div>
                      <p className="text-brand-black font-bold text-sm leading-tight">Contact Rapide</p>
                      <div className="flex items-center gap-1.5 mt-0.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#25D366] animate-pulse" />
                        <p className="text-slate-400 text-xs">Réponse en moins d'1 heure</p>
                      </div>
                    </div>
                  </div>
                  <p className="text-slate-500 text-sm leading-relaxed mb-4">
                    Vous êtes pressé ? Écrivez-nous directement sur WhatsApp. Nous répondons rapidement, même le week-end.
                  </p>
                  <a
                    href="https://wa.me/237694890230?text=Bonjour%20CM%20Consulting%2C%20j%27ai%20une%20question%20concernant..."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between bg-[#25D366] hover:bg-[#1ebe59] text-white font-bold px-5 py-3.5 rounded-xl text-sm transition-all duration-200 hover:-translate-y-0.5 shadow-lg shadow-green-500/20 group"
                  >
                    <span className="flex items-center gap-2">
                      <MessageCircle size={15} />
                      Écrire sur WhatsApp
                    </span>
                    <ArrowRight size={13} className="group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>

              {/* Call us */}
              <div className="bg-slate-50 border border-slate-100 rounded-2xl p-5">
                <div className="flex items-center gap-2 mb-3">
                  <Phone size={14} className="text-brand-blue-500" />
                  <p className="text-brand-black font-bold text-sm">Appelez-Nous</p>
                  <span className="ml-auto text-[10px] text-slate-400 font-medium">Lun–Sam · 08h–18h</span>
                </div>
                <div className="space-y-2">
                  {["+237 690 486 009", "+237 690 486 009"].map((num, i) => (
                    <a
                      key={i}
                      href={`tel:${num.replace(/\s/g, "")}`}
                      className="flex items-center gap-3 bg-white border border-slate-100 hover:border-brand-blue-200 hover:shadow-sm rounded-xl px-4 py-3 text-brand-black hover:text-brand-blue-500 font-semibold text-sm transition-all duration-200 group"
                    >
                      <div className="w-6 h-6 rounded-lg bg-brand-blue-500/10 flex items-center justify-center shrink-0">
                        <Phone size={11} className="text-brand-blue-500" />
                      </div>
                      {num}
                      <ArrowRight size={12} className="ml-auto text-slate-300 group-hover:text-brand-blue-400 group-hover:translate-x-0.5 transition-all" />
                    </a>
                  ))}
                </div>
              </div>

              {/* Facebook pages */}
              <div className="bg-slate-50 border border-slate-100 rounded-2xl p-5">
                <div className="flex items-center gap-2 mb-4">
                  <Facebook size={14} className="text-blue-600" />
                  <p className="text-brand-black font-bold text-sm">Nos Pages Facebook</p>
                </div>
                <div className="space-y-2">
                  {facebookPages.map(({ icon, name, desc, href, dot }) => (
                    <a
                      key={name}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 bg-white border border-slate-100 hover:border-blue-200 hover:shadow-sm rounded-xl px-4 py-3 transition-all duration-200 group"
                    >
                      <div
                        className="w-7 h-7 rounded-lg flex items-center justify-center shrink-0"
                        style={{ background: dot + "18", color: dot }}
                      >
                        {icon}
                      </div>
                      <div className="min-w-0">
                        <p className="text-brand-black text-sm font-semibold leading-none group-hover:text-blue-600 transition-colors truncate">
                          {name}
                        </p>
                        <p className="text-slate-400 text-xs mt-0.5 truncate">{desc}</p>
                      </div>
                      <Facebook size={12} className="ml-auto text-slate-300 group-hover:text-blue-400 transition-colors shrink-0" />
                    </a>
                  ))}
                </div>
              </div>

              {/* Location card */}
              <div className="bg-brand-black rounded-2xl p-5 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-40 h-40 bg-brand-blue-500/10 rounded-full blur-2xl pointer-events-none" />
                <div className="relative z-10">
                  <div className="flex items-center gap-2 mb-3">
                    <MapPin size={14} className="text-brand-blue-400" />
                    <p className="text-white font-bold text-sm">Notre Localisation</p>
                  </div>
                  <p className="text-white/70 text-sm font-medium">Douala, Cameroun</p>
                  <p className="text-white/35 text-xs mt-0.5 mb-4">Logpom · Carrefour Express</p>

                  {/* Map thumbnail */}
                  <div className="h-32 rounded-xl overflow-hidden border border-white/10 relative mb-4">
                    <Image
                      src="https://images.unsplash.com/photo-1555448248-2571daf6344b?w=400&h=200&fit=crop"
                      alt="Douala Cameroun"
                      fill
                      className="object-cover opacity-40"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-brand-black/60 to-transparent" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="bg-brand-blue-500 rounded-full w-8 h-8 flex items-center justify-center shadow-lg shadow-blue-500/40">
                        <MapPin size={14} className="text-white" />
                      </div>
                    </div>
                    <div className="absolute bottom-2 left-3">
                      <p className="text-white text-xs font-semibold">Douala</p>
                    </div>
                  </div>

                  <a
                    href="https://maps.google.com/?q=Logpom+Douala+Cameroun"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-brand-blue-400 hover:text-brand-blue-300 text-xs font-semibold transition-colors group"
                  >
                    Voir sur Google Maps
                    <ArrowRight size={11} className="group-hover:translate-x-0.5 transition-transform" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          4. FAQ ACCORDION
      ══════════════════════════════════════════════════ */}
      <section className="bg-gradient-to-b from-slate-50 to-blue-50/20 py-20">
        <div className="w-full px-6 lg:px-16 xl:px-24">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-4">
              <span className="h-px w-8 bg-brand-blue-500" />
              <span className="text-brand-blue-500 text-xs font-bold uppercase tracking-widest">
                FAQ
              </span>
              <span className="h-px w-8 bg-brand-blue-500" />
            </div>
            <h2 className="font-display text-3xl lg:text-4xl font-bold text-brand-black mb-3">
              Avant de Nous Contacter
            </h2>
            <p className="text-slate-400 text-sm max-w-md mx-auto">
              Voici les réponses aux questions les plus fréquentes. Vous ne trouvez pas la vôtre ? Écrivez-nous.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 max-w-4xl mx-auto">
            {faqs.map(({ q, a }) => (
              <FaqItem key={q} q={q} a={a} />
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          5. BOTTOM CTA BANNER
      ══════════════════════════════════════════════════ */}
      <section className="bg-brand-black py-20 relative overflow-hidden">
        {/* Decorative glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-brand-blue-500/8 blur-[100px] rounded-full pointer-events-none" />

        <div className="relative z-10 w-full px-6 lg:px-16 xl:px-24 text-center">
          <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-4 py-2 mb-6">
            <span className="w-2 h-2 rounded-full bg-[#25D366] animate-pulse" />
            <span className="text-white/60 text-xs font-semibold uppercase tracking-widest">
              Toujours disponibles
            </span>
          </div>

          <h2 className="font-display text-3xl lg:text-5xl font-bold text-white mb-4 leading-tight">
            On est là pour{" "}
            <span className="text-brand-blue-500">Vous Aider 🇨🇲</span>
          </h2>
          <p className="text-white/45 text-sm max-w-md mx-auto mb-10 leading-relaxed">
            Que ce soit pour un devis, une question ou un simple renseignement — n'hésitez jamais à nous contacter. Nous répondons toujours.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="https://wa.me/237694890230"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1ebe59] text-white font-bold px-7 py-4 rounded-xl transition-all duration-200 hover:-translate-y-0.5 shadow-lg shadow-green-500/20 text-sm"
            >
              <MessageCircle size={16} />
              WhatsApp Now
            </a>
            <a
              href="tel:+237690486009"
              className="inline-flex items-center gap-2 border border-white/15 hover:border-brand-blue-500/50 bg-white/5 hover:bg-white/8 text-white/80 hover:text-white font-bold px-7 py-4 rounded-xl transition-all duration-200 text-sm"
            >
              <Phone size={16} />
              +237 690 486 009
            </a>
            <Link
              href="/services"
              className="inline-flex items-center gap-2 text-brand-blue-400 hover:text-brand-blue-300 font-semibold px-6 py-4 rounded-xl text-sm transition-colors group"
            >
              Voir nos services
              <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          FLOATING WHATSAPP BUTTON
      ══════════════════════════════════════════════════ */}
      <a
        href="https://wa.me/237694890230"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Nous contacter sur WhatsApp"
        className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-[#25D366] hover:bg-[#1ebe59] shadow-xl hover:shadow-2xl shadow-green-500/30 flex items-center justify-center transition-all duration-200 hover:-translate-y-1 hover:scale-105"
      >
        <MessageCircle size={26} className="text-white" />
      </a>
    </>
  );
}
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
} from "lucide-react";

/* ─────────────────────────────────────────────────────────
   DATA
───────────────────────────────────────────────────────── */
const contactDetails = [
  {
    icon:    <MapPin size={20} />,
    label:   "Adresse",
    labelEn: "Address",
    value:   "Douala, Cameroun",
    sub:     "Logpom, Carrefour express",
    href:    null,
    color:   "bg-brand-blue-500/10 border-brand-blue-500/20 text-brand-blue-400",
  },
  {
    icon:    <Phone size={20} />,
    label:   "Téléphone",
    labelEn: "Phone",
    value:   "+237 690 486 009",
    sub:     "+237 690 486 009",
    href:    "tel:+237694890230",
    color:   "bg-green-500/10 border-green-500/20 text-green-400",
  },
  {
    icon:    <Mail size={20} />,
    label:   "Email",
    labelEn: "Email",
    value:   "contact@cmconsulting.cm",
    sub:     "info@cmconsulting.cm",
    href:    "mailto:contact@cmconsulting.cm",
    color:   "bg-orange-500/10 border-orange-500/20 text-orange-400",
  },
  
  {
    icon:    <Clock size={20} />,
    label:   "Horaires d'Ouverture",
    labelEn: "Opening Hours",
    value:   "Lundi – Samedi",
    sub:     "08h00 – 18h00",
    href:    null,
    color:   "bg-purple-500/10 border-purple-500/20 text-purple-400",
  },
];

const facebookPages = [
  {
    icon:     <BarChart2 size={16} />,
    name:     "CM Consulting",
    desc:     "Conseil & Stratégie d'entreprise",
    href:     "https://web.facebook.com/CMConsultingSarl",
    color:    "text-brand-blue-400",
  },
  {
    icon:     <Wrench size={16} />,
    name:     "D-Panneur",
    desc:     "Dépannage & Maintenance informatique",
    href:     "https://web.facebook.com/dpanneur",
    color:    "text-orange-400",
  },
  {
    icon:     <ShoppingBag size={16} />,
    name:     "CM Shop 237",
    desc:     "Vente de matériel informatique",
    href:     "https://web.facebook.com/CMShop237",
    color:    "text-yellow-400",
  },
  {
    icon:     <Palette size={16} />,
    name:     "CM Graphic",
    desc:     "Création graphique & communication",
    href:     "https://web.facebook.com/CMGraphicOfficiel",
    color:    "text-pink-400",
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

/* ─────────────────────────────────────────────────────────
   COMPONENT
───────────────────────────────────────────────────────── */
export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "", email: "", phone: "", subject: "", message: "", lang: "fr",
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
          1. PAGE HEADER
      ══════════════════════════════════════════════════ */}
      <section className="relative bg-brand-black pt-44 pb-24 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=1920&h=800&fit=crop"
            alt="Contact CM Consulting Douala"
            fill
            className="object-cover opacity-15"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-brand-black via-brand-black/92 to-brand-black/60" />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-transparent to-transparent" />
        </div>
        <div className="absolute top-1/2 right-1/3 w-[400px] h-[400px] bg-brand-blue-500/10 blur-[100px] pointer-events-none" />

        <div className="relative z-10 w-full px-6 lg:px-16 xl:px-24">
          <div className="flex items-center gap-3 mb-6">
            <span className="h-px w-10 bg-brand-blue-500" />
            <span className="text-brand-blue-400 text-xs font-semibold uppercase tracking-widest">
              Prenons Contact
            </span>
          </div>
          <h1 className="font-display text-5xl lg:text-6xl text-white font-bold max-w-2xl leading-tight mb-6">
            Parlons de Votre{" "}
            <span className="text-brand-blue-500">Projet</span>
          </h1>
          <p className="text-white/55 text-lg max-w-xl leading-relaxed">
            Notre équipe est à votre écoute du lundi au samedi. Consultation initiale gratuite, réponse garantie sous 24h.
          </p>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          2. CONTACT DETAILS STRIP
      ══════════════════════════════════════════════════ */}
      <section className="bg-brand-darkgray border-b border-white/8 py-10">
        <div className="w-full px-6 lg:px-16 xl:px-24">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
            {contactDetails.map(({ icon, label, value, sub, href, color }) => (
              <div
                key={label}
                className={`flex items-start gap-4 p-5 rounded-2xl border ${color}`}
              >
                <div className={`w-10 h-10 rounded-xl border flex items-center justify-center shrink-0 ${color}`}>
                  {icon}
                </div>
                <div>
                  <p className="text-white/35 text-xs uppercase tracking-wider font-semibold mb-1">
                    {label}
                  </p>
                  {href ? (
                    <a
                      href={href}
                      className="text-white text-sm font-medium hover:text-brand-blue-400 transition-colors leading-snug block"
                    >
                      {value}
                    </a>
                  ) : (
                    <p className="text-white text-sm font-medium leading-snug">{value}</p>
                  )}
                  <p className="text-white/35 text-xs mt-0.5">{sub}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          3. MAIN CONTENT — FORM + SIDEBAR
      ══════════════════════════════════════════════════ */}
      <section className="bg-white py-24">
        <div className="w-full px-6 lg:px-16 xl:px-24 grid grid-cols-1 lg:grid-cols-5 gap-14">

          {/* ── LEFT: Contact Form (3/5) ─────────────── */}
          <div className="lg:col-span-3">
            <div className="mb-8">
              <h2 className="font-display text-3xl font-bold text-brand-black mb-2">
                Envoyez-Nous un Message
              </h2>
              <p className="text-slate-500 text-sm">
                Remplissez le formulaire ci-dessous. Nous vous répondons dans les 24 heures ouvrables.
              </p>
            </div>

            {submitted ? (
              /* Success state */
              <div className="flex flex-col items-center justify-center text-center py-20 bg-gradient-to-b from-brand-blue-500/5 to-transparent rounded-2xl border border-brand-blue-500/20">
                <div className="w-16 h-16 rounded-full bg-brand-blue-500/15 border border-brand-blue-500/30 flex items-center justify-center mb-5">
                  <CheckCircle2 size={30} className="text-brand-blue-500" />
                </div>
                <h3 className="font-display text-2xl font-bold text-brand-black mb-3">
                  Message Envoyé !
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed max-w-sm mb-6">
                  Merci pour votre message. Notre équipe l'a reçu et vous répondra dans les meilleurs délais. En attendant, n'hésitez pas à nous contacter sur WhatsApp.
                </p>
                <div className="flex gap-3">
                  <a
                    href="https://wa.me/237694890230"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-[#25D366] text-white font-semibold px-5 py-2.5 rounded-xl text-sm hover:bg-[#1ebe59] transition-colors"
                  >
                    <MessageCircle size={15} />
                    WhatsApp
                  </a>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="text-brand-blue-500 border border-brand-blue-200 hover:border-brand-blue-400 px-5 py-2.5 rounded-xl text-sm font-medium transition-colors"
                  >
                    Nouveau message
                  </button>
                </div>
              </div>
            ) : (
              /* Form */
              <form onSubmit={handleSubmit} className="space-y-5">

                {/* Name + Phone */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-widest text-slate-400 mb-2">
                      Nom Complet <span className="text-red-400">*</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Ex: Jean-Paul Mbarga"
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3.5 text-sm text-brand-black placeholder-slate-400 focus:outline-none focus:border-brand-blue-400 focus:ring-2 focus:ring-brand-blue-400/15 transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-widest text-slate-400 mb-2">
                      Téléphone / WhatsApp
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+237 6XX XXX XXX"
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3.5 text-sm text-brand-black placeholder-slate-400 focus:outline-none focus:border-brand-blue-400 focus:ring-2 focus:ring-brand-blue-400/15 transition-all"
                    />
                  </div>
                </div>

                {/* Email */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-widest text-slate-400 mb-2">
                    Adresse Email <span className="text-red-400">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="votre@email.com"
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3.5 text-sm text-brand-black placeholder-slate-400 focus:outline-none focus:border-brand-blue-400 focus:ring-2 focus:ring-brand-blue-400/15 transition-all"
                  />
                </div>

                {/* Subject dropdown */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-widest text-slate-400 mb-2">
                    Objet de votre demande <span className="text-red-400">*</span>
                  </label>
                  <select
                    name="subject"
                    required
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3.5 text-sm text-brand-black focus:outline-none focus:border-brand-blue-400 focus:ring-2 focus:ring-brand-blue-400/15 transition-all appearance-none cursor-pointer"
                  >
                    <option value="" disabled>Choisissez un service...</option>
                    {subjects.map((s) => (
                      <option key={s} value={s}>{s}</option>
                    ))}
                  </select>
                </div>

                {/* Language preference */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-widest text-slate-400 mb-2">
                    Langue préférée pour la réponse
                  </label>
                  <div className="flex gap-3">
                    {[
                      { value: "fr", label: "🇫🇷 Français" },
                      { value: "en", label: "🇬🇧 English" },
                    ].map(({ value, label }) => (
                      <button
                        key={value}
                        type="button"
                        onClick={() => setFormData({ ...formData, lang: value })}
                        className={`flex-1 py-3 rounded-xl text-sm font-medium border transition-all duration-200 ${
                          formData.lang === value
                            ? "bg-brand-blue-500 text-white border-brand-blue-500"
                            : "bg-slate-50 text-slate-500 border-slate-200 hover:border-brand-blue-300"
                        }`}
                      >
                        {label}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-widest text-slate-400 mb-2">
                    Votre Message <span className="text-red-400">*</span>
                  </label>
                  <textarea
                    name="message"
                    required
                    rows={6}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Décrivez votre projet, vos besoins ou votre question en détail. Plus vous nous donnez d'informations, plus notre réponse sera précise et utile."
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3.5 text-sm text-brand-black placeholder-slate-400 focus:outline-none focus:border-brand-blue-400 focus:ring-2 focus:ring-brand-blue-400/15 transition-all resize-none"
                  />
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-3 bg-brand-blue-500 hover:bg-brand-blue-400 text-white font-semibold py-4 rounded-xl transition-all duration-200 hover:-translate-y-0.5 shadow-blue group text-sm"
                >
                  <Send size={16} />
                  Envoyer le Message
                  <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
                </button>

                <p className="text-center text-xs text-slate-400">
                  ✅ Réponse garantie sous 24h ouvrables · Consultation initiale gratuite
                </p>
              </form>
            )}
          </div>

          {/* ── RIGHT: Sidebar (2/5) ─────────────────── */}
          <div className="lg:col-span-2 space-y-6">

            {/* WhatsApp CTA — prominent */}
            <div className="bg-[#25D366]/10 border border-[#25D366]/25 rounded-2xl p-6">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-xl bg-[#25D366] flex items-center justify-center shrink-0">
                  <MessageCircle size={20} className="text-white" />
                </div>
                <div>
                  <p className="text-brand-black font-bold text-sm">Contact Rapide</p>
                  <p className="text-slate-400 text-xs">Réponse en moins d'1 heure</p>
                </div>
              </div>
              <p className="text-slate-600 text-sm leading-relaxed mb-4">
                Vous êtes pressé ? Écrivez-nous directement sur WhatsApp. Nous répondons rapidement, même le week-end.
              </p>
              <a
                href="https://wa.me/237694890230?text=Bonjour%20CM%20Consulting%2C%20j%27ai%20une%20question%20concernant..."
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between bg-[#25D366] hover:bg-[#1ebe59] text-white font-semibold px-5 py-3.5 rounded-xl text-sm transition-all duration-200 group"
              >
                <span className="flex items-center gap-2">
                  <MessageCircle size={16} />
                  Écrire sur WhatsApp
                </span>
                <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </a>
            </div>

            {/* Call us */}
            <div className="bg-slate-50 border border-slate-100 rounded-2xl p-6">
              <p className="text-brand-black font-bold text-sm mb-1">Appelez-Nous Directement</p>
              <p className="text-slate-400 text-xs mb-4">Lun–Sam · 08h–18h</p>
              <a
                href="tel:+237694890230"
                className="flex items-center gap-3 text-brand-black hover:text-brand-blue-500 font-semibold text-sm transition-colors mb-2"
              >
                <Phone size={15} className="text-brand-blue-500 shrink-0" />
                +237 690 486 009
              </a>
              <a
                href="tel:+237600000001"
                className="flex items-center gap-3 text-brand-black hover:text-brand-blue-500 font-semibold text-sm transition-colors"
              >
                <Phone size={15} className="text-brand-blue-500 shrink-0" />
                +237 690 486 009
              </a>
            </div>

            {/* Facebook pages */}
            <div className="bg-slate-50 border border-slate-100 rounded-2xl p-6">
              <p className="text-brand-black font-bold text-sm mb-4">
                Suivez Nos Pages Facebook
              </p>
              <div className="space-y-3">
                {facebookPages.map(({ icon, name, desc, href, color }) => (
                  <a
                    key={name}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 group"
                  >
                    <div className={`w-8 h-8 rounded-lg bg-slate-200 flex items-center justify-center shrink-0 group-hover:bg-brand-blue-500/10 transition-colors ${color}`}>
                      {icon}
                    </div>
                    <div>
                      <p className="text-brand-black text-sm font-semibold leading-none group-hover:text-brand-blue-500 transition-colors">
                        {name}
                      </p>
                      <p className="text-slate-400 text-xs mt-0.5">{desc}</p>
                    </div>
                    <Facebook size={13} className="ml-auto text-slate-300 group-hover:text-brand-blue-400 transition-colors shrink-0" />
                  </a>
                ))}
              </div>
            </div>

            {/* Location card */}
            <div className="bg-brand-black rounded-2xl p-6 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-brand-blue-500/10 rounded-full blur-xl pointer-events-none" />
              <div className="relative z-10">
                <div className="flex items-center gap-2 mb-3">
                  <MapPin size={16} className="text-brand-blue-400" />
                  <p className="text-white font-bold text-sm">Notre Localisation</p>
                </div>
                <p className="text-white/60 text-sm leading-relaxed mb-1">
                  Douala, Cameroun
                </p>
                <p className="text-white/35 text-xs mb-4">
                  Akwa / Bonapriso · Douala
                </p>
                <a
                  href="https://maps.google.com/?q=Douala,Cameroun"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-brand-blue-400 hover:text-brand-blue-300 text-xs font-semibold transition-colors group"
                >
                  Voir sur Google Maps
                  <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform" />
                </a>

                {/* Map preview placeholder */}
                <div className="mt-4 h-28 rounded-xl overflow-hidden border border-white/10 relative">
                  <Image
                    src="https://images.unsplash.com/photo-1555448248-2571daf6344b?w=400&h=200&fit=crop"
                    alt="Douala Cameroun"
                    fill
                    className="object-cover opacity-50"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="bg-brand-blue-500 rounded-full w-6 h-6 flex items-center justify-center shadow-blue">
                      <MapPin size={13} className="text-white" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          4. FAQ RAPIDE
      ══════════════════════════════════════════════════ */}
      <section className="bg-gradient-to-b from-slate-50 to-blue-50/20 py-20">
        <div className="w-full px-6 lg:px-16 xl:px-24">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-4">
              <span className="h-px w-10 bg-brand-blue-500" />
              <span className="text-brand-blue-500 text-xs font-semibold uppercase tracking-widest">
                Questions Fréquentes
              </span>
              <span className="h-px w-10 bg-brand-blue-500" />
            </div>
            <h2 className="font-display text-3xl lg:text-4xl font-bold text-brand-black">
              Avant de Nous Contacter
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-4xl mx-auto">
            {[
              {
                q: "La consultation initiale est-elle vraiment gratuite ?",
                a: "Oui, totalement. Nous prenons 30 à 60 minutes pour comprendre votre projet avant de vous faire une proposition. Sans engagement de votre côté.",
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
                a: "Nous acceptons les paiements en plusieurs tranches pour les projets importants. Nous supportons Mobile Money (MTN & Orange), virement et espèces.",
              },
              {
                q: "En quelle langue travaillez-vous ?",
                a: "Notre équipe est parfaitement bilingue français/anglais. Vous pouvez nous contacter et recevoir tous vos livrables dans la langue de votre choix.",
              },
              {
                q: "Avez-vous un service après-vente ?",
                a: "Absolument. Chaque projet livré bénéficie d'une période de suivi et de garantie. Pour le matériel vendu, notre équipe D-Panneur assure le SAV.",
              },
            ].map(({ q, a }) => (
              <div
                key={q}
                className="bg-white rounded-2xl p-6 border border-slate-100 hover:border-brand-blue-200 hover:shadow-card transition-all duration-300"
              >
                <div className="flex items-start gap-3 mb-3">
                  <CheckCircle2 size={16} className="text-brand-blue-500 mt-0.5 shrink-0" />
                  <h4 className="font-semibold text-brand-black text-sm leading-snug">{q}</h4>
                </div>
                <p className="text-slate-500 text-sm leading-relaxed pl-7">{a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          5. BOTTOM CTA
      ══════════════════════════════════════════════════ */}
      <section className="bg-brand-black py-20">
        <div className="w-full px-6 lg:px-16 xl:px-24 text-center">
          <h2 className="font-display text-3xl lg:text-4xl font-bold text-white mb-4">
            On est là pour Vous Aider 🇨🇲
          </h2>
          <p className="text-white/50 text-sm max-w-md mx-auto mb-8 leading-relaxed">
            Que ce soit pour un devis, une question ou un simple renseignement — n'hésitez jamais à nous contacter. Nous répondons toujours.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="https://wa.me/237694890230"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1ebe59] text-white font-semibold px-7 py-3.5 rounded-xl transition-all duration-200 hover:-translate-y-0.5"
            >
              <MessageCircle size={17} />
              WhatsApp Now
            </a>
            <a
              href="tel:+237694890230"
              className="inline-flex items-center gap-2 border border-white/20 hover:border-brand-blue-500/60 text-white hover:text-brand-blue-400 font-semibold px-7 py-3.5 rounded-xl transition-all duration-200 text-sm"
            >
              <Phone size={17} />
              +237 690 486 009
            </a>
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
        className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-[#25D366] hover:bg-[#1ebe59] shadow-lg hover:shadow-xl flex items-center justify-center transition-all duration-200 hover:-translate-y-1"
      >
        <MessageCircle size={26} className="text-white" />
      </a>
    </>
  );
}
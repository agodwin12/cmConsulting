import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  Target,
  Eye,
  Heart,
  Shield,
  Users,
  TrendingUp,
  Lightbulb,
  Handshake,
  BarChart2,
  Wrench,
  Palette,
  ShoppingBag,
  ArrowRight,
  CheckCircle2,
  MessageCircle,
} from "lucide-react";

export const metadata: Metadata = {
  title: "À Propos — CM Consulting",
  description:
    "Découvrez CM Consulting, votre partenaire de confiance à Douala. Notre histoire, notre mission, nos valeurs et nos équipes.",
};

/* ─────────────────────────────────────────────────────────
   DATA
───────────────────────────────────────────────────────── */
const divisions = [
  {
    icon:     <BarChart2 size={24} />,
    name:     "CM Consulting",
    subtitle: "Conseil & Stratégie d'entreprise",
    desc:     "Notre division phare accompagne les dirigeants et entrepreneurs dans la définition et l'exécution de leurs stratégies de croissance. Nous intervenons en gestion, développement commercial, restructuration et planification.",
    color:    "border-brand-blue-500/30 bg-brand-blue-500/5",
    iconBg:   "bg-brand-blue-500/15 text-brand-blue-400",
    href:     "/services#conseil",
    facebook: "https://web.facebook.com/CMConsultingSarl",
  },
  {
    icon:     <Wrench size={24} />,
    name:     "CM Tech",
    subtitle: "Informatique, Développement & Cloud",
    desc:     "CM Tech reGroup tout notre pôle technologique : dépannage et maintenance informatique, développement de sites web et applications mobiles, logiciels métier sur mesure, hébergement cloud et cybersécurité. Une seule équipe pour tous vos besoins numériques.",
    color:    "border-orange-500/30 bg-orange-500/5",
    iconBg:   "bg-orange-500/15 text-orange-400",
    href:     "/services#depannage",
    facebook: "https://web.facebook.com/dpanneur",
  },
  {
    icon:     <Palette size={24} />,
    name:     "CM Graphic",
    subtitle: "Création Graphique & Communication Visuelle",
    desc:     "CM Graphic est notre studio de design créatif. Logos, identité visuelle, flyers, banners, habillage véhicule — nous donnons une image professionnelle et mémorable à votre marque.",
    color:    "border-pink-500/30 bg-pink-500/5",
    iconBg:   "bg-pink-500/15 text-pink-400",
    href:     "/services#graphique",
    facebook: "https://web.facebook.com/CMGraphicOfficiel",
  },
  {
    icon:     <ShoppingBag size={24} />,
    name:     "CM Shop",
    subtitle: "Vente de Matériel & Accessoires",
    desc:     "CM Shop est une boutique polyvalente proposant une large gamme de produits, allant du matériel informatique, téléphones et accessoires à divers articles de consommation courante. Nous nous engageons à offrir des produits de qualité, à des prix compétitifs, avec un service de livraison fiable sur l'ensemble du territoire camerounais.",
    color:    "border-yellow-500/30 bg-yellow-500/5",
    iconBg:   "bg-yellow-500/15 text-yellow-400",
    href:     "/services#shop",
    facebook: "https://web.facebook.com/CMShop237",
  },
];

const values = [
  {
    icon:  <Heart size={20} />,
    title: "Proximité Client",
    desc:  "Nous traitons chaque client comme un partenaire. Votre succès est notre succès.",
    color: "bg-red-500/10 text-red-400 border-red-500/20",
  },
  {
    icon:  <Shield size={20} />,
    title: "Intégrité",
    desc:  "Nous disons la vérité, même quand ce n'est pas confortable. Pas de fausses promesses.",
    color: "bg-brand-blue-500/10 text-brand-blue-400 border-brand-blue-500/20",
  },
  {
    icon:  <Lightbulb size={20} />,
    title: "Innovation",
    desc:  "Nous cherchons constamment de meilleures façons de résoudre vos problèmes.",
    color: "bg-yellow-500/10 text-yellow-400 border-yellow-500/20",
  },
  {
    icon:  <Handshake size={20} />,
    title: "Partenariat",
    desc:  "Nous travaillons avec vous, pas pour vous. La collaboration est au cœur de tout.",
    color: "bg-green-500/10 text-green-400 border-green-500/20",
  },
  {
    icon:  <TrendingUp size={20} />,
    title: "Excellence",
    desc:  "Chaque livrable reflète notre engagement envers la qualité et le dépassement des attentes.",
    color: "bg-orange-500/10 text-orange-400 border-orange-500/20",
  },
  {
    icon:  <Users size={20} />,
    title: "Impact Local",
    desc:  "Nous croyons au développement de l'économie camerounaise et africaine de l'intérieur.",
    color: "bg-purple-500/10 text-purple-400 border-purple-500/20",
  },
];

const teamMembers = [
  {
    name:  "Christian Merlin SIMALAK",
    role:  "Business Developper / Communicatieur Visuel",
    image: "/workers/a1.jpg",
  },
  {
    name:  "Laura SEN",
    role:  "Business Consultant / Expert en Packaging",
    image: "/workers/a3.jpg",
  },
  {
    name:  "Erick MINTAMACK",
    role:  "Expert en Marketing",
    image: "/workers/a2.jpg",
  },
  {
    name:  "Awah Wilbroad NDE",
    role:  "Ingenieur Logiciel / Solution Cloud ",
    image: "/workers/a4.jpg",
  },
];

const milestones = [
  {
    year: "2012",
    title: "Création de CM Consulting",
    desc:  "Fondée à Douala avec une équipe de 3 personnes et une vision claire : accompagner les entreprises camerounaises vers l'excellence.",
  },
  {
    year: "2015",
    title: "Lancement de CM Tech",
    desc:  "Ouverture de notre centre de dépannage informatique pour répondre aux besoins croissants du marché en maintenance et réparation.",
  },
  {
    year: "2017",
    title: "Naissance de CM Graphic",
    desc:  "Création de notre studio de design pour offrir des solutions de communication visuelle complètes à nos clients.",
  },
  {
    year: "2019",
    title: "Ouverture de CM Shop",
    desc:  "Lancement de notre boutique de vente enligne pour compléter notre offre et servir les particuliers et les entreprises.",
  },
  {
    year: "2022",
    title: "Division Développement Logiciel",
    desc:  "Création de notre équipe de développeurs pour accompagner la transformation digitale de nos clients avec des solutions sur mesure.",
  },
  {
    year: "2024",
    title: "200+ Projets & Expansion",
    desc:  "CM Consulting franchit le cap des 200 projets réalisés et étend son rayonnement à travers toute l'Afrique Centrale.",
  },
];

/* ─────────────────────────────────────────────────────────
   PAGE
───────────────────────────────────────────────────────── */
export default function AboutPage() {
  return (
    <>

      {/* ══════════════════════════════════════════════════
          1. PAGE HEADER
      ══════════════════════════════════════════════════ */}
      <section className="relative bg-brand-black pt-44 pb-24 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1556761175-4b46a572b786?w=1920&h=800&fit=crop"
            alt="Équipe en réunion à Douala"
            fill
            className="object-cover opacity-15"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-brand-black via-brand-black/90 to-brand-black/60" />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-transparent to-transparent" />
        </div>
        <div className="absolute top-1/2 right-1/3 w-[400px] h-[400px] bg-brand-blue-500/10 blur-[100px] pointer-events-none" />

        <div className="relative z-10 w-full px-6 lg:px-16 xl:px-24">
          <div className="flex items-center gap-3 mb-6">
            <span className="h-px w-10 bg-brand-blue-500" />
            <span className="text-brand-blue-400 text-xs font-semibold uppercase tracking-widest">
              Notre Histoire
            </span>
          </div>
          <h1 className="font-display text-5xl lg:text-6xl text-white font-bold max-w-3xl leading-tight mb-6">
            Plus de 12 Ans à Vos{" "}
            <span className="text-brand-blue-500">Côtés</span>
          </h1>
          <p className="text-white/55 text-lg max-w-2xl leading-relaxed mb-10">
            CM Group est né d'une conviction simple : chaque entreprise mérite un accompagnement professionnel de qualité, ancré dans la réalité locale.
          </p>

          {/* Quick stats — responsive wrap */}
          <div className="flex flex-wrap gap-6 sm:gap-10">
            {[
              { value: "2012", label: "Année de fondation" },
              { value: "200+", label: "Projets réalisés" },
              { value: "4",    label: "Divisions spécialisées" },
              { value: "50+",  label: "Experts dans l'équipe" },
            ].map(({ value, label }) => (
              <div key={label}>
                <div className="font-display text-3xl font-bold text-brand-blue-500">{value}</div>
                <div className="text-white/40 text-xs mt-0.5">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          2. QUI SOMMES-NOUS
      ══════════════════════════════════════════════════ */}
      <section className="bg-white py-20 lg:py-28">
        <div className="w-full px-6 lg:px-16 xl:px-24 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* Left: text */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="h-px w-10 bg-brand-blue-500" />
              <span className="text-brand-blue-500 text-xs font-semibold uppercase tracking-widest">
                Qui Sommes-Nous
              </span>
            </div>
            <h2 className="font-display text-4xl lg:text-5xl font-bold text-brand-black leading-tight mb-6">
              Un Group 100%{" "}
              <span className="text-brand-blue-500">Camerounais</span>
            </h2>
            <p className="text-slate-500 leading-relaxed mb-5">
              CM Group est un Group d'entreprises spécialisées, fondé et dirigé par des Camerounais, pour les entreprises camerounaises et africaines. Depuis Douala, nous rayonnons sur tout le territoire national et au-delà.
            </p>
            <p className="text-slate-500 leading-relaxed mb-5">
              Nous avons construit notre réputation sur une promesse simple : des résultats concrets, une communication honnête, et un suivi rigoureux. Pas de grands discours — des actes.
            </p>
            <p className="text-slate-500 leading-relaxed mb-8">
              Aujourd'hui, notre Group couvre 4 domaines d'expertise complémentaires — du conseil stratégique au développement logiciel, en passant par le design, le dépannage informatique et la vente de matériel.
            </p>

            <ul className="space-y-3 mb-6">
              {[
                "Experts locaux avec standards internationaux",
                "Support disponible 24h/7",
                "Devis gratuit sous 24h",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-slate-700">
                  <CheckCircle2 size={17} className="text-brand-blue-500 mt-0.5 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Right: image grid */}
          <div className="grid grid-cols-2 gap-4">
            <div className="relative h-56 sm:h-64 rounded-2xl overflow-hidden shadow-card">
              <Image
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=500&h=500&fit=crop"
                alt="Équipe CM Consulting en réunion"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative h-56 sm:h-64 rounded-2xl overflow-hidden shadow-card mt-8">
              <Image
                src="https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=500&h=500&fit=crop&crop=face"
                alt="Consultante CM Consulting"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative h-40 sm:h-48 rounded-2xl overflow-hidden shadow-card -mt-4">
              <Image
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=500&h=400&fit=crop"
                alt="Technicien au travail"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative h-40 sm:h-48 rounded-2xl overflow-hidden shadow-card">
              <Image
                src="https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=500&h=400&fit=crop"
                alt="Design graphique"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          3. MISSION & VISION
      ══════════════════════════════════════════════════ */}
      <section className="bg-gradient-to-b from-slate-50 to-blue-50/20 py-20 lg:py-28">
        <div className="w-full px-6 lg:px-16 xl:px-24">
          <div className="text-center mb-14">
            <div className="flex items-center justify-center gap-3 mb-4">
              <span className="h-px w-10 bg-brand-blue-500" />
              <span className="text-brand-blue-500 text-xs font-semibold uppercase tracking-widest">
                Ce Qui Nous Guide
              </span>
              <span className="h-px w-10 bg-brand-blue-500" />
            </div>
            <h2 className="font-display text-4xl lg:text-5xl font-bold text-brand-black">
              Mission & Vision
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto">
            {/* Mission */}
            <div className="relative bg-brand-black rounded-3xl p-8 lg:p-10 overflow-hidden">
              <div className="absolute top-0 right-0 w-52 h-52 bg-brand-blue-500/10 rounded-full blur-2xl pointer-events-none" />
              <div className="relative z-10">
                <div className="w-12 h-12 rounded-xl bg-brand-blue-500/15 border border-brand-blue-500/30 flex items-center justify-center mb-6">
                  <Target size={22} className="text-brand-blue-400" />
                </div>
                <p className="text-brand-blue-400 text-xs font-bold uppercase tracking-widest mb-3">
                  Notre Mission
                </p>
                <h3 className="font-display text-2xl font-bold text-white mb-4 leading-snug">
                  Accélérer la Croissance des Entreprises et Startups
                </h3>
                <p className="text-white/55 leading-relaxed text-sm">
                  Offrir aux entreprises un accès à une expertise de classe mondiale — conseil, technologie, design et digital — pour les aider à croître, se structurer et rayonner avec confiance.
                </p>
              </div>
            </div>

            {/* Vision */}
            <div className="relative bg-white border border-slate-100 rounded-3xl p-8 lg:p-10 shadow-card overflow-hidden">
              <div className="absolute bottom-0 right-0 w-40 h-40 bg-brand-blue-500/5 rounded-full blur-2xl pointer-events-none" />
              <div className="relative z-10">
                <div className="w-12 h-12 rounded-xl bg-brand-black flex items-center justify-center mb-6">
                  <Eye size={22} className="text-brand-blue-400" />
                </div>
                <p className="text-brand-blue-500 text-xs font-bold uppercase tracking-widest mb-3">
                  Notre Vision
                </p>
                <h3 className="font-display text-2xl font-bold text-brand-black mb-4 leading-snug">
                  Le Partenaire de Référence
                </h3>
                <p className="text-slate-500 leading-relaxed text-sm">
                  Devenir le Group de services le plus fiable et le plus complet d'Afrique — reconnu pour l'intégrité de nos équipes, la qualité de nos livrables, et l'impact positif que nous créons dans chaque entreprise accompagnée.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          4. NOS DIVISIONS — 4 cards, 2-col on mobile
      ══════════════════════════════════════════════════ */}
      <section className="bg-white py-20 lg:py-28">
        <div className="w-full px-6 lg:px-16 xl:px-24">
          <div className="text-center mb-14">
            <div className="flex items-center justify-center gap-3 mb-4">
              <span className="h-px w-10 bg-brand-blue-500" />
              <span className="text-brand-blue-500 text-xs font-semibold uppercase tracking-widest">
                Notre Group
              </span>
              <span className="h-px w-10 bg-brand-blue-500" />
            </div>
            <h2 className="font-display text-4xl lg:text-5xl font-bold text-brand-black mb-4">
              Nos 4 Divisions
            </h2>
            <p className="text-slate-500 max-w-xl mx-auto text-sm leading-relaxed">
              Chaque division est spécialisée dans son domaine, avec des experts dédiés. Ensemble, elles forment un Group complet capable de couvrir tous vos besoins.
            </p>
          </div>

          {/* 1-col → 2-col → 4-col */}
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5 lg:gap-6">
            {divisions.map(({ icon, name, subtitle, desc, color, iconBg, href, facebook }) => (
              <div
                key={name}
                className={`group border rounded-2xl p-6 lg:p-7 hover:shadow-card-lg transition-all duration-300 flex flex-col ${color}`}
              >
                {/* Icon + Facebook link */}
                <div className="flex items-start justify-between mb-5">
                  <div className={`w-12 h-12 rounded-xl border flex items-center justify-center shrink-0 ${iconBg}`}>
                    {icon}
                  </div>
                  {facebook && (
                    <a
                      href={facebook}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-slate-400 hover:text-brand-blue-400 transition-colors text-xs font-medium"
                    >
                      Facebook →
                    </a>
                  )}
                </div>

                <h3 className="font-display text-lg font-bold text-brand-black mb-1">{name}</h3>
                <p className="text-xs text-slate-400 mb-3 italic">{subtitle}</p>
                <p className="text-slate-500 text-sm leading-relaxed mb-5 flex-1">{desc}</p>

                <Link
                  href={href}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-brand-blue-500 hover:gap-2.5 transition-all duration-200 mt-auto"
                >
                  Découvrir <ArrowRight size={13} />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          5. NOTRE HISTOIRE (TIMELINE)
      ══════════════════════════════════════════════════ */}
      <section className="bg-brand-black py-20 lg:py-28">
        <div className="w-full px-6 lg:px-16 xl:px-24">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-3 mb-4">
              <span className="h-px w-10 bg-brand-blue-500" />
              <span className="text-brand-blue-500 text-xs font-semibold uppercase tracking-widest">
                Notre Parcours
              </span>
              <span className="h-px w-10 bg-brand-blue-500" />
            </div>
            <h2 className="font-display text-4xl lg:text-5xl font-bold text-white">
              Notre Histoire
            </h2>
          </div>

          <div className="relative max-w-4xl mx-auto">
            {/* Vertical line — desktop only */}
            <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-brand-blue-500/50 via-brand-blue-500/20 to-transparent hidden md:block" />

            <div className="space-y-8 lg:space-y-10">
              {milestones.map(({ year, title, desc }, i) => (
                <div
                  key={year}
                  className={`relative grid grid-cols-1 md:grid-cols-2 gap-5 lg:gap-6 items-center ${
                    i % 2 === 0 ? "" : "md:[&>*:first-child]:order-2"
                  }`}
                >
                  {/* Content card */}
                  <div
                    className={`bg-brand-darkgray border border-white/8 rounded-2xl p-5 lg:p-6 ${
                      i % 2 === 0 ? "md:text-right md:pr-12" : "md:pl-12"
                    }`}
                  >
                    <span className="inline-block text-brand-blue-500 text-xs font-bold uppercase tracking-widest mb-2">
                      {year}
                    </span>
                    <h3 className="font-display text-lg font-bold text-white mb-2">{title}</h3>
                    <p className="text-white/45 text-sm leading-relaxed">{desc}</p>
                  </div>

                  {/* Center dot */}
                  <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-5 h-5 rounded-full bg-brand-blue-500 border-4 border-brand-black z-10 items-center justify-center">
                    <div className="w-2 h-2 rounded-full bg-white" />
                  </div>

                  {/* Empty column for alternating layout */}
                  <div />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          6. NOS VALEURS
      ══════════════════════════════════════════════════ */}
      <section className="bg-white py-20 lg:py-28">
        <div className="w-full px-6 lg:px-16 xl:px-24">
          <div className="text-center mb-14">
            <div className="flex items-center justify-center gap-3 mb-4">
              <span className="h-px w-10 bg-brand-blue-500" />
              <span className="text-brand-blue-500 text-xs font-semibold uppercase tracking-widest">
                Ce Qui Nous Définit
              </span>
              <span className="h-px w-10 bg-brand-blue-500" />
            </div>
            <h2 className="font-display text-4xl lg:text-5xl font-bold text-brand-black">
              Nos Valeurs
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-5">
            {values.map(({ icon, title, desc, color }) => (
              <div
                key={title}
                className="group flex gap-4 lg:gap-5 p-5 lg:p-6 rounded-2xl border border-slate-100 hover:border-brand-blue-200 hover:shadow-card transition-all duration-300"
              >
                <div className={`w-11 h-11 rounded-xl border flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300 ${color}`}>
                  {icon}
                </div>
                <div>
                  <h4 className="font-semibold text-brand-black mb-1.5">{title}</h4>
                  <p className="text-slate-500 text-sm leading-relaxed">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          7. ÉQUIPE — 2-col mobile, 4-col desktop
      ══════════════════════════════════════════════════ */}
      <section className="bg-gradient-to-b from-slate-50 to-blue-50/20 py-20 lg:py-28">
        <div className="w-full px-6 lg:px-16 xl:px-24">
          <div className="text-center mb-14">
            <div className="flex items-center justify-center gap-3 mb-4">
              <span className="h-px w-10 bg-brand-blue-500" />
              <span className="text-brand-blue-500 text-xs font-semibold uppercase tracking-widest">
                Les Personnes Derrière CM Group
              </span>
              <span className="h-px w-10 bg-brand-blue-500" />
            </div>
            <h2 className="font-display text-4xl lg:text-5xl font-bold text-brand-black mb-4">
              Notre Équipe de Direction
            </h2>
            <p className="text-slate-500 max-w-lg mx-auto text-sm leading-relaxed">
              Des professionnels passionnés et expérimentés, engagés à faire de votre projet un succès.
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
            {teamMembers.map(({ name, role, image }) => (
              <div key={name} className="group text-center">
                <div className="relative w-full aspect-square rounded-2xl overflow-hidden shadow-card mb-4 border border-slate-100 group-hover:border-brand-blue-300 group-hover:shadow-card-lg transition-all duration-300">
                  <Image
                    src={image}
                    alt={name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-brand-blue-500/0 group-hover:bg-brand-blue-500/10 transition-all duration-300" />
                </div>
                <h4 className="font-display font-bold text-brand-black text-sm sm:text-base leading-tight">{name}</h4>
                <p className="text-slate-400 text-xs mt-1 leading-snug">{role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          8. CTA
      ══════════════════════════════════════════════════ */}
      <section className="relative bg-brand-black py-20 lg:py-24 overflow-hidden">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-brand-blue-500/10 blur-[120px] pointer-events-none" />
        <div className="relative z-10 w-full px-6 lg:px-16 xl:px-24 text-center">
          <div className="inline-flex items-center gap-2 bg-brand-blue-500/10 border border-brand-blue-500/30 rounded-full px-4 py-2 mb-6">
            <span className="w-2 h-2 rounded-full bg-brand-blue-500 animate-pulse" />
            <span className="text-brand-blue-400 text-xs font-semibold uppercase tracking-widest">
              Travaillons Ensemble
            </span>
          </div>
          <h2 className="font-display text-4xl lg:text-5xl font-bold text-white mb-5 leading-tight">
            Vous Avez un Projet ?<br />
            <span className="text-brand-blue-500">Parlons-en.</span>
          </h2>
          <p className="text-white/50 text-base leading-relaxed max-w-xl mx-auto mb-10">
            Que vous soyez une startup, une PME ou une grande entreprise, nous avons la division et l'expertise qu'il vous faut. Consultation initiale gratuite.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-brand-blue-500 hover:bg-brand-blue-400 text-white font-semibold px-8 py-4 rounded-xl transition-all duration-200 shadow-blue hover:-translate-y-0.5 group"
            >
              Demander un Devis Gratuit
              <ArrowRight size={17} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <a
              href="https://wa.me/237694890230"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1ebe59] text-white font-semibold px-8 py-4 rounded-xl transition-all duration-200 hover:-translate-y-0.5"
            >
              <MessageCircle size={17} />
              WhatsApp
            </a>
          </div>
        </div>
      </section>

    </>
  );
}
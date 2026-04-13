import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  BarChart2,
  Wrench,
  Palette,
  Code2,
  ShoppingBag,
  Cloud,
  ArrowRight,
  CheckCircle2,
  MessageCircle,
  ChevronRight,
  Monitor,
  Smartphone,
  Globe,
  Layers,
  Database,
  Lock,
  Printer,
  Layout,
  PenTool,
  TrendingUp,
  FileText,
  Settings,
  Wifi,
  HardDrive,
  Package,
  Server,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Nos Services — CM Consulting",
  description:
    "Découvrez tous les services de CM Consulting : conseil stratégique, dépannage informatique, création graphique, développement logiciel, vente de matériel et solutions cloud à Douala, Cameroun.",
};

/* ─────────────────────────────────────────────────────────
   DATA — All 6 service divisions in full detail
───────────────────────────────────────────────────────── */
const divisions = [
  /* ── 1. Conseil & Stratégie ─────────────────────────── */
  {
    id:         "conseil",
    icon:       <BarChart2 size={28} />,
    name:       "Conseil & Stratégie d'Entreprise",
    nameEn:     "Business Consulting & Strategy",
    brand:      "CM Consulting",
    tagline:    "Nous vous aidons à voir clair et à avancer vite.",
    color:      "brand-blue",
    borderColor:"border-brand-blue-500/30",
    bgColor:    "bg-brand-blue-500/5",
    iconBg:     "bg-brand-blue-500 text-white",
    accentText: "text-brand-blue-500",
    image:      "https://images.unsplash.com/photo-1556761175-4b46a572b786?w=800&h=600&fit=crop",
    imageAlt:   "Réunion de conseil stratégique à Douala",
    description:"Depuis 2012, notre division conseil accompagne les dirigeants, entrepreneurs et PME camerounaises dans la définition de leur cap stratégique et la mise en œuvre de plans d'action concrets. Nous apportons un regard extérieur rigoureux, des méthodes éprouvées, et une connaissance fine du marché africain.",
    services: [
      { icon: <TrendingUp size={17} />,  title: "Stratégie de Croissance",        desc: "Définition de votre positionnement, de vos marchés cibles et de votre plan de développement à court, moyen et long terme." },
      { icon: <FileText size={17} />,    title: "Business Plan & Études",          desc: "Rédaction de business plans, études de faisabilité et analyses de marché pour vos projets de création ou de développement." },
      { icon: <Settings size={17} />,    title: "Optimisation Opérationnelle",     desc: "Audit de vos processus internes, identification des inefficacités et mise en place de solutions pour gagner en productivité." },
      { icon: <Users size={17} />,       title: "Développement Commercial",        desc: "Construction de votre stratégie commerciale, formation des équipes de vente et accompagnement à la prospection." },
      { icon: <BarChart2 size={17} />,   title: "Tableau de Bord & Reporting",     desc: "Mise en place d'indicateurs clés (KPIs) et d'outils de pilotage pour suivre vos performances en temps réel." },
      { icon: <Layers size={17} />,      title: "Restructuration d'Entreprise",    desc: "Accompagnement dans les phases de transformation, fusion, repositionnement ou redressement stratégique." },
    ],
    facebook: "https://web.facebook.com/CMConsultingSarl",
  },

  /* ── 2. Informatique & Dépannage ────────────────────── */
  {
    id:         "depannage",
    icon:       <Wrench size={28} />,
    name:       "Informatique & Dépannage",
    nameEn:     "IT Support & Repair",
    brand:      "CM Tech",
    tagline:    "Votre équipement en panne ? Nous intervenons rapidement.",
    color:      "orange",
    borderColor:"border-orange-500/30",
    bgColor:    "bg-orange-500/5",
    iconBg:     "bg-orange-500 text-white",
    accentText: "text-orange-500",
    image:      "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800&h=600&fit=crop",
    imageAlt:   "Technicien en dépannage informatique",
    description:"CM Tech est notre centre de maintenance de system informatique . Nous intervenons sur tout type d'équipement — ordinateurs, téléphones, imprimantes, réseaux — avec des délais courts et des tarifs transparents. Notre priorité : remettre votre activité en marche le plus vite possible.",
    services: [
      { icon: <Monitor size={17} />,    title: "Réparation Ordinateurs",          desc: "Diagnostic et réparation de PC de bureau et portables : écran, clavier, carte mère, disque dur, batterie, refroidissement." },
      { icon: <Smartphone size={17} />, title: "Réparation Téléphones",           desc: "Remplacement d'écrans, batteries, connecteurs de charge sur toutes marques : Samsung, iPhone, Tecno, Infinix, Itel..." },
      { icon: <Printer size={17} />,    title: "Imprimantes & Périphériques",     desc: "Entretien, rechargement de cartouches, réparation d'imprimantes et de tous vos périphériques de bureau." },
      { icon: <Wifi size={17} />,       title: "Réseaux & Connectivité",          desc: "Installation et configuration de réseaux Wi-Fi, câblés, VPN et systèmes de partage de connexion pour entreprises." },
      { icon: <HardDrive size={17} />,  title: "Récupération de Données",         desc: "Récupération de fichiers sur disques durs défaillants, clés USB, cartes mémoire et téléphones endommagés." },
      { icon: <Settings size={17} />,   title: "Maintenance Préventive",          desc: "Contrats de maintenance pour entreprises : nettoyage, mises à jour, sauvegardes régulières et suivi proactif." },
    ],
    facebook: "https://web.facebook.com/dpanneur",
  },

  /* ── 3. Création Graphique ──────────────────────────── */
  {
    id:         "graphique",
    icon:       <Palette size={28} />,
    name:       "Création Graphique & Communication",
    nameEn:     "Graphic Design & Communication",
    brand:      "CM Graphic",
    tagline:    "Une image vaut mille mots. La vôtre doit être parfaite.",
    color:      "pink",
    borderColor:"border-pink-500/30",
    bgColor:    "bg-pink-500/5",
    iconBg:     "bg-pink-500 text-white",
    accentText: "text-pink-500",
    image:      "https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=800&h=600&fit=crop",
    imageAlt:   "Création graphique et design",
    description:"CM Graphic est notre studio de design créatif. Nous aidons les entreprises camerounaises à se distinguer par une identité visuelle professionnelle, cohérente et mémorable. Du logo à l'habillage complet, nous donnons vie à votre marque avec talent et rigueur.",
    services: [
      { icon: <PenTool size={17} />,    title: "Création de Logo & Identité",     desc: "Conception de logos professionnels, chartes graphiques, palettes de couleurs et typographies pour votre marque." },
      { icon: <Layout size={17} />,     title: "Supports Print",                  desc: "Flyers, affiches, banners, roll-up, cartes de visite, brochures, catalogues et tous vos supports imprimés." },
      { icon: <Globe size={17} />,      title: "Visuels Réseaux Sociaux",         desc: "Création de templates, publications et couvertures optimisés pour Facebook, Instagram, WhatsApp et LinkedIn." },
      { icon: <Package size={17} />,    title: "Packaging & Étiquettes",          desc: "Conception de packaging produit, étiquettes, boîtes et habillages pour vos produits commerciaux." },
      { icon: <Printer size={17} />,    title: "Impression & Production",         desc: "Service d'impression de qualité professionnelle sur tous supports : bâches, kakémonos, autocollants, t-shirts..." },
      { icon: <Monitor size={17} />,    title: "Motion Design & Vidéo",           desc: "Création de vidéos promotionnelles, animations, intros YouTube et contenus animés pour vos réseaux sociaux." },
    ],
    facebook: "https://web.facebook.com/CMGraphicOfficiel",
  },

  /* ── 4. Développement Logiciel ──────────────────────── */
  {
    id:         "dev",
    icon:       <Code2 size={28} />,
    name:       "Développement Logiciel & Digital",
    nameEn:     "Software & Digital Development",
    brand:      "CM Dev",
    tagline:    "Des solutions digitales qui travaillent pour vous 24h/24.",
    color:      "green",
    borderColor:"border-green-500/30",
    bgColor:    "bg-green-500/5",
    iconBg:     "bg-green-600 text-white",
    accentText: "text-green-600",
    image:      "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800&h=600&fit=crop",
    imageAlt:   "Développement web et mobile",
    description:"Notre équipe de développeurs crée des solutions digitales sur mesure pour les entreprises qui veulent aller plus loin. Sites web professionnels, applications mobiles, logiciels métier — nous transformons vos idées en produits fonctionnels, performants et évolutifs, adaptés au contexte camerounais (Mobile Money, offline mode, faible débit).",
    services: [
      { icon: <Globe size={17} />,      title: "Sites Web Professionnels",        desc: "Création de sites vitrines, institutionnels et corporate modernes, rapides, optimisés SEO et adaptés au mobile." },
      { icon: <ShoppingBag size={17} />, title: "E-Commerce & Boutiques",         desc: "Développement de boutiques en ligne avec intégration Mobile Money (MTN, Orange), paiement carte et gestion des commandes." },
      { icon: <Smartphone size={17} />, title: "Applications Mobiles",            desc: "Développement d'applications Android et iOS pour vos clients, collaborateurs ou la gestion interne de votre activité." },
      { icon: <Database size={17} />,   title: "Logiciels Métier Sur Mesure",     desc: "Développement d'ERP, CRM, systèmes de gestion de stock, de facturation et tout logiciel adapté à votre secteur." },
      { icon: <Layout size={17} />,     title: "Interfaces UI/UX",                desc: "Conception d'interfaces utilisateur intuitives et modernes pour vos applications web et mobiles." },
      { icon: <Settings size={17} />,   title: "Maintenance & Évolution",         desc: "Maintenance de vos applications existantes, correction de bugs, ajout de fonctionnalités et montées en version." },
    ],
    facebook: null,
  },

  /* ── 5. CM Shop ─────────────────────────────────────── */
  {
    id:         "shop",
    icon:       <ShoppingBag size={28} />,
    name:       "CM Shop — Vente de Matériel",
    nameEn:     "CM Shop — Hardware Sales",
    brand:      "CM Shop 237",
    tagline:    "Du matériel de qualité, au meilleur prix à Douala.",
    color:      "yellow",
    borderColor:"border-yellow-500/30",
    bgColor:    "bg-yellow-500/5",
    iconBg:     "bg-yellow-500 text-white",
    accentText: "text-yellow-600",
    image:      "https://images.unsplash.com/photo-1491933382434-500287f9b54b?w=800&h=600&fit=crop",
    imageAlt:   "Boutique informatique CM Shop Douala",
    description:"CM Shop est notre boutique spécialisée dans la vente de matériel informatique, téléphones, accessoires et consommables. Nous sélectionnons des produits de qualité à des prix compétitifs, avec la garantie d'un service après-vente assuré par nos techniciens D-Panneur. Livraison disponible dans tout Douala et sur commande nationale.",
    services: [
      { icon: <Monitor size={17} />,    title: "Ordinateurs & Portables",         desc: "Vente de PC de bureau, ordinateurs portables neufs et reconditionnés de toutes marques : HP, Dell, Lenovo, Asus, Acer." },
      { icon: <Smartphone size={17} />, title: "Téléphones & Tablettes",          desc: "Smartphones Android et iOS, tablettes et accessoires. Marques locales et internationales disponibles en stock." },
      { icon: <Printer size={17} />,    title: "Imprimantes & Scanners",          desc: "Imprimantes jet d'encre, laser, multifonctions et scanners pour usage bureau et professionnel." },
      { icon: <Wifi size={17} />,       title: "Réseaux & Connectivité",          desc: "Routeurs, switch, câbles réseau, clés 4G, modems et tout le matériel pour votre infrastructure réseau." },
      { icon: <Package size={17} />,    title: "Accessoires & Consommables",      desc: "Cartouches, tonners, câbles, housses, claviers, souris, écrans, webcams et tous vos accessoires informatiques." },
      { icon: <HardDrive size={17} />,  title: "Stockage & Sauvegarde",           desc: "Disques durs internes et externes, SSD, clés USB, cartes mémoire et solutions de sauvegarde NAS." },
    ],
    facebook: "https://web.facebook.com/CMShop237",
  },

  /* ── 6. Solutions Cloud ─────────────────────────────── */
  {
    id:         "cloud",
    icon:       <Cloud size={28} />,
    name:       "Solutions Cloud & Cybersécurité",
    nameEn:     "Cloud Solutions & Cybersecurity",
    brand:      "CM Cloud",
    tagline:    "Vos données en sécurité, votre business toujours en ligne.",
    color:      "purple",
    borderColor:"border-purple-500/30",
    bgColor:    "bg-purple-500/5",
    iconBg:     "bg-purple-600 text-white",
    accentText: "text-purple-600",
    image:      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=600&fit=crop",
    imageAlt:   "Solutions cloud et infrastructure",
    description:"À l'ère du digital, votre infrastructure informatique doit être fiable, sécurisée et disponible en permanence. Notre équipe cloud vous accompagne dans l'hébergement de vos sites, la migration vers le cloud, la protection de vos données et la mise en place de systèmes résilients adaptés à votre budget.",
    services: [
      { icon: <Server size={17} />,     title: "Hébergement Web & Emails",        desc: "Hébergement de sites web, serveurs mail professionnels, domaines .cm et internationaux avec support local." },
      { icon: <Cloud size={17} />,      title: "Migration Cloud",                 desc: "Migration de votre infrastructure locale vers AWS, Google Cloud ou Azure avec accompagnement complet et sans interruption." },
      { icon: <Database size={17} />,   title: "Sauvegarde & Reprise",            desc: "Mise en place de sauvegardes automatiques, plans de reprise d'activité (PRA) et solutions de haute disponibilité." },
      { icon: <Lock size={17} />,       title: "Cybersécurité",                   desc: "Audit de sécurité, installation d'antivirus, pare-feu, VPN et formation de vos équipes aux bonnes pratiques." },
      { icon: <Settings size={17} />,   title: "Administration Système",          desc: "Gestion et maintenance de vos serveurs, mise à jour, monitoring et support technique 24h/24." },
      { icon: <Globe size={17} />,      title: "Noms de Domaine & SSL",           desc: "Enregistrement de domaines, certificats SSL, configuration DNS et gestion complète de votre présence en ligne." },
    ],
    facebook: null,
  },
];

/* Icons used in service details */
function Users({ size }: { size: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  );
}

/* ─────────────────────────────────────────────────────────
   PAGE
───────────────────────────────────────────────────────── */
export default function ServicesPage() {
  return (
    <>

      {/* ══════════════════════════════════════════════════
          1. PAGE HEADER
      ══════════════════════════════════════════════════ */}
      <section className="relative bg-brand-black pt-44 pb-24 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=1920&h=800&fit=crop"
            alt="Services CM Consulting Douala"
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
              Ce Que Nous Offrons
            </span>
          </div>
          <h1 className="font-display text-5xl lg:text-6xl text-white font-bold max-w-3xl leading-tight mb-6">
            Des Services Complets Pour{" "}
            <span className="text-brand-blue-500">Chaque Besoin</span>
          </h1>
          <p className="text-white/55 text-lg max-w-2xl leading-relaxed mb-10">
            6 divisions spécialisées, une seule adresse. CM Consulting couvre l'intégralité de vos besoins en conseil, technologie, design et digital à Douala et dans tout le Cameroun.
          </p>

          {/* Quick jump links */}
          <div className="flex flex-wrap gap-3">
            {divisions.map(({ id, name, accentText }) => (
              <a
                key={id}
                href={`#${id}`}
                className={`text-xs font-semibold px-4 py-2 rounded-full border border-white/10 bg-white/5 hover:bg-white/10 text-white/60 hover:text-white transition-all duration-200`}
              >
                {name.split(" — ")[0].split(" & ")[0]}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          2. SERVICES OVERVIEW CARDS
      ══════════════════════════════════════════════════ */}
      <section className="bg-white py-20">
        <div className="w-full px-6 lg:px-16 xl:px-24">
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-5">
            {divisions.map(({ id, icon, name, tagline, iconBg, borderColor, bgColor, accentText }) => (
              <a
                key={id}
                href={`#${id}`}
                className={`group flex items-start gap-4 p-5 rounded-2xl border transition-all duration-300 hover:shadow-card ${borderColor} ${bgColor} hover:scale-[1.02]`}
              >
                <div className={`w-11 h-11 rounded-xl flex items-center justify-center shrink-0 ${iconBg} group-hover:scale-110 transition-transform duration-300`}>
                  {icon}
                </div>
                <div>
                  <h3 className="font-display font-bold text-brand-black text-sm leading-snug mb-1">
                    {name.split(" — ")[0]}
                  </h3>
                  <p className="text-xs text-slate-400 leading-relaxed">{tagline}</p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          3. EACH DIVISION — FULL DETAIL SECTIONS
      ══════════════════════════════════════════════════ */}
      {divisions.map(({ id, icon, name, nameEn, brand, tagline, description, services, image, imageAlt, iconBg, borderColor, bgColor, accentText, facebook }, divIdx) => (
        <section
          key={id}
          id={id}
          className={`py-28 ${divIdx % 2 === 0 ? "bg-white" : "bg-gradient-to-b from-slate-50 to-blue-50/10"}`}
        >
          <div className="w-full px-6 lg:px-16 xl:px-24">

            {/* Section header */}
            <div className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-16 ${divIdx % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""}`}>

              {/* Image */}
              <div className={`relative h-[420px] rounded-3xl overflow-hidden shadow-card-lg ${divIdx % 2 === 1 ? "lg:order-1" : ""}`}>
                <Image
                  src={image}
                  alt={imageAlt}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-black/50 to-transparent" />

                {/* Brand badge */}
                <div className="absolute bottom-5 left-5 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl px-4 py-2">
                  <p className="text-white font-semibold text-sm">{brand}</p>
                  <p className="text-white/55 text-xs">{nameEn}</p>
                </div>

                {/* Icon badge */}
                <div className={`absolute top-5 right-5 w-12 h-12 rounded-xl flex items-center justify-center ${iconBg}`}>
                  {icon}
                </div>
              </div>

              {/* Text */}
              <div className={divIdx % 2 === 1 ? "lg:order-2" : ""}>
                <div className="flex items-center gap-3 mb-4">
                  <span className="h-px w-10 bg-brand-blue-500" />
                  <span className={`text-xs font-bold uppercase tracking-widest ${accentText}`}>
                    {brand}
                  </span>
                </div>

                <h2 className="font-display text-3xl lg:text-4xl font-bold text-brand-black leading-tight mb-3">
                  {name}
                </h2>
                <p className={`text-sm font-medium italic mb-5 ${accentText}`}>{tagline}</p>
                <p className="text-slate-500 leading-relaxed mb-6 text-sm">{description}</p>

                <div className="flex flex-wrap gap-3">
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 bg-brand-black hover:bg-brand-darkgray text-white font-semibold px-6 py-3 rounded-xl text-sm transition-all duration-200 hover:-translate-y-0.5 group"
                  >
                    Demander un Devis
                    <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
                  </Link>
                  <a
                    href="https://wa.me/237694890230"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1ebe59] text-white font-semibold px-6 py-3 rounded-xl text-sm transition-all duration-200"
                  >
                    <MessageCircle size={15} />
                    WhatsApp
                  </a>
                  {facebook && (
                    <a
                      href={facebook}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-brand-black border border-slate-200 hover:border-brand-blue-300 hover:text-brand-blue-500 font-semibold px-5 py-3 rounded-xl text-sm transition-all duration-200"
                    >
                      Notre Page Facebook →
                    </a>
                  )}
                </div>
              </div>
            </div>

            {/* Services sub-grid */}
            <div className={`border rounded-2xl p-6 lg:p-8 ${borderColor} ${bgColor}`}>
              <p className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-6">
                Ce que nous proposons dans cette division
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {services.map(({ icon: sIcon, title, desc }: { icon: React.ReactNode; title: string; desc: string }) => (
                  <div
                    key={title}
                    className="group bg-white rounded-xl p-5 border border-slate-100 hover:border-brand-blue-200 hover:shadow-card transition-all duration-300"
                  >
                    <div className="flex items-center gap-3 mb-3">
                      <div className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 text-white ${iconBg}`}>
                        {sIcon}
                      </div>
                      <h4 className="font-semibold text-brand-black text-sm leading-snug">{title}</h4>
                    </div>
                    <p className="text-slate-500 text-xs leading-relaxed">{desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* ══════════════════════════════════════════════════
          4. WHY CM CONSULTING
      ══════════════════════════════════════════════════ */}
      <section className="bg-brand-black py-24">
        <div className="w-full px-6 lg:px-16 xl:px-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

            <div>
              <div className="flex items-center gap-3 mb-4">
                <span className="h-px w-10 bg-brand-blue-500" />
                <span className="text-brand-blue-500 text-xs font-semibold uppercase tracking-widest">
                  Pourquoi Nous Choisir
                </span>
              </div>
              <h2 className="font-display text-4xl lg:text-5xl font-bold text-white leading-tight mb-6">
                Tout Sous{" "}
                <span className="text-brand-blue-500">Un Même Toit</span>
              </h2>
              <p className="text-white/55 leading-relaxed mb-8">
                Plutôt que de gérer plusieurs prestataires, CM Consulting vous offre un guichet unique pour tous vos besoins. Conseil, tech, design, matériel — une seule équipe, une seule facture, un seul interlocuteur.
              </p>
              <ul className="space-y-3 mb-10">
                {[
                  "Groupe 100% camerounais, ancré dans la réalité locale",
                  "6 divisions spécialisées sous un même management",
                  "Suivi client personnalisé et réactif",
                  "Tarifs adaptés aux budgets des PME africaines",
                  "Devis gratuit sous 24h, sans engagement",
                  "Service après-vente garanti sur toutes nos prestations",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-white/65">
                    <CheckCircle2 size={17} className="text-brand-blue-500 mt-0.5 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Stats grid */}
            <div className="grid grid-cols-2 gap-5">
              {[
                { value: "12+",  label: "Ans d'Expérience",    sub: "Depuis 2012 à Douala" },
                { value: "200+", label: "Projets Réalisés",     sub: "Clients satisfaits" },
                { value: "6",    label: "Divisions Actives",    sub: "Services complets" },
                { value: "98%",  label: "Taux de Satisfaction", sub: "Clients fidèles" },
              ].map(({ value, label, sub }) => (
                <div
                  key={label}
                  className="bg-brand-darkgray border border-white/8 rounded-2xl p-6 text-center hover:border-brand-blue-500/30 transition-colors duration-300"
                >
                  <div className="font-display text-4xl font-bold text-brand-blue-500 mb-1">{value}</div>
                  <div className="text-white text-sm font-semibold mb-1">{label}</div>
                  <div className="text-white/35 text-xs">{sub}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          5. CTA FINAL
      ══════════════════════════════════════════════════ */}
      <section className="relative bg-white py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-blue-50/30 to-white" />
        <div className="relative z-10 w-full px-6 lg:px-16 xl:px-24 text-center">
          <div className="inline-flex items-center gap-2 bg-brand-blue-500/10 border border-brand-blue-500/30 rounded-full px-4 py-2 mb-6">
            <span className="w-2 h-2 rounded-full bg-brand-blue-500 animate-pulse" />
            <span className="text-brand-blue-500 text-xs font-semibold uppercase tracking-widest">
              Commençons Maintenant
            </span>
          </div>

          <h2 className="font-display text-4xl lg:text-5xl font-bold text-brand-black mb-5 leading-tight">
            Quel Service Vous Intéresse ?
          </h2>
          <p className="text-slate-500 text-base leading-relaxed max-w-xl mx-auto mb-10">
            Contactez-nous pour une consultation gratuite. Nous analyserons vos besoins et vous proposerons la solution la plus adaptée, dans les meilleurs délais.
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
              Discuter sur WhatsApp
            </a>
            <a
              href="tel:+237694890230"
              className="inline-flex items-center gap-2 text-brand-black border border-slate-200 hover:border-brand-blue-400 hover:text-brand-blue-500 font-semibold px-8 py-4 rounded-xl text-sm transition-all duration-200"
            >
              📞 Nous Appeler Directement
            </a>
          </div>
        </div>
      </section>

    </>
  );
}
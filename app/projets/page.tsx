"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  BarChart2,
  Wrench,
  Palette,
  Code2,
  ShoppingBag,
  Cloud,
  MessageCircle,
  MapPin,
  Calendar,
  Star,
  ChevronRight,
  Search,
  SlidersHorizontal,
  Grid3X3,
  List,
  TrendingUp,
  Users,
  Award,
  Target,
  ExternalLink,
  X,
} from "lucide-react";

/* ─────────────────────────────────────────────────────────
   ANIMATION HELPERS
───────────────────────────────────────────────────────── */
const fadeUp = (delay = 0) => ({
  initial:     { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport:    { once: true, margin: "-60px" },
  transition:  { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] },
});

const BRAND_BLUE = "#29ABE2";

/* ─────────────────────────────────────────────────────────
   CATEGORIES
───────────────────────────────────────────────────────── */
const CATEGORIES = [
  { id: "all",       label: "Tous les Projets", icon: <Grid3X3 size={14} /> },
  { id: "conseil",   label: "Conseil & Stratégie", icon: <BarChart2 size={14} /> },
  { id: "dev",       label: "Dev Logiciel",    icon: <Code2 size={14} /> },
  { id: "graphique", label: "Graphisme",        icon: <Palette size={14} /> },
  { id: "cloud",     label: "Cloud & Infra",   icon: <Cloud size={14} /> },
  { id: "depannage", label: "Dépannage IT",    icon: <Wrench size={14} /> },
  { id: "shop",      label: "Boutique",        icon: <ShoppingBag size={14} /> },
];

/* ─────────────────────────────────────────────────────────
   40 PROJECTS DATA
   — All images: professional, relevant, real Unsplash URLs
───────────────────────────────────────────────────────── */
const projects = [
  /* ── CONSEIL (10) ── */
  {
    id: 1,
    featured: true,
    category: "conseil",
    client: "Groupe Horizon Douala",
    title: "Stratégie de transformation digitale & plan de croissance 3 ans",
    description: "Accompagnement complet d'un groupe industriel dans sa transformation numérique. Audit organisationnel, feuille de route digitale et formation des dirigeants.",
    image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&h=500&fit=crop",
    tags: ["Stratégie", "Transformation digitale", "Management"],
    metrics: [{ value: "+40%", label: "Efficacité" }, { value: "6 mois", label: "Durée" }, { value: "12", label: "Livrables" }],
    location: "Douala", date: "Mars 2024",
    testimonial: { quote: "Une équipe exceptionnelle qui a transformé notre vision en résultats concrets.", author: "Marie-Claire Ngo", role: "Directrice Générale" },
  },
  {
    id: 2,
    category: "conseil",
    client: "Banque Atlantique Cameroun",
    title: "Plan stratégique de développement commercial 2024–2027",
    description: "Élaboration d'un plan de développement commercial ambitieux incluant l'analyse de marché, la segmentation clientèle et les axes de croissance prioritaires.",
    image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=800&h=500&fit=crop",
    tags: ["Finance", "Stratégie", "Business plan"],
    metrics: [{ value: "3 ans", label: "Horizon" }, { value: "5", label: "Axes stratégiques" }],
    location: "Douala", date: "Janv. 2024",
  },
  {
    id: 3,
    category: "conseil",
    client: "SCDP Cameroun",
    title: "Réorganisation structurelle et optimisation des processus internes",
    description: "Diagnostic organisationnel complet, cartographie des processus métier et déploiement d'un nouveau modèle opérationnel pour gagner en agilité.",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=500&fit=crop",
    tags: ["Organisation", "Process", "Change management"],
    location: "Yaoundé", date: "Nov. 2023",
  },
  {
    id: 4,
    category: "conseil",
    client: "StartupLab Cameroun",
    title: "Programme d'accélération pour 15 startups camerounaises",
    description: "Conception et animation d'un programme d'accélération sur 3 mois : mentorat, ateliers stratégiques, pitch training et mise en réseau avec les investisseurs.",
    image: "https://images.unsplash.com/photo-1556761175-4b46a572b786?w=800&h=500&fit=crop",
    tags: ["Startup", "Accompagnement", "Pitch"],
    location: "Douala", date: "Oct. 2023",
  },
  {
    id: 5,
    category: "conseil",
    client: "Mairie de Bafoussam",
    title: "Étude de faisabilité pour un parc technologique régional",
    description: "Étude complète de faisabilité technique, financière et organisationnelle pour la création d'un hub technologique dans la région de l'Ouest.",
    image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=800&h=500&fit=crop",
    tags: ["Secteur public", "Étude", "Tech hub"],
    location: "Bafoussam", date: "Juil. 2023",
  },
  {
    id: 6,
    category: "conseil",
    client: "Agro-Industries NKAM",
    title: "Stratégie d'expansion et d'entrée sur les marchés CEMAC",
    description: "Analyse des marchés de la CEMAC, identification des opportunités d'expansion et élaboration d'une stratégie d'internationalisation progressive.",
    image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=800&h=500&fit=crop",
    tags: ["Export", "CEMAC", "Expansion"],
    location: "Douala", date: "Mai 2023",
  },
  {
    id: 7,
    category: "conseil",
    client: "Hôtel Le Diplomate",
    title: "Plan de relance et repositionnement stratégique post-Covid",
    description: "Diagnostic complet de la situation post-pandémique, nouveau positionnement de marque, stratégie tarifaire et plan d'action commerciale sur 18 mois.",
    image: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=800&h=500&fit=crop",
    tags: ["Tourisme", "Relance", "Branding"],
    location: "Yaoundé", date: "Mar. 2023",
  },
  {
    id: 8,
    category: "conseil",
    client: "Clinique Sainte-Marie",
    title: "Restructuration financière et plan de développement santé",
    description: "Audit financier, restructuration de la dette, et plan de développement pour l'extension des services médicaux et l'acquisition d'équipements.",
    image: "https://images.unsplash.com/photo-1504813184591-01572f98c85f?w=800&h=500&fit=crop",
    tags: ["Santé", "Finance", "Restructuration"],
    location: "Douala", date: "Fév. 2023",
  },
  {
    id: 9,
    category: "conseil",
    client: "Réseau des Femmes d'Affaires",
    title: "Programme de formation en leadership et entrepreneuriat féminin",
    description: "Design et déploiement d'un programme de formation sur 6 mois pour 50 femmes entrepreneures : gestion, leadership, négociation et finance d'entreprise.",
    image: "https://images.unsplash.com/photo-1573497491765-dccce02b29df?w=800&h=500&fit=crop",
    tags: ["Formation", "Leadership", "Femmes"],
    location: "Douala", date: "Sept. 2022",
  },
  {
    id: 10,
    category: "conseil",
    client: "Port Autonome de Douala",
    title: "Étude sur la digitalisation de la chaîne logistique portuaire",
    description: "Analyse des processus logistiques, identification des goulots d'étranglement numériques et feuille de route pour la digitalisation de bout en bout.",
    image: "https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?w=800&h=500&fit=crop",
    tags: ["Logistique", "Digital", "Port"],
    location: "Douala", date: "Juin 2022",
  },

  /* ── DEV LOGICIEL (10) ── */
  {
    id: 11,
    featured: true,
    category: "dev",
    client: "TechStart Cameroun",
    title: "Application mobile e-commerce avec intégration Mobile Money",
    description: "Développement d'une application Android & iOS complète avec catalogue produits, panier, paiement MTN MoMo & Orange Money, livraison et suivi en temps réel.",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&h=500&fit=crop",
    tags: ["React Native", "Mobile Money", "iOS", "Android"],
    metrics: [{ value: "5k+", label: "Utilisateurs" }, { value: "4.8★", label: "App Store" }, { value: "3 mois", label: "Livraison" }],
    location: "Yaoundé", date: "Janv. 2024",
  },
  {
    id: 12,
    category: "dev",
    client: "SuperMarché DOVV",
    title: "Système de gestion de stock et caisse connectée",
    description: "Logiciel de gestion complète (stock, commandes, caisse, fidélité) avec tableau de bord analytics en temps réel, fonctionnement offline et synchronisation cloud.",
    image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&h=500&fit=crop",
    tags: ["Electron", "SQLite", "Node.js", "Dashboard"],
    location: "Douala", date: "Déc. 2023",
  },
  {
    id: 13,
    category: "dev",
    client: "Clinique Sainte-Thérèse",
    title: "Dossier patient électronique et gestion hospitalière",
    description: "Application web de gestion hospitalière : dossiers patients, agenda médecins, facturation, pharmacie interne, rapports statistiques et alertes automatiques.",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&h=500&fit=crop",
    tags: ["Next.js", "PostgreSQL", "Santé", "SaaS"],
    location: "Yaoundé", date: "Oct. 2023",
  },
  {
    id: 14,
    category: "dev",
    client: "École Privée Les Lauriers",
    title: "Plateforme de gestion scolaire et e-learning",
    description: "Portail complet pour la gestion scolaire : inscriptions, bulletins, emplois du temps, communication parents-enseignants, et module de cours en ligne.",
    image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=800&h=500&fit=crop",
    tags: ["Education", "LMS", "Vue.js", "PWA"],
    location: "Douala", date: "Août 2023",
  },
  {
    id: 15,
    category: "dev",
    client: "Transport Express Cameroun",
    title: "Application de réservation de billets de bus en ligne",
    description: "Plateforme de réservation multi-agences avec sélection de siège, paiement mobile, e-billet QR code, et interface d'administration pour les compagnies.",
    image: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=800&h=500&fit=crop",
    tags: ["Transport", "QR Code", "Payment", "React"],
    location: "Douala", date: "Juin 2023",
  },
  {
    id: 16,
    category: "dev",
    client: "Agence Immobilière PRIMUS",
    title: "Site web & plateforme de gestion immobilière",
    description: "Site vitrine avec moteur de recherche avancé, visite virtuelle 360°, module de gestion CRM pour les agents, et espace client sécurisé.",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&h=500&fit=crop",
    tags: ["Immobilier", "Next.js", "CRM", "360°"],
    location: "Douala", date: "Avr. 2023",
  },
  {
    id: 17,
    category: "dev",
    client: "Restaurant Le Wouri",
    title: "Application de commande en ligne et gestion restaurant",
    description: "App web & mobile pour commandes en salle (QR code), livraison à domicile, gestion cuisine en temps réel, rapports de vente et fidélisation clients.",
    image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&h=500&fit=crop",
    tags: ["Restauration", "PWA", "QR", "Analytics"],
    location: "Douala", date: "Fév. 2023",
  },
  {
    id: 18,
    category: "dev",
    client: "ONG SANTE PLUS",
    title: "Système de suivi des bénéficiaires et reporting terrain",
    description: "Application mobile offline-first pour la collecte de données terrain par les agents de santé communautaire, avec synchronisation et tableaux de bord ONG.",
    image: "https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?w=800&h=500&fit=crop",
    tags: ["ONG", "Offline", "Flutter", "Reporting"],
    location: "Yaoundé", date: "Nov. 2022",
  },
  {
    id: 19,
    category: "dev",
    client: "Coopérative Agricole VIFOA",
    title: "Plateforme de vente directe producteur–consommateur",
    description: "Marketplace agricole reliant directement les producteurs camerounais aux acheteurs B2B et B2C, avec gestion des commandes, livraisons et paiements.",
    image: "https://images.unsplash.com/photo-1488459716781-31db52582fe9?w=800&h=500&fit=crop",
    tags: ["Agri-tech", "Marketplace", "B2B", "Python"],
    location: "Bafoussam", date: "Sept. 2022",
  },
  {
    id: 20,
    category: "dev",
    client: "Cabinet RH TALENT237",
    title: "Plateforme de recrutement et gestion des talents",
    description: "Application RH complète : offres d'emploi, CV parsing, suivi des candidatures, tests d'évaluation en ligne, gestion des entretiens et onboarding digital.",
    image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=800&h=500&fit=crop",
    tags: ["RH", "SaaS", "AI", "Recrutement"],
    location: "Douala", date: "Mai 2022",
  },

  /* ── GRAPHISME (8) ── */
  {
    id: 21,
    featured: true,
    category: "graphique",
    client: "Boutique Mode DIVA",
    title: "Identité visuelle complète — logo, charte & campagne lancement",
    description: "Création de l'identité de marque complète : logo animé, charte graphique 40 pages, packaging, supports print, kit réseaux sociaux et campagne d'affichage lancement.",
    image: "https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=800&h=500&fit=crop",
    tags: ["Branding", "Logo", "Print", "Social"],
    metrics: [{ value: "40p", label: "Charte" }, { value: "12", label: "Supports" }, { value: "3 sem.", label: "Délai" }],
    location: "Yaoundé", date: "Fév. 2024",
  },
  {
    id: 22,
    category: "graphique",
    client: "Festival Bikutsi 237",
    title: "Identité visuelle et supports de communication festival",
    description: "Direction artistique complète du festival : affiche principale, programme, billets, kakémonos, scénographie scène, goodies et kit presse.",
    image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=800&h=500&fit=crop",
    tags: ["Événementiel", "Direction artistique", "Print"],
    location: "Douala", date: "Nov. 2023",
  },
  {
    id: 23,
    category: "graphique",
    client: "Brasserie TROPICALE",
    title: "Refonte packaging gamme de boissons premium",
    description: "Redesign complet des emballages de 8 références produits, nouveau positionnement premium, cohérence marque sur tous les formats (canette, bouteille, carton).",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=500&fit=crop",
    tags: ["Packaging", "FMCG", "Premium"],
    location: "Douala", date: "Sept. 2023",
  },
  {
    id: 24,
    category: "graphique",
    client: "Cabinet d'Avocats NKENG & Partners",
    title: "Identité de marque cabinet juridique haut de gamme",
    description: "Création d'une identité institutionnelle sobre et premium : logo, papeterie, site vitrine, plaquette de présentation et signalétique bureau.",
    image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=800&h=500&fit=crop",
    tags: ["Juridique", "Premium", "Institutionnel"],
    location: "Yaoundé", date: "Juil. 2023",
  },
  {
    id: 25,
    category: "graphique",
    client: "Université de Douala — IUT",
    title: "Campagne de communication institutionnelle 2023",
    description: "Conception de la campagne de rentrée académique : affiches, roll-ups, bannières web, vidéo teaser réseaux sociaux et kit communication enseignants.",
    image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800&h=500&fit=crop",
    tags: ["Éducation", "Campagne", "Vidéo"],
    location: "Douala", date: "Juin 2023",
  },
  {
    id: 26,
    category: "graphique",
    client: "Pharmacie SANTE+",
    title: "Refonte identité visuelle réseau de pharmacies",
    description: "Harmonisation de l'identité sur 6 points de vente : nouveau logo, signalétique intérieure/extérieure, uniformes, sacs, et campagne de notoriété locale.",
    image: "https://images.unsplash.com/photo-1587854692152-cbe660dbde88?w=800&h=500&fit=crop",
    tags: ["Santé", "Retail", "Signalétique"],
    location: "Douala", date: "Avr. 2023",
  },
  {
    id: 27,
    category: "graphique",
    client: "Constructeur BATIP",
    title: "Plaquette commerciale et book de réalisations BTP",
    description: "Création d'un book de 60 pages valorisant les réalisations du constructeur : conception éditoriale, traitement photo, iconographie et impression premium.",
    image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=800&h=500&fit=crop",
    tags: ["BTP", "Édition", "Print premium"],
    location: "Douala", date: "Fév. 2023",
  },
  {
    id: 28,
    category: "graphique",
    client: "Startup AGRIPAY",
    title: "Design UI/UX application fintech agricole",
    description: "Conception de l'interface utilisateur et de l'expérience complète de l'application : wireframes, prototype, design system, illustrations et motion design.",
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&h=500&fit=crop",
    tags: ["UI/UX", "Fintech", "Design system"],
    location: "Yaoundé", date: "Oct. 2022",
  },

  /* ── CLOUD & INFRA (6) ── */
  {
    id: 29,
    featured: true,
    category: "cloud",
    client: "Groupe Industriel ALUCAM",
    title: "Migration cloud AWS et infrastructure haute disponibilité",
    description: "Migration complète de l'infrastructure IT vers AWS : 40 serveurs, 3 environnements (dev/staging/prod), CI/CD pipeline, monitoring 24/7 et uptime 99.9% garanti.",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=500&fit=crop",
    tags: ["AWS", "Migration", "DevOps", "CI/CD"],
    metrics: [{ value: "99.9%", label: "Uptime" }, { value: "40", label: "Serveurs" }, { value: "-60%", label: "Coûts IT" }],
    location: "Édéa", date: "Mars 2024",
  },
  {
    id: 30,
    category: "cloud",
    client: "Banque de Crédit Rural",
    title: "Infrastructure cybersécurité et conformité CEMAC",
    description: "Audit de sécurité, déploiement d'un SOC, mise en conformité CEMAC, pare-feu de nouvelle génération, et formation des équipes à la cyberhygiène.",
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&h=500&fit=crop",
    tags: ["Cybersécurité", "SOC", "Conformité", "Firewall"],
    location: "Douala", date: "Fév. 2024",
  },
  {
    id: 31,
    category: "cloud",
    client: "Media Group EQUINOXE",
    title: "Infrastructure vidéo cloud et streaming live",
    description: "Architecture cloud pour la diffusion live de 3 chaînes TV simultanées, CDN multi-régions, encodage automatique et plateforme VOD pour l'Afrique Centrale.",
    image: "https://images.unsplash.com/photo-1478737270239-2f02b77fc618?w=800&h=500&fit=crop",
    tags: ["Streaming", "CDN", "VOD", "Media"],
    location: "Douala", date: "Déc. 2023",
  },
  {
    id: 32,
    category: "cloud",
    client: "Mairie de Yaoundé",
    title: "Datacenter hybride et portail citoyen digital",
    description: "Déploiement d'un datacenter hybride (on-premise + Azure), et portail citoyen pour les services administratifs en ligne avec authentification sécurisée.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=500&fit=crop",
    tags: ["Secteur public", "Azure", "Hybride", "e-Gov"],
    location: "Yaoundé", date: "Oct. 2023",
  },
  {
    id: 33,
    category: "cloud",
    client: "Réseau d'Hôtels SAWA",
    title: "Réseau MPLS inter-hôtels et VoIP centralisée",
    description: "Déploiement d'un réseau MPLS reliant 8 hôtels à travers le Cameroun, centrales téléphoniques IP, Wi-Fi 6 hôtelier et supervision réseau centralisée.",
    image: "https://images.unsplash.com/photo-1606761568499-6d2451b23c66?w=800&h=500&fit=crop",
    tags: ["Réseau", "MPLS", "VoIP", "Wi-Fi 6"],
    location: "National", date: "Août 2023",
  },
  {
    id: 34,
    category: "cloud",
    client: "Microfinance ACCES",
    title: "Sauvegarde cloud et plan de reprise d'activité (PRA)",
    description: "Mise en place d'une solution de sauvegarde 3-2-1, plan de reprise d'activité avec RTO < 4h, et exercices de simulation de crise trimestriels.",
    image: "https://images.unsplash.com/photo-1597852074816-d933c7d2b988?w=800&h=500&fit=crop",
    tags: ["Backup", "PRA", "Résilience", "Microfinance"],
    location: "Bafoussam", date: "Mai 2023",
  },

  /* ── DÉPANNAGE IT (4) ── */
  {
    id: 35,
    category: "depannage",
    client: "Cabinet Notarial FOUDA",
    title: "Maintenance préventive parc informatique — 35 postes",
    description: "Contrat de maintenance préventive sur 35 postes de travail : nettoyage, mise à jour, antivirus, sauvegarde automatisée et hotline dédiée 5j/7.",
    image: "https://images.unsplash.com/photo-1597872200969-2b65d56bd16b?w=800&h=500&fit=crop",
    tags: ["Maintenance", "Parc IT", "Support", "SLA"],
    location: "Yaoundé", date: "En cours 2024",
  },
  {
    id: 36,
    category: "depannage",
    client: "École Internationale BILINGUA",
    title: "Déploiement et administration réseau scolaire",
    description: "Câblage réseau Cat6 de 3 bâtiments, déploiement Active Directory, filtrage web parental, tableau de bord de supervision et formation équipe IT interne.",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&h=500&fit=crop",
    tags: ["Réseau", "Active Directory", "Câblage", "École"],
    location: "Douala", date: "Sept. 2023",
  },
  {
    id: 37,
    category: "depannage",
    client: "PME COTCO",
    title: "Récupération de données après crash serveur critique",
    description: "Intervention d'urgence suite à un crash RAID, récupération de 98% des données, remise en service en 18h, et mise en place d'une solution de réplication temps réel.",
    image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=800&h=500&fit=crop",
    tags: ["Urgence", "Data recovery", "RAID", "Serveur"],
    location: "Douala", date: "Juil. 2023",
  },
  {
    id: 38,
    category: "depannage",
    client: "Résidence PALMIERS",
    title: "Déploiement Wi-Fi résidentiel couvrant 120 appartements",
    description: "Étude de couverture, déploiement de 40 points d'accès, portail captif avec gestion abonnements, support résidents et supervision proactive.",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=500&fit=crop",
    tags: ["Wi-Fi", "Résidentiel", "Captive portal", "FTTH"],
    location: "Douala", date: "Avr. 2023",
  },

  /* ── BOUTIQUE / SHOP (2) ── */
  {
    id: 39,
    category: "shop",
    client: "Lycée Technique de Douala",
    title: "Fourniture équipement informatique — 80 postes laboratoire",
    description: "Appel d'offres remporté pour la fourniture, livraison et installation de 80 PC de laboratoire, 4 serveurs, réseau et logiciels éducatifs sous licence.",
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&h=500&fit=crop",
    tags: ["Équipement", "BtoB", "Éducation", "Installation"],
    location: "Douala", date: "Nov. 2023",
  },
  {
    id: 40,
    category: "shop",
    client: "Centre Médical BETHESDA",
    title: "Équipement informatique et imprimantes médicales",
    description: "Fourniture et installation de 30 postes médicaux, imprimantes d'étiquettes code-barres, écrans diagnostics et mise en réseau du système d'information hospitalier.",
    image: "https://images.unsplash.com/photo-1581595220892-b0739db3ba8c?w=800&h=500&fit=crop",
    tags: ["Santé", "Matériel", "Réseau", "BtoB"],
    location: "Yaoundé", date: "Août 2023",
  },
];

/* ─────────────────────────────────────────────────────────
   PAGE STATS
───────────────────────────────────────────────────────── */
const PAGE_STATS = [
  { value: "200+", label: "Projets Réalisés",   icon: <Target  size={20} /> },
  { value: "50+",  label: "Apps Déployées",     icon: <Code2   size={20} /> },
  { value: "98%",  label: "Clients Satisfaits", icon: <Star    size={20} /> },
  { value: "12+",  label: "Ans d'Expérience",   icon: <Award   size={20} /> },
];

/* ─────────────────────────────────────────────────────────
   CATEGORY ICON MAP
───────────────────────────────────────────────────────── */
const CATEGORY_ICONS: Record<string, React.ReactNode> = {
  conseil:   <BarChart2   size={13} />,
  dev:       <Code2       size={13} />,
  graphique: <Palette     size={13} />,
  cloud:     <Cloud       size={13} />,
  depannage: <Wrench      size={13} />,
  shop:      <ShoppingBag size={13} />,
};

const CATEGORY_LABELS: Record<string, string> = {
  conseil:   "Conseil",
  dev:       "Dev Logiciel",
  graphique: "Graphisme",
  cloud:     "Cloud",
  depannage: "Dépannage IT",
  shop:      "Boutique",
};

/* ─────────────────────────────────────────────────────────
   PROJECT MODAL
───────────────────────────────────────────────────────── */
function ProjectModal({ project, onClose }: { project: typeof projects[0]; onClose: () => void }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm"
      onClick={onClose}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95 }}
        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
        className="bg-white rounded-3xl overflow-hidden max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Image */}
        <div className="relative h-64">
          <Image src={project.image} alt={project.title} fill className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-9 h-9 rounded-full bg-black/50 flex items-center justify-center text-white hover:bg-black/70 transition-colors"
          >
            <X size={16} />
          </button>

          <div className="absolute bottom-4 left-6 right-6">
            <div className="flex items-center gap-2 mb-2">
              <span
                className="inline-flex items-center gap-1.5 text-white text-[10px] font-semibold px-2.5 py-1 rounded-full uppercase tracking-wider"
                style={{ background: BRAND_BLUE }}
              >
                {CATEGORY_ICONS[project.category]}
                {CATEGORY_LABELS[project.category]}
              </span>
              {project.featured && (
                <span className="inline-flex items-center gap-1 bg-white/20 backdrop-blur-sm border border-white/30 text-white text-[10px] font-semibold px-2.5 py-1 rounded-full">
                  ★ Projet Phare
                </span>
              )}
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="p-8">
          <p className="text-xs font-semibold uppercase tracking-widest text-slate-400 mb-1">{project.client}</p>
          <h2 className="font-display text-2xl font-bold text-brand-black leading-tight mb-4">{project.title}</h2>
          <p className="text-slate-500 leading-relaxed mb-6">{project.description}</p>

          {/* Metrics */}
          {project.metrics && (
            <div className="grid grid-cols-3 gap-3 mb-6">
              {project.metrics.map(({ value, label }) => (
                <div key={label} className="bg-slate-50 rounded-xl p-4 text-center">
                  <div className="font-display text-2xl font-bold text-brand-blue-500">{value}</div>
                  <div className="text-slate-400 text-xs mt-1">{label}</div>
                </div>
              ))}
            </div>
          )}

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-6">
            {project.tags.map((tag) => (
              <span key={tag} className="bg-slate-100 text-slate-600 text-xs font-medium px-3 py-1.5 rounded-lg">
                {tag}
              </span>
            ))}
          </div>

          {/* Testimonial */}
          {project.testimonial && (
            <div className="bg-brand-black rounded-2xl p-6 mb-6">
              <div className="flex gap-1 mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={12} className="text-brand-blue-500 fill-brand-blue-500" />
                ))}
              </div>
              <p className="text-white/70 text-sm leading-relaxed italic mb-3">
                &laquo;&nbsp;{project.testimonial.quote}&nbsp;&raquo;
              </p>
              <p className="text-white text-sm font-semibold">{project.testimonial.author}</p>
              <p className="text-white/40 text-xs">{project.testimonial.role}</p>
            </div>
          )}

          {/* Footer */}
          <div className="flex items-center justify-between pt-4 border-t border-slate-100">
            <div className="flex items-center gap-4 text-sm text-slate-400">
              <span className="flex items-center gap-1.5">
                <MapPin size={13} /> {project.location}
              </span>
              <span className="flex items-center gap-1.5">
                <Calendar size={13} /> {project.date}
              </span>
            </div>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-brand-blue-500 hover:bg-brand-blue-400 text-white font-semibold px-5 py-2.5 rounded-xl text-sm transition-all duration-200 group"
            >
              Projet similaire
              <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
            </Link>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

/* ─────────────────────────────────────────────────────────
   PROJECT CARD
───────────────────────────────────────────────────────── */
function ProjectCard({
  project,
  featured = false,
  onOpen,
}: {
  project: typeof projects[0];
  featured?: boolean;
  onOpen: () => void;
}) {
  return (
    <motion.div
      {...fadeUp(0)}
      onClick={onOpen}
      className={`group relative bg-white border border-slate-100 rounded-2xl overflow-hidden cursor-pointer hover:border-brand-blue-200 hover:shadow-card-lg transition-all duration-300 ${
        featured ? "lg:col-span-2" : ""
      }`}
    >
      {/* Image */}
      <div className={`relative overflow-hidden ${featured ? "lg:flex" : ""}`}>
        <div className={`relative ${featured ? "lg:w-80 shrink-0" : ""} h-52`}>
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />

          {/* Category badge */}
          <div className="absolute top-3 left-3 flex gap-2">
            <span
              className="inline-flex items-center gap-1.5 text-white text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider"
              style={{ background: BRAND_BLUE }}
            >
              {CATEGORY_ICONS[project.category]}
              {CATEGORY_LABELS[project.category]}
            </span>
            {project.featured && (
              <span className="inline-flex items-center gap-1 bg-white/15 backdrop-blur-sm border border-white/25 text-white text-[10px] font-semibold px-2.5 py-1 rounded-full">
                ★ Phare
              </span>
            )}
          </div>

          {/* Location pill */}
          <div className="absolute bottom-3 left-3 flex items-center gap-1 text-white/80 text-[10px]">
            <MapPin size={10} />
            {project.location}
          </div>
        </div>

        {/* Body */}
        <div className={`p-6 flex flex-col ${featured ? "flex-1" : ""}`}>
          <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-1.5">{project.client}</p>
          <h3 className={`font-display font-bold text-brand-black leading-snug mb-3 group-hover:text-brand-blue-600 transition-colors ${featured ? "text-xl" : "text-base"}`}>
            {project.title}
          </h3>

          <p className="text-slate-500 text-sm leading-relaxed mb-4 line-clamp-2">{project.description}</p>

          {/* Metrics (featured only) */}
          {featured && project.metrics && (
            <div className="flex gap-3 mb-4">
              {project.metrics.map(({ value, label }) => (
                <div key={label} className="flex-1 bg-slate-50 rounded-xl px-3 py-2.5 text-center">
                  <div className="font-display text-lg font-bold text-brand-blue-500 leading-none">{value}</div>
                  <div className="text-slate-400 text-[10px] mt-1">{label}</div>
                </div>
              ))}
            </div>
          )}

          {/* Tags */}
          <div className="flex flex-wrap gap-1.5 mb-4">
            {project.tags.slice(0, featured ? 4 : 3).map((tag) => (
              <span key={tag} className="bg-slate-100 text-slate-500 text-[10px] font-medium px-2 py-1 rounded-md">
                {tag}
              </span>
            ))}
          </div>

          {/* Footer */}
          <div className="flex items-center justify-between pt-4 border-t border-slate-100 mt-auto">
            <div className="flex items-center gap-3 text-[11px] text-slate-400">
              <span className="flex items-center gap-1"><Calendar size={11} />{project.date}</span>
            </div>
        
          </div>
        </div>
      </div>
    </motion.div>
  );
}

/* ─────────────────────────────────────────────────────────
   PAGE COMPONENT
───────────────────────────────────────────────────────── */
export default function ProjetsPage() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [searchQuery,    setSearchQuery]    = useState("");
  const [viewMode,       setViewMode]       = useState<"grid" | "list">("grid");
  const [showCount,      setShowCount]      = useState(12);
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);

  const filtered = useMemo(() => {
    return projects.filter((p) => {
      const matchesCat = activeCategory === "all" || p.category === activeCategory;
      const q = searchQuery.toLowerCase();
      const matchesSearch =
        !q ||
        p.title.toLowerCase().includes(q) ||
        p.client.toLowerCase().includes(q) ||
        p.tags.some((t) => t.toLowerCase().includes(q));
      return matchesCat && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  const visible = filtered.slice(0, showCount);
  const hasMore = showCount < filtered.length;

  return (
    <div className="overflow-x-hidden">

      {/* ══════════════════════════════════════════════════
          HERO
      ══════════════════════════════════════════════════ */}
      <section className="relative bg-brand-black pt-40 pb-20 overflow-hidden">
        {/* Glow */}
        <div
          className="absolute top-1/3 right-0 w-[500px] h-[500px] rounded-full blur-[160px] pointer-events-none z-0"
          style={{ background: BRAND_BLUE + "15" }}
        />
        <div
          className="absolute bottom-0 left-1/4 w-[300px] h-[300px] rounded-full blur-[100px] pointer-events-none z-0"
          style={{ background: BRAND_BLUE + "0C" }}
        />

        {/* Breadcrumb */}
        <div className="relative z-10 w-full px-6 lg:px-16 xl:px-24 mb-10">
          <div className="flex items-center gap-2 text-white/30 text-xs mb-8">
            <Link href="/" className="hover:text-white/60 transition-colors">Accueil</Link>
            <span>/</span>
            <span className="text-white/60">Projets Réalisés</span>
          </div>

          <div className="flex items-center gap-3 mb-6">
            <span className="h-px w-10 bg-brand-blue-500" />
            <span className="text-brand-blue-400 text-xs font-bold uppercase tracking-[0.2em]">
              Portfolio · Réalisations
            </span>
          </div>

          <h1 className="font-display text-[clamp(2.8rem,6vw,5rem)] font-bold text-white leading-[1.05] mb-6">
            Nos Projets
            <br />
            <span style={{ color: BRAND_BLUE }}>Réalisés</span>
          </h1>

          <p className="text-white/50 text-base lg:text-lg leading-relaxed max-w-xl mb-12">
            200+ projets livrés au Cameroun et en Afrique Centrale. Conseil stratégique, développement logiciel, design, cloud — des résultats concrets pour nos clients.
          </p>

          {/* Stats */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {PAGE_STATS.map(({ value, label, icon }, i) => (
              <motion.div
                key={label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className="bg-white/5 border border-white/10 rounded-2xl px-5 py-4 flex items-center gap-4"
              >
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center text-white shrink-0"
                  style={{ background: BRAND_BLUE + "25", color: BRAND_BLUE }}
                >
                  {icon}
                </div>
                <div>
                  <div className="font-display text-2xl font-bold text-white leading-none">{value}</div>
                  <div className="text-white/40 text-xs mt-1">{label}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Fade to white */}
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white to-transparent pointer-events-none z-10" />
      </section>

      {/* ══════════════════════════════════════════════════
          FILTERS + SEARCH BAR
      ══════════════════════════════════════════════════ */}
      <section className="sticky top-0 z-30 bg-white border-b border-slate-100 shadow-sm">
        <div className="w-full px-6 lg:px-16 xl:px-24 py-4">
          {/* Top row: search + view toggle */}
          <div className="flex items-center gap-3 mb-3">
            <div className="relative flex-1 max-w-xs">
              <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
              <input
                type="text"
                placeholder="Rechercher un projet, client..."
                value={searchQuery}
                onChange={(e) => { setSearchQuery(e.target.value); setShowCount(12); }}
                className="w-full pl-9 pr-4 py-2 text-sm border border-slate-200 rounded-xl bg-slate-50 focus:outline-none focus:border-brand-blue-400 focus:bg-white transition-all"
              />
              {searchQuery && (
                <button onClick={() => setSearchQuery("")} className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600">
                  <X size={13} />
                </button>
              )}
            </div>

            <span className="text-slate-400 text-xs ml-2">
              {filtered.length} projet{filtered.length !== 1 ? "s" : ""}
            </span>

            <div className="ml-auto flex gap-1.5">
              {(["grid", "list"] as const).map((mode) => (
                <button
                  key={mode}
                  onClick={() => setViewMode(mode)}
                  className={`w-8 h-8 rounded-lg flex items-center justify-center border transition-all duration-200 ${
                    viewMode === mode
                      ? "bg-brand-blue-500 border-brand-blue-500 text-white"
                      : "border-slate-200 text-slate-400 hover:border-slate-300"
                  }`}
                >
                  {mode === "grid" ? <Grid3X3 size={13} /> : <List size={13} />}
                </button>
              ))}
            </div>
          </div>

          {/* Category pills */}
          <div className="flex items-center gap-2 flex-wrap">
            {CATEGORIES.map(({ id, label, icon }) => {
              const count = id === "all" ? projects.length : projects.filter((p) => p.category === id).length;
              return (
                <button
                  key={id}
                  onClick={() => { setActiveCategory(id); setShowCount(12); }}
                  className={`inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all duration-200 ${
                    activeCategory === id
                      ? "bg-brand-blue-500 text-white shadow-sm"
                      : "bg-slate-100 text-slate-500 hover:bg-slate-200"
                  }`}
                >
                  {icon}
                  {label}
                  <span className={`text-[10px] font-bold ${activeCategory === id ? "text-white/70" : "text-slate-400"}`}>
                    {count}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          PROJECT GRID
      ══════════════════════════════════════════════════ */}
      <section className="bg-white py-14">
        <div className="w-full px-6 lg:px-16 xl:px-24">
          <AnimatePresence mode="wait">
            {filtered.length === 0 ? (
              <motion.div
                key="empty"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="text-center py-24"
              >
                <div className="text-slate-300 text-6xl mb-4">🔍</div>
                <p className="text-slate-400 text-lg">Aucun projet trouvé</p>
                <button
                  onClick={() => { setActiveCategory("all"); setSearchQuery(""); }}
                  className="mt-4 text-brand-blue-500 text-sm font-semibold hover:underline"
                >
                  Réinitialiser les filtres
                </button>
              </motion.div>
            ) : viewMode === "grid" ? (
              <motion.div
                key="grid"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
              >
                {visible.map((project, i) => (
                  <motion.div
                    key={project.id}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: (i % 12) * 0.05, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                    className={project.featured && i < 2 ? "md:col-span-2 lg:col-span-2" : ""}
                  >
                    <ProjectCard project={project} featured={!!(project.featured && i < 2)} onOpen={() => setSelectedProject(project)} />
                  </motion.div>
                ))}
              </motion.div>
            ) : (
              /* LIST VIEW */
              <motion.div
                key="list"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="space-y-3"
              >
                {visible.map((project, i) => (
                  <motion.div
                    key={project.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: (i % 12) * 0.04, duration: 0.45 }}
                    onClick={() => setSelectedProject(project)}
                    className="group flex items-center gap-5 bg-white border border-slate-100 rounded-2xl p-4 cursor-pointer hover:border-brand-blue-200 hover:shadow-card transition-all duration-300"
                  >
                    <div className="relative w-20 h-16 rounded-xl overflow-hidden shrink-0">
                      <Image src={project.image} alt={project.title} fill className="object-cover group-hover:scale-110 transition-transform duration-500" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1">
                        <span
                          className="inline-flex items-center gap-1 text-[9px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full text-white"
                          style={{ background: BRAND_BLUE }}
                        >
                          {CATEGORY_ICONS[project.category]}
                          {CATEGORY_LABELS[project.category]}
                        </span>
                        {project.featured && (
                          <span className="text-[9px] font-semibold text-brand-blue-500 bg-brand-blue-50 px-2 py-0.5 rounded-full">★ Phare</span>
                        )}
                      </div>
                      <p className="text-[10px] text-slate-400 font-semibold uppercase tracking-wider mb-0.5">{project.client}</p>
                      <h3 className="font-semibold text-sm text-brand-black truncate group-hover:text-brand-blue-600 transition-colors">{project.title}</h3>
                    </div>
                    <div className="hidden lg:flex items-center gap-4 shrink-0 text-xs text-slate-400">
                      <span className="flex items-center gap-1"><MapPin size={11} />{project.location}</span>
                      <span className="flex items-center gap-1"><Calendar size={11} />{project.date}</span>
                    </div>
                    <div className="hidden md:flex flex-wrap gap-1 max-w-[180px] shrink-0">
                      {project.tags.slice(0, 2).map((tag) => (
                        <span key={tag} className="text-[9px] bg-slate-100 text-slate-500 px-2 py-0.5 rounded-md">{tag}</span>
                      ))}
                    </div>
                    <ChevronRight size={16} className="text-slate-300 group-hover:text-brand-blue-500 shrink-0 transition-colors" />
                  </motion.div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>

          {/* Load more */}
          {hasMore && (
            <div className="text-center mt-12">
              <button
                onClick={() => setShowCount((c) => c + 12)}
                className="inline-flex items-center gap-2 border border-slate-200 hover:border-brand-blue-400 text-slate-600 hover:text-brand-blue-500 px-8 py-3.5 rounded-xl text-sm font-semibold transition-all duration-200 hover:shadow-sm"
              >
                <SlidersHorizontal size={15} />
                Charger plus de projets
                <span className="text-xs text-slate-400 font-normal">({filtered.length - showCount} restants)</span>
              </button>
            </div>
          )}
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          TESTIMONIALS STRIP
      ══════════════════════════════════════════════════ */}
      <section className="bg-gradient-to-b from-slate-50 to-blue-50/15 py-20">
        <div className="w-full px-6 lg:px-16 xl:px-24">
          <motion.div {...fadeUp(0)} className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-4">
              <span className="h-px w-10 bg-brand-blue-500" />
              <span className="text-brand-blue-500 text-xs font-bold uppercase tracking-widest">Ce que disent nos clients</span>
              <span className="h-px w-10 bg-brand-blue-500" />
            </div>
            <h2 className="font-display text-4xl font-bold text-brand-black">
              L'Impact de Nos Projets
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                quote: "CM Consulting a transformé notre façon d'aborder la stratégie. En six mois, notre efficacité opérationnelle a augmenté de 40%.",
                name: "Marie-Claire Ngo Biyong", role: "Directrice, Groupe Horizon",
                avatar: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=80&h=80&fit=crop&crop=face",
                project: "Stratégie digitale",
              },
              {
                quote: "L'application mobile développée dépasse nos attentes. Nos 5000 utilisateurs la plébiscitent avec 4.8 étoiles sur l'App Store.",
                name: "Joseph Kamga", role: "Fondateur, TechStart Cameroun",
                avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=80&h=80&fit=crop&crop=face",
                project: "App Mobile E-commerce",
              },
              {
                quote: "Notre identité visuelle est méconnaissable — dans le bon sens. CM Graphic a compris notre ADN et l'a magnifié.",
                name: "Fatima Aboubakar", role: "Gérante, Boutique DIVA",
                avatar: "https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=80&h=80&fit=crop&crop=face",
                project: "Identité visuelle",
              },
            ].map(({ quote, name, role, avatar, project }, i) => (
              <motion.div
                key={name}
                {...fadeUp(i * 0.1)}
                className="bg-white rounded-2xl p-7 border border-slate-100 hover:border-brand-blue-200 hover:shadow-card-lg transition-all duration-300"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, j) => (
                    <Star key={j} size={13} className="text-brand-blue-500 fill-brand-blue-500" />
                  ))}
                </div>
                <p className="text-slate-600 text-sm leading-relaxed italic mb-5">
                  &laquo;&nbsp;{quote}&nbsp;&raquo;
                </p>
                <div className="flex items-center gap-3 pt-4 border-t border-slate-100">
                  <div className="relative w-10 h-10 rounded-full overflow-hidden border-2 border-brand-blue-500/20">
                    <Image src={avatar} alt={name} fill className="object-cover" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="font-semibold text-brand-black text-sm truncate">{name}</p>
                    <p className="text-slate-400 text-xs">{role}</p>
                  </div>
                  <span className="text-[10px] text-brand-blue-500 bg-brand-blue-50 px-2 py-1 rounded-lg font-medium shrink-0">
                    {project}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          CTA
      ══════════════════════════════════════════════════ */}
      <section className="relative bg-brand-black py-24 overflow-hidden">
        <div
          className="absolute top-0 right-1/4 w-96 h-96 blur-[120px] pointer-events-none"
          style={{ background: BRAND_BLUE + "18" }}
        />
        <motion.div
          {...fadeUp(0)}
          className="relative z-10 max-w-3xl mx-auto px-6 lg:px-16 xl:px-24 text-center"
        >
          <div className="inline-flex items-center gap-2 bg-brand-blue-500/10 border border-brand-blue-500/25 rounded-full px-4 py-2 mb-6">
            <span className="w-2 h-2 rounded-full bg-brand-blue-500 animate-pulse" />
            <span className="text-brand-blue-400 text-xs font-bold uppercase tracking-widest">
              Votre Projet, Notre Prochain Succès
            </span>
          </div>

          <h2 className="font-display text-4xl lg:text-5xl font-bold text-white mb-5 leading-tight">
            Prêt à Rejoindre
            <br />
            <span style={{ color: BRAND_BLUE }}>Nos 200+ Clients Satisfaits ?</span>
          </h2>

          <p className="text-white/50 leading-relaxed max-w-xl mx-auto mb-10">
            Consultation gratuite · Devis sous 24h · Accompagnement de bout en bout · Suivi après livraison
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
        aria-label="WhatsApp"
        className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-[#25D366] hover:bg-[#1ebe59] shadow-lg hover:shadow-xl flex items-center justify-center transition-all duration-200 hover:-translate-y-1"
      >
        <MessageCircle size={26} className="text-white" />
      </a>

      {/* PROJECT MODAL */}
      <AnimatePresence>
        {selectedProject && (
          <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
        )}
      </AnimatePresence>
    </div>
  );
}
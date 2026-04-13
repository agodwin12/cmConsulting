
export type ProductCategory =
  | "Ordinateurs & Portables"
  | "Téléphones & Tablettes"
  | "Imprimantes & Scanners"
  | "Réseaux & Connectivité"
  | "Accessoires & Périphériques"
  | "Stockage & Sauvegarde"
  | "Consommables";

export interface Product {
  id:          string;          // Identifiant unique (pas d'espaces)
  name:        string;          // Nom du produit
  nameEn?:     string;          // Nom en anglais (optionnel)
  category:    ProductCategory; // Catégorie (choisir dans la liste ci-dessus)
  price:       string;          // Prix en FCFA ex: "150 000"
  oldPrice?:   string;          // Ancien prix si en promotion ex: "180 000"
  promo?:      boolean;         // true = badge PROMO rouge
  isNew?:      boolean;         // true = badge NOUVEAU vert
  inStock?:    boolean;         // false = "Rupture de stock" (défaut: true)
  available?:  boolean;         // false = caché sur le site (défaut: true)
  image:       string;          // URL de l'image
  brand?:      string;          // Marque ex: "HP", "Samsung"
  description: string;          // Description courte (1-2 phrases)
  specs?:      string[];        // Caractéristiques techniques (liste)
  whatsappMsg?: string;         // Message WhatsApp personnalisé (optionnel)
}

/* ─────────────────────────────────────────────────────────
   NUMÉRO WHATSAPP DE CM SHOP
   → Changez ce numéro pour mettre le bon numéro WhatsApp
───────────────────────────────────────────────────────── */
export const SHOP_WHATSAPP = "237694890230";

/* ─────────────────────────────────────────────────────────
   INFORMATIONS DU SHOP
───────────────────────────────────────────────────────── */
export const SHOP_INFO = {
  name:     "CM Shop 237",
  location: "Douala, Cameroun",
  hours:    "Lun–Sam : 08h–18h",
  facebook: "https://web.facebook.com/CMShop237",
  note:     "Livraison disponible dans tout Douala. Commande nationale sur arrangement.",
};

/* ─────────────────────────────────────────────────────────
   LE CATALOGUE — AJOUTEZ VOS PRODUITS ICI
   ↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓
───────────────────────────────────────────────────────── */
export const products: Product[] = [

  /* ══════════════════════════════════════════════
     ORDINATEURS & PORTABLES
  ══════════════════════════════════════════════ */
  {
    id:          "hp-elitebook-840-g8",
    name:        "HP EliteBook 840 G8",
    category:    "Ordinateurs & Portables",
    price:       "420 000",
    isNew:       true,
    inStock:     true,
    available:   true,
    image:       "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=600&h=400&fit=crop",
    brand:       "HP",
    description: "Laptop professionnel ultra-fin, idéal pour les entreprises. Robuste, rapide et autonome.",
    specs: [
      "Intel Core i5 11ème génération",
      "RAM : 16 Go DDR4",
      "SSD : 256 Go",
      "Écran : 14\" Full HD IPS",
      "Autonomie : jusqu'à 12h",
      "Garantie : 12 mois",
    ],
  },
  {
    id:          "dell-latitude-5520",
    name:        "Dell Latitude 5520",
    category:    "Ordinateurs & Portables",
    price:       "385 000",
    oldPrice:    "420 000",
    promo:       true,
    inStock:     true,
    available:   true,
    image:       "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?w=600&h=400&fit=crop",
    brand:       "Dell",
    description: "Laptop d'entreprise fiable et performant. En promotion cette semaine uniquement.",
    specs: [
      "Intel Core i7 11ème génération",
      "RAM : 16 Go DDR4",
      "SSD : 512 Go NVMe",
      "Écran : 15.6\" Full HD",
      "Windows 11 Pro inclus",
      "Garantie : 12 mois",
    ],
  },
  {
    id:          "lenovo-thinkpad-t14",
    name:        "Lenovo ThinkPad T14",
    category:    "Ordinateurs & Portables",
    price:       "395 000",
    inStock:     true,
    available:   true,
    image:       "https://images.unsplash.com/photo-1541807084-5c52b6b3adef?w=600&h=400&fit=crop",
    brand:       "Lenovo",
    description: "La référence des laptops professionnels. Clavier exceptionnel, excellente durabilité.",
    specs: [
      "AMD Ryzen 5 Pro",
      "RAM : 8 Go DDR4",
      "SSD : 256 Go",
      "Écran : 14\" Full HD IPS",
      "Lecteur d'empreinte digitale",
      "Garantie : 12 mois",
    ],
  },
  {
    id:          "hp-desktop-pro-tower",
    name:        "HP Pro Tower 400 G9",
    category:    "Ordinateurs & Portables",
    price:       "290 000",
    inStock:     true,
    available:   true,
    image:       "https://images.unsplash.com/photo-1593640408182-31c228a691f4?w=600&h=400&fit=crop",
    brand:       "HP",
    description: "Tour de bureau robuste pour une utilisation professionnelle intensive en entreprise.",
    specs: [
      "Intel Core i5 12ème génération",
      "RAM : 8 Go DDR4 (extensible 32 Go)",
      "HDD : 1 To + SSD 128 Go",
      "Ports USB-A et USB-C",
      "Windows 11 Pro inclus",
      "Garantie : 12 mois",
    ],
  },

  /* ══════════════════════════════════════════════
     TÉLÉPHONES & TABLETTES
  ══════════════════════════════════════════════ */
  {
    id:          "samsung-galaxy-a54",
    name:        "Samsung Galaxy A54 5G",
    category:    "Téléphones & Tablettes",
    price:       "185 000",
    isNew:       true,
    inStock:     true,
    available:   true,
    image:       "https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?w=600&h=400&fit=crop",
    brand:       "Samsung",
    description: "Smartphone milieu de gamme premium avec un excellent appareil photo et une grande autonomie.",
    specs: [
      "Écran : 6.4\" Super AMOLED 120Hz",
      "Processeur : Exynos 1380",
      "RAM : 8 Go / Stockage : 128 Go",
      "Caméra : 50MP + 12MP + 5MP",
      "Batterie : 5000 mAh",
      "5G · Android 14",
    ],
  },
  {
    id:          "iphone-14",
    name:        "iPhone 14 128Go",
    category:    "Téléphones & Tablettes",
    price:       "520 000",
    inStock:     true,
    available:   true,
    image:       "https://images.unsplash.com/photo-1632661674596-df8be070a5c5?w=600&h=400&fit=crop",
    brand:       "Apple",
    description: "Le flagship Apple avec la puce A15 Bionic. Photos professionnelles et performances exceptionnelles.",
    specs: [
      "Écran : 6.1\" Super Retina XDR",
      "Puce : A15 Bionic",
      "Stockage : 128 Go",
      "Caméra : Double 12MP",
      "Batterie : toute la journée",
      "iOS 17 · Face ID",
    ],
  },
  {
    id:          "tecno-camon-20",
    name:        "Tecno Camon 20 Pro",
    category:    "Téléphones & Tablettes",
    price:       "115 000",
    promo:       true,
    oldPrice:    "130 000",
    inStock:     true,
    available:   true,
    image:       "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=600&h=400&fit=crop",
    brand:       "Tecno",
    description: "Excellent rapport qualité-prix. Parfait pour les professionnels camerounais avec un budget maîtrisé.",
    specs: [
      "Écran : 6.67\" AMOLED 120Hz",
      "RAM : 8 Go / Stockage : 256 Go",
      "Caméra : 64MP Triple",
      "Batterie : 5000 mAh + charge 33W",
      "Android 13",
      "Dual SIM",
    ],
  },
  {
    id:          "samsung-tab-a8",
    name:        "Samsung Galaxy Tab A8",
    category:    "Téléphones & Tablettes",
    price:       "145 000",
    inStock:     true,
    available:   true,
    image:       "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=600&h=400&fit=crop",
    brand:       "Samsung",
    description: "Tablette idéale pour le travail, les présentations et le divertissement.",
    specs: [
      "Écran : 10.5\" TFT LCD",
      "RAM : 4 Go / Stockage : 64 Go",
      "Batterie : 7040 mAh",
      "Wi-Fi + LTE disponible",
      "Android 11",
      "Garantie : 12 mois",
    ],
  },

  /* ══════════════════════════════════════════════
     IMPRIMANTES & SCANNERS
  ══════════════════════════════════════════════ */
  {
    id:          "epson-l3250",
    name:        "Epson EcoTank L3250",
    category:    "Imprimantes & Scanners",
    price:       "145 000",
    isNew:       false,
    inStock:     true,
    available:   true,
    image:       "https://images.unsplash.com/photo-1612815154858-60aa4c59eaa6?w=600&h=400&fit=crop",
    brand:       "Epson",
    description: "Imprimante multifonction sans fil à réservoir d'encre rechargeable. Idéale pour les bureaux.",
    specs: [
      "Impression, copie, scan",
      "Wi-Fi intégré",
      "Vitesse : 10 ppm couleur",
      "Réservoir d'encre rechargeable",
      "Compatible Windows & Mac",
      "Garantie : 12 mois",
    ],
  },
  {
    id:          "hp-laserjet-m110w",
    name:        "HP LaserJet M110w",
    category:    "Imprimantes & Scanners",
    price:       "95 000",
    inStock:     true,
    available:   true,
    image:       "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=400&fit=crop",
    brand:       "HP",
    description: "Imprimante laser noir & blanc compacte et rapide. Parfaite pour l'impression de documents professionnels.",
    specs: [
      "Impression laser N&B",
      "Wi-Fi + USB",
      "Vitesse : 21 ppm",
      "Résolution : 600 x 600 dpi",
      "Compacte et silencieuse",
      "Garantie : 12 mois",
    ],
  },

  /* ══════════════════════════════════════════════
     RÉSEAUX & CONNECTIVITÉ
  ══════════════════════════════════════════════ */
  {
    id:          "tp-link-archer-ax23",
    name:        "TP-Link Archer AX23 Wi-Fi 6",
    category:    "Réseaux & Connectivité",
    price:       "45 000",
    isNew:       true,
    inStock:     true,
    available:   true,
    image:       "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=600&h=400&fit=crop",
    brand:       "TP-Link",
    description: "Routeur Wi-Fi 6 dual-band haute performance. Couvre les grandes surfaces et supporte de nombreux appareils.",
    specs: [
      "Wi-Fi 6 · AX1800",
      "Dual Band 2.4GHz + 5GHz",
      "4 antennes externes",
      "Ports : 1x WAN + 4x LAN Gigabit",
      "Portée : jusqu'à 200m²",
      "Garantie : 12 mois",
    ],
  },
  {
    id:          "mtn-cle-4g",
    name:        "Clé 4G MTN MiFi M7",
    category:    "Réseaux & Connectivité",
    price:       "25 000",
    inStock:     true,
    available:   true,
    image:       "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=600&h=400&fit=crop",
    brand:       "MTN",
    description: "Routeur portable 4G pour connexion internet mobile partout au Cameroun. Jusqu'à 10 appareils connectés.",
    specs: [
      "4G LTE · Compatible MTN & Orange",
      "Jusqu'à 10 appareils simultanés",
      "Batterie intégrée 2000 mAh",
      "Débit : jusqu'à 150 Mbps",
      "Sans abonnement imposé",
    ],
  },

  /* ══════════════════════════════════════════════
     ACCESSOIRES & PÉRIPHÉRIQUES
  ══════════════════════════════════════════════ */
  {
    id:          "logitech-mk470-combo",
    name:        "Logitech MK470 Combo",
    category:    "Accessoires & Périphériques",
    price:       "28 000",
    inStock:     true,
    available:   true,
    image:       "https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=600&h=400&fit=crop",
    brand:       "Logitech",
    description: "Ensemble clavier + souris sans fil slim et silencieux. Design moderne, parfait pour le bureau.",
    specs: [
      "Clavier + Souris sans fil",
      "Récepteur USB Unifying",
      "Autonomie : jusqu'à 36 mois",
      "Frappe silencieuse",
      "Compatible Windows & Mac",
    ],
  },
  {
    id:          "dell-ecran-24",
    name:        "Dell 24\" Monitor P2422H",
    category:    "Accessoires & Périphériques",
    price:       "130 000",
    inStock:     true,
    available:   true,
    image:       "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=600&h=400&fit=crop",
    brand:       "Dell",
    description: "Écran professionnel 24 pouces Full HD avec dalle IPS. Couleurs fidèles et confort visuel optimal.",
    specs: [
      "Taille : 24\" Full HD (1920x1080)",
      "Dalle IPS · 60Hz",
      "Ports : HDMI + VGA + DisplayPort",
      "Réglable en hauteur et inclinaison",
      "Certifié Eye Comfort",
      "Garantie : 36 mois",
    ],
  },
  {
    id:          "webcam-logitech-c920",
    name:        "Logitech C920 HD Pro",
    category:    "Accessoires & Périphériques",
    price:       "55 000",
    inStock:     true,
    available:   true,
    image:       "https://images.unsplash.com/photo-1623949556303-b0d17d198863?w=600&h=400&fit=crop",
    brand:       "Logitech",
    description: "Webcam Full HD 1080p avec microphone stéréo intégré. Idéale pour les visioconférences professionnelles.",
    specs: [
      "Résolution : 1080p / 30fps",
      "Microphone stéréo intégré",
      "Mise au point autofocus",
      "Compatible Zoom, Teams, Meet",
      "Plug & Play USB",
    ],
  },
  {
    id:          "onduleur-eaton-650",
    name:        "Onduleur Eaton 3S 650VA",
    category:    "Accessoires & Périphériques",
    price:       "65 000",
    inStock:     true,
    available:   true,
    image:       "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=400&fit=crop",
    brand:       "Eaton",
    description: "Onduleur indispensable au Cameroun pour protéger vos équipements contre les coupures et surtensions.",
    specs: [
      "Puissance : 650VA / 360W",
      "Autonomie : 5 à 10 min",
      "6 prises protégées",
      "Protection surtension",
      "Indicateur de charge LED",
      "Garantie : 24 mois",
    ],
  },

  /* ══════════════════════════════════════════════
     STOCKAGE & SAUVEGARDE
  ══════════════════════════════════════════════ */
  {
    id:          "seagate-hdd-2to",
    name:        "Seagate Expansion 2To",
    category:    "Stockage & Sauvegarde",
    price:       "42 000",
    inStock:     true,
    available:   true,
    image:       "https://images.unsplash.com/photo-1597852074816-d933c7d2b988?w=600&h=400&fit=crop",
    brand:       "Seagate",
    description: "Disque dur externe portable 2To. Sauvegardez vos données importantes en toute sécurité.",
    specs: [
      "Capacité : 2 To",
      "Interface : USB 3.0",
      "Plug & Play · Sans alimentation",
      "Compatible Windows & Mac",
      "Compact et léger",
      "Garantie : 24 mois",
    ],
  },
  {
    id:          "samsung-ssd-500go",
    name:        "Samsung 870 EVO SSD 500Go",
    category:    "Stockage & Sauvegarde",
    price:       "38 000",
    isNew:       false,
    inStock:     true,
    available:   true,
    image:       "https://images.unsplash.com/photo-1591488320449-011701bb6704?w=600&h=400&fit=crop",
    brand:       "Samsung",
    description: "SSD interne SATA pour booster votre ordinateur. Vitesse 5x supérieure à un disque dur classique.",
    specs: [
      "Capacité : 500 Go",
      "Interface : SATA III",
      "Lecture : 560 Mo/s",
      "Écriture : 530 Mo/s",
      "Format : 2.5\"",
      "Garantie : 60 mois",
    ],
  },
  {
    id:          "cle-usb-sandisk-64go",
    name:        "SanDisk Ultra 64Go USB 3.0",
    category:    "Stockage & Sauvegarde",
    price:       "8 500",
    inStock:     true,
    available:   true,
    image:       "https://images.unsplash.com/photo-1618410320928-25228d811631?w=600&h=400&fit=crop",
    brand:       "SanDisk",
    description: "Clé USB 3.0 rapide et fiable. Idéale pour le transfert et la sauvegarde de vos fichiers.",
    specs: [
      "Capacité : 64 Go",
      "USB 3.0 · Lecture : 130 Mo/s",
      "Design compact et robuste",
      "Compatible Windows & Mac",
      "Garantie : 60 mois",
    ],
  },

  /* ══════════════════════════════════════════════
     CONSOMMABLES
  ══════════════════════════════════════════════ */
  {
    id:          "cartouche-epson-l3250",
    name:        "Kit Encre Epson 003 (4 couleurs)",
    category:    "Consommables",
    price:       "18 000",
    inStock:     true,
    available:   true,
    image:       "https://images.unsplash.com/photo-1612815154858-60aa4c59eaa6?w=600&h=400&fit=crop",
    brand:       "Epson",
    description: "Kit d'encre original Epson 003 pour les imprimantes EcoTank L3150, L3250, L3210, L3216.",
    specs: [
      "4 bouteilles : Noir + Cyan + Magenta + Jaune",
      "Original Epson",
      "Rendement : 7500 pages (noir)",
      "Compatible : L3150, L3250, L3210",
    ],
  },
  {
    id:          "toner-hp-cf217a",
    name:        "Toner HP CF217A (17A)",
    category:    "Consommables",
    price:       "22 000",
    inStock:     true,
    available:   true,
    image:       "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=400&fit=crop",
    brand:       "HP",
    description: "Cartouche toner laser noir compatible HP LaserJet Pro M102, M130 et séries similaires.",
    specs: [
      "Couleur : Noir",
      "Rendement : 1600 pages",
      "Compatible : HP M102a, M102w, M130",
      "Qualité d'impression optimale",
    ],
  },
];

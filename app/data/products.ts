
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
export const SHOP_WHATSAPP = "237690486009";

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

   Vidé le 2026-09-14 : les produits de démonstration ont été
   retirés pour laisser place aux vraies annonces publiées par
   les vendeurs via le backoffice (voir la section "Annonces de
   Nos Vendeurs" sur /shop, alimentée par cm_consulting_backoffice).
   Ce tableau reste utilisable si CM Shop veut de nouveau vendre
   son propre catalogue en plus des vendeurs partenaires — il
   suffit d'y remettre des entrées au même format.
───────────────────────────────────────────────────────── */
export const products: Product[] = [];

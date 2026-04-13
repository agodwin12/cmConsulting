"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  MessageCircle,
  Search,
  ShoppingBag,
  ArrowRight,
  Facebook,
  Tag,
  CheckCircle2,
  AlertCircle,
  SlidersHorizontal,
  X,
} from "lucide-react";
// Replace line 18 with:
import {
  products,
  SHOP_WHATSAPP,
  SHOP_INFO,
  type Product,
  type ProductCategory,
} from "../data/products";
/* ─────────────────────────────────────────────────────────
   HELPERS
───────────────────────────────────────────────────────── */

/** Build a pre-filled WhatsApp message for a product */
function buildWhatsAppUrl(product: Product): string {
  const msg = product.whatsappMsg
    ?? `Bonjour CM Shop 237 👋\n\nJe suis intéressé(e) par le produit suivant :\n\n` +
       `📦 *${product.name}*\n` +
       `💰 Prix : ${product.price} FCFA\n` +
       (product.brand ? `🏷 Marque : ${product.brand}\n` : "") +
       `\nPouvez-vous me donner plus d'informations sur la disponibilité et la livraison ? Merci !`;

  return `https://wa.me/${SHOP_WHATSAPP}?text=${encodeURIComponent(msg)}`;
}

/** All unique categories from the product list */
const ALL_CATEGORIES = Array.from(
  new Set(products.map((p) => p.category))
) as ProductCategory[];

/* ─────────────────────────────────────────────────────────
   SUB-COMPONENTS
───────────────────────────────────────────────────────── */
function ProductCard({ product }: { product: Product }) {
  const [imgError, setImgError] = useState(false);
  const whatsappUrl = buildWhatsAppUrl(product);
  const outOfStock  = product.inStock === false;

  return (
    <div className="group bg-white rounded-2xl border border-slate-100 hover:border-brand-blue-200 hover:shadow-card-lg transition-all duration-300 overflow-hidden flex flex-col">

      {/* Image */}
      <div className="relative h-52 bg-slate-50 overflow-hidden">
        {!imgError ? (
          <Image
            src={product.image}
            alt={product.name}
            fill
            className={`object-cover group-hover:scale-105 transition-transform duration-500 ${
              outOfStock ? "opacity-50 grayscale" : ""
            }`}
            onError={() => setImgError(true)}
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center bg-slate-100">
            <ShoppingBag size={40} className="text-slate-300" />
          </div>
        )}

        {/* Overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />

        {/* Badges */}
        <div className="absolute top-3 left-3 flex flex-col gap-1.5">
          {product.promo && (
            <span className="bg-red-500 text-white text-xs font-bold px-2.5 py-1 rounded-full">
              PROMO
            </span>
          )}
          {product.isNew && !product.promo && (
            <span className="bg-green-500 text-white text-xs font-bold px-2.5 py-1 rounded-full">
              NOUVEAU
            </span>
          )}
          {outOfStock && (
            <span className="bg-slate-700 text-white text-xs font-bold px-2.5 py-1 rounded-full">
              Rupture
            </span>
          )}
        </div>

        {/* Brand badge */}
        {product.brand && (
          <div className="absolute top-3 right-3 bg-black/40 backdrop-blur-sm text-white text-xs font-semibold px-2 py-1 rounded-lg">
            {product.brand}
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col flex-1">

        {/* Category */}
        <p className="text-brand-blue-500 text-xs font-semibold uppercase tracking-wider mb-1.5">
          {product.category}
        </p>

        {/* Name */}
        <h3 className="font-display font-bold text-brand-black text-base leading-snug mb-2 line-clamp-2">
          {product.name}
        </h3>

        {/* Description */}
        <p className="text-slate-500 text-xs leading-relaxed mb-3 line-clamp-2 flex-1">
          {product.description}
        </p>

        {/* Specs preview */}
        {product.specs && product.specs.length > 0 && (
          <ul className="space-y-1 mb-4">
            {product.specs.slice(0, 3).map((spec) => (
              <li key={spec} className="flex items-center gap-1.5 text-xs text-slate-500">
                <span className="w-1 h-1 rounded-full bg-brand-blue-500 shrink-0" />
                {spec}
              </li>
            ))}
            {product.specs.length > 3 && (
              <li className="text-xs text-slate-400 pl-2.5">
                +{product.specs.length - 3} autres caractéristiques
              </li>
            )}
          </ul>
        )}

        {/* Price */}
        <div className="flex items-baseline gap-2 mb-4">
          <span className="font-display text-2xl font-bold text-brand-black">
            {product.price}
          </span>
          <span className="text-slate-400 text-sm">FCFA</span>
          {product.oldPrice && (
            <span className="text-slate-400 text-sm line-through ml-1">
              {product.oldPrice} FCFA
            </span>
          )}
        </div>

        {/* WhatsApp CTA */}
        {outOfStock ? (
          <div className="flex items-center gap-2 bg-slate-100 text-slate-400 font-semibold px-4 py-3 rounded-xl text-sm justify-center">
            <AlertCircle size={16} />
            Rupture de Stock
          </div>
        ) : (
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-between bg-[#25D366] hover:bg-[#1ebe59] text-white font-semibold px-4 py-3 rounded-xl text-sm transition-all duration-200 hover:-translate-y-0.5 group/btn"
          >
            <span className="flex items-center gap-2">
              <MessageCircle size={16} />
              Commander via WhatsApp
            </span>
            <ArrowRight size={14} className="group-hover/btn:translate-x-1 transition-transform" />
          </a>
        )}
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────
   MAIN PAGE
───────────────────────────────────────────────────────── */
export default function ShopPage() {
  const [search,          setSearch]          = useState("");
  const [activeCategory,  setActiveCategory]  = useState<ProductCategory | "Tous">("Tous");
  const [showPromoOnly,   setShowPromoOnly]   = useState(false);
  const [showInStockOnly, setShowInStockOnly] = useState(false);
  const [filtersOpen,     setFiltersOpen]     = useState(false);

  /* Filter logic */
  const filtered = useMemo(() => {
    return products.filter((p) => {
      if (p.available === false)                          return false;
      if (activeCategory !== "Tous" && p.category !== activeCategory) return false;
      if (showPromoOnly   && !p.promo)                   return false;
      if (showInStockOnly && p.inStock === false)        return false;
      if (search.trim()) {
        const q = search.toLowerCase();
        return (
          p.name.toLowerCase().includes(q)        ||
          p.description.toLowerCase().includes(q) ||
          (p.brand ?? "").toLowerCase().includes(q)
        );
      }
      return true;
    });
  }, [search, activeCategory, showPromoOnly, showInStockOnly]);

  const promoCount    = products.filter((p) => p.available !== false && p.promo).length;
  const inStockCount  = products.filter((p) => p.available !== false && p.inStock !== false).length;

  return (
    <>

      {/* ══════════════════════════════════════════════════
          1. PAGE HEADER
      ══════════════════════════════════════════════════ */}
      <section className="relative bg-brand-black pt-44 pb-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1491933382434-500287f9b54b?w=1920&h=700&fit=crop"
            alt="CM Shop 237 Douala"
            fill
            className="object-cover opacity-15"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-brand-black via-brand-black/92 to-brand-black/60" />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-transparent to-transparent" />
        </div>
        <div className="absolute top-1/2 right-1/3 w-[400px] h-[400px] bg-yellow-500/8 blur-[100px] pointer-events-none" />

        <div className="relative z-10 w-full px-6 lg:px-16 xl:px-24">
          <div className="flex items-center gap-3 mb-5">
            <span className="h-px w-10 bg-yellow-400" />
            <span className="text-yellow-400 text-xs font-semibold uppercase tracking-widest">
              CM Shop 237 · Douala, Cameroun
            </span>
          </div>
          <h1 className="font-display text-5xl lg:text-6xl text-white font-bold max-w-2xl leading-tight mb-4">
            Notre Boutique{" "}
            <span className="text-yellow-400"></span>
          </h1>
          <p className="text-white/55 text-lg max-w-xl leading-relaxed mb-6">
            Matériel informatique, téléphones, accessoires et consommables — tout pour équiper votre bureau ou votre maison. Commandez via WhatsApp en un clic.
          </p>

          {/* Info strip */}
          <div className="flex flex-wrap gap-5 text-sm">
            {[
              { icon: <MessageCircle size={15} />, text: "Commande via WhatsApp" },
              { icon: <CheckCircle2  size={15} />, text: "Livraison à Douala" },
              { icon: <Tag          size={15} />, text: "Prix en FCFA · Négociable" },
              { icon: <ShoppingBag  size={15} />, text: SHOP_INFO.hours },
            ].map(({ icon, text }) => (
              <div key={text} className="flex items-center gap-2 text-white/50">
                <span className="text-yellow-400">{icon}</span>
                {text}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          2. STICKY SEARCH + FILTERS BAR
      ══════════════════════════════════════════════════ */}
      <div className="sticky top-20 z-30 bg-white border-b border-slate-100 shadow-sm">
        <div className="w-full px-6 lg:px-16 xl:px-24 py-4">
          <div className="flex flex-col md:flex-row gap-4 items-start md:items-center">

            {/* Search */}
            <div className="relative flex-1 max-w-sm">
              <Search size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
              <input
                type="text"
                placeholder="Rechercher un produit, une marque..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm text-brand-black placeholder-slate-400 focus:outline-none focus:border-brand-blue-400 focus:ring-2 focus:ring-brand-blue-400/15 transition-all"
              />
              {search && (
                <button
                  onClick={() => setSearch("")}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
                >
                  <X size={14} />
                </button>
              )}
            </div>

            {/* Category pills — desktop */}
            <div className="hidden lg:flex items-center gap-2 flex-wrap">
              <button
                onClick={() => setActiveCategory("Tous")}
                className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all duration-200 ${
                  activeCategory === "Tous"
                    ? "bg-brand-black text-white"
                    : "bg-slate-100 text-slate-500 hover:bg-slate-200"
                }`}
              >
                Tous ({products.filter(p => p.available !== false).length})
              </button>
              {ALL_CATEGORIES.map((cat) => {
                const count = products.filter(
                  (p) => p.available !== false && p.category === cat
                ).length;
                return (
                  <button
                    key={cat}
                    onClick={() => setActiveCategory(cat)}
                    className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all duration-200 whitespace-nowrap ${
                      activeCategory === cat
                        ? "bg-brand-blue-500 text-white"
                        : "bg-slate-100 text-slate-500 hover:bg-slate-200"
                    }`}
                  >
                    {cat.split(" & ")[0]} ({count})
                  </button>
                );
              })}
            </div>

            {/* Mobile filter toggle */}
            <button
              onClick={() => setFiltersOpen(!filtersOpen)}
              className="lg:hidden flex items-center gap-2 text-sm font-medium text-slate-600 border border-slate-200 px-4 py-2.5 rounded-xl hover:border-brand-blue-300 transition-colors"
            >
              <SlidersHorizontal size={15} />
              Filtres
              {(activeCategory !== "Tous" || showPromoOnly || showInStockOnly) && (
                <span className="w-2 h-2 rounded-full bg-brand-blue-500" />
              )}
            </button>

            {/* Toggle filters */}
            <div className="hidden lg:flex items-center gap-3 ml-auto">
              <button
                onClick={() => setShowPromoOnly(!showPromoOnly)}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold border transition-all ${
                  showPromoOnly
                    ? "bg-red-500 text-white border-red-500"
                    : "border-slate-200 text-slate-500 hover:border-red-300"
                }`}
              >
                <Tag size={12} />
                Promos ({promoCount})
              </button>
              <button
                onClick={() => setShowInStockOnly(!showInStockOnly)}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold border transition-all ${
                  showInStockOnly
                    ? "bg-green-500 text-white border-green-500"
                    : "border-slate-200 text-slate-500 hover:border-green-300"
                }`}
              >
                <CheckCircle2 size={12} />
                En Stock ({inStockCount})
              </button>
            </div>
          </div>

          {/* Mobile filter panel */}
          {filtersOpen && (
            <div className="lg:hidden mt-4 pt-4 border-t border-slate-100 space-y-3">
              <div className="flex flex-wrap gap-2">
                <button
                  onClick={() => setActiveCategory("Tous")}
                  className={`px-3 py-1.5 rounded-full text-xs font-semibold transition-all ${
                    activeCategory === "Tous"
                      ? "bg-brand-black text-white"
                      : "bg-slate-100 text-slate-500"
                  }`}
                >
                  Tous
                </button>
                {ALL_CATEGORIES.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setActiveCategory(cat)}
                    className={`px-3 py-1.5 rounded-full text-xs font-semibold transition-all ${
                      activeCategory === cat
                        ? "bg-brand-blue-500 text-white"
                        : "bg-slate-100 text-slate-500"
                    }`}
                  >
                    {cat.split(" & ")[0]}
                  </button>
                ))}
              </div>
              <div className="flex gap-2">
                <button
                  onClick={() => setShowPromoOnly(!showPromoOnly)}
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold border transition-all ${
                    showPromoOnly
                      ? "bg-red-500 text-white border-red-500"
                      : "border-slate-200 text-slate-500"
                  }`}
                >
                  <Tag size={12} /> Promos
                </button>
                <button
                  onClick={() => setShowInStockOnly(!showInStockOnly)}
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold border transition-all ${
                    showInStockOnly
                      ? "bg-green-500 text-white border-green-500"
                      : "border-slate-200 text-slate-500"
                  }`}
                >
                  <CheckCircle2 size={12} /> En Stock
                </button>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* ══════════════════════════════════════════════════
          3. PRODUCT GRID
      ══════════════════════════════════════════════════ */}
      <section className="bg-slate-50 py-12">
        <div className="w-full px-6 lg:px-16 xl:px-24">

          {/* Results count */}
          <div className="flex items-center justify-between mb-8">
            <p className="text-slate-500 text-sm">
              <span className="font-semibold text-brand-black">{filtered.length}</span>{" "}
              produit{filtered.length !== 1 ? "s" : ""} trouvé{filtered.length !== 1 ? "s" : ""}
              {activeCategory !== "Tous" && (
                <span className="text-brand-blue-500"> · {activeCategory}</span>
              )}
            </p>
            {(search || activeCategory !== "Tous" || showPromoOnly || showInStockOnly) && (
              <button
                onClick={() => {
                  setSearch("");
                  setActiveCategory("Tous");
                  setShowPromoOnly(false);
                  setShowInStockOnly(false);
                }}
                className="text-xs text-slate-400 hover:text-brand-blue-500 flex items-center gap-1 transition-colors"
              >
                <X size={12} /> Réinitialiser
              </button>
            )}
          </div>

          {/* Grid */}
          {filtered.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filtered.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          ) : (
            /* Empty state */
            <div className="flex flex-col items-center justify-center py-24 text-center">
              <div className="w-20 h-20 rounded-2xl bg-slate-200 flex items-center justify-center mb-5">
                <ShoppingBag size={35} className="text-slate-400" />
              </div>
              <h3 className="font-display text-xl font-bold text-brand-black mb-2">
                Aucun produit trouvé
              </h3>
              <p className="text-slate-500 text-sm max-w-xs leading-relaxed mb-6">
                Aucun produit ne correspond à votre recherche. Essayez d'autres mots-clés ou contactez-nous directement.
              </p>
              <a
                href={`https://wa.me/${SHOP_WHATSAPP}?text=${encodeURIComponent(
                  `Bonjour CM Shop, je recherche "${search}" — avez-vous ce produit en stock ?`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1ebe59] text-white font-semibold px-6 py-3 rounded-xl text-sm transition-all duration-200"
              >
                <MessageCircle size={16} />
                Demander sur WhatsApp
              </a>
            </div>
          )}
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          4. HOW TO ORDER
      ══════════════════════════════════════════════════ */}
      <section className="bg-white py-20">
        <div className="w-full px-6 lg:px-16 xl:px-24">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-4">
              <span className="h-px w-10 bg-yellow-400" />
              <span className="text-yellow-600 text-xs font-semibold uppercase tracking-widest">
                Simple & Rapide
              </span>
              <span className="h-px w-10 bg-yellow-400" />
            </div>
            <h2 className="font-display text-3xl lg:text-4xl font-bold text-brand-black">
              Comment Commander ?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {[
              {
                step: "01",
                title: "Choisissez votre produit",
                desc:  "Parcourez le catalogue, filtrez par catégorie et trouvez le produit qu'il vous faut.",
              },
              {
                step: "02",
                title: "Cliquez WhatsApp",
                desc:  "Cliquez sur \"Commander via WhatsApp\" — un message pré-rempli s'ouvre automatiquement.",
              },
              {
                step: "03",
                title: "Confirmez avec nous",
                desc:  "Notre équipe confirme la disponibilité, le prix final et les modalités de livraison.",
              },
              {
                step: "04",
                title: "Payez & Recevez",
                desc:  "Paiement Mobile Money (MTN/Orange), virement ou espèces. Livraison à Douala ou retrait en boutique.",
              },
            ].map(({ step, title, desc }, i) => (
              <div key={step} className="relative group text-center">
                {i < 3 && (
                  <div className="hidden md:block absolute top-8 left-full w-full h-px bg-gradient-to-r from-yellow-400/40 to-transparent z-0" />
                )}
                <div className="relative z-10">
                  <div className="w-16 h-16 rounded-2xl bg-brand-black group-hover:bg-yellow-500 flex items-center justify-center mx-auto mb-4 transition-colors duration-300">
                    <span className="font-display text-lg font-bold text-yellow-400 group-hover:text-white transition-colors duration-300">
                      {step}
                    </span>
                  </div>
                  <h3 className="font-display text-base font-bold text-brand-black mb-2">{title}</h3>
                  <p className="text-slate-500 text-xs leading-relaxed">{desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Payment methods */}
          <div className="mt-12 flex flex-wrap justify-center items-center gap-4 pt-8 border-t border-slate-100">
            <p className="text-slate-400 text-xs uppercase tracking-widest font-semibold">
              Moyens de paiement acceptés :
            </p>
            {[
              { name: "MTN Mobile Money",   color: "bg-yellow-400 text-yellow-900" },
              { name: "Orange Money",        color: "bg-orange-500 text-white" },
              { name: "Virement Bancaire",   color: "bg-blue-500 text-white" },
              { name: "Espèces en Boutique", color: "bg-green-500 text-white" },
            ].map(({ name, color }) => (
              <span
                key={name}
                className={`px-4 py-2 rounded-full text-xs font-bold ${color}`}
              >
                {name}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          5. CTA + FACEBOOK
      ══════════════════════════════════════════════════ */}
      <section className="bg-brand-black py-20">
        <div className="w-full px-6 lg:px-16 xl:px-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

            {/* Left */}
            <div>
              <h2 className="font-display text-3xl lg:text-4xl font-bold text-white mb-4 leading-tight">
                Vous ne trouvez pas<br />
                <span className="text-yellow-400">ce que vous cherchez ?</span>
              </h2>
              <p className="text-white/50 text-sm leading-relaxed mb-6">
                Notre catalogue évolue en permanence. Si vous avez besoin d'un produit spécifique qui n'est pas affiché, contactez-nous directement — nous faisons des commandes sur mesure.
              </p>
              <div className="flex flex-wrap gap-3">
                <a
                  href={`https://wa.me/${SHOP_WHATSAPP}?text=${encodeURIComponent(
                    "Bonjour CM Shop 237, je cherche un produit spécifique qui n'est pas dans votre catalogue. Pouvez-vous m'aider ?"
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1ebe59] text-white font-semibold px-6 py-3.5 rounded-xl text-sm transition-all duration-200 hover:-translate-y-0.5"
                >
                  <MessageCircle size={16} />
                  Commande Spéciale WhatsApp
                </a>
                <a
                  href={SHOP_INFO.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 border border-white/15 hover:border-white/30 text-white/70 hover:text-white font-semibold px-6 py-3.5 rounded-xl text-sm transition-all duration-200"
                >
                  <Facebook size={16} />
                  Notre Page Facebook
                </a>
              </div>
            </div>

            {/* Right — info card */}
            <div className="bg-brand-darkgray border border-white/8 rounded-2xl p-8 space-y-5">
              <h3 className="font-display text-xl font-bold text-white mb-2">
                Infos Pratiques
              </h3>
              {[
                {
                  icon: <MessageCircle size={16} />,
                  label: "WhatsApp",
                  value: `+${SHOP_WHATSAPP.replace("237", "+237 ")}`,
                  href:  `https://wa.me/${SHOP_WHATSAPP}`,
                },
                {
                  icon: <ShoppingBag size={16} />,
                  label: "Localisation",
                  value: SHOP_INFO.location,
                  href:  "https://maps.google.com/?q=Douala,Cameroun",
                },
                {
                  icon: <CheckCircle2 size={16} />,
                  label: "Horaires",
                  value: SHOP_INFO.hours,
                  href:  null,
                },
                {
                  icon: <Facebook size={16} />,
                  label: "Facebook",
                  value: "CM Shop 237",
                  href:  SHOP_INFO.facebook,
                },
              ].map(({ icon, label, value, href }) => (
                <div key={label} className="flex items-center gap-4">
                  <div className="w-9 h-9 rounded-lg bg-yellow-500/10 border border-yellow-500/20 text-yellow-400 flex items-center justify-center shrink-0">
                    {icon}
                  </div>
                  <div>
                    <p className="text-white/30 text-xs uppercase tracking-wider">{label}</p>
                    {href ? (
                      <a
                        href={href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white text-sm font-medium hover:text-yellow-400 transition-colors"
                      >
                        {value}
                      </a>
                    ) : (
                      <p className="text-white text-sm font-medium">{value}</p>
                    )}
                  </div>
                </div>
              ))}
              <p className="text-white/30 text-xs leading-relaxed pt-2 border-t border-white/5">
                {SHOP_INFO.note}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Floating WhatsApp */}
      <a
        href={`https://wa.me/${SHOP_WHATSAPP}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Commander sur WhatsApp"
        className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-[#25D366] hover:bg-[#1ebe59] shadow-lg hover:shadow-xl flex items-center justify-center transition-all duration-200 hover:-translate-y-1"
      >
        <MessageCircle size={26} className="text-white" />
      </a>
    </>
  );
}
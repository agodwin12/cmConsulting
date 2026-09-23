"use client";

import { useState, useEffect, useMemo } from "react";
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
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
// Replace line 18 with:
import {
  products,
  SHOP_WHATSAPP,
  SHOP_INFO,
  type Product,
  type ProductCategory,
} from "../data/products";
import ShopBannerCarousel from "@/components/ShopBannerCarousel";
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
   VENDOR LISTINGS — posted by sellers via the backoffice
   Category, title, images, description, price — filterable by
   category (pills sourced live from the backoffice's database),
   kept visually distinct from the curated CM Shop catalog above.
───────────────────────────────────────────────────────── */
interface SellerListing {
  id:          string;
  /** 1 to 5 photos, in the order the seller arranged them. */
  imageUrls:   string[];
  title:       string;
  description: string;
  price:       number;
  category:    string | null;
}

function buildListingWhatsAppUrl(listing: SellerListing): string {
  const msg =
    `Bonjour CM Shop 237 👋\n\nJe suis intéressé(e) par cette annonce :\n\n` +
    `📦 *${listing.title}*\n` +
    `${listing.description}\n` +
    `💰 Prix : ${listing.price.toLocaleString("fr-FR")} FCFA\n` +
    `\nPouvez-vous me donner plus d'informations sur la disponibilité et la livraison ? Merci !`;
  return `https://wa.me/${SHOP_WHATSAPP}?text=${encodeURIComponent(msg)}`;
}

function ListingCard({ listing }: { listing: SellerListing }) {
  const [imgIndex, setImgIndex] = useState(0);
  const hasMultiple = listing.imageUrls.length > 1;

  function prevImage(e: React.MouseEvent) {
    e.preventDefault();
    e.stopPropagation();
    setImgIndex((i) => (i === 0 ? listing.imageUrls.length - 1 : i - 1));
  }
  function nextImage(e: React.MouseEvent) {
    e.preventDefault();
    e.stopPropagation();
    setImgIndex((i) => (i === listing.imageUrls.length - 1 ? 0 : i + 1));
  }

  return (
    <div className="group bg-white rounded-2xl border border-slate-100 hover:border-yellow-300 hover:shadow-card-lg transition-all duration-300 overflow-hidden flex flex-col">
      <div className="relative h-52 bg-slate-50 overflow-hidden">
        {/* Cross-origin image served by the separate backoffice app —
            next/image would need remotePatterns for its host, which
            would break the moment that host changes; a plain <img>
            avoids that coupling entirely. */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={listing.imageUrls[imgIndex]}
          alt=""
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
        <span className="absolute top-3 left-3 bg-yellow-400 text-brand-black text-xs font-bold px-2.5 py-1 rounded-full">
          Vendeur Partenaire
        </span>

        {hasMultiple && (
          <>
            <button
              type="button"
              onClick={prevImage}
              aria-label="Photo précédente"
              className="absolute left-2 top-1/2 -translate-y-1/2 w-7 h-7 rounded-full bg-black/40 hover:bg-black/60 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
            >
              <ChevronLeft size={15} />
            </button>
            <button
              type="button"
              onClick={nextImage}
              aria-label="Photo suivante"
              className="absolute right-2 top-1/2 -translate-y-1/2 w-7 h-7 rounded-full bg-black/40 hover:bg-black/60 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
            >
              <ChevronRight size={15} />
            </button>
            <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex items-center gap-1.5">
              {listing.imageUrls.map((_, i) => (
                <span
                  key={i}
                  className={`h-1.5 rounded-full transition-all ${
                    i === imgIndex ? "w-4 bg-white" : "w-1.5 bg-white/50"
                  }`}
                />
              ))}
            </div>
          </>
        )}
      </div>

      <div className="p-5 flex flex-col flex-1">
        {listing.category && (
          <p className="text-yellow-600 text-xs font-semibold uppercase tracking-wider mb-1.5">
            {listing.category}
          </p>
        )}
        <h3 className="font-display font-bold text-brand-black text-base leading-snug mb-2 line-clamp-2">
          {listing.title}
        </h3>
        <p className="text-slate-500 text-sm leading-relaxed mb-4 line-clamp-3 flex-1">
          {listing.description}
        </p>

        <div className="flex items-baseline gap-2 mb-4">
          <span className="font-display text-2xl font-bold text-brand-black">
            {listing.price.toLocaleString("fr-FR")}
          </span>
          <span className="text-slate-400 text-sm">FCFA</span>
        </div>

        <a
          href={buildListingWhatsAppUrl(listing)}
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
      </div>
    </div>
  );
}

function SellerListingsSection() {
  const [listings, setListings] = useState<SellerListing[] | null>(null);
  const [activeCategory, setActiveCategory] = useState<string | "Tous">("Tous");

  useEffect(() => {
    let cancelled = false;
    fetch("/api/products")
      .then((res) => (res.ok ? res.json() : { products: [] }))
      .then((data) => {
        if (!cancelled) setListings(data.products ?? []);
      })
      .catch(() => {
        if (!cancelled) setListings([]);
      });
    return () => {
      cancelled = true;
    };
  }, []);

  // Nothing posted yet (or the backoffice is offline) — stay quiet rather
  // than showing an empty section on the public site.
  if (!listings || listings.length === 0) return null;

  // Filter pills come from what's actually posted right now (pulled live
  // from the backoffice's category table via /api/products) — a category
  // with zero current listings just doesn't get a pill, so a visitor never
  // filters into an empty grid.
  const categoryNames = Array.from(
    new Set(listings.map((l) => l.category).filter((c): c is string => c !== null))
  );
  const filtered =
    activeCategory === "Tous" ? listings : listings.filter((l) => l.category === activeCategory);

  return (
    <section className="bg-brand-cream py-16 border-t border-slate-100">
      <div className="w-full px-6 lg:px-16 xl:px-24">
        <div className="flex items-center gap-3 mb-3">
          <span className="h-px w-10 bg-yellow-400" />
          <span className="text-yellow-600 text-xs font-semibold uppercase tracking-widest">
            Publié par nos vendeurs partenaires
          </span>
        </div>
        <h2 className="font-display text-3xl lg:text-4xl font-bold text-brand-black mb-6">
          Annonces de Nos Vendeurs
        </h2>

        {categoryNames.length > 1 && (
          <div className="flex flex-wrap items-center gap-2 mb-8">
            <button
              onClick={() => setActiveCategory("Tous")}
              className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all duration-200 ${
                activeCategory === "Tous"
                  ? "bg-brand-black text-white"
                  : "bg-slate-100 text-slate-500 hover:bg-slate-200"
              }`}
            >
              Tous ({listings.length})
            </button>
            {categoryNames.map((cat) => {
              const count = listings.filter((l) => l.category === cat).length;
              return (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all duration-200 whitespace-nowrap ${
                    activeCategory === cat
                      ? "bg-yellow-400 text-brand-black"
                      : "bg-slate-100 text-slate-500 hover:bg-slate-200"
                  }`}
                >
                  {cat} ({count})
                </button>
              );
            })}
          </div>
        )}

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filtered.map((listing) => (
            <ListingCard key={listing.id} listing={listing} />
          ))}
        </div>
      </div>
    </section>
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
          1. CARROUSEL — now the page's hero. Images + the product each
          one sells are set by the admin in the backoffice; this is the
          first thing on the page, so it carries its own top clearance
          for the sticky navbar.
      ══════════════════════════════════════════════════ */}
      <ShopBannerCarousel />

      {/* Sections 2 & 3 (search/filters + curated grid) only make sense once
          there's a curated catalog to search and filter — with `products`
          empty they'd show nothing but a dead search bar and an empty
          state. Hidden as one block rather than leaving that clutter up
          while every visible product comes from the vendor section below. */}
      {products.length > 0 && (
      <>
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
      </>
      )}

      {/* ══════════════════════════════════════════════════
          3b. VENDOR LISTINGS — posted by sellers via the backoffice
      ══════════════════════════════════════════════════ */}
      <SellerListingsSection />

      {/* ══════════════════════════════════════════════════
          4. HOW TO ORDER
      ══════════════════════════════════════════════════ */}
      <section className="bg-brand-cream py-20">
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
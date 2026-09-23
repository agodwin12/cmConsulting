"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, MessageCircle } from "lucide-react";
import { SHOP_WHATSAPP } from "../app/data/products";

interface ShopBannerImage {
  id: string;
  imageUrl: string;
  productTitle: string;
  productPrice: number;
  productDescription: string;
}

const DURATION = 5500;

function buildBuyNowUrl(banner: ShopBannerImage): string {
  const msg =
    `Bonjour CM Shop 237 👋\n\nJe suis intéressé(e) par ce produit :\n\n` +
    `📦 *${banner.productTitle}*\n` +
    `${banner.productDescription}\n` +
    `💰 Prix : ${banner.productPrice.toLocaleString("fr-FR")} FCFA\n` +
    `\nPouvez-vous me donner plus d'informations sur la disponibilité et la livraison ? Merci !`;
  return `https://wa.me/${SHOP_WHATSAPP}?text=${encodeURIComponent(msg)}`;
}

/**
 * Split hero-style carousel for the top of the Boutique page — text and
 * photo side by side, both fading in together as the slide changes, photo
 * bleeding edge-to-edge on its side with a wave transition into the next
 * section. Structure borrowed from the Be Real Humanitarian site's hero
 * (flex split ~48/52, photo absolutely positioned and cross-fading behind
 * the text column) and adapted to CM's dark/yellow shop branding.
 *
 * Which images appear — and which product each one sells — is entirely
 * decided by the admin in the backoffice. Renders nothing while there are
 * no banners, same "stay quiet rather than show empty UI" rule used
 * elsewhere on this site.
 */
export default function ShopBannerCarousel() {
  const [banners, setBanners] = useState<ShopBannerImage[]>([]);
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    let cancelled = false;
    fetch("/api/shop-banners")
      .then((res) => (res.ok ? res.json() : { banners: [] }))
      .then((data) => {
        if (!cancelled) setBanners(data.banners ?? []);
      })
      .catch(() => {
        if (!cancelled) setBanners([]);
      });
    return () => {
      cancelled = true;
    };
  }, []);

  const total = banners.length;
  const next = useCallback(() => setCurrent((c) => (c + 1) % total), [total]);
  const prev = useCallback(() => setCurrent((c) => (c - 1 + total) % total), [total]);
  const goTo = useCallback((i: number) => setCurrent(i), []);

  useEffect(() => {
    if (paused || total <= 1) return;
    const id = setInterval(next, DURATION);
    return () => clearInterval(id);
  }, [paused, total, next]);

  if (total === 0) return null;
  const banner = banners[current];

  return (
    <section
      className="relative bg-brand-black overflow-hidden"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* Photo — absolutely positioned, bleeds to the right edge, stacked
          slides cross-fade via opacity so the transition never shows a gap */}
      <div className="absolute inset-y-0 right-0 left-[28%] sm:left-[32%] overflow-hidden">
        {banners.map((b, i) => (
          <img
            key={b.id}
            src={b.imageUrl}
            alt={b.productTitle}
            className="absolute inset-0 w-full h-full object-cover transition-opacity duration-[1400ms] ease-out"
            style={{ opacity: i === current ? 1 : 0 }}
          />
        ))}
        {/* Long, gradual fade where the photo dissolves into the text
            column's background — multiple stops so it tapers smoothly
            instead of reading as a straight edge */}
        <div className="absolute inset-y-0 left-0 w-1/2 sm:w-[55%] bg-gradient-to-r from-brand-black via-brand-black/80 via-30% to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-black/20" />
      </div>

      <div className="relative z-10 w-full px-6 lg:px-16 xl:px-24 pt-32 pb-16 sm:pt-40 sm:pb-20 lg:pt-44 lg:pb-24">
        <div className="flex items-center min-h-[22rem] sm:min-h-[26rem]">
          {/* Text — left column, fades + shifts up on every slide change */}
          <div className="w-full sm:w-[46%] lg:w-[42%]">
            <AnimatePresence mode="wait">
              <motion.div
                key={banner.id}
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="h-px w-10 bg-yellow-400" />
                  <span className="text-yellow-400 text-xs font-semibold uppercase tracking-widest">
                    CM Shop 237
                  </span>
                </div>
                <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl text-white font-bold leading-tight mb-3">
                  {banner.productTitle}
                </h2>
                <p className="text-white/55 text-sm sm:text-base leading-relaxed mb-5 line-clamp-2">
                  {banner.productDescription}
                </p>
                <p className="text-yellow-400 font-display text-2xl sm:text-3xl font-bold mb-7">
                  {banner.productPrice.toLocaleString("fr-FR")} FCFA
                </p>
                <a
                  href={buildBuyNowUrl(banner)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1ebe59] text-white font-semibold px-6 py-3.5 rounded-xl text-sm transition-all duration-200 hover:-translate-y-0.5"
                >
                  <MessageCircle size={17} />
                  Commander Maintenant
                </a>
              </motion.div>
            </AnimatePresence>

            {total > 1 && (
              <div className="flex items-center gap-4 mt-10">
                <button
                  onClick={prev}
                  aria-label="Précédent"
                  className="w-9 h-9 rounded-full bg-white/8 hover:bg-white/15 border border-white/12 flex items-center justify-center text-white/70 hover:text-white transition-all"
                >
                  <ChevronLeft size={15} />
                </button>
                <button
                  onClick={next}
                  aria-label="Suivant"
                  className="w-9 h-9 rounded-full bg-white/8 hover:bg-white/15 border border-white/12 flex items-center justify-center text-white/70 hover:text-white transition-all"
                >
                  <ChevronRight size={15} />
                </button>
                <div className="flex items-center gap-2 ml-1">
                  {banners.map((b, i) => (
                    <button
                      key={b.id}
                      onClick={() => goTo(i)}
                      aria-label={`Produit ${i + 1}`}
                      className="h-1.5 rounded-full transition-all duration-300"
                      style={{
                        width: i === current ? 22 : 7,
                        background: i === current ? "#FBBF24" : "rgba(255,255,255,0.25)",
                      }}
                    />
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Wave transition into the next (brand-cream) section */}
      <div className="absolute bottom-0 left-0 right-0 leading-none pointer-events-none">
        <svg viewBox="0 0 1440 90" className="w-full h-14 sm:h-20" preserveAspectRatio="none">
          <path fill="#EDECE8" d="M0,45 C240,90 480,10 720,35 C960,60 1200,90 1440,40 L1440,90 L0,90 Z" />
        </svg>
      </div>
    </section>
  );
}

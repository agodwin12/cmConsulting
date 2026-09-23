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

const DURATION = 5000;

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
 * Promotional image carousel for the top of the Boutique page. Which images
 * appear here — and which product each one links to — is entirely decided
 * by the admin in the backoffice (Carrousel Boutique section). Renders
 * nothing while there are no banners, same "stay quiet rather than show
 * empty UI" rule used elsewhere on this site.
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

  useEffect(() => {
    if (paused || total <= 1) return;
    const id = setInterval(next, DURATION);
    return () => clearInterval(id);
  }, [paused, total, next]);

  if (total === 0) return null;
  const banner = banners[current];

  return (
    <section className="bg-brand-black py-6 lg:py-8">
      <div className="w-full px-6 lg:px-16 xl:px-24">
        <div
          className="relative w-full h-64 sm:h-80 lg:h-[26rem] rounded-2xl overflow-hidden"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <AnimatePresence mode="sync">
            <motion.div
              key={banner.id}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="absolute inset-0"
            >
              {/* Cross-origin image served by the separate backoffice app —
                  next/image would need remotePatterns for its host, which
                  would break the moment that host changes; a plain <img>
                  avoids that coupling entirely. */}
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={banner.imageUrl}
                alt={banner.productTitle}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />
            </motion.div>
          </AnimatePresence>

          {/* Product + Buy Now — one clean row, bottom of the slide */}
          <div className="absolute inset-x-0 bottom-0 z-10 p-5 sm:p-7 lg:p-9 flex flex-wrap items-end justify-between gap-4">
            <div className="min-w-0">
              <h3 className="font-display text-white text-xl sm:text-2xl lg:text-3xl font-bold leading-snug line-clamp-1">
                {banner.productTitle}
              </h3>
              <p className="text-yellow-400 font-semibold text-base sm:text-lg mt-1">
                {banner.productPrice.toLocaleString("fr-FR")} FCFA
              </p>
            </div>
            <a
              href={buildBuyNowUrl(banner)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1ebe59] text-white font-semibold px-5 py-3 rounded-xl text-sm transition-all duration-200 hover:-translate-y-0.5 shrink-0"
            >
              <MessageCircle size={16} />
              Commander Maintenant
            </a>
          </div>

          {total > 1 && (
            <>
              <button
                onClick={prev}
                aria-label="Précédent"
                className="absolute left-3 top-1/2 -translate-y-1/2 z-10 w-9 h-9 rounded-full bg-black/40 hover:bg-black/60 border border-white/15 flex items-center justify-center text-white transition-all"
              >
                <ChevronLeft size={16} />
              </button>
              <button
                onClick={next}
                aria-label="Suivant"
                className="absolute right-3 top-1/2 -translate-y-1/2 z-10 w-9 h-9 rounded-full bg-black/40 hover:bg-black/60 border border-white/15 flex items-center justify-center text-white transition-all"
              >
                <ChevronRight size={16} />
              </button>

              <div className="absolute top-4 left-0 right-0 z-10 flex items-center justify-center gap-2">
                {banners.map((b, i) => (
                  <button
                    key={b.id}
                    onClick={() => setCurrent(i)}
                    aria-label={`Image ${i + 1}`}
                    className="h-1.5 rounded-full transition-all duration-300"
                    style={{
                      width: i === current ? 24 : 8,
                      background: i === current ? "#FBBF24" : "rgba(255,255,255,0.5)",
                    }}
                  />
                ))}
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  );
}

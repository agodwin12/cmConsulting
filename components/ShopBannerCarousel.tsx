"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface ShopBannerImage {
  id: string;
  imageUrl: string;
}

const DURATION = 5000;

/**
 * Promotional image carousel for the top of the Boutique page. The images
 * shown here are entirely controlled by the admin in the backoffice
 * (Carrousel Boutique section) — nothing hardcoded, nothing derived from
 * seller listings. Renders nothing while there are no images, same
 * "stay quiet rather than show empty UI" rule used elsewhere on this site.
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

  return (
    <section className="bg-brand-black py-6 lg:py-8">
      <div className="w-full px-6 lg:px-16 xl:px-24">
        <div
          className="relative w-full h-56 sm:h-72 lg:h-96 rounded-2xl overflow-hidden"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <AnimatePresence mode="sync">
            <motion.div
              key={banners[current].id}
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
                src={banners[current].imageUrl}
                alt=""
                className="w-full h-full object-cover"
              />
            </motion.div>
          </AnimatePresence>

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

              <div className="absolute bottom-3 left-0 right-0 z-10 flex items-center justify-center gap-2">
                {banners.map((b, i) => (
                  <button
                    key={b.id}
                    onClick={() => setCurrent(i)}
                    aria-label={`Image ${i + 1}`}
                    className="h-1.5 rounded-full transition-all duration-300"
                    style={{
                      width: i === current ? 24 : 8,
                      background: i === current ? "#FBBF24" : "rgba(255,255,255,0.4)",
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

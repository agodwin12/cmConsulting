"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useEffect, useLayoutEffect, useRef, useState, type CSSProperties } from "react";

const LABELS: Record<string, { tag: string; title: string }> = {
  fr: { tag: "Ils nous font confiance", title: "Nos Partenaires & Clients" },
  en: { tag: "Trusted by",              title: "Our Partners & Clients"    },
  pt: { tag: "Confiam em nós",          title: "Nossos Parceiros & Clientes" },
};

/**
 * Every file in /public/logos with its intrinsic pixel size.
 * Knowing the real aspect ratio up front lets each tile reserve its exact
 * width before the image arrives, so the row never reflows or jumps.
 * To drop a partner, delete its line.
 */
const LOGOS = [
  { src: "/logos/1.jpg",  alt: "Vitrine Africaine",                                        w: 916,  h: 916  },
  { src: "/logos/2.jpg",  alt: "KamerKonnect Media Group",                                 w: 930,  h: 930  },
  { src: "/logos/3.jpg",  alt: "ISIM – Institut Supérieur de l'Innovation et des Métiers", w: 1280, h: 1279 },
  { src: "/logos/4.jpg",  alt: "EM Consulting",                                            w: 681,  h: 481  },
  { src: "/logos/5.jpg",  alt: "Natural Beauty by Laurel",                                 w: 930,  h: 930  },
  { src: "/logos/6.jpg",  alt: "Prettis Corporation SARL",                                 w: 528,  h: 349  },
  { src: "/logos/7.jpg",  alt: "Résidence Ondo Appart VIP",                                w: 547,  h: 396  },
  { src: "/logos/8.jpg",  alt: "AriBiar – Parfums & Accessoires de Mode",                  w: 624,  h: 627  },
  { src: "/logos/9.jpg",  alt: "Laura Sen Business Consulting",                            w: 863,  h: 863  },
  { src: "/logos/10.jpg", alt: "InstrumElec Côte d'Ivoire",                                w: 706,  h: 471  },
  { src: "/logos/11.jpg", alt: "Les Délices de Popo",                                      w: 1280, h: 905  },
  { src: "/logos/12.jpg", alt: "Verdora Catering & Foodstuffs",                            w: 952,  h: 583  },
];

/** Constant travel speed, whatever the viewport width or the number of logos. */
const SPEED_PX_PER_SECOND = 60;

/** Layout effect in the browser, plain effect during SSR (avoids the server warning). */
const useIsomorphicLayoutEffect = typeof window === "undefined" ? useEffect : useLayoutEffect;

interface LogoSliderProps {
  lang?: "fr" | "en" | "pt";
  /** Which way the logos travel. Default "left": right-to-left, like reading order. */
  direction?: "left" | "right";
}

/**
 * Continuous partner-logo marquee.
 *
 * How the loop stays seamless (see .logo-marquee in app/global.css):
 * the first <ul> is the "period" — the track is exactly as wide as that set,
 * the copies are pinned at left: 100%, 200%, …, and the track slides by
 * -100% (one set) per cycle. The end of a cycle is pixel-identical to its
 * start, so there is no visible jump, whatever the screen size.
 */
export default function LogoSlider({ lang = "fr", direction = "left" }: LogoSliderProps) {
  const { tag, title } = LABELS[lang] ?? LABELS.fr;
  const stageRef = useRef<HTMLDivElement>(null);
  const setRef = useRef<HTMLUListElement>(null);
  // Two copies cover any viewport narrower than one set; wider screens get more.
  const [copies, setCopies] = useState(2);
  const [duration, setDuration] = useState(40);

  useIsomorphicLayoutEffect(() => {
    const stage = stageRef.current;
    const set = setRef.current;
    if (!stage || !set) return;

    const measure = () => {
      const setWidth = set.getBoundingClientRect().width;
      const stageWidth = stage.clientWidth;
      if (!setWidth || !stageWidth) return;
      // The stage must stay covered while one full set scrolls out: ceil(stage / set) sets + 1.
      setCopies(Math.max(2, Math.ceil(stageWidth / setWidth) + 1));
      setDuration(setWidth / SPEED_PX_PER_SECOND);
    };

    measure();
    const observer = new ResizeObserver(measure);
    observer.observe(stage);
    observer.observe(set);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      style={{
        background: "#151A24",
        borderTop: "1px solid rgba(255,255,255,0.05)",
        borderBottom: "1px solid rgba(255,255,255,0.05)",
        padding: "4rem 0 1.75rem",
        overflow: "hidden",
        position: "relative",
      }}
    >
      {/* Glow */}
      <div aria-hidden style={{
        position: "absolute", top: "-60px", left: "10%",
        width: "400px", height: "200px",
        background: "radial-gradient(ellipse, #29ABE222 0%, transparent 70%)",
        pointerEvents: "none",
      }} />

      {/* Header */}
      <div style={{ textAlign: "center", marginBottom: "2.5rem", padding: "0 2rem" }}>
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          style={{
            fontSize: ".68rem", fontWeight: 700, letterSpacing: ".22em",
            textTransform: "uppercase" as const, color: "#29ABE2", marginBottom: ".5rem",
          }}
        >
          {tag}
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.08 }}
          style={{
            fontFamily: "'Bebas Neue', sans-serif",
            fontSize: "clamp(1.6rem, 3.5vw, 2.4rem)",
            fontWeight: 400, letterSpacing: ".04em", color: "#fff", margin: 0,
          }}
        >
          {title}
        </motion.h2>
      </div>

      {/* Stage — full-bleed, clips the track, fades both edges */}
      <div
        ref={stageRef}
        className="logo-marquee"
        data-direction={direction}
        style={{ "--marquee-duration": `${duration}s` } as CSSProperties}
      >
        <div className="logo-marquee__track">
          {Array.from({ length: copies }, (_, copy) => (
            <ul
              key={copy}
              ref={copy === 0 ? setRef : undefined}
              role="list"
              aria-hidden={copy > 0 ? true : undefined}
              className={copy === 0 ? "logo-marquee__set" : "logo-marquee__set logo-marquee__set--copy"}
              style={copy > 0 ? ({ "--marquee-offset": copy } as CSSProperties) : undefined}
            >
              {LOGOS.map(logo => (
                <li
                  key={logo.src}
                  className="logo-marquee__tile"
                  style={{ "--ratio": `${logo.w} / ${logo.h}` } as CSSProperties}
                >
                  <Image
                    src={logo.src}
                    alt={copy === 0 ? logo.alt : ""}
                    width={logo.w}
                    height={logo.h}
                    sizes="(max-width: 768px) 160px, 200px"
                    quality={85}
                    draggable={false}
                  />
                </li>
              ))}
            </ul>
          ))}
        </div>
      </div>
    </section>
  );
}

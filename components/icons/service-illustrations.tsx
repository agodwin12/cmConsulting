import type { SVGProps } from "react";

/**
 * Small spot illustrations for the Process and Services cards — same
 * concept as BaakoPay's feature-illustrations.tsx (layered shapes on a
 * shared canvas, brand palette, soft background blob + ground shadow)
 * but in CM Consulting's own blue/black palette and sized for a compact
 * badge instead of a full feature card.
 */

const BLUE = "#29ABE2";
const BLUE_DARK = "#0369a1";
const BLUE_LIGHT = "#7dd3fc";
const BLUE_SOFT = "#e8f6ff";
const BLACK = "#0D0D0D";
const YELLOW = "#FBBF24";
const YELLOW_DEEP = "#EAB308";

function Canvas({ children, ...props }: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 64 64" fill="none" aria-hidden="true" {...props}>
      {children}
    </svg>
  );
}

function Backdrop({ fill = BLUE_SOFT }: { fill?: string }) {
  return <circle cx="32" cy="32" r="28" fill={fill} />;
}

/* ───────────────────────── Process ───────────────────────── */

export function ListenDiagnoseArt(props: SVGProps<SVGSVGElement>) {
  return (
    <Canvas {...props}>
      <Backdrop />
      {/* Clipboard */}
      <rect x="16" y="14" width="26" height="34" rx="4" fill="#fff" stroke={BLUE_LIGHT} strokeWidth="1.5" />
      <rect x="24" y="11" width="10" height="5" rx="2" fill={BLUE_DARK} />
      <rect x="21" y="24" width="18" height="3" rx="1.5" fill={BLUE} opacity="0.85" />
      <rect x="21" y="31" width="14" height="3" rx="1.5" fill={BLUE} opacity="0.5" />
      <rect x="21" y="38" width="10" height="3" rx="1.5" fill={BLUE} opacity="0.3" />
      {/* Magnifying glass */}
      <circle cx="42" cy="42" r="9" fill="#fff" stroke={BLACK} strokeWidth="2.5" />
      <path d="M48.5 48.5 54 54" stroke={BLACK} strokeWidth="3" strokeLinecap="round" />
      <path d="M38 42a4 4 0 0 1 4-4" stroke={BLUE} strokeWidth="1.8" strokeLinecap="round" />
    </Canvas>
  );
}

export function TailoredStrategyArt(props: SVGProps<SVGSVGElement>) {
  return (
    <Canvas {...props}>
      <Backdrop />
      <circle cx="32" cy="32" r="17" fill="#fff" stroke={BLUE_LIGHT} strokeWidth="2" />
      <circle cx="32" cy="32" r="11" fill={BLUE_SOFT} stroke={BLUE} strokeWidth="2" />
      <circle cx="32" cy="32" r="5" fill={BLUE} />
      {/* Arrow hitting the target */}
      <path d="M50 14 34 30" stroke={BLACK} strokeWidth="2.5" strokeLinecap="round" />
      <path d="M50 14 43 15.5 48.5 20.5Z" fill={BLACK} />
    </Canvas>
  );
}

export function ExecutionDeliveryArt(props: SVGProps<SVGSVGElement>) {
  return (
    <Canvas {...props}>
      <Backdrop />
      {/* Flame trail */}
      <path d="M27 46c-2 5-2 9 1 12 1-3 2-5 4-6-1 4 0 7 2 9 2-3 2-6 1-9 2 2 3 5 2 8 3-3 4-7 2-12Z" fill={YELLOW} />
      {/* Rocket body */}
      <path d="M32 12c7 3 10 11 9 21-1 6-4 9-9 12-5-3-8-6-9-12-1-10 2-18 9-21Z" fill="#fff" stroke={BLUE} strokeWidth="1.8" />
      <path d="M32 12c7 3 10 11 9 21-1 6-4 9-9 12V12Z" fill={BLUE_SOFT} />
      <circle cx="32" cy="27" r="5" fill={BLUE} />
      <path d="M23 33c-3 1-5 4-5 8 3-1 6-2 7-4Z" fill={BLUE_DARK} />
      <path d="M41 33c3 1 5 4 5 8-3-1-6-2-7-4Z" fill={BLUE_DARK} />
    </Canvas>
  );
}

export function GrowthArt(props: SVGProps<SVGSVGElement>) {
  return (
    <Canvas {...props}>
      <Backdrop />
      {/* Bars */}
      <rect x="15" y="38" width="7" height="12" rx="1.5" fill={BLUE} opacity="0.55" />
      <rect x="25" y="30" width="7" height="20" rx="1.5" fill={BLUE} opacity="0.75" />
      <rect x="35" y="22" width="7" height="28" rx="1.5" fill={BLUE} />
      {/* Trend line + arrow */}
      <path d="M14 34 24 24 32 30 46 14" stroke={BLACK} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M38 14h8v8" stroke={BLACK} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
    </Canvas>
  );
}

/* ───────────────────────── Services ───────────────────────── */

export function ConsultingArt(props: SVGProps<SVGSVGElement>) {
  return (
    <Canvas {...props}>
      <Backdrop />
      {/* Bar chart */}
      <rect x="16" y="34" width="8" height="16" rx="2" fill={BLUE} opacity="0.5" />
      <rect x="28" y="26" width="8" height="24" rx="2" fill={BLUE} opacity="0.75" />
      <rect x="40" y="16" width="8" height="34" rx="2" fill={BLUE} />
      {/* Lightbulb idea badge */}
      <circle cx="46" cy="16" r="9" fill={YELLOW} />
      <path d="M46 11a5 5 0 0 0-3 9v2h6v-2a5 5 0 0 0-3-9Z" fill="#fff" />
      <rect x="44" y="22" width="4" height="2" rx="1" fill="#fff" />
    </Canvas>
  );
}

export function ITMaintenanceArt(props: SVGProps<SVGSVGElement>) {
  return (
    <Canvas {...props}>
      <Backdrop />
      {/* Server tower */}
      <rect x="16" y="14" width="24" height="36" rx="4" fill="#fff" stroke={BLUE_LIGHT} strokeWidth="1.5" />
      <rect x="20" y="19" width="16" height="6" rx="1.5" fill={BLUE_SOFT} />
      <circle cx="23" cy="22" r="1.6" fill={BLUE} />
      <rect x="20" y="29" width="16" height="6" rx="1.5" fill={BLUE_SOFT} />
      <circle cx="23" cy="32" r="1.6" fill={BLUE} />
      <rect x="20" y="39" width="16" height="6" rx="1.5" fill={BLUE_SOFT} />
      <circle cx="23" cy="42" r="1.6" fill={BLUE} />
      {/* Gear badge */}
      <circle cx="46" cy="44" r="11" fill={BLACK} />
      <circle cx="46" cy="44" r="4.2" fill="none" stroke="#fff" strokeWidth="2" />
      <g stroke="#fff" strokeWidth="2" strokeLinecap="round">
        <path d="M46 37v2.2M46 48.8V51M39 44h2.2M48.8 44H51M41.1 39.1l1.5 1.5M51.4 39.1l-1.5 1.5M41.1 48.9l1.5-1.5M51.4 48.9l-1.5-1.5" />
      </g>
    </Canvas>
  );
}

export function VisualDesignArt(props: SVGProps<SVGSVGElement>) {
  return (
    <Canvas {...props}>
      <Backdrop />
      {/* Palette */}
      <path
        d="M32 14c-11 0-19 8-19 17 0 6 4 9 8 9 2 0 3-1 3-3 0-3 3-3 5-2 2 1 4 2 6 2 8 0 16-8 16-15 0-5-9-8-19-8Z"
        fill="#fff"
        stroke={BLUE}
        strokeWidth="1.8"
      />
      <circle cx="24" cy="24" r="3" fill={BLUE} />
      <circle cx="34" cy="20" r="3" fill={YELLOW} />
      <circle cx="42" cy="26" r="3" fill={BLACK} />
      <circle cx="26" cy="33" r="3" fill={BLUE_LIGHT} />
      {/* Pen nib */}
      <path d="M44 34 54 44l-3 7-7-3Z" fill={BLACK} />
      <path d="M50 47 45 42" stroke="#fff" strokeWidth="1.3" />
    </Canvas>
  );
}

export function SoftwareDevArt(props: SVGProps<SVGSVGElement>) {
  return (
    <Canvas {...props}>
      <Backdrop />
      {/* Monitor */}
      <rect x="12" y="16" width="40" height="27" rx="4" fill={BLACK} />
      <rect x="16" y="20" width="32" height="19" rx="1.5" fill={BLUE_SOFT} />
      <rect x="26" y="45" width="12" height="4" rx="1.5" fill={BLACK} />
      <rect x="21" y="49" width="22" height="3" rx="1.5" fill={BLACK} opacity="0.7" />
      {/* Code brackets */}
      <path d="M25 24 20 29.5 25 35" stroke={BLUE} strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M39 24 44 29.5 39 35" stroke={BLUE} strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M34 22 30 37" stroke="#fff" strokeWidth="2.2" strokeLinecap="round" />
    </Canvas>
  );
}

export function OnlineShopArt(props: SVGProps<SVGSVGElement>) {
  return (
    <Canvas {...props}>
      <Backdrop fill="#FEF3C7" />
      {/* Shopping bag */}
      <path d="M18 24h28l-2 26a4 4 0 0 1-4 4H24a4 4 0 0 1-4-4Z" fill="#fff" stroke={YELLOW_DEEP} strokeWidth="1.8" />
      <path d="M24 24v-4a8 8 0 0 1 16 0v4" stroke={BLACK} strokeWidth="2.2" strokeLinecap="round" />
      <rect x="21" y="30" width="22" height="3" rx="1.5" fill={YELLOW} />
      {/* Price tag badge */}
      <circle cx="47" cy="18" r="10" fill={BLACK} />
      <text x="47" y="22" textAnchor="middle" fontSize="10" fontWeight="700" fill="#fff">%</text>
    </Canvas>
  );
}

export function CloudSolutionsArt(props: SVGProps<SVGSVGElement>) {
  return (
    <Canvas {...props}>
      <Backdrop />
      <path
        d="M22 42a9 9 0 0 1-1-17.9A12 12 0 0 1 44 21a8 8 0 0 1 3 15.6"
        fill="#fff"
        stroke={BLUE}
        strokeWidth="1.8"
      />
      <path d="M22 42h25a8 8 0 0 0-2-15.4" fill="#fff" />
      <ellipse cx="30" cy="41" rx="17" ry="9" fill="#fff" stroke={BLUE} strokeWidth="1.8" />
      {/* Shield lock (security) */}
      <path d="M46 30v8c0 6 4 9 7 10 3-1 7-4 7-10v-8l-7-3Z" fill={BLUE_DARK} />
      <rect x="49.5" y="35" width="7" height="6" rx="1.5" fill="#fff" />
      <path d="M51 35v-2a2 2 0 0 1 4 0v2" stroke="#fff" strokeWidth="1.4" fill="none" />
    </Canvas>
  );
}

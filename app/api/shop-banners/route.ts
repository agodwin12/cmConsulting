import { NextResponse } from "next/server";

export interface ShopBannerImage {
  id: string;
  imageUrl: string;
  productTitle: string;
  productPrice: number;
  productDescription: string;
}

/**
 * Server-side proxy to the backoffice's public Boutique-carousel feed.
 * Same fail-soft pattern as app/api/products/route.ts: an empty list
 * rather than a broken page if the backoffice is down, and
 * BACKOFFICE_URL never reaches the browser.
 */
export async function GET() {
  const base = process.env.BACKOFFICE_URL ?? "http://localhost:3006";

  try {
    const res = await fetch(`${base}/api/public/banners`, { cache: "no-store" });
    if (!res.ok) return NextResponse.json({ banners: [] as ShopBannerImage[] });
    const data = await res.json();
    return NextResponse.json({ banners: (data.banners ?? []) as ShopBannerImage[] });
  } catch {
    return NextResponse.json({ banners: [] as ShopBannerImage[] });
  }
}

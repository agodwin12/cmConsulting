import { NextResponse } from "next/server";

export interface SellerProduct {
  id: string;
  /** 1 to 5 photos, in the order the seller arranged them. */
  imageUrls: string[];
  title: string;
  description: string;
  price: number;
  /** Null if the seller's category was since deleted by the admin. */
  category: string | null;
}

/**
 * Server-side proxy to the separate backoffice app's public product feed.
 * The Boutique page fetches this same-origin route instead of calling the
 * backoffice directly, so BACKOFFICE_URL never reaches the browser and the
 * page never has a cross-origin request to worry about.
 *
 * If the backoffice isn't running, this fails soft: an empty list rather
 * than a broken Boutique page.
 */
export async function GET() {
  const base = process.env.BACKOFFICE_URL ?? "http://localhost:3006";

  try {
    const res = await fetch(`${base}/api/public/products`, { cache: "no-store" });
    if (!res.ok) return NextResponse.json({ products: [] as SellerProduct[] });
    const data = await res.json();
    return NextResponse.json({ products: (data.products ?? []) as SellerProduct[] });
  } catch {
    return NextResponse.json({ products: [] as SellerProduct[] });
  }
}

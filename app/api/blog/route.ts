import { NextResponse } from "next/server";

export interface BlogPostSummary {
  slug: string;
  title: string;
  category: string | null;
  excerpt: string;
  coverUrl: string | null;
  createdAt: string;
}

/**
 * Server-side proxy to the separate backoffice app's public blog feed.
 * Only needed by client components (the homepage's blog preview, which
 * can't read BACKOFFICE_URL itself) — the /blog and /blog/[slug] pages are
 * Server Components and fetch the backoffice directly, no proxy needed.
 *
 * If the backoffice isn't running, this fails soft: an empty list rather
 * than a broken homepage.
 */
export async function GET() {
  const base = process.env.BACKOFFICE_URL ?? "http://localhost:3006";

  try {
    const res = await fetch(`${base}/api/public/blog`, { cache: "no-store" });
    if (!res.ok) return NextResponse.json({ posts: [] as BlogPostSummary[] });
    const data = await res.json();
    return NextResponse.json({ posts: (data.posts ?? []) as BlogPostSummary[] });
  } catch {
    return NextResponse.json({ posts: [] as BlogPostSummary[] });
  }
}

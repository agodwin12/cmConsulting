import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Calendar, ArrowLeft, MessageCircle } from "lucide-react";

interface Post {
  slug: string;
  title: string;
  category: string | null;
  excerpt: string;
  content: string;
  imageUrls: string[];
  createdAt: string;
}

/**
 * Server Component — fetches the backoffice directly, same as /blog.
 * Returns null (→ notFound()) both when the post genuinely doesn't exist
 * and when the backoffice is unreachable, so a dead backend degrades to a
 * normal 404 rather than a crash.
 */
async function getPost(slug: string): Promise<Post | null> {
  const base = process.env.BACKOFFICE_URL ?? "http://localhost:3006";
  try {
    const res = await fetch(`${base}/api/public/blog/${encodeURIComponent(slug)}`, { cache: "no-store" });
    if (!res.ok) return null;
    const data = await res.json();
    return data.post ?? null;
  } catch {
    return null;
  }
}

function formatDate(iso: string): string {
  return new Date(iso).toLocaleDateString("fr-FR", { day: "numeric", month: "long", year: "numeric" });
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const post = await getPost(params.slug);
  if (!post) return { title: "Article introuvable" };
  return { title: post.title, description: post.excerpt };
}

export default async function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = await getPost(params.slug);
  if (!post) notFound();

  const [cover, ...gallery] = post.imageUrls;
  const paragraphs = post.content.split(/\n\s*\n/).map((p) => p.trim()).filter(Boolean);

  return (
    <>
      <section className="relative bg-brand-black pt-44 pb-20 overflow-hidden">
        {cover && (
          <div className="absolute inset-0 z-0">
            {/* Cross-origin image served by the separate backoffice app —
                next/image would need remotePatterns for its host, which
                would break the moment that host changes; a plain <img>
                avoids that coupling entirely. */}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={cover} alt="" className="w-full h-full object-cover opacity-25" />
            <div className="absolute inset-0 bg-gradient-to-r from-brand-black via-brand-black/90 to-brand-black/60" />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-transparent to-transparent" />
          </div>
        )}

        <div className="relative z-10 max-w-3xl mx-auto px-6 lg:px-8">
          <Link
            href="/blog"
            className="inline-flex items-center gap-1.5 text-white/50 hover:text-white text-xs font-semibold uppercase tracking-widest mb-6 transition-colors"
          >
            <ArrowLeft size={13} />
            Retour au blog
          </Link>
          {post.category && (
            <span className="inline-block bg-brand-blue-500 text-white text-xs font-semibold px-3 py-1 rounded-full mb-4">
              {post.category}
            </span>
          )}
          <h1 className="font-display text-3xl md:text-4xl lg:text-5xl text-white font-bold leading-tight mb-5">
            {post.title}
          </h1>
          <span className="flex items-center gap-1.5 text-white/50 text-sm">
            <Calendar size={13} />
            {formatDate(post.createdAt)}
          </span>
        </div>
      </section>

      <article className="bg-white py-16">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <div className="space-y-5 text-slate-600 text-base leading-relaxed">
            {paragraphs.map((paragraph, i) => (
              <p key={i}>{paragraph}</p>
            ))}
          </div>

          {gallery.length > 0 && (
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mt-10">
              {gallery.map((url, i) => (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  key={i}
                  src={url}
                  alt=""
                  className="w-full h-40 object-cover rounded-xl border border-slate-100"
                />
              ))}
            </div>
          )}

          <div className="mt-14 pt-8 border-t border-slate-100 flex flex-wrap items-center justify-between gap-4">
            <Link
              href="/blog"
              className="inline-flex items-center gap-1.5 text-brand-blue-500 hover:text-brand-blue-600 text-sm font-semibold transition-colors"
            >
              <ArrowLeft size={14} />
              Tous les articles
            </Link>
            <a
              href="https://wa.me/237690486009"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1ebe59] text-white font-semibold px-5 py-2.5 rounded-xl text-sm transition-all duration-200 hover:-translate-y-0.5"
            >
              <MessageCircle size={15} />
              Discuter de ce sujet
            </a>
          </div>
        </div>
      </article>
    </>
  );
}

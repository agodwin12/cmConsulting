import type { Metadata } from "next";
import Link from "next/link";
import { Calendar, ArrowRight, Newspaper } from "lucide-react";

export const metadata: Metadata = {
  title: "Blog",
  description: "Conseils, stratégie et actualités de CM Consulting.",
};

interface PostSummary {
  slug: string;
  title: string;
  category: string | null;
  excerpt: string;
  coverUrl: string | null;
  createdAt: string;
}

function formatDate(iso: string): string {
  return new Date(iso).toLocaleDateString("fr-FR", { day: "numeric", month: "long", year: "numeric" });
}

/**
 * Server Component — fetches the backoffice directly (no client-side proxy
 * needed here, unlike the homepage's teaser which is inside a "use client"
 * component). Fails soft to an empty list if the backoffice is offline, so
 * this page still renders instead of crashing.
 */
async function getPosts(): Promise<PostSummary[]> {
  const base = process.env.BACKOFFICE_URL ?? "http://localhost:3006";
  try {
    const res = await fetch(`${base}/api/public/blog`, { cache: "no-store" });
    if (!res.ok) return [];
    const data = await res.json();
    return data.posts ?? [];
  } catch {
    return [];
  }
}

function PostCover({ post, className }: { post: PostSummary; className: string }) {
  if (!post.coverUrl) {
    return (
      <div className={`${className} bg-brand-darkgray flex items-center justify-center`}>
        <Newspaper size={28} className="text-white/20" />
      </div>
    );
  }
  // Cross-origin image served by the separate backoffice app — next/image
  // would need remotePatterns for its host, which would break the moment
  // that host changes; a plain <img> avoids that coupling entirely.
  // eslint-disable-next-line @next/next/no-img-element
  return <img src={post.coverUrl} alt="" className={className} />;
}

export default async function BlogPage() {
  const posts = await getPosts();
  const [featured, ...rest] = posts;

  return (
    <>
      <section className="bg-hero-gradient pt-40 pb-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-6">
            <span className="h-px w-10 bg-brand-blue-500" />
            <span className="text-brand-blue-400 text-sm font-semibold uppercase tracking-widest">
              Conseils & Actualités
            </span>
          </div>
          <h1 className="font-display text-display-lg text-white font-bold max-w-xl mb-4">
            Le Blog CM Consulting
          </h1>
          <p className="text-white/60 text-lg max-w-xl">
            Stratégie, technologie et leadership — directement de nos consultants sur le terrain.
          </p>
        </div>
      </section>

      <section className="bg-white py-section">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          {!featured ? (
            <div className="flex flex-col items-center justify-center py-24 text-center">
              <div className="w-20 h-20 rounded-2xl bg-slate-100 flex items-center justify-center mb-5">
                <Newspaper size={32} className="text-slate-300" />
              </div>
              <h2 className="font-display text-xl font-bold text-brand-black mb-2">
                Aucun article pour le moment
              </h2>
              <p className="text-slate-500 text-sm max-w-xs leading-relaxed">
                Revenez bientôt — nos consultants préparent leurs premiers articles.
              </p>
            </div>
          ) : (
            <>
              {/* Featured */}
              <Link
                href={`/blog/${featured.slug}`}
                className="block bg-brand-black rounded-2xl p-8 md:p-12 mb-12 relative overflow-hidden group"
              >
                {featured.coverUrl && (
                  // Cross-origin image served by the separate backoffice app —
                  // next/image would need remotePatterns for its host, which
                  // would break the moment that host changes; a plain <img>
                  // avoids that coupling entirely.
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={featured.coverUrl}
                    alt=""
                    className="absolute inset-0 w-full h-full object-cover opacity-30 group-hover:opacity-40 group-hover:scale-105 transition-all duration-500"
                  />
                )}
                <div className="absolute inset-0 bg-gradient-to-r from-brand-black via-brand-black/85 to-transparent" />
                <div className="absolute top-0 right-0 w-80 h-80 bg-brand-blue-500/10 rounded-full blur-3xl pointer-events-none" />
                <div className="relative z-10 max-w-2xl">
                  <span className="inline-block bg-brand-blue-500 text-white text-xs font-semibold px-3 py-1 rounded-full mb-4">
                    {featured.category ?? "À la une"}
                  </span>
                  <h2 className="font-display text-2xl md:text-3xl font-bold text-white mb-4 group-hover:text-brand-blue-300 transition-colors">
                    {featured.title}
                  </h2>
                  <p className="text-white/60 leading-relaxed mb-6 text-sm">{featured.excerpt}</p>
                  <div className="flex items-center gap-5 text-white/40 text-xs mb-6">
                    <span className="flex items-center gap-1.5">
                      <Calendar size={12} />
                      {formatDate(featured.createdAt)}
                    </span>
                  </div>
                  <span className="inline-flex items-center gap-2 text-brand-blue-400 group-hover:text-brand-blue-300 font-semibold text-sm">
                    Lire l&apos;article
                    <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
                  </span>
                </div>
              </Link>

              {/* Grid */}
              {rest.length > 0 && (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {rest.map((post) => (
                    <article
                      key={post.slug}
                      className="group bg-white border border-slate-100 rounded-2xl overflow-hidden hover:shadow-card-lg hover:border-brand-blue-200 transition-all duration-300 flex flex-col"
                    >
                      <div className="relative h-44 overflow-hidden">
                        <PostCover
                          post={post}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        <span className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm text-brand-black text-xs font-semibold px-3 py-1 rounded-full">
                          {post.category ?? "Article"}
                        </span>
                      </div>
                      <div className="p-6 flex flex-col flex-1">
                        <h3 className="font-display text-lg font-bold text-brand-black mb-3 group-hover:text-brand-blue-600 transition-colors leading-snug line-clamp-2">
                          {post.title}
                        </h3>
                        <p className="text-slate-500 text-sm leading-relaxed mb-5 flex-1 line-clamp-3">
                          {post.excerpt}
                        </p>
                        <div className="flex items-center justify-between border-t border-slate-100 pt-4 mt-auto">
                          <span className="flex items-center gap-1 text-slate-400 text-xs">
                            <Calendar size={11} />
                            {formatDate(post.createdAt)}
                          </span>
                          <Link
                            href={`/blog/${post.slug}`}
                            className="text-brand-blue-500 hover:text-brand-blue-600 text-xs font-semibold flex items-center gap-1 group/link"
                          >
                            Lire la suite
                            <ArrowRight size={12} className="group-hover/link:translate-x-0.5 transition-transform" />
                          </Link>
                        </div>
                      </div>
                    </article>
                  ))}
                </div>
              )}
            </>
          )}
        </div>
      </section>
    </>
  );
}

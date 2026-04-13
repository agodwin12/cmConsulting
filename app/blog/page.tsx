import type { Metadata } from "next";
import Link from "next/link";
import { Calendar, Clock, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Blog",
  description: "Insights, strategy guides, and thought leadership from CM Consulting.",
};

const posts = [
  {
    slug: "digital-transformation-africa",
    category: "Strategy",
    title: "Digital Transformation in Africa: Opportunities and Pitfalls",
    excerpt: "As African markets accelerate their digital adoption, businesses that get their transformation sequencing right will pull ahead. Here's what we've learned from 30+ digital transformation projects.",
    date: "May 20, 2024",
    readTime: "6 min read",
  },
  {
    slug: "cloud-migration-guide",
    category: "Cloud",
    title: "The 5-Stage Cloud Migration Framework We Use With Every Client",
    excerpt: "Cloud migration failure rates remain high — often because companies skip the discovery and governance stages. Our battle-tested framework has helped clients migrate without disruption.",
    date: "April 12, 2024",
    readTime: "8 min read",
  },
  {
    slug: "business-strategy-mistakes",
    category: "Business",
    title: "7 Strategy Mistakes That Derail High-Potential Companies",
    excerpt: "After hundreds of strategy engagements, we see the same errors repeatedly. From confusing goals with strategies to ignoring execution bandwidth — here's what to watch for.",
    date: "March 28, 2024",
    readTime: "5 min read",
  },
  {
    slug: "web-performance-roi",
    category: "Web Dev",
    title: "How a 1-Second Improvement in Load Time Impacts Your Revenue",
    excerpt: "Page speed is not an IT metric — it's a business metric. We break down the real-world revenue implications of web performance for B2B and B2C companies.",
    date: "February 14, 2024",
    readTime: "4 min read",
  },
  {
    slug: "it-consulting-questions",
    category: "IT",
    title: "10 Questions to Ask Before Hiring an IT Consultant",
    excerpt: "Choosing the wrong IT partner can set your business back years. These are the questions that separate strategic advisors from order-takers — and the answers you should expect.",
    date: "January 30, 2024",
    readTime: "7 min read",
  },
  {
    slug: "startup-scaling-playbook",
    category: "Strategy",
    title: "The Startup Scaling Playbook: From $1M to $10M ARR",
    excerpt: "Scaling is not just about growth — it's about building the systems, people, and processes that can handle growth without breaking. This is the playbook we share with our fastest-growing clients.",
    date: "January 8, 2024",
    readTime: "9 min read",
  },
];

const categoryColors: Record<string, string> = {
  Strategy: "bg-brand-black text-brand-blue-400",
  Cloud:    "bg-sky-100 text-sky-700",
  Business: "bg-emerald-100 text-emerald-700",
  "Web Dev":"bg-violet-100 text-violet-700",
  IT:       "bg-amber-100 text-amber-700",
};

export default function BlogPage() {
  return (
    <>
      <section className="bg-hero-gradient pt-40 pb-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-6">
            <span className="h-px w-10 bg-brand-blue-500" />
            <span className="text-brand-blue-400 text-sm font-semibold uppercase tracking-widest">Insights & Ideas</span>
          </div>
          <h1 className="font-display text-display-lg text-white font-bold max-w-xl mb-4">
            The CM Consulting Blog
          </h1>
          <p className="text-white/60 text-lg max-w-xl">
            Strategy, technology, and leadership — straight from our consultants in the field.
          </p>
        </div>
      </section>

      <section className="bg-white py-section">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">

          {/* Featured */}
          <div className="bg-gradient-to-br from-brand-black to-brand-darkgray rounded-2xl p-8 md:p-12 mb-12 relative overflow-hidden group cursor-pointer">
            <div className="absolute top-0 right-0 w-80 h-80 bg-brand-blue-500/10 rounded-full blur-3xl pointer-events-none" />
            <div className="relative z-10 max-w-2xl">
              <span className="inline-block bg-brand-blue-500 text-white text-xs font-semibold px-3 py-1 rounded-full mb-4">
                Featured
              </span>
              <h2 className="font-display text-2xl md:text-3xl font-bold text-white mb-4 group-hover:text-brand-blue-300 transition-colors">
                {posts[0].title}
              </h2>
              <p className="text-white/60 leading-relaxed mb-6 text-sm">{posts[0].excerpt}</p>
              <div className="flex items-center gap-5 text-white/40 text-xs mb-6">
                <span className="flex items-center gap-1.5"><Calendar size={12} />{posts[0].date}</span>
                <span className="flex items-center gap-1.5"><Clock size={12} />{posts[0].readTime}</span>
              </div>
              <Link
                href={`/blog/${posts[0].slug}`}
                className="inline-flex items-center gap-2 text-brand-blue-400 hover:text-brand-blue-300 font-semibold text-sm group/btn"
              >
                Read Article
                <ArrowRight size={15} className="group-hover/btn:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.slice(1).map((post) => (
              <article
                key={post.slug}
                className="group bg-white border border-slate-100 rounded-2xl p-6 hover:shadow-card-lg hover:border-brand-blue-200 transition-all duration-300 flex flex-col"
              >
                <span className={`self-start text-xs font-semibold px-3 py-1 rounded-full mb-4 ${categoryColors[post.category] ?? "bg-slate-100 text-slate-600"}`}>
                  {post.category}
                </span>
                <h3 className="font-display text-lg font-bold text-brand-black mb-3 group-hover:text-brand-blue-600 transition-colors leading-snug">
                  {post.title}
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed mb-5 flex-1">{post.excerpt}</p>
                <div className="flex items-center justify-between border-t border-slate-100 pt-4 mt-auto">
                  <div className="flex items-center gap-4 text-slate-400 text-xs">
                    <span className="flex items-center gap-1"><Calendar size={11} />{post.date}</span>
                    <span className="flex items-center gap-1"><Clock size={11} />{post.readTime}</span>
                  </div>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="text-brand-blue-500 hover:text-brand-blue-600 text-xs font-semibold flex items-center gap-1 group/link"
                  >
                    Read More
                    <ArrowRight size={12} className="group-hover/link:translate-x-0.5 transition-transform" />
                  </Link>
                </div>
              </article>
            ))}
          </div>

          <div className="text-center mt-12">
            <button
              type="button"
              className="border border-slate-200 hover:border-brand-blue-400 text-slate-600 hover:text-brand-blue-600 px-8 py-3 rounded-xl text-sm font-medium transition-all duration-200"
            >
              Load More Articles
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
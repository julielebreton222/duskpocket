/*
 * DUSK POCKET — Home Page
 * Y2K Vaporwave Literary: Hero, featured pieces, CTA to prompts database
 */

import { Link } from "wouter";
import { pieces } from "@/data/pieces";
import { SOCIAL_LINKS } from "@/components/Layout";
import { ArrowRight } from "lucide-react";

const HERO_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663230637583/4C7sSvfiEUGovrg6fBThvF/hero-main-LNQ3fjSYsZWxW2tHiCPd9r.webp";

export default function Home() {
  const featured = pieces.slice(0, 3);

  return (
    <div>
      {/* Hero Section */}
      <section className="relative overflow-hidden" style={{ minHeight: "480px" }}>
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${HERO_IMG})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0d0d1a]/40 via-[#0d0d1a]/60 to-[#0d0d1a]" />
        <div className="crt-overlay" />

        <div className="relative z-20 container flex flex-col justify-end pb-16 pt-32" style={{ minHeight: "480px" }}>
          <h1
            className="text-5xl md:text-7xl font-bold text-white phosphor-glow leading-tight"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Dusk Pocket
          </h1>
          <p
            className="mt-4 text-xl md:text-2xl text-[#e0b0ff] max-w-2xl"
            style={{ fontFamily: "var(--font-retro)" }}
          >
            A literary magazine for the words you wrote when you stopped thinking.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/prompts"
              className="inline-flex items-center gap-2 bg-[#e0b0ff] text-[#0d0d1a] px-6 py-2 text-lg font-semibold hover:bg-[#ffd700] transition-none"
              style={{ fontFamily: "var(--font-retro)" }}
            >
              Browse Prompts <ArrowRight size={18} />
            </Link>
            <Link
              href="/submit"
              className="inline-flex items-center gap-2 border-2 border-[#e0b0ff] text-[#e0b0ff] px-6 py-2 text-lg hover:bg-[#e0b0ff] hover:text-[#0d0d1a] transition-none"
              style={{ fontFamily: "var(--font-retro)" }}
            >
              Submit Your Writing
            </Link>
          </div>
        </div>
      </section>

      {/* What Is This? */}
      <section className="container py-16">
        <div className="max-w-3xl mx-auto">
          <div className="win98-window">
            <div className="win98-titlebar">
              <span>📁 About Dusk Pocket</span>
              <div className="flex gap-[2px]">
                <button className="win98-btn text-[11px]">_</button>
                <button className="win98-btn text-[11px]">□</button>
                <button className="win98-btn text-[11px]">✕</button>
              </div>
            </div>
            <div className="p-6 bg-[#faf0e6] text-[#1a1a1a]">
              <p className="text-lg leading-relaxed" style={{ fontFamily: "var(--font-body)" }}>
                <strong>Dusk Pocket</strong> is a freewriting magazine. You get a prompt, a timer, and permission to write badly. This magazine publishes the best of what comes out. Ready to surprise yourself?
              </p>
              <p className="mt-4 text-base leading-relaxed text-[#444]" style={{ fontFamily: "var(--font-body)" }}>
                New prompts drop across the website and socials at random. Follow along and write when they land.
              </p>
              <div className="mt-6 flex flex-wrap gap-4">
                <Link
                  href="/about"
                  className="text-[#000080] underline hover:text-[#0000cc]"
                  style={{ fontFamily: "var(--font-retro)" }}
                >
                  Learn more →
                </Link>
                <a
                  href={SOCIAL_LINKS.youtube}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#000080] underline hover:text-[#0000cc]"
                  style={{ fontFamily: "var(--font-retro)" }}
                >
                  YouTube
                </a>
                <a
                  href={SOCIAL_LINKS.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#000080] underline hover:text-[#0000cc]"
                  style={{ fontFamily: "var(--font-retro)" }}
                >
                  Instagram
                </a>
                <a
                  href={SOCIAL_LINKS.tiktok}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#000080] underline hover:text-[#0000cc]"
                  style={{ fontFamily: "var(--font-retro)" }}
                >
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <hr className="y2k-divider container" />

      {/* Featured Pieces — only shown when pieces exist */}
      {featured.length > 0 && (
        <>
          <section className="container py-12">
            <h2
              className="text-3xl md:text-4xl text-[#e0b0ff] mb-2 phosphor-glow"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Featured Pieces
            </h2>
            <p className="text-[#808090] mb-10" style={{ fontFamily: "var(--font-retro)" }}>
              From Issue 01
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {featured.map((piece) => (
                <Link key={piece.id} href={`/piece/${piece.id}`}>
                  <article className="group border-2 border-[#333355] bg-[#111128] hover:border-[#e0b0ff] transition-none p-6 h-full flex flex-col">
                    <p
                      className="text-[12px] text-[#ffd700] mb-2 uppercase tracking-wider"
                      style={{ fontFamily: "var(--font-retro)" }}
                    >
                      {piece.promptCategory}
                    </p>
                    <h3
                      className="text-xl text-[#faf0e6] mb-1 group-hover:text-[#e0b0ff]"
                      style={{ fontFamily: "var(--font-display)" }}
                    >
                      {piece.title}
                    </h3>
                    <p
                      className="text-sm text-[#808090] mb-4"
                      style={{ fontFamily: "var(--font-retro)" }}
                    >
                      by {piece.author}
                    </p>
                    <p className="text-sm text-[#aaa] leading-relaxed line-clamp-4 flex-1" style={{ fontFamily: "var(--font-body)" }}>
                      {piece.text.slice(0, 200)}...
                    </p>
                    <span
                      className="mt-4 text-[#e0b0ff] text-sm group-hover:text-[#ffd700]"
                      style={{ fontFamily: "var(--font-retro)" }}
                    >
                      Read more →
                    </span>
                  </article>
                </Link>
              ))}
            </div>

            <div className="text-center mt-10">
              <Link
                href="/read"
                className="inline-flex items-center gap-2 text-[#e0b0ff] hover:text-[#ffd700] text-lg"
                style={{ fontFamily: "var(--font-retro)" }}
              >
                View all pieces <ArrowRight size={18} />
              </Link>
            </div>
          </section>

          <hr className="y2k-divider container" />
        </>
      )}

      {/* Call to action */}
      <section className="border-t-2 border-[#333355] bg-[#0a0a15]">
        <div className="container py-16 text-center">
          <h2
            className="text-3xl md:text-4xl text-[#faf0e6] mb-4"
            style={{ fontFamily: "var(--font-display)" }}
          >
            You wrote something?
          </h2>
          <p className="text-[#808090] mb-8 max-w-lg mx-auto" style={{ fontFamily: "var(--font-retro)" }}>
            If you did a freewrite and surprised yourself, send it in. We read everything.
          </p>
          <Link
            href="/submit"
            className="inline-flex items-center gap-2 bg-[#ffd700] text-[#0d0d1a] px-8 py-3 text-xl font-bold hover:bg-[#e0b0ff] transition-none"
            style={{ fontFamily: "var(--font-retro)" }}
          >
            Submit Your Writing <ArrowRight size={20} />
          </Link>
        </div>
      </section>
    </div>
  );
}

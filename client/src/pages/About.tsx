/*
 * DUSK POCKET — About Page
 * Julie's bio, the project story, simplified series info, link to prompts
 */

import { Link } from "wouter";
import { SOCIAL_LINKS } from "@/components/Layout";

const HERO_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663230637583/4C7sSvfiEUGovrg6fBThvF/hero-about-BhuaTQhZRHdBj75ViiUZTJ.webp";

export default function About() {
  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden" style={{ minHeight: "280px" }}>
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${HERO_IMG})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0d0d1a]/50 via-[#0d0d1a]/70 to-[#0d0d1a]" />
        <div className="crt-overlay" />
        <div className="relative z-20 container flex flex-col justify-end pb-10 pt-20" style={{ minHeight: "280px" }}>
          <h1
            className="text-4xl md:text-5xl text-white phosphor-glow"
            style={{ fontFamily: "var(--font-display)" }}
          >
            About
          </h1>
          <p
            className="mt-3 text-lg text-[#e0b0ff]"
            style={{ fontFamily: "var(--font-retro)" }}
          >
            The story behind the magazine.
          </p>
        </div>
      </section>

      <div className="container py-12 max-w-3xl mx-auto">
        {/* The Story */}
        <div className="paper-container mb-12">
          <h2
            className="text-3xl font-bold mb-6 text-[#1a1a1a]"
            style={{ fontFamily: "var(--font-display)" }}
          >
            What Is Dusk Pocket?
          </h2>
          <div className="space-y-4 text-[#333] text-base leading-relaxed" style={{ fontFamily: "var(--font-body)" }}>
            <p>
              <strong>Dusk Pocket</strong> started as a simple idea: what if writing practice worked like physical exercise? You show up. You do the reps. You don't worry about whether it's good — you just do it.
            </p>
            <p>
              The series gives you a prompt, a timer, and permission to write without judgment. No planning. No editing. No backspace key. Just you and the blank page, seeing what happens when you stop trying to be brilliant and start trying to be honest.
            </p>
            <p>
              This magazine is what comes out the other side. These are real freewriting responses — pieces that started as timed exercises and turned into something worth reading. The magazine is curated, not open-submission. Every piece is read and selected by hand.
            </p>
          </div>
        </div>

        <hr className="y2k-divider" />

        {/* About Julie */}
        <div className="py-10">
          <h2
            className="text-3xl text-[#e0b0ff] mb-6 phosphor-glow"
            style={{ fontFamily: "var(--font-display)" }}
          >
            About Julie
          </h2>
          <div className="border-2 border-[#333355] bg-[#111128] p-6 md:p-8">
            <div className="space-y-4 text-[#ccc] leading-relaxed" style={{ fontFamily: "var(--font-body)" }}>
              <p>
                I wanted to get people writing — actually writing, not just thinking about it or consuming content about it. Too many people sit on the sidelines reading craft books and watching interviews, waiting until they feel ready. Dusk Pocket is about skipping all that and just doing it.
              </p>
              <p>
                I started doing these prompts myself. Timed freewrites, no plan, no backspace. And I kept surprising myself — sentences I didn't know I had in me, images that came from nowhere. I thought: if this works for me, it'll work for other people too. So I started sharing them.
              </p>
              <p>
                That's all this is. Prompts that get you moving. A timer that keeps you honest. And now, a magazine that proves what can happen when you stop being passive and start putting words on the page.
              </p>
            </div>
          </div>
        </div>

        <hr className="y2k-divider" />

        {/* The Series — simplified */}
        <div className="py-10">
          <h2
            className="text-3xl text-[#ffd700] mb-6 amber-glow"
            style={{ fontFamily: "var(--font-display)" }}
          >
            The Series
          </h2>
          <div className="win98-window">
            <div className="win98-titlebar">
              <span>📺 Dusk Pocket</span>
              <div className="flex gap-[2px]">
                <button className="win98-btn text-[11px]">_</button>
                <button className="win98-btn text-[11px]">□</button>
                <button className="win98-btn text-[11px]">✕</button>
              </div>
            </div>
            <div className="p-6 bg-[#faf0e6] text-[#1a1a1a]">
              <p className="text-base leading-relaxed mb-4" style={{ fontFamily: "var(--font-body)" }}>
                The series is ongoing. New prompts drop across all socials — follow along and write when they land. No preparation needed. No experience required.
              </p>
              <p className="text-base leading-relaxed mb-6" style={{ fontFamily: "var(--font-body)" }}>
                Browse the full archive of prompts and pick one to start with:
              </p>
              <Link
                href="/read"
                className="inline-flex items-center gap-2 bg-[#000080] text-white px-5 py-2 font-bold text-sm hover:bg-[#0000cc] mb-6"
                style={{ fontFamily: "var(--font-retro)" }}
              >
                View All Prompts →
              </Link>
              <div className="flex flex-wrap gap-3 mt-4 pt-4 border-t border-[#ddd]">
                <a
                  href={SOCIAL_LINKS.youtube}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-[#cc0000] text-white px-4 py-2 font-bold text-sm hover:bg-[#990000]"
                  style={{ fontFamily: "var(--font-retro)" }}
                >
                  📺 YouTube
                </a>
                <a
                  href={SOCIAL_LINKS.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-[#e1306c] text-white px-4 py-2 font-bold text-sm hover:bg-[#c13584]"
                  style={{ fontFamily: "var(--font-retro)" }}
                >
                  📷 Instagram
                </a>
                <a
                  href={SOCIAL_LINKS.tiktok}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-[#010101] text-white px-4 py-2 font-bold text-sm hover:bg-[#333] border border-[#555]"
                  style={{ fontFamily: "var(--font-retro)" }}
                >
                  🎵 TikTok
                </a>
                <a
                  href={SOCIAL_LINKS.spotify}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-[#1db954] text-white px-4 py-2 font-bold text-sm hover:bg-[#169c46]"
                  style={{ fontFamily: "var(--font-retro)" }}
                >
                  🎧 Spotify
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center py-10 border-t-2 border-[#333355]">
          <p
            className="text-[#808090] mb-4"
            style={{ fontFamily: "var(--font-retro)" }}
          >
            Want to be in the next issue?
          </p>
          <Link
            href="/submit"
            className="inline-flex items-center gap-2 bg-[#e0b0ff] text-[#0d0d1a] px-8 py-3 text-xl font-bold hover:bg-[#ffd700] transition-none"
            style={{ fontFamily: "var(--font-retro)" }}
          >
            Submit Your Writing →
          </Link>
        </div>
      </div>
    </div>
  );
}

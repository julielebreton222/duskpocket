/*
 * THE WRITER'S GYM — About Page
 * Julie's bio, the project story, contributors list
 */

import { Link } from "wouter";
import { contributors } from "@/data/pieces";

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
            What Is The Writer's Gym?
          </h2>
          <div className="space-y-4 text-[#333] text-base leading-relaxed" style={{ fontFamily: "var(--font-body)" }}>
            <p>
              <strong>The Writer's Gym</strong> started as a simple idea: what if writing practice worked like physical exercise? You show up. You do the reps. You don't worry about whether it's good — you just do it.
            </p>
            <p>
              The video series on YouTube gives you a prompt, a timer, and permission to write without judgment. No planning. No editing. No backspace key. Just you and the blank page, seeing what happens when you stop trying to be brilliant and start trying to be honest.
            </p>
            <p>
              This magazine is what comes out the other side. These are real freewriting responses — pieces that started as timed exercises and turned into something worth reading. Some were lightly edited afterward. Some were left exactly as they came out. All of them carry the energy of writing that wasn't overthought.
            </p>
            <p>
              The magazine is curated, not open-submission. Every piece is read and selected by hand. We're looking for the moments where the writing surprises even the writer — where a freewrite becomes something more.
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
                Julie is a creative writing teacher who believes the best writing happens when you stop trying to write well. She has taught fiction, memoir, and freewriting workshops for over a decade, and she created The Writer's Gym because she kept seeing the same thing: students who could write beautifully when they stopped being afraid of the page.
              </p>
              <p>
                She runs an 8-week creative writing course that covers everything from character and dialogue to prose style and revision. The Writer's Gym video series grew out of the freewriting exercises she uses in class — prompts designed to bypass the inner critic and get to the real stuff.
              </p>
              <p>
                This magazine is her way of showing what freewriting can do. Not as a warm-up exercise, but as a legitimate form of literary art.
              </p>
            </div>
          </div>
        </div>

        <hr className="y2k-divider" />

        {/* The Videos */}
        <div className="py-10">
          <h2
            className="text-3xl text-[#ffd700] mb-6 amber-glow"
            style={{ fontFamily: "var(--font-display)" }}
          >
            The Video Series
          </h2>
          <div className="win98-window">
            <div className="win98-titlebar">
              <span>📺 The Writer's Gym — YouTube</span>
              <div className="flex gap-[2px]">
                <button className="win98-btn text-[11px]">_</button>
                <button className="win98-btn text-[11px]">□</button>
                <button className="win98-btn text-[11px]">✕</button>
              </div>
            </div>
            <div className="p-6 bg-[#faf0e6] text-[#1a1a1a]">
              <p className="text-base leading-relaxed mb-4" style={{ fontFamily: "var(--font-body)" }}>
                Each video is a guided freewriting session. You press play, you hear the prompt, you write until the timer runs out. No preparation needed. No experience required.
              </p>
              <p className="text-base leading-relaxed mb-4" style={{ fontFamily: "var(--font-body)" }}>
                The series covers 13 craft aspects — from <strong>character</strong> and <strong>dialogue</strong> to <strong>sensory detail</strong> and <strong>emotional truth</strong>. Each aspect has 7 prompts: 5 core exercises and 2 sensory-based variations.
              </p>
              <p className="text-base leading-relaxed mb-6" style={{ fontFamily: "var(--font-body)" }}>
                Audio versions are available on <strong>Spotify</strong> for writing on the go.
              </p>
              <div className="flex flex-wrap gap-4">
                <a
                  href="https://youtube.com/@thewritersgym"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-[#cc0000] text-white px-5 py-2 font-bold text-sm hover:bg-[#990000]"
                  style={{ fontFamily: "var(--font-retro)" }}
                >
                  📺 YouTube Channel
                </a>
                <a
                  href="https://open.spotify.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-[#1db954] text-white px-5 py-2 font-bold text-sm hover:bg-[#169c46]"
                  style={{ fontFamily: "var(--font-retro)" }}
                >
                  🎧 Spotify Podcast
                </a>
              </div>
            </div>
          </div>
        </div>

        <hr className="y2k-divider" />

        {/* Contributors */}
        <div className="py-10">
          <h2
            className="text-3xl text-[#e0b0ff] mb-6 phosphor-glow"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Contributors
          </h2>
          <p className="text-[#808090] mb-8" style={{ fontFamily: "var(--font-retro)" }}>
            The writers who showed up and surprised themselves.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {contributors.map((c) => (
              <div
                key={c.name}
                className="border border-[#333355] bg-[#0a0a18] p-5"
              >
                <h3
                  className="text-lg text-[#faf0e6]"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {c.name}
                </h3>
                <p className="text-sm text-[#999] mt-1" style={{ fontFamily: "var(--font-body)" }}>
                  {c.bio}
                </p>
                <p
                  className="text-[12px] text-[#ffd700] mt-3"
                  style={{ fontFamily: "var(--font-retro)" }}
                >
                  {c.pieceCount} piece{c.pieceCount !== 1 ? "s" : ""} published
                </p>
              </div>
            ))}
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

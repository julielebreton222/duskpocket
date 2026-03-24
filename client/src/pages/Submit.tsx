/*
 * THE WRITER'S GYM — Submit Page
 * Submission guidelines + link to Google Form
 */

import { ExternalLink } from "lucide-react";

const HERO_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663230637583/4C7sSvfiEUGovrg6fBThvF/hero-submit-fBmY6YcsnWGcRGTzwuYvef.webp";

export default function Submit() {
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
            Submit Your Writing
          </h1>
          <p
            className="mt-3 text-lg text-[#e0b0ff]"
            style={{ fontFamily: "var(--font-retro)" }}
          >
            You wrote something. Now let someone read it.
          </p>
        </div>
      </section>

      <div className="container py-12 max-w-3xl mx-auto">
        {/* Under Construction badge */}
        <div
          className="inline-block mb-8 border-2 border-[#ffd700] bg-[#0a0a15] px-4 py-2 text-[#ffd700]"
          style={{ fontFamily: "var(--font-retro)" }}
        >
          🚧 Submissions are OPEN for Issue 02 🚧
        </div>

        {/* Guidelines in a Win98 window */}
        <div className="win98-window mb-10">
          <div className="win98-titlebar">
            <span>📋 Submission Guidelines</span>
            <div className="flex gap-[2px]">
              <button className="win98-btn text-[11px]">_</button>
              <button className="win98-btn text-[11px]">□</button>
              <button className="win98-btn text-[11px]">✕</button>
            </div>
          </div>
          <div className="p-6 bg-[#faf0e6] text-[#1a1a1a]">
            <h3
              className="text-xl font-bold mb-4 text-[#1a1a1a]"
              style={{ fontFamily: "var(--font-display)" }}
            >
              How It Works
            </h3>
            <ol className="space-y-4 text-base leading-relaxed" style={{ fontFamily: "var(--font-body)" }}>
              <li className="flex gap-3">
                <span className="text-[#000080] font-bold shrink-0" style={{ fontFamily: "var(--font-retro)" }}>01.</span>
                <span><strong>Watch a Writer's Gym video</strong> on YouTube (or use any prompt from the magazine).</span>
              </li>
              <li className="flex gap-3">
                <span className="text-[#000080] font-bold shrink-0" style={{ fontFamily: "var(--font-retro)" }}>02.</span>
                <span><strong>Do the freewrite.</strong> Set the timer. Don't stop. Don't delete. Just write.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-[#000080] font-bold shrink-0" style={{ fontFamily: "var(--font-retro)" }}>03.</span>
                <span><strong>Read it back.</strong> If something surprised you — a sentence, an image, a turn you didn't expect — that's the one.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-[#000080] font-bold shrink-0" style={{ fontFamily: "var(--font-retro)" }}>04.</span>
                <span><strong>Light editing is fine.</strong> Fix typos, tighten a sentence. But keep the energy of the original. We want the heat, not the polish.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-[#000080] font-bold shrink-0" style={{ fontFamily: "var(--font-retro)" }}>05.</span>
                <span><strong>Submit via the form below.</strong> Include the prompt you responded to, your piece, and a short bio (optional).</span>
              </li>
            </ol>
          </div>
        </div>

        {/* What we're looking for */}
        <div className="border-2 border-[#333355] bg-[#111128] p-6 md:p-8 mb-10">
          <h3
            className="text-2xl text-[#ffd700] mb-4 amber-glow"
            style={{ fontFamily: "var(--font-display)" }}
          >
            What We're Looking For
          </h3>
          <div className="space-y-3 text-[#ccc]" style={{ fontFamily: "var(--font-body)" }}>
            <p>We're not looking for perfect. We're looking for <em>alive</em>.</p>
            <p>The sentence that made you sit up. The image that came from nowhere. The moment where the writing knew something you didn't.</p>
            <p>Pieces can be any length — a paragraph, a page, three pages. Fiction, memoir, something in between. The only requirement is that it started as a freewrite.</p>
          </div>

          <div className="mt-6 border-t border-[#333355] pt-4">
            <p className="text-sm text-[#808090]" style={{ fontFamily: "var(--font-retro)" }}>
              ✗ We don't publish poetry (yet) · ✗ No AI-generated text · ✗ No previously published work
            </p>
          </div>
        </div>

        {/* The big submit button */}
        <div className="text-center py-8">
          <p
            className="text-[#808090] mb-6"
            style={{ fontFamily: "var(--font-retro)" }}
          >
            Ready? The form takes about 3 minutes.
          </p>
          <a
            href="https://forms.gle/YOUR_FORM_ID_HERE"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-[#ffd700] text-[#0d0d1a] px-10 py-4 text-2xl font-bold hover:bg-[#e0b0ff] transition-none"
            style={{ fontFamily: "var(--font-retro)" }}
          >
            Open Submission Form <ExternalLink size={22} />
          </a>
          <p
            className="mt-4 text-[12px] text-[#555566]"
            style={{ fontFamily: "var(--font-retro)" }}
          >
            Opens in Google Forms · No account required
          </p>
        </div>

        <hr className="y2k-divider" />

        {/* FAQ */}
        <div className="py-8">
          <h3
            className="text-2xl text-[#e0b0ff] mb-6 phosphor-glow"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Questions
          </h3>
          <div className="space-y-6">
            {[
              {
                q: "How long until I hear back?",
                a: "We read submissions on a rolling basis and publish new issues monthly. If your piece is selected, we'll email you before it goes live.",
              },
              {
                q: "Can I submit more than one piece?",
                a: "Yes. Submit as many as you like — one form per piece.",
              },
              {
                q: "Do I need to have watched the video?",
                a: "No. You can respond to any prompt listed on the site. The videos are there if you want the guided experience.",
              },
              {
                q: "Can I submit anonymously?",
                a: "Yes. Use a pen name or leave the name field blank. We'll publish it as 'Anonymous.'",
              },
              {
                q: "What rights do you take?",
                a: "First digital publication rights only. After your piece appears in the magazine, all rights revert to you. Your words are yours.",
              },
            ].map((faq, i) => (
              <div key={i} className="border-l-2 border-[#333355] pl-4">
                <p
                  className="text-[#faf0e6] font-semibold"
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  {faq.q}
                </p>
                <p className="text-sm text-[#999] mt-1" style={{ fontFamily: "var(--font-body)" }}>
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

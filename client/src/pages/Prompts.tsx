/*
 * DUSK POCKET — Prompts Database Page
 * Full prompts archive with workout explanation and freewriting info
 */

import { prompts } from "@/data/pieces";
import { useState } from "react";

export default function Prompts() {
  const [filter, setFilter] = useState<string>("all");

  const categories = ["all", ...Array.from(new Set(prompts.map((p) => p.category)))];

  const filteredPrompts =
    filter === "all"
      ? prompts
      : prompts.filter((p) => p.category === filter);

  return (
    <div>
      {/* Page header */}
      <section className="container pt-10 pb-6">
        <h1
          className="text-4xl md:text-5xl text-[#e0b0ff] phosphor-glow"
          style={{ fontFamily: "var(--font-display)" }}
        >
          The Prompts
        </h1>
        <p
          className="mt-2 text-[#808090]"
          style={{ fontFamily: "var(--font-retro)" }}
        >
          {prompts.length} craft exercises. Pick one. Set a timer. Write.
        </p>
      </section>

      <hr className="y2k-divider container" />

      {/* How This Works + Freewriting Info */}
      <section className="container py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Workout explanation */}
          <div className="win98-window">
            <div className="win98-titlebar">
              <span>💪 How This Works</span>
              <div className="flex gap-[2px]">
                <button className="win98-btn text-[11px]">_</button>
                <button className="win98-btn text-[11px]">□</button>
                <button className="win98-btn text-[11px]">✕</button>
              </div>
            </div>
            <div className="p-6 bg-[#faf0e6] text-[#1a1a1a]">
              <p className="text-base leading-relaxed mb-4" style={{ fontFamily: "var(--font-body)" }}>
                Think of this as a writing gym. I'm your personal trainer. The prompts below are the weights and exercises.
              </p>
              <p className="text-base leading-relaxed mb-4" style={{ fontFamily: "var(--font-body)" }}>
                Prompts isolate (or not, some are just fun) a specific craft tool — sensory detail, dialogue, pacing, perspective. You're not writing a story. You're training a muscle.
              </p>
              <p className="text-base leading-relaxed" style={{ fontFamily: "var(--font-body)" }}>
                Pick a prompt, set a timer for <strong>10 minutes max</strong> (you can reduce it), and work the exercise. The goal isn't perfection. The goal is to get your hands moving and discover what happens when you stop thinking and start writing.
              </p>
            </div>
          </div>

          {/* Freewriting explanation */}
          <div className="win98-window">
            <div className="win98-titlebar">
              <span>📝 What is Freewriting?</span>
              <div className="flex gap-[2px]">
                <button className="win98-btn text-[11px]">_</button>
                <button className="win98-btn text-[11px]">□</button>
                <button className="win98-btn text-[11px]">✕</button>
              </div>
            </div>
            <div className="p-6 bg-[#faf0e6] text-[#1a1a1a]">
              <p className="text-base leading-relaxed mb-4" style={{ fontFamily: "var(--font-body)" }}>
                Freewriting is writing without stopping, editing, or planning. You follow the prompt and let your hand move. No backspace. No judgment. No perfection.
              </p>
              <p className="text-base leading-relaxed mb-4" style={{ fontFamily: "var(--font-body)" }}>
                <strong>The neuroscience:</strong> When you freewrite, you bypass your inner critic and access the part of your brain that creates. You're not thinking about whether it's good! You're just discovering what you have to say.
              </p>
              </a>
            </div>
          </div>
        </div>
      </section>

      <hr className="y2k-divider container" />

      {/* Filter bar */}
      <section className="container py-4">
        <div className="flex flex-wrap gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-3 py-1 text-[13px] border transition-none ${
                filter === cat
                  ? "bg-[#e0b0ff] text-[#0d0d1a] border-[#e0b0ff]"
                  : "border-[#333355] text-[#808090] hover:border-[#e0b0ff] hover:text-[#e0b0ff]"
              }`}
              style={{ fontFamily: "var(--font-retro)" }}
            >
              {cat === "all" ? "All" : cat}
            </button>
          ))}
        </div>
      </section>

      {/* Prompts grid */}
      <section className="container pb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4">
          {filteredPrompts.map((prompt) => (
            <div
              key={prompt.id}
              className="border border-[#333355] bg-[#0a0a18] p-5 flex flex-col gap-3"
            >
              <span
                className="text-[11px] text-[#ffd700] uppercase tracking-widest"
                style={{ fontFamily: "var(--font-retro)" }}
              >
                {prompt.category}
              </span>
              <p
                className="text-[#faf0e6] text-lg leading-snug"
                style={{ fontFamily: "var(--font-display)", fontStyle: "italic" }}
              >
                "{prompt.title}"
              </p>
              <p className="text-[12px] text-[#808090]" style={{ fontFamily: "var(--font-retro)" }}>
                ⏱️ 10 min max
              </p>
              {prompt.videoLink && (
                <a
                  href={prompt.videoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[12px] text-[#808090] hover:text-[#ffd700] mt-1"
                  style={{ fontFamily: "var(--font-retro)" }}
                >
                  Watch episode →
                </a>
              )}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

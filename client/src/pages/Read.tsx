/*
 * THE WRITER'S GYM — Read Page
 * Browse all published pieces, filter by prompt category
 */

import { Link } from "wouter";
import { pieces, prompts } from "@/data/pieces";
import { useState } from "react";

export default function Read() {
  const [filter, setFilter] = useState<string>("all");

  const categories = ["all", ...Array.from(new Set(prompts.map((p) => p.category)))];

  const filtered =
    filter === "all"
      ? pieces
      : pieces.filter((p) => p.promptCategory === filter);

  return (
    <div>
      {/* Page header */}
      <section className="container pt-10 pb-6">
        <h1
          className="text-4xl md:text-5xl text-[#e0b0ff] phosphor-glow"
          style={{ fontFamily: "var(--font-display)" }}
        >
          Read
        </h1>
        <p
          className="mt-2 text-[#808090]"
          style={{ fontFamily: "var(--font-retro)" }}
        >
          Issue 01 · March 2026 · {pieces.length} pieces
        </p>
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
              {cat === "all" ? "All Pieces" : cat}
            </button>
          ))}
        </div>
      </section>

      {/* Pieces list */}
      <section className="container pb-16">
        <div className="flex flex-col gap-6 mt-4">
          {filtered.map((piece) => (
            <Link key={piece.id} href={`/piece/${piece.id}`}>
              <article className="group border-2 border-[#333355] bg-[#111128] hover:border-[#e0b0ff] transition-none p-6 md:p-8">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-4">
                  <div>
                    <span
                      className="text-[11px] text-[#ffd700] uppercase tracking-widest"
                      style={{ fontFamily: "var(--font-retro)" }}
                    >
                      {piece.promptCategory}
                    </span>
                    <h2
                      className="text-2xl text-[#faf0e6] group-hover:text-[#e0b0ff] mt-1"
                      style={{ fontFamily: "var(--font-display)" }}
                    >
                      {piece.title}
                    </h2>
                    <p
                      className="text-sm text-[#808090] mt-1"
                      style={{ fontFamily: "var(--font-retro)" }}
                    >
                      by {piece.author}
                    </p>
                  </div>
                  <span
                    className="text-[12px] text-[#555566] shrink-0"
                    style={{ fontFamily: "var(--font-retro)" }}
                  >
                    {new Date(piece.date).toLocaleDateString("en-AU", {
                      day: "numeric",
                      month: "short",
                      year: "numeric",
                    })}
                  </span>
                </div>

                {/* Prompt */}
                <p
                  className="text-sm text-[#999] italic mb-4 border-l-2 border-[#333355] pl-4"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  Prompt: "{piece.prompt}"
                </p>

                {/* Preview */}
                <p
                  className="text-[#aaa] leading-relaxed line-clamp-3"
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  {piece.text.slice(0, 280)}...
                </p>

                <span
                  className="inline-block mt-4 text-[#e0b0ff] text-sm group-hover:text-[#ffd700]"
                  style={{ fontFamily: "var(--font-retro)" }}
                >
                  Read full piece →
                </span>
              </article>
            </Link>
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-16">
            <p className="text-[#808090] text-lg" style={{ fontFamily: "var(--font-retro)" }}>
              No pieces in this category yet. Check back soon.
            </p>
          </div>
        )}
      </section>
    </div>
  );
}

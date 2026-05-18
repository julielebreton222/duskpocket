/*
 * DUSK POCKET — Read Page
 * Browse all prompts and published pieces, filter by category
 */

import { Link } from "wouter";
import { pieces, prompts } from "@/data/pieces";
import { useState } from "react";

export default function Read() {
  const [filter, setFilter] = useState<string>("all");

  const categories = ["all", ...Array.from(new Set(prompts.map((p) => p.category)))];

  const filteredPrompts =
    filter === "all"
      ? prompts
      : prompts.filter((p) => p.category === filter);

  const filteredPieces =
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
          Pieces
        </h1>
        <p
          className="mt-2 text-[#808090]"
          style={{ fontFamily: "var(--font-retro)" }}
        >
          {prompts.length} prompts · {pieces.length} pieces published
        </p>
      </section>

      <hr className="y2k-divider container" />

            Published Pieces
          </h2>
          <div className="flex flex-col gap-6">
            {filteredPieces.map((piece) => (
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
                      <h3
                        className="text-2xl text-[#faf0e6] group-hover:text-[#e0b0ff] mt-1"
                        style={{ fontFamily: "var(--font-display)" }}
                      >
                        {piece.title}
                      </h3>
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

                  <p
                    className="text-sm text-[#999] italic mb-4 border-l-2 border-[#333355] pl-4"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    Prompt: "{piece.prompt}"
                  </p>

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
        </section>
      )}

      {/* Empty state for pieces */}
      {pieces.length === 0 && (
        <section className="container pb-16 pt-2">
          <hr className="y2k-divider mb-8" />
          <div className="text-center py-12 border border-[#333355] bg-[#0a0a18]">
            <p className="text-[#808090] text-lg mb-2" style={{ fontFamily: "var(--font-retro)" }}>
              No pieces published yet.
            </p>
            <p className="text-[#555566] text-sm" style={{ fontFamily: "var(--font-retro)" }}>
              Pick a prompt above, write something, and{" "}
              <Link href="/submit" className="text-[#e0b0ff] underline hover:text-[#ffd700]">
                submit it
              </Link>.
            </p>
          </div>
        </section>
      )}
    </div>
  );
}

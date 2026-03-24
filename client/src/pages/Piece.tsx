/*
 * THE WRITER'S GYM — Individual Piece Page
 * Reading view: linen paper container, centered column, beautiful typography
 */

import { Link, useParams } from "wouter";
import { getPieceById, pieces } from "@/data/pieces";
import { ArrowLeft, ArrowRight } from "lucide-react";

export default function Piece() {
  const params = useParams<{ id: string }>();
  const piece = getPieceById(params.id || "");

  if (!piece) {
    return (
      <div className="container py-20 text-center">
        <h1
          className="text-3xl text-[#e0b0ff] mb-4"
          style={{ fontFamily: "var(--font-display)" }}
        >
          Piece Not Found
        </h1>
        <p className="text-[#808090] mb-6" style={{ fontFamily: "var(--font-retro)" }}>
          This page doesn't exist. Maybe it was a dream.
        </p>
        <Link
          href="/read"
          className="text-[#e0b0ff] hover:text-[#ffd700]"
          style={{ fontFamily: "var(--font-retro)" }}
        >
          ← Back to all pieces
        </Link>
      </div>
    );
  }

  // Find prev/next pieces
  const currentIndex = pieces.findIndex((p) => p.id === piece.id);
  const prevPiece = currentIndex > 0 ? pieces[currentIndex - 1] : null;
  const nextPiece = currentIndex < pieces.length - 1 ? pieces[currentIndex + 1] : null;

  // Split text into paragraphs
  const paragraphs = piece.text.split("\n\n").filter((p) => p.trim());

  return (
    <div>
      {/* Back link */}
      <div className="container pt-6">
        <Link
          href="/read"
          className="inline-flex items-center gap-2 text-[#808090] hover:text-[#e0b0ff] text-sm"
          style={{ fontFamily: "var(--font-retro)" }}
        >
          <ArrowLeft size={14} /> Back to all pieces
        </Link>
      </div>

      {/* Piece header */}
      <div className="container pt-6 pb-4 max-w-3xl mx-auto">
        <span
          className="text-[12px] text-[#ffd700] uppercase tracking-widest"
          style={{ fontFamily: "var(--font-retro)" }}
        >
          {piece.promptCategory}
        </span>
        <h1
          className="text-4xl md:text-5xl text-[#faf0e6] mt-2 leading-tight"
          style={{ fontFamily: "var(--font-display)" }}
        >
          {piece.title}
        </h1>
        <p
          className="text-lg text-[#e0b0ff] mt-2"
          style={{ fontFamily: "var(--font-retro)" }}
        >
          by {piece.author}
        </p>
        <p
          className="text-sm text-[#555566] mt-1"
          style={{ fontFamily: "var(--font-retro)" }}
        >
          Issue {String(piece.issue).padStart(2, "0")} ·{" "}
          {new Date(piece.date).toLocaleDateString("en-AU", {
            day: "numeric",
            month: "long",
            year: "numeric",
          })}
        </p>
      </div>

      {/* Prompt */}
      <div className="container max-w-3xl mx-auto pb-6">
        <div className="border-l-2 border-[#e0b0ff] pl-4 py-2">
          <p
            className="text-sm text-[#808090] uppercase tracking-wider mb-1"
            style={{ fontFamily: "var(--font-retro)" }}
          >
            The Prompt
          </p>
          <p
            className="text-lg text-[#e0b0ff] italic"
            style={{ fontFamily: "var(--font-display)" }}
          >
            "{piece.prompt}"
          </p>
        </div>
      </div>

      {/* The piece — linen paper */}
      <div className="container max-w-3xl mx-auto pb-10">
        <article className="paper-container">
          <div className="max-w-[65ch] mx-auto">
            {paragraphs.map((para, i) => (
              <p
                key={i}
                className="text-[#1a1a1a] text-[17px] leading-[1.8] mb-6 last:mb-0"
                style={{ fontFamily: "Georgia, 'Playfair Display', serif" }}
              >
                {para}
              </p>
            ))}
          </div>
        </article>
      </div>

      {/* Author bio */}
      {piece.bio && (
        <div className="container max-w-3xl mx-auto pb-8">
          <div className="border border-[#333355] bg-[#0a0a18] p-5">
            <p
              className="text-[12px] text-[#ffd700] uppercase tracking-widest mb-2"
              style={{ fontFamily: "var(--font-retro)" }}
            >
              About the Author
            </p>
            <p className="text-sm text-[#999]" style={{ fontFamily: "var(--font-body)" }}>
              {piece.bio}
            </p>
          </div>
        </div>
      )}

      <hr className="y2k-divider container max-w-3xl mx-auto" />

      {/* Prev / Next navigation */}
      <div className="container max-w-3xl mx-auto py-8">
        <div className="flex justify-between items-start gap-4">
          {prevPiece ? (
            <Link
              href={`/piece/${prevPiece.id}`}
              className="group flex items-center gap-2 text-[#808090] hover:text-[#e0b0ff]"
            >
              <ArrowLeft size={16} className="shrink-0" />
              <div>
                <span className="text-[11px] uppercase tracking-wider" style={{ fontFamily: "var(--font-retro)" }}>
                  Previous
                </span>
                <p
                  className="text-sm group-hover:text-[#e0b0ff]"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {prevPiece.title}
                </p>
              </div>
            </Link>
          ) : (
            <div />
          )}

          {nextPiece ? (
            <Link
              href={`/piece/${nextPiece.id}`}
              className="group flex items-center gap-2 text-[#808090] hover:text-[#e0b0ff] text-right"
            >
              <div>
                <span className="text-[11px] uppercase tracking-wider" style={{ fontFamily: "var(--font-retro)" }}>
                  Next
                </span>
                <p
                  className="text-sm group-hover:text-[#e0b0ff]"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {nextPiece.title}
                </p>
              </div>
              <ArrowRight size={16} className="shrink-0" />
            </Link>
          ) : (
            <div />
          )}
        </div>
      </div>
    </div>
  );
}

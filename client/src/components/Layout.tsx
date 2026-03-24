/*
 * THE WRITER'S GYM — Layout Component
 * Y2K Vaporwave Literary: Windows 98 title bar nav, starry background, visitor counter footer
 * Links: YouTube, Instagram, TikTok, Spotify (placeholder until real link provided)
 */

import { Link, useLocation } from "wouter";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const STAR_BG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663230637583/4C7sSvfiEUGovrg6fBThvF/pattern-stars-76CFKgcyGQgQebkoKSSvD2.webp";

export const SOCIAL_LINKS = {
  youtube: "https://www.youtube.com/@Reveriesdejulie",
  instagram: "https://www.instagram.com/reveriesdejulie/",
  tiktok: "https://www.tiktok.com/@reveriesdejulie",
  spotify: "#", // placeholder — Julie will provide the real link
};

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/read", label: "Read" },
  { href: "/submit", label: "Submit" },
  { href: "/about", label: "About" },
];

function Win98Buttons() {
  return (
    <div className="flex gap-[2px]">
      <button className="win98-btn text-[11px]" aria-label="Minimize">_</button>
      <button className="win98-btn text-[11px]" aria-label="Maximize">□</button>
      <button className="win98-btn text-[11px]" aria-label="Close">✕</button>
    </div>
  );
}

export default function Layout({ children }: { children: React.ReactNode }) {
  const [location] = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <div
      className="min-h-screen flex flex-col"
      style={{
        backgroundColor: "#0d0d1a",
        backgroundImage: `url(${STAR_BG})`,
        backgroundRepeat: "repeat",
        backgroundSize: "400px 400px",
      }}
    >
      {/* Windows 98 Title Bar — Desktop */}
      <header className="sticky top-0 z-50">
        <div className="win98-titlebar">
          <div className="flex items-center gap-3">
            <span className="text-[16px] tracking-wide">
              📝 Dusk Pocket
            </span>
            <span className="hidden sm:inline text-[12px] opacity-60">
              — a literary magazine
            </span>
          </div>
          <Win98Buttons />
        </div>

        {/* Navigation bar — styled like Win98 menu bar */}
        <nav className="hidden md:flex items-center gap-0 bg-[#c0c0c0] border-b-2 border-[#808080] px-1">
          {navLinks.map((link) => {
            const isActive = location === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`px-4 py-1 font-[var(--font-retro)] text-[15px] text-black hover:bg-[#000080] hover:text-white transition-none ${
                  isActive ? "bg-[#000080] text-white" : ""
                }`}
                style={{ fontFamily: "var(--font-retro)" }}
              >
                {link.label}
              </Link>
            );
          })}
          <div className="flex items-center gap-1 ml-auto">
            <a href={SOCIAL_LINKS.youtube} target="_blank" rel="noopener noreferrer" className="px-2 py-1 text-[14px] text-black hover:bg-[#000080] hover:text-white transition-none" style={{ fontFamily: "var(--font-retro)" }}>
              📺
            </a>
            <a href={SOCIAL_LINKS.instagram} target="_blank" rel="noopener noreferrer" className="px-2 py-1 text-[14px] text-black hover:bg-[#000080] hover:text-white transition-none" style={{ fontFamily: "var(--font-retro)" }}>
              📷
            </a>
            <a href={SOCIAL_LINKS.tiktok} target="_blank" rel="noopener noreferrer" className="px-2 py-1 text-[14px] text-black hover:bg-[#000080] hover:text-white transition-none" style={{ fontFamily: "var(--font-retro)" }}>
              🎵
            </a>
            <a href={SOCIAL_LINKS.spotify} target="_blank" rel="noopener noreferrer" className="px-2 py-1 text-[14px] text-black hover:bg-[#000080] hover:text-white transition-none" style={{ fontFamily: "var(--font-retro)" }}>
              🎧
            </a>
          </div>
        </nav>

        {/* Mobile nav toggle */}
        <div className="md:hidden flex items-center justify-between bg-[#c0c0c0] border-b-2 border-[#808080] px-2 py-1">
          <span className="text-black text-sm" style={{ fontFamily: "var(--font-retro)" }}>
            Menu
          </span>
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="text-black p-1"
          >
            {mobileOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>

        {/* Mobile nav dropdown */}
        {mobileOpen && (
          <div className="md:hidden bg-[#c0c0c0] border-b-2 border-[#808080]">
            {navLinks.map((link) => {
              const isActive = location === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className={`block px-4 py-2 text-[15px] text-black hover:bg-[#000080] hover:text-white transition-none border-b border-[#a0a0a0] ${
                    isActive ? "bg-[#000080] text-white" : ""
                  }`}
                  style={{ fontFamily: "var(--font-retro)" }}
                >
                  {link.label}
                </Link>
              );
            })}
            <div className="flex gap-2 px-4 py-2 border-b border-[#a0a0a0]">
              <a href={SOCIAL_LINKS.youtube} target="_blank" rel="noopener noreferrer" className="text-black text-[14px]" style={{ fontFamily: "var(--font-retro)" }}>📺</a>
              <a href={SOCIAL_LINKS.instagram} target="_blank" rel="noopener noreferrer" className="text-black text-[14px]" style={{ fontFamily: "var(--font-retro)" }}>📷</a>
              <a href={SOCIAL_LINKS.tiktok} target="_blank" rel="noopener noreferrer" className="text-black text-[14px]" style={{ fontFamily: "var(--font-retro)" }}>🎵</a>
              <a href={SOCIAL_LINKS.spotify} target="_blank" rel="noopener noreferrer" className="text-black text-[14px]" style={{ fontFamily: "var(--font-retro)" }}>🎧</a>
            </div>
          </div>
        )}
      </header>

      {/* Main content */}
      <main className="flex-1">{children}</main>

      {/* Footer — Y2K style */}
      <footer className="border-t-2 border-[#333355] mt-16">
        <div className="container py-8">
          {/* Marquee announcement */}
          <div className="overflow-hidden mb-6 border border-[#333355] bg-[#0a0a15] py-1">
            <div className="marquee-text text-[14px] text-[#e0b0ff] opacity-70" style={{ fontFamily: "var(--font-retro)" }}>
              ★ Welcome to Dusk Pocket ★ New pieces published monthly ★ Submit your freewriting today ★ Follow the series ★ Keep writing ★
            </div>
          </div>

          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm">
            <div className="text-[#808090]" style={{ fontFamily: "var(--font-retro)" }}>
              <span className="text-[#e0b0ff]">Dusk Pocket</span> © 2026 | Made with ☕ and late nights
            </div>

            {/* Fake visitor counter */}
            <div
              className="bg-black border border-[#333355] px-3 py-1 text-[#00ff41] text-[16px]"
              style={{ fontFamily: "var(--font-retro)" }}
            >
              Visitors: 004,721
            </div>

            <div className="flex gap-3 text-[#808090]" style={{ fontFamily: "var(--font-retro)" }}>
              <a href={SOCIAL_LINKS.youtube} target="_blank" rel="noopener noreferrer" className="hover:text-[#ffd700] transition-none">YouTube</a>
              <span className="text-[#333355]">|</span>
              <a href={SOCIAL_LINKS.instagram} target="_blank" rel="noopener noreferrer" className="hover:text-[#ffd700] transition-none">Instagram</a>
              <span className="text-[#333355]">|</span>
              <a href={SOCIAL_LINKS.tiktok} target="_blank" rel="noopener noreferrer" className="hover:text-[#ffd700] transition-none">TikTok</a>
              <span className="text-[#333355]">|</span>
              <a href={SOCIAL_LINKS.spotify} target="_blank" rel="noopener noreferrer" className="hover:text-[#ffd700] transition-none">Spotify</a>
            </div>
          </div>

          {/* Best viewed badge */}
          <div className="text-center mt-6 text-[12px] text-[#555566]" style={{ fontFamily: "var(--font-retro)" }}>
            Best viewed in Netscape Navigator 4.0 or higher · 800×600 · 256 colors
          </div>
        </div>
      </footer>
    </div>
  );
}

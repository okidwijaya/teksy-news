"use client";

import Link from "next/link";
import { useState } from "react";

const navLinks = [
  { label: "Capabilities", href: "#capabilities" },
  { label: "Approach", href: "#approach" },
  { label: "Work", href: "portofolio" },
  { label: "Pricing", href: "#pricing" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav
      style={{
        background: "rgba(250,250,248,0.92)",
        backdropFilter: "blur(10px)",
        borderBottom: "0.5px solid rgba(17,17,17,0.10)",
      }}
      className="sticky top-0 z-50"
    >
      <div className="max-w-6xl mx-auto px-6 md:px-14 flex items-center justify-between h-[68px]">
        <Link href="/" className="flex items-center">
          <span
            style={{
              fontFamily: "'Inter Tight', sans-serif",
              fontWeight: 600,
              fontSize: 15,
              letterSpacing: -0.2,
              color: "#111111",
            }}
          >
            KitaDevelopers
          </span>
        </Link>

        <div className="hidden md:flex items-center gap-9">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              style={{ color: "#4A4A4A", fontSize: 13, fontWeight: 500 }}
              className="hover:text-[#111111] transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-5">
          <Link
            href="/en"
            style={{ color: "#8A8A8A", fontSize: 12.5, fontWeight: 500 }}
            className="hover:text-[#111111] transition-colors"
          >
            EN
          </Link>
          <a
            href="#kontak"
            style={{
              border: "0.5px solid #111111",
              color: "#111111",
              padding: "9px 18px",
              fontSize: 13,
              fontWeight: 500,
              borderRadius: 2,
              whiteSpace: "nowrap",
            }}
            className="hover:bg-[#111111] hover:text-[#FAFAF8] transition-colors"
          >
            Start a project
          </a>
        </div>

        <button onClick={() => setOpen(!open)} className="md:hidden flex flex-col gap-1.5 p-2" aria-label="Toggle menu">
          <span style={{ background: "#111111", height: 1.5, width: 22, display: "block", transition: "transform 0.2s", transform: open ? "rotate(45deg) translateY(5px)" : undefined }} />
          <span style={{ background: "#111111", height: 1.5, width: 22, display: "block", opacity: open ? 0 : 1, transition: "opacity 0.2s" }} />
          <span style={{ background: "#111111", height: 1.5, width: 22, display: "block", transition: "transform 0.2s", transform: open ? "rotate(-45deg) translateY(-5px)" : undefined }} />
        </button>
      </div>

      {open && (
        <div
          style={{ background: "#FAFAF8", borderTop: "0.5px solid rgba(17,17,17,0.10)" }}
          className="md:hidden px-6 py-4 flex flex-col gap-4"
        >
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} style={{ color: "#4A4A4A", fontSize: 14, fontWeight: 500 }} onClick={() => setOpen(false)}>
              {link.label}
            </a>
          ))}
          <Link href="/en" style={{ color: "#8A8A8A", fontSize: 13, fontWeight: 500 }} onClick={() => setOpen(false)}>
            English
          </Link>
          <a
            href="#kontak"
            style={{
              border: "0.5px solid #111111",
              color: "#111111",
              padding: "10px 18px",
              fontSize: 13,
              fontWeight: 500,
              borderRadius: 2,
              textAlign: "center",
            }}
            onClick={() => setOpen(false)}
          >
            Start a project
          </a>
        </div>
      )}
    </nav>
  );
}

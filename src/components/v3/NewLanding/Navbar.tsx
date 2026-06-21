"use client";

import Link from "next/link";
import { useState } from "react";

const navLinks = [
  { label: "Layanan", href: "/v2/service" },
  { label: "ERP Custom", href: "#erp" },
  { label: "Portfolio", href: "/v2/porto" },
  { label: "Templates", href: "/v2/template" },
  { label: "Pricing", href: "/v2/pricing" },
  { label: "Contact", href: "/v2/contact" },
];

{/* <Link href="/v2/service" className="text-sm font-medium text-[#4a4a4a] hover:text-[#0d0d0d] transition-colors duration-200">{t.nav.servicesPage || "Services"}</Link>
<Link href="/v2/porto" className="text-sm font-medium text-[#4a4a4a] hover:text-[#0d0d0d] transition-colors duration-200">Portfolio</Link>
<Link href="/v2/template" className="text-sm font-medium text-[#4a4a4a] hover:text-[#0d0d0d] transition-colors duration-200">Templates</Link>
<Link href="/v2/pricing" className="text-sm font-medium text-[#4a4a4a] hover:text-[#0d0d0d] transition-colors duration-200">{t.nav.pricing}</Link>
<Link href="/v2/contact" className="text-sm font-medium text-[#4a4a4a] hover:text-[#0d0d0d] transition-colors duration-200">{t.nav.contact}</Link> */}

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav
      style={{
        background: "rgba(13,17,23,0.94)",
        backdropFilter: "blur(12px)",
        borderBottom: "0.5px solid rgba(240,237,230,0.12)",
      }}
      className="sticky top-0 z-50"
    >
      <div className="max-w-6xl mx-auto px-6 md:px-12 flex items-center justify-between h-16">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-0">
          <span
            style={{ fontFamily: "'Syne', sans-serif", fontWeight: 800, fontSize: 16, letterSpacing: -0.3 }}
            className="text-[#F0EDE6]"
          >
            kitadevelopers
          </span>
          <span style={{ color: "#F5A623", fontFamily: "'Syne', sans-serif", fontWeight: 800, fontSize: 16 }}>.</span>
          <span style={{ color: "#8B949E", fontFamily: "'Syne', sans-serif", fontWeight: 600, fontSize: 16 }}>com</span>
        </Link>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-7">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              style={{ color: "#8B949E", fontSize: 13, fontWeight: 500 }}
              className="hover:text-[#F0EDE6] transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* CTA */}
        <a
          href="#kontak"
          style={{
            background: "#F5A623",
            color: "#0D1117",
            fontFamily: "'Syne', sans-serif",
            fontWeight: 700,
            fontSize: 13,
            borderRadius: 6,
            padding: "9px 18px",
            whiteSpace: "nowrap",
          }}
          className="hidden md:inline-block hover:opacity-90 transition-opacity"
        >
          Mulai Proyek →
        </a>

        {/* Mobile hamburger */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden flex flex-col gap-1.5 p-2"
          aria-label="Toggle menu"
        >
          <span
            style={{ background: "#F0EDE6", height: 1.5, width: 22, display: "block", transition: "transform 0.2s", transform: open ? "rotate(45deg) translateY(5px)" : undefined }}
          />
          <span
            style={{ background: "#F0EDE6", height: 1.5, width: 22, display: "block", opacity: open ? 0 : 1, transition: "opacity 0.2s" }}
          />
          <span
            style={{ background: "#F0EDE6", height: 1.5, width: 22, display: "block", transition: "transform 0.2s", transform: open ? "rotate(-45deg) translateY(-5px)" : undefined }}
          />
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div
          style={{ background: "#161B22", borderTop: "0.5px solid rgba(240,237,230,0.12)" }}
          className="md:hidden px-6 py-4 flex flex-col gap-4"
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              style={{ color: "#8B949E", fontSize: 14, fontWeight: 500 }}
              onClick={() => setOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#kontak"
            style={{
              background: "#F5A623",
              color: "#0D1117",
              fontFamily: "'Syne', sans-serif",
              fontWeight: 700,
              fontSize: 13,
              borderRadius: 6,
              padding: "10px 18px",
              textAlign: "center",
            }}
            onClick={() => setOpen(false)}
          >
            Mulai Proyek →
          </a>
        </div>
      )}
    </nav>
  );
}

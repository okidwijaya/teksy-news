'use client';
import React, { useEffect, useState } from 'react';

const capabilities = [
  {
    num: "01",
    title: "Shopify development",
    desc: "Custom storefront dan headless build untuk brand commerce.",
  },
  {
    num: "02",
    title: "Custom ERP systems",
    desc: "Software operasional yang dibangun sesuai alur kerja bisnis Anda.",
  },
  {
    num: "03",
    title: "Web applications",
    desc: "Internal tools dan dashboard dengan standar keamanan fintech.",
  },
];

export default function CapabilityStrip() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const id = setTimeout(() => setMounted(true), 140);
    return () => clearTimeout(id);
  }, []);

  return (
    <div
      id="capabilities"
      style={{ borderTop: "0.5px solid rgba(17,17,17,0.10)", borderBottom: "0.5px solid rgba(17,17,17,0.10)" }}
    >
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3">
        {capabilities.map((c, i) => (
          <div
            key={c.num}
            className={`md:border-b-0 transform transition-all duration-700 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'} `}
            style={{
              padding: "32px 56px",
              borderRight: i < capabilities.length - 1 ? "0.5px solid rgba(17,17,17,0.10)" : "none",
              borderBottom: i < capabilities.length - 1 ? "0.5px solid rgba(17,17,17,0.10)" : "none",
              transitionDelay: `${i * 120}ms`
            }}
          >
            <div style={{ fontFamily: "'Inter Tight', sans-serif", fontSize: 12, color: "#8A8A8A", marginBottom: 10 }}>
              {c.num}
            </div>
            <div
              style={{
                fontFamily: "'Inter Tight', sans-serif",
                fontWeight: 600,
                fontSize: 17,
                marginBottom: 8,
                color: "#111111",
              }}
            >
              {c.title}
            </div>
            <div style={{ fontSize: 13.5, color: "#4A4A4A", lineHeight: 1.6 }}>{c.desc}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function HeroEN() {
  return (
    <section className="max-w-6xl mx-auto px-6 md:px-14 pt-20 md:pt-28 pb-16 md:pb-20">
      <div
        style={{
          fontSize: 12,
          color: "#8A8A8A",
          letterSpacing: "0.3px",
          display: "flex",
          alignItems: "center",
          gap: 8,
          marginBottom: 28,
        }}
      >
        <span style={{ width: 5, height: 5, background: "#2B5C4D", display: "inline-block" }} />
        KITADEVELOPERS — SOUTH TANGERANG, INDONESIA
      </div>

      <h1
        style={{
          fontFamily: "'Inter Tight', sans-serif",
          fontWeight: 600,
          fontSize: "clamp(34px, 5vw, 56px)",
          lineHeight: 1.1,
          letterSpacing: "-1.6px",
          maxWidth: 880,
          marginBottom: 28,
          color: "#111111",
        }}
      >
        We build commerce and operations systems for businesses that have outgrown off-the-shelf software.
      </h1>

      <p style={{ fontSize: 16, color: "#4A4A4A", lineHeight: 1.65, maxWidth: 560, marginBottom: 40 }}>
        Shopify storefronts, custom ERP systems, and web applications — engineered by a developer with production
        experience across fintech and e-commerce.
      </p>

      <div style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
        <a
          href="/en#contact"
          style={{
            background: "#111111",
            color: "#FAFAF8",
            padding: "13px 26px",
            fontSize: 14,
            fontWeight: 500,
            borderRadius: 2,
            display: "inline-block",
          }}
          className="hover:opacity-85 transition-opacity"
        >
          Start a conversation
        </a>
        <a
          href="#capabilities"
          style={{
            border: "0.5px solid rgba(17,17,17,0.16)",
            color: "#111111",
            padding: "13px 26px",
            fontSize: 14,
            fontWeight: 500,
            borderRadius: 2,
            display: "inline-block",
          }}
          className="hover:border-[#111111] transition-colors"
        >
          View capabilities
        </a>
      </div>
    </section>
  );
}

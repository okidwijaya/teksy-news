const reasons = [
  {
    title: "Fintech-grade security mindset",
    desc: "Real experience at Bank Raya / OCBC NISP shaped secure coding habits: proper RBAC, PII handling, and authentication done right. Relevant for businesses handling sensitive customer data.",
  },
  {
    title: "Proven e-commerce track record",
    desc: "20+ production-level Shopify projects for fashion, F&B, and lifestyle brands — all live under real traffic, not portfolio mockups.",
  },
  {
    title: "One developer, full stack",
    desc: "Frontend, backend, Shopify, ERP — no need to coordinate a large team for a mid-sized project. Direct communication, no miscommunication between developers.",
  },
  {
    title: "No jargon, just clarity",
    desc: "Business needs get translated into technical solutions that make sense. Regular progress updates — no disappearing mid-project.",
  },
];

export default function WhyUsEN() {
  return (
    <section style={{ background: "#F2F1ED" }} className="px-6 md:px-14 py-20 md:py-24">
      <div className="max-w-6xl mx-auto">
        <div style={{ fontSize: 12, color: "#8A8A8A", letterSpacing: "0.3px", marginBottom: 16 }}>
          WHY KITADEVELOPERS
        </div>
        <h2
          style={{
            fontFamily: "'Inter Tight', sans-serif",
            fontWeight: 600,
            fontSize: "clamp(24px, 3.5vw, 30px)",
            letterSpacing: "-1px",
            lineHeight: 1.15,
            marginBottom: 16,
            maxWidth: 600,
          }}
        >
          Two different worlds, one developer.
        </h2>
        <p style={{ fontSize: 14.5, color: "#4A4A4A", lineHeight: 1.65, maxWidth: 540, marginBottom: 40 }}>
          It&apos;s rare to find someone with real experience in both banking fintech and large-scale fashion
          e-commerce. That combination produces systems that are both solid and business-minded.
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(2, 1fr)",
            gap: 1,
            background: "rgba(17,17,17,0.10)",
            border: "0.5px solid rgba(17,17,17,0.10)",
          }}
        >
          {reasons.map((r) => (
            <div key={r.title} style={{ background: "#FAFAF8", padding: 28 }}>
              <h3
                style={{
                  fontFamily: "'Inter Tight', sans-serif",
                  fontWeight: 600,
                  fontSize: 15,
                  color: "#111111",
                  marginBottom: 8,
                }}
              >
                {r.title}
              </h3>
              <p style={{ fontSize: 13.5, color: "#4A4A4A", lineHeight: 1.65 }}>{r.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

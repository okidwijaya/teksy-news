export default function CTAEN() {
  return (
    <section
      id="contact"
      style={{ borderTop: "0.5px solid rgba(17,17,17,0.10)" }}
      className="max-w-6xl mx-auto px-6 md:px-14 py-20 md:py-24"
    >
      <div style={{ display: "grid", gap: 28, alignItems: "end" }} className="md:grid-cols-[1fr_auto] md:gap-8">
        <div>
          <h2
            style={{
              fontFamily: "'Inter Tight', sans-serif",
              fontWeight: 600,
              fontSize: "clamp(26px, 4vw, 34px)",
              letterSpacing: "-1px",
              lineHeight: 1.2,
              maxWidth: 480,
              marginBottom: 12,
            }}
          >
            Tell us what you&apos;re building.
          </h2>
          <p style={{ color: "#4A4A4A", fontSize: 14, maxWidth: 420, lineHeight: 1.65 }}>
            A 30-minute call, no obligation. We&apos;ll tell you honestly whether custom build is the right fit.
          </p>
        </div>
        <a
          href="mailto:hello@kitadevelopers.com"
          style={{
            background: "#111111",
            color: "#FAFAF8",
            padding: "13px 28px",
            fontSize: 14,
            fontWeight: 500,
            borderRadius: 2,
            whiteSpace: "nowrap",
            display: "inline-block",
          }}
          className="hover:opacity-85 transition-opacity"
        >
          Start a conversation
        </a>
      </div>
      <div style={{ fontSize: 12.5, color: "#8A8A8A", marginTop: 16 }}>or email hello@kitadevelopers.com</div>
    </section>
  );
}

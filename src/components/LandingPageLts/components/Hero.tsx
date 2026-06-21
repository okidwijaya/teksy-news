export default function Hero() {
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
        KITADEVELOPERS — TANGERANG SELATAN, INDONESIA
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
        Kami membangun sistem commerce dan operasional untuk bisnis yang sudah melampaui software siap pakai.
      </h1>

      <p
        style={{
          fontSize: 16,
          color: "#4A4A4A",
          lineHeight: 1.65,
          maxWidth: 560,
          marginBottom: 40,
        }}
      >
        Shopify storefront, sistem ERP custom, dan web application — dikerjakan oleh developer dengan pengalaman
        produksi di fintech dan e-commerce.
      </p>

      <div style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
        <a
          href="#kontak"
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
          Mulai percakapan
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
          Lihat kapabilitas
        </a>
      </div>
    </section>
  );
}

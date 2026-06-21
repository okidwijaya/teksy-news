const brands = [
  { name: "Ria Miranda", category: "Fashion" },
  { name: "Luxehouze", category: "Lifestyle" },
  { name: "Jiniso", category: "Fashion" },
  { name: "Novere", category: "Fashion" },
  { name: "Pimallow US", category: "Beauty" },
  { name: "Rolling HK", category: "Fashion" },
  { name: "Minuman.com", category: "F&B" },
  { name: "Mooi", category: "Lifestyle" },
];

export default function Brands() {
  return (
    <div id="work" style={{ background: "#F2F1ED" }} className="py-16 md:py-20">
      <div className="max-w-6xl mx-auto px-6 md:px-14">
        <div style={{ fontSize: 12, color: "#8A8A8A", letterSpacing: "0.3px", marginBottom: 16 }}>
          PENGALAMAN
        </div>
        <h2
          style={{
            fontFamily: "'Inter Tight', sans-serif",
            fontWeight: 600,
            fontSize: "clamp(22px, 3.5vw, 28px)",
            letterSpacing: "-1px",
            lineHeight: 1.2,
            marginBottom: 14,
            maxWidth: 560,
            color: "#111111",
          }}
        >
          20+ proyek Shopify lintas kategori dan negara
        </h2>
        <p style={{ fontSize: 14, color: "#4A4A4A", lineHeight: 1.65, maxWidth: 580, marginBottom: 36 }}>
          Brand di bawah ini dikerjakan sebagai bagian dari pengalaman profesional sebelumnya, mencakup industri
          fashion, lifestyle, beauty, dan F&B di Indonesia, Vietnam, Hong Kong, dan AS.
        </p>

        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "1px",
            background: "rgba(17,17,17,0.10)",
            border: "0.5px solid rgba(17,17,17,0.10)",
          }}
        >
          {brands.map((b) => (
            <div
              key={b.name}
              style={{
                background: "#F2F1ED",
                padding: "16px 22px",
                display: "flex",
                alignItems: "baseline",
                gap: 10,
                flex: "1 1 auto",
              }}
            >
              <span
                style={{
                  fontFamily: "'Inter Tight', sans-serif",
                  fontWeight: 500,
                  fontSize: 14,
                  color: "#111111",
                  whiteSpace: "nowrap",
                }}
              >
                {b.name}
              </span>
              <span style={{ fontSize: 11.5, color: "#8A8A8A", whiteSpace: "nowrap" }}>
                {b.category}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

type Pillar = {
  num: string;
  numColor: string;
  title: string;
  desc: string;
  stack: string[];
  cardClass: "amber" | "sage" | "blue";
};

const pillars: Pillar[] = [
  {
    num: "01",
    numColor: "#F5A623",
    title: "Shopify Commerce",
    desc: "20+ project live untuk brand fashion, F&B, dan lifestyle di Indonesia, Vietnam, Hong Kong, dan AS. Bukan sekadar pasang tema — termasuk custom app, headless storefront, dan integrasi API kompleks.",
    stack: [
      "Shopify CLI + Theme Architecture",
      "Remix / Next.js Headless",
      "Shopify GraphQL Admin API",
      "Integrasi Midtrans, Xendit, Raja Ongkir",
    ],
    cardClass: "amber",
  },
  {
    num: "02",
    numColor: "#4A7C59",
    title: "ERP Custom Build",
    desc: "Dibangun dari nol sesuai alur bisnis Anda — bukan software generik yang dipaksa cocok. Anda dapat sistem inventory, pembelian, penjualan, dan laporan keuangan yang benar-benar milik sendiri.",
    stack: [
      "Custom inventory & warehouse management",
      "Purchase Order & Sales Order flow",
      "Multi-lokasi & multi-user RBAC",
      "Integrasi e-commerce & marketplace",
    ],
    cardClass: "sage",
  },
  {
    num: "03",
    numColor: "#378ADD",
    title: "Web App & Internal Tools",
    desc: "Ketika software off-the-shelf tidak cukup. CRM, POS, admin panel — dibangun dengan standar keamanan fintech dari pengalaman nyata di Bank Raya / OCBC NISP.",
    stack: [
      "React + TypeScript frontend",
      "Node.js / Java backend",
      "PostgreSQL + Docker deployment",
      "Secure auth, PII handling, audit log",
    ],
    cardClass: "blue",
  },
];

const cardStyles = {
  amber: {
    bg: "rgba(245,166,35,0.06)",
    border: "rgba(245,166,35,0.28)",
  },
  sage: {
    bg: "rgba(74,124,89,0.06)",
    border: "rgba(74,124,89,0.28)",
  },
  blue: {
    bg: "rgba(55,138,221,0.06)",
    border: "rgba(55,138,221,0.28)",
  },
};

export default function Services() {
  return (
    <section id="layanan" className="max-w-6xl mx-auto px-6 md:px-12 py-20">
      {/* Header */}
      <div
        style={{
          fontFamily: "'JetBrains Mono', monospace",
          fontSize: 11,
          color: "#4A7C59",
          letterSpacing: "1.5px",
          textTransform: "uppercase",
          marginBottom: 12,
        }}
      >
        Positioning
      </div>
      <h2
        style={{
          fontFamily: "'Syne', sans-serif",
          fontWeight: 800,
          fontSize: "clamp(28px, 4vw, 34px)",
          letterSpacing: -1,
          marginBottom: 8,
          lineHeight: 1.1,
        }}
      >
        Tiga keahlian,
        <br />
        satu solusi terintegrasi
      </h2>
      <p style={{ color: "#8B949E", fontSize: 14, maxWidth: 510, lineHeight: 1.7, marginBottom: 0 }}>
        Kebanyakan developer pilih satu spesialisasi. KitaDevelopers membangun ketiganya — karena bisnis modern
        membutuhkan ketiganya sekaligus.
      </p>

      {/* Grid */}
      <div className="grid md:grid-cols-3 gap-4 mt-12">
        {pillars.map((p) => {
          const s = cardStyles[p.cardClass];
          return (
            <div
              key={p.num}
              style={{
                borderRadius: 11,
                padding: "26px 22px",
                background: s.bg,
                border: `0.5px solid ${s.border}`,
              }}
            >
              <div
                style={{
                  fontFamily: "'Syne', sans-serif",
                  fontSize: 44,
                  fontWeight: 800,
                  lineHeight: 1,
                  marginBottom: 10,
                  color: p.numColor,
                  opacity: 0.16,
                }}
              >
                {p.num}
              </div>
              <h3
                style={{
                  fontFamily: "'Syne', sans-serif",
                  fontWeight: 700,
                  fontSize: 19,
                  marginBottom: 9,
                }}
              >
                {p.title}
              </h3>
              <p style={{ fontSize: 13, color: "#8B949E", lineHeight: 1.7, marginBottom: 14 }}>{p.desc}</p>
              <div style={{ display: "flex", flexDirection: "column", gap: 5 }}>
                {p.stack.map((item) => (
                  <div
                    key={item}
                    style={{
                      fontFamily: "'JetBrains Mono', monospace",
                      fontSize: 11,
                      padding: "4px 9px",
                      borderRadius: 4,
                      background: "rgba(240,237,230,0.05)",
                      border: "0.5px solid rgba(240,237,230,0.12)",
                      color: "#8B949E",
                    }}
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

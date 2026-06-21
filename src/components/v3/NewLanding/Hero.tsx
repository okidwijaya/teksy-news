const stats = [
  { num: "20+", label: "Shopify project live" },
  { num: "3", label: "Negara klien aktif" },
  { num: "3.5th", label: "Pengalaman produksi" },
];

const pillars = [
  {
    icon: "🛍️",
    title: "Shopify Expertise",
    desc: "Custom store, headless storefront, private app, integrasi payment & logistik lokal.",
    tags: ["Shopify", "Remix", "Next.js", "Liquid"],
    accent: "amber" as const,
  },
  {
    icon: "📦",
    title: "ERP Custom Build",
    desc: "Dibangun dari nol sesuai alur bisnis Anda — inventory, PO/SO, multi-gudang, tanpa biaya lisensi.",
    tags: ["React", "Node.js", "PostgreSQL", "Docker"],
    accent: "sage" as const,
  },
  {
    icon: "⚙️",
    title: "Web App & Dashboard",
    desc: "CRM, POS, admin panel, internal tools — dengan standar keamanan fintech dari pengalaman Bank Raya.",
    tags: ["TypeScript", "Java", "RBAC"],
    accent: "neutral" as const,
  },
];

const accentStyles = {
  amber: {
    card: "rgba(245,166,35,0.4)",
    icon: "rgba(245,166,35,0.14)",
  },
  sage: {
    card: "rgba(74,124,89,0.4)",
    icon: "rgba(74,124,89,0.14)",
  },
  neutral: {
    card: "rgba(240,237,230,0.12)",
    icon: "rgba(55,138,221,0.14)",
  },
};

export default function Hero() {
  return (
    <section className="max-w-6xl mx-auto px-6 md:px-12 py-16 md:py-24 grid md:grid-cols-2 gap-14 items-center">
      {/* Left */}
      <div>
        <div
          style={{
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: 11,
            color: "#4A7C59",
            letterSpacing: "1.5px",
            textTransform: "uppercase",
            marginBottom: 20,
            display: "flex",
            alignItems: "center",
            gap: 8,
          }}
        >
          <span style={{ width: 24, height: 1, background: "#4A7C59", display: "inline-block" }} />
          KitaDevelopers — Tangerang Selatan, ID
        </div>

        <h1
          style={{
            fontFamily: "'Syne', sans-serif",
            fontWeight: 800,
            fontSize: "clamp(36px, 5vw, 46px)",
            lineHeight: 1.06,
            letterSpacing: -1.5,
            marginBottom: 20,
            color: "#F0EDE6",
          }}
        >
          Sistem Digital
          <br />
          untuk Bisnis yang
          <br />
          <em style={{ color: "#F5A623", fontStyle: "normal" }}>Tumbuh Serius</em>
        </h1>

        <p style={{ color: "#8B949E", fontSize: 15, lineHeight: 1.75, marginBottom: 32, maxWidth: 430 }}>
          Shopify commerce, ERP custom build untuk UMKM, dan web app — semua dari satu tangan. Bukan sekadar jasa
          website.
        </p>

        <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
          <a
            href="#kontak"
            style={{
              background: "#F5A623",
              color: "#0D1117",
              padding: "12px 24px",
              fontFamily: "'Syne', sans-serif",
              fontWeight: 700,
              fontSize: 14,
              borderRadius: 6,
              display: "inline-block",
            }}
            className="hover:opacity-90 transition-opacity"
          >
            Konsultasi Gratis →
          </a>
          <a
            href="#portfolio"
            style={{
              background: "transparent",
              color: "#F0EDE6",
              padding: "12px 24px",
              fontFamily: "'Inter', sans-serif",
              fontWeight: 500,
              fontSize: 14,
              border: "0.5px solid rgba(240,237,230,0.12)",
              borderRadius: 6,
              display: "inline-block",
            }}
            className="hover:border-[rgba(240,237,230,0.3)] transition-colors"
          >
            Lihat Portfolio
          </a>
        </div>

        {/* Stats */}
        <div
          style={{
            display: "flex",
            gap: 36,
            marginTop: 40,
            paddingTop: 32,
            borderTop: "0.5px solid rgba(240,237,230,0.12)",
          }}
        >
          {stats.map((s) => (
            <div key={s.label}>
              <div
                style={{ fontFamily: "'Syne', sans-serif", fontSize: 28, fontWeight: 800, color: "#F0EDE6" }}
              >
                {s.num}
              </div>
              <div style={{ fontSize: 11, color: "#8B949E", marginTop: 3 }}>{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Right — pillar cards */}
      <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
        {pillars.map((p) => {
          const styles = accentStyles[p.accent];
          return (
            <div
              key={p.title}
              style={{
                border: `0.5px solid ${styles.card}`,
                borderRadius: 10,
                padding: "16px 18px",
                background: "#161B22",
                display: "flex",
                alignItems: "flex-start",
                gap: 14,
              }}
            >
              <div
                style={{
                  width: 34,
                  height: 34,
                  borderRadius: 7,
                  background: styles.icon,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                  fontSize: 15,
                }}
              >
                {p.icon}
              </div>
              <div>
                <div
                  style={{ fontFamily: "'Syne', sans-serif", fontWeight: 700, fontSize: 13, marginBottom: 3 }}
                >
                  {p.title}
                </div>
                <div style={{ fontSize: 12, color: "#8B949E", lineHeight: 1.55 }}>{p.desc}</div>
                <div style={{ display: "flex", gap: 4, flexWrap: "wrap", marginTop: 7 }}>
                  {p.tags.map((tag) => (
                    <span
                      key={tag}
                      style={{
                        fontFamily: "'JetBrains Mono', monospace",
                        fontSize: 10,
                        background: "rgba(240,237,230,0.05)",
                        color: "#8B949E",
                        padding: "2px 7px",
                        borderRadius: 4,
                        border: "0.5px solid rgba(240,237,230,0.12)",
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

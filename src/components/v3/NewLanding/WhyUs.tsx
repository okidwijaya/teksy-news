const reasons = [
  {
    icon: "🏦",
    title: "Standar keamanan fintech",
    desc: "Pengalaman di Bank Raya / OCBC NISP membentuk kebiasaan coding yang aman: RBAC, PII handling, auth yang benar. Ideal untuk bisnis yang membutuhkan kepercayaan pelanggan dan data sensitif.",
  },
  {
    icon: "🛒",
    title: "Track record e-commerce nyata",
    desc: "20+ Shopify project production-level untuk brand fashion, F&B, dan lifestyle — semua live di traffic tinggi. Bukan proyek latihan, bukan mockup portofolio.",
  },
  {
    icon: "🔗",
    title: "Satu developer, banyak peran",
    desc: "Frontend, backend, Shopify, ERP — tidak perlu koordinasi tim besar untuk proyek UMKM. Komunikasi langsung, tidak ada miskomunikasi antar developer.",
  },
  {
    icon: "💬",
    title: "Komunikasi tanpa jargon",
    desc: "Kebutuhan bisnis Anda diterjemahkan ke solusi teknis yang masuk akal. Update progress selalu ada — tidak menghilang di tengah proyek. WhatsApp-friendly.",
  },
];

export default function WhyUs() {
  return (
    <section style={{ background: "#F0EDE6", color: "#0D1117" }} className="px-6 md:px-12 py-20">
      <div className="max-w-6xl mx-auto">
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
          Kenapa KitaDevelopers
        </div>
        <h2
          style={{
            fontFamily: "'Syne', sans-serif",
            fontWeight: 800,
            fontSize: "clamp(24px, 3.5vw, 30px)",
            letterSpacing: -1,
            marginBottom: 8,
            lineHeight: 1.1,
            color: "#0D1117",
          }}
        >
          Dua dunia berbeda,
          <br />
          satu developer.
        </h2>
        <p style={{ color: "#555", fontSize: 14, maxWidth: 500, lineHeight: 1.7, marginBottom: 40 }}>
          Jarang ada satu orang yang punya pengalaman nyata di fintech perbankan sekaligus e-commerce fashion skala
          besar. Kombinasi itu yang membuat sistem yang kami bangun lebih kokoh sekaligus bisnis-minded.
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(2, 1fr)",
            gap: 1,
            background: "rgba(0,0,0,0.09)",
            borderRadius: 12,
            overflow: "hidden",
            border: "0.5px solid rgba(0,0,0,0.09)",
          }}
        >
          {reasons.map((r) => (
            <div key={r.title} style={{ background: "#fff", padding: 26 }}>
              <div style={{ fontSize: 22, marginBottom: 10 }}>{r.icon}</div>
              <h3
                style={{
                  fontFamily: "'Syne', sans-serif",
                  fontWeight: 700,
                  fontSize: 15,
                  color: "#0D1117",
                  marginBottom: 7,
                }}
              >
                {r.title}
              </h3>
              <p style={{ fontSize: 13, color: "#555", lineHeight: 1.7 }}>{r.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

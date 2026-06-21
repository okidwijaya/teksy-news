const reasons = [
  {
    title: "Standar keamanan fintech",
    desc: "Pengalaman di Bank Raya / OCBC NISP membentuk kebiasaan coding yang aman: RBAC, PII handling, auth yang benar. Relevan untuk bisnis yang menangani data sensitif pelanggan.",
  },
  {
    title: "Track record e-commerce nyata",
    desc: "20+ proyek Shopify production-level untuk brand fashion, F&B, dan lifestyle — semua live di traffic nyata, bukan portofolio latihan.",
  },
  {
    title: "Satu developer, full stack",
    desc: "Frontend, backend, Shopify, ERP — tidak perlu koordinasi tim besar untuk proyek menengah. Komunikasi langsung, tanpa miskomunikasi antar developer.",
  },
  {
    title: "Komunikasi tanpa jargon",
    desc: "Kebutuhan bisnis diterjemahkan ke solusi teknis yang masuk akal. Update progres reguler — tidak menghilang di tengah proyek.",
  },
];

export default function WhyUs() {
  return (
    <section style={{ background: "#F2F1ED" }} className="px-6 md:px-14 py-20 md:py-24">
      <div className="max-w-6xl mx-auto">
        <div style={{ fontSize: 12, color: "#8A8A8A", letterSpacing: "0.3px", marginBottom: 16 }}>
          KENAPA KITADEVELOPERS
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
          Dua dunia berbeda, satu developer.
        </h2>
        <p style={{ fontSize: 14.5, color: "#4A4A4A", lineHeight: 1.65, maxWidth: 540, marginBottom: 40 }}>
          Jarang ada satu orang dengan pengalaman nyata di fintech perbankan sekaligus e-commerce fashion skala
          besar. Kombinasi itu menghasilkan sistem yang kokoh sekaligus bisnis-minded.
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

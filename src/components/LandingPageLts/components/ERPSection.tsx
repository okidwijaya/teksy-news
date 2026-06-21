const points = [
  {
    title: "Dibangun sesuai alur Anda",
    desc: "Bukan modul generik yang harus disesuaikan paksa — sistem dirancang dari proses bisnis yang sudah berjalan.",
  },
  {
    title: "Tidak ada biaya lisensi berulang",
    desc: "Bayar sekali untuk development. Tidak ada langganan bulanan setelah sistem selesai dan diserahkan.",
  },
  {
    title: "Source code dan data milik Anda",
    desc: "Tidak ada vendor lock-in. Sistem berjalan di infrastruktur yang Anda kontrol sepenuhnya.",
  },
];

export default function ERPSection() {
  return (
    <section id="erp" style={{ background: "#FAFAF8" }} className="px-6 md:px-14 py-20 md:py-24">
      <div className="max-w-6xl mx-auto">
        <div style={{ fontSize: 12, color: "#8A8A8A", letterSpacing: "0.3px", marginBottom: 16 }}>
          KENAPA CUSTOM BUILD
        </div>
        <h2
          style={{
            fontFamily: "'Inter Tight', sans-serif",
            fontWeight: 600,
            fontSize: "clamp(26px, 4vw, 32px)",
            letterSpacing: "-1px",
            lineHeight: 1.15,
            marginBottom: 16,
            maxWidth: 640,
            color: "#111111",
          }}
        >
          Software generik tidak dirancang untuk bisnis Anda secara spesifik.
        </h2>
        <p style={{ fontSize: 15, color: "#4A4A4A", lineHeight: 1.65, maxWidth: 600, marginBottom: 48 }}>
          ERP SaaS membatasi alur kerja Anda mengikuti sistem mereka. Pendekatan custom build berarti sistem yang
          mengikuti cara bisnis Anda bekerja.
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: 1,
            background: "rgba(17,17,17,0.10)",
            border: "0.5px solid rgba(17,17,17,0.10)",
          }}
          className="grid-cols-1 md:grid-cols-3"
        >
          {points.map((p) => (
            <div key={p.title} style={{ background: "#FAFAF8", padding: "28px 26px" }}>
              <div
                style={{
                  fontFamily: "'Inter Tight', sans-serif",
                  fontWeight: 600,
                  fontSize: 15,
                  marginBottom: 10,
                  color: "#111111",
                }}
              >
                {p.title}
              </div>
              <p style={{ fontSize: 13.5, color: "#4A4A4A", lineHeight: 1.65 }}>{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

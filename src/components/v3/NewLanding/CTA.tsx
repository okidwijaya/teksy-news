export default function CTA() {
  return (
    <section id="kontak" className="max-w-6xl mx-auto px-6 md:px-12 py-14">
      <div
        style={{
          background: "#161B22",
          border: "0.5px solid rgba(240,237,230,0.12)",
          borderRadius: 14,
          padding: "52px 48px",
          display: "grid",
          gridTemplateColumns: "1fr auto",
          gap: 32,
          alignItems: "center",
        }}
        className="flex-col md:grid"
      >
        <div>
          <h2
            style={{
              fontFamily: "'Syne', sans-serif",
              fontWeight: 800,
              fontSize: "clamp(22px, 3vw, 28px)",
              marginBottom: 7,
              lineHeight: 1.2,
            }}
          >
            Ada proyek di pikiran?
            <br />
            Mari kita bicara.
          </h2>
          <p style={{ fontSize: 14, color: "#8B949E" }}>
            Konsultasi 30 menit gratis — tidak ada obligasi. Proyek pertama dapat diskon 20%.
          </p>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 8, alignItems: "flex-end" }}>
          <a
            href="https://wa.me/62XXXXXXXXXX?text=Halo%20Oki!%20Saya%20tertarik%20dengan%20layanan%20KitaDevelopers."
            target="_blank"
            rel="noopener noreferrer"
            style={{
              background: "#F5A623",
              color: "#0D1117",
              padding: "13px 26px",
              fontFamily: "'Syne', sans-serif",
              fontWeight: 700,
              fontSize: 14,
              borderRadius: 6,
              whiteSpace: "nowrap",
              display: "inline-block",
            }}
            className="hover:opacity-90 transition-opacity"
          >
            Jadwalkan Konsultasi →
          </a>
          <div
            style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: 10,
              color: "#8B949E",
              textAlign: "right",
            }}
          >
            atau WhatsApp / hello@kitadevelopers.com
          </div>
        </div>
      </div>
    </section>
  );
}

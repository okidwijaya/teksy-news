const freeFeatures = [
  "Pencatatan transaksi penjualan tanpa batas",
  "Manajemen produk (tambah, edit, hapus)",
  "Export laporan penjualan & transaksi",
  "Import & export data produk (CSV/Excel)",
  "Cetak struk & invoice dalam format PDF",
  "Multi-kategori produk",
];

const paidFeatures = [
  "Buat & kelola promo / diskon otomatis",
  "Multi-cabang & multi-user dengan role",
  "Integrasi langsung ke ERP custom",
  "Laporan analitik lanjutan",
  "Dukungan prioritas",
];

export default function POSFeatureComparison() {
  return (
    <section className="max-w-6xl mx-auto px-6 md:px-14 py-16 md:py-20">
      <div style={{ fontSize: 12, color: "#8A8A8A", letterSpacing: "0.3px", marginBottom: 16 }}>
        GRATIS VS BERBAYAR
      </div>
      <h2
        style={{
          fontFamily: "'Inter Tight', sans-serif",
          fontWeight: 600,
          fontSize: "clamp(24px, 4vw, 30px)",
          letterSpacing: "-1px",
          lineHeight: 1.15,
          marginBottom: 16,
        }}
      >
        Apa yang gratis, apa yang berbayar.
      </h2>
      <p style={{ color: "#4A4A4A", fontSize: 14.5, maxWidth: 540, lineHeight: 1.65, marginBottom: 40 }}>
        Transparan dari awal. Fitur dasar untuk jualan sehari-hari gratis selamanya.
      </p>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(2, 1fr)",
          gap: 1,
          background: "rgba(17,17,17,0.10)",
          border: "0.5px solid rgba(17,17,17,0.10)",
        }}
        className="grid-cols-1 md:grid-cols-2"
      >
        <div style={{ background: "#FAFAF8", padding: "28px 26px" }}>
          <div
            style={{
              fontSize: 11.5,
              color: "#2B5C4D",
              border: "0.5px solid rgba(43,92,77,0.3)",
              padding: "3px 10px",
              borderRadius: 20,
              display: "inline-block",
              marginBottom: 18,
            }}
          >
            GRATIS SELAMANYA
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 11 }}>
            {freeFeatures.map((f) => (
              <div key={f} style={{ display: "flex", gap: 9, alignItems: "flex-start", fontSize: 13.5 }}>
                <span style={{ color: "#2B5C4D", flexShrink: 0 }}>—</span>
                <span style={{ color: "#4A4A4A" }}>{f}</span>
              </div>
            ))}
          </div>
        </div>

        <div style={{ background: "#FAFAF8", padding: "28px 26px" }}>
          <div
            style={{
              fontSize: 11.5,
              color: "#8A8A8A",
              border: "0.5px solid rgba(17,17,17,0.16)",
              padding: "3px 10px",
              borderRadius: 20,
              display: "inline-block",
              marginBottom: 18,
            }}
          >
            UPGRADE BERBAYAR
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 11 }}>
            {paidFeatures.map((f) => (
              <div key={f} style={{ display: "flex", gap: 9, alignItems: "flex-start", fontSize: 13.5 }}>
                <span style={{ color: "#8A8A8A", flexShrink: 0 }}>—</span>
                <span style={{ color: "#4A4A4A" }}>{f}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

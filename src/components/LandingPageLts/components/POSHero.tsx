export default function POSHero() {
  return (
    <section className="max-w-6xl mx-auto px-6 md:px-14 pt-20 md:pt-24 pb-16 md:pb-20">
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
        PRODUK OLEH KITADEVELOPERS
      </div>

      <h1
        style={{
          fontFamily: "'Inter Tight', sans-serif",
          fontWeight: 600,
          fontSize: "clamp(32px, 5vw, 48px)",
          lineHeight: 1.12,
          letterSpacing: "-1.4px",
          marginBottom: 20,
          maxWidth: 680,
          color: "#111111",
        }}
      >
        Aplikasi kasir gratis, tanpa biaya langganan bulanan.
      </h1>

      <p style={{ fontSize: 16, color: "#4A4A4A", lineHeight: 1.65, marginBottom: 36, maxWidth: 560 }}>
        Catat transaksi, kelola produk, export laporan penjualan, dan cetak struk PDF. Berbasis web, tidak perlu
        install apa pun.
      </p>

      <div style={{ display: "flex", gap: 14, alignItems: "center", flexWrap: "wrap" }}>
        <a
          href="#mulai"
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
          Coba gratis sekarang
        </a>
        <a
          href="#fitur"
          style={{
            border: "0.5px solid rgba(17,17,17,0.16)",
            color: "#111111",
            padding: "13px 26px",
            fontSize: 14,
            fontWeight: 500,
            borderRadius: 2,
            display: "inline-block",
          }}
        >
          Lihat fitur
        </a>
      </div>

      <div style={{ display: "flex", gap: 24, marginTop: 32, flexWrap: "wrap", fontSize: 13, color: "#4A4A4A" }}>
        <span>Tanpa install</span>
        <span>Tanpa kartu kredit</span>
        <span>Data milik Anda sendiri</span>
      </div>
    </section>
  );
}

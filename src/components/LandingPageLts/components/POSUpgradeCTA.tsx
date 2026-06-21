import Link from "next/link";

export default function POSUpgradeCTA() {
  return (
    <section
      style={{ borderTop: "0.5px solid rgba(17,17,17,0.10)" }}
      className="max-w-6xl mx-auto px-6 md:px-14 py-20 md:py-24"
    >
      <div style={{ fontSize: 12, color: "#8A8A8A", letterSpacing: "0.3px", marginBottom: 16 }}>
        SUDAH BERKEMBANG LEBIH BESAR?
      </div>
      <h2
        style={{
          fontFamily: "'Inter Tight', sans-serif",
          fontWeight: 600,
          fontSize: "clamp(22px, 3.5vw, 28px)",
          letterSpacing: "-1px",
          lineHeight: 1.2,
          marginBottom: 14,
          maxWidth: 580,
        }}
      >
        Kalau bisnis Anda sudah butuh lebih dari sekadar kasir
      </h2>
      <p style={{ fontSize: 14.5, color: "#4A4A4A", lineHeight: 1.65, maxWidth: 560, marginBottom: 28 }}>
        POS gratis ini cocok untuk mulai jualan. Kalau Anda sudah butuh integrasi inventory multi-gudang, laporan
        keuangan otomatis, atau sistem ERP yang terhubung ke toko Shopify Anda — itu yang kami bangun secara
        custom.
      </p>
      <Link
        href="/#erp"
        style={{
          background: "#111111",
          color: "#FAFAF8",
          padding: "12px 24px",
          fontSize: 14,
          fontWeight: 500,
          borderRadius: 2,
          display: "inline-block",
        }}
        className="hover:opacity-85 transition-opacity"
      >
        Lihat layanan ERP custom
      </Link>
    </section>
  );
}

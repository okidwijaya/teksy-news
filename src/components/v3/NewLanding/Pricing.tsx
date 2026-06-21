type PricingPlan = {
  name: string;
  price: string;
  unit: string;
  desc: string;
  features: string[];
  cta: string;
  featured?: boolean;
  badge?: string;
};

const plans: PricingPlan[] = [
  {
    name: "Shopify Store",
    price: "Rp 8jt",
    unit: "/ proyek",
    desc: "Custom Shopify store lengkap — tema, produk, payment lokal, domain, dan siap jual.",
    features: [
      "Custom tema Shopify (bukan template kosong)",
      "Integrasi Midtrans / Xendit + Raja Ongkir",
      "Setup produk hingga 100 SKU",
      "Mobile-optimized & speed audit",
      "2 bulan support pasca-launch",
    ],
    cta: "Mulai →",
  },
  {
    name: "Shopify + ERP Terintegrasi",
    price: "Rp 20jt",
    unit: "/ proyek",
    desc: "Shopify store + sistem ERP custom yang terhubung langsung — stok, order, dan laporan satu platform.",
    features: [
      "Semua fitur Shopify Store",
      "ERP custom build: inventory, PO, SO",
      "Integrasi realtime Shopify ↔ ERP",
      "Dashboard laporan penjualan & stok",
      "RBAC multi-user (kasir, gudang, owner)",
      "3 bulan support + training tim",
    ],
    cta: "Konsultasi Gratis →",
    featured: true,
    badge: "PALING DICARI",
  },
  {
    name: "ERP Full Custom",
    price: "Rp 30jt+",
    unit: "/ proyek",
    desc: "Sistem ERP penuh — multi-modul, multi-cabang, POS, CRM, dan integrasi sesuai kebutuhan unik bisnis Anda.",
    features: [
      "ERP multi-modul sesuai scope",
      "POS + manajemen kasir & shift",
      "CRM & pipeline penjualan",
      "Multi-cabang & multi-gudang",
      "Audit log & keamanan fintech-grade",
      "6 bulan support + SLA",
    ],
    cta: "Diskusi Scope →",
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="max-w-6xl mx-auto px-6 md:px-12 py-20">
      <div
        style={{
          fontFamily: "'JetBrains Mono', monospace",
          fontSize: 11,
          color: "#B87A18",
          letterSpacing: "1.5px",
          textTransform: "uppercase",
          marginBottom: 12,
        }}
      >
        Harga Transparan
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
        Investasi, bukan biaya rutin
      </h2>
      <p style={{ color: "#8B949E", fontSize: 14, maxWidth: 510, lineHeight: 1.7 }}>
        Harga dalam IDR, beli putus — bukan langganan. Sudah termasuk revisi dan komunikasi selama proyek. Tidak ada
        biaya tersembunyi.
      </p>

      <div className="grid md:grid-cols-3 gap-4 mt-10">
        {plans.map((plan) => (
          <div
            key={plan.name}
            style={{
              background: "#161B22",
              border: plan.featured ? "1.5px solid #F5A623" : "0.5px solid rgba(240,237,230,0.12)",
              borderRadius: 12,
              padding: "26px 22px",
              display: "flex",
              flexDirection: "column",
            }}
          >
            {plan.badge && (
              <div
                style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: 10,
                  background: "rgba(245,166,35,0.14)",
                  color: "#F5A623",
                  padding: "3px 8px",
                  borderRadius: 4,
                  letterSpacing: "0.5px",
                  marginBottom: 14,
                  display: "inline-block",
                  alignSelf: "flex-start",
                }}
              >
                {plan.badge}
              </div>
            )}

            <div
              style={{ fontFamily: "'Syne', sans-serif", fontWeight: 700, fontSize: 17, marginBottom: 5 }}
            >
              {plan.name}
            </div>

            <div style={{ display: "flex", alignItems: "baseline", gap: 6, marginBottom: 0 }}>
              <span
                style={{
                  fontFamily: "'Syne', sans-serif",
                  fontSize: 32,
                  fontWeight: 800,
                  color: "#F5A623",
                  lineHeight: 1,
                }}
              >
                {plan.price}
              </span>
              <span style={{ fontSize: 13, color: "#8B949E" }}>{plan.unit}</span>
            </div>

            <p style={{ fontSize: 13, color: "#8B949E", lineHeight: 1.65, margin: "12px 0 18px" }}>
              {plan.desc}
            </p>

            <div style={{ display: "flex", flexDirection: "column", gap: 7, flex: 1 }}>
              {plan.features.map((f) => (
                <div key={f} style={{ display: "flex", gap: 8, alignItems: "flex-start", fontSize: 12 }}>
                  <span style={{ color: "#4A7C59", flexShrink: 0 }}>✓</span>
                  <span style={{ color: "#F0EDE6" }}>{f}</span>
                </div>
              ))}
            </div>

            <a
              href="#kontak"
              style={{
                display: "block",
                width: "100%",
                marginTop: 22,
                padding: "10px",
                borderRadius: 6,
                fontFamily: "'Syne', sans-serif",
                fontWeight: 700,
                fontSize: 13,
                textAlign: "center",
                background: plan.featured ? "#F5A623" : "transparent",
                color: plan.featured ? "#0D1117" : "#F0EDE6",
                border: plan.featured ? "none" : "0.5px solid rgba(240,237,230,0.12)",
              }}
              className="hover:opacity-90 transition-opacity"
            >
              {plan.cta}
            </a>
          </div>
        ))}
      </div>

      <p style={{ fontSize: 12, color: "#8B949E", marginTop: 20, textAlign: "center" }}>
        Semua paket dapat disesuaikan dengan kebutuhan dan budget. Hubungi untuk diskusi scope proyek Anda.
      </p>
    </section>
  );
}

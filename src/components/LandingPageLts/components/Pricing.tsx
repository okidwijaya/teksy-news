type PricingTier = {
  name: string;
  desc: string;
  amount: string;
  amountSub: string;
  includes: string[];
  process: string;
};

// "Payment integration",
const tiers: PricingTier[] = [
  {
    name: "Shopify store",
    desc: "Untuk brand yang siap jualan online dengan fondasi yang solid.",
    amount: "Rp 12.000.000",
    amountSub: "Start From, per proyek",
    includes: ["Full Shopify store setup",
      "Theme configuration and light styling based on chosen template",
      "Setting up a domain",
      "Setting up email",
      "Shipping integration (basic configuration)",
      "Upload up to 10 collections or categories",
      "Upload up to 50 products",
      "Upload up to 5 content pages (About, Contact, FAQ, etc.)",
      "Newsletter signup and social media links",
      "Discount & promotion setup",
      "Basic redirect setup (404)",
      "Bugs fixing during setup",
      "2 time revision",
      "2 weeks of free support after launch",
      "Quick training session (live or recorded)"],
    process: "3-4 minggu dari scoping hingga go-live.",
  },
  {
    name: "Shopify + ERP",
    desc: "Untuk bisnis yang butuh toko dan operasional bicara satu sama lain.",
    amount: "Rp 20.000.000",
    amountSub: "per proyek",
    includes: [
      "Semua yang ada di Shopify store",
      "ERP custom: inventory, PO, sales order",
      "Sinkronisasi data realtime",
      "Multi-user dengan role akses",
    ],
    process: "5–7 minggu, termasuk training tim Anda.",
  },
  {
    name: "ERP, full scope",
    desc: "Untuk operasional yang sudah terlalu kompleks untuk software generik.",
    amount: "Rp 30.000.000+",
    amountSub: "scope didiskusikan",
    includes: ["Multi-cabang & multi-gudang", "Point of sale terintegrasi", "CRM & audit log"],
    process: "Timeline disepakati bersama setelah scoping awal.",
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="max-w-6xl mx-auto px-6 md:px-14 py-20 md:py-24">
      <div style={{ fontSize: 12, color: "#8A8A8A", letterSpacing: "0.3px", marginBottom: 16 }}>ENGAGEMENT</div>
      <h2
        style={{
          fontFamily: "'Inter Tight', sans-serif",
          fontWeight: 600,
          fontSize: "clamp(26px, 4vw, 32px)",
          letterSpacing: "-1px",
          lineHeight: 1.15,
          marginBottom: 16,
          maxWidth: 640,
        }}
      >
        Tiga cara memulai, satu prinsip yang sama.
      </h2>
      <p style={{ fontSize: 15, color: "#4A4A4A", lineHeight: 1.65, maxWidth: 560, marginBottom: 48 }}>
        Harga tetap, dibayar sekali di awal proyek — bukan langganan. Anda memiliki sistem dan kodenya sejak hari
        serah terima.
      </p>

      <div className="grid md:grid-cols-3 gap-px" style={{ background: "rgba(17,17,17,0.10)", border: "0.5px solid rgba(17,17,17,0.10)" }}>
        {tiers.map((tier) => (
          <div key={tier.name} style={{ background: "#FAFAF8", padding: "32px 26px", display: "flex", flexDirection: "column" }}>
            <div
              style={{
                fontFamily: "'Inter Tight', sans-serif",
                fontWeight: 600,
                fontSize: 17,
                marginBottom: 8,
                color: "#111111",
              }}
            >
              {tier.name}
            </div>
            <p style={{ fontSize: 13, color: "#4A4A4A", lineHeight: 1.6, marginBottom: 24, minHeight: 42 }}>
              {tier.desc}
            </p>

            <div style={{ marginBottom: 24 }}>
              <div style={{ fontFamily: "'Inter Tight', sans-serif", fontWeight: 600, fontSize: 22, color: "#111111" }}>
                {tier.amount}
              </div>
              <div style={{ fontSize: 12, color: "#8A8A8A", marginTop: 2 }}>{tier.amountSub}</div>
            </div>

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: 9,
                borderTop: "0.5px solid rgba(17,17,17,0.10)",
                paddingTop: 20,
                flex: 1,
              }}
            >
              {tier.includes.map((item) => (
                <div key={item} style={{ display: "flex", gap: 9, alignItems: "flex-start", fontSize: 13 }}>
                  <span style={{ color: "#2B5C4D", flexShrink: 0 }}>—</span>
                  <span style={{ color: "#4A4A4A", lineHeight: 1.5 }}>{item}</span>
                </div>
              ))}
            </div>

            <div
              style={{
                fontSize: 12,
                color: "#8A8A8A",
                marginTop: 20,
                paddingTop: 16,
                borderTop: "0.5px solid rgba(17,17,17,0.10)",
              }}
            >
              {tier.process}
            </div>
          </div>
        ))}
      </div>

      <p style={{ fontSize: 12.5, color: "#8A8A8A", marginTop: 24 }}>
        Semua paket dapat disesuaikan dengan kebutuhan dan scope proyek Anda — angka di atas adalah titik awal
        diskusi, bukan harga final.
      </p>
    </section>
  );
}

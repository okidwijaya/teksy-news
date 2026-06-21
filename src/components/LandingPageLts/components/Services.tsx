type Approach = {
  num: string;
  title: string;
  desc: string;
  stack: string[];
};

const approaches: Approach[] = [
  {
    num: "01",
    title: "Commerce engineering",
    desc: "Shopify store dibangun untuk brand yang butuh lebih dari sekadar tema — custom app, headless storefront, dan integrasi dengan payment serta logistik lokal.",
    stack: ["Shopify CLI", "Remix", "Next.js", "GraphQL Admin API"],
  },
  {
    num: "02",
    title: "Operations software",
    desc: "Sistem ERP dibangun dari nol — inventory, pembelian, sales order, dan laporan — dirancang mengikuti alur kerja Anda yang sudah ada, bukan memaksa Anda mengikuti sistem orang lain.",
    stack: ["React", "Node.js", "PostgreSQL", "Docker"],
  },
  {
    num: "03",
    title: "Applied security",
    desc: "Autentikasi, role-based access, dan penanganan data dibangun mengikuti standar yang dipakai di sistem perbankan produksi — diterapkan pada tools commerce dan operasional.",
    stack: ["RBAC", "TypeScript", "Java / Spring Boot"],
  },
];

export default function Services() {
  return (
    <section id="approach" className="max-w-6xl mx-auto px-6 md:px-14 py-20 md:py-24">
      <div style={{ fontSize: 12, color: "#8A8A8A", letterSpacing: "0.3px", marginBottom: 16 }}>PENDEKATAN</div>
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
        Studio kecil, dengan sengaja.
      </h2>
      <p style={{ fontSize: 15, color: "#4A4A4A", lineHeight: 1.65, maxWidth: 560 }}>
        Tidak ada account manager, tidak ada handoff antar tim. Satu titik kontak dari scoping hingga delivery —
        artinya lebih sedikit miskomunikasi dan keputusan yang lebih cepat.
      </p>

      <div style={{ marginTop: 8 }}>
        {approaches.map((a, i) => (
          <div
            key={a.num}
            style={{
              display: "grid",
              gridTemplateColumns: "60px 1fr",
              gap: 24,
              padding: "32px 0",
              borderTop: "0.5px solid rgba(17,17,17,0.10)",
              borderBottom: i === approaches.length - 1 ? "0.5px solid rgba(17,17,17,0.10)" : "none",
            }}
            className="md:grid-cols-[80px_1fr]"
          >
            <div style={{ fontFamily: "'Inter Tight', sans-serif", fontSize: 13, color: "#8A8A8A", paddingTop: 2 }}>
              {a.num}
            </div>
            <div>
              <div
                style={{
                  fontFamily: "'Inter Tight', sans-serif",
                  fontWeight: 600,
                  fontSize: 18,
                  marginBottom: 8,
                  color: "#111111",
                }}
              >
                {a.title}
              </div>
              <p style={{ fontSize: 14, color: "#4A4A4A", lineHeight: 1.65, maxWidth: 600 }}>{a.desc}</p>
              <div style={{ display: "flex", gap: 8, marginTop: 12, flexWrap: "wrap" }}>
                {a.stack.map((s) => (
                  <span
                    key={s}
                    style={{
                      fontSize: 11.5,
                      color: "#4A4A4A",
                      border: "0.5px solid rgba(17,17,17,0.16)",
                      padding: "4px 10px",
                      borderRadius: 20,
                    }}
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

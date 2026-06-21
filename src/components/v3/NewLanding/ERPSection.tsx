const inventoryItems = [
  { name: "Kemeja Batik Modern", stock: 142, status: "aman" as const, value: "Rp 7,1jt" },
  { name: "Kaos Polos Premium", stock: 38, status: "rendah" as const, value: "Rp 1,9jt" },
  { name: "Jaket Bomber Unisex", stock: 201, status: "aman" as const, value: "Rp 30jt" },
  { name: "Celana Chino Slim", stock: 0, status: "habis" as const, value: "—" },
];

const tabs = ["Inventory", "Purchase Order", "Sales Order", "Laporan"];

const statusEl = (status: "aman" | "rendah" | "habis") => {
  if (status === "aman")
    return (
      <span
        style={{
          color: "#4A7C59",
          background: "rgba(74,124,89,0.15)",
          padding: "1px 6px",
          borderRadius: 3,
          fontSize: 10,
          textAlign: "center",
        }}
      >
        Aman
      </span>
    );
  if (status === "rendah")
    return <span style={{ color: "#F5A623" }}>⚠ Rendah</span>;
  return <span style={{ color: "#E24B4A" }}>Habis</span>;
};

export default function ERPSection() {
  return (
    <section id="erp" style={{ background: "#F0EDE6", color: "#0D1117" }} className="px-6 md:px-12 py-20">
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
          Kenapa ERP Custom Build?
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left copy */}
          <div>
            <h2
              style={{
                fontFamily: "'Syne', sans-serif",
                fontWeight: 800,
                fontSize: "clamp(24px, 3.5vw, 30px)",
                letterSpacing: -1,
                marginBottom: 12,
                lineHeight: 1.1,
                color: "#0D1117",
              }}
            >
              Software generik tidak
              <br />
              dirancang untuk bisnis Anda
            </h2>
            <p style={{ color: "#555", fontSize: 14, lineHeight: 1.75, marginBottom: 16 }}>
              Accurate, Jurnal, atau ERP SaaS lainnya membatasi alur kerja Anda mengikuti sistem mereka. ERP custom
              build berarti sistem yang mengikuti cara bisnis Anda bekerja — bukan sebaliknya.
            </p>
            <p style={{ color: "#555", fontSize: 14, lineHeight: 1.75, marginBottom: 24 }}>
              Bayar sekali untuk development. Tidak ada biaya lisensi bulanan. Tidak ada fitur yang tidak terpakai.
              Tidak ada vendor lock-in.
            </p>
            <div style={{ display: "flex", gap: 14 }}>
              <div style={{ background: "#EAF3DE", borderRadius: 8, padding: "16px 18px", flex: 1 }}>
                <div
                  style={{ fontFamily: "'Syne', sans-serif", fontWeight: 800, fontSize: 24, color: "#4A7C59" }}
                >
                  Rp 0/bln
                </div>
                <div style={{ fontSize: 12, color: "#555", marginTop: 3 }}>biaya lisensi setelah delivery</div>
              </div>
              <div style={{ background: "#FFF8EC", borderRadius: 8, padding: "16px 18px", flex: 1 }}>
                <div
                  style={{ fontFamily: "'Syne', sans-serif", fontWeight: 800, fontSize: 24, color: "#B87A18" }}
                >
                  100%
                </div>
                <div style={{ fontSize: 12, color: "#555", marginTop: 3 }}>source code & data milik Anda</div>
              </div>
            </div>
          </div>

          {/* Right — mock ERP UI */}
          <div
            style={{
              background: "#161B22",
              border: "0.5px solid rgba(240,237,230,0.12)",
              borderRadius: 12,
              padding: 20,
              fontFamily: "'JetBrains Mono', monospace",
              color: "#F0EDE6",
            }}
          >
            {/* Window dots */}
            <div style={{ display: "flex", gap: 5, marginBottom: 14, alignItems: "center" }}>
              <div style={{ width: 9, height: 9, borderRadius: "50%", background: "#FF5F57" }} />
              <div style={{ width: 9, height: 9, borderRadius: "50%", background: "#FFBD2E" }} />
              <div style={{ width: 9, height: 9, borderRadius: "50%", background: "#28CA41" }} />
              <span style={{ marginLeft: 8, fontSize: 10, color: "#8B949E" }}>
                erp.tokofashion.local — Custom Build
              </span>
            </div>

            {/* Tabs */}
            <div style={{ display: "flex", gap: 5, marginBottom: 12, flexWrap: "wrap" }}>
              {tabs.map((tab, i) => (
                <div
                  key={tab}
                  style={{
                    fontSize: 10,
                    padding: "3px 8px",
                    borderRadius: 4,
                    background: i === 0 ? "rgba(245,166,35,0.12)" : "rgba(240,237,230,0.05)",
                    border: `0.5px solid ${i === 0 ? "rgba(245,166,35,0.3)" : "rgba(240,237,230,0.12)"}`,
                    color: i === 0 ? "#F5A623" : "#8B949E",
                  }}
                >
                  {tab}
                </div>
              ))}
            </div>

            {/* Table header */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "2fr 1fr 1fr 1fr",
                gap: 6,
                padding: "7px 0",
                fontSize: 10,
                color: "rgba(240,237,230,0.35)",
                borderBottom: "0.5px solid rgba(240,237,230,0.12)",
                letterSpacing: "0.5px",
              }}
            >
              <span>Produk</span>
              <span>Stok</span>
              <span>Status</span>
              <span>Nilai</span>
            </div>

            {/* Rows */}
            {inventoryItems.map((item) => (
              <div
                key={item.name}
                style={{
                  display: "grid",
                  gridTemplateColumns: "2fr 1fr 1fr 1fr",
                  gap: 6,
                  padding: "7px 0",
                  fontSize: 11,
                  color: "#8B949E",
                  borderBottom: "0.5px solid rgba(240,237,230,0.12)",
                  alignItems: "center",
                }}
              >
                <span>{item.name}</span>
                <span>{item.stock}</span>
                <span>{statusEl(item.status)}</span>
                <span>{item.value}</span>
              </div>
            ))}

            {/* Footer */}
            <div
              style={{
                marginTop: 12,
                paddingTop: 10,
                borderTop: "0.5px solid rgba(240,237,230,0.12)",
                display: "flex",
                justifyContent: "space-between",
                fontSize: 10,
                color: "#8B949E",
              }}
            >
              <span>4 SKU · diperbarui 2 mnt lalu</span>
              <span style={{ color: "#4A7C59" }}>Auto-reorder aktif ✓</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

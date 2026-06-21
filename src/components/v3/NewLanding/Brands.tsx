const brands = [
  "Ria Miranda",
  "Luxehouze",
  "Jiniso",
  "Juaraga",
  "Novere",
  "Heyglow",
  "Pimallow USA",
  "Rolling HK",
  "Minuman.com",
  "Mooi",
  "Aleza",
  "Supersport Vietnam",
  "Sleep in Dreamland",
  "Honeylens",
];

export default function Brands() {
  return (
    <div
      style={{ borderTop: "0.5px solid rgba(240,237,230,0.12)", borderBottom: "0.5px solid rgba(240,237,230,0.12)" }}
      className="px-6 md:px-12 py-9"
    >
      <div className="max-w-6xl mx-auto">
        <div
          style={{
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: 10,
            color: "#8B949E",
            letterSpacing: "1.5px",
            textTransform: "uppercase",
            marginBottom: 14,
          }}
        >
          Klien &amp; brand yang pernah dikerjakan
        </div>
        <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
          {brands.map((b) => (
            <span
              key={b}
              style={{
                fontSize: 12,
                fontWeight: 500,
                color: "#8B949E",
                padding: "4px 12px",
                borderRadius: 20,
                border: "0.5px solid rgba(240,237,230,0.12)",
                background: "#161B22",
              }}
            >
              {b}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

const footerLinks = [
  { label: "Layanan", href: "#layanan" },
  { label: "ERP Custom", href: "#erp" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Blog", href: "/blog" },
  { label: "Kontak", href: "#kontak" },
];

export default function Footer() {
  return (
    <footer
      className="bg-[#0D1117]"
    >
      <div style={{ borderTop: "0.5px solid rgba(240,237,230,0.12)" }}
        className="w-full max-w-6xl mx-auto px-6 md:px-12 py-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-6"
      >
        <div>
          <div
            style={{
              fontFamily: "'Syne', sans-serif",
              fontWeight: 800,
              fontSize: 15,
              letterSpacing: -0.3,
            }}
          >
            <span style={{ color: "#F0EDE6" }}>kitadevelopers</span>
            <span style={{ color: "#F5A623" }}>.</span>
            <span style={{ color: "#8B949E", fontWeight: 600 }}>com</span>
          </div>
          <div style={{ fontSize: 12, color: "#8B949E", marginTop: 4 }}>
            © 2026 KitaDevelopers. Tangerang Selatan, Indonesia.
          </div>
        </div>

        <div style={{ display: "flex", gap: 20, flexWrap: "wrap" }}>
          {footerLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              style={{ fontSize: 12, color: "#8B949E", textDecoration: "none" }}
              className="hover:text-[#F0EDE6] transition-colors"
            >
              {l.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}

const footerLinks = [
  { label: "Capabilities", href: "#capabilities" },
  { label: "Work", href: "portfolio" },
  { label: "Pricing", href: "#pricing" },
  { label: "Contact", href: "contact" },
];

export default function Footer() {
  return (
    <footer
      style={{ borderTop: "0.5px solid rgba(17,17,17,0.10)" }}
      className="max-w-6xl mx-auto px-6 md:px-14 py-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-6"
    >
      <div>
        <div style={{ fontFamily: "'Inter Tight', sans-serif", fontWeight: 600, fontSize: 15, color: "#111111" }}>
          KitaDevelopers
        </div>
        <div style={{ fontSize: 12.5, color: "#8A8A8A", marginTop: 4 }}>
          Tangerang Selatan, Indonesia
        </div>
      </div>

      <div style={{ display: "flex", gap: 22, flexWrap: "wrap" }}>
        {footerLinks.map((l) => (
          <a
            key={l.href}
            href={l.href}
            style={{ fontSize: 12.5, color: "#4A4A4A", textDecoration: "none" }}
            className="hover:text-[#111111] transition-colors"
          >
            {l.label}
          </a>
        ))}
      </div>
    </footer>
  );
}

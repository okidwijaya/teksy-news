type CaseStudy = {
    num: string;
    title: string;
    category: string;
    desc: string;
    details: string[];
    stack: string[];
};

const caseStudies: CaseStudy[] = [
    {
        num: "01",
        title: "Sistem POS berbasis web",
        category: "Produk internal",
        desc: "Aplikasi kasir yang dapat diakses langsung dari browser tanpa instalasi — dibangun untuk UMKM yang butuh sistem transaksi tanpa biaya langganan besar di awal.",
        details: [
            "Pencatatan transaksi, manajemen produk, dan export laporan",
            "Format Rupiah dan label Bahasa Indonesia secara native",
            "Role-based access untuk kasir, gudang, dan owner",
        ],
        stack: ["Next.js", "TypeScript", "PostgreSQL"],
    },
    {
        num: "02",
        title: "Shopify multi-region untuk brand fashion",
        category: "Pengalaman profesional",
        desc: "Pengembangan storefront Shopify untuk brand yang beroperasi lintas Indonesia, Vietnam, dan Hong Kong — termasuk penyesuaian payment dan logistik per region.",
        details: [
            "Custom tema dan integrasi headless sebagian",
            "Payment gateway dan ongkir disesuaikan per negara",
            "Optimasi performa untuk traffic tinggi musim kampanye",
        ],
        stack: ["Shopify", "Liquid", "Remix", "GraphQL Admin API"],
    },
    {
        num: "03",
        title: "Backend layanan keuangan",
        category: "Pengalaman profesional",
        desc: "Berkontribusi pada sistem backend untuk layanan perbankan digital, dengan fokus pada keandalan transaksi dan kepatuhan terhadap standar keamanan data.",
        details: [
            "Penanganan data sensitif sesuai standar perbankan",
            "Resolusi bug kritikal pada alur transaksi produksi",
            "Kolaborasi lintas tim dalam siklus rilis terjadwal",
        ],
        stack: ["Java", "Spring Boot", "PostgreSQL"],
    },
];

export default function PortoContent() {
    return (
        <section className="max-w-6xl mx-auto px-6 md:px-14 py-16 md:py-20">
            {caseStudies.map((cs, i) => (
                <div
                    key={cs.num}
                    style={{
                        display: "grid",
                        gridTemplateColumns: "1fr",
                        gap: 24,
                        padding: "40px 0",
                        borderTop: "0.5px solid rgba(17,17,17,0.10)",
                        borderBottom: i === caseStudies.length - 1 ? "0.5px solid rgba(17,17,17,0.10)" : "none",
                    }}
                    className="md:grid-cols-[80px_1fr]"
                >
                    <div style={{ fontFamily: "'Inter Tight', sans-serif", fontSize: 13, color: "#8A8A8A", paddingTop: 2 }}>
                        {cs.num}
                    </div>
                    <div>
                        <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 10, flexWrap: "wrap" }}>
                            <span
                                style={{
                                    fontFamily: "'Inter Tight', sans-serif",
                                    fontWeight: 600,
                                    fontSize: 19,
                                    color: "#111111",
                                }}
                            >
                                {cs.title}
                            </span>
                            <span
                                style={{
                                    fontSize: 11.5,
                                    color: "#2B5C4D",
                                    border: "0.5px solid rgba(43,92,77,0.3)",
                                    padding: "2px 9px",
                                    borderRadius: 20,
                                }}
                            >
                                {cs.category}
                            </span>
                        </div>
                        <p style={{ fontSize: 14, color: "#4A4A4A", lineHeight: 1.65, maxWidth: 600, marginBottom: 16 }}>
                            {cs.desc}
                        </p>
                        <div style={{ display: "flex", flexDirection: "column", gap: 7, marginBottom: 16 }}>
                            {cs.details.map((d) => (
                                <div key={d} style={{ display: "flex", gap: 9, alignItems: "flex-start", fontSize: 13 }}>
                                    <span style={{ color: "#8A8A8A", flexShrink: 0 }}>—</span>
                                    <span style={{ color: "#4A4A4A" }}>{d}</span>
                                </div>
                            ))}
                        </div>
                        <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
                            {cs.stack.map((s) => (
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
        </section>
    );
}
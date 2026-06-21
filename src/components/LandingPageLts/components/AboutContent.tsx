const timeline = [
    {
        period: "Sebelumnya",
        title: "Fintech & perbankan digital",
        desc: "Bekerja di sistem perbankan produksi (Bank Raya, OCBC NISP) — membentuk kebiasaan menangani data sensitif, autentikasi, dan keamanan secara serius, bukan sebagai tambahan di akhir proyek.",
    },
    {
        period: "Bersamaan",
        title: "E-commerce & Shopify",
        desc: "20+ proyek Shopify untuk brand fashion, lifestyle, beauty, dan F&B — termasuk custom app dan headless storefront, bukan sekadar instalasi tema.",
    },
    {
        period: "Sekarang",
        title: "KitaDevelopers",
        desc: "Menggabungkan kedua pengalaman itu menjadi satu studio yang fokus pada sistem commerce dan operasional untuk bisnis yang sudah melampaui software siap pakai.",
    },
];

const principles = [
    {
        title: "Satu titik kontak",
        desc: "Tidak ada account manager yang menerjemahkan kebutuhan Anda ke tim development. Anda bicara langsung dengan yang mengerjakan.",
    },
    {
        title: "Scope jujur",
        desc: "Kalau custom build bukan solusi yang tepat untuk kebutuhan Anda, itu akan disampaikan di awal — bukan setelah kontrak ditandatangani.",
    },
    {
        title: "Kepemilikan penuh",
        desc: "Source code dan data adalah milik Anda sejak hari serah terima. Tidak ada vendor lock-in yang disengaja.",
    },
];

export default function AboutContent() {
    return (
        <>
            <section className="max-w-6xl mx-auto px-6 md:px-14 py-16 md:py-20">
                <div style={{ fontSize: 12, color: "#8A8A8A", letterSpacing: "0.3px", marginBottom: 16 }}>PERJALANAN</div>
                <div>
                    {timeline.map((t, i) => (
                        <div
                            key={t.title}
                            style={{
                                display: "grid",
                                gridTemplateColumns: "120px 1fr",
                                gap: 24,
                                padding: "28px 0",
                                borderTop: "0.5px solid rgba(17,17,17,0.10)",
                                borderBottom: i === timeline.length - 1 ? "0.5px solid rgba(17,17,17,0.10)" : "none",
                            }}
                        >
                            <div style={{ fontSize: 12.5, color: "#8A8A8A", paddingTop: 2 }}>{t.period}</div>
                            <div>
                                <div
                                    style={{
                                        fontFamily: "'Inter Tight', sans-serif",
                                        fontWeight: 600,
                                        fontSize: 17,
                                        marginBottom: 8,
                                        color: "#111111",
                                    }}
                                >
                                    {t.title}
                                </div>
                                <p style={{ fontSize: 14, color: "#4A4A4A", lineHeight: 1.65, maxWidth: 600 }}>{t.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            <section style={{ background: "#F2F1ED" }} className="px-6 md:px-14 py-20 md:py-24">
                <div className="max-w-6xl mx-auto">
                    <div style={{ fontSize: 12, color: "#8A8A8A", letterSpacing: "0.3px", marginBottom: 16 }}>
                        PRINSIP KERJA
                    </div>
                    <h2
                        style={{
                            fontFamily: "'Inter Tight', sans-serif",
                            fontWeight: 600,
                            fontSize: "clamp(24px, 3.5vw, 30px)",
                            letterSpacing: "-1px",
                            lineHeight: 1.15,
                            marginBottom: 40,
                            maxWidth: 600,
                        }}
                    >
                        Tiga hal yang tidak berubah, apa pun ukuran proyeknya.
                    </h2>

                    <div
                        style={{
                            display: "grid",
                            gridTemplateColumns: "repeat(3, 1fr)",
                            gap: 1,
                            background: "rgba(17,17,17,0.10)",
                            border: "0.5px solid rgba(17,17,17,0.10)",
                        }}
                        className="grid-cols-1 md:grid-cols-3"
                    >
                        {principles.map((p) => (
                            <div key={p.title} style={{ background: "#FAFAF8", padding: "28px 26px" }}>
                                <div
                                    style={{
                                        fontFamily: "'Inter Tight', sans-serif",
                                        fontWeight: 600,
                                        fontSize: 15,
                                        marginBottom: 10,
                                        color: "#111111",
                                    }}
                                >
                                    {p.title}
                                </div>
                                <p style={{ fontSize: 13.5, color: "#4A4A4A", lineHeight: 1.65 }}>{p.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}
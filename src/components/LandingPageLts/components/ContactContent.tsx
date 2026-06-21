const channels = [
    {
        label: "Email",
        value: "hello@kitadevelopers.com",
        href: "mailto:hello@kitadevelopers.com?subject=Konsultasi%20Proyek",
        note: "Respon dalam 1–2 hari kerja.",
    },
    {
        label: "WhatsApp",
        value: "Chat langsung",
        href: "https://wa.me/62XXXXXXXXXX?text=Halo%20Oki!%20Saya%20tertarik%20mendiskusikan%20proyek.",
        note: "Untuk pertanyaan cepat atau diskusi awal.",
    },
];

const processSteps = [
    { num: "01", title: "Cerita singkat", desc: "Anda menjelaskan kebutuhan dan tantangan bisnis melalui email atau WhatsApp." },
    { num: "02", title: "Konsultasi 30 menit", desc: "Diskusi lebih dalam untuk memahami scope, tanpa obligasi apa pun." },
    { num: "03", title: "Proposal & timeline", desc: "Anda menerima scope tertulis, estimasi harga, dan linimasa pengerjaan." },
];

export default function ContactContent() {
    return (
        <>
            <section className="max-w-6xl mx-auto px-6 md:px-14 py-16 md:py-20">
                <div
                    style={{
                        display: "grid",
                        gridTemplateColumns: "repeat(2, 1fr)",
                        gap: 1,
                        background: "rgba(17,17,17,0.10)",
                        border: "0.5px solid rgba(17,17,17,0.10)",
                    }}
                    className="grid-cols-1 md:grid-cols-2"
                >
                    {channels.map((c) => (
                        <a
                            key={c.label}
                            href={c.href}
                            target={c.label === "WhatsApp" ? "_blank" : undefined}
                            rel={c.label === "WhatsApp" ? "noopener noreferrer" : undefined}
                            style={{
                                background: "#FAFAF8",
                                padding: "32px 28px",
                                display: "block",
                                textDecoration: "none",
                            }}
                            className="hover:bg-[#F2F1ED] transition-colors"
                        >
                            <div style={{ fontSize: 12, color: "#8A8A8A", letterSpacing: "0.3px", marginBottom: 10 }}>
                                {c.label.toUpperCase()}
                            </div>
                            <div
                                style={{
                                    fontFamily: "'Inter Tight', sans-serif",
                                    fontWeight: 600,
                                    fontSize: 18,
                                    color: "#111111",
                                    marginBottom: 8,
                                }}
                            >
                                {c.value}
                            </div>
                            <div style={{ fontSize: 13, color: "#4A4A4A" }}>{c.note}</div>
                        </a>
                    ))}
                </div>
            </section>

            <section style={{ background: "#F2F1ED" }} className="px-6 md:px-14 py-20 md:py-24">
                <div className="max-w-6xl mx-auto">
                    <div style={{ fontSize: 12, color: "#8A8A8A", letterSpacing: "0.3px", marginBottom: 16 }}>
                        BAGAIMANA PROSESNYA
                    </div>
                    <h2
                        style={{
                            fontFamily: "'Inter Tight', sans-serif",
                            fontWeight: 600,
                            fontSize: "clamp(24px, 3.5vw, 30px)",
                            letterSpacing: "-1px",
                            lineHeight: 1.15,
                            marginBottom: 40,
                            maxWidth: 560,
                        }}
                    >
                        Tiga langkah sebelum proyek dimulai.
                    </h2>

                    <div>
                        {processSteps.map((s, i) => (
                            <div
                                key={s.num}
                                style={{
                                    display: "grid",
                                    gridTemplateColumns: "60px 1fr",
                                    gap: 24,
                                    padding: "24px 0",
                                    borderTop: "0.5px solid rgba(17,17,17,0.12)",
                                    borderBottom: i === processSteps.length - 1 ? "0.5px solid rgba(17,17,17,0.12)" : "none",
                                }}
                            >
                                <div style={{ fontFamily: "'Inter Tight', sans-serif", fontSize: 13, color: "#8A8A8A", paddingTop: 2 }}>
                                    {s.num}
                                </div>
                                <div>
                                    <div
                                        style={{
                                            fontFamily: "'Inter Tight', sans-serif",
                                            fontWeight: 600,
                                            fontSize: 15.5,
                                            marginBottom: 6,
                                            color: "#111111",
                                        }}
                                    >
                                        {s.title}
                                    </div>
                                    <p style={{ fontSize: 13.5, color: "#4A4A4A", lineHeight: 1.6, maxWidth: 480 }}>{s.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}
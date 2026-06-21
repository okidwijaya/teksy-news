type PageHeaderProps = {
    eyebrow: string;
    title: string;
    description?: string;
};

export default function PageHeader({ eyebrow, title, description }: PageHeaderProps) {
    return (
        <section className="max-w-6xl mx-auto px-6 md:px-14 pt-20 md:pt-24 pb-12 md:pb-16">
            <div style={{ fontSize: 12, color: "#8A8A8A", letterSpacing: "0.3px", marginBottom: 20 }}>
                {eyebrow}
            </div>
            <h1
                style={{
                    fontFamily: "'Inter Tight', sans-serif",
                    fontWeight: 600,
                    fontSize: "clamp(30px, 4.5vw, 44px)",
                    lineHeight: 1.12,
                    letterSpacing: "-1.4px",
                    marginBottom: description ? 18 : 0,
                    maxWidth: 760,
                    color: "#111111",
                }}
            >
                {title}
            </h1>
            {description && (
                <p style={{ fontSize: 15.5, color: "#4A4A4A", lineHeight: 1.7, maxWidth: 600 }}>{description}</p>
            )}
        </section>
    );
}
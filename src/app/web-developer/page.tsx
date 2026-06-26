import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
    title: 'Web Developer Indonesia — Jasa Pembuatan Website & Aplikasi Web | KITA Developers',
    description:
        'Jasa web developer profesional di Indonesia. Next.js, React, full-stack. Website cepat, SEO-friendly, dan mobile-first. Mulai dari Rp 4.500.000. Konsultasi gratis.',
    keywords: [
        'web developer indonesia',
        'jasa web developer',
        'jasa pembuatan website indonesia',
        'web developer freelance indonesia',
        'nextjs developer indonesia',
        'react developer indonesia',
        'jasa website profesional',
        'web developer tangerang selatan',
        'fullstack developer indonesia',
    ],
    alternates: {
        canonical: 'https://www.kitadevelopers.com/web-developer',
    },
    openGraph: {
        title: 'Web Developer Indonesia — KITA Developers',
        description:
            'Website dan aplikasi web modern dengan Next.js, React, dan TypeScript. Fokus pada performa, SEO, dan aksesibilitas.',
        url: 'https://www.kitadevelopers.com/web-developer',
        siteName: 'KITA Developers',
        locale: 'id_ID',
        type: 'website',
    },
};

const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
        {
            '@type': 'Service',
            name: 'Jasa Web Developer Indonesia',
            provider: {
                '@type': 'Organization',
                name: 'KITA Developers',
                url: 'https://www.kitadevelopers.com',
                areaServed: 'ID',
            },
            description:
                'Pembuatan website dan aplikasi web dengan Next.js, React, TypeScript. Fokus performa, SEO, dan aksesibilitas.',
            offers: {
                '@type': 'AggregateOffer',
                priceCurrency: 'IDR',
                lowPrice: '4500000',
                highPrice: '80000000',
            },
        },
        {
            '@type': 'FAQPage',
            mainEntity: [
                {
                    '@type': 'Question',
                    name: 'Berapa harga jasa pembuatan website?',
                    acceptedAnswer: {
                        '@type': 'Answer',
                        text: 'Landing page mulai Rp 4.500.000. Website e-commerce Rp 12.000.000–28.000.000. Aplikasi web custom Rp 25.000.000–80.000.000+. Harga disesuaikan scope proyek.',
                    },
                },
                {
                    '@type': 'Question',
                    name: 'Teknologi apa yang digunakan?',
                    acceptedAnswer: {
                        '@type': 'Answer',
                        text: 'Next.js 14+, TypeScript, Tailwind CSS, Prisma ORM, PostgreSQL, dan MongoDB. Deploy ke Vercel, Railway, atau VPS pilihan klien.',
                    },
                },
                {
                    '@type': 'Question',
                    name: 'Apakah website dioptimasi untuk SEO?',
                    acceptedAnswer: {
                        '@type': 'Answer',
                        text: 'Ya. Setiap website kami bangun dengan SEO sebagai fondasi: meta tags, structured data, sitemap XML, Core Web Vitals, dan mobile-first. Bukan afterthought.',
                    },
                },
            ],
        },
    ],
};

const stack = [
    { label: 'Frontend', items: 'Next.js 14+, React, TypeScript, Tailwind CSS' },
    { label: 'Backend', items: 'Node.js, REST API, tRPC, Prisma ORM' },
    { label: 'Database', items: 'PostgreSQL, MySQL, MongoDB' },
    { label: 'Deploy', items: 'Vercel, Railway, AWS, VPS lokal' },
    { label: 'Testing', items: 'Jest, Playwright, CI/CD GitHub Actions' },
    { label: 'Performa', items: 'Core Web Vitals, Lighthouse, Image Opt' },
];

export default function WebDeveloperPage() {
    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />

            <main className="wd-page">
                <style>{`
          .wd-page {
            font-family: 'Inter', -apple-system, sans-serif;
            color: #111111;
            background: #F7F6F3;
            min-height: 100vh;
          }
          .wd-hero {
            border-bottom: 0.5px solid #D4D0C8;
            padding: 72px 24px 64px;
            max-width: 860px;
            margin: 0 auto;
          }
          .wd-eyebrow {
            font-size: 11px;
            font-weight: 600;
            letter-spacing: 0.12em;
            text-transform: uppercase;
            color: #6B7C6E;
            margin: 0 0 20px;
          }
          .wd-hero h1 {
            font-family: 'Inter Tight', 'Inter', sans-serif;
            font-size: clamp(28px, 5vw, 44px);
            font-weight: 700;
            line-height: 1.15;
            letter-spacing: -0.02em;
            margin: 0 0 20px;
            color: #111111;
          }
          .wd-hero h1 em {
            font-style: normal;
            color: #6B7C6E;
          }
          .wd-hero-desc {
            font-size: 16px;
            line-height: 1.7;
            color: #4A4A4A;
            max-width: 600px;
            margin: 0 0 32px;
          }
          .wd-cta-row {
            display: flex;
            gap: 12px;
            flex-wrap: wrap;
          }
          .wd-btn-primary {
            display: inline-block;
            background: #111111;
            color: #F7F6F3;
            font-size: 13px;
            font-weight: 600;
            padding: 10px 20px;
            text-decoration: none;
            letter-spacing: 0.02em;
            transition: background 0.15s;
          }
          .wd-btn-primary:hover { background: #2A2A2A; }
          .wd-btn-secondary {
            display: inline-block;
            border: 0.5px solid #111111;
            color: #111111;
            font-size: 13px;
            font-weight: 500;
            padding: 10px 20px;
            text-decoration: none;
          }
          .wd-btn-secondary:hover { background: #EEECEA; }

          .wd-content {
            max-width: 860px;
            margin: 0 auto;
            padding: 0 24px 80px;
          }
          .wd-section {
            border-bottom: 0.5px solid #D4D0C8;
            padding: 48px 0;
          }
          .wd-section:last-of-type { border-bottom: none; }
          .wd-label {
            font-size: 11px;
            font-weight: 600;
            letter-spacing: 0.12em;
            text-transform: uppercase;
            color: #6B7C6E;
            margin: 0 0 20px;
          }
          .wd-section h2 {
            font-family: 'Inter Tight', 'Inter', sans-serif;
            font-size: 22px;
            font-weight: 700;
            letter-spacing: -0.01em;
            margin: 0 0 16px;
          }
          .wd-section p {
            font-size: 15px;
            line-height: 1.75;
            color: #4A4A4A;
            margin: 0 0 12px;
          }

          /* Services grid */
          .wd-services {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
            border: 0.5px solid #D4D0C8;
            margin-top: 8px;
          }
          .wd-service-item {
            padding: 20px;
            border-right: 0.5px solid #D4D0C8;
            border-bottom: 0.5px solid #D4D0C8;
          }
          .wd-service-title {
            font-size: 13px;
            font-weight: 600;
            margin: 0 0 6px;
          }
          .wd-service-desc {
            font-size: 13px;
            line-height: 1.6;
            color: #6A6A6A;
            margin: 0;
          }

          /* Stack table */
          .wd-stack {
            border: 0.5px solid #D4D0C8;
            margin-top: 8px;
          }
          .wd-stack-row {
            display: grid;
            grid-template-columns: 140px 1fr;
            border-bottom: 0.5px solid #D4D0C8;
          }
          .wd-stack-row:last-child { border-bottom: none; }
          .wd-stack-label {
            padding: 14px 18px;
            font-size: 11px;
            font-weight: 600;
            letter-spacing: 0.08em;
            text-transform: uppercase;
            color: #6B7C6E;
            background: #EEECEA;
            border-right: 0.5px solid #D4D0C8;
          }
          .wd-stack-val {
            padding: 14px 18px;
            font-size: 13px;
            color: #4A4A4A;
            line-height: 1.5;
          }

          /* Pricing */
          .wd-pricing {
            border: 0.5px solid #D4D0C8;
            margin-top: 8px;
          }
          .wd-pricing-row {
            display: grid;
            grid-template-columns: 1fr 1fr 1fr;
            border-bottom: 0.5px solid #D4D0C8;
          }
          .wd-pricing-row:last-child { border-bottom: none; }
          .wd-pricing-row.header { background: #EEECEA; }
          .wd-pricing-cell {
            padding: 14px 18px;
            font-size: 13px;
            border-right: 0.5px solid #D4D0C8;
            color: #4A4A4A;
            line-height: 1.5;
          }
          .wd-pricing-cell:last-child { border-right: none; }
          .wd-pricing-row.header .wd-pricing-cell {
            font-size: 11px;
            font-weight: 600;
            letter-spacing: 0.08em;
            text-transform: uppercase;
            color: #6B7C6E;
          }
          .wd-price-main { font-weight: 700; color: #111; display: block; }
          .wd-price-usd { font-size: 11px; color: #9A9A9A; }

          /* FAQ */
          .wd-faq {
            border: 0.5px solid #D4D0C8;
            margin-top: 8px;
          }
          .wd-faq-item {
            padding: 20px;
            border-bottom: 0.5px solid #D4D0C8;
          }
          .wd-faq-item:last-child { border-bottom: none; }
          .wd-faq-q { font-size: 14px; font-weight: 600; margin: 0 0 8px; }
          .wd-faq-a { font-size: 14px; line-height: 1.7; color: #4A4A4A; margin: 0; }

          /* CTA */
          .wd-cta-block {
            background: #111111;
            padding: 48px;
            margin-top: 48px;
          }
          .wd-cta-block h2 {
            font-family: 'Inter Tight', 'Inter', sans-serif;
            font-size: 24px;
            font-weight: 700;
            color: #F7F6F3;
            margin: 0 0 12px;
          }
          .wd-cta-block p { font-size: 14px; color: #A0A09A; margin: 0 0 24px; line-height: 1.6; }
          .wd-cta-block a {
            display: inline-block;
            background: #F7F6F3;
            color: #111111;
            font-size: 13px;
            font-weight: 600;
            padding: 10px 20px;
            text-decoration: none;
          }
          .wd-cta-block a:hover { background: #EEECEA; }

          @media (max-width: 600px) {
            .wd-hero { padding: 48px 20px 40px; }
            .wd-content { padding: 0 20px 60px; }
            .wd-pricing-row { grid-template-columns: 1fr; }
            .wd-pricing-cell { border-right: none; border-bottom: 0.5px solid #D4D0C8; }
            .wd-stack-row { grid-template-columns: 1fr; }
            .wd-stack-label { border-right: none; border-bottom: 0.5px solid #D4D0C8; }
            .wd-cta-block { padding: 32px 24px; }
          }
        `}</style>

                {/* ── Hero ── */}
                <section className="wd-hero">
                    <p className="wd-eyebrow">Web Development · Indonesia</p>
                    <h1>
                        Web Developer<br />
                        <em>yang hasilnya bisa diukur.</em>
                    </h1>
                    <p className="wd-hero-desc">
                        Website dan aplikasi web dengan Next.js, React, dan TypeScript.
                        Dibangun cepat, SEO-ready, dan bisa diakses di semua perangkat —
                        bukan sekadar tampil bagus di preview.
                    </p>
                    <div className="wd-cta-row">
                        <Link href="/contact" className="wd-btn-primary">Konsultasi Gratis</Link>
                        <Link href="/portfolio" className="wd-btn-secondary">Lihat Portfolio</Link>
                    </div>
                </section>

                <div className="wd-content">

                    {/* ── Services ── */}
                    <section className="wd-section">
                        <p className="wd-label">Layanan</p>
                        <h2>Yang kami kerjakan</h2>
                        <div className="wd-services">
                            {[
                                { title: 'Landing Page & Company Profile', desc: 'Halaman promosi, company profile, dan portfolio yang cepat dan mobile-friendly.' },
                                { title: 'Aplikasi Web (SaaS)', desc: 'Dashboard, sistem manajemen, atau produk SaaS dengan arsitektur yang bisa scale.' },
                                { title: 'E-commerce Custom', desc: 'Toko online dengan checkout, manajemen produk, dan integrasi payment gateway lokal.' },
                                { title: 'Internal Tools', desc: 'Sistem internal perusahaan: HRIS, inventory, approval workflow, laporan kustom.' },
                                { title: 'SEO & Web Vitals', desc: 'Audit, perbaikan performa, dan optimasi Core Web Vitals untuk ranking Google.' },
                                { title: 'Integrasi API', desc: 'Koneksi ke sistem eksternal: ERP, CRM, payment, marketplace, atau layanan pihak ketiga.' },
                            ].map((s) => (
                                <div key={s.title} className="wd-service-item">
                                    <p className="wd-service-title">{s.title}</p>
                                    <p className="wd-service-desc">{s.desc}</p>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* ── Tech Stack ── */}
                    <section className="wd-section">
                        <p className="wd-label">Tech Stack</p>
                        <h2>Teknologi yang kami gunakan</h2>
                        <p>Semua pilihan teknologi mengutamakan performa jangka panjang, bukan tren sesaat.</p>
                        <div className="wd-stack">
                            {stack.map((s) => (
                                <div key={s.label} className="wd-stack-row">
                                    <div className="wd-stack-label">{s.label}</div>
                                    <div className="wd-stack-val">{s.items}</div>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* ── Pricing ── */}
                    <section className="wd-section">
                        <p className="wd-label">Harga</p>
                        <h2>Estimasi biaya & timeline</h2>
                        <p>
                            Angka di bawah adalah patokan untuk kebutuhan umum.
                            Harga final ditentukan setelah diskusi scope dan fitur.
                        </p>
                        <div className="wd-pricing">
                            <div className="wd-pricing-row header">
                                <div className="wd-pricing-cell">Jenis Proyek</div>
                                <div className="wd-pricing-cell">Harga</div>
                                <div className="wd-pricing-cell">Waktu</div>
                            </div>
                            {[
                                { type: 'Landing Page / Company Profile', idr: 'Rp 4.500.000–10.000.000', usd: '~$280–$630', time: '2–4 minggu' },
                                { type: 'Website E-commerce', idr: 'Rp 12.000.000–28.000.000', usd: '~$750–$1.750', time: '5–9 minggu' },
                                { type: 'Aplikasi Web / SaaS', idr: 'Rp 25.000.000–80.000.000+', usd: '~$1.550–$5.000+', time: '8–20 minggu' },
                                { type: 'Internal Tools', idr: 'Rp 8.000.000–20.000.000', usd: '~$500–$1.250', time: '4–8 minggu' },
                                { type: 'Maintenance / Retainer', idr: 'Rp 1.500.000–4.000.000/bln', usd: '~$90–$250/mo', time: 'Ongoing' },
                            ].map((r) => (
                                <div key={r.type} className="wd-pricing-row">
                                    <div className="wd-pricing-cell" style={{ fontWeight: 500, color: '#111' }}>{r.type}</div>
                                    <div className="wd-pricing-cell">
                                        <span className="wd-price-main">{r.idr}</span>
                                        <span className="wd-price-usd">{r.usd}</span>
                                    </div>
                                    <div className="wd-pricing-cell">{r.time}</div>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* ── FAQ ── */}
                    <section className="wd-section">
                        <p className="wd-label">FAQ</p>
                        <h2>Pertanyaan umum</h2>
                        <div className="wd-faq">
                            {[
                                {
                                    q: 'Berapa harga jasa pembuatan website?',
                                    a: 'Landing page mulai Rp 4.500.000. Website e-commerce Rp 12.000.000–28.000.000. Aplikasi web custom Rp 25.000.000+. Harga bergantung pada fitur dan kompleksitas.',
                                },
                                {
                                    q: 'Apa perbedaan website biasa dengan yang pakai Next.js?',
                                    a: 'Next.js menghasilkan website yang lebih cepat (Server-Side Rendering + Static Generation), lebih ramah SEO, dan lebih mudah di-scale. Hasilnya terasa di kecepatan loading dan peringkat Google.',
                                },
                                {
                                    q: 'Apakah website dioptimasi untuk SEO?',
                                    a: 'Ya. SEO adalah bagian dari proses, bukan tambahan. Setiap proyek mencakup meta tags, structured data, sitemap, robots.txt, dan optimasi Core Web Vitals dari awal.',
                                },
                                {
                                    q: 'Apakah ada support setelah website selesai?',
                                    a: 'Ada. Kami sediakan maintenance plan mulai Rp 1.500.000/bulan untuk update konten, monitoring, patch keamanan, dan penambahan fitur kecil.',
                                },
                                {
                                    q: 'Bagaimana proses kerjanya?',
                                    a: 'Discovery → desain/wireframe → development sprint 2 mingguan → testing → live. Anda mendapat akses ke progress setiap saat dan demo tiap sprint.',
                                },
                            ].map((f) => (
                                <div key={f.q} className="wd-faq-item">
                                    <p className="wd-faq-q">{f.q}</p>
                                    <p className="wd-faq-a">{f.a}</p>
                                </div>
                            ))}
                        </div>
                    </section>

                </div>

                <div style={{ maxWidth: 860, margin: '0 auto', padding: '0 24px 80px' }}>
                    <div className="wd-cta-block">
                        <h2>Mulai dengan konsultasi gratis.</h2>
                        <p>Ceritakan proyek Anda — kami kirim estimasi harga dan timeline dalam 1 hari kerja.</p>
                        <Link href="/contact">Hubungi Kami →</Link>
                    </div>
                </div>

            </main>
        </>
    );
}
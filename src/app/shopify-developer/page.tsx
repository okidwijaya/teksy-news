import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
    title: 'Shopify Developer Indonesia — Jasa Shopify Custom Theme & Integrasi | KITA Developers',
    description:
        'Jasa Shopify Developer profesional di Indonesia. Custom theme, integrasi aplikasi, migrasi toko, optimasi kecepatan & SEO. Mulai dari Rp 3.500.000. Konsultasi gratis.',
    keywords: [
        'shopify developer indonesia',
        'jasa shopify indonesia',
        'shopify expert indonesia',
        'shopify developer tangerang',
        'custom shopify theme indonesia',
        'shopify developer freelance',
        'jasa buat toko shopify',
        'shopify developer murah',
    ],
    alternates: {
        canonical: 'https://www.kitadevelopers.com/shopify-developer',
    },
    openGraph: {
        title: 'Shopify Developer Indonesia — KITA Developers',
        description:
            'Custom theme Shopify, integrasi aplikasi, dan migrasi toko. Pengalaman 20+ proyek Shopify untuk brand Indonesia, Vietnam, Hong Kong, dan AS.',
        url: 'https://www.kitadevelopers.com/shopify-developer',
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
            name: 'Shopify Developer Indonesia',
            provider: {
                '@type': 'Organization',
                name: 'KITA Developers',
                url: 'https://www.kitadevelopers.com',
                areaServed: 'ID',
            },
            description:
                'Jasa pengembangan Shopify profesional: custom theme, integrasi aplikasi, migrasi, dan optimasi performa.',
            offers: {
                '@type': 'AggregateOffer',
                priceCurrency: 'IDR',
                lowPrice: '3500000',
                highPrice: '25000000',
            },
        },
        {
            '@type': 'FAQPage',
            mainEntity: [
                {
                    '@type': 'Question',
                    name: 'Berapa biaya jasa Shopify developer?',
                    acceptedAnswer: {
                        '@type': 'Answer',
                        text: 'Mulai dari Rp 3.500.000 untuk setup toko dasar, hingga Rp 25.000.000+ untuk custom theme headless dengan integrasi penuh. Harga disesuaikan dengan scope proyek.',
                    },
                },
                {
                    '@type': 'Question',
                    name: 'Berapa lama pengerjaan toko Shopify?',
                    acceptedAnswer: {
                        '@type': 'Answer',
                        text: 'Setup dasar 1–2 minggu. Custom theme 3–5 minggu. Proyek headless + integrasi ERP/POS 6–10 minggu.',
                    },
                },
                {
                    '@type': 'Question',
                    name: 'Apakah bisa migrasi dari WooCommerce atau platform lain ke Shopify?',
                    acceptedAnswer: {
                        '@type': 'Answer',
                        text: 'Ya. Kami menangani migrasi produk, pelanggan, dan riwayat pesanan dari WooCommerce, Tokopedia, atau platform custom ke Shopify dengan downtime minimal.',
                    },
                },
                {
                    '@type': 'Question',
                    name: 'Apakah Shopify cocok untuk bisnis Indonesia?',
                    acceptedAnswer: {
                        '@type': 'Answer',
                        text: 'Ya. Shopify mendukung payment gateway lokal (Midtrans, Xendit), mata uang IDR, dan pengiriman lokal. Cocok untuk brand D2C, fashion, F&B, dan gifting.',
                    },
                },
            ],
        },
    ],
};

export default function ShopifyDeveloperPage() {
    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />

            <main className="shopify-page">
                <style>{`
          .shopify-page {
            font-family: 'Inter', -apple-system, sans-serif;
            color: #111111;
            background: #F7F6F3;
            min-height: 100vh;
          }

          /* ── Hero ── */
          .sp-hero {
            border-bottom: 0.5px solid #D4D0C8;
            padding: 72px 24px 64px;
            max-width: 860px;
            margin: 0 auto;
          }
          .sp-eyebrow {
            font-size: 11px;
            font-weight: 600;
            letter-spacing: 0.12em;
            text-transform: uppercase;
            color: #6B7C6E;
            margin: 0 0 20px;
          }
          .sp-hero h1 {
            font-family: 'Inter Tight', 'Inter', sans-serif;
            font-size: clamp(28px, 5vw, 44px);
            font-weight: 700;
            line-height: 1.15;
            letter-spacing: -0.02em;
            margin: 0 0 20px;
            color: #111111;
          }
          .sp-hero h1 em {
            font-style: normal;
            color: #6B7C6E;
          }
          .sp-hero-desc {
            font-size: 16px;
            line-height: 1.7;
            color: #4A4A4A;
            max-width: 600px;
            margin: 0 0 32px;
          }
          .sp-cta-row {
            display: flex;
            gap: 12px;
            flex-wrap: wrap;
          }
          .sp-btn-primary {
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
          .sp-btn-primary:hover { background: #2A2A2A; }
          .sp-btn-secondary {
            display: inline-block;
            border: 0.5px solid #111111;
            color: #111111;
            font-size: 13px;
            font-weight: 500;
            padding: 10px 20px;
            text-decoration: none;
            transition: background 0.15s;
          }
          .sp-btn-secondary:hover { background: #EEECEA; }

          /* ── Content wrapper ── */
          .sp-content {
            max-width: 860px;
            margin: 0 auto;
            padding: 0 24px 80px;
          }

          /* ── Section ── */
          .sp-section {
            border-bottom: 0.5px solid #D4D0C8;
            padding: 48px 0;
          }
          .sp-section:last-of-type {
            border-bottom: none;
          }
          .sp-section-label {
            font-size: 11px;
            font-weight: 600;
            letter-spacing: 0.12em;
            text-transform: uppercase;
            color: #6B7C6E;
            margin: 0 0 20px;
          }
          .sp-section h2 {
            font-family: 'Inter Tight', 'Inter', sans-serif;
            font-size: 22px;
            font-weight: 700;
            letter-spacing: -0.01em;
            margin: 0 0 16px;
            color: #111111;
          }
          .sp-section p {
            font-size: 15px;
            line-height: 1.75;
            color: #4A4A4A;
            margin: 0 0 12px;
          }

          /* ── Service grid ── */
          .sp-grid {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
            gap: 0;
            border: 0.5px solid #D4D0C8;
            margin-top: 8px;
          }
          .sp-grid-item {
            padding: 20px;
            border-right: 0.5px solid #D4D0C8;
            border-bottom: 0.5px solid #D4D0C8;
          }
          .sp-grid-item:nth-child(2n) { border-right: none; }
          @media (min-width: 640px) {
            .sp-grid-item:nth-child(2n) { border-right: 0.5px solid #D4D0C8; }
            .sp-grid-item:nth-child(3n) { border-right: none; }
          }
          .sp-grid-item-title {
            font-size: 13px;
            font-weight: 600;
            color: #111111;
            margin: 0 0 6px;
          }
          .sp-grid-item-desc {
            font-size: 13px;
            line-height: 1.6;
            color: #6A6A6A;
            margin: 0;
          }

          /* ── Pricing table ── */
          .sp-pricing {
            display: grid;
            gap: 0;
            border: 0.5px solid #D4D0C8;
            margin-top: 8px;
          }
          .sp-pricing-row {
            display: grid;
            grid-template-columns: 1fr 1fr 1fr;
            border-bottom: 0.5px solid #D4D0C8;
          }
          .sp-pricing-row:last-child { border-bottom: none; }
          .sp-pricing-row.header {
            background: #EEECEA;
          }
          .sp-pricing-cell {
            padding: 14px 18px;
            font-size: 13px;
            border-right: 0.5px solid #D4D0C8;
            color: #4A4A4A;
            line-height: 1.5;
          }
          .sp-pricing-cell:last-child { border-right: none; }
          .sp-pricing-row.header .sp-pricing-cell {
            font-size: 11px;
            font-weight: 600;
            letter-spacing: 0.08em;
            text-transform: uppercase;
            color: #6B7C6E;
          }
          .sp-price-amount {
            font-weight: 700;
            color: #111111;
            display: block;
          }
          .sp-price-usd {
            font-size: 11px;
            color: #9A9A9A;
          }

          /* ── FAQ ── */
          .sp-faq {
            display: grid;
            gap: 0;
            border: 0.5px solid #D4D0C8;
            margin-top: 8px;
          }
          .sp-faq-item {
            padding: 20px;
            border-bottom: 0.5px solid #D4D0C8;
          }
          .sp-faq-item:last-child { border-bottom: none; }
          .sp-faq-q {
            font-size: 14px;
            font-weight: 600;
            color: #111111;
            margin: 0 0 8px;
          }
          .sp-faq-a {
            font-size: 14px;
            line-height: 1.7;
            color: #4A4A4A;
            margin: 0;
          }

          /* ── CTA Block ── */
          .sp-cta-block {
            background: #111111;
            padding: 48px;
            margin-top: 48px;
          }
          .sp-cta-block h2 {
            font-family: 'Inter Tight', 'Inter', sans-serif;
            font-size: 24px;
            font-weight: 700;
            color: #F7F6F3;
            margin: 0 0 12px;
          }
          .sp-cta-block p {
            font-size: 14px;
            color: #A0A09A;
            margin: 0 0 24px;
            line-height: 1.6;
          }
          .sp-cta-block a {
            display: inline-block;
            background: #F7F6F3;
            color: #111111;
            font-size: 13px;
            font-weight: 600;
            padding: 10px 20px;
            text-decoration: none;
          }
          .sp-cta-block a:hover { background: #EEECEA; }

          @media (max-width: 600px) {
            .sp-hero { padding: 48px 20px 40px; }
            .sp-content { padding: 0 20px 60px; }
            .sp-pricing-row { grid-template-columns: 1fr; }
            .sp-pricing-cell { border-right: none; border-bottom: 0.5px solid #D4D0C8; }
            .sp-pricing-row:last-child .sp-pricing-cell:last-child { border-bottom: none; }
            .sp-cta-block { padding: 32px 24px; }
          }
        `}</style>

                {/* ── Hero ── */}
                <section className="sp-hero">
                    <p className="sp-eyebrow">Shopify Development · Indonesia</p>
                    <h1>
                        Shopify Developer<br />
                        <em>untuk toko yang benar-benar berjalan.</em>
                    </h1>
                    <p className="sp-hero-desc">
                        Custom theme, integrasi aplikasi, migrasi platform, dan optimasi performa.
                        20+ proyek Shopify selesai — brand Indonesia, Vietnam, Hong Kong, dan AS.
                    </p>
                    <div className="sp-cta-row">
                        <Link href="/contact" className="sp-btn-primary">Konsultasi Gratis</Link>
                        <Link href="/portfolio" className="sp-btn-secondary">Lihat Portfolio</Link>
                    </div>
                </section>

                <div className="sp-content">

                    {/* ── Services ── */}
                    <section className="sp-section">
                        <p className="sp-section-label">Layanan</p>
                        <h2>Yang kami kerjakan</h2>
                        <div className="sp-grid">
                            {[
                                { title: 'Custom Theme', desc: 'Desain dan development tema Shopify dari nol, sesuai brand guidelines.' },
                                { title: 'Headless Shopify', desc: 'Storefront Next.js/Hydrogen dengan Shopify sebagai backend commerce.' },
                                { title: 'App Integrations', desc: 'Payment gateway lokal (Midtrans, Xendit), shipping, POS, loyalty program.' },
                                { title: 'Migrasi Platform', desc: 'Dari WooCommerce, Tokopedia store, atau platform custom ke Shopify.' },
                                { title: 'Optimasi Performa', desc: 'Lighthouse 90+, Core Web Vitals, kompresi aset, lazy load.' },
                                { title: 'SEO & Aksesibilitas', desc: 'Structured data, sitemap, meta tags, WCAG 2.1 compliance.' },
                            ].map((s) => (
                                <div key={s.title} className="sp-grid-item">
                                    <p className="sp-grid-item-title">{s.title}</p>
                                    <p className="sp-grid-item-desc">{s.desc}</p>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* ── Pricing ── */}
                    <section className="sp-section">
                        <p className="sp-section-label">Harga</p>
                        <h2>Estimasi biaya & timeline</h2>
                        <p>
                            Harga final ditentukan setelah brief. Angka di bawah adalah patokan awal
                            untuk kebutuhan umum di pasar Indonesia.
                        </p>
                        <div className="sp-pricing">
                            <div className="sp-pricing-row header">
                                <div className="sp-pricing-cell">Paket</div>
                                <div className="sp-pricing-cell">Harga</div>
                                <div className="sp-pricing-cell">Estimasi Waktu</div>
                            </div>
                            {[
                                { pkg: 'Setup Toko Dasar', idr: 'Rp 3.500.000–6.000.000', usd: '~$220–$380', time: '1–2 minggu' },
                                { pkg: 'Custom Theme', idr: 'Rp 7.000.000–15.000.000', usd: '~$440–$940', time: '3–5 minggu' },
                                { pkg: 'Integrasi & Fitur Khusus', idr: 'Rp 5.000.000–12.000.000', usd: '~$310–$750', time: '2–4 minggu' },
                                { pkg: 'Headless + ERP/POS', idr: 'Rp 18.000.000–35.000.000', usd: '~$1.100–$2.200', time: '6–10 minggu' },
                                { pkg: 'Migrasi Platform', idr: 'Rp 4.000.000–9.000.000', usd: '~$250–$560', time: '2–3 minggu' },
                            ].map((r) => (
                                <div key={r.pkg} className="sp-pricing-row">
                                    <div className="sp-pricing-cell" style={{ fontWeight: 500, color: '#111' }}>{r.pkg}</div>
                                    <div className="sp-pricing-cell">
                                        <span className="sp-price-amount">{r.idr}</span>
                                        <span className="sp-price-usd">{r.usd}</span>
                                    </div>
                                    <div className="sp-pricing-cell">{r.time}</div>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* ── Why Shopify ── */}
                    <section className="sp-section">
                        <p className="sp-section-label">Platform</p>
                        <h2>Kenapa Shopify?</h2>
                        <p>
                            Shopify cocok untuk brand Indonesia yang mau jual secara D2C: aman, bisa diupgrade,
                            dan terhubung langsung ke payment gateway lokal, marketplace, dan sistem POS.
                            Tidak perlu server sendiri, tidak perlu patch keamanan manual.
                        </p>
                        <p>
                            Kami bantu Anda mulai dari domain dan template sampai custom storefront
                            yang performa dan konversinya terukur.
                        </p>
                    </section>

                    {/* ── FAQ ── */}
                    <section className="sp-section">
                        <p className="sp-section-label">FAQ</p>
                        <h2>Pertanyaan umum</h2>
                        <div className="sp-faq">
                            {[
                                {
                                    q: 'Berapa biaya jasa Shopify developer?',
                                    a: 'Mulai Rp 3.500.000 untuk setup dasar. Custom theme dan integrasi mulai Rp 7.000.000. Proyek headless mulai Rp 18.000.000. Semua tergantung scope dan fitur yang dibutuhkan.',
                                },
                                {
                                    q: 'Berapa lama pengerjaan toko Shopify?',
                                    a: 'Setup dasar 1–2 minggu. Custom theme 3–5 minggu. Proyek headless dengan integrasi ERP/POS 6–10 minggu. Timeline dimulai setelah brief dan DP diterima.',
                                },
                                {
                                    q: 'Apakah bisa migrasi dari WooCommerce ke Shopify?',
                                    a: 'Ya. Kami tangani migrasi produk, pelanggan, dan riwayat pesanan. Downtime diusahakan minimal — toko lama tetap berjalan sampai Shopify siap live.',
                                },
                                {
                                    q: 'Apakah Shopify mendukung payment gateway Indonesia?',
                                    a: 'Ya. Shopify mendukung Midtrans, Xendit, Doku, dan transfer bank lokal. Kami bantu konfigurasi dan testing sebelum launch.',
                                },
                                {
                                    q: 'Apakah bisa integrasi POS dengan Shopify?',
                                    a: 'Bisa. Kami hubungkan Shopify ke sistem POS yang sudah ada, atau bangun POS ringan custom jika dibutuhkan, dengan sinkronisasi stok real-time.',
                                },
                            ].map((f) => (
                                <div key={f.q} className="sp-faq-item">
                                    <p className="sp-faq-q">{f.q}</p>
                                    <p className="sp-faq-a">{f.a}</p>
                                </div>
                            ))}
                        </div>
                    </section>

                </div>

                {/* ── CTA ── */}
                <div style={{ maxWidth: 860, margin: '0 auto', padding: '0 24px 80px' }}>
                    <div className="sp-cta-block">
                        <h2>Mulai dengan konsultasi gratis.</h2>
                        <p>Ceritakan kebutuhan toko Anda — kami kirim estimasi scope dan harga dalam 1 hari kerja.</p>
                        <Link href="/contact">Hubungi Kami →</Link>
                    </div>
                </div>

            </main>
        </>
    );
}
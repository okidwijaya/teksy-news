import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
    title: 'POS Gratis Indonesia — Sistem Kasir Free Terbaik untuk UMKM | KITA Developers',
    description:
        'Panduan sistem POS gratis terbaik untuk UMKM Indonesia. Perbandingan Square, Odoo POS, dan POS custom. Setup, integrasi Shopify, dan konsultasi gratis.',
    keywords: [
        'pos gratis',
        'sistem kasir gratis',
        'aplikasi kasir gratis',
        'pos free indonesia',
        'sistem pos umkm',
        'kasir online gratis',
        'aplikasi kasir umkm',
        'pos open source indonesia',
        'sistem point of sale gratis',
    ],
    alternates: {
        canonical: 'https://www.kitadevelopers.com/pos-free',
    },
    openGraph: {
        title: 'POS Gratis Indonesia — KITA Developers',
        description:
            'Panduan lengkap sistem kasir gratis untuk UMKM. Perbandingan platform, setup guide, dan integrasi dengan toko online.',
        url: 'https://www.kitadevelopers.com/pos-free',
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
            name: 'Implementasi POS Gratis untuk UMKM',
            provider: {
                '@type': 'Organization',
                name: 'KITA Developers',
                url: 'https://www.kitadevelopers.com',
                areaServed: 'ID',
            },
            description:
                'Setup dan integrasi sistem POS gratis (Square, Odoo, custom) untuk UMKM Indonesia.',
        },
        {
            '@type': 'FAQPage',
            mainEntity: [
                {
                    '@type': 'Question',
                    name: 'Apakah POS gratis bisa diandalkan untuk bisnis?',
                    acceptedAnswer: {
                        '@type': 'Answer',
                        text: 'Ya. Square, Odoo POS, dan uniCenta digunakan jutaan bisnis di seluruh dunia. Kuncinya adalah konfigurasi yang benar dan strategi backup yang solid.',
                    },
                },
                {
                    '@type': 'Question',
                    name: 'Apakah POS gratis bisa diintegrasikan dengan Shopify?',
                    acceptedAnswer: {
                        '@type': 'Answer',
                        text: 'Ya. Kami integrasikan Square atau Odoo POS dengan toko Shopify Anda sehingga stok sinkron otomatis antara toko fisik dan online.',
                    },
                },
                {
                    '@type': 'Question',
                    name: 'Berapa biaya setup POS gratis?',
                    acceptedAnswer: {
                        '@type': 'Answer',
                        text: 'Square bisa disetup sendiri atau dengan bantuan kami mulai Rp 0–500.000. Odoo POS Rp 2.000.000–6.000.000. POS custom Rp 8.000.000–25.000.000.',
                    },
                },
            ],
        },
    ],
};

const posOptions = [
    {
        name: 'Square POS',
        cost: 'Gratis (2.6% per transaksi)',
        bestFor: 'Retail, F&B, vendor, simplicity',
        integration: 'Shopify, inventory, akuntansi',
        note: 'Paling mudah untuk mulai cepat',
    },
    {
        name: 'Odoo POS',
        cost: 'Gratis (open-source)',
        bestFor: 'Retail + ERP, workflow kustom',
        integration: 'Full ERP, akuntansi, e-commerce',
        note: 'Terbaik jika butuh satu ekosistem',
    },
    {
        name: 'uniCenta',
        cost: 'Gratis (open-source)',
        bestFor: 'Restoran, toko kecil, offline',
        integration: 'API kustom, terbatas',
        note: 'Kuat untuk offline / low-internet',
    },
    {
        name: 'KitaPOS (Custom)',
        cost: 'Rp 8.000.000–25.000.000',
        bestFor: 'Workflow unik, multi-lokasi',
        integration: 'Shopify, ERP, payment lokal',
        note: 'Cocok jika POS off-the-shelf tidak cukup',
    },
];

export default function PosFreePage() {
    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />

            <main className="pos-page">
                <style>{`
          .pos-page {
            font-family: 'Inter', -apple-system, sans-serif;
            color: #111111;
            background: #F7F6F3;
            min-height: 100vh;
          }
          .pos-hero {
            border-bottom: 0.5px solid #D4D0C8;
            padding: 72px 24px 64px;
            max-width: 860px;
            margin: 0 auto;
          }
          .pos-eyebrow {
            font-size: 11px;
            font-weight: 600;
            letter-spacing: 0.12em;
            text-transform: uppercase;
            color: #6B7C6E;
            margin: 0 0 20px;
          }
          .pos-hero h1 {
            font-family: 'Inter Tight', 'Inter', sans-serif;
            font-size: clamp(28px, 5vw, 44px);
            font-weight: 700;
            line-height: 1.15;
            letter-spacing: -0.02em;
            margin: 0 0 20px;
          }
          .pos-hero h1 em { font-style: normal; color: #6B7C6E; }
          .pos-hero-desc {
            font-size: 16px;
            line-height: 1.7;
            color: #4A4A4A;
            max-width: 600px;
            margin: 0 0 32px;
          }
          .pos-cta-row { display: flex; gap: 12px; flex-wrap: wrap; }
          .pos-btn-primary {
            display: inline-block;
            background: #111111;
            color: #F7F6F3;
            font-size: 13px;
            font-weight: 600;
            padding: 10px 20px;
            text-decoration: none;
            transition: background 0.15s;
          }
          .pos-btn-primary:hover { background: #2A2A2A; }
          .pos-btn-secondary {
            display: inline-block;
            border: 0.5px solid #111111;
            color: #111111;
            font-size: 13px;
            font-weight: 500;
            padding: 10px 20px;
            text-decoration: none;
          }
          .pos-btn-secondary:hover { background: #EEECEA; }

          .pos-content {
            max-width: 860px;
            margin: 0 auto;
            padding: 0 24px 80px;
          }
          .pos-section {
            border-bottom: 0.5px solid #D4D0C8;
            padding: 48px 0;
          }
          .pos-section:last-of-type { border-bottom: none; }
          .pos-label {
            font-size: 11px;
            font-weight: 600;
            letter-spacing: 0.12em;
            text-transform: uppercase;
            color: #6B7C6E;
            margin: 0 0 20px;
          }
          .pos-section h2 {
            font-family: 'Inter Tight', 'Inter', sans-serif;
            font-size: 22px;
            font-weight: 700;
            letter-spacing: -0.01em;
            margin: 0 0 16px;
          }
          .pos-section p {
            font-size: 15px;
            line-height: 1.75;
            color: #4A4A4A;
            margin: 0 0 12px;
          }

          /* Comparison table */
          .pos-table { border: 0.5px solid #D4D0C8; margin-top: 8px; overflow-x: auto; }
          .pos-table-inner { min-width: 600px; }
          .pos-tr { display: grid; grid-template-columns: 140px 1fr 1fr 1fr; border-bottom: 0.5px solid #D4D0C8; }
          .pos-tr:last-child { border-bottom: none; }
          .pos-tr.header { background: #EEECEA; }
          .pos-td {
            padding: 14px 16px;
            font-size: 13px;
            border-right: 0.5px solid #D4D0C8;
            color: #4A4A4A;
            line-height: 1.5;
          }
          .pos-td:last-child { border-right: none; }
          .pos-tr.header .pos-td {
            font-size: 11px;
            font-weight: 600;
            letter-spacing: 0.08em;
            text-transform: uppercase;
            color: #6B7C6E;
          }
          .pos-td-name { font-weight: 600; color: #111; }
          .pos-td-note {
            display: block;
            font-size: 11px;
            color: #9A9A9A;
            margin-top: 4px;
          }

          /* Timeline */
          .pos-timeline { border: 0.5px solid #D4D0C8; margin-top: 8px; }
          .pos-tl-row {
            display: grid;
            grid-template-columns: 180px 1fr;
            border-bottom: 0.5px solid #D4D0C8;
          }
          .pos-tl-row:last-child { border-bottom: none; }
          .pos-tl-label {
            padding: 14px 18px;
            font-size: 13px;
            font-weight: 600;
            color: #111;
            background: #EEECEA;
            border-right: 0.5px solid #D4D0C8;
          }
          .pos-tl-val { padding: 14px 18px; font-size: 13px; color: #4A4A4A; }

          /* FAQ */
          .pos-faq { border: 0.5px solid #D4D0C8; margin-top: 8px; }
          .pos-faq-item { padding: 20px; border-bottom: 0.5px solid #D4D0C8; }
          .pos-faq-item:last-child { border-bottom: none; }
          .pos-faq-q { font-size: 14px; font-weight: 600; margin: 0 0 8px; }
          .pos-faq-a { font-size: 14px; line-height: 1.7; color: #4A4A4A; margin: 0; }

          /* CTA */
          .pos-cta-block {
            background: #111111;
            padding: 48px;
            margin-top: 48px;
          }
          .pos-cta-block h2 {
            font-family: 'Inter Tight', 'Inter', sans-serif;
            font-size: 24px;
            font-weight: 700;
            color: #F7F6F3;
            margin: 0 0 12px;
          }
          .pos-cta-block p { font-size: 14px; color: #A0A09A; margin: 0 0 24px; line-height: 1.6; }
          .pos-cta-block a {
            display: inline-block;
            background: #F7F6F3;
            color: #111111;
            font-size: 13px;
            font-weight: 600;
            padding: 10px 20px;
            text-decoration: none;
          }
          .pos-cta-block a:hover { background: #EEECEA; }

          @media (max-width: 600px) {
            .pos-hero { padding: 48px 20px 40px; }
            .pos-content { padding: 0 20px 60px; }
            .pos-tl-row { grid-template-columns: 1fr; }
            .pos-tl-label { border-right: none; border-bottom: 0.5px solid #D4D0C8; }
            .pos-cta-block { padding: 32px 24px; }
          }
        `}</style>

                {/* ── Hero ── */}
                <section className="pos-hero">
                    <p className="pos-eyebrow">POS Gratis · UMKM Indonesia</p>
                    <h1>
                        Sistem kasir gratis<br />
                        <em>yang benar-benar bisa dipakai.</em>
                    </h1>
                    <p className="pos-hero-desc">
                        Perbandingan platform POS gratis, panduan setup, dan integrasi dengan toko online.
                        Tanpa biaya lisensi, tanpa vendor lock-in — Anda pilih yang paling cocok untuk bisnis Anda.
                    </p>
                    <div className="pos-cta-row">
                        <Link href="/contact" className="pos-btn-primary">Konsultasi Gratis</Link>
                        <Link href="/erp-free" className="pos-btn-secondary">Lihat ERP Gratis →</Link>
                    </div>
                </section>

                <div className="pos-content">

                    {/* ── Comparison ── */}
                    <section className="pos-section">
                        <p className="pos-label">Perbandingan</p>
                        <h2>Pilihan POS gratis & biayanya</h2>
                        <p>
                            Semua platform di bawah bisa dijalankan tanpa biaya lisensi bulanan.
                            Biaya yang mungkin ada: hosting, transaksi, atau biaya setup awal.
                        </p>
                        <div className="pos-table">
                            <div className="pos-table-inner">
                                <div className="pos-tr header">
                                    <div className="pos-td">Platform</div>
                                    <div className="pos-td">Biaya</div>
                                    <div className="pos-td">Cocok untuk</div>
                                    <div className="pos-td">Integrasi</div>
                                </div>
                                {posOptions.map((p) => (
                                    <div key={p.name} className="pos-tr">
                                        <div className="pos-td">
                                            <span className="pos-td-name">{p.name}</span>
                                            <span className="pos-td-note">{p.note}</span>
                                        </div>
                                        <div className="pos-td">{p.cost}</div>
                                        <div className="pos-td">{p.bestFor}</div>
                                        <div className="pos-td">{p.integration}</div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </section>

                    {/* ── Why ── */}
                    <section className="pos-section">
                        <p className="pos-label">Konteks</p>
                        <h2>Kenapa pilih POS gratis?</h2>
                        <p>
                            Lisensi POS tradisional di Indonesia bisa mencapai Rp 1.500.000–5.000.000/tahun,
                            belum termasuk biaya hardware dan setup. Solusi gratis memberi Anda waktu untuk
                            validasi model bisnis sebelum investasi besar.
                        </p>
                        <p>
                            Yang membedakan implementasi yang berhasil dan yang gagal bukan platformnya —
                            tapi konfigurasi, training tim, dan strategi backup yang solid. Di situlah kami membantu.
                        </p>
                    </section>

                    {/* ── Timeline ── */}
                    <section className="pos-section">
                        <p className="pos-label">Timeline</p>
                        <h2>Estimasi waktu setup</h2>
                        <div className="pos-timeline">
                            {[
                                { label: 'Square POS', val: '1–3 hari. Cloud-based, langsung pakai. Cocok untuk yang butuh cepat live.' },
                                { label: 'Odoo POS', val: '2–4 minggu. Termasuk setup server, konfigurasi modul, dan training tim.' },
                                { label: 'POS Custom', val: '6–12 minggu. Desain, development, integrasi Shopify/ERP, testing.' },
                            ].map((t) => (
                                <div key={t.label} className="pos-tl-row">
                                    <div className="pos-tl-label">{t.label}</div>
                                    <div className="pos-tl-val">{t.val}</div>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* ── FAQ ── */}
                    <section className="pos-section">
                        <p className="pos-label">FAQ</p>
                        <h2>Pertanyaan umum</h2>
                        <div className="pos-faq">
                            {[
                                {
                                    q: 'Apakah POS gratis bisa diandalkan untuk bisnis?',
                                    a: 'Ya. Square dan Odoo POS dipakai jutaan bisnis di seluruh dunia. Kuncinya adalah konfigurasi yang benar dan backup rutin. Kami bantu dari awal agar sistemnya solid.',
                                },
                                {
                                    q: 'Apakah POS gratis bisa diintegrasikan dengan Shopify?',
                                    a: 'Bisa. Kami integrasikan Square atau Odoo POS dengan toko Shopify Anda sehingga stok sinkron otomatis antara toko fisik dan online — tidak ada stok yang dobel atau ketinggalan update.',
                                },
                                {
                                    q: 'Berapa biaya setup POS?',
                                    a: 'Square bisa Rp 0 (setup sendiri) atau dengan bantuan kami mulai Rp 500.000. Odoo POS Rp 2.000.000–6.000.000 termasuk training. POS custom Rp 8.000.000–25.000.000.',
                                },
                                {
                                    q: 'Bagaimana kalau bisnis saya berkembang dan butuh fitur lebih?',
                                    a: 'Odoo POS bisa ditambah modul ERP, akuntansi, dan CRM seiring bisnis berkembang. Untuk kebutuhan unik, kami juga bantu migrasi ke POS custom dengan data yang terjaga.',
                                },
                                {
                                    q: 'Apakah bisa pakai POS tanpa koneksi internet?',
                                    a: 'Ya. uniCenta dan Odoo POS mendukung mode offline. Transaksi tercatat lokal dan sinkron ke server saat koneksi kembali. Cocok untuk area dengan internet tidak stabil.',
                                },
                            ].map((f) => (
                                <div key={f.q} className="pos-faq-item">
                                    <p className="pos-faq-q">{f.q}</p>
                                    <p className="pos-faq-a">{f.a}</p>
                                </div>
                            ))}
                        </div>
                    </section>

                </div>

                <div style={{ maxWidth: 860, margin: '0 auto', padding: '0 24px 80px' }}>
                    <div className="pos-cta-block">
                        <h2>Tidak yakin mana yang cocok?</h2>
                        <p>Ceritakan kebutuhan bisnis Anda — kami rekomendasikan platform yang paling sesuai, gratis.</p>
                        <Link href="/contact">Konsultasi Sekarang →</Link>
                    </div>
                </div>

            </main>
        </>
    );
}
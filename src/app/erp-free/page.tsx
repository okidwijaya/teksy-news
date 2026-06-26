import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
    title: 'ERP Gratis Indonesia — Open Source ERP untuk UMKM & Bisnis Kecil | KITA Developers',
    description:
        'Panduan ERP gratis terbaik untuk UMKM Indonesia. Odoo, ERPNext, implementasi murah. Kelola inventory, akuntansi, dan POS tanpa biaya lisensi. Konsultasi gratis.',
    keywords: [
        'erp gratis indonesia',
        'erp gratis umkm',
        'software erp gratis',
        'odoo indonesia',
        'erpnext indonesia',
        'erp open source indonesia',
        'implementasi erp murah',
        'erp untuk bisnis kecil',
        'sistem erp gratis',
    ],
    alternates: {
        canonical: 'https://www.kitadevelopers.com/erp-free',
    },
    openGraph: {
        title: 'ERP Gratis Indonesia — KITA Developers',
        description:
            'Panduan implementasi ERP open source untuk UMKM Indonesia. Odoo, ERPNext, dan ERP custom tanpa biaya lisensi.',
        url: 'https://www.kitadevelopers.com/erp-free',
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
            name: 'Implementasi ERP Gratis Indonesia',
            provider: {
                '@type': 'Organization',
                name: 'KITA Developers',
                url: 'https://www.kitadevelopers.com',
                areaServed: 'ID',
            },
            description:
                'Setup dan implementasi ERP open source (Odoo, ERPNext) untuk UMKM dan bisnis kecil Indonesia.',
            offers: {
                '@type': 'AggregateOffer',
                priceCurrency: 'IDR',
                lowPrice: '5000000',
                highPrice: '40000000',
            },
        },
        {
            '@type': 'FAQPage',
            mainEntity: [
                {
                    '@type': 'Question',
                    name: 'Apakah ERP open source bisa dipakai UMKM Indonesia?',
                    acceptedAnswer: {
                        '@type': 'Answer',
                        text: 'Ya. Odoo dan ERPNext sudah dipakai ribuan UMKM di Asia Tenggara. Keduanya mendukung multi-mata uang (IDR), multi-bahasa, dan bisa dikustomisasi sesuai kebutuhan bisnis lokal.',
                    },
                },
                {
                    '@type': 'Question',
                    name: 'Berapa biaya implementasi ERP open source?',
                    acceptedAnswer: {
                        '@type': 'Answer',
                        text: 'ERP-nya gratis. Biaya setup dan implementasi mulai Rp 5.000.000–25.000.000 tergantung modul dan kustomisasi. Hosting Rp 300.000–2.000.000/bulan.',
                    },
                },
                {
                    '@type': 'Question',
                    name: 'Berapa lama implementasi ERP?',
                    acceptedAnswer: {
                        '@type': 'Answer',
                        text: 'Rata-rata 4–12 minggu. Setup dasar 4–6 minggu, termasuk konfigurasi, migrasi data, dan training. Implementasi dengan kustomisasi bisa 8–12 minggu.',
                    },
                },
                {
                    '@type': 'Question',
                    name: 'Apakah ERP bisa diintegrasikan dengan Shopify?',
                    acceptedAnswer: {
                        '@type': 'Answer',
                        text: 'Ya. Kami hubungkan Odoo atau ERPNext dengan Shopify untuk sinkronisasi produk, stok, dan pesanan secara otomatis antara toko online dan sistem internal.',
                    },
                },
            ],
        },
    ],
};

const platforms = [
    {
        name: 'Odoo',
        desc: 'ERP paling lengkap: CRM, inventory, akuntansi, POS, e-commerce. Community edition gratis. Cocok untuk retail, manufaktur, dan jasa.',
        tag: 'Paling populer',
    },
    {
        name: 'ERPNext',
        desc: 'Ringan, fleksibel, dibangun di atas Frappe framework. Aktif dikembangkan komunitas. Baik untuk manufaktur, retail, dan startup.',
        tag: 'Terbaik untuk startup',
    },
    {
        name: 'Dolibarr',
        desc: 'Sederhana, multi-bahasa, ideal untuk UMKM dengan kebutuhan dasar: invoicing, inventory, dan CRM tanpa kompleksitas berlebihan.',
        tag: 'Paling mudah',
    },
    {
        name: 'ERP Custom',
        desc: 'Dibangun dari nol sesuai workflow unik bisnis Anda. Cocok jika ERP off-the-shelf tidak bisa memenuhi kebutuhan proses yang spesifik.',
        tag: 'Paling fleksibel',
    },
];

const features = [
    { title: 'Manajemen Inventory', desc: 'Stok real-time, multi-gudang, barcode scanner, notifikasi reorder point.' },
    { title: 'Akuntansi & Invoicing', desc: 'Invoice otomatis, pelacakan pengeluaran, laporan pajak, multi-mata uang IDR.' },
    { title: 'Integrasi POS', desc: 'Sinkronisasi penjualan kasir dengan stok online (Shopify, WooCommerce, custom).' },
    { title: 'Laporan & Dashboard', desc: 'Laporan cash flow, margin, SKU terlaris, dan analitik bisnis real-time.' },
    { title: 'Multi-User & Akses', desc: 'Role-based permissions, audit trail, dan keamanan data per divisi/departemen.' },
    { title: 'CRM & Sales', desc: 'Pipeline penjualan, manajemen prospek, dan otomasi follow-up pelanggan.' },
];

export default function ErpFreePage() {
    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />

            <main className="erp-page">
                <style>{`
          .erp-page {
            font-family: 'Inter', -apple-system, sans-serif;
            color: #111111;
            background: #F7F6F3;
            min-height: 100vh;
          }
          .erp-hero {
            border-bottom: 0.5px solid #D4D0C8;
            padding: 72px 24px 64px;
            max-width: 860px;
            margin: 0 auto;
          }
          .erp-eyebrow {
            font-size: 11px;
            font-weight: 600;
            letter-spacing: 0.12em;
            text-transform: uppercase;
            color: #6B7C6E;
            margin: 0 0 20px;
          }
          .erp-hero h1 {
            font-family: 'Inter Tight', 'Inter', sans-serif;
            font-size: clamp(28px, 5vw, 44px);
            font-weight: 700;
            line-height: 1.15;
            letter-spacing: -0.02em;
            margin: 0 0 20px;
          }
          .erp-hero h1 em { font-style: normal; color: #6B7C6E; }
          .erp-hero-desc {
            font-size: 16px;
            line-height: 1.7;
            color: #4A4A4A;
            max-width: 600px;
            margin: 0 0 32px;
          }
          .erp-hero-stat {
            display: flex;
            gap: 32px;
            margin-bottom: 32px;
            flex-wrap: wrap;
          }
          .erp-stat {
            display: flex;
            flex-direction: column;
            gap: 2px;
          }
          .erp-stat-num {
            font-family: 'Inter Tight', 'Inter', sans-serif;
            font-size: 28px;
            font-weight: 700;
            color: #111;
            letter-spacing: -0.02em;
          }
          .erp-stat-label { font-size: 12px; color: #6B7C6E; }
          .erp-cta-row { display: flex; gap: 12px; flex-wrap: wrap; }
          .erp-btn-primary {
            display: inline-block;
            background: #111111;
            color: #F7F6F3;
            font-size: 13px;
            font-weight: 600;
            padding: 10px 20px;
            text-decoration: none;
            transition: background 0.15s;
          }
          .erp-btn-primary:hover { background: #2A2A2A; }
          .erp-btn-secondary {
            display: inline-block;
            border: 0.5px solid #111111;
            color: #111111;
            font-size: 13px;
            font-weight: 500;
            padding: 10px 20px;
            text-decoration: none;
          }
          .erp-btn-secondary:hover { background: #EEECEA; }

          .erp-content {
            max-width: 860px;
            margin: 0 auto;
            padding: 0 24px 80px;
          }
          .erp-section {
            border-bottom: 0.5px solid #D4D0C8;
            padding: 48px 0;
          }
          .erp-section:last-of-type { border-bottom: none; }
          .erp-label {
            font-size: 11px;
            font-weight: 600;
            letter-spacing: 0.12em;
            text-transform: uppercase;
            color: #6B7C6E;
            margin: 0 0 20px;
          }
          .erp-section h2 {
            font-family: 'Inter Tight', 'Inter', sans-serif;
            font-size: 22px;
            font-weight: 700;
            letter-spacing: -0.01em;
            margin: 0 0 16px;
          }
          .erp-section p {
            font-size: 15px;
            line-height: 1.75;
            color: #4A4A4A;
            margin: 0 0 12px;
          }

          /* Platforms grid */
          .erp-platforms {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
            border: 0.5px solid #D4D0C8;
            margin-top: 8px;
          }
          .erp-platform-item {
            padding: 20px;
            border-right: 0.5px solid #D4D0C8;
            border-bottom: 0.5px solid #D4D0C8;
          }
          .erp-platform-header {
            display: flex;
            align-items: center;
            gap: 8px;
            margin-bottom: 8px;
          }
          .erp-platform-name { font-size: 14px; font-weight: 600; color: #111; }
          .erp-platform-tag {
            font-size: 10px;
            font-weight: 600;
            letter-spacing: 0.06em;
            text-transform: uppercase;
            color: #6B7C6E;
            background: #E4EBE5;
            padding: 2px 6px;
          }
          .erp-platform-desc { font-size: 13px; line-height: 1.6; color: #6A6A6A; margin: 0; }

          /* Features grid */
          .erp-features {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
            border: 0.5px solid #D4D0C8;
            margin-top: 8px;
          }
          .erp-feature {
            padding: 20px;
            border-right: 0.5px solid #D4D0C8;
            border-bottom: 0.5px solid #D4D0C8;
          }
          .erp-feature-title { font-size: 13px; font-weight: 600; margin: 0 0 6px; }
          .erp-feature-desc { font-size: 13px; line-height: 1.6; color: #6A6A6A; margin: 0; }

          /* Timeline + cost */
          .erp-timeline { border: 0.5px solid #D4D0C8; margin-top: 8px; }
          .erp-tl-row {
            display: grid;
            grid-template-columns: 1fr 1fr 1fr;
            border-bottom: 0.5px solid #D4D0C8;
          }
          .erp-tl-row:last-child { border-bottom: none; }
          .erp-tl-row.header { background: #EEECEA; }
          .erp-tl-cell {
            padding: 14px 18px;
            font-size: 13px;
            border-right: 0.5px solid #D4D0C8;
            color: #4A4A4A;
            line-height: 1.5;
          }
          .erp-tl-cell:last-child { border-right: none; }
          .erp-tl-row.header .erp-tl-cell {
            font-size: 11px;
            font-weight: 600;
            letter-spacing: 0.08em;
            text-transform: uppercase;
            color: #6B7C6E;
          }
          .erp-cost-main { font-weight: 700; color: #111; display: block; }
          .erp-cost-note { font-size: 11px; color: #9A9A9A; }

          /* FAQ */
          .erp-faq { border: 0.5px solid #D4D0C8; margin-top: 8px; }
          .erp-faq-item { padding: 20px; border-bottom: 0.5px solid #D4D0C8; }
          .erp-faq-item:last-child { border-bottom: none; }
          .erp-faq-q { font-size: 14px; font-weight: 600; margin: 0 0 8px; }
          .erp-faq-a { font-size: 14px; line-height: 1.7; color: #4A4A4A; margin: 0; }

          /* CTA */
          .erp-cta-block {
            background: #111111;
            padding: 48px;
            margin-top: 48px;
          }
          .erp-cta-block h2 {
            font-family: 'Inter Tight', 'Inter', sans-serif;
            font-size: 24px;
            font-weight: 700;
            color: #F7F6F3;
            margin: 0 0 12px;
          }
          .erp-cta-block p { font-size: 14px; color: #A0A09A; margin: 0 0 24px; line-height: 1.6; }
          .erp-cta-block a {
            display: inline-block;
            background: #F7F6F3;
            color: #111111;
            font-size: 13px;
            font-weight: 600;
            padding: 10px 20px;
            text-decoration: none;
          }
          .erp-cta-block a:hover { background: #EEECEA; }

          @media (max-width: 600px) {
            .erp-hero { padding: 48px 20px 40px; }
            .erp-content { padding: 0 20px 60px; }
            .erp-tl-row { grid-template-columns: 1fr; }
            .erp-tl-cell { border-right: none; border-bottom: 0.5px solid #D4D0C8; }
            .erp-tl-row:last-child .erp-tl-cell:last-child { border-bottom: none; }
            .erp-cta-block { padding: 32px 24px; }
          }
        `}</style>

                {/* ── Hero ── */}
                <section className="erp-hero">
                    <p className="erp-eyebrow">ERP Open Source · UMKM Indonesia</p>
                    <h1>
                        ERP gratis<br />
                        <em>tanpa biaya lisensi tahunan.</em>
                    </h1>
                    <div className="erp-hero-stat">
                        <div className="erp-stat">
                            <span className="erp-stat-num">Rp 0</span>
                            <span className="erp-stat-label">Biaya lisensi</span>
                        </div>
                        <div className="erp-stat">
                            <span className="erp-stat-num">4–12 mgg</span>
                            <span className="erp-stat-label">Estimasi implementasi</span>
                        </div>
                        <div className="erp-stat">
                            <span className="erp-stat-num">70–90%</span>
                            <span className="erp-stat-label">Hemat vs ERP berbayar</span>
                        </div>
                    </div>
                    <p className="erp-hero-desc">
                        Odoo, ERPNext, dan alternatif open source lainnya memberi fitur enterprise-class
                        tanpa vendor lock-in. Anda bayar hosting dan setup — bukan lisensi selamanya.
                    </p>
                    <div className="erp-cta-row">
                        <Link href="/contact" className="erp-btn-primary">Konsultasi Gratis</Link>
                        <Link href="/pos-free" className="erp-btn-secondary">Lihat POS Gratis →</Link>
                    </div>
                </section>

                <div className="erp-content">

                    {/* ── Platforms ── */}
                    <section className="erp-section">
                        <p className="erp-label">Platform</p>
                        <h2>ERP open source yang kami gunakan</h2>
                        <div className="erp-platforms">
                            {platforms.map((p) => (
                                <div key={p.name} className="erp-platform-item">
                                    <div className="erp-platform-header">
                                        <span className="erp-platform-name">{p.name}</span>
                                        <span className="erp-platform-tag">{p.tag}</span>
                                    </div>
                                    <p className="erp-platform-desc">{p.desc}</p>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* ── Features ── */}
                    <section className="erp-section">
                        <p className="erp-label">Fitur</p>
                        <h2>Yang bisa kami bantu implementasikan</h2>
                        <div className="erp-features">
                            {features.map((f) => (
                                <div key={f.title} className="erp-feature">
                                    <p className="erp-feature-title">{f.title}</p>
                                    <p className="erp-feature-desc">{f.desc}</p>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* ── Timeline & Cost ── */}
                    <section className="erp-section">
                        <p className="erp-label">Biaya & Timeline</p>
                        <h2>Estimasi implementasi</h2>
                        <p>
                            ERP-nya gratis. Yang Anda bayar adalah waktu setup, konfigurasi,
                            migrasi data, dan training — bukan lisensi tahunan.
                        </p>
                        <div className="erp-timeline">
                            <div className="erp-tl-row header">
                                <div className="erp-tl-cell">Tahap</div>
                                <div className="erp-tl-cell">Biaya (Estimasi)</div>
                                <div className="erp-tl-cell">Durasi</div>
                            </div>
                            {[
                                { stage: 'Discovery & Perencanaan', cost: 'Gratis', note: 'Termasuk dalam paket', time: '1–2 minggu' },
                                { stage: 'Setup & Konfigurasi Odoo', cost: 'Rp 5.000.000–12.000.000', note: '', time: '2–4 minggu' },
                                { stage: 'Migrasi Data', cost: 'Rp 2.000.000–6.000.000', note: 'Tergantung volume data', time: '1–3 minggu' },
                                { stage: 'Training Tim', cost: 'Rp 1.000.000–3.000.000', note: '', time: '3–5 hari' },
                                { stage: 'Hosting & Maintenance', cost: 'Rp 300.000–2.000.000/bln', note: 'Tergantung skala transaksi', time: 'Ongoing' },
                            ].map((r) => (
                                <div key={r.stage} className="erp-tl-row">
                                    <div className="erp-tl-cell" style={{ fontWeight: 500, color: '#111' }}>{r.stage}</div>
                                    <div className="erp-tl-cell">
                                        <span className="erp-cost-main">{r.cost}</span>
                                        {r.note && <span className="erp-cost-note">{r.note}</span>}
                                    </div>
                                    <div className="erp-tl-cell">{r.time}</div>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* ── FAQ ── */}
                    <section className="erp-section">
                        <p className="erp-label">FAQ</p>
                        <h2>Pertanyaan umum</h2>
                        <div className="erp-faq">
                            {[
                                {
                                    q: 'Apakah ERP open source bisa dipakai UMKM Indonesia?',
                                    a: 'Ya. Odoo dan ERPNext sudah dipakai ribuan UMKM di Asia Tenggara. Keduanya mendukung IDR, multi-bahasa, dan bisa dikustomisasi untuk workflow bisnis lokal.',
                                },
                                {
                                    q: 'Berapa biaya implementasi ERP?',
                                    a: 'ERP-nya gratis. Biaya setup mulai Rp 5.000.000–12.000.000 untuk implementasi standar Odoo, termasuk konfigurasi dan training. Hosting mulai Rp 300.000/bulan.',
                                },
                                {
                                    q: 'Berapa lama implementasi ERP?',
                                    a: 'Rata-rata 4–8 minggu untuk setup standar. Proyek dengan kustomisasi bisa 8–12 minggu. Kami jalankan sprint 2 mingguan dengan demo progres yang bisa Anda pantau.',
                                },
                                {
                                    q: 'Apakah bisa integrasi dengan Shopify atau marketplace?',
                                    a: 'Ya. Kami hubungkan Odoo atau ERPNext dengan Shopify untuk sinkronisasi produk, stok, dan pesanan. Juga bisa ke Tokopedia, Shopee, atau marketplace lokal lainnya.',
                                },
                                {
                                    q: 'Apakah data saya aman di ERP open source?',
                                    a: 'Ya, justru lebih aman — Anda yang kontrol server dan data, bukan vendor pihak ketiga. Kami bantu setup backup otomatis, enkripsi data, dan monitoring server.',
                                },
                                {
                                    q: 'Bisa migrasi dari Excel atau software lama ke ERP?',
                                    a: 'Bisa. Kami tangani migrasi data dari Excel, spreadsheet, atau sistem lama ke Odoo/ERPNext dengan validasi data agar tidak ada yang hilang atau salah format.',
                                },
                            ].map((f) => (
                                <div key={f.q} className="erp-faq-item">
                                    <p className="erp-faq-q">{f.q}</p>
                                    <p className="erp-faq-a">{f.a}</p>
                                </div>
                            ))}
                        </div>
                    </section>

                </div>

                <div style={{ maxWidth: 860, margin: '0 auto', padding: '0 24px 80px' }}>
                    <div className="erp-cta-block">
                        <h2>Siap modernisasi operasional bisnis Anda?</h2>
                        <p>Ceritakan kebutuhan bisnis — kami kirim roadmap ERP dan estimasi biaya dalam 1 hari kerja.</p>
                        <Link href="/contact">Mulai Konsultasi →</Link>
                    </div>
                </div>

            </main>
        </>
    );
}
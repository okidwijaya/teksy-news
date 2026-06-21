export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  publishedAt: string;
  readingTime: string;
  content: BlogContentBlock[];
};

export type BlogContentBlock =
  | { type: "paragraph"; text: string }
  | { type: "heading"; text: string }
  | { type: "list"; items: string[] };

export const blogPosts: BlogPost[] = [
  {
    slug: "erp-custom-vs-erp-saas-untuk-umkm",
    title: "ERP custom vs ERP SaaS: mana yang tepat untuk UMKM Anda?",
    excerpt:
      "Accurate, Jurnal, dan ERP SaaS lain menawarkan kecepatan setup. ERP custom menawarkan kesesuaian jangka panjang. Berikut cara memutuskan mana yang sesuai dengan tahap bisnis Anda.",
    category: "ERP",
    publishedAt: "2026-05-12",
    readingTime: "6 menit baca",
    content: [
      {
        type: "paragraph",
        text: "Kebanyakan UMKM mulai dengan ERP SaaS karena alasan yang masuk akal — setup cepat, biaya awal rendah, tidak perlu tim development. Tapi seiring bisnis tumbuh, batasan software generik mulai terasa.",
      },
      {
        type: "heading",
        text: "Kapan ERP SaaS masih masuk akal",
      },
      {
        type: "paragraph",
        text: "Jika alur bisnis Anda standar — satu gudang, satu kanal penjualan, tim kecil — ERP SaaS biasanya cukup. Biaya bulanan yang dibayar jauh lebih kecil dibanding biaya development custom di tahap ini.",
      },
      {
        type: "heading",
        text: "Tanda Anda sudah melampaui ERP SaaS",
      },
      {
        type: "list",
        items: [
          "Anda menambal proses dengan spreadsheet di luar sistem utama",
          "Tim operasional menghabiskan waktu input data dua kali ke sistem berbeda",
          "Fitur yang Anda butuhkan ada di tier harga yang jauh lebih mahal",
          "Data Anda terkunci di platform yang sulit diekspor sepenuhnya",
        ],
      },
      {
        type: "paragraph",
        text: "Kalau dua atau lebih dari tanda di atas terasa familiar, itu sinyal bahwa biaya tersembunyi dari software generik — waktu tim, proses manual, fitur yang dipaksakan — sudah melebihi biaya membangun sistem yang sesuai dari awal.",
      },
    ],
  },
  {
    slug: "kenapa-shopify-custom-app-bukan-tema-saja",
    title: "Kenapa brand fashion butuh custom app, bukan sekadar tema Shopify",
    excerpt:
      "Tema Shopify bagus untuk mulai jualan. Tapi begitu kebutuhan spesifik muncul — bundling produk, sistem loyalty, integrasi gudang — tema saja tidak cukup.",
    category: "Shopify",
    publishedAt: "2026-04-03",
    readingTime: "5 menit baca",
    content: [
      {
        type: "paragraph",
        text: "Banyak brand fashion memulai dengan tema Shopify premium dan merasa itu sudah cukup. Untuk toko sederhana, memang cukup. Tapi begitu kebutuhan bisnis menjadi lebih spesifik, batas tema mulai terlihat.",
      },
      {
        type: "heading",
        text: "Yang tidak bisa dilakukan tema saja",
      },
      {
        type: "list",
        items: [
          "Logika bundling produk yang kompleks (beli 2 dapat diskon khusus kombinasi tertentu)",
          "Integrasi real-time dengan sistem inventory di luar Shopify",
          "Pengalaman checkout custom di luar batas Shopify Checkout Extensibility",
          "Dashboard internal untuk tim yang tidak akses Shopify admin langsung",
        ],
      },
      {
        type: "paragraph",
        text: "Custom app dibangun di atas Shopify API memungkinkan logika bisnis spesifik tanpa harus menunggu update tema dari developer pihak ketiga setiap kali kebutuhan berubah.",
      },
    ],
  },
  {
    slug: "checklist-sebelum-migrasi-sistem-operasional",
    title: "Checklist sebelum migrasi ke sistem operasional baru",
    excerpt:
      "Migrasi dari spreadsheet atau software lama ke sistem baru adalah momen rawan. Berikut hal-hal yang perlu disiapkan sebelum proses dimulai.",
    category: "Operasional",
    publishedAt: "2026-03-18",
    readingTime: "4 menit baca",
    content: [
      {
        type: "paragraph",
        text: "Migrasi sistem yang gagal jarang disebabkan oleh kode yang buruk — lebih sering karena persiapan data dan proses yang kurang matang sebelum migrasi dimulai.",
      },
      {
        type: "heading",
        text: "Sebelum mulai",
      },
      {
        type: "list",
        items: [
          "Audit data yang ada — berapa banyak duplikat, data tidak lengkap, atau format tidak konsisten",
          "Tentukan periode transisi paralel, jangan matikan sistem lama sebelum sistem baru teruji",
          "Identifikasi siapa saja yang perlu training, bukan cuma admin utama",
          "Siapkan rencana rollback jika ada masalah kritis di minggu pertama",
        ],
      },
      {
        type: "paragraph",
        text: "Sistem baru yang baik mengakomodasi cara kerja yang sudah ada terlebih dahulu, baru kemudian memperkenalkan perbaikan proses secara bertahap.",
      },
    ],
  },
];

export function getAllPosts(): BlogPost[] {
  return [...blogPosts].sort(
    (a, b) =>
      new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime(),
  );
}

export function getPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((p) => p.slug === slug);
}

export function getAllSlugs(): string[] {
  return blogPosts.map((p) => p.slug);
}

export function formatDate(dateStr: string): string {
  const date = new Date(dateStr);
  return date.toLocaleDateString("id-ID", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

const BASE_URL = "https://www.kitadevelopers.com";

/**
 * ProfessionalService schema — for the main agency landing page.
 * Helps Google understand KitaDevelopers as a service business with
 * specific service offerings (Shopify, ERP, Web App).
 */
export const professionalServiceSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "@id": `${BASE_URL}/#organization`,
  name: "KitaDevelopers",
  url: BASE_URL,
  description:
    "Jasa pengembangan Shopify, ERP custom build, dan web app untuk bisnis dan UMKM. Berbasis di Tangerang Selatan, Indonesia.",
  image: `${BASE_URL}/og-image.png`,
  priceRange: "Rp 8.000.000 - Rp 30.000.000+",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Tangerang Selatan",
    addressRegion: "Banten",
    addressCountry: "ID",
  },
  areaServed: [
    { "@type": "Country", name: "Indonesia" },
    { "@type": "Place", name: "Global / Remote" },
  ],
  sameAs: [
    // TODO: isi link sosial/profile asli (LinkedIn, GitHub, Instagram bisnis)
  ],
  founder: {
    "@type": "Person",
    name: "Oki",
    jobTitle: "Frontend & Full-Stack Developer",
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Layanan KitaDevelopers",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Shopify Store Development",
          description:
            "Custom Shopify store, headless storefront, integrasi payment dan logistik lokal.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "ERP Custom Build",
          description:
            "Sistem ERP yang dibangun dari nol sesuai alur bisnis: inventory, purchase order, sales order, multi-gudang.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Web App & Dashboard Development",
          description:
            "CRM, POS, admin panel, dan internal tools dengan standar keamanan fintech.",
        },
      },
    ],
  },
};

/**
 * SoftwareApplication schema — for the free POS product landing page.
 * The `offers.price: 0` signal helps Google surface this for
 * "free POS" / "POS gratis" type queries.
 */
export const posSoftwareSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "KitaDevelopers POS",
  applicationCategory: "BusinessApplication",
  applicationSubCategory: "Point of Sale Software",
  operatingSystem: "Web Browser",
  url: `${BASE_URL}/pos`,
  description:
    "Aplikasi kasir (POS) gratis berbasis web. Catat transaksi, kelola produk, export data, dan cetak struk PDF tanpa biaya langganan untuk fitur dasar.",
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "IDR",
    description: "Gratis untuk fitur dasar: transaksi, manajemen produk, export, cetak PDF.",
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "5",
    ratingCount: "1",
  },
  featureList: [
    "Pencatatan transaksi penjualan",
    "Export data penjualan & transaksi",
    "Import & export produk",
    "Cetak struk / invoice PDF",
    "Manajemen promo (fitur berbayar)",
  ],
};

/**
 * BreadcrumbList schema generator — improves SERP display with breadcrumb trail.
 */
export function breadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

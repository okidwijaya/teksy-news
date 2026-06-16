export type TemplateCategory =
    | "shopify"
    | "landing"
    | "dashboard"
    | "ecommerce"
    | "portfolio"
    | "saas";

export interface Template {
    slug: string;
    category: TemplateCategory;
    title: string;
    tag: string;
    icon: string;
    thumbnail?: string;
    preview?: string;
    description: string;
    stack: string[];
    price: string;
    priceNote?: string;
    features: string[];
    demoUrl?: string;
}

export const templateCategories: { key: TemplateCategory; label: string; desc: string }[] = [
    { key: "shopify", label: "Shopify Themes", desc: "Custom Shopify storefront themes, ready to install and brand." },
    { key: "landing", label: "Landing Pages", desc: "High-converting landing pages for products, services, and campaigns." },
    { key: "dashboard", label: "Admin Dashboards", desc: "Internal dashboards and admin panels for managing your business." },
    { key: "ecommerce", label: "E-commerce Sites", desc: "Full storefront templates for non-Shopify e-commerce builds." },
    { key: "portfolio", label: "Portfolio Sites", desc: "Personal and agency portfolio templates to showcase your work." },
    { key: "saas", label: "SaaS Landing Pages", desc: "Marketing pages for SaaS products, with pricing and feature sections." },
];

export const templates: Template[] = [
    // ===== SHOPIFY THEMES =====
    {
        slug: "shopify-minimal-fashion",
        category: "shopify",
        title: "Minimal Fashion Theme",
        tag: "Shopify",
        icon: "👗",
        description: "A clean, minimal Shopify theme designed for fashion and apparel brands. Lookbook-style product galleries and mobile-first checkout.",
        stack: ["Shopify Liquid", "JavaScript", "Tailwind CSS"],
        price: "Rp 1,5 jt",
        priceNote: "Theme only — installation & branding extra",
        features: [
            "Lookbook-style product gallery",
            "Mobile-optimized checkout",
            "Quick-view product modal",
            "Built-in size guide section",
        ],
    },
    {
        slug: "shopify-electronics-store",
        category: "shopify",
        title: "Electronics & Gadgets Theme",
        tag: "Shopify",
        icon: "🔌",
        description: "A modern Shopify theme for electronics and gadget stores, with spec comparison tables and trust badges.",
        stack: ["Shopify Liquid", "JavaScript", "Tailwind CSS"],
        price: "Rp 1,8 jt",
        priceNote: "Theme only — installation & branding extra",
        features: [
            "Spec comparison table",
            "Trust badges & warranty info section",
            "Bundle/upsell product blocks",
            "Sticky add-to-cart bar",
        ],
    },

    // ===== LANDING PAGES =====
    {
        slug: "landing-product-launch",
        category: "landing",
        title: "Product Launch Landing Page",
        tag: "Landing Page",
        icon: "🚀",
        description: "A high-converting landing page template for launching a new product, with hero, features, testimonials, and CTA sections.",
        stack: ["Next.js", "TypeScript", "Tailwind CSS"],
        price: "Rp 1,2 jt",
        features: [
            "Hero with animated CTA",
            "Feature highlight grid",
            "Testimonial carousel",
            "Email signup integration ready",
        ],
    },
    {
        slug: "landing-service-business",
        category: "landing",
        title: "Service Business Landing Page",
        tag: "Landing Page",
        icon: "🛠️",
        description: "A landing page template for local service businesses (clinics, salons, agencies) with booking CTA and service breakdown.",
        stack: ["Next.js", "TypeScript", "Tailwind CSS"],
        price: "Rp 1,2 jt",
        features: [
            "Service cards with pricing",
            "Booking / contact CTA section",
            "Location & map embed ready",
            "Bilingual EN/ID support",
        ],
    },

    // ===== ADMIN DASHBOARDS =====
    {
        slug: "dashboard-inventory-lite",
        category: "dashboard",
        title: "Inventory Dashboard (Lite)",
        tag: "Admin Dashboard",
        icon: "📦",
        description: "A lightweight admin dashboard template for tracking stock, products, and basic order data.",
        stack: ["Next.js", "TypeScript", "Tailwind CSS", "Recharts"],
        price: "Rp 2,5 jt",
        priceNote: "Frontend template — backend/API integration separate",
        features: [
            "Stock overview cards",
            "Product table with filters",
            "Sales chart widgets",
            "Responsive sidebar layout",
        ],
    },
    {
        slug: "dashboard-saas-admin",
        category: "dashboard",
        title: "SaaS Admin Panel",
        tag: "Admin Dashboard",
        icon: "⚙️",
        description: "A general-purpose admin panel template for SaaS products — user management, billing overview, and analytics.",
        stack: ["Next.js", "TypeScript", "Tailwind CSS", "Recharts"],
        price: "Rp 2,8 jt",
        priceNote: "Frontend template — backend/API integration separate",
        features: [
            "User management table",
            "Billing & subscription overview",
            "Analytics charts",
            "Dark mode support",
        ],
    },

    // ===== E-COMMERCE SITES =====
    {
        slug: "ecommerce-headless-storefront",
        category: "ecommerce",
        title: "Headless Storefront Template",
        tag: "E-commerce",
        icon: "🛒",
        description: "A headless e-commerce frontend template built with Next.js, ready to connect to any commerce backend via API.",
        stack: ["Next.js", "TypeScript", "Tailwind CSS"],
        price: "Rp 2,2 jt",
        priceNote: "Frontend template — backend/API integration separate",
        features: [
            "Product listing & detail pages",
            "Cart drawer UI",
            "Category filter sidebar",
            "Checkout flow UI",
        ],
    },
    {
        slug: "ecommerce-fb-storefront",
        category: "ecommerce",
        title: "F&B Online Store Template",
        tag: "E-commerce",
        icon: "🍱",
        description: "An e-commerce template tailored for food & beverage brands — menu-style product display and order tracking UI.",
        stack: ["Next.js", "TypeScript", "Tailwind CSS"],
        price: "Rp 2,2 jt",
        priceNote: "Frontend template — backend/API integration separate",
        features: [
            "Menu-style product grid",
            "Order tracking page UI",
            "Promo banner sections",
            "Mobile-first design",
        ],
    },

    // ===== PORTFOLIO SITES =====
    {
        slug: "portfolio-developer",
        category: "portfolio",
        title: "Developer Portfolio Template",
        tag: "Portfolio",
        icon: "💻",
        description: "A clean portfolio template for developers — project grid, tech stack showcase, and contact section.",
        stack: ["Next.js", "TypeScript", "Tailwind CSS"],
        price: "Rp 900rb",
        features: [
            "Project grid with filters",
            "Tech stack badges",
            "About & experience timeline",
            "Contact section",
        ],
    },
    {
        slug: "portfolio-agency",
        category: "portfolio",
        title: "Agency Portfolio Template",
        tag: "Portfolio",
        icon: "🏢",
        description: "A multi-page portfolio template for small agencies — services, pricing, portfolio, and contact pages included.",
        stack: ["Next.js", "TypeScript", "Tailwind CSS"],
        price: "Rp 1,5 jt",
        features: [
            "Multi-page structure (services, pricing, portfolio)",
            "Bilingual EN/ID support",
            "Pricing table component",
            "Project case study layout",
        ],
    },

    // ===== SAAS LANDING PAGES =====
    {
        slug: "saas-landing-classic",
        category: "saas",
        title: "SaaS Landing Page (Classic)",
        tag: "SaaS",
        icon: "📈",
        description: "A classic SaaS marketing page template with hero, feature sections, pricing table, and FAQ.",
        stack: ["Next.js", "TypeScript", "Tailwind CSS"],
        price: "Rp 1,5 jt",
        features: [
            "Hero with product mockup",
            "Feature comparison sections",
            "Pricing table (monthly/yearly toggle)",
            "FAQ accordion",
        ],
    },
    {
        slug: "saas-landing-dark",
        category: "saas",
        title: "SaaS Landing Page (Dark Mode)",
        tag: "SaaS",
        icon: "🌙",
        description: "A dark-themed SaaS landing page template with bold typography and gradient accents — great for AI/tech products.",
        stack: ["Next.js", "TypeScript", "Tailwind CSS"],
        price: "Rp 1,5 jt",
        features: [
            "Dark theme with gradient accents",
            "Animated feature highlights",
            "Pricing table",
            "Newsletter signup section",
        ],
    },
];
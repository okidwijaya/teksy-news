export type Category = "ecommerce" | "erp" | "webapp" | "mobile" | "experience";

export interface Project {
    slug: string;
    category: Category;
    tag: string;
    title: string;
    icon: string;
    thumbnail?: string;
    summary: string;
    stack: string[];
    // Detail page fields
    role?: string;
    company?: string;
    period?: string;
    overview: string;
    challenge?: string;
    solution?: string;
    result?: string;
    features?: string[];
    images?: string[];
    liveUrl?: string;
    githubUrl?: string;
}

export const projects: Project[] = [
    // ===== WORK EXPERIENCE =====
    {
        slug: "ocbc-bank-raya-vio",
        category: "experience",
        tag: "Work Experience",
        title: "Frontend Developer — VIO Project",
        icon: "🏦",
        summary: "End-to-end frontend development for an internal banking platform (VIO) at OCBC / Bank Raya.",
        stack: ["React.js", "Next.js", "TypeScript", "Tailwind CSS"],
        role: "Frontend Developer (End-to-End)",
        company: "OCBC (PT. Bank OCBC NISP) / Bank Raya",
        period: "Jun 2025 – Present",
        overview: "Working as an end-to-end frontend developer on the VIO project, a banking platform requiring strict security standards, role-based access control, and enterprise-grade UI consistency.",
        challenge: "Build and maintain frontend modules within a regulated banking environment, where security, accessibility, and code review standards are significantly stricter than typical commercial projects.",
        solution: "Developed reusable, accessible UI components following internal design systems, implemented RBAC-aware views, and collaborated closely with backend and QA teams in an agile workflow.",
        result: "Delivered production-ready frontend modules on schedule, gaining hands-on experience with enterprise banking development standards, secure coding practices, and large-scale codebase collaboration.",
        features: [
            "Reusable component development under enterprise design system",
            "Role-based access control (RBAC) aware UI",
            "Secure handling of sensitive data (PII)",
            "Collaboration in agile sprints with cross-functional teams",
        ],
    },
    {
        slug: "expatify-shopify",
        category: "experience",
        tag: "Work Experience",
        title: "Frontend & Backend Engineer — Shopify",
        icon: "🛍️",
        summary: "Built and maintained Shopify stores and private apps for 20+ fashion, lifestyle, and F&B brands across multiple regions.",
        stack: ["Shopify Liquid", "Remix", "Node.js", "React.js"],
        role: "Frontend & Backend Engineer",
        company: "Expatify (PT. Semesta Kaiser Pertama)",
        period: "2022 – 2024",
        overview: "Delivered 20+ Shopify projects for fashion, lifestyle, and F&B brands across Indonesia, Vietnam, Hong Kong, and the US — covering custom theme development, private apps, and third-party integrations.",
        challenge: "Each brand required unique storefront experiences, custom checkout flows, and integrations with local payment gateways and logistics providers, all under tight launch deadlines.",
        solution: "Built custom Shopify themes with Liquid, developed private apps using Shopify Functions and Remix, and integrated REST/GraphQL Admin APIs for inventory and order automation.",
        result: "Successfully launched and maintained stores for 20+ brands including Minuman.com, Ria Miranda, Aleza, Luxehouze, Pimallow USA, Novere, Baller, Project Soul, Mooi, Rolling HK, Poser Girl, Sleep in Dreamland, Jiniso, Heyglow, Honeyelens, Ittaherl, and Supersport Vietnam.",
        features: [
            "Custom Shopify theme development (Liquid)",
            "Private apps & Shopify Functions",
            "Payment gateway & logistics integrations",
            "Multi-region store launches (ID, VN, HK, US)",
            "20+ brands across fashion, lifestyle & F&B",
        ],
    },
    {
        slug: "drewcare-warranty-system",
        category: "ecommerce",
        tag: "Shopify Private App",
        title: "DrewCare Indonesia — Warranty Registration & Claim System",
        icon: "🛡️",
        summary: "Custom Shopify private app for warranty registration and claim management, built with Remix, TypeScript, and Shopify GraphQL APIs.",
        stack: ["Shopify", "Remix", "TypeScript", "GraphQL", "Tailwind CSS", "Shopify Admin API", "Shopify Storefront API"],
        role: "Frontend / Full Stack Shopify Developer",
        overview: "Developed a custom warranty registration and warranty claim system integrated with Shopify for DrewCare Indonesia. The project extended Shopify's capabilities through a private app architecture to support post-purchase customer services, warranty validation, and claim management workflows.",
        challenge: "Shopify does not provide advanced warranty registration and claim handling out of the box, leaving brands without a way to manage post-purchase warranty data at scale.",
        solution: "Designed a custom Shopify private app using Remix and GraphQL to extend storefront functionality — handling warranty business logic, customer/order synchronization, and secure API communication — while maintaining seamless integration with the Shopify Admin ecosystem.",
        result: "Streamlined warranty registration for customers, reduced manual handling of warranty claims, improved after-sales customer experience, and enabled centralized warranty data management (1,800+ customers, 2,100+ products registered).",
        features: [
            "Warranty registration with order & serial number validation",
            "Warranty claim submission & status tracking",
            "Shopify private app built with Remix + TypeScript",
            "GraphQL integration with Shopify Admin & Storefront APIs",
            "Custom storefront UI with JavaScript, jQuery, Tailwind & Liquid",
            "Admin dashboard for warranty & customer data management",
        ],
    },

    // ===== ECOMMERCE / SHOPIFY =====
    {
        slug: "shopify-fashion-storefront",
        category: "ecommerce",
        tag: "Shopify / E-commerce",
        title: "Custom Fashion Storefront",
        icon: "🛒",
        summary: "Fully custom Shopify theme with unique brand styling, optimized checkout, and local payment integration.",
        stack: ["Shopify Liquid", "JavaScript", "Tailwind CSS"],
        overview: "A custom-built Shopify storefront for a fashion brand, featuring a unique design system, lookbook-style product pages, and optimized mobile checkout.",
        challenge: "The brand needed a storefront that stood out from default Shopify themes while maintaining fast load times and high conversion rates.",
        solution: "Designed and developed a fully custom Liquid theme, optimized images and assets for speed, and integrated local payment gateways (e.g. Midtrans/Xendit-style providers).",
        result: "Improved page load speed and a more on-brand shopping experience, supporting the brand's product launches.",
        features: [
            "Custom Liquid theme from scratch",
            "Lookbook-style product galleries",
            "Mobile-first checkout optimization",
            "Local payment gateway integration",
        ],
    },
    {
        slug: "shopify-headless-storefront",
        category: "ecommerce",
        tag: "Shopify / E-commerce",
        title: "Headless Storefront (Next.js)",
        icon: "⚡",
        summary: "Headless e-commerce frontend built with Next.js consuming Shopify's Storefront API for full design flexibility.",
        stack: ["Next.js", "TypeScript", "Shopify Storefront API", "Tailwind CSS"],
        overview: "A headless commerce solution decoupling the storefront frontend from Shopify's default theme engine, using Next.js and the Storefront GraphQL API.",
        challenge: "Default Shopify theming limited the design and performance possibilities the client wanted for a premium brand experience.",
        solution: "Built a custom Next.js frontend consuming Shopify's Storefront API for products, cart, and checkout, deployed on Vercel for fast global delivery.",
        result: "Achieved significantly improved Core Web Vitals scores and full design freedom while retaining Shopify's backend for inventory and order management.",
        features: [
            "Next.js + Shopify Storefront API integration",
            "Custom cart & checkout UI",
            "ISR for product pages",
            "Deployed on Vercel",
        ],
    },

    // ===== ERP / INVENTORY / POS =====
    {
        slug: "warranty-registration-platform",
        category: "erp",
        tag: "Warranty Management",
        title: "Warranty Registration Platform",
        icon: "🛡️",
        summary: "End-to-end product registration, warranty claims, customer tracking, and admin dashboard.",
        stack: ["Next.js", "PostgreSQL", "Supabase", "TypeScript"],
        overview: "A centralized platform allowing customers to register product warranties and submit/track claims, paired with an internal admin dashboard for support teams.",
        challenge: "Customers previously had no clear way to register warranties or check claim status, resulting in high support ticket volume and manual tracking via spreadsheets.",
        solution: "Built a self-service registration and claims portal for customers, plus an admin dashboard with claim status management, customer history, and reporting.",
        result: "Faster registration process, easier claim tracking for both customers and support staff, and a measurable reduction in support workload.",
        features: [
            "Customer self-service registration & claims",
            "Admin dashboard with claim management",
            "Customer history & search",
            "Status notifications",
        ],
    },
    {
        slug: "inventory-order-management",
        category: "erp",
        tag: "ERP System",
        title: "Inventory & Order Management",
        icon: "📦",
        summary: "Real-time stock tracking, purchase orders, sales orders across multiple warehouses.",
        stack: ["Next.js", "PostgreSQL", "Docker", "Node.js"],
        overview: "An internal ERP module for managing product stock, purchase orders, and sales orders across multiple warehouse locations.",
        challenge: "The business managed inventory across several warehouses using manual spreadsheets, causing stock discrepancies and delayed order fulfillment.",
        solution: "Developed a centralized system for stock tracking, automated purchase order generation based on low-stock thresholds, and sales order processing with warehouse allocation.",
        result: "Reduced stock discrepancies, faster order processing, and real-time visibility into inventory levels across all warehouse locations.",
        features: [
            "Multi-warehouse stock tracking",
            "Purchase order automation",
            "Sales order & fulfillment workflow",
            "Low-stock alerts",
        ],
    },
    {
        slug: "pos-retail-system",
        category: "erp",
        tag: "POS System",
        title: "Retail POS System",
        icon: "💳",
        summary: "Point-of-sale platform with real-time inventory sync, multi-outlet support, and sales reporting.",
        stack: ["React.js", "Node.js", "PostgreSQL"],
        overview: "A point-of-sale system designed for multi-outlet retail businesses, syncing sales transactions directly with central inventory.",
        challenge: "Multiple outlets operated with disconnected sales records, making centralized reporting and stock reconciliation slow and error-prone.",
        solution: "Built a POS interface for cashiers with offline-resilient transaction handling, syncing sales data to a central database for real-time inventory updates and consolidated reporting.",
        result: "Centralized sales visibility across outlets and real-time inventory updates, reducing manual reconciliation work.",
        features: [
            "Multi-outlet POS interface",
            "Real-time inventory sync",
            "Sales reporting & analytics",
            "Receipt printing support",
        ],
    },

    // ===== WEB APPS / DASHBOARDS =====
    {
        slug: "crm-platform",
        category: "webapp",
        tag: "CRM",
        title: "Customer Relationship Platform",
        icon: "📊",
        summary: "Lead management, follow-up automation, customer history, and sales pipeline tracking.",
        stack: ["React", "Node.js", "PostgreSQL"],
        overview: "A CRM platform built for a sales team to manage leads, track follow-ups, and visualize the sales pipeline.",
        challenge: "The sales team relied on spreadsheets for lead tracking, leading to missed follow-ups and no visibility into pipeline health.",
        solution: "Built a CRM with lead management, automated follow-up reminders, customer interaction history, and a kanban-style pipeline view.",
        result: "Improved follow-up consistency and gave management real-time visibility into pipeline stages and conversion rates.",
        features: [
            "Lead management & scoring",
            "Automated follow-up reminders",
            "Kanban sales pipeline",
            "Customer interaction history",
        ],
    },
    {
        slug: "analytics-dashboard",
        category: "webapp",
        tag: "Dashboard",
        title: "Business Analytics Dashboard",
        icon: "📈",
        summary: "Internal analytics dashboard with role-based access, data visualization, and exportable reports.",
        stack: ["Next.js", "TypeScript", "Recharts", "REST API"],
        overview: "An internal dashboard providing business stakeholders with real-time analytics, visualizations, and exportable reports across departments.",
        challenge: "Business data was scattered across multiple sources, making it difficult for managers to get a unified view of performance metrics.",
        solution: "Built a dashboard aggregating data from internal APIs, presenting it through interactive charts with role-based views for different departments.",
        result: "Enabled faster, data-driven decision-making with a single source of truth for key business metrics.",
        features: [
            "Role-based dashboard views",
            "Interactive charts & filters",
            "Exportable reports (CSV/PDF)",
            "REST API data aggregation",
        ],
    },

    // ===== MOBILE (placeholder for upcoming projects) =====
    {
        slug: "mobile-app-coming-soon",
        category: "mobile",
        tag: "Mobile",
        title: "Mobile App — Coming Soon",
        icon: "📱",
        summary: "Mobile development with Flutter or React Native is in progress. Projects will be added here soon.",
        stack: ["Flutter", "React Native"],
        overview: "Mobile app development is an upcoming service offering. This section will showcase Flutter and React Native projects as they are completed.",
        features: [
            "Cross-platform mobile apps (iOS & Android)",
            "Flutter or React Native development",
            "Integration with existing backend APIs",
            "App store deployment support",
        ],
    },
];
/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.NEXT_PUBLIC_API_CP || "https://www.kitadevelopers.com",
  generateRobotsTxt: true,
  changefreq: "daily",
  priority: 0.7,
  sitemapSize: 7000,
  generateIndexSitemap: false,
  outDir: "public",
  exclude: [
    "/auth",
    "/article/add",
    "/auth",
    "/dashboard",
    "/api/*",
    "/_next/*",
  ],
  generateIndexSitemap: true,
  outDir: "public",
  robotsTxtOptions: {
    policies: [
      {
        userAgent: "*",
        allow: "/",
        disallow: [
          "/auth",
          "/dashboard",
          "/pos",
          "/article/add",
          "/api",
          "/_next",
        ],
      },
    ],
    additionalSitemaps: ["https://www.kitadevelopers.com/api/sitemap"],
  },
  transform: async (config, path) => {
    const defaultPriorities = {
      "/": 1.0,
      "/about": 0.8,
      "/services": 0.8,
      "/portofolio": 0.8,
      "/pricing": 0.8,
      "/contact-us": 0.7,
      "/blogs": 0.9,
      "/faq": 0.6,
      "/privacy-policy": 0.5,
      "/terms-of-service": 0.5,
    };

    return {
      loc: path,
      changefreq: defaultPriorities[path] > 0.8 ? "daily" : "weekly",
      priority: defaultPriorities[path] || config.priority,
      lastmod: new Date().toISOString(),
    };
  },
};

/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL || 'https://www.kitadevelopers.com',
  generateRobotsTxt: true,
  changefreq: 'daily',
  priority: 0.7,
  sitemapSize: 7000,
  generateIndexSitemap: false, // Disable index sitemap as we're handling it manually
  outDir: 'public',
  exclude: [
    '/auth',
    '/article/add',
    '/api/*',
    '/_next/*',
  ],
  generateIndexSitemap: true,
  outDir: 'public',
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
        disallow: [
          '/auth',
          '/article/add',
          '/api',
          '/_next',
        ],
      },
    ],
    additionalSitemaps: [
      'https://www.kitadevelopers.com/api/sitemap',
    ],
  },
  transform: async (config, path) => {
    // Custom transform function for static routes
    const defaultPriorities = {
      '/': 1.0,
      '/about': 1,
      '/services': 1,
      '/portfolio': 1,
      '/pricing': 1,
      '/contact-us': 1,
      '/blogs': 0.9,
      '/faq': 1,
      '/privacy-policy': 1,
      '/terms-of-service': 1,
    };

    return {
      loc: path,
      changefreq: defaultPriorities[path] > 0.8 ? 'daily' : 'weekly',
      priority: defaultPriorities[path] || config.priority,
      lastmod: new Date().toISOString(),
    };
  },
}

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'How to Migrate to Shopify — KITA Developers',
  description: 'A friendly, step-by-step guide to migrate your store to Shopify with minimal downtime and data loss.',
  keywords: ['migrate to shopify', 'shopify migration guide', 'shopify migration']
};

export default function Post() {
  return (
    <article>
      <h1>How to Migrate to Shopify</h1>
      <p>Hello! Migrating to Shopify can feel big, but with a friendly plan it’s straightforward. Here’s a practical checklist to get started.</p>

      <h2>Migration Checklist</h2>
      <ol>
        <li>Export products, customers, and orders from your current platform.</li>
        <li>Map product fields and images carefully.</li>
        <li>Set up payment and shipping integrations on Shopify before switching DNS.</li>
        <li>Test everything on a staging store.</li>
      </ol>

      <h2>Tips</h2>
      <p>Keep SEO in mind: preserve URLs where possible, add 301 redirects for changed paths, and update sitemap after launch.</p>

      <p>If you'd like, we can help you migrate with a warm, no-stress approach.</p>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: [
          {
            '@type': 'Question',
            name: 'How long does a typical Shopify migration take?',
            acceptedAnswer: { '@type': 'Answer', text: 'Small stores can be migrated in a few days; larger stores may take 1–3 weeks depending on complexity.' }
          },
          {
            '@type': 'Question',
            name: 'Will I lose SEO during migration?',
            acceptedAnswer: { '@type': 'Answer', text: 'If you preserve URLs or add proper 301 redirects and update the sitemap, SEO impact can be minimal.' }
          }
        ]
      }) }} />
    </article>
  );
}

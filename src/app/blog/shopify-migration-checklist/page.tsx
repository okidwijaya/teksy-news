import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Shopify Migration Checklist: Step-by-Step Guide (2024) — KITA Developers',
  description: 'Complete Shopify migration checklist for moving from WooCommerce, BigCommerce, or custom stores. Avoid costly mistakes.',
  keywords: ['Shopify migration', 'migrate to Shopify', 'Shopify migration guide', 'WooCommerce to Shopify']
};

export default function Post() {
  return (
    <article style={{maxWidth: '800px', margin: '0 auto', padding: '40px 20px', lineHeight: '1.8', color: '#333'}}>
      <h1>Shopify Migration Checklist: Complete Step-by-Step Guide</h1>
      <p>Moving to Shopify from another platform? This checklist helps you avoid the 10 most common migration mistakes that cost e-commerce businesses $10k–$50k in lost revenue.</p>

      <h2>Pre-Migration Preparation (2–4 Weeks Before)</h2>

      <h3>1. Audit Your Current Store</h3>
      <ul>
        <li>☐ Export all product data (SKU, title, description, images, variants, pricing)</li>
        <li>☐ Document custom fields and attributes</li>
        <li>☐ Export customer data (email, shipping address, purchase history)</li>
        <li>☐ Extract order history (last 2–3 years for reference)</li>
        <li>☐ Screenshot key pages for design reference</li>
        <li>☐ Note all active integrations (email, analytics, shipping, payment gateways)</li>
      </ul>

      <h3>2. Set Up Your Shopify Store</h3>
      <ul>
        <li>☐ Create Shopify account and store</li>
        <li>☐ Select a Shopify plan (Starter, Basic, Standard, Premium)</li>
        <li>☐ Choose a theme (or plan for custom development)</li>
        <li>☐ Set up your domain (use CNAME or change nameservers)</li>
        <li>☐ Create a test/staging environment for migration testing</li>
      </ul>

      <h3>3. Plan Your Timeline</h3>
      <ul>
        <li>☐ Decide on migration window (typically Friday night–Sunday for minimal impact)</li>
        <li>☐ Notify customers about planned downtime (email, banner)</li>
        <li>☐ Prepare DNS cutover plan (minimize downtime)</li>
        <li>☐ Schedule post-launch QA and monitoring</li>
      </ul>

      <h2>Data Migration (1–2 Weeks)</h2>

      <h3>4. Migrate Products</h3>
      <ul>
        <li>☐ Use Shopify's CSV import or third-party apps (Oberlo, StockSync)</li>
        <li>☐ Test with 50–100 products first to catch formatting issues</li>
        <li>☐ Verify all product data: titles, descriptions, prices, images, variants</li>
        <li>☐ Set up collections (categories) matching your original store</li>
        <li>☐ Configure variant options (size, color, etc.)</li>
        <li>☐ Set up product SEO metadata (meta title, meta description, URL slug)</li>
      </ul>

      <h3>5. Migrate Customers</h3>
      <ul>
        <li>☐ Export customer list with email, name, address</li>
        <li>☐ Segment by VIP customers (for special re-engagement offers)</li>
        <li>☐ Update customer tags in Shopify to reflect segments</li>
        <li>☐ Set up abandoned cart recovery emails</li>
      </ul>

      <h3>6. Migrate Order History (Reference Only)</h3>
      <ul>
        <li>☐ Archive old orders separately (not critical for Shopify, but helpful for customer service)</li>
        <li>☐ Keep accessible for refund/return disputes</li>
      </ul>

      <h2>Configuration & Setup (1–2 Weeks)</h2>

      <h3>7. Payment & Shipping</h3>
      <ul>
        <li>☐ Add payment gateway (Stripe, PayPal, Square, etc.)</li>
        <li>☐ Configure shipping zones and rates</li>
        <li>☐ Set up local pickup or fulfillment options</li>
        <li>☐ Enable tax calculation (Shopify Tax app or manual setup)</li>
        <li>☐ Test payment processing with test cards</li>
      </ul>

      <h3>8. Email & Communication</h3>
      <ul>
        <li>☐ Set up transactional emails (order confirmation, shipping, delivery)</li>
        <li>☐ Configure email domain (custom domain recommended for branding)</li>
        <li>☐ Set up abandoned cart email sequence</li>
        <li>☐ Add marketing email integration (Klaviyo, Mailchimp, etc.)</li>
      </ul>

      <h3>9. Analytics & Tracking</h3>
      <ul>
        <li>☐ Connect Google Analytics (GA4 recommended)</li>
        <li>☐ Set up Google Merchant Center feed</li>
        <li>☐ Configure Facebook Pixel</li>
        <li>☐ Set up conversion tracking (purchase events, ROI measurement)</li>
        <li>☐ Create a 301 redirect map for old URLs (if possible)</li>
      </ul>

      <h2>Design & User Experience (1–3 Weeks)</h3>

      <h3>10. Customize Theme</h3>
      <ul>
        <li>☐ Match brand colors, fonts, and imagery to original store</li>
        <li>☐ Add company logo and branding assets</li>
        <li>☐ Create custom pages (About, Contact, FAQ, Returns Policy)</li>
        <li>☐ Set up menus and navigation</li>
        <li>☐ Mobile-responsive testing (all devices)</li>
      </ul>

      <h3>11. Trust & Legal</h3>
      <ul>
        <li>☐ Add Privacy Policy page</li>
        <li>☐ Add Terms of Service page</li>
        <li>☐ Add Return/Refund Policy page</li>
        <li>☐ Add Contact information and customer support channels</li>
        <li>☐ Enable SSL/HTTPS (automatic with Shopify)</li>
      </ul>

      <h2>Testing & Validation (1 Week Before Launch)</h2>

      <h3>12. Pre-Launch QA</h3>
      <ul>
        <li>☐ Test complete purchase flow (add to cart → checkout → payment → confirmation)</li>
        <li>☐ Test on desktop, tablet, and mobile devices</li>
        <li>☐ Verify product images load correctly</li>
        <li>☐ Test product filtering and search</li>
        <li>☐ Check pricing and promotional discounts</li>
        <li>☐ Verify shipping calculations</li>
        <li>☐ Test email notifications (order, shipping, delivery)</li>
        <li>☐ Verify analytics are tracking (GA, Pixel, etc.)</li>
      </ul>

      <h3>13. Performance & SEO Check</h3>
      <ul>
        <li>☐ Run Lighthouse audit (target: LCP &lt; 2.5s, FID &lt; 100ms, CLS &lt; 0.1)</li>
        <li>☐ Check page load time on 3G network</li>
        <li>☐ Verify meta tags on all key pages</li>
        <li>☐ Create XML sitemap (automatic in Shopify)</li>
        <li>☐ Submit sitemap to Google Search Console</li>
      </ul>

      <h2>Launch Day (Day Of Migration)</h2>

      <h3>14. Final Checks</h3>
      <ul>
        <li>☐ Take original site offline (with message pointing to new store)</li>
        <li>☐ Update DNS to point to Shopify (or finish CNAME setup)</li>
        <li>☐ Monitor error logs for 30 minutes post-launch</li>
        <li>☐ Test live purchase flow with a real test transaction</li>
        <li>☐ Monitor email delivery (order confirmations, etc.)</li>
      </ul>

      <h3>15. Post-Launch</h3>
      <ul>
        <li>☐ Email customer list with announcement (get 10% off coupon?)</li>
        <li>☐ Check Google Search Console for crawl errors</li>
        <li>☐ Monitor conversion rates in analytics for first week</li>
        <li>☐ Set up monitoring alerts for site downtime</li>
        <li>☐ Gather feedback from customer support</li>
      </ul>

      <h2>The 10 Most Common Migration Mistakes to Avoid</h2>
      <ol>
        <li><strong>Skipping URL redirects:</strong> Old product pages won't rank on Google. Set up 301 redirects or add structured data migration hint.</li>
        <li><strong>Lost metadata:</strong> Export custom fields early; Shopify may not have exact equivalents.</li>
        <li><strong>Poor product descriptions:</strong> Don't just copy-paste. SEO-optimize for Shopify (shorter, more keyword-focused).</li>
        <li><strong>Ignored analytics:</strong> Don't lose your historical data. Archive old analytics separately.</li>
        <li><strong>Skipping mobile testing:</strong> Shopify themes vary; some are slow on mobile. Test before launch.</li>
        <li><strong>Wrong payment processor:</strong> Some gateways have better fraud detection. Compare options before committing.</li>
        <li><strong>Inadequate training:</strong> Your team needs to know Shopify admin. Budget time for learning.</li>
        <li><strong>No backup plan:</strong> Keep old site accessible for 1–2 weeks post-launch in case issues arise.</li>
        <li><strong>Overlooking taxes/shipping:</strong> Shopify has many options; misconfiguration costs sales and customer trust.</li>
        <li><strong>Skipping DNS TTL lowering:</strong> Before migration, lower DNS TTL to 300 for faster cutover.</li>
      </ol>

      <h2>Timeline Summary</h2>
      <table style={{width: '100%', borderCollapse: 'collapse', marginTop: '20px', marginBottom: '20px'}}>
        <thead>
          <tr style={{borderBottom: '2px solid #333', backgroundColor: '#f5f5f5'}}>
            <th style={{padding: '10px', textAlign: 'left'}}>Phase</th>
            <th style={{padding: '10px', textAlign: 'left'}}>Duration</th>
            <th style={{padding: '10px', textAlign: 'left'}}>Effort</th>
          </tr>
        </thead>
        <tbody>
          <tr style={{borderBottom: '1px solid #ddd'}}>
            <td style={{padding: '10px'}}>Preparation</td>
            <td style={{padding: '10px'}}>2–4 weeks</td>
            <td style={{padding: '10px'}}>20–40 hours</td>
          </tr>
          <tr style={{borderBottom: '1px solid #ddd'}}>
            <td style={{padding: '10px'}}>Data Migration</td>
            <td style={{padding: '10px'}}>1–2 weeks</td>
            <td style={{padding: '10px'}}>30–60 hours</td>
          </tr>
          <tr style={{borderBottom: '1px solid #ddd'}}>
            <td style={{padding: '10px'}}>Configuration</td>
            <td style={{padding: '10px'}}>1–2 weeks</td>
            <td style={{padding: '10px'}}>30–50 hours</td>
          </tr>
          <tr style={{borderBottom: '1px solid #ddd'}}>
            <td style={{padding: '10px'}}>Design & UX</td>
            <td style={{padding: '10px'}}>1–3 weeks</td>
            <td style={{padding: '10px'}}>40–80 hours</td>
          </tr>
          <tr style={{borderBottom: '1px solid #ddd'}}>
            <td style={{padding: '10px'}}>Testing & Launch</td>
            <td style={{padding: '10px'}}>1 week</td>
            <td style={{padding: '10px'}}>20–30 hours</td>
          </tr>
          <tr style={{borderBottom: '1px solid #ddd', fontWeight: 'bold'}}>
            <td style={{padding: '10px'}}>TOTAL</td>
            <td style={{padding: '10px'}}>6–12 weeks</td>
            <td style={{padding: '10px'}}>140–260 hours</td>
          </tr>
        </tbody>
      </table>

      <h2>FAQ</h2>
      <h3>How much does a Shopify migration cost?</h3>
      <p>DIY: $0–$500 (if you have technical skills). Professional: $3,000–$15,000 depending on complexity.</p>

      <h3>Will my SEO rankings drop?</h3>
      <p>If you set up 301 redirects and submit a sitemap, rankings typically recover within 4–8 weeks. Without redirects, expect a 20–40% traffic dip initially.</p>

      <h3>Can I migrate while running the old store?</h3>
      <p>Yes! Set up your Shopify store on a staging domain, test thoroughly, then cut over. This minimizes risk and downtime.</p>

      <h3>What if I want a custom theme?</h3>
      <p>Custom Shopify themes cost $3,000–$10,000+. Consider starting with a pre-made theme and customizing with Shopify's no-code tools first.</p>

      <p style={{marginTop: '40px'}}><strong>Ready to migrate to Shopify?</strong> We handle the entire process—from data export to launch and post-launch monitoring. Most migrations complete in 6–10 weeks with zero revenue loss.</p>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: [
          {
            '@type': 'Question',
            name: 'How long does a Shopify migration take?',
            acceptedAnswer: { '@type': 'Answer', text: 'Typically 6–12 weeks from start to launch, including preparation, data migration, setup, and testing.' }
          },
          {
            '@type': 'Question',
            name: 'Can I lose my SEO rankings during migration?',
            acceptedAnswer': { '@type': 'Answer', text': 'Not if you set up proper 301 redirects and submit an updated sitemap. Rankings recover within 4–8 weeks.' }
          }
        ]
      }) }} />
    </article>
  );
}

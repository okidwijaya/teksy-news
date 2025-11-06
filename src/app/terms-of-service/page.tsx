"use client";
import PublicLayout from '@/components/PublicLayout';
import { ArrowUp } from 'lucide-react';
interface TableOfContentsItem {
  id: string;
  title: string;
}

const tocItems: TableOfContentsItem[] = [
  { id: 'acceptance', title: 'Acceptance of Terms' },
  { id: 'services', title: 'Services Offered' },
  { id: 'theme-licenses', title: 'Theme Licenses and Usage Rights' },
  { id: 'development-services', title: 'Development Services' },
  { id: 'payment-terms', title: 'Payment Terms' },
  { id: 'refund-policy', title: 'Refund Policy' },
  { id: 'intellectual-property', title: 'Intellectual Property Rights' },
  { id: 'user-responsibilities', title: 'User Responsibilities' },
  { id: 'warranties', title: 'Warranties and Disclaimers' },
  { id: 'limitation-liability', title: 'Limitation of Liability' },
  { id: 'support-updates', title: 'Support and Updates' },
  { id: 'termination', title: 'Termination' },
  { id: 'modifications', title: 'Modifications to Terms' },
  { id: 'governing-law', title: 'Governing Law' },
  { id: 'contact', title: 'Contact Information' }
];

export default function Page() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <PublicLayout>
      <div className="min-h-screen bg-white">
        {/* Header */}
        <header className="text-center py-16 px-4">
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-4">
            Terms of Service
          </h1>
          <p className="text-gray-600 text-sm md:text-base">
            Last Updated November 5th, 2025
          </p>
        </header>

        {/* Main Content */}
        <div className="max-w-7xl mx-auto px-4 pb-16">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Left Content */}
            <div className="lg:col-span-2 space-y-8">
              {/* Introduction */}
              <div>
                <p className="text-2xl md:text-3xl text-gray-900 mb-6 leading-relaxed">
                  Please read these Terms of Service carefully before using our themes or development services.
                </p>
              </div>

              {/* Section 1 */}
              <section id="acceptance">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  1. Acceptance of Terms
                </h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  By purchasing, downloading, or using any of our themes or development services, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our products or services.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  These terms constitute a legally binding agreement between you (the &quot;Client&quot; or &quot;You&quot;) and us (the &quot;Developer&quot; or &quot;We&quot;). Your continued use of our services indicates your acceptance of these terms and any future modifications.
                </p>
              </section>

              {/* Section 2 */}
              <section id="services">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  2. Services Offered
                </h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  We provide two primary services:
                </p>
                <div className="bg-gray-50 rounded-lg p-6 space-y-4">
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Theme Sales</h3>
                    <p className="text-gray-600 leading-relaxed">
                      Pre-built website themes, templates, and design assets available for purchase and download through our platform.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Custom Development Services</h3>
                    <p className="text-gray-600 leading-relaxed">
                      Bespoke web development, theme customization, plugin development, and technical consulting services tailored to your specific requirements.
                    </p>
                  </div>
                </div>
              </section>

              {/* Section 3 */}
              <section id="theme-licenses">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  3. Theme Licenses and Usage Rights
                </h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  When you purchase a theme, you receive a license to use it according to the following terms:
                </p>
                <div className="space-y-3 text-gray-600">
                  <p className="leading-relaxed">
                    <strong className="text-gray-900">Standard License:</strong> Grants you the right to use the theme for one single end product (one website or application). You may customize the theme as needed for your project.
                  </p>
                  <p className="leading-relaxed">
                    <strong className="text-gray-900">Extended License:</strong> Allows use on multiple projects and permits you to create end products for clients. Each extended license covers up to 5 end products.
                  </p>
                  <p className="leading-relaxed">
                    <strong className="text-gray-900">Prohibited Uses:</strong> You may not redistribute, resell, or share the theme files with others. You may not claim the theme as your own work or use it to create competing products.
                  </p>
                  <p className="leading-relaxed">
                    All themes remain our intellectual property. Your license grants usage rights only, not ownership of the source files.
                  </p>
                </div>
              </section>

              {/* Section 4 */}
              <section id="development-services">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  4. Development Services
                </h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  For custom development projects, the following terms apply:
                </p>
                <div className="space-y-3 text-gray-600">
                  <p className="leading-relaxed">
                    <strong className="text-gray-900">Project Scope:</strong> All projects begin with a detailed scope document outlining deliverables, timelines, and costs. Changes to the scope may result in additional fees.
                  </p>
                  <p className="leading-relaxed">
                    <strong className="text-gray-900">Timeline:</strong> We provide estimated completion dates based on project complexity. Timelines may be affected by client delays in providing feedback or required materials.
                  </p>
                  <p className="leading-relaxed">
                    <strong className="text-gray-900">Revisions:</strong> Each project includes a specified number of revision rounds. Additional revisions beyond the agreed amount will be billed at our hourly rate.
                  </p>
                  <p className="leading-relaxed">
                    <strong className="text-gray-900">Ownership:</strong> Upon full payment, you receive full ownership of the custom code and assets created specifically for your project. Pre-existing code libraries and frameworks remain under their respective licenses.
                  </p>
                </div>
              </section>

              {/* Section 5 */}
              <section id="payment-terms">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  5. Payment Terms
                </h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  <strong className="text-gray-900">Theme Purchases:</strong> Payment is required in full at the time of purchase. All major credit cards and payment processors are accepted.
                </p>
                <p className="text-gray-600 leading-relaxed mb-4">
                  <strong className="text-gray-900">Development Services:</strong> Projects over $1,000 require a 50% deposit before work begins, with the remaining balance due upon completion. Projects under $1,000 require full payment upfront.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  Late payments may result in suspension of services and may incur a late fee of 1.5% per month. All prices are in USD unless otherwise specified.
                </p>
              </section>

              {/* Section 6 */}
              <section id="refund-policy">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  6. Refund Policy
                </h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  <strong className="text-gray-900">Themes:</strong> We offer a 14-day money-back guarantee on all theme purchases. To be eligible for a refund, you must demonstrate that the theme has a technical issue that we cannot resolve. Refunds are not available if you simply change your mind or find a different theme you prefer.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  <strong className="text-gray-900">Development Services:</strong> Deposits are non-refundable once work has commenced. If you cancel a project mid-way, you will be charged for all work completed up to that point.
                </p>
              </section>

              {/* Section 7 */}
              <section id="intellectual-property">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  7. Intellectual Property Rights
                </h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  All themes, code, designs, graphics, and content created by us are protected by copyright, trademark, and other intellectual property laws. Unauthorized use, reproduction, or distribution of our work is strictly prohibited and may result in legal action.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  Third-party assets included in themes (such as fonts, icons, or images) may be subject to separate licenses. You are responsible for ensuring compliance with these licenses.
                </p>
              </section>

              {/* Section 8 */}
              <section id="user-responsibilities">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  8. User Responsibilities
                </h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  You agree to:
                </p>
                <ul className="space-y-2 text-gray-600 list-disc list-inside">
                  <li className="leading-relaxed">Provide accurate and complete information when purchasing or engaging our services</li>
                  <li className="leading-relaxed">Maintain the security of your account credentials</li>
                  <li className="leading-relaxed">Use our themes and services only for lawful purposes</li>
                  <li className="leading-relaxed">Provide timely feedback and required materials for development projects</li>
                  <li className="leading-relaxed">Ensure you have the right to use any content you provide to us</li>
                  <li className="leading-relaxed">Not reverse engineer, decompile, or disassemble our themes</li>
                </ul>
              </section>

              {/* Section 9 */}
              <section id="warranties">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  9. Warranties and Disclaimers
                </h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  We warrant that our themes are free from defects in materials and workmanship under normal use. We warrant that custom development services will be performed with reasonable care and skill.
                </p>
                <p className="text-gray-600 leading-relaxed mb-4">
                  However, our themes and services are provided "as is" without warranty of any kind, either express or implied. We do not guarantee that our themes will meet your specific requirements or that they will be error-free, secure, or uninterrupted.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  We are not responsible for issues arising from third-party services, hosting environments, or modifications made by you or other developers.
                </p>
              </section>

              {/* Section 10 */}
              <section id="limitation-liability">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  10. Limitation of Liability
                </h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  To the maximum extent permitted by law, we shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including but not limited to loss of profits, data, use, or goodwill, arising from your use of our themes or services.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  Our total liability to you for any claims arising from these terms or your use of our themes or services shall not exceed the amount you paid to us in the twelve months preceding the claim.
                </p>
              </section>

              {/* Section 11 */}
              <section id="support-updates">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  11. Support and Updates
                </h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  <strong className="text-gray-900">Theme Support:</strong> All theme purchases include 6 months of free support for technical issues and bug fixes. Support covers theme functionality only and does not include customization services or third-party plugin issues.
                </p>
                <p className="text-gray-600 leading-relaxed mb-4">
                  <strong className="text-gray-900">Updates:</strong> We provide regular updates to our themes to ensure compatibility with the latest web standards and platform versions. Updates are free during your support period.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  <strong className="text-gray-900">Development Projects:</strong> Custom development projects include 30 days of post-launch support for bug fixes. Ongoing maintenance and feature additions are available through separate maintenance agreements.
                </p>
              </section>

              {/* Section 12 */}
              <section id="termination">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  12. Termination
                </h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  We reserve the right to terminate or suspend your access to our services at any time, without notice, for conduct that we believe violates these terms or is harmful to other users, us, or third parties, or for any other reason.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  Upon termination, your right to use our themes and services will immediately cease. Sections of these terms that by their nature should survive termination shall survive, including ownership provisions, warranty disclaimers, and limitations of liability.
                </p>
              </section>

              {/* Section 13 */}
              <section id="modifications">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  13. Modifications to Terms
                </h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  We reserve the right to modify these Terms of Service at any time. Changes will be effective immediately upon posting to our website. Your continued use of our themes or services after changes are posted constitutes your acceptance of the modified terms.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  We will make reasonable efforts to notify you of material changes to these terms via email or through our website.
                </p>
              </section>

              {/* Section 14 */}
              <section id="governing-law">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  14. Governing Law
                </h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  These Terms of Service shall be governed by and construed in accordance with the laws of [Your Jurisdiction], without regard to its conflict of law provisions.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  Any disputes arising from these terms or your use of our services shall be resolved through binding arbitration in accordance with the rules of [Arbitration Association], or through the courts of [Your Jurisdiction].
                </p>
              </section>

              {/* Section 15 */}
              <section id="contact">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  15. Contact Information
                </h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  If you have any questions about these Terms of Service, please contact us:
                </p>
                <div className="bg-gray-50 rounded-lg p-6 space-y-2">
                  <p className="text-gray-600"><strong className="text-gray-900">Email:</strong> support@yourcompany.com</p>
                  <p className="text-gray-600"><strong className="text-gray-900">Website:</strong> www.yourcompany.com</p>
                  <p className="text-gray-600"><strong className="text-gray-900">Address:</strong> [Your Business Address]</p>
                </div>
              </section>

              {/* Footer Note */}
              <div className="border-t border-gray-200 pt-8 mt-12">
                <p className="text-sm text-gray-500 italic">
                  By using our themes or development services, you acknowledge that you have read, understood, and agree to be bound by these Terms of Service.
                </p>
              </div>
            </div>

            {/* Right Sidebar - Table of Contents */}
            <div className="lg:sticky lg:top-8 lg:self-start">
              <div className="bg-gray-50 rounded-2xl p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-6">
                  Table of contents
                </h3>
                <ol className="space-y-3">
                  {tocItems.map((item, index) => (
                    <li key={item.id}>
                      <a
                        href={`#${item.id}`}
                        className="text-gray-700 hover:text-gray-900 underline decoration-gray-400 hover:decoration-gray-900 transition-colors block text-sm"
                      >
                        {index + 1}. {item.title}
                      </a>
                    </li>
                  ))}
                </ol>

                <button
                  onClick={scrollToTop}
                  className="mt-8 flex items-center gap-2 text-gray-700 hover:text-gray-900 font-medium transition-colors group"
                >
                  Back to top
                  <ArrowUp className="w-4 h-4 group-hover:-translate-y-1 transition-transform" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PublicLayout>
  );
}
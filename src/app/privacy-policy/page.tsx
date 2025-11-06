"use client";
import PublicLayout from '@/components/PublicLayout';
import { ArrowUp } from 'lucide-react';

interface TableOfContentsItem {
  id: string;
  title: string;
}

const tocItems: TableOfContentsItem[] = [
  { id: 'what-personal-info', title: 'What Personal Information we collect' },
  { id: 'what-we-do', title: 'What we do with the Personal Information we collect' },
  { id: 'when-disclose', title: 'When we Disclose Personal Information' },
  { id: 'cookies', title: 'How we use cookies and collect information using technology' },
  { id: 'security', title: 'Security' },
  { id: 'transfer', title: 'We may Transfer Personal Information to Other Countries' },
  { id: 'links', title: 'Links to other websites' },
  { id: 'choices', title: 'Your Choices' },
  { id: 'accessing', title: 'Accessing and Correcting your Personal Information' },
  { id: 'children', title: 'Children' },
  { id: 'contact', title: 'Contact Us' }
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
            Privacy Policy
          </h1>
          <p className="text-gray-600 text-sm md:text-base">
            Last Updated May 23rd, 2022
          </p>
        </header>

        {/* Main Content */}
        <div className="max-w-7xl mx-auto px-4 pb-16">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Left Content */}
            <div className="lg:col-span-2 space-y-8">
              <div>
                <p className="text-2xl md:text-3xl text-gray-900 mb-6 leading-relaxed">
                  This Privacy Policy will help you better understand how we collect, use, and share your personal information.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  Privacy Policy
                </h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  This privacy policy sets out how Creative Layer Inc. (&quot;Creative Layer&quot;, &quot;we&quot;, &quot;us&quot;, or &quot;our&quot;, and also doing business and &quot;remx&quot;) collects, uses, and discloses, any personal information that you give us or that we collect when you use our website or Services. Creative Layer offers a platform that allows artists, brands and us to mint and sell NFTs and tokens and for purchasers to mint and buy NFTs (&quot;Services&quot;).
                </p>
                <p className="text-gray-600 leading-relaxed mb-4">
                  By using our website or Services, or by choosing to give us personal information, you consent to this Privacy Policy and the processing of your Personal Information it describes. If you do not agree with any terms of this Privacy Policy, please exercise the choices we describe in this Policy, or do not use the Services and do not give us any personal information.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  Creative Layer may change this policy from time to time by updating this page. You should check this page from time to time to ensure that you are happy with any changes. Your continued access to and/or use of our website or Services after any such changes constitutes your acceptance of, and agreement to this Privacy Policy, as revised.
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
                        className="text-gray-700 hover:text-gray-900 underline decoration-gray-400 hover:decoration-gray-900 transition-colors block"
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
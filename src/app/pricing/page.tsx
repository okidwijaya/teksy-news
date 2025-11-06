'use client';

import PublicLayout from "@/components/PublicLayout";

export default function Page() {
  const services = [
    {
      number: '01',
      title: 'E-Commerce Website',
      description: 'Custom Shopify store with theme customization',
      startingPrice: 'Rp 20,000,000',
      priceRange: 'Rp 20M - 80M',
      features: ['Custom theme design', 'Product setup', 'Payment integration', 'Mobile responsive', 'Basic SEO']
    },
    {
      number: '02',
      title: 'Shopify Plus Development',
      description: 'Enterprise-level eCommerce solutions',
      startingPrice: 'Rp 250,000,000',
      priceRange: 'Rp 250M - 2B',
      features: ['Advanced customization', 'High-volume capacity', 'Custom checkout', 'API integrations', 'Dedicated support']
    },
    {
      number: '03',
      title: 'Mobile App Development',
      description: 'Native iOS & Android apps for your store',
      startingPrice: 'Rp 400,000,000',
      priceRange: 'Rp 400M - 5B',
      features: ['Native iOS & Android', 'Push notifications', 'In-app purchases', 'Offline mode', 'Analytics dashboard']
    },
    {
      number: '04',
      title: 'SaaS & Server Management',
      description: 'Cloud infrastructure & inventory systems',
      startingPrice: 'Rp 15,000,000',
      priceRange: 'Rp 15M - 100M',
      features: ['Cloud hosting setup', 'Inventory management', 'Automated backups', 'Security monitoring', '24/7 maintenance']
    }
  ];

  return (
    <PublicLayout>
      <div className="min-h-screen">
        {/* {showBanner && (
        <div className="bg-orange-50 border-b border-orange-200 px-4 py-3 relative">
          <div className="flex items-center justify-center text-center">
            <span className="text-orange-600 mr-2">✨</span>
            <span className="text-gray-800 text-sm md:text-base">
              Get a FREE Expert Audit of Your Website, App, or Product
            </span>
            <span className="text-gray-600 ml-2">↗</span>
          </div>
          <button
            onClick={() => setShowBanner(false)}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      )} */}

        <div className="bg-[#121212] relative overflow-hidden">
          {/* <div className="bg-gradient-to-br from-[#F7F7F7] via-[#121212] to-[#323232] relative overflow-hidden"> */}
          {/* <div className="absolute top-10 left-20 w-64 h-64 bg-white blob"></div>
        <div className="absolute top-32 right-16 w-64 md:w-80 h-80 bg-white blob"></div>
        <div className="absolute bottom-20 left-32 w-32 md:w-72 h-72 bg-white blob"></div>
        <div className="absolute bottom-10 right-20 w-64 md:w-96 h-96 bg-white blob"></div> */}

          <div className="relative z-10 px-4 py-12 md:py-16">
            <div className="max-w-6xl mx-auto text-center text-white mb-8">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
                Transparent Pricing
              </h1>
              <p className="text-lg md:text-xl opacity-90 max-w-2xl mx-auto">
                Professional development services tailored to your business needs. No hidden fees.
              </p>
            </div>

            <div className="max-w-7xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {services.map((service, index) => (
                  <div
                    key={index}
                    className="rounded-2xl shadow-xl p-6 hover:shadow-2xl transition-all hover:scale-105 cursor-pointer"
                  >
                    <div className="text-gray-400 text-sm font-medium mb-3">{service.number}</div>
                    <h3 className="text-2xl font-bold text-gray-400 mb-2">{service.title}</h3>
                    <p className="text-gray-600 text-sm mb-4">{service.description}</p>

                    <div className="border-t border-gray-200 pt-4 mb-4">
                      <div className="text-sm text-gray-500 mb-1">Starting from</div>
                      <div className="text-3xl font-bold text-[#121212] mb-1">{service.startingPrice}</div>
                      <div className="text-xs text-gray-400">{service.priceRange}</div>
                    </div>

                    <ul className="space-y-2 mb-6">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start text-sm text-gray-600">
                          <svg className="w-5 h-5 text-green-500 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                          </svg>
                          {feature}
                        </li>
                      ))}
                    </ul>

                    <button className="w-full bg-white text-[#121212] hover:bg-[#121212] border hover:border-[#FFFFFF] hover:text-white py-3 rounded-xl font-semibold hover:shadow-lg transition-all hover:-translate-y-0.5">
                      Get Quote
                    </button>
                  </div>
                ))}
              </div>
            </div>

            <div className="max-w-4xl mx-auto mt-12 text-center">
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 text-white border border-white/20">
                <h3 className="text-2xl font-bold mb-4">Why Choose Us?</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                  <div>
                    <div className="text-4xl font-bold mb-2">500+</div>
                    <div className="text-sm opacity-90">Projects Completed</div>
                  </div>
                  <div>
                    <div className="text-4xl font-bold mb-2">98%</div>
                    <div className="text-sm opacity-90">Client Satisfaction</div>
                  </div>
                  <div>
                    <div className="text-4xl font-bold mb-2">24/7</div>
                    <div className="text-sm opacity-90">Support Available</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="max-w-2xl mx-auto mt-12 text-center">
              <p className="text-white text-lg mb-6">
                Need a custom solution? Lets discuss your project requirements.
              </p>
              <button className="bg-white text-[#121212] px-8 py-4 rounded-full font-bold text-lg hover:shadow-xl transition-all hover:-translate-y-1">
                Schedule Free Consultation
              </button>
            </div>
          </div>
        </div>

        {/* <style jsx>{`
        .gradient-bg {
          background: linear-gradient(135deg, #a855f7 0%, #3b82f6 100%);
          min-height: 100vh;
        }
        .blob {
          border-radius: 50%;
          filter: blur(40px);
          opacity: 0.3;
          animation: float 8s ease-in-out infinite;
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
      `}</style> */}
      </div>
    </PublicLayout>
  );
}
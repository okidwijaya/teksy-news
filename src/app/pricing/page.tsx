'use client';

import PublicLayout from "@/components/PublicLayout";
import Link from "next/link";

export default function Page() {
  const services = [
    {
      number: '01',
      title: 'Website',
      description: 'Custom Website, Shopify store and theme development',
      startingPrice: 'Rp 500.000',
      priceRange: 'Rp 500.000 - 5.000.000',
      features: ['Custom theme design', 'Payment integration', 'Mobile responsive', 'Basic SEO']
    },
    {
      number: '02',
      title: 'Shopify eCommerce',
      description: 'Shopify eCommerce solutions',
      startingPrice: 'Rp 3.000.000',
      priceRange: 'Rp 3.000.000 - 20.000.000',
      features: ['Package 01 Included', 'Product setup', 'Advanced customization', 'High-volume capacity', 'Custom checkout', 'API integrations', 'Dedicated support']
    },
    {
      number: '03',
      title: 'Mobile App Development',
      description: 'Native iOS & Android apps for your store',
      startingPrice: 'Rp 2.000.000',
      priceRange: 'Rp 2.000.000 - 5.000.000',
      features: ['Native iOS & Android', 'Push notifications', 'In-app purchases', 'Offline mode', 'Analytics dashboard']
    },
    {
      number: '04',
      title: 'Inventory Management System',
      description: 'Cloud infrastructure & inventory systems',
      startingPrice: 'Rp 15.000',
      priceRange: 'Rp 10.000 - Rp 200.000',
      features: ['Inventory management', 'Order tracking', 'Supplier management', 'Reporting & analytics', 'Multi-location support']
    }
  ];

  return (
    <PublicLayout>
      <div className="min-h-screen">
        <div className="bg-[#121212] relative overflow-hidden">
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
                    className="rounded-2xl shadow-xl p-6 hover:shadow-2xl transition-all hover:scale-105 cursor-pointer border border-[#dedede]"
                  >
                    <div className="text-white text-sm font-medium mb-3">{service.number}</div>
                    <h3 className="text-2xl font-bold text-white mb-2">{service.title}</h3>
                    <p className="text-gray-600 text-sm mb-4">{service.description}</p>

                    <div className="border-t border-gray-200 pt-4 mb-4">
                      <div className="text-sm text-white mb-1">Starting from</div>
                      <div className="text-3xl font-bold text-[#121212] mb-1">{service.startingPrice}</div>
                      <div className="text-xs text-white">{service.priceRange}</div>
                    </div>

                    <ul className="space-y-2 mb-6">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start text-sm text-white">
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
                    <div className="text-4xl font-bold mb-2">100+</div>
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
              <Link href="/contact-us" className="bg-white text-[#121212] px-8 py-4 rounded-full font-bold text-lg hover:shadow-xl transition-all hover:-translate-y-1">
                Schedule Free Consultation
              </Link>
            </div>
          </div>
        </div>
      </div>
    </PublicLayout>
  );
}
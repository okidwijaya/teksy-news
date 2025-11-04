'use client';

import { useState } from 'react';
import { ExternalLink, ArrowRight } from 'lucide-react';

export default function Page() {
  const [showBanner, setShowBanner] = useState(true);
  const [activeFilter, setActiveFilter] = useState('all');

  const filters = [
    { id: 'all', label: 'All Projects' },
    { id: 'ecommerce', label: 'E-Commerce' },
    { id: 'mobile', label: 'Mobile Apps' },
    { id: 'shopify', label: 'Shopify' },
    { id: 'saas', label: 'SaaS & Server' }
  ];

  const projects = [
    {
      id: 1,
      title: 'LuxeStore - Fashion E-Commerce',
      category: 'ecommerce',
      type: 'E-Commerce Website',
      description: 'Premium fashion marketplace with custom checkout flow and inventory management',
      image: '🛍️',
      stats: { revenue: '+240%', users: '50K+', rating: '4.9/5' },
      tech: ['Next.js', 'Shopify', 'Tailwind CSS', 'Stripe'],
      link: '#'
    },
    {
      id: 2,
      title: 'FoodieGo - Food Delivery App',
      category: 'mobile',
      type: 'Mobile Application',
      description: 'Real-time food delivery platform with GPS tracking and payment integration',
      image: '🍔',
      stats: { downloads: '100K+', orders: '500K+', rating: '4.8/5' },
      tech: ['React Native', 'Firebase', 'Google Maps API', 'Stripe'],
      link: '#'
    },
    {
      id: 3,
      title: 'BeautyHub - Shopify Theme',
      category: 'shopify',
      type: 'Shopify Development',
      description: 'Custom Shopify theme for beauty products with AR try-on feature',
      image: '💄',
      stats: { conversion: '+180%', sales: 'Rp 2B+', stores: '50+' },
      tech: ['Liquid', 'JavaScript', 'Shopify API', 'AR.js'],
      link: '#'
    },
    {
      id: 4,
      title: 'InventoryPro - SaaS Platform',
      category: 'saas',
      type: 'SaaS Solution',
      description: 'Cloud-based inventory management system with real-time analytics',
      image: '📊',
      stats: { clients: '200+', items: '1M+', uptime: '99.9%' },
      tech: ['React', 'Node.js', 'PostgreSQL', 'AWS'],
      link: '#'
    },
    {
      id: 5,
      title: 'FitnessPro - Workout App',
      category: 'mobile',
      type: 'Mobile Application',
      description: 'AI-powered fitness tracking app with personalized workout plans',
      image: '💪',
      stats: { users: '75K+', workouts: '2M+', retention: '85%' },
      tech: ['Flutter', 'TensorFlow', 'Firebase', 'HealthKit'],
      link: '#'
    },
    {
      id: 6,
      title: 'TechMart - Electronics Store',
      category: 'ecommerce',
      type: 'E-Commerce Website',
      description: 'Multi-vendor electronics marketplace with advanced search and filters',
      image: '💻',
      stats: { vendors: '500+', products: '10K+', gmv: 'Rp 50B+' },
      tech: ['Vue.js', 'Laravel', 'Elasticsearch', 'Redis'],
      link: '#'
    },
    {
      id: 7,
      title: 'PetCare - Shopify Plus Store',
      category: 'shopify',
      type: 'Shopify Plus',
      description: 'Enterprise Shopify store for pet supplies with subscription service',
      image: '🐕',
      stats: { subscribers: '20K+', mrr: 'Rp 500M', retention: '92%' },
      tech: ['Shopify Plus', 'React', 'GraphQL', 'Recharge'],
      link: '#'
    },
    {
      id: 8,
      title: 'CloudSync - Server Management',
      category: 'saas',
      type: 'Server Infrastructure',
      description: 'Automated server monitoring and management dashboard',
      image: '☁️',
      stats: { servers: '1000+', alerts: '50K+', response: '<1min' },
      tech: ['Python', 'Docker', 'Kubernetes', 'Prometheus'],
      link: '#'
    }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(p => p.category === activeFilter);

  return (
    <div className="min-h-screen bg-black">
      {showBanner && (
        <div className="bg-white border-b border-gray-200 px-4 py-3 relative">
          <div className="flex items-center justify-center text-center">
            <span className="text-gray-800 mr-2">✨</span>
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
      )}

      <div className="relative overflow-hidden bg-black pt-16 pb-12">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-96 h-96 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-block bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-white text-sm font-medium mb-6 border border-white/20">
              Our Work Speaks for Itself
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
              Portfolio
            </h1>
            <p className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto">
              Explore our successful projects across e-commerce, mobile apps, and enterprise solutions
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 text-center">
              <div className="text-4xl font-bold text-white mb-2">500+</div>
              <div className="text-gray-400 text-sm">Projects Delivered</div>
            </div>
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 text-center">
              <div className="text-4xl font-bold text-white mb-2">300+</div>
              <div className="text-gray-400 text-sm">Happy Clients</div>
            </div>
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 text-center">
              <div className="text-4xl font-bold text-white mb-2">98%</div>
              <div className="text-gray-400 text-sm">Success Rate</div>
            </div>
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 text-center">
              <div className="text-4xl font-bold text-white mb-2">6+</div>
              <div className="text-gray-400 text-sm">Years Experience</div>
            </div>
          </div>

          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {filters.map(filter => (
              <button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                className={`px-6 py-3 rounded-full font-medium transition-all ${
                  activeFilter === filter.id
                    ? 'bg-white text-black'
                    : 'bg-white/10 text-white border border-white/20 hover:bg-white/20'
                }`}
              >
                {filter.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 pb-20">
        <div className="grid md:grid-cols-2 gap-8">
          {filteredProjects.map(project => (
            <div
              key={project.id}
              className="group bg-white/5 backdrop-blur-sm rounded-3xl overflow-hidden border border-white/10 hover:border-white/30 transition-all hover:transform hover:scale-[1.02]"
            >
              <div className="bg-gradient-to-br from-white/10 to-white/5 h-64 flex items-center justify-center text-8xl relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-transparent to-black/50"></div>
                <span className="relative z-10">{project.image}</span>
              </div>

              <div className="p-8">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <div className="text-gray-400 text-sm mb-2">{project.type}</div>
                    <h3 className="text-2xl font-bold text-white mb-3">{project.title}</h3>
                  </div>
                  <button className="text-white hover:text-gray-300 transition-colors">
                    <ExternalLink className="w-6 h-6" />
                  </button>
                </div>

                <p className="text-gray-400 mb-6 leading-relaxed">
                  {project.description}
                </p>

                <div className="grid grid-cols-3 gap-4 mb-6 pb-6 border-b border-white/10">
                  {Object.entries(project.stats).map(([key, value]) => (
                    <div key={key}>
                      <div className="text-white font-bold text-lg">{value}</div>
                      <div className="text-gray-500 text-xs capitalize">{key}</div>
                    </div>
                  ))}
                </div>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-white/10 text-white text-xs rounded-full border border-white/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <button className="w-full bg-white text-black py-3 rounded-xl font-semibold hover:bg-gray-200 transition-all flex items-center justify-center gap-2 group">
                  View Case Study
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 bg-white rounded-3xl p-12 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">
            Ready to Start Your Project?
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Lets create something amazing together. Schedule a free consultation to discuss your ideas.
          </p>
          <button className="bg-black text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-800 transition-all hover:shadow-xl inline-flex items-center gap-2">
            Get Started Today
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
}
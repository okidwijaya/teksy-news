import React from 'react';
import { Code, Smartphone, ShoppingBag, Server, Sparkles } from 'lucide-react';
import Link from 'next/link';

export default function BlogBanner() {
    const services = [
        { icon: Code, text: 'Premium Web Themes' },
        { icon: Smartphone, text: 'Mobile Development' },
        { icon: ShoppingBag, text: 'Shopify Solutions' },
        { icon: Server, text: 'SaaS Management' }
    ];

    return (
        <div className="w-full bg-gradient-to-br from-[#F7F7F7] via-[#121212] to-[#323232] relative overflow-hidden">
            <div className="absolute inset-0 opacity-20">
                <div className="absolute top-10 left-10 w-72 h-72 bg-white rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute bottom-10 right-10 w-96 h-96 bg-purple-300 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 relative z-10">
                <div className="text-center mb-8">
                    <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-white text-sm font-medium mb-4">
                        <Sparkles className="w-4 h-4" />
                        <span>Professional Development Services</span>
                    </div>

                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight">
                        Build Your Digital Future
                    </h1>

                    <p className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto mb-8">
                        Expert web & mobile development, custom Shopify solutions, and enterprise-grade SaaS infrastructure.
                        Plus, get insights from our development blog.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
                        <button className="bg-white text-[#121212] px-8 py-3 rounded-full font-semibold text-lg hover:bg-purple-50 transition-all hover:shadow-xl hover:-translate-y-0.5 w-full sm:w-auto">
                            Get Started
                        </button>
                        <button className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-full font-semibold text-lg hover:bg-white/10 transition-all w-full sm:w-auto">
                            View Our Work
                        </button>
                    </div>
                </div>

                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
                    {services.map((service, index) => {
                        const Icon = service.icon;
                        return (
                            <div
                                key={index}
                                className="bg-white/10 backdrop-blur-md rounded-xl p-6 text-center hover:bg-white/20 transition-all hover:scale-105 cursor-pointer border border-white/20"
                            >
                                <div className="bg-white/20 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                                    <Icon className="w-6 h-6 text-white" />
                                </div>
                                <h3 className="text-white font-semibold text-sm md:text-base">
                                    <Link href="/dashboard">{service.text}</Link>
                                </h3>
                            </div>
                        );
                    })}
                </div>

                <div className="mt-12 text-center">
                    <div className="inline-flex items-center gap-2 text-white/80 text-sm">
                        <span className="w-8 h-px bg-white/50"></span>
                        <span>Latest Development Insights Below</span>
                        <span className="w-8 h-px bg-white/50"></span>
                    </div>
                </div>
            </div>

            <div className="absolute bottom-0 left-0 right-0">
                <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
                    <path d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="white" fillOpacity="0.1" />
                </svg>
            </div>
        </div>
    );
}
'use client';

import { useState } from 'react';

export default function Home() {
    const [showBanner, setShowBanner] = useState(true);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    return (
        <div className="min-h-screen md:h-screen md:overflow-hidden">
            {/* Top Banner */}
            {showBanner && (
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
            )}

            {/* Navigation */}
            <nav className="bg-white shadow-sm px-4 py-4 relative z-10">
                <div className="max-w-7xl mx-auto flex items-center justify-between">
                    <div className="flex items-center">
                        <div className="text-2xl font-bold text-gray-900 w-8">
                            <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <defs>
                                    <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="100%">
                                        <stop offset="0%" stop-color="#6366f1" />
                                        <stop offset="100%" stop-color="#a855f7" />
                                    </linearGradient>
                                    <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="100%">
                                        <stop offset="0%" stop-color="#a855f7" />
                                        <stop offset="100%" stop-color="#c084fc" />
                                    </linearGradient>
                                </defs>

                                <rect x="15" y="15" width="12" height="70" fill="url(#gradient1)" rx="2" />

                                <path
                                    d="M 27 45 L 65 15 L 75 20 L 75 25 L 37 55 Z"
                                    fill="url(#gradient2)"
                                />

                                <path
                                    d="M 27 45 L 75 75 L 75 85 L 65 85 L 37 55 Z"
                                    fill="url(#gradient1)"
                                />

                                <circle cx="80" cy="18" r="4" fill="#c084fc" />
                                <circle cx="85" cy="30" r="3" fill="#a855f7" />
                            </svg>
                        </div>
                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center space-x-8">
                        <a href="#" className="text-gray-700 hover:text-gray-900">Case studies</a>
                        <a href="#" className="text-gray-700 hover:text-gray-900">Pricing</a>
                        <div className="flex items-center">
                            <a href="#" className="text-gray-700 hover:text-gray-900">Services</a>
                            <div className="w-2 h-2 bg-blue-500 rounded-full ml-1"></div>
                        </div>
                        <a href="#" className="text-gray-700 hover:text-gray-900">About us</a>
                        <a href="#" className="text-gray-700 hover:text-gray-900">Blog</a>
                    </div>

                    <div className="flex items-center">
                        <button className="bg-[#7461F2] text-white px-6 py-2 rounded-full hover:bg-[#B36BF9] transition-colors">
                            Contact us
                        </button>

                        {/* Mobile menu button */}
                        <button
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                            className="md:hidden ml-4 text-gray-700"
                        >
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        </button>
                    </div>
                </div>
            </nav>

            {/* Main Content */}
            <div className="gradient-bg relative min-h-screen md:h-full md:overflow-hidden">
                {/* Decorative blobs */}
                <div className="absolute top-10 left-20 w-64 h-64 bg-white blob"></div>
                <div className="absolute top-32 right-16 w-80 h-80 bg-white blob"></div>
                <div className="absolute bottom-20 left-32 w-72 h-72 bg-white blob"></div>
                <div className="absolute bottom-10 right-20 w-96 h-96 bg-white blob"></div>

                {/* Stats Section */}
                <div className="relative z-10 flex items-center justify-center min-h-[calc(100vh-140px)] md:h-full px-4 py-8 md:py-0">
                    <div className="max-w-6xl w-full">
                        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
                            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12">
                                {/* Stat 1 */}
                                <div className="text-center md:text-left">
                                    <div className="text-gray-400 text-sm font-medium mb-2">01</div>
                                    <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">E Commerce</div>
                                    <div className="text-gray-600 text-lg">Starting Rp1 millon</div>
                                </div>

                                {/* Stat 2 */}
                                <div className="text-center md:text-left">
                                    <div className="text-gray-400 text-sm font-medium mb-2">02</div>
                                    <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">Shopify Themes</div>
                                    <div className="text-gray-600 text-lg">Starting Rp1 millon</div>
                                </div>

                                {/* Stat 3 */}
                                <div className="text-center md:text-left">
                                    <div className="text-gray-400 text-sm font-medium mb-2">03</div>
                                    <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">Mobile App</div>
                                    <div className="text-gray-600 text-lg">Starting Rp1 millon</div>
                                </div>

                                {/* Stat 4 */}
                                <div className="text-center md:text-left">
                                    <div className="text-gray-400 text-sm font-medium mb-2">04</div>
                                    <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">Integrations</div>
                                    <div className="text-gray-600 text-lg">Starting Rp1 millon</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <style jsx>{`
        .gradient-bg {
          background: linear-gradient(135deg, #a855f7 0%, #3b82f6 100%);
        }
        .blob {
          border-radius: 50%;
          filter: blur(40px);
          opacity: 0.3;
        }
      `}</style>
        </div>
    );
}
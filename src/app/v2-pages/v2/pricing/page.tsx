"use client";
import { useState } from 'react';
import Link from 'next/link';
import { Lang, translations } from '@/constanst/translationTest';
import PublicLayout from '@/components/PublicLayout';

export default function PricingPage() {
    const [lang, setLang] = useState<Lang>('en');
    const t = translations[lang];

    return (
        <PublicLayout>
            <div className="min-h-screen bg-white text-[#0d0d0d] font-sans antialiased selection:bg-[#e8461e]/20 selection:text-[#e8461e]">

                {/* HEADER */}
                <section className="px-[5vw] py-20 bg-[#111110] relative overflow-hidden">
                    <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_70%_60%_at_80%_20%,rgba(232,70,30,0.18)_0%,transparent_60%)]" />
                    <div className="max-w-7xl mx-auto relative text-center">
                        <div className="text-xs font-bold tracking-[2px] uppercase text-[#ff8a6e] mb-4">{t.pricing.label}</div>
                        <h1 className="font-display text-4xl md:text-6xl font-extrabold tracking-tight text-white mb-4">
                            {t.pricing.title}
                        </h1>
                        <p className="text-base md:text-lg text-white/60 max-w-[600px] mx-auto">
                            {t.pricing.sub}
                        </p>
                    </div>
                </section>

                {/* PROMO BANNER - FIRST CLIENT OFFER */}
                <div className="bg-[#e8461e] text-white text-center py-3 px-[5vw]">
                    <p className="text-sm font-semibold">
                        {t.pricing.promo}
                    </p>
                </div>

                {/* PRICING TIERS */}
                <section className="px-[5vw] py-24 max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-start">

                        <div className="border border-black/10 rounded-xl p-8 relative bg-white transition-all duration-200 hover:border-[#e8461e] hover:-translate-y-1">
                            <div className="text-[11px] font-bold uppercase tracking-[1.5px] text-[#8a8a8a] mb-3">Shopify</div>
                            <div className="font-display text-xl font-extrabold mb-4">{t.p1.name}</div>
                            <div className="mb-6">
                                <span className="text-[11px] text-[#8a8a8a] block mb-0.5">{t.pricing.from}</span>
                                <span className="font-display text-2xl font-extrabold text-[#0d0d0d] tracking-tight">Rp 2,5 jt</span>
                                <span className="text-[13px] text-[#4a4a4a]">{t.pricing.per}</span>
                            </div>
                            <ul className="space-y-3 mb-8 text-[13px] text-[#4a4a4a]">
                                {[t.p1.f1, t.p1.f2, t.p1.f3, t.p1.f4, t.p1.f5, t.p1.f6].map((feat, i) => (
                                    <li key={i} className="flex gap-2 items-start before:content-['✓'] before:text-[#1a7a4a] before:font-bold before:shrink-0">{feat}</li>
                                ))}
                            </ul>
                            <a href="/#contact" className="block text-center py-3 rounded-full font-semibold text-sm border-1.5 border-black/18 text-[#0d0d0d] hover:bg-[#0d0d0d] hover:text-white transition-colors duration-200">
                                {t.pricing.btn1}
                            </a>
                        </div>

                        <div className="border-2 border-[#e8461e] rounded-xl p-8 relative bg-white transition-all duration-200 hover:-translate-y-1 shadow-md">
                            <div className="absolute top-[-13px] left-1/2 -translate-x-1/2 bg-[#e8461e] text-white text-[10px] font-bold px-4 py-1 rounded-full tracking-wider uppercase whitespace-nowrap">
                                {t.pricing.popular}
                            </div>
                            <div className="text-[11px] font-bold uppercase tracking-[1.5px] text-[#8a8a8a] mb-3 mt-1">Shopify</div>
                            <div className="font-display text-xl font-extrabold mb-4">{t.p2.name}</div>
                            <div className="mb-6">
                                <span className="text-[11px] text-[#8a8a8a] block mb-0.5">{t.pricing.from}</span>
                                <span className="font-display text-2xl font-extrabold text-[#0d0d0d] tracking-tight">Rp 6 jt</span>
                                <span className="text-[13px] text-[#4a4a4a]">{t.pricing.per}</span>
                            </div>
                            <ul className="space-y-3 mb-8 text-[13px] text-[#4a4a4a]">
                                {[t.p2.f1, t.p2.f2, t.p2.f3, t.p2.f4, t.p2.f5, t.p2.f6, t.p2.f7].map((feat, i) => (
                                    <li key={i} className="flex gap-2 items-start before:content-['✓'] before:text-[#1a7a4a] before:font-bold before:shrink-0">{feat}</li>
                                ))}
                            </ul>
                            <a href="/#contact" className="block text-center py-3 rounded-full font-semibold text-sm bg-[#e8461e] text-white border border-[#e8461e] hover:bg-[#c93a18] transition-colors duration-200">
                                {t.pricing.btn2}
                            </a>
                        </div>

                        <div className="border border-black/10 rounded-xl p-8 relative bg-white transition-all duration-200 hover:border-[#e8461e] hover:-translate-y-1">
                            <div className="text-[11px] font-bold uppercase tracking-[1.5px] text-[#8a8a8a] mb-3">Website</div>
                            <div className="font-display text-xl font-extrabold mb-4">{t.p3.name}</div>
                            <div className="mb-6">
                                <span className="text-[11px] text-[#8a8a8a] block mb-0.5">{t.pricing.from}</span>
                                <span className="font-display text-2xl font-extrabold text-[#0d0d0d] tracking-tight">Rp 3,5 jt</span>
                                <span className="text-[13px] text-[#4a4a4a]">{t.pricing.per}</span>
                            </div>
                            <ul className="space-y-3 mb-8 text-[13px] text-[#4a4a4a]">
                                {[t.p3.f1, t.p3.f2, t.p3.f3, t.p3.f4, t.p3.f5, t.p3.f6].map((feat, i) => (
                                    <li key={i} className="flex gap-2 items-start before:content-['✓'] before:text-[#1a7a4a] before:font-bold before:shrink-0">{feat}</li>
                                ))}
                            </ul>
                            <a href="/#contact" className="block text-center py-3 rounded-full font-semibold text-sm border-1.5 border-black/18 text-[#0d0d0d] hover:bg-[#0d0d0d] hover:text-white transition-colors duration-200">
                                {t.pricing.btn1}
                            </a>
                        </div>

                        <div className="border border-black/10 rounded-xl p-8 relative bg-white transition-all duration-200 hover:border-[#e8461e] hover:-translate-y-1">
                            <div className="text-[11px] font-bold uppercase tracking-[1.5px] text-[#8a8a8a] mb-3">Website</div>
                            <div className="font-display text-xl font-extrabold mb-4">{t.p4.name}</div>
                            <div className="mb-6">
                                <span className="text-[11px] text-[#8a8a8a] block mb-0.5">{t.pricing.from}</span>
                                <span className="font-display text-2xl font-extrabold text-[#0d0d0d] tracking-tight">Rp 8 jt</span>
                                <span className="text-[13px] text-[#4a4a4a]">{t.pricing.per}</span>
                            </div>
                            <ul className="space-y-3 mb-8 text-[13px] text-[#4a4a4a]">
                                {[t.p4.f1, t.p4.f2, t.p4.f3, t.p4.f4, t.p4.f5, t.p4.f6, t.p4.f7].map((feat, i) => (
                                    <li key={i} className="flex gap-2 items-start before:content-['✓'] before:text-[#1a7a4a] before:font-bold before:shrink-0">{feat}</li>
                                ))}
                            </ul>
                            <a href="/#contact" className="block text-center py-3 rounded-full font-semibold text-sm border-1.5 border-black/18 text-[#0d0d0d] hover:bg-[#0d0d0d] hover:text-white transition-colors duration-200">
                                {t.pricing.btn3}
                            </a>
                        </div>
                    </div>

                    <div className="mt-8 p-6 bg-[#f5f4f0] rounded-xl border border-black/10">
                        <p className="text-[13px] text-[#4a4a4a] leading-relaxed">{t.pricing.note}</p>
                    </div>
                </section>

                {/* ADD-ONS */}
                <section className="bg-[#f5f4f0] px-[5vw] py-24">
                    <div className="max-w-7xl mx-auto">
                        <div className="text-xs font-bold tracking-[2px] uppercase text-[#e8461e] mb-4">{t.addons.label}</div>
                        <h2 className="font-display text-3xl md:text-5xl font-extrabold tracking-tight mb-12">{t.addons.title}</h2>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            {t.addons.items.map((item, idx) => (
                                <div key={idx} className="bg-white rounded-xl p-6 border border-black/10">
                                    <h3 className="font-bold mb-2">{item.title}</h3>
                                    <p className="text-sm text-[#4a4a4a] mb-3">{item.desc}</p>
                                    <div className="text-[#e8461e] font-display font-bold">{item.price}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* PRICING FAQ */}
                <section className="px-[5vw] py-24">
                    <div className="max-w-5xl mx-auto">
                        <div className="text-xs font-bold tracking-[2px] uppercase text-[#e8461e] mb-4">{t.faq.label}</div>
                        <h2 className="font-display text-3xl md:text-5xl font-extrabold tracking-tight mb-12">
                            {t.pricingFaq.title}
                        </h2>

                        <div className="space-y-6">
                            {[t.pricingFaq.q1, t.pricingFaq.q2, t.pricingFaq.q3, t.pricingFaq.q4, t.pricingFaq.q5].map((item, idx) => (
                                <div key={idx} className="bg-[#f5f4f0] rounded-xl p-6">
                                    <h3 className="font-bold mb-2">{item.q}</h3>
                                    <p className="text-[#4a4a4a] text-sm leading-relaxed">{item.a}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* CTA */}
                <section className="bg-[#111110] text-center px-[5vw] py-28 relative overflow-hidden">
                    <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_70%_at_50%_50%,rgba(232,70,30,0.12)_0%,transparent_70%)] pointer-events-none" />
                    <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight max-w-[700px] mx-auto mb-4">{t.cta.title}</h2>
                    <p className="text-white/50 text-base md:text-lg max-w-[480px] mx-auto mb-10">{t.cta.sub}</p>

                    <div className="flex gap-4 justify-center flex-wrap">
                        <a href="mailto:hello@kitadevelopers.com" className="bg-[#e8461e] text-white px-8 py-3.5 rounded-full font-semibold text-[15px] transition-all duration-200 hover:bg-[#c93a18] hover:-translate-y-0.5">
                            hello@kitadevelopers.com
                        </a>
                    </div>
                </section>

            </div>
        </PublicLayout>
    )
}
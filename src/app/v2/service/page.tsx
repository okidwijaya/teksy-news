"use client";
import { useState } from 'react';
import Link from 'next/link';
import { Lang, translations } from '@/constanst/translationTest';
import PublicLayout from '@/components/PublicLayout';

export default function ServicesPage() {
    const [lang, setLang] = useState<Lang>('en');
    const t = translations[lang];

    return (
        <PublicLayout>
            <div className="min-h-screen bg-white text-[#0d0d0d] font-sans antialiased selection:bg-[#e8461e]/20 selection:text-[#e8461e]">

                {/* HEADER */}
                <section className="px-[5vw] py-20 bg-[#111110] relative overflow-hidden">
                    <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_70%_60%_at_80%_20%,rgba(232,70,30,0.18)_0%,transparent_60%)]" />
                    <div className="max-w-7xl mx-auto relative">
                        <div className="text-xs font-bold tracking-[2px] uppercase text-[#ff8a6e] mb-4">{t.services.label}</div>
                        <h1 className="font-display text-4xl md:text-6xl font-extrabold tracking-tight text-white max-w-[800px] mb-4">
                            {t.services.title}
                        </h1>
                        <p className="text-base md:text-lg text-white/60 max-w-[600px]">
                            {t.services.sub}
                        </p>
                    </div>
                </section>

                {/* DETAILED SERVICES */}
                <section className="px-[5vw] py-24 max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        {[
                            { icon: "🛒", bg: "bg-[#fdf0ec]", title: t.s1.title, desc: t.s1.desc, items: t.detail.d1 },
                            { icon: "📦", bg: "bg-[#edf7f2]", title: t.s2.title, desc: t.s2.desc, items: t.detail.d2 },
                            { icon: "💳", bg: "bg-[#f0f4ff]", title: t.s3.title, desc: t.s3.desc, items: t.detail.d3 },
                            { icon: "📊", bg: "bg-[#fdf0ec]", title: t.s4.title, desc: t.s4.desc, items: t.detail.d4 },
                            { icon: "🎨", bg: "bg-[#edf7f2]", title: t.s5.title, desc: t.s5.desc, items: t.detail.d5 },
                            { icon: "🧩", bg: "bg-[#f0f4ff]", title: t.s6.title, desc: t.s6.desc, items: t.detail.d6 }
                        ].map((srv, idx) => (
                            <div key={idx} className="border border-black/10 rounded-xl p-8 hover:border-[#e8461e] transition-colors duration-200">
                                <div className={`w-12 h-12 rounded-lg flex items-center justify-center text-2xl mb-5 ${srv.bg}`}>
                                    {srv.icon}
                                </div>
                                <h3 className="font-display text-xl font-bold mb-2">{srv.title}</h3>
                                <p className="text-sm text-[#4a4a4a] leading-relaxed mb-5">{srv.desc}</p>
                                <ul className="space-y-2.5">
                                    {srv.items.map((item: string, i: number) => (
                                        <li key={i} className="flex gap-2 items-start text-[13px] text-[#4a4a4a] before:content-['✓'] before:text-[#1a7a4a] before:font-bold before:shrink-0">
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </section>

                {/* CASE STUDY */}
                <section className="bg-[#111110] text-white py-24 px-[5vw]">
                    <div className="max-w-7xl mx-auto">
                        <div className="text-xs font-bold tracking-[2px] uppercase text-[#ff8a6e] mb-4">{t.case.label}</div>
                        <h2 className="font-display text-3xl md:text-5xl font-extrabold mb-12">
                            {t.case.title}
                        </h2>

                        <div className="grid lg:grid-cols-3 gap-8">
                            <div className="bg-white/5 border border-white/10 rounded-xl p-6">
                                <h3 className="font-bold text-[#ff8a6e] mb-3">{t.case.challenge}</h3>
                                <p className="text-white/60 text-sm leading-relaxed">{t.case.challengeDesc}</p>
                            </div>
                            <div className="bg-white/5 border border-white/10 rounded-xl p-6">
                                <h3 className="font-bold text-[#ff8a6e] mb-3">{t.case.solution}</h3>
                                <p className="text-white/60 text-sm leading-relaxed">{t.case.solutionDesc}</p>
                            </div>
                            <div className="bg-white/5 border border-white/10 rounded-xl p-6">
                                <h3 className="font-bold text-[#ff8a6e] mb-3">{t.case.result}</h3>
                                <p className="text-white/60 text-sm leading-relaxed">{t.case.resultDesc}</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* TECH STACK */}
                <section className="bg-[#f5f4f0] px-[5vw] py-24">
                    <div className="max-w-4xl mx-auto">
                        <div className="text-xs font-bold tracking-[2px] uppercase text-[#e8461e] mb-4">{t.stack.label}</div>
                        <h2 className="font-display text-3xl md:text-5xl font-extrabold tracking-tight mb-4">{t.stack.title}</h2>
                        <p className="text-base text-[#4a4a4a] leading-relaxed mb-10">{t.stack.sub}</p>

                        <div className="mt-10">
                            <p className="text-[11px] font-bold tracking-wider uppercase text-[#8a8a8a] mb-3">Frontend Frameworks & Core</p>
                            <div className="flex flex-wrap gap-2.5">
                                {['React.js', 'Next.js', 'TypeScript'].map((st) => (
                                    <span key={st} className="px-[18px] py-2 rounded-full text-[13px] font-semibold border border-[#e8461e]/25 bg-[#fdf0ec] text-[#e8461e] hover:bg-[#0d0d0d] hover:text-white hover:border-[#0d0d0d] transition-all duration-200 cursor-default">{st}</span>
                                ))}
                                {['Tailwind CSS', 'Redux Toolkit', 'Zustand', 'HTML5 & CSS3', 'JavaScript (ES6+)'].map((st) => (
                                    <span key={st} className="px-[18px] py-2 rounded-full text-[13px] font-semibold border border-black/18 bg-white text-[#4a4a4a] hover:bg-[#0d0d0d] hover:text-white hover:border-[#0d0d0d] transition-all duration-200 cursor-default">{st}</span>
                                ))}
                            </div>
                        </div>

                        <div className="mt-6">
                            <p className="text-[11px] font-bold tracking-wider uppercase text-[#8a8a8a] mb-3">Shopify Ecosystem</p>
                            <div className="flex flex-wrap gap-2.5">
                                {['Shopify Liquid', 'Shopify Functions', 'Remix (Shopify App)'].map((st) => (
                                    <span key={st} className="px-[18px] py-2 rounded-full text-[13px] font-semibold border border-[#e8461e]/25 bg-[#fdf0ec] text-[#e8461e] hover:bg-[#0d0d0d] hover:text-white hover:border-[#0d0d0d] transition-all duration-200 cursor-default">{st}</span>
                                ))}
                                {['GraphQL Admin API', 'REST Admin API', 'Theme App Extensions', 'Dawn / Custom Themes'].map((st) => (
                                    <span key={st} className="px-[18px] py-2 rounded-full text-[13px] font-semibold border border-black/18 bg-white text-[#4a4a4a] hover:bg-[#0d0d0d] hover:text-white hover:border-[#0d0d0d] transition-all duration-200 cursor-default">{st}</span>
                                ))}
                            </div>
                        </div>

                        <div className="mt-6">
                            <p className="text-[11px] font-bold tracking-wider uppercase text-[#8a8a8a] mb-3">Backend & Infrastructure</p>
                            <div className="flex flex-wrap gap-2.5">
                                {['Node.js', 'Express.js', 'Java (Spring Boot)', 'PostgreSQL', 'MongoDB', 'REST APIs', 'JWT Auth', 'Git & GitHub', 'Vercel / VPS'].map((st) => (
                                    <span key={st} className="px-[18px] py-2 rounded-full text-[13px] font-semibold border border-black/18 bg-white text-[#4a4a4a] hover:bg-[#0d0d0d] hover:text-white hover:border-[#0d0d0d] transition-all duration-200 cursor-default">{st}</span>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* PROCESS */}
                <section className="px-[5vw] py-24">
                    <div className="max-w-7xl mx-auto">
                        <div className="text-xs font-bold tracking-[2px] uppercase text-[#e8461e] mb-4">{t.process.label}</div>
                        <h2 className="font-display text-3xl md:text-5xl font-extrabold tracking-tight leading-none mb-4">{t.process.title}</h2>
                        <p className="text-base text-[#4a4a4a] max-w-[540px] leading-relaxed mb-14">{t.process.sub}</p>

                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-0 border-t border-b md:border-b-0 border-black/10">
                            {[
                                { num: "01", title: t.ps1.title, desc: t.ps1.desc },
                                { num: "02", title: t.ps2.title, desc: t.ps2.desc },
                                { num: "03", title: t.ps3.title, desc: t.ps3.desc },
                                { num: "04", title: t.ps4.title, desc: t.ps4.desc },
                                { num: "05", title: t.ps5.title, desc: t.ps5.desc }
                            ].map((step, idx) => (
                                <div key={idx} className="p-8 border-b sm:border-b-0 border-black/10 lg:border-r last:border-r-0">
                                    <div className="font-display text-5xl font-extrabold text-black/5 leading-none mb-3">{step.num}</div>
                                    <div className="font-bold text-[15px] mb-2">{step.title}</div>
                                    <div className="text-[13px] text-[#4a4a4a] leading-relaxed">{step.desc}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* CTA */}
                <section className="bg-[#111110] text-center px-[5vw] py-20 relative overflow-hidden">
                    <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_70%_at_50%_50%,rgba(232,70,30,0.12)_0%,transparent_70%)] pointer-events-none" />
                    <h2 className="font-display text-3xl md:text-4xl font-extrabold text-white tracking-tight max-w-[700px] mx-auto mb-6">
                        {t.cta.title}
                    </h2>
                    <div className="flex gap-4 justify-center flex-wrap">
                        <Link href="/pricing" className="bg-[#e8461e] text-white px-8 py-3.5 rounded-full font-semibold text-[15px] transition-all duration-200 hover:bg-[#c93a18] hover:-translate-y-0.5">
                            {t.pricing.viewFull || "View Pricing"}
                        </Link>
                        <a href="/#contact" className="bg-transparent text-white/80 px-8 py-3.5 rounded-full font-medium text-[15px] border border-white/20 transition-all duration-200 hover:bg-white/8 hover:text-white">
                            {t.nav.contact}
                        </a>
                    </div>
                </section>

            </div>
        </PublicLayout>
    )
}
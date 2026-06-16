"use client";
// import BannerService from '@/components/BannerService'
import { useState } from 'react';
// import PublicLayout from '@/components/PublicLayout'
// import "./../../../public/landingpage.css"
import { Lang, translations } from '@/constanst/translation';
import Navbar from '@/components/DashboardComponents/layout/Navbar';
import PublicLayout from '@/components/PublicLayout';

// import React from 'react'

export default function Page() {
    const [lang, setLang] = useState<Lang>('en');
    const t = translations[lang];

    return (
        <PublicLayout>
            {/* <BannerService /> */}
            <>
                <div className="min-h-screen bg-white text-[#0d0d0d] font-sans antialiased selection:bg-[#e8461e]/20 selection:text-[#e8461e]">

                    <div className="flex items-center justify-between px-[2vw] h-16 bg-white/92 backdrop-blur-md border-b border-black/10">
                        {/* <nav className="sticky top-0 z-50 flex items-center justify-between px-[5vw] h-16 bg-white/92 backdrop-blur-md border-b border-black/10"> */}
                        <a href="/" className="hidden font-display font-extrabold text-dd text-lg tracking-tight">
                            kita<span className="text-[#e8461e]">dev</span>
                        </a>
                        <div className="hidden md:flex items-center gap-8">
                            <a href="#services" className="text-sm font-medium text-[#4a4a4a] hover:text-[#0d0d0d] transition-colors duration-200">{t.nav.services}</a>
                            <a href="#pricing" className="text-sm font-medium text-[#4a4a4a] hover:text-[#0d0d0d] transition-colors duration-200">{t.nav.pricing}</a>
                            <a href="#hiring" className="text-sm font-medium text-[#4a4a4a] hover:text-[#0d0d0d] transition-colors duration-200">{t.nav.hiring}</a>
                            <a href="#stack" className="text-sm font-medium text-[#4a4a4a] hover:text-[#0d0d0d] transition-colors duration-200">{t.nav.stack}</a>
                            <a href="#contact" className="text-sm font-medium text-[#4a4a4a] hover:text-[#0d0d0d] transition-colors duration-200">{t.nav.contact}</a>
                        </div>
                        <div className="flex items-center gap-3">
                            <div className="flex items-center bg-[#f5f4f0] border border-black/18 rounded-full p-[3px] gap-[2px]">
                                <button
                                    onClick={() => setLang('en')}
                                    className={`px-3 py-1 rounded-full text-[11px] font-bold transition-all duration-200 tracking-wide ${lang === 'en' ? 'bg-white text-[#0d0d0d] shadow-sm' : 'bg-transparent text-[#8a8a8a]'}`}
                                >
                                    EN
                                </button>
                                <button
                                    onClick={() => setLang('id')}
                                    className={`px-3 py-1 rounded-full text-[11px] font-bold transition-all duration-200 tracking-wide ${lang === 'id' ? 'bg-white text-[#0d0d0d] shadow-sm' : 'bg-transparent text-[#8a8a8a]'}`}
                                >
                                    ID
                                </button>
                            </div>
                            <a href="#contact" className="bg-[#e8461e] text-white px-5 py-2 rounded-full text-[13px] font-semibold transition-all duration-200 hover:bg-[#c93a18] hover:-translate-y-[1px]">
                                {t.nav.cta}
                            </a>
                        </div>
                    </div>

                    <section className="min-h-[92vh] flex flex-col justify-center px-[5vw] py-16 md:py-24 relative overflow-hidden bg-[#111110]" id="home">
                        <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_70%_60%_at_80%_20%,rgba(232,70,30,0.18)_0%,transparent_60%),radial-gradient(ellipse_50%_50%_at_10%_80%,rgba(232,70,30,0.10)_0%,transparent_60%)]" />

                        <div className="inline-flex items-center gap-2 bg-[#e8461e]/15 border border-[#e8461e]/30 text-[#ff8a6e] px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase mb-6 w-fit">
                            <span className="w-[7px] height h-[7px] rounded-full bg-[#ff6b40] animate-pulse" />
                            {t.hero.badge}
                        </div>

                        <h1 className="hidden font-display text-4xl sm:text-5xl md:text-7xl font-extrabold leading-[1.05] tracking-tight text-white max-w-[900px] mb-6 animate-[fadeIn_0.7s_forwards]">
                            {t.hero.h1a}<br />
                            <em className="not-italic text-[#e8461e]">{t.hero.h1b}</em><br />
                            {t.hero.h1c}
                        </h1>
                        <h1 className="font-display text-4xl sm:text-5xl md:text-7xl font-extrabold leading-[1.05] tracking-tight text-white max-w-[1000px] mb-6">
                            Build Custom Business Systems
                            <br />
                            <span className="text-[#e8461e]">
                                That Save Time & Increase Efficiency
                            </span>
                        </h1>

                        <p className="text-lg text-white/60 max-w-[700px] mb-10">
                            We help businesses build custom dashboards,
                            inventory systems, CRM platforms,
                            warranty management solutions,
                            Shopify stores and internal tools.
                        </p>

                        <p className="text-base sm:text-lg md:text-xl text-white/60 max-w-[560px] mb-10 font-light leading-relaxed animate-[fadeIn_0.7s_0.1s_forwards] opacity-0">
                            {t.hero.sub}
                        </p>

                        <div className="flex gap-4 flex-wrap animate-[fadeIn_0.7s_0.22s_forwards] opacity-0">
                            <a href="#pricing" className="bg-[#e8461e] text-white px-8 py-3.5 rounded-full font-semibold text-[15px] transition-all duration-200 hover:bg-[#c93a18] hover:-translate-y-0.5 inline-flex items-center gap-2">
                                {t.hero.cta1}
                            </a>
                            <a href="#contact" className="bg-transparent text-white/80 px-8 py-3.5 rounded-full font-medium text-[15px] border border-white/20 transition-all duration-200 hover:bg-white/8 hover:text-white inline-flex items-center">
                                {t.hero.cta2}
                            </a>
                        </div>

                        <div className="flex gap-12 mt-16 pt-10 border-t border-white/10 flex-wrap animate-[fadeIn_0.7s_0.34s_forwards] opacity-0">
                            <div className="min-w-[120px]">
                                <div className="font-display text-3xl font-extrabold text-white leading-none">18+</div>
                                <div className="text-[13px] text-white/45 mt-1">{t.hero.stat1}</div>
                            </div>
                            <div className="min-w-[120px]">
                                <div className="font-display text-3xl font-extrabold text-white leading-none">3+</div>
                                <div className="text-[13px] text-white/45 mt-1">{t.hero.stat2}</div>
                            </div>
                            <div className="min-w-[120px]">
                                <div className="font-display text-3xl font-extrabold text-white leading-none">2</div>
                                <div className="text-[13px] text-white/45 mt-1">{t.hero.stat3}</div>
                            </div>
                        </div>
                    </section>

                    <div className="py-10 px-[5vw] bg-[#f5f4f0] border-t border-b border-black/10">
                        <p className="text-center text-[11px] font-semibold tracking-[1.5px] uppercase text-[#8a8a8a] mb-6">
                            {t.brands.label}
                        </p>
                        <div className="flex flex-wrap gap-2 md:gap-4 justify-center max-w-5xl mx-auto">
                            {["Minuman.com", "Ria Miranda", "Luxehouze", "Jiniso", "Juaraga", "Novere", "Sleep in Dreamland", "Heyglow", "Pimallow USA", "Honeyelens", "Rolling HK", "Mooi", "Aleza", "Supersport Vietnam"].map((brand) => (
                                <span key={brand} className="text-xs font-semibold text-[#4a4a4a] bg-white px-4 py-1.5 rounded-full border border-black/10 shadow-xs">
                                    {brand}
                                </span>
                            ))}
                            <span className="text-xs font-semibold text-[#4a4a4a] bg-white px-4 py-1.5 rounded-full border border-black/10 shadow-xs">
                                {t.brands.more}
                            </span>
                        </div>
                    </div>

                    <section id="services" className="px-[5vw] py-24 max-w-7xl mx-auto">
                        <div className="text-xs font-bold tracking-[2px] uppercase text-[#e8461e] mb-4">{t.services.label}</div>
                        <h2 className="font-display text-3xl md:text-5xl font-extrabold tracking-tight leading-none mb-4">{t.services.title}</h2>
                        <p className="text-base text-[#4a4a4a] max-w-[540px] leading-relaxed mb-14">{t.services.sub}</p>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border-1.5 border-black/18 rounded-xl overflow-hidden bg-black/10 gap-[1.5px]">
                            {[
                                { icon: "🛒", bg: "bg-[#fdf0ec]", title: t.s1.title, desc: t.s1.desc },
                                { icon: "⚙️", bg: "bg-[#edf7f2]", title: t.s2.title, desc: t.s2.desc },
                                { icon: "⚡", bg: "bg-[#f0f4ff]", title: t.s3.title, desc: t.s3.desc },
                                { icon: "🔌", bg: "bg-[#fdf0ec]", title: t.s4.title, desc: t.s4.desc },
                                { icon: "🎨", bg: "bg-[#edf7f2]", title: t.s5.title, desc: t.s5.desc },
                                { icon: "🧩", bg: "bg-[#f0f4ff]", title: t.s6.title, desc: t.s6.desc }
                            ].map((srv, idx) => (
                                <div key={idx} className="group relative p-8 bg-white hover:bg-[#fdf0ec] transition-colors duration-200 cursor-pointer">
                                    <div className={`w-11 h-11 rounded-lg flex items-center justify-center text-xl mb-5 ${srv.bg}`}>
                                        {srv.icon}
                                    </div>
                                    <h3 className="font-display text-lg font-bold mb-2">{srv.title}</h3>
                                    <p className="text-sm text-[#4a4a4a] leading-relaxed">{srv.desc}</p>
                                    <span className="absolute top-8 right-6 text-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 text-[#e8461e]">→</span>
                                </div>
                            ))}
                        </div>
                    </section>

                    <section id="portfolio" className="py-24 px-[5vw] bg-[#fafafa]">
                        <div className="max-w-7xl mx-auto">

                            <div className="mb-16">
                                <p className="uppercase text-[#e8461e] font-bold">
                                    Featured Projects
                                </p>

                                <h2 className="text-5xl font-bold mt-3">
                                    Business Solutions We've Built
                                </h2>
                            </div>

                            <div className="grid lg:grid-cols-3 gap-8">
                                <div className="bg-white rounded-xl p-8 border">

                                    <div className="text-sm text-[#e8461e] mb-3">
                                        Warranty Management
                                    </div>

                                    <h3 className="text-2xl font-bold mb-4">
                                        Warranty Registration Platform
                                    </h3>

                                    <p className="text-gray-600 mb-5">
                                        Product registration,
                                        warranty claim,
                                        customer tracking,
                                        admin dashboard.
                                    </p>

                                    <div className="flex flex-wrap gap-2">
                                        <span>Next.js</span>
                                        <span>PostgreSQL</span>
                                        <span>Supabase</span>
                                    </div>

                                </div>

                                <div className="bg-white rounded-xl p-8 border">

                                    <div className="text-sm text-[#e8461e] mb-3">
                                        ERP System
                                    </div>

                                    <h3 className="text-2xl font-bold mb-4">
                                        Inventory & Order Management
                                    </h3>

                                    <p className="text-gray-600 mb-5">
                                        Product stock,
                                        purchase orders,
                                        sales orders,
                                        inventory tracking.
                                    </p>

                                    <div className="flex flex-wrap gap-2">
                                        <span>Next.js</span>
                                        <span>PostgreSQL</span>
                                        <span>Docker</span>
                                    </div>

                                </div>

                                <div className="bg-white rounded-xl p-8 border">

                                    <div className="text-sm text-[#e8461e] mb-3">
                                        CRM
                                    </div>

                                    <h3 className="text-2xl font-bold mb-4">
                                        Customer Relationship Platform
                                    </h3>

                                    <p className="text-gray-600 mb-5">
                                        Lead management,
                                        follow ups,
                                        customer history,
                                        sales pipeline.
                                    </p>

                                    <div className="flex flex-wrap gap-2">
                                        <span>React</span>
                                        <span>Node.js</span>
                                        <span>PostgreSQL</span>
                                    </div>

                                </div>

                            </div>
                        </div>
                    </section>

                    <section id='studyCase' className="bg-[#111110] text-white py-24 px-[5vw] hidden">
                        <div className="max-w-7xl mx-auto">
                            <h2 className="text-5xl font-bold mb-12">
                                Example Case Study
                            </h2>

                            <div className="grid lg:grid-cols-3 gap-8">

                                <div>
                                    <h3 className="font-bold text-[#e8461e]">
                                        Challenge
                                    </h3>

                                    <p className="mt-3 text-white/60">
                                        Customers had difficulty
                                        registering warranties
                                        and tracking claims.
                                    </p>
                                </div>

                                <div>
                                    <h3 className="font-bold text-[#e8461e]">
                                        Solution
                                    </h3>

                                    <p className="mt-3 text-white/60">
                                        Built a centralized warranty
                                        registration and claim platform.
                                    </p>
                                </div>

                                <div>
                                    <h3 className="font-bold text-[#e8461e]">
                                        Result
                                    </h3>

                                    <p className="mt-3 text-white/60">
                                        Faster registration process,
                                        easier claim tracking,
                                        reduced support workload.
                                    </p>
                                </div>

                            </div>
                        </div>
                    </section>

                    <section id="trustBar" className="bg-[#f5f4f0] py-10 **:hidden">
                        <div className="max-w-7xl mx-auto px-[5vw]">
                            <div className="grid md:grid-cols-4 gap-6">

                                <div className="bg-white rounded-xl p-6">
                                    <h3 className="text-4xl font-bold">3.5+</h3>
                                    <p>Years Experience</p>
                                </div>

                                <div className="bg-white rounded-xl p-6">
                                    <h3 className="text-4xl font-bold">18+</h3>
                                    <p>Business Features Built</p>
                                </div>

                                <div className="bg-white rounded-xl p-6">
                                    <h3 className="text-4xl font-bold">3</h3>
                                    <p>Companies Worked With</p>
                                </div>

                                <div className="bg-white rounded-xl p-6">
                                    <h3 className="text-4xl font-bold">100%</h3>
                                    <p>Remote Collaboration</p>
                                </div>

                            </div>
                        </div>
                    </section>

                    <section id="why" className="bg-[#111110] text-white px-[5vw] py-24">
                        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                            <div>
                                <div className="text-xs font-bold tracking-[2px] uppercase text-[#ff8a6e] mb-4">{t.why.label}</div>
                                <h2 className="font-display text-3xl md:text-5xl font-extrabold tracking-tight leading-tight mb-4 text-white">{t.why.title}</h2>
                                <p className="text-base text-white/55 max-w-[540px] leading-relaxed">{t.why.sub}</p>
                            </div>
                            <div className="space-y-6">
                                {[
                                    { num: "01", title: t.w1.title, desc: t.w1.desc },
                                    { num: "02", title: t.w2.title, desc: t.w2.desc },
                                    { num: "03", title: t.w3.title, desc: t.w3.desc },
                                    { num: "04", title: t.w4.title, desc: t.w4.desc }
                                ].map((pt) => (
                                    <div key={pt.num} className="flex gap-4 items-start">
                                        <span className="font-display text-xs font-extrabold text-[#e8461e] min-w-[28px] mt-1 tracking-wider">{pt.num}</span>
                                        <div>
                                            <h4 className="font-semibold text-white mb-1">{pt.title}</h4>
                                            <p className="text-sm text-white/50 leading-relaxed">{pt.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="max-w-7xl mx-auto mt-16">
                            <p className="text-[11px] tracking-[1.5px] uppercase text-white/35 mb-5">{t.why.exp}</p>
                            <div className="flex flex-col gap-4">
                                <div className="bg-white/5 border border-white/10 rounded-xl p-6 flex flex-wrap items-center gap-4">
                                    <div className="w-2.5 h-2.5 rounded-full bg-[#e8461e] shrink-0" />
                                    <div>
                                        <div className="font-semibold text-[15px] text-white">{t.exp1.role}</div>
                                        <div className="text-sm text-white/45 mt-0.5">Bank Raya (PT. Bank Raya Indonesia)</div>
                                    </div>
                                    <div className="md:ml-auto text-xs text-white/35 font-medium">{t.exp1.year}</div>
                                </div>
                                <div className="bg-white/5 border border-white/10 rounded-xl p-6 flex flex-wrap items-center gap-4">
                                    <div className="w-2.5 h-2.5 rounded-full bg-white/30 shrink-0" />
                                    <div>
                                        <div className="font-semibold text-[15px] text-white">{t.exp2.role}</div>
                                        <div className="text-sm text-white/45 mt-0.5">Expatify (PT. Semesta Kaiser Pertama)</div>
                                    </div>
                                    <div className="md:ml-auto text-xs text-white/35 font-medium">2022 – 2024</div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section id="pricing" className="px-[5vw] py-24 max-w-7xl mx-auto">
                        <div className="text-xs font-bold tracking-[2px] uppercase text-[#e8461e] mb-4">{t.pricing.label}</div>
                        <h2 className="font-display text-3xl md:text-5xl font-extrabold tracking-tight leading-none mb-4">{t.pricing.title}</h2>
                        <p className="text-base text-[#4a4a4a] max-w-[540px] leading-relaxed mb-14">{t.pricing.sub}</p>

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
                                <a href="#contact" className="block text-center py-3 rounded-full font-semibold text-sm border-1.5 border-black/18 text-[#0d0d0d] hover:bg-[#0d0d0d] hover:text-white transition-colors duration-200">
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
                                <a href="#contact" className="block text-center py-3 rounded-full font-semibold text-sm bg-[#e8461e] text-white border border-[#e8461e] hover:bg-[#c93a18] transition-colors duration-200">
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
                                <a href="#contact" className="block text-center py-3 rounded-full font-semibold text-sm border-1.5 border-black/18 text-[#0d0d0d] hover:bg-[#0d0d0d] hover:text-white transition-colors duration-200">
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
                                <a href="#contact" className="block text-center py-3 rounded-full font-semibold text-sm border-1.5 border-black/18 text-[#0d0d0d] hover:bg-[#0d0d0d] hover:text-white transition-colors duration-200">
                                    {t.pricing.btn3}
                                </a>
                            </div>
                        </div>

                        <div className="mt-8 p-6 bg-[#f5f4f0] rounded-xl border border-black/10">
                            <p className="text-[13px] text-[#4a4a4a] className leading-relaxed">{t.pricing.note}</p>
                        </div>
                    </section>

                    <section id="process" className="bg-[#f5f4f0] px-[5vw] py-24">
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

                    <section id="hiring" className="bg-[#e8461e] text-white px-[5vw] py-24 hidden">
                        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                            <div>
                                <div className="text-xs font-bold tracking-[2px] uppercase text-white/60 mb-4">{t.hiring.label}</div>
                                <h2 className="font-display text-3xl md:text-5xl font-extrabold tracking-tight leading-tight mb-4 text-white">{t.hiring.title}</h2>
                                <p className="text-base text-white/70 max-w-[540px] leading-relaxed mb-6">{t.hiring.sub}</p>

                                <div className="bg-white/15 border border-white/25 rounded-xl p-6 mt-6">
                                    <div className="text-[11px] tracking-wider uppercase text-white/60 mb-2">{t.hiring.salaryLabel}</div>
                                    <div className="font-display text-3xl font-extrabold">Rp 10.600.000 / <span className="text-lg font-normal">{t.hiring.month}</span></div>
                                    <div className="text-xs text-white/60 mt-1">{t.hiring.salaryNote}</div>
                                </div>
                                <a href="mailto:hello@kitadevelopers.com" className="bg-white text-[#e8461e] px-8 py-3.5 rounded-full font-bold text-[15px] transition-all duration-200 hover:bg-white/90 hover:-translate-y-0.5 inline-block mt-6">
                                    {t.hiring.cv}
                                </a>
                            </div>

                            <div className="space-y-4">
                                <div className="flex items-center gap-4 p-4 bg-white/10 rounded-lg">
                                    <span className="text-xl">💻</span>
                                    <span className="text-sm font-medium">{t.hf1}</span>
                                </div>
                                <div className="flex items-center gap-4 p-4 bg-white/10 rounded-lg">
                                    <span className="text-xl">🛒</span>
                                    <span className="text-sm font-medium">{t.hf2}</span>
                                </div>
                                <div className="flex items-center gap-4 p-4 bg-white/10 rounded-lg">
                                    <span className="text-xl">🔐</span>
                                    <span className="text-sm font-medium">{t.hf3}</span>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section id="stack" className="bg-[#f5f4f0] px-[5vw] py-24">
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
                                    {['Node.js', 'Express.js', 'PostgreSQL', 'MongoDB', 'REST APIs', 'JWT Auth', 'Git & GitHub', 'Vercel / VPS'].map((st) => (
                                        <span key={st} className="px-[18px] py-2 rounded-full text-[13px] font-semibold border border-black/18 bg-white text-[#4a4a4a] hover:bg-[#0d0d0d] hover:text-white hover:border-[#0d0d0d] transition-all duration-200 cursor-default">{st}</span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </section>

                    <section id="faq" className="py-24 px-[5vw]">
                        <div className="max-w-5xl mx-auto">

                            <h2 className="text-5xl font-bold mb-12">
                                Frequently Asked Questions
                            </h2>

                            <div className="space-y-6">

                                <div>
                                    <h3 className="font-bold">
                                        How long does development take?
                                    </h3>

                                    <p>
                                        Usually 2–8 weeks depending
                                        on project complexity.
                                    </p>
                                </div>

                                <div>
                                    <h3 className="font-bold">
                                        Do you provide source code?
                                    </h3>

                                    <p>
                                        Yes, source code ownership
                                        can be transferred.
                                    </p>
                                </div>

                                <div>
                                    <h3 className="font-bold">
                                        Can you work with existing systems?
                                    </h3>

                                    <p>
                                        Yes. We can integrate
                                        with existing software and APIs.
                                    </p>
                                </div>

                            </div>

                        </div>
                    </section>

                    <section id="contact" className="bg-[#111110] text-center px-[5vw] py-28 relative overflow-hidden">
                        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_70%_at_50%_50%,rgba(232,70,30,0.12)_0%,transparent_70%)] pointer-events-none" />
                        <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight max-w-[700px] mx-auto mb-4">{t.cta.title}</h2>
                        <p className="text-white/50 text-base md:text-lg max-w-[480px] mx-auto mb-10">{t.cta.sub}</p>

                        <div className="flex gap-4 justify-center flex-wrap">
                            <a href="mailto:hello@kitadevelopers.com" className="bg-[#e8461e] text-white px-8 py-3.5 rounded-full font-semibold text-[15px] transition-all duration-200 hover:bg-[#c93a18] hover:-translate-y-0.5">
                                hello@kitadevelopers.com
                            </a>
                        </div>

                        <div className="flex gap-4 justify-center flex-wrap mt-6">
                            <a href="#" className="inline-flex items-center gap-2 bg-white/7 border border-white/15 text-white/70 px-5 py-2.5 rounded-full text-[13px] transition-all duration-200 hover:bg-white/12 hover:text-white">
                                WhatsApp/Telegram
                            </a>
                            <a href="#" className="inline-flex items-center gap-2 bg-white/7 border border-white/15 text-white/70 px-5 py-2.5 rounded-full text-[13px] transition-all duration-200 hover:bg-white/12 hover:text-white">
                                LinkedIn Profile
                            </a>
                        </div>
                    </section>

                    <footer className="hidden border-t border-black/10 px-[5vw] py-8 flex-wrap justify-between items-center gap-4">
                        <div className="font-display font-extrabold text-base text-[#0d0d0d]">
                            kita<span className="text-[#e8461e]">dev</span>
                        </div>
                        <p className="text-xs text-[#8a8a8a]">
                            &copy; {new Date().getFullYear()} KitaDevelopers. All rights reserved.
                        </p>
                    </footer>

                </div>
            </>
        </PublicLayout>

    )
}
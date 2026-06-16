"use client";
import { useState } from 'react';
import Link from 'next/link';
import { Lang, translations } from '@/constanst/translation';
import { templates, templateCategories, TemplateCategory } from '@/constanst/template';
import PublicLayout from '@/components/PublicLayout';

export default function Page() {
    const [lang, setLang] = useState<Lang>('en');
    const [filter, setFilter] = useState<TemplateCategory | "all">("all");
    const t = translations[lang];

    const filtered = filter === "all" ? templates : templates.filter(tpl => tpl.category === filter);

    return (
        <PublicLayout>
            <div className="min-h-screen bg-white text-[#0d0d0d] font-sans antialiased selection:bg-[#e8461e]/20 selection:text-[#e8461e]">

                {/* HEADER */}
                <section className="px-[5vw] py-20 bg-[#111110] relative overflow-hidden">
                    <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_70%_60%_at_80%_20%,rgba(232,70,30,0.18)_0%,transparent_60%)]" />
                    <div className="max-w-7xl mx-auto relative">
                        <div className="text-xs font-bold tracking-[2px] uppercase text-[#ff8a6e] mb-4">Templates</div>
                        <h1 className="font-display text-4xl md:text-6xl font-extrabold tracking-tight text-white max-w-[800px] mb-4">
                            Ready-to-Use Templates
                        </h1>
                        <p className="text-base md:text-lg text-white/60 max-w-[600px]">
                            Pre-built Shopify themes, landing pages, dashboards, and more — buy as-is or get it customized to your brand.
                        </p>
                    </div>
                </section>

                {/* CATEGORY OVERVIEW */}
                <section className="px-[5vw] py-14 max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-4">
                        {[{ key: "all" as const, label: "All Templates", desc: "Browse everything" }, ...templateCategories].map((c) => (
                            <button
                                key={c.key}
                                onClick={() => setFilter(c.key)}
                                className={`text-left p-5 rounded-xl border transition-all duration-200 ${
                                    filter === c.key
                                        ? "bg-[#e8461e] text-white border-[#e8461e]"
                                        : "bg-white text-[#0d0d0d] border-black/10 hover:border-[#e8461e]"
                                }`}
                            >
                                <div className="font-bold text-sm mb-1">{c.label}</div>
                                <div className={`text-[12px] leading-relaxed ${filter === c.key ? "text-white/80" : "text-[#8a8a8a]"}`}>{c.desc}</div>
                            </button>
                        ))}
                    </div>
                </section>

                {/* TEMPLATE GRID */}
                <section className="px-[5vw] pb-24 max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {filtered.map((tpl) => (
                            <Link
                                key={tpl.slug}
                                href={`/v2/template/${tpl.slug}`}
                                className="group bg-white rounded-xl border border-black/10 overflow-hidden hover:border-[#e8461e] hover:-translate-y-1 transition-all duration-200"
                            >
                                <div className="aspect-[16/10] bg-[#f5f4f0] flex items-center justify-center text-5xl relative overflow-hidden">
                                    {tpl.thumbnail ? (
                                        <img src={tpl.thumbnail} alt={tpl.title} className="w-full h-full object-cover" />
                                    ) : (
                                        <span>{tpl.icon}</span>
                                    )}
                                </div>
                                <div className="p-6">
                                    <div className="text-xs font-semibold text-[#e8461e] mb-2">{tpl.tag}</div>
                                    <h3 className="font-display text-lg font-bold mb-2 group-hover:text-[#e8461e] transition-colors duration-200">
                                        {tpl.title}
                                    </h3>
                                    <p className="text-sm text-[#4a4a4a] leading-relaxed mb-4 line-clamp-2">
                                        {tpl.description}
                                    </p>
                                    <div className="flex items-center justify-between">
                                        <div className="flex flex-wrap gap-2">
                                            {tpl.stack.slice(0, 2).map((s) => (
                                                <span key={s} className="text-[11px] font-semibold text-[#4a4a4a] bg-[#f5f4f0] px-2.5 py-1 rounded-full">{s}</span>
                                            ))}
                                        </div>
                                        <div className="font-display font-bold text-[#0d0d0d]">{tpl.price}</div>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </section>

                {/* CUSTOMIZATION CTA */}
                <section className="bg-[#f5f4f0] px-[5vw] py-20">
                    <div className="max-w-5xl mx-auto text-center">
                        <h2 className="font-display text-2xl md:text-4xl font-extrabold tracking-tight mb-4">
                            Need it tailored to your brand?
                        </h2>
                        <p className="text-[#4a4a4a] max-w-[540px] mx-auto mb-8 leading-relaxed">
                            Every template can be customized — colors, content, branding, and feature additions. Buy a template as a starting point, then I'll adapt it to your business.
                        </p>
                        <div className="flex gap-4 justify-center flex-wrap">
                            <a href="/#contact" className="bg-[#e8461e] text-white px-8 py-3.5 rounded-full font-semibold text-[15px] transition-all duration-200 hover:bg-[#c93a18] hover:-translate-y-0.5">
                                Request Customization
                            </a>
                            <Link href="/pricing" className="bg-white text-[#0d0d0d] px-8 py-3.5 rounded-full font-medium text-[15px] border border-black/18 transition-all duration-200 hover:bg-[#0d0d0d] hover:text-white">
                                View Pricing
                            </Link>
                        </div>
                    </div>
                </section>

            </div>
        </PublicLayout>
    )
}
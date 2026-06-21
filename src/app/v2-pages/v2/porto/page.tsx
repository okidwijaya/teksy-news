"use client";
import { useState } from 'react';
import Link from 'next/link';
import { Lang, translations } from '@/constanst/translationTest';
import { projects, Category } from '@/constanst/projects';
import PublicLayout from '@/components/PublicLayout';

const categories: { key: Category | "all"; label: string }[] = [
    { key: "all", label: "All" },
    { key: "ecommerce", label: "Shopify / E-commerce" },
    { key: "erp", label: "ERP / Inventory / POS" },
    { key: "webapp", label: "Web Apps / Dashboards" },
    { key: "mobile", label: "Mobile" },
    { key: "experience", label: "Work Experience" },
];

export default function Page() {
    const [lang, setLang] = useState<Lang>('en');
    const [filter, setFilter] = useState<Category | "all">("all");
    const t = translations[lang];

    const filtered = filter === "all" ? projects : projects.filter(p => p.category === filter);

    return (
        <PublicLayout>
            <div className="min-h-screen bg-white text-[#0d0d0d] font-sans antialiased selection:bg-[#e8461e]/20 selection:text-[#e8461e]">


                {/* HEADER */}
                <section className="px-[5vw] py-20 bg-[#111110] relative overflow-hidden">
                    <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_70%_60%_at_80%_20%,rgba(232,70,30,0.18)_0%,transparent_60%)]" />
                    <div className="max-w-7xl mx-auto relative">
                        <div className="text-xs font-bold tracking-[2px] uppercase text-[#ff8a6e] mb-4">Portfolio</div>
                        <h1 className="font-display text-4xl md:text-6xl font-extrabold tracking-tight text-white max-w-[800px] mb-4">
                            Projects & Experience
                        </h1>
                        <p className="text-base md:text-lg text-white/60 max-w-[600px]">
                            A collection of platforms I've built and companies I've worked with — from Shopify stores to enterprise dashboards.
                        </p>
                    </div>
                </section>

                {/* FILTER TABS */}
                <section className="px-[5vw] pt-10 max-w-7xl mx-auto">
                    <div className="flex flex-wrap gap-2.5">
                        {categories.map((c) => (
                            <button
                                key={c.key}
                                onClick={() => setFilter(c.key)}
                                className={`px-5 py-2 rounded-full text-[13px] font-semibold border transition-all duration-200 ${filter === c.key
                                        ? "bg-[#e8461e] text-white border-[#e8461e]"
                                        : "bg-white text-[#4a4a4a] border-black/18 hover:border-[#e8461e] hover:text-[#e8461e]"
                                    }`}
                            >
                                {c.label}
                            </button>
                        ))}
                    </div>
                </section>

                {/* PROJECT GRID */}
                <section className="px-[5vw] py-14 max-w-7xl mx-auto">
                    {filtered.length === 0 ? (
                        <div className="text-center py-20 text-[#8a8a8a] text-sm">
                            No projects in this category yet.
                        </div>
                    ) : (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {filtered.map((proj) => (
                                <Link
                                    key={proj.slug}
                                    href={`/v2/porto/${proj.slug}`}
                                    className="group bg-white rounded-xl border border-black/10 overflow-hidden hover:border-[#e8461e] hover:-translate-y-1 transition-all duration-200"
                                >
                                    <div className="aspect-[16/10] bg-[#f5f4f0] flex items-center justify-center text-4xl relative overflow-hidden">
                                        {proj.thumbnail ? (
                                            <img src={proj.thumbnail} alt={proj.title} className="w-full h-full object-cover" />
                                        ) : (
                                            <span>{proj.icon}</span>
                                        )}
                                        {proj.category === "experience" && (
                                            <span className="absolute top-3 left-3 bg-[#1a7a4a] text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                                                Work Experience
                                            </span>
                                        )}
                                    </div>
                                    <div className="p-6">
                                        <div className="text-xs font-semibold text-[#e8461e] mb-2">{proj.tag}</div>
                                        <h3 className="font-display text-lg font-bold mb-2 group-hover:text-[#e8461e] transition-colors duration-200">
                                            {proj.title}
                                        </h3>
                                        <p className="text-sm text-[#4a4a4a] leading-relaxed mb-4 line-clamp-2">
                                            {proj.summary}
                                        </p>
                                        <div className="flex flex-wrap gap-2">
                                            {proj.stack.slice(0, 3).map((s) => (
                                                <span key={s} className="text-[11px] font-semibold text-[#4a4a4a] bg-[#f5f4f0] px-2.5 py-1 rounded-full">{s}</span>
                                            ))}
                                            {proj.stack.length > 3 && (
                                                <span className="text-[11px] font-semibold text-[#8a8a8a] bg-[#f5f4f0] px-2.5 py-1 rounded-full">+{proj.stack.length - 3}</span>
                                            )}
                                        </div>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    )}
                </section>

                {/* CTA */}
                <section className="bg-[#111110] text-center px-[5vw] py-20 relative overflow-hidden">
                    <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_70%_at_50%_50%,rgba(232,70,30,0.12)_0%,transparent_70%)] pointer-events-none" />
                    <h2 className="font-display text-3xl md:text-4xl font-extrabold text-white tracking-tight max-w-[700px] mx-auto mb-6">
                        {t.cta.title}
                    </h2>
                    <div className="flex gap-4 justify-center flex-wrap">
                        <a href="/#contact" className="bg-[#e8461e] text-white px-8 py-3.5 rounded-full font-semibold text-[15px] transition-all duration-200 hover:bg-[#c93a18] hover:-translate-y-0.5">
                            {t.nav.cta}
                        </a>
                    </div>
                </section>

            </div>
        </PublicLayout>
    )
}
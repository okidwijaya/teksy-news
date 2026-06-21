"use client";
import { useState } from 'react';
import { useParams, notFound } from 'next/navigation';
import Link from 'next/link';
import { Lang, translations } from '@/constanst/translation';
import { templates } from '@/constanst/template';
import PublicLayout from '@/components/PublicLayout';

export default function TemplateDetailPage() {
    const [lang, setLang] = useState<Lang>('en');
    const params = useParams();
    const t = translations[lang];

    const template = templates.find(tp => tp.slug === params.slug);

    if (!template) {
        return notFound();
    }

    const related = templates.filter(tp => tp.category === template.category && tp.slug !== template.slug).slice(0, 3);

    return (
        <PublicLayout>
            <div className="min-h-screen bg-white text-[#0d0d0d] font-sans antialiased selection:bg-[#e8461e]/20 selection:text-[#e8461e]">

                {/* HEADER */}
                <section className="px-[5vw] py-16 bg-[#111110] relative overflow-hidden">
                    <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_70%_60%_at_80%_20%,rgba(232,70,30,0.18)_0%,transparent_60%)]" />
                    <div className="max-w-5xl mx-auto relative">
                        <Link href="/templates" className="inline-flex items-center gap-2 text-white/50 text-sm mb-6 hover:text-white transition-colors duration-200">
                            ← Back to Templates
                        </Link>
                        <div className="text-xs font-bold tracking-[2px] uppercase text-[#ff8a6e] mb-4">{template.tag}</div>
                        <h1 className="font-display text-3xl md:text-5xl font-extrabold tracking-tight text-white mb-4">
                            {template.title}
                        </h1>
                        <p className="text-white/60 max-w-[600px] mb-6 leading-relaxed">{template.description}</p>
                        <div className="flex flex-wrap gap-2">
                            {template.stack.map((s) => (
                                <span key={s} className="text-xs font-semibold text-white/80 bg-white/10 border border-white/15 px-3 py-1.5 rounded-full">{s}</span>
                            ))}
                        </div>
                    </div>
                </section>

                {/* PREVIEW IMAGE PLACEHOLDER */}
                <section className="px-[5vw] -mt-8 relative z-10">
                    <div className="max-w-5xl mx-auto">
                        <div className="aspect-[16/9] bg-[#f5f4f0] border border-black/10 rounded-xl flex items-center justify-center text-7xl shadow-lg overflow-hidden">
                            {template.preview ? (
                                <img src={template.preview} alt={template.title} className="w-full h-full object-cover" />
                            ) : (
                                <span>{template.icon}</span>
                            )}
                        </div>
                    </div>
                </section>

                {/* CONTENT */}
                <section className="px-[5vw] py-16 max-w-5xl mx-auto">
                    <div className="grid lg:grid-cols-3 gap-10">

                        <div className="lg:col-span-2">
                            <h2 className="font-display text-2xl font-bold mb-4">What's Included</h2>
                            <ul className="grid sm:grid-cols-2 gap-3 mb-10">
                                {template.features.map((f, i) => (
                                    <li key={i} className="flex gap-2 items-start text-sm text-[#4a4a4a] before:content-['✓'] before:text-[#1a7a4a] before:font-bold before:shrink-0 bg-[#f5f4f0] rounded-lg p-4">
                                        {f}
                                    </li>
                                ))}
                            </ul>

                            <h2 className="font-display text-2xl font-bold mb-4">Customization Options</h2>
                            <p className="text-[#4a4a4a] leading-relaxed mb-4">
                                This template comes with the structure and components shown above. If you'd like it customized — your branding, colors, content, additional sections, or backend integration — I can adapt it for you.
                            </p>
                            <ul className="space-y-2 text-sm text-[#4a4a4a]">
                                <li className="flex gap-2 items-start before:content-['•'] before:text-[#e8461e] before:font-bold before:shrink-0">Brand colors, fonts & logo integration</li>
                                <li className="flex gap-2 items-start before:content-['•'] before:text-[#e8461e] before:font-bold before:shrink-0">Content & copy tailored to your business</li>
                                <li className="flex gap-2 items-start before:content-['•'] before:text-[#e8461e] before:font-bold before:shrink-0">Additional sections or pages</li>
                                <li className="flex gap-2 items-start before:content-['•'] before:text-[#e8461e] before:font-bold before:shrink-0">Backend / API / CMS integration</li>
                            </ul>
                        </div>

                        {/* PRICING SIDEBAR */}
                        <div>
                            <div className="bg-white border border-black/10 rounded-xl p-6 sticky top-24">
                                <div className="text-[11px] text-[#8a8a8a] uppercase tracking-wider mb-1">Starting Price</div>
                                <div className="font-display text-3xl font-extrabold mb-1">{template.price}</div>
                                {template.priceNote && (
                                    <div className="text-[12px] text-[#8a8a8a] mb-6">{template.priceNote}</div>
                                )}
                                {!template.priceNote && <div className="mb-6" />}

                                <a href="/#contact" className="block text-center py-3 rounded-full font-semibold text-sm bg-[#e8461e] text-white hover:bg-[#c93a18] transition-colors duration-200 mb-3">
                                    Get This Template
                                </a>
                                {template.demoUrl && (
                                    <a href={template.demoUrl} target="_blank" rel="noopener noreferrer" className="block text-center py-3 rounded-full font-semibold text-sm border border-black/18 text-[#0d0d0d] hover:bg-[#0d0d0d] hover:text-white transition-colors duration-200">
                                        Live Demo →
                                    </a>
                                )}

                                <div className="mt-6 pt-6 border-t border-black/10 text-[12px] text-[#8a8a8a] leading-relaxed">
                                    Source code ownership transferred on full payment. Customization quoted separately based on scope.
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* RELATED TEMPLATES */}
                {related.length > 0 && (
                    <section className="bg-[#f5f4f0] px-[5vw] py-16">
                        <div className="max-w-5xl mx-auto">
                            <h2 className="font-display text-2xl font-bold mb-8">More like this</h2>
                            <div className="grid md:grid-cols-3 gap-6">
                                {related.map((tpl) => (
                                    <Link
                                        key={tpl.slug}
                                        href={`/templates/${tpl.slug}`}
                                        className="group bg-white rounded-xl border border-black/10 overflow-hidden hover:border-[#e8461e] hover:-translate-y-1 transition-all duration-200 p-6"
                                    >
                                        <div className="text-xs font-semibold text-[#e8461e] mb-2">{tpl.tag}</div>
                                        <h3 className="font-display text-base font-bold mb-2 group-hover:text-[#e8461e] transition-colors duration-200">
                                            {tpl.title}
                                        </h3>
                                        <p className="text-sm text-[#4a4a4a] leading-relaxed line-clamp-2 mb-3">
                                            {tpl.description}
                                        </p>
                                        <div className="font-display font-bold text-sm">{tpl.price}</div>
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </section>
                )}

                {/* CTA */}
                <section className="bg-[#111110] text-center px-[5vw] py-20 relative overflow-hidden">
                    <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_70%_at_50%_50%,rgba(232,70,30,0.12)_0%,transparent_70%)] pointer-events-none" />
                    <h2 className="font-display text-3xl md:text-4xl font-extrabold text-white tracking-tight max-w-[700px] mx-auto mb-6">
                        Interested in this template?
                    </h2>
                    <div className="flex gap-4 justify-center flex-wrap">
                        <a href="/#contact" className="bg-[#e8461e] text-white px-8 py-3.5 rounded-full font-semibold text-[15px] transition-all duration-200 hover:bg-[#c93a18] hover:-translate-y-0.5">
                            {t.nav.cta}
                        </a>
                        <Link href="/templates" className="bg-transparent text-white/80 px-8 py-3.5 rounded-full font-medium text-[15px] border border-white/20 transition-all duration-200 hover:bg-white/8 hover:text-white">
                            ← All Templates
                        </Link>
                    </div>
                </section>

            </div>
        </PublicLayout>
    )
}
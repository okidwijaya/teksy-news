"use client";
import { useState } from 'react';
import Link from 'next/link';
import { Lang, translations } from '@/constanst/translationTest';
import PublicLayout from '@/components/PublicLayout';
// import ContactForm from '@/components/v2/ContactForm/ContactForm';

export default function Page() {
    const [lang, setLang] = useState<Lang>('en');
    const t = translations[lang];

    return (
        <PublicLayout>
            <div className="min-h-screen bg-white text-[#0d0d0d] font-sans antialiased selection:bg-[#e8461e]/20 selection:text-[#e8461e]">

                {/* HERO */}
                <section className="min-h-[88vh] flex flex-col justify-center px-[5vw] py-16 md:py-24 relative overflow-hidden bg-[#111110]" id="home">
                    <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_70%_60%_at_80%_20%,rgba(232,70,30,0.18)_0%,transparent_60%),radial-gradient(ellipse_50%_50%_at_10%_80%,rgba(232,70,30,0.10)_0%,transparent_60%)]" />

                    <div className="inline-flex items-center gap-2 bg-[#e8461e]/15 border border-[#e8461e]/30 text-[#ff8a6e] px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase mb-6 w-fit">
                        <span className="w-[7px] h-[7px] rounded-full bg-[#ff6b40] animate-pulse" />
                        {t.hero.badge}
                    </div>

                    <h1 className="font-display text-4xl sm:text-5xl md:text-7xl font-extrabold leading-[1.05] tracking-tight text-white max-w-[1000px] mb-6">
                        {t.hero.h1a}
                        <br />
                        <span className="text-[#e8461e]">{t.hero.h1b}</span>
                    </h1>

                    <p className="text-base sm:text-lg md:text-xl text-white/60 max-w-[600px] mb-10 font-light leading-relaxed">
                        {t.hero.sub}
                    </p>

                    <div className="flex gap-4 flex-wrap">
                        <a href="#contact" className="bg-[#e8461e] text-white px-8 py-3.5 rounded-full font-semibold text-[15px] transition-all duration-200 hover:bg-[#c93a18] hover:-translate-y-0.5 inline-flex items-center gap-2">
                            {t.hero.cta1}
                        </a>
                        <Link href="/services" className="bg-transparent text-white/80 px-8 py-3.5 rounded-full font-medium text-[15px] border border-white/20 transition-all duration-200 hover:bg-white/8 hover:text-white inline-flex items-center">
                            {t.hero.cta2}
                        </Link>
                    </div>

                    <div className="flex gap-12 mt-16 pt-10 border-t border-white/10 flex-wrap">
                        <div className="min-w-[120px]">
                            <div className="font-display text-3xl font-extrabold text-white leading-none">3.5+</div>
                            <div className="text-[13px] text-white/45 mt-1">{t.hero.stat1}</div>
                        </div>
                        <div className="min-w-[120px]">
                            <div className="font-display text-3xl font-extrabold text-white leading-none">18+</div>
                            <div className="text-[13px] text-white/45 mt-1">{t.hero.stat2}</div>
                        </div>
                        <div className="min-w-[120px]">
                            <div className="font-display text-3xl font-extrabold text-white leading-none">100%</div>
                            <div className="text-[13px] text-white/45 mt-1">{t.hero.stat3}</div>
                        </div>
                    </div>
                </section>

                {/* CURRENT ROLE / TRUST BAR */}
                <div className="py-10 px-[5vw] bg-[#f5f4f0] border-t border-b border-black/10">
                    <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-6 text-center md:text-left">
                        <div className="w-3 h-3 rounded-full bg-[#1a7a4a] shrink-0 animate-pulse" />
                        <p className="text-sm md:text-base text-[#4a4a4a]">
                            <span className="font-semibold text-[#0d0d0d]">{t.trust.title}</span>
                            {" "}
                            {t.trust.desc}
                        </p>
                    </div>
                </div>

                {/* WHAT I BUILD */}
                <section id="work" className="px-[5vw] py-24 max-w-7xl mx-auto">
                    <div className="text-xs font-bold tracking-[2px] uppercase text-[#e8461e] mb-4">{t.services.label}</div>
                    <h2 className="font-display text-3xl md:text-5xl font-extrabold tracking-tight leading-none mb-4">{t.services.title}</h2>
                    <p className="text-base text-[#4a4a4a] max-w-[540px] leading-relaxed mb-14">{t.services.sub}</p>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 border-1.5 border-black/18 rounded-xl overflow-hidden bg-black/10 gap-[1.5px]">
                        {[
                            { icon: "🛒", bg: "bg-[#fdf0ec]", title: t.build.b1.title, desc: t.build.b1.desc },
                            { icon: "📦", bg: "bg-[#edf7f2]", title: t.build.b2.title, desc: t.build.b2.desc },
                            { icon: "💳", bg: "bg-[#f0f4ff]", title: t.build.b3.title, desc: t.build.b3.desc },
                            { icon: "📊", bg: "bg-[#fdf0ec]", title: t.build.b4.title, desc: t.build.b4.desc },
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

                    <div className="mt-8 text-center">
                        <Link href="/services" className="text-[#e8461e] font-semibold text-sm hover:underline">
                            {t.build.viewAll} →
                        </Link>
                    </div>
                </section>

                {/* BRAND/CLIENT EXPOSURE */}
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
                    </div>
                </div>

                {/* FEATURED PROJECTS */}
                <section className="py-24 px-[5vw] bg-[#fafafa]">
                    <div className="max-w-7xl mx-auto">
                        <div className="mb-16">
                            <p className="text-xs font-bold tracking-[2px] uppercase text-[#e8461e] mb-4">
                                {t.portfolio.label}
                            </p>
                            <h2 className="font-display text-3xl md:text-5xl font-extrabold tracking-tight">
                                {t.portfolio.title}
                            </h2>
                        </div>

                        <div className="grid lg:grid-cols-3 gap-8">
                            <div className="bg-white rounded-xl p-8 border border-black/10 hover:border-[#e8461e] transition-colors duration-200">
                                <div className="text-sm font-semibold text-[#e8461e] mb-3">
                                    {t.portfolio.p1.tag}
                                </div>
                                <h3 className="text-xl font-display font-bold mb-4">
                                    {t.portfolio.p1.title}
                                </h3>
                                <p className="text-[#4a4a4a] text-sm mb-5 leading-relaxed">
                                    {t.portfolio.p1.desc}
                                </p>
                                <div className="flex flex-wrap gap-2">
                                    {["Next.js", "PostgreSQL", "Supabase"].map(s => (
                                        <span key={s} className="text-xs font-semibold text-[#4a4a4a] bg-[#f5f4f0] px-3 py-1 rounded-full">{s}</span>
                                    ))}
                                </div>
                            </div>

                            <div className="bg-white rounded-xl p-8 border border-black/10 hover:border-[#e8461e] transition-colors duration-200">
                                <div className="text-sm font-semibold text-[#e8461e] mb-3">
                                    {t.portfolio.p2.tag}
                                </div>
                                <h3 className="text-xl font-display font-bold mb-4">
                                    {t.portfolio.p2.title}
                                </h3>
                                <p className="text-[#4a4a4a] text-sm mb-5 leading-relaxed">
                                    {t.portfolio.p2.desc}
                                </p>
                                <div className="flex flex-wrap gap-2">
                                    {["Next.js", "PostgreSQL", "Docker"].map(s => (
                                        <span key={s} className="text-xs font-semibold text-[#4a4a4a] bg-[#f5f4f0] px-3 py-1 rounded-full">{s}</span>
                                    ))}
                                </div>
                            </div>

                            <div className="bg-white rounded-xl p-8 border border-black/10 hover:border-[#e8461e] transition-colors duration-200">
                                <div className="text-sm font-semibold text-[#e8461e] mb-3">
                                    {t.portfolio.p3.tag}
                                </div>
                                <h3 className="text-xl font-display font-bold mb-4">
                                    {t.portfolio.p3.title}
                                </h3>
                                <p className="text-[#4a4a4a] text-sm mb-5 leading-relaxed">
                                    {t.portfolio.p3.desc}
                                </p>
                                <div className="flex flex-wrap gap-2">
                                    {["React", "Node.js", "PostgreSQL"].map(s => (
                                        <span key={s} className="text-xs font-semibold text-[#4a4a4a] bg-[#f5f4f0] px-3 py-1 rounded-full">{s}</span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* WHY WORK WITH ME */}
                <section className="bg-[#111110] text-white px-[5vw] py-24">
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

                    {/* CURRENT EXPERIENCE TIMELINE */}
                    <div className="max-w-7xl mx-auto mt-16">
                        <p className="text-[11px] tracking-[1.5px] uppercase text-white/35 mb-5">{t.why.exp}</p>
                        <div className="flex flex-col gap-4">
                            <div className="bg-white/5 border border-white/10 rounded-xl p-6 flex flex-wrap items-center gap-4">
                                <div className="w-2.5 h-2.5 rounded-full bg-[#e8461e] shrink-0" />
                                <div>
                                    <div className="font-semibold text-[15px] text-white">{t.exp1.role}</div>
                                    <div className="text-sm text-white/45 mt-0.5">{t.exp1.company}</div>
                                </div>
                                <div className="md:ml-auto text-xs text-white/35 font-medium">{t.exp1.year}</div>
                            </div>
                            <div className="bg-white/5 border border-white/10 rounded-xl p-6 flex flex-wrap items-center gap-4">
                                <div className="w-2.5 h-2.5 rounded-full bg-[#e8461e] shrink-0" />
                                <div>
                                    <div className="font-semibold text-[15px] text-white">{t.exp2.role}</div>
                                    <div className="text-sm text-white/45 mt-0.5">{t.exp2.company}</div>
                                </div>
                                <div className="md:ml-auto text-xs text-white/35 font-medium">{t.exp2.year}</div>
                            </div>
                            <div className="bg-white/5 border border-white/10 rounded-xl p-6 flex flex-wrap items-center gap-4">
                                <div className="w-2.5 h-2.5 rounded-full bg-[#e8461e] shrink-0" />
                                <div>
                                    <div className="font-semibold text-[15px] text-white">{t.exp3.role}</div>
                                    <div className="text-sm text-white/45 mt-0.5">{t.exp3.company}</div>
                                </div>
                                <div className="md:ml-auto text-xs text-white/35 font-medium">{t.exp3.year}</div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* PRICING TEASER */}
                <section className="px-[5vw] py-24 max-w-7xl mx-auto">
                    <div className="text-xs font-bold tracking-[2px] uppercase text-[#e8461e] mb-4">{t.pricing.label}</div>
                    <h2 className="font-display text-3xl md:text-5xl font-extrabold tracking-tight leading-none mb-4">{t.pricing.title}</h2>
                    <p className="text-base text-[#4a4a4a] max-w-[540px] leading-relaxed mb-10">{t.pricing.sub}</p>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
                        <div className="border border-black/10 rounded-xl p-6 bg-white">
                            <div className="text-[11px] font-bold uppercase tracking-[1.5px] text-[#8a8a8a] mb-2">Starter</div>
                            <div className="font-display text-2xl font-extrabold mb-1">Rp 2,5 jt</div>
                            <p className="text-[13px] text-[#4a4a4a]">{t.pricing.teaser1}</p>
                        </div>
                        <div className="border-2 border-[#e8461e] rounded-xl p-6 bg-white relative">
                            <div className="absolute top-[-12px] left-1/2 -translate-x-1/2 bg-[#e8461e] text-white text-[10px] font-bold px-4 py-1 rounded-full tracking-wider uppercase whitespace-nowrap">
                                {t.pricing.popular}
                            </div>
                            <div className="text-[11px] font-bold uppercase tracking-[1.5px] text-[#8a8a8a] mb-2 mt-1">Growth</div>
                            <div className="font-display text-2xl font-extrabold mb-1">Rp 6 jt</div>
                            <p className="text-[13px] text-[#4a4a4a]">{t.pricing.teaser2}</p>
                        </div>
                        <div className="border border-black/10 rounded-xl p-6 bg-white">
                            <div className="text-[11px] font-bold uppercase tracking-[1.5px] text-[#8a8a8a] mb-2">Enterprise</div>
                            <div className="font-display text-2xl font-extrabold mb-1">Rp 8 jt+</div>
                            <p className="text-[13px] text-[#4a4a4a]">{t.pricing.teaser3}</p>
                        </div>
                    </div>

                    <Link href="/pricing" className="inline-flex items-center gap-2 bg-[#0d0d0d] text-white px-8 py-3.5 rounded-full font-semibold text-[15px] transition-all duration-200 hover:bg-[#e8461e] hover:-translate-y-0.5">
                        {t.pricing.viewFull || "View Full Pricing"} →
                    </Link>
                </section>

                {/* FAQ */}
                <section className="bg-[#f5f4f0] py-24 px-[5vw]">
                    <div className="max-w-5xl mx-auto">
                        <div className="text-xs font-bold tracking-[2px] uppercase text-[#e8461e] mb-4">{t.faq.label}</div>
                        <h2 className="font-display text-3xl md:text-5xl font-extrabold tracking-tight mb-12">
                            {t.faq.title}
                        </h2>

                        <div className="space-y-6">
                            {[t.faq.q1, t.faq.q2, t.faq.q3, t.faq.q4].map((item, idx) => (
                                <div key={idx} className="bg-white rounded-xl p-6 border border-black/10">
                                    <h3 className="font-bold mb-2">{item.q}</h3>
                                    <p className="text-[#4a4a4a] text-sm leading-relaxed">{item.a}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* CONTACT / CTA */}
                <section id="contact" className="bg-[#111110] text-center px-[5vw] py-28 relative overflow-hidden !hidden">
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

                <section id="contact" className="bg-[#111110] px-[5vw] py-24 relative overflow-hidden">
                    <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_70%_at_50%_50%,rgba(232,70,30,0.12)_0%,transparent_70%)] pointer-events-none" />
                    <div className="max-w-7xl mx-auto relative">
                        <div className="grid lg:grid-cols-2 gap-16 items-start">

                            {/* LEFT — heading */}
                            <div>
                                <div className="text-xs font-bold tracking-[2px] uppercase text-[#ff8a6e] mb-4">Contact</div>
                                <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-4">
                                    {t.cta.title}
                                </h2>
                                <p className="text-white/50 text-base max-w-[400px] mb-10 leading-relaxed">
                                    {t.cta.sub}
                                </p>

                                <div className="space-y-3">
                                    <a href="mailto:hello@kitadevelopers.com" className="flex items-center gap-3 text-white/70 hover:text-white transition-colors duration-200 text-sm">
                                        <span className="text-lg">✉️</span> hello@kitadevelopers.com
                                    </a>
                                    <a href={`https://wa.me/62XXXXXXXXXX`} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-white/70 hover:text-[#25D366] transition-colors duration-200 text-sm">
                                        <span className="text-lg">💬</span> WhatsApp / Chat
                                    </a>
                                </div>

                                <div className="mt-8 p-5 bg-[#e8461e]/15 border border-[#e8461e]/30 rounded-xl">
                                    <div className="text-[11px] font-bold uppercase tracking-wider text-[#ff8a6e] mb-1">Limited Offer</div>
                                    <p className="text-white/80 text-sm leading-relaxed">
                                        First project — <span className="font-bold text-white">20% off</span> + free 30-min consultation. Mention it in your message.
                                    </p>
                                </div>
                            </div>

                            {/* RIGHT — form */}
                            <div className="bg-white rounded-2xl p-8">
                                {/* <ContactForm /> */}
                            </div>
                        </div>
                    </div>
                </section>

                {/* FOOTER */}
                <footer className="!hidden border-t border-black/10 px-[5vw] py-8 flex-wrap justify-between items-center gap-4 bg-white">
                    <div className="font-display font-extrabold text-base text-[#0d0d0d]">
                        kita<span className="text-[#e8461e]">dev</span>
                    </div>
                    <p className="text-xs text-[#8a8a8a]">
                        &copy; {new Date().getFullYear()} KitaDevelopers. All rights reserved.
                    </p>
                </footer>

            </div>
        </PublicLayout>
    )
}
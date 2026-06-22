"use client";
import { useState } from 'react';
import Link from 'next/link';
import { Lang, translations } from '@/constanst/translation';
// import ContactForm from '@/components/v2/ContactForm/ContactForm';
import PublicLayout from '@/components/PublicLayout';

// ─── replace with your actual WhatsApp number ─────────────────────────────
const WA_NUMBER = "62XXXXXXXXXX";
// ──────────────────────────────────────────────────────────────────────────

export default function ContactPage() {
    const [lang, setLang] = useState<Lang>('en');
    const t = translations[lang];

    return (
        <PublicLayout>
            <div className="min-h-screen bg-white text-[#0d0d0d] font-sans antialiased selection:bg-[#e8461e]/20 selection:text-[#e8461e]">

                {/* HEADER */}
                <section className="px-[5vw] py-20 bg-[#111110] relative overflow-hidden">
                    <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_70%_60%_at_80%_20%,rgba(232,70,30,0.18)_0%,transparent_60%)]" />
                    <div className="max-w-7xl mx-auto relative">
                        <div className="text-xs font-bold tracking-[2px] uppercase text-[#ff8a6e] mb-4">Contact</div>
                        <h1 className="font-display text-4xl md:text-6xl font-extrabold tracking-tight text-white max-w-[700px] mb-4">
                            {t.cta.title}
                        </h1>
                        <p className="text-base md:text-lg text-white/60 max-w-[500px]">
                            {t.cta.sub}
                        </p>
                    </div>
                </section>

                {/* MAIN CONTENT */}
                <section className="px-[5vw] py-20 max-w-7xl mx-auto">
                    <div className="grid lg:grid-cols-3 gap-16">

                        {/* FORM */}
                        <div className="lg:col-span-2">
                            <h2 className="font-display text-2xl font-bold mb-8">Send me a message</h2>
                            {/* <ContactForm /> */}
                        </div>

                        {/* SIDEBAR */}
                        <div className="space-y-8">

                            {/* DIRECT CONTACTS */}
                            <div>
                                <h3 className="font-bold text-base mb-4">Or reach me directly</h3>
                                <div className="space-y-3">
                                    <a
                                        href="mailto:hello@kitadevelopers.com"
                                        className="flex items-center gap-3 p-4 bg-[#f5f4f0] rounded-xl hover:bg-[#fdf0ec] transition-colors duration-200 group"
                                    >
                                        <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center text-lg border border-black/10 shrink-0">
                                            ✉️
                                        </div>
                                        <div>
                                            <div className="text-[11px] font-bold uppercase tracking-wider text-[#8a8a8a] mb-0.5">Email</div>
                                            <div className="text-sm font-semibold text-[#0d0d0d] group-hover:text-[#e8461e] transition-colors">hello@kitadevelopers.com</div>
                                        </div>
                                    </a>

                                    <a
                                        href={`https://wa.me/${WA_NUMBER}`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-3 p-4 bg-[#f5f4f0] rounded-xl hover:bg-[#edf7f2] transition-colors duration-200 group"
                                    >
                                        <div className="w-10 h-10 bg-[#25D366] rounded-lg flex items-center justify-center text-lg shrink-0">
                                            <svg width="20" height="20" viewBox="0 0 24 24" fill="white">
                                                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                                            </svg>
                                        </div>
                                        <div>
                                            <div className="text-[11px] font-bold uppercase tracking-wider text-[#8a8a8a] mb-0.5">WhatsApp</div>
                                            <div className="text-sm font-semibold text-[#0d0d0d] group-hover:text-[#1a7a4a] transition-colors">Chat on WhatsApp →</div>
                                        </div>
                                    </a>

                                    <a
                                        href="https://linkedin.com/in/YOUR_LINKEDIN"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-3 p-4 bg-[#f5f4f0] rounded-xl hover:bg-[#eef4ff] transition-colors duration-200 group"
                                    >
                                        <div className="w-10 h-10 bg-[#0077B5] rounded-lg flex items-center justify-center shrink-0">
                                            <svg width="18" height="18" viewBox="0 0 24 24" fill="white">
                                                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                                            </svg>
                                        </div>
                                        <div>
                                            <div className="text-[11px] font-bold uppercase tracking-wider text-[#8a8a8a] mb-0.5">LinkedIn</div>
                                            <div className="text-sm font-semibold text-[#0d0d0d] group-hover:text-[#0077B5] transition-colors">View Profile →</div>
                                        </div>
                                    </a>
                                </div>
                            </div>

                            {/* RESPONSE TIME */}
                            <div className="bg-[#f5f4f0] rounded-xl p-6">
                                <div className="flex items-center gap-2 mb-3">
                                    <div className="w-2 h-2 rounded-full bg-[#1a7a4a] animate-pulse" />
                                    <span className="text-sm font-bold">Usually responds within 2–4 hours</span>
                                </div>
                                <p className="text-[13px] text-[#4a4a4a] leading-relaxed">
                                    Available Mon–Sat, 9am–9pm WIB. For urgent projects, WhatsApp is the fastest way to reach me.
                                </p>
                            </div>

                            {/* FIRST CLIENT PROMO */}
                            <div className="bg-[#e8461e] rounded-xl p-6 text-white">
                                <div className="text-[11px] font-bold uppercase tracking-wider text-white/70 mb-2">Limited Offer</div>
                                <h3 className="font-display font-bold text-lg mb-2">First project — 20% off</h3>
                                <p className="text-[13px] text-white/80 leading-relaxed">
                                    Mention this when you message me and I'll apply 20% off your first project plus a free 30-min consultation.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

            </div>
        </PublicLayout>
    );
}
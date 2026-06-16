"use client"
import AdCard from '@/components/AdsCard';
import React, { useEffect, useState } from 'react';
import { ArticleListItem } from '@/components/ArticleListItem';
import { ArticleCard } from '@/components/ArticleCard';
import { SectionHeader } from '@/components/SectionHeader';
// import { HeroArticle } from '@/components/HeroArticle';
// import { FeaturedArticle } from '@/components/FeaturedArticle';
import { timeAgo } from '@/lib/timeAgo';
import { Article } from '@/types';
import LoadingLogoDefault from '@/components/Loading';
import axios from 'axios';
import PublicLayout from '@/components/PublicLayout';
import AdCardGoogle from '@/components/AdsCardGoogle';
import { X, Code2, Smartphone, ShoppingBag, Database } from 'lucide-react';
import Link from 'next/link';

import { Lang, translations } from '@/constanst/translationTest';
import ContactForm from '@/components/v2/ContactForm/ContactForm';


const formatPublishDate = (date: string) => {
  const dateIso = new Date(date);
  const formattedID = dateIso.toLocaleString('id-ID', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  });
  return formattedID;
};


const Home: React.FC = () => {
  const [posts, setPosts] = useState<Article[]>([])
  const [loading, setLoading] = useState(true)
  const [hideBanner, setHideBanner] = useState(false);
  const [isFetchError, setIsFetchError] = useState(false);

  const [lang, setLang] = useState<Lang>('en');
  const t = translations[lang];

  const services = [
    'Custom Web Themes',
    'Mobile App Development',
    'Shopify Store Setup',
    'Inventory Systems'
  ];

  useEffect(() => {
    async function fetchPosts() {
      try {
        const response = await axios.get(`${process.env.NEXT_PUBLIC_API_CP}/api/v1/blog/articles/all`);
        const sortedPosts = response.data.result.filter((post: Article) => post.status === 'published');
        setPosts(sortedPosts);
        console.log('Fetched posts:', sortedPosts.length);
      } catch (error) {
        setIsFetchError(true);
      } finally {
        setLoading(false)
      }
    }

    fetchPosts()
  }, [])

  if (isFetchError) {
    console.error('Error fetching posts');
  }

  return (
    <PublicLayout>
      <div className="bg-[#181818] text-[#F9FAFB]">
        {!loading ?
          <>
            <section className="relative pt-0 pb-0 px-0">
              <div className="min-h-screen bg-white text-[#0d0d0d] font-sans antialiased selection:bg-[#e8461e]/20 selection:text-[#e8461e]">

                {/* NAVBAR stickty */}
                <div className="hidden top-0 z-50 flex items-center justify-between px-[5vw] h-16 bg-white/92 backdrop-blur-md border-b border-black/10">
                  <a href="/" className="font-display font-extrabold text-lg tracking-tight">
                    kita<span className="text-[#e8461e]">dev</span>
                  </a>
                  <div className="hidden md:flex items-center gap-8">
                    <Link href="/v2/landing" className="text-sm font-medium text-[#4a4a4a] hover:text-[#0d0d0d] transition-colors duration-200">{t.nav.services}</Link>
                    <Link href="/v2/service" className="text-sm font-medium text-[#4a4a4a] hover:text-[#0d0d0d] transition-colors duration-200">{t.nav.servicesPage || "Services"}</Link>
                    <Link href="/v2/porto" className="text-sm font-medium text-[#4a4a4a] hover:text-[#0d0d0d] transition-colors duration-200">Portfolio</Link>
                    <Link href="/v2/template" className="text-sm font-medium text-[#4a4a4a] hover:text-[#0d0d0d] transition-colors duration-200">Templates</Link>
                    <Link href="/v2/pricing" className="text-sm font-medium text-[#4a4a4a] hover:text-[#0d0d0d] transition-colors duration-200">{t.nav.pricing}</Link>
                    <Link href="/v2/contact" className="text-sm font-medium text-[#4a4a4a] hover:text-[#0d0d0d] transition-colors duration-200">{t.nav.contact}</Link>
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
                        <ContactForm />
                      </div>
                    </div>
                  </div>
                </section>

                {/* FOOTER */}
                <footer className="border-t border-black/10 px-[5vw] py-8 flex flex-wrap justify-between items-center gap-4 bg-white">
                  <div className="font-display font-extrabold text-base text-[#0d0d0d]">
                    kita<span className="text-[#e8461e]">dev</span>
                  </div>
                  <p className="text-xs text-[#8a8a8a]">
                    &copy; {new Date().getFullYear()} KitaDevelopers. All rights reserved.
                  </p>
                </footer>

              </div>
            </section>
            <main className="relative pt-0 pb-0 px-0 !hidden">
              <div className="hidden px-4 lg:px-4 relative overflow-hidden bg-gradient-to-br from-[#F7F7F7] via-[#181818] to-[#181818] border-b border-b-[#2C2C2C]">

                <div className="pt-12 justify-start max-w-7xl mx-auto px-0">
                  <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium mb-6 border border-white/20">
                    <span className="text-[#F9FAFB] text-sm font-medium tracking-wide">
                      Professional Development Services
                    </span>
                  </div>
                </div>

                <div className="max-w-7xl mx-auto px-0 py-6 lg:py-12 relative">
                  <div className="max-w-3xl">

                    <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold leading-none mb-4 lg:mb-8">
                      <span className="block text-[#F9FAFB] italic font-serif">Build</span>
                      <span className="block text-[#F9FAFB]">your digital</span>
                      <span className="block text-[#F9FAFB] italic font-serif">excellence.</span>
                    </h1>

                    <p className="mb-4 lg:mb-10 max-w-xl leading-relaxed">
                      Your software is your strongest competitive advantage.
                      We&apos;ll help you realize it, embed it deeply into your
                      business, and transform it into genuine momentum.
                    </p>

                    <Link href="/services" className="px-6 py-2 bg-[#F9FAFB] text-[#121212] rounded-full font-medium hover:bg-gray-200 transition-all group">
                      Discover how
                    </Link>
                  </div>

                  <div className="absolute bottom-8 right-2 hidden lg:block">
                    <div className="w-80 bg-[#FF4500] rounded-2xl p-8 shadow-2xl border border-[#E4E4E4]">

                      <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mb-6">
                        <Code2 className="w-8 h-8 text-[#121212]" />
                      </div>

                      <p className="text-[#F9FAFB] text-sm leading-relaxed mb-6">
                        We are the strategic backbone for ambitious businesses ready to scale with cutting-edge technology.
                      </p>

                      <div className="grid grid-cols-2 gap-3">
                        <div className="bg-[#181818] backdrop-blur-sm rounded-lg px-4 py-3 flex items-center justify-center border border-[#E4E4E4]">
                          <Code2 className="w-5 h-5 text-[#F9FAFB] mr-2" />
                          <span className="text-[#F9FAFB] text-xs font-semibold">Web Dev</span>
                        </div>
                        <div className="bg-[#181818] backdrop-blur-sm rounded-lg px-4 py-3 flex items-center justify-center border border-[#E4E4E4]">
                          <Smartphone className="w-5 h-5 text-[#F9FAFB] mr-2" />
                          <span className="text-[#F9FAFB] text-xs font-semibold">Mobile</span>
                        </div>
                        <div className="bg-[#181818] backdrop-blur-sm rounded-lg px-4 py-3 flex items-center justify-center border border-[#E4E4E4]">
                          <ShoppingBag className="w-5 h-5 text-[#F9FAFB] mr-2" />
                          <span className="text-[#F9FAFB] text-xs font-semibold">Themes</span>
                        </div>
                        <div className="bg-[#181818] backdrop-blur-sm rounded-lg px-4 py-3 flex items-center justify-center border border-[#E4E4E4]">
                          <Database className="w-5 h-5 text-[#F9FAFB] mr-2" />
                          <span className="text-[#F9FAFB] text-xs font-semibold">POS SaaS</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="lg:hidden mt-16">
                    <div className="bg-[#FF4500] rounded-2xl p-8 shadow-2xl border border-[#E4E4E4]">
                      <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mb-6">
                        <Code2 className="w-8 h-8 text-[#121212]" />
                      </div>

                      <p className="text-[#F9FAFB] text-sm leading-relaxed mb-6">
                        We are the strategic backbone for ambitious businesses ready to scale with cutting-edge technology.
                      </p>

                      <div className="grid grid-cols-2 gap-3">
                        <div className="bg-[#181818] backdrop-blur-sm rounded-lg px-4 py-3 flex items-center justify-center border border-[#E4E4E4]">
                          <Code2 className="w-5 h-5 text-[#F9FAFB] mr-2" />
                          <span className="text-[#F9FAFB] text-xs font-semibold">Web Dev</span>
                        </div>
                        <div className="bg-[#181818] backdrop-blur-sm rounded-lg px-4 py-3 flex items-center justify-center border border-[#E4E4E4]">
                          <Smartphone className="w-5 h-5 text-[#F9FAFB] mr-2" />
                          <span className="text-[#F9FAFB] text-xs font-semibold">Mobile</span>
                        </div>
                        <div className="bg-[#181818] backdrop-blur-sm rounded-lg px-4 py-3 flex items-center justify-center border border-[#E4E4E4]">
                          <ShoppingBag className="w-5 h-5 text-[#F9FAFB] mr-2" />
                          <span className="text-[#F9FAFB] text-xs font-semibold">Themes</span>
                        </div>
                        <div className="bg-[#181818] backdrop-blur-sm rounded-lg px-4 py-3 flex items-center justify-center border border-[#E4E4E4]">
                          <Database className="w-5 h-5 text-[#F9FAFB] mr-2" />
                          <span className="text-[#F9FAFB] text-xs font-semibold">POS SaaS</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

              </div>

              <div className="flex flex-wrap md:flex-nowrap gap-4 lg:gap-8 mx-auto pb-8 items-start bg-[#F9FAFB] w-full justify-center flex-col-reverse lg:flex-row pt-0 lg:pt-0 px-4 lg:px-0">
                <section className="card w-full max-w-5xl mx-auto lg:mr-0 px-4">
                  <SectionHeader title="Recommended" />
                  <div className="w-full flex flex-wrap md:flex-nowrap items-start gap-4 border-[#2C2C2C] my-4">
                    {posts.length >= 5 ? <ArticleCard
                      author={'Brian'}
                      timeAgo={timeAgo(posts[5].published_at)}
                      title={posts[5].title}
                      excerpt={posts[5].meta_description}
                      imageUrl={posts[5].featured_image || '/assets/placeholder-image.webp'}
                      date={posts[5].published_at}
                      readTime={posts[5].reading_time !== undefined ? posts[5].reading_time.toString() : undefined}
                      category={posts[5].category_id}
                      showImage={true}
                      showButton={true}
                      slug={posts[5].slug}
                      className="w-full h-fit p-0 lg:max-w-[320px] text-[#181818] bg-[#F9FAFB] rounded-2xl border border-[#E4E4E4]"
                    /> :
                      <div className='h-75 w-full flex justify-start items-start flex-col'>
                        <h4 className='w-fit text-center text-[#121212]'>
                          No Post Available
                        </h4>
                      </div>
                    }

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                      {posts.length > 0 ?
                        posts.slice(1, 5).map((item) => (
                          <ArticleCard
                            key={item.id}
                            author={'Brian'}
                            timeAgo={formatPublishDate(item.published_at)}
                            title={item.title}
                            date={formatPublishDate(item.published_at)}
                            readTime={item.reading_time !== undefined ? item.reading_time.toString() : undefined}
                            category={item.category_id}
                            slug={item.slug}
                            excerpt={item.meta_description}
                            // showButton={true}
                            // likes={890}
                            // comments={78}
                            showMetrics={false}
                            className="p-4"
                          />
                        )) :
                        <div className='h-75 w-full flex justify-center items-center flex-col'>
                          <h4 className='w-fit mx-auto'>
                            No Post Available
                          </h4>
                        </div>}
                    </div>
                  </div>

                  <SectionHeader title="Latest Update" />
                  <div className="mb-4 flex flex-col flex-wrap md:flex-nowrap md:flex-row gap-4 w-full">
                    {posts.length > 0 ?
                      posts.map((item) => (
                        <ArticleCard
                          key={item.id}
                          author={'Brian'}
                          timeAgo={formatPublishDate(item.published_at)}
                          title={item.title}
                          date={formatPublishDate(item.published_at)}
                          readTime={item.reading_time !== undefined ? item.reading_time.toString() : undefined}
                          category={item.category_id}
                          slug={item.slug}
                          excerpt={item.meta_description}
                          // showButton={true}
                          // likes={890}
                          // comments={78}
                          showMetrics={false}
                          className="p-4"
                        />
                      )) :
                      <div className='h-75 w-full flex justify-center items-center flex-col'>
                        <h4 className='w-fit mx-auto'>
                          No Post Available
                        </h4>
                      </div>}
                    {/* {posts.length >= 6 ?
                      <HeroArticle
                        imageUrl={posts[6].featured_image || '/assets/placeholder-image.webp'}
                        author={'Brian'}
                        timeAgo={timeAgo(posts[6].published_at)}
                        title={posts[6].title}
                        likes={236}
                        comments={6}
                        writerName={'Brian'}
                        writerTitle={'Brian'}
                        writerImage='/assets/placeholder-image.webp'
                        slug={posts[6].slug}
                      /> :
                      <div className='h-75 w-full flex justify-start items-start flex-col'>
                        <h4 className='w-fit text-center text-[#121212]'>
                          No Post Available
                        </h4>
                      </div>
                    } */}

                    {/* <FeaturedArticle
                      imageUrl={posts[1].featured_image || '/assets/placeholder-image.webp'}
                      author={'Brian'}
                      timeAgo={timeAgo(posts[1].published_at)}
                      title={posts[1].title}
                      slug={posts[1].slug}
                    /> */}

                    <div className='grid grid-cols-1 w-full gap-2'>
                      {posts.length >= 7 && posts.length >= 10 ?
                        posts.slice(7, 10).map((item) => (
                          <ArticleListItem
                            key={item.id}
                            author={'Brian'}
                            timeAgo={formatPublishDate(item.published_at)}
                            title={item.title}
                            slug={item.slug}
                          />
                        )) :
                        <div className='h-75 w-full flex justify-center items-center flex-col'>
                          <h4 className='w-fit mx-auto'>
                            No Post Available
                          </h4>
                        </div>
                      }
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {posts.length > 0 && posts.slice(11).map((item) => (
                      <ArticleCard
                        key={item.id}
                        author={'Brian'}
                        timeAgo={formatPublishDate(item.published_at)}
                        title={item.title}
                        date={formatPublishDate(item.published_at)}
                        readTime={item.reading_time !== undefined ? item.reading_time.toString() : undefined}
                        category={item.category_id}
                        slug={item.slug}
                        excerpt={item.meta_description}
                        // showButton={true}
                        // likes={890}
                        // comments={78}
                        showMetrics={false}
                        className="p-4"
                      />
                    ))}
                  </div>
                </section>

                <section className="lg:sticky lg:top-[5rem] lg:right-[1rem] w-full lg:max-w-[240px] flex gap-4 flex-col items-start">
                  <AdCardGoogle />

                  <div className="hidden lg:flex flex-col gap-4">
                    {/* <div className="w-full grid gap-4 grid-cols-[200px_200px_200px] lg:grid-cols-1 overflow-x-scroll lg:overflow-x-hidden min-h-fit"> */}
                    <div
                      className={`${hideBanner ? 'hidden' : 'flex'} border border-[#FFEB3B] w-full h-[175px] lg:h-[400px] max-w-full lg:max-w-[240px] bg-[#121212] p-6 flex-col items-center justify-between text-[#F9FAFB] rounded-2xl shadow-2xl relative overflow-hidden`}
                    >
                      <button className='absolute top-1 right-2 z-10' onClick={() => setHideBanner(true)}>
                        <X className="h-4 w-4 text-[#F9FAFB]" />
                      </button>
                      <div className="absolute inset-0 opacity-10">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-white rounded-full blur-3xl animate-pulse"></div>
                      </div>

                      <div className="relative z-10 mb-4 md:mb-0 w-full">
                        <h2 className="text-xl md:text-2xl font-bold mb-2">
                          Premium Web Solutions
                        </h2>
                        <p className="text-xs md:text-sm opacity-90 mb-3">
                          Transform your business with cutting-edge development.
                        </p>
                        <ul className="hidden lg:block space-y-1 text-xs opacity-90">
                          {services.map((service, index) => (
                            <li key={index} className="flex items-start">
                              <span className="mr-2">✦</span>
                              <span>{service}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <Link href={'/services'}
                        className="relative z-10 font-semibold px-5 py-2 rounded-xl transition duration-300 text-[#F9FAFB] hover:text-[#181818] border border-white hover:bg-white bg-[#121212]"
                      >
                        Get Started Today
                      </Link>
                    </div>
                    <AdCard gradient />
                    <AdCard />
                  </div>
                </section>
              </div>
            </main>
          </>
          : <LoadingLogoDefault />}
      </div>
    </PublicLayout >
  );
};

export default Home;
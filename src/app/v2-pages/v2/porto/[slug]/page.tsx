"use client";
import { useState } from 'react';
import { useParams, notFound } from 'next/navigation';
import Link from 'next/link';
import { Lang, translations } from '@/constanst/translationTest';
import { projects } from '@/constanst/projects';
import PublicLayout from '@/components/PublicLayout';

export default function Page() {
    const [lang, setLang] = useState<Lang>('en');
    const params = useParams();
    const t = translations[lang];

    const project = projects.find(p => p.slug === params.slug);

    if (!project) {
        return notFound();
    }

    const related = projects.filter(p => p.category === project.category && p.slug !== project.slug).slice(0, 3);

    return (
        <PublicLayout>
            <div className="min-h-screen bg-white text-[#0d0d0d] font-sans antialiased selection:bg-[#e8461e]/20 selection:text-[#e8461e]">

                {/* HEADER */}
                <section className="px-[5vw] py-16 bg-[#111110] relative overflow-hidden">
                    <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_70%_60%_at_80%_20%,rgba(232,70,30,0.18)_0%,transparent_60%)]" />
                    <div className="max-w-5xl mx-auto relative">
                        <Link href="/porto" className="inline-flex items-center gap-2 text-white/50 text-sm mb-6 hover:text-white transition-colors duration-200">
                            ← Back to Portfolio
                        </Link>
                        <div className="text-xs font-bold tracking-[2px] uppercase text-[#ff8a6e] mb-4">{project.tag}</div>
                        <h1 className="font-display text-3xl md:text-5xl font-extrabold tracking-tight text-white mb-4">
                            {project.title}
                        </h1>
                        {(project.role || project.company) && (
                            <div className="flex flex-wrap gap-6 text-sm text-white/60 mb-4">
                                {project.role && <div><span className="text-white/40">Role:</span> {project.role}</div>}
                                {project.company && <div><span className="text-white/40">Company:</span> {project.company}</div>}
                                {project.period && <div><span className="text-white/40">Period:</span> {project.period}</div>}
                            </div>
                        )}
                        <div className="flex flex-wrap gap-2 mt-4">
                            {project.stack.map((s) => (
                                <span key={s} className="text-xs font-semibold text-white/80 bg-white/10 border border-white/15 px-3 py-1.5 rounded-full">{s}</span>
                            ))}
                        </div>
                    </div>
                </section>

                {/* CONTENT */}
                <section className="px-[5vw] py-16 max-w-5xl mx-auto">

                    <div className="mb-12">
                        <h2 className="font-display text-2xl font-bold mb-4">Overview</h2>
                        <p className="text-[#4a4a4a] leading-relaxed">{project.overview}</p>
                    </div>

                    {(project.challenge || project.solution || project.result) && (
                        <div className="grid md:grid-cols-3 gap-6 mb-12">
                            {project.challenge && (
                                <div className="bg-[#f5f4f0] rounded-xl p-6">
                                    <h3 className="font-bold text-[#e8461e] mb-3">Challenge</h3>
                                    <p className="text-sm text-[#4a4a4a] leading-relaxed">{project.challenge}</p>
                                </div>
                            )}
                            {project.solution && (
                                <div className="bg-[#f5f4f0] rounded-xl p-6">
                                    <h3 className="font-bold text-[#e8461e] mb-3">Solution</h3>
                                    <p className="text-sm text-[#4a4a4a] leading-relaxed">{project.solution}</p>
                                </div>
                            )}
                            {project.result && (
                                <div className="bg-[#f5f4f0] rounded-xl p-6">
                                    <h3 className="font-bold text-[#e8461e] mb-3">Result</h3>
                                    <p className="text-sm text-[#4a4a4a] leading-relaxed">{project.result}</p>
                                </div>
                            )}
                        </div>
                    )}

                    {project.features && project.features.length > 0 && (
                        <div className="mb-12">
                            <h2 className="font-display text-2xl font-bold mb-4">Key Features</h2>
                            <ul className="grid md:grid-cols-2 gap-3">
                                {project.features.map((f, i) => (
                                    <li key={i} className="flex gap-2 items-start text-sm text-[#4a4a4a] before:content-['✓'] before:text-[#1a7a4a] before:font-bold before:shrink-0 bg-white border border-black/10 rounded-lg p-4">
                                        {f}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}

                    {(project.liveUrl || project.githubUrl) && (
                        <div className="flex gap-4 flex-wrap mb-12">
                            {project.liveUrl && (
                                <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="bg-[#0d0d0d] text-white px-6 py-3 rounded-full font-semibold text-sm hover:bg-[#e8461e] transition-colors duration-200">
                                    View Live →
                                </a>
                            )}
                            {project.githubUrl && (
                                <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="border border-black/18 text-[#0d0d0d] px-6 py-3 rounded-full font-semibold text-sm hover:bg-[#0d0d0d] hover:text-white transition-colors duration-200">
                                    View Code →
                                </a>
                            )}
                        </div>
                    )}
                </section>

                {/* RELATED PROJECTS */}
                {related.length > 0 && (
                    <section className="bg-[#f5f4f0] px-[5vw] py-16">
                        <div className="max-w-5xl mx-auto">
                            <h2 className="font-display text-2xl font-bold mb-8">More like this</h2>
                            <div className="grid md:grid-cols-3 gap-6">
                                {related.map((proj) => (
                                    <Link
                                        key={proj.slug}
                                        href={`/porto/${proj.slug}`}
                                        className="group bg-white rounded-xl border border-black/10 overflow-hidden hover:border-[#e8461e] hover:-translate-y-1 transition-all duration-200 p-6"
                                    >
                                        <div className="text-xs font-semibold text-[#e8461e] mb-2">{proj.tag}</div>
                                        <h3 className="font-display text-base font-bold mb-2 group-hover:text-[#e8461e] transition-colors duration-200">
                                            {proj.title}
                                        </h3>
                                        <p className="text-sm text-[#4a4a4a] leading-relaxed line-clamp-2">
                                            {proj.summary}
                                        </p>
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
                        Want something like this for your business?
                    </h2>
                    <div className="flex gap-4 justify-center flex-wrap">
                        <a href="/#contact" className="bg-[#e8461e] text-white px-8 py-3.5 rounded-full font-semibold text-[15px] transition-all duration-200 hover:bg-[#c93a18] hover:-translate-y-0.5">
                            {t.nav.cta}
                        </a>
                        <Link href="/porto" className="bg-transparent text-white/80 px-8 py-3.5 rounded-full font-medium text-[15px] border border-white/20 transition-all duration-200 hover:bg-white/8 hover:text-white">
                            ← All Projects
                        </Link>
                    </div>
                </section>

            </div>
        </PublicLayout>
    )
}
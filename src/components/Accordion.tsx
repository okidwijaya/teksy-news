"use client"
import Link from "next/link";
import React, { useState } from "react";

type AccordionItem = {
    title: string;
    articles: { author: string; time: string; title: string }[];
};

type AccordionProps = {
    items: AccordionItem[];
};

export default function Accordion({ items }: AccordionProps) {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    return (
        <div className="max-w-7xl mx-auto mt-10 divide-y divide-gray-200">
            {items.map((item, idx) => (
                <div className="py-6" key={item.title}>
                    <button
                        className="cursor-pointer w-full text-left flex justify-between items-center font-medium group"
                        onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                    >
                        <h6>{item.title}</h6>
                        <svg
                            className={`w-5 h-5 transform transition-transform ${openIndex === idx ? "rotate-90" : ""
                                }`}
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M9 5l7 7-7 7"
                            />
                        </svg>
                    </button>
                    <div className={`mt-4 ${openIndex === idx ? "" : "hidden"} text-gray-600 text-base space-y-2`}>
                        <div className="space-y-6">
                            {item.articles.map((art, i) => (
                                <div key={i}>
                                    <div className="flex items-center text-sm text-gray-700 mb-1">
                                        <span className="font-semibold">{art.author}</span>
                                        <span className="mx-2">•</span>
                                        <span>{art.time}</span>
                                    </div>
                                    <div className="text-lg font-semibold mb-1">{art.title}</div>
                                    <Link href={`/post/${item.title}`} className="text-gray-700 underline text-sm">Read more</Link>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}
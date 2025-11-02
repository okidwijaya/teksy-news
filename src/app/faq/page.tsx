'use client'
import React from 'react'

export default function Page() {

    return (
        <>
            <section className="px-6 md:px-4 py-8 border-b border-[#DDDDDD]">
                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-6 items-start">
                    <h2 className="text-5xl font-bold">THE TECH SPOTLIGHT</h2>
                    <p className="text-gray-700 text-lg">
                        <span className="text-purple-500 text-xl mr-2">→</span>
                        More relevant to a tech news context, inviting readers to learn about trends, startups, gadgets, and AI.
                    </p>
                </div>
                {/* <Accordion items={accordionItems} /> */}
            </section>
        </>
    )
}

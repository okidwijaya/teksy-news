"use client";
import { useState } from 'react';
import { ChevronDown, MessageCircle } from 'lucide-react';
import PublicLayout from '@/components/PublicLayout';

interface FAQItem {
    id: string;
    question: string;
    answer: string;
}

const faqData: FAQItem[] = [
    {
        id: '1',
        question: 'What do we do?',
        answer: 'Millions of businesses of all sizes - from startups to large enterprises - use Untitled\'s software and APIs to accept payments, send payouts, and manage their businesses online.'
    },
    {
        id: '2',
        question: 'Getting started with Untitled',
        answer: 'Learn how to set up your account and start using Untitled\'s features in just a few minutes.'
    },
    {
        id: '3',
        question: 'Installing Untitled',
        answer: 'Follow our step-by-step installation guide to integrate Untitled into your application.'
    },
    {
        id: '4',
        question: 'The messenger',
        answer: 'Connect with your customers in real-time using our built-in messaging platform.'
    },
    {
        id: '5',
        question: 'Our next-gen inbox',
        answer: 'Manage all your customer communications from one central, powerful inbox.'
    },
    {
        id: '6',
        question: 'How do tickets work?',
        answer: 'Create, track, and resolve customer issues efficiently with our ticketing system.'
    },
    {
        id: '7',
        question: 'How does support work?',
        answer: 'Our dedicated support team is available 24/7 to help you with any questions or issues.'
    },
    {
        id: '8',
        question: 'How does billing work?',
        answer: 'We offer flexible billing options with transparent pricing and no hidden fees.'
    }
];

export default function Page() {
    const [openItems, setOpenItems] = useState<string[]>(['1']);

    const toggleItem = (id: string) => {
        setOpenItems(prev =>
            prev.includes(id)
                ? prev.filter(itemId => itemId !== id)
                : [...prev, id]
        );
    };

    return (
        <PublicLayout>
            <div className="min-h-screen bg-white p-4 md:p-8">
                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
                    <div className="lg:sticky lg:top-8 lg:self-start bg-transparent">
                        <div className="bg-transparent p-8 md:p-12">
                            <div className="w-16 h-16 bg-gradient-to-br from-pink-500 via-purple-500 to-blue-400 rounded-full mb-8"></div>

                            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                                Frequently asked questions
                            </h1>

                            <button className="flex items-center gap-2 text-gray-700 hover:text-gray-900 transition-colors group">
                                <MessageCircle className="w-5 h-5" />
                                <span className="font-medium">Still need help? Chat to us.</span>
                            </button>
                        </div>
                    </div>

                    <div className="space-y-4">
                        {faqData.map((item) => (
                            <div
                                key={item.id}
                                className="bg-white rounded-2xl shadow-md overflow-hidden transition-all duration-200 hover:shadow-lg"
                            >
                                <button
                                    onClick={() => toggleItem(item.id)}
                                    className="w-full flex items-center justify-between p-6 text-left"
                                >
                                    <span className="text-lg font-semibold text-gray-900 pr-4">
                                        {item.question}
                                    </span>
                                    <ChevronDown
                                        className={`w-5 h-5 text-gray-500 flex-shrink-0 transition-transform duration-200 ${openItems.includes(item.id) ? 'rotate-180' : ''
                                            }`}
                                    />
                                </button>

                                <div
                                    className={`overflow-hidden transition-all duration-200 ${openItems.includes(item.id) ? 'max-h-96' : 'max-h-0'
                                        }`}
                                >
                                    <div className="px-6 pb-6 text-gray-600 leading-relaxed">
                                        {item.answer}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </PublicLayout>
    );
}
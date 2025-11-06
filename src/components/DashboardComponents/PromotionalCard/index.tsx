'use client';

import React from 'react';
import type { StaticImageData } from 'next/image';
import Image from 'next/image';

interface PromotionalCardProps {
    title: string;
    description: string;
    buttonText: string;
    imageUrl?: string | StaticImageData;
}

export default function PromotionalCard({
    title,
    description,
    buttonText,
    imageUrl
}: PromotionalCardProps) {
    return (
        <div className="bg-white rounded-lg p-4 w-full max-w-[820px] shadow-sm flex items-center justify-between">
            <div className="max-w-2xl">
                <h2 className="text-xl font-semibold text-gray-800 mb-3">{title}</h2>
                <p className="text-gray-600 mb-6">{description}</p>
                <button className="px-4 uppercase !text-[12px] font-semibold py-2 border border-gray-300 bg-[#212121] text-white rounded-md hover:bg-gray-50 hover:text-[#212121] transition-colors">
                    {buttonText}
                </button>
            </div>

            {imageUrl && (
                <div className="hidden md:block">
                    <Image
                        width={100}
                        height={100}
                        src={typeof imageUrl === 'string' ? imageUrl : imageUrl?.src}
                        alt="Promotional visual"
                        className="h-40 w-64 rounded-md object-cover"
                    />
                </div>
            )}
        </div>
    );
}
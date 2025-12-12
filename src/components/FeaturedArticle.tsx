'use client'
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface FeaturedArticleProps {
    imageUrl: string;
    author: string | number;
    timeAgo: string;
    title: string;
    className?: string;
    slug: string;
}

export const FeaturedArticle: React.FC<FeaturedArticleProps> = ({
    imageUrl,
    author,
    timeAgo,
    title,
    className = '',
    slug
}) => {
    return (
        <div className={`w-full h-fit max-w-full lg:max-w-md rounded-2xl overflow-hidden mb-6 border-none block bg-white ${className}`}>
            <div className="relative">
                <Image
                    src={imageUrl}
                    alt={title}
                    width={600}
                    height={400}
                    className="w-full h-full object-cover"
                />
                <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-[#121212]/70 to-transparent p-4">
                    <div className="flex items-center text-[#181818] text-xs mb-1">
                        <span className="font-medium">{author}</span>
                        <span className="mx-2">•</span>
                        <h6>{timeAgo}</h6>
                    </div>
                    <Link href={`/article/${slug}`}>
                    <h2 className="font-jakarta cursor-pointer text-[#181818] font-medium text-lg leading-tight">
                        {title}
                    </h2>
                    </Link>
                </div>
            </div>
        </div>
    );
};
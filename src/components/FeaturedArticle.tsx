'use client'
import React from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

interface FeaturedArticleProps {
    imageUrl: string;
    author: string;
    timeAgo: string;
    title: string;
    className?: string;
}

export const FeaturedArticle: React.FC<FeaturedArticleProps> = ({
    imageUrl,
    author,
    timeAgo,
    title,
    className = ''
}) => {
      const router = useRouter();
    
      const handleClick = (id:string) => {
        router.push(`/article/${id}`);
      };
    return (
        <div className={`w-full h-fit max-w-full lg:max-w-md rounded-2xl overflow-hidden mb-6 border-none bg-white ${className}`}>
            <div className="relative">
                <Image
                    src={imageUrl}
                    alt={title}
                    width={600}
                    height={400}
                    className="w-full h-full object-cover"
                />
                <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-[#121212]/70 to-transparent p-4">
                    <div className="flex items-center text-white text-xs mb-1">
                        <span className="font-medium">{author}</span>
                        <span className="mx-2">•</span>
                        <h6>{timeAgo}</h6>
                    </div>
                    <div onClick={()=> handleClick(title)} className="text-white font-medium text-lg leading-tight">
                        {title}
                    </div>
                </div>
            </div>
        </div>
    );
};
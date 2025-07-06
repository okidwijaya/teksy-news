'use client'
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import React from 'react';

interface HeroArticleProps {
    imageUrl: string;
    author: string;
    timeAgo: string;
    title: string;
    likes: number;
    comments: number;
    writerName: string;
    writerTitle: string;
    writerImage: string;
    className?: string;
}

export const HeroArticle: React.FC<HeroArticleProps> = ({
    imageUrl,
    author,
    timeAgo,
    title,
    likes,
    comments,
    writerName,
    writerTitle,
    writerImage,
    className = ''
}) => {
      const router = useRouter();
    
      const handleClick = (id:string) => {
        router.push(`/article/${id}`);
      };
    return (
        <div className={`w-full max-w-full lg:max-w-xl bg-white rounded-3xl border-grey-200 overflow-hidden relative ${className}`}>
            <div className="relative w-full h-[400px] md:h-full">
                <Image
                    src={imageUrl}
                    alt="Modern Reading Room"
                    fill
                    className="object-cover"
                />
            </div>

            <div className="absolute left-0 bottom-0 w-full flex flex-col px-6 pb-4">
                <div className="text-white">
                    <div className="flex items-center text-sm text-white mb-1">
                        <span className="font-semibold">{author}</span>
                        <span className="mx-2">•</span>
                        <h6>{timeAgo}</h6>
                    </div>
                    <div onClick={()=> handleClick(title)} className="text-lg font-semibold mb-1">
                        {title}
                    </div>
                </div>

                <div className="flex flex-col flex-wrap lg:flex-nowrap lg:flex-row gap-4 items-center justify-between">
                    <div className="flex items-center">
                        <div className="flex -space-x-2">
                            <Image
                                src="https://randomuser.me/api/portraits/men/32.jpg"
                                width={36}
                                height={36}
                                className="rounded-full border-2 border-white"
                                alt="User 1"
                            />
                            <Image
                                src="https://randomuser.me/api/portraits/women/44.jpg"
                                width={36}
                                height={36}
                                className="rounded-full border-2 border-white"
                                alt="User 2"
                            />
                            <Image
                                src="https://randomuser.me/api/portraits/men/54.jpg"
                                width={36}
                                height={36}
                                className="rounded-full border-2 border-white"
                                alt="User 3"
                            />
                            <span className="ml-2 font-semibold text-gray-700 bg-white/80 rounded-full px-2">
                                +
                            </span>
                        </div>

                        <span className="flex items-center ml-4 text-gray-800 text-lg font-medium bg-white/80 rounded-full px-3 py-1">
                            <svg className="w-5 h-5 mr-1 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M3 10a7 7 0 1114 0A7 7 0 013 10zm7-3a1 1 0 100 2 1 1 0 000-2zm0 4a1 1 0 100 2 1 1 0 000-2z" />
                            </svg>
                            {likes}
                        </span>

                        <span className="flex items-center ml-4 text-gray-800 text-lg font-medium bg-white/80 rounded-full px-3 py-1">
                            <svg className="w-5 h-5 mr-1 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M18 10c0 3.866-3.582 7-8 7a8.96 8.96 0 01-4.39-1.11L2 17l1.11-3.61A8.96 8.96 0 012 10c0-3.866 3.582-7 8-7s8 3.134 8 7z" />
                            </svg>
                            {comments}
                        </span>
                    </div>

                    <div className="flex items-center justify-end">
                        <div className="flex items-center bg-white/90 rounded-xl px-4 py-2">
                            <Image
                                src={writerImage}
                                width={32}
                                height={32}
                                className="rounded-full mr-3"
                                alt={writerName}
                            />
                            <div>
                                <div className="text-xs text-gray-500">
                                    {writerTitle}
                                </div>
                                <div className="text-sm font-semibold text-gray-800">
                                    {writerName}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
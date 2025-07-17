'use client'
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

interface ArticleCardProps {
  author?: string;
  timeAgo?: string;
  title: string;
  excerpt?: string;
  imageUrl?: string;
  date?: string;
  readTime?: string;
  category?: string | number | string[];
  likes?: number;
  comments?: number;
  showMetrics?: boolean;
  showImage?: boolean;
  showButton?: boolean;
  className?: string;
  slug: string;
}

export const ArticleCard: React.FC<ArticleCardProps> = ({
  author,
  timeAgo,
  title,
  excerpt,
  imageUrl,
  date,
  readTime,
  category,
  likes,
  comments,
  showMetrics = false,
  showImage = false,
  showButton = false,
  className = '',
  slug
}) => {
  const router = useRouter();

  const handleClick = (id:string) => {
    router.push(`/article/${id}`);
  };
  return (
    <div className={`border border-[#EEEEEE] h-fit rounded-2xl bg-white max-w-[768px] ${className}`}>
      {showImage && imageUrl && (
        <div className="relative w-full h-44 mb-3">
          <Image
            src={imageUrl}
            alt={title}
            fill
            className="object-cover rounded-tl-xl rounded-tr-xl"
          />
        </div>
      )}

      <div className={`${showImage && imageUrl ? "p-4" : ""}`}>
        <div className="flex items-center text-sm text-gray-800 mb-1 showImage && imageUrl">
          <span className="font-semibold">{author}</span>
          <span className="mx-2">•</span>
          <span>{timeAgo}</span>
        </div>

        {date && readTime && category && (
          <div className="flex items-center text-xs text-gray-400 mb-2 space-x-3">
            <span>{date}</span>
            <span>{readTime}</span>
            <span>{category}</span>
          </div>
        )}

        <div onClick={() => handleClick(slug)} className={`cursor-pointer font-medium mb-2 ${showButton ? 'text-3xl font-bold leading-tight mb-4' : 'text-[#121212]'}`}>
          {title}
        </div>

        {excerpt && (
          <p className="text-gray-500 mb-6">
            {excerpt}
          </p>
        )}

        {showMetrics && (
          <div className="flex items-center mb-3">
            <div className="flex -space-x-2">
              <Image
                src="/assets/placeholder-image.webp"
                width={28}
                height={28}
                className="rounded-full border-2 border-white"
                alt="User 1"
              />
              <Image
                src="/assets/placeholder-image.webp"
                width={28}
                height={28}
                className="rounded-full border-2 border-white"
                alt="User 2"
              />
              <Image
                src="/assets/placeholder-image.webp"
                width={28}
                height={28}
                className="rounded-full border-2 border-white"
                alt="User 3"
              />
            </div>
            <span className="ml-2 font-semibold text-gray-700">+</span>

            {likes && (
              <span className="flex items-center ml-4 text-gray-700 text-base">
                <svg className="w-5 h-5 mr-1 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M3 10a7 7 0 1114 0A7 7 0 013 10zm7-3a1 1 0 100 2 1 1 0 000-2zm0 4a1 1 0 100 2 1 1 0 000-2z" />
                </svg>
                {likes}
              </span>
            )}

            {comments && (
              <span className="flex items-center ml-4 text-gray-700 text-base">
                <svg className="w-5 h-5 mr-1 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M18 10c0 3.866-3.582 7-8 7a8.96 8.96 0 01-4.39-1.11L2 17l1.11-3.61A8.96 8.96 0 012 10c0-3.866 3.582-7 8-7s8 3.134 8 7z" />
                </svg>
                {comments}
              </span>
            )}
          </div>
        )}

        {showButton ? (
          <Link href="#" className="inline-block bg-[#121212] text-white rounded-full px-6 py-2 font-medium hover:bg-gray-800 transition">
            Read More
          </Link>
        ) : (
          <Link href="#" className="text-gray-700 underline text-sm">
            Read more
          </Link>
        )}
      </div>
    </div>
  );
};
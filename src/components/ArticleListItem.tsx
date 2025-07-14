'use client'
import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

interface ArticleListItemProps {
  author: string | number;
  timeAgo: string;
  title: string;
  showBorder?: boolean;
  className?: string;
  slug: string;
}

export const ArticleListItem: React.FC<ArticleListItemProps> = ({
  author,
  timeAgo,
  title,
  showBorder = true,
  className = '',
  slug
}) => {
    const router = useRouter();
  
    const handleClick = (id:string) => {
      router.push(`/article/${id}`);
    };
  return (
    <div className={`${showBorder ? 'border-b border-b-[#DDDDDD] pb-2' : ''} ${className}`}>
      <div className="flex items-center text-sm text-gray-700 mb-1">
        <span className="font-semibold">{author}</span>
        <span className="mx-2">•</span>
        <span>{timeAgo}</span>
      </div>
      <div onClick={()=> handleClick(slug)} className="cursor-pointer text-lg font-semibold mb-1">
        {title}
      </div>
      <Link href="#" className="text-gray-700 underline text-sm">
        Read more
      </Link>
    </div>
  );
};
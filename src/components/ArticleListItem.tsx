'use client'
import React from 'react';
import Link from 'next/link';
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
  return (
    <div className={`${showBorder ? 'border-b border-b-[#444444] pb-2' : ''} ${className}`}>
      <div className="hidden items-center text-sm text-gray-700 mb-1">
        <span className="font-semibold">{author}</span>
        <span className="mx-2">•</span>
        <span>{timeAgo}</span>
      </div>
      <Link href={`/article/${slug}`}>
        <h2 className="font-space cursor-pointer text-lg font-semibold mb-1">
          {title}
        </h2>
      </Link>
      <Link href={`/article/${slug}`} className="text-[#F9FAFB] text-sm">
        Read more
      </Link>
    </div>
  );
};
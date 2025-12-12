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
    <div className={`${showBorder ? 'border-b border-b-[#E4E4E4] pb-2' : ''} ${className}`}>
      <div className="hidden items-center text-sm text-[#181818] mb-1">
        <span className="font-semibold">{author}</span>
        <span className="mx-2">•</span>
        <span>{timeAgo}</span>
      </div>
      <Link href={`/article/${slug}`}>
        <h2 className="font-space cursor-pointer text-lg text-[#181818] font-semibold mb-1">
          {title}
        </h2>
      </Link>
      <Link href={`/article/${slug}`} className="text-[#181818] text-[11px]">
        Read more
      </Link>
    </div>
  );
};
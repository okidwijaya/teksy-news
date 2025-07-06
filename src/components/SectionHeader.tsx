import React from 'react';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';

interface SectionHeaderProps {
    title: string;
    showViewAll?: boolean;
    className?: string;
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({
    title,
    showViewAll = true,
    className = ''
}) => {
    return (
        <div className={`border-b border-b-[#EEEEEE] pb-2 flex items-center justify-between mb-4 mt-12 w-full max-w-[1024px] mx-auto ${className}`}>
            <div className="flex items-center space-x-2">
                <span className="font-semibold text-lg uppercase">{title}</span>
                <svg
                    className="w-4 h-4 text-gray-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M19 9l-7 7-7-7"
                    />
                </svg>
            </div>
            {showViewAll && (
                <Link href="/blogs" className="text-[#121212] font-medium hover:underline">
                    <ArrowUpRight className='w-6 h-6 bg-[#121212] text-[#E5E7EB] rounded-sm' />
                </Link>
            )}
        </div>
    );
};
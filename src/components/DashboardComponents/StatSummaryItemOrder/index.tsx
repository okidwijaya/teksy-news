'use client';

import React from 'react';

interface StatsSummaryItemProps {
    title: string;
    value: string | number;
    currency?: string;
}

export default function StatsSummaryItem({
    title,
    value,
    currency
}: StatsSummaryItemProps) {
    return (
        <div className="flex flex-col py-2 px-6 border-r-1 last:border-r-0 hover:bg-hover-white transition last:hover:rounded-tr-md last:hover:rounded-br-md">
            <span className="text-[12px] text-gray-700 font-light mb-0">{title}</span>
            <div className="flex items-center gap-0">
                {currency && (
                    <span className="text-[#212121] text-[14px] font-semibold mr-1">{currency}</span>
                )}
                <span className="text-[#212121] text-[14px] font-semibold">{value}</span>
                <span className="text-gray-400 ml-2">—</span>
            </div>
        </div>
    );
}
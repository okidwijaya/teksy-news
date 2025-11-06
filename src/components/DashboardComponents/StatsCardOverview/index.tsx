'use client';

import React from 'react';
import { Info, Pencil } from 'lucide-react';
import StatCard from '@/components/DashboardComponents/StatsSmallCard/index';

export default function StatsOverview() {
    return (
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-0 p-2 bg-white rounded-md">
            <StatCard
                heading="Sessions"
                icon={Pencil}
                iconPosition="right"
                className="bg-[#f5f5f5] relative"
                content={
                    <div className='flex flex-row justify-center gap-2 items-center text-gray-900'>
                        <div className="text-xs font-bold">49</div>
                        <div className="text-xs font-bold text-green-600 flex items-center gap-1">
                            <span className="text-xs">↑</span> 63%
                        </div>
                    </div>
                }
            />

            <StatCard
                heading="Total sales"
                icon={Info}
                iconPosition="left"
                content={
                    <div className="text-gray-900 flex flex-row justify-between gap-2 items-center">
                        <span className="text-xs font-semibold">IDR 0</span> <span className="text-gray-400 ml-2">—</span>
                    </div>
                }
            />

            <StatCard
                heading="Orders"
                content={
                    <div className="text-gray-900 flex flex-row justify-between gap-2 items-center">
                        <span className="text-xs font-semibold">0</span> <span className="text-gray-400 ml-2">—</span>
                    </div>
                }
            />

            <StatCard
                heading="Conversion rate"
                content={
                    <div className="text-gray-900 flex flex-row justify-between gap-2 items-center">
                        <span className="text-xs font-semibold">0%</span> <span className="text-gray-400 ml-2">—</span>
                    </div>
                }
            />
        </div>

    );
}
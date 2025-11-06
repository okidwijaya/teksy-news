'use client';

import React from 'react';
import { Calendar } from 'lucide-react';

interface TimeFilterProps {
    period: string;
}

export default function TimeFilter({ period }: TimeFilterProps) {
    return (
        <div className="flex items-center py-2 px-4 border-r border-[#D4D4D4] hover:bg-hover-white transition hover:rounded-tl-md hover:rounded-bl-md">
            <Calendar className="h-4 w-4 mr-3 text-[#212121]" />
            <span className="text-[#212121] text-[12px] font-medium">{period}</span>
        </div>
    );
}
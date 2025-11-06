'use client';

import React from 'react';

interface StatusBadgeProps {
    status: 'paid' | 'unpaid' | 'fulfilled' | 'unfulfilled' | 'tracking' | 'none';
    label?: string;
}

export default function StatusBadge({ status, label }: StatusBadgeProps) {
    let bgColor = 'bg-gray-100';
    let textColor = 'text-gray-800';
    let dotColor = 'bg-gray-500';

    switch (status) {
        case 'paid':
            bgColor = 'bg-gray-100';
            dotColor = 'bg-gray-500';
            break;
        case 'fulfilled':
            bgColor = 'bg-gray-100';
            dotColor = 'bg-gray-500';
            break;
        case 'unfulfilled':
            bgColor = 'bg-yellow-100';
            dotColor = 'bg-yellow-500';
            break;
        case 'tracking':
            bgColor = 'bg-transparent';
            textColor = 'text-gray-600';
            break;
        default:
            break;
    }

    if (status === 'tracking') {
        return <span className={`${textColor} text-sm`}>{label || 'Tracking added'}</span>;
    }

    if (status === 'none') {
        return null;
    }

    return (
        <div className={`inline-flex items-center px-2.5 py-0.5 rounded-full ${bgColor}`}>
            <div className={`h-2 w-2 rounded-full ${dotColor} mr-1.5`}></div>
            <span className={`text-sm ${textColor} font-medium`}>
                {label || status.charAt(0).toUpperCase() + status.slice(1)}
            </span>
        </div>
    );
}
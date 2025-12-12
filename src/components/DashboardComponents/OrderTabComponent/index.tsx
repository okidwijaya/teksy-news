'use client';

import React from 'react';
import { Plus, Search } from 'lucide-react';

interface OrderTabProps {
    label: string;
    active?: boolean;
    onClick?: () => void;
}

function OrderTab({ label, active = false, onClick }: OrderTabProps) {
    return (
        <button
            className={`px-4 py-2 text-sm ${active
                ? 'bg-white rounded-t-md border-b-2 border-[#E4E4E4] font-medium'
                : 'text-gray-700 hover:text-gray-900'}`}
            onClick={onClick}
        >
            {label}
        </button>
    );
}

export default function OrderTabs() {
    const [activeTab, setActiveTab] = React.useState('All');

    const tabs = ['All', 'Unfulfilled', 'Unpaid', 'Open', 'Archived'];

    return (
        <div className="flex justify-between items-center bg-gray-100 px-4 pt-4">
            <div className="flex items-center">
                {tabs.map((tab) => (
                    <OrderTab
                        key={tab}
                        label={tab}
                        active={activeTab === tab}
                        onClick={() => setActiveTab(tab)}
                    />
                ))}

                <button className="ml-2 p-2 text-gray-500 hover:text-gray-700">
                    <Plus className="h-5 w-5" />
                </button>
            </div>

            <div className="flex items-center space-x-2">
                <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <Search className="h-4 w-4 text-gray-400" />
                    </div>
                    <input
                        type="text"
                        className="block w-full pl-9 pr-3 py-1.5 border border-gray-300 rounded-md text-sm"
                        placeholder="Search orders"
                    />
                </div>

                <button className="p-1.5 border border-gray-300 rounded-md bg-white">
                    <svg className="h-5 w-5 text-gray-500" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
                    </svg>
                </button>

                <button className="p-1.5 border border-gray-300 rounded-md bg-white">
                    <svg className="h-5 w-5 text-gray-500" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                    </svg>
                </button>

                <button className="p-1.5 border border-gray-300 rounded-md bg-white">
                    <svg className="h-5 w-5 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4h13M3 8h9m-9 4h6m4 0l4-4m0 0l4 4m-4-4v12" />
                    </svg>
                </button>
            </div>
        </div>
    );
}
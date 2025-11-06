import React from 'react';
import { ArrowUpDown, Search, SlidersHorizontal } from 'lucide-react';

interface SearchAndFilterProps {
    tabs: string[];
    initialActiveTab?: string;
}

interface TabsProps {
    tabs: string[];
    activeTab: string;
    onChange: (tab: string) => void;
}

const Tabs: React.FC<TabsProps> = ({ tabs, activeTab, onChange }) => {
    return (
        <div className="flex text-[#212121]">
            {tabs.map((tab) => (
                <button
                    key={tab}
                    className={`hover:bg-[#F1F1F1] !text-[12px] px-4 py-1 border-b-2 ${activeTab === tab ? 'border-b-[#212121] text-[#212121] font-semibold' : 'border-transparent'
                        }`}
                    onClick={() => onChange(tab)}
                >
                    {tab}
                </button>
            ))}
            <button className="hover:bg-[#F1F1F1] px-4 py-2">
                <span className="text-xl">+</span>
            </button>
        </div>
    );
};

const SearchFilter: React.FC = () => {
    return (
        <div className="flex justify-end gap-2 pr-2">
            <div className="relative">
                <input
                    type="text"
                    placeholder="Search"
                    className="pl-8 pr-4 py-1 border hover:border-[#212121] text-[#212121] text-[12px] border-[#F1F1F1] rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
                />
                <Search className="absolute left-2 top-1.5 w-4 h-4 text-[#212121] opacity-80" />
            </div>

            <button className="p-1 border rounded-md border-[#F1F1F1] hover:border-[#212121]">
                <SlidersHorizontal className="w-4 h-4 text-[#212121]" />
            </button>

            <button className="p-1 border border-[#F1F1F1] rounded-md hover:border-[#212121]">
                <svg className="h-4 w-4 text-[#212121]" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
                </svg>
            </button>

            <button className="p-1 border border-[#F1F1F1] rounded-md hover:border-[#212121]">
                <svg className="h-4 w-4 text-[#212121]" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                </svg>
            </button>

            <button className="p-1 border border-[#F1F1F1] rounded-md hover:border-[#212121]">
                <svg className="h-4 w-4 text-[#212121]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4h13M3 8h9m-9 4h6m4 0l4-4m0 0l4 4m-4-4v12" />
                </svg>
            </button>

            <button className="p-1 border rounded-md border-[#F1F1F1] hover:border-[#212121]">
                <ArrowUpDown className="w-4 h-4 text-[#212121]" />
            </button>
        </div>
    );
};

export default function SearchAndFilter({ tabs, initialActiveTab }: SearchAndFilterProps) {
    const [activeTab, setActiveTab] = React.useState<string>(initialActiveTab || tabs[0]);

    return (
        <div className='border-b border-b-[#F1F1F1] flex items-center justify-between px-0 py-0'>
            <Tabs tabs={tabs} activeTab={activeTab} onChange={setActiveTab} />
            <SearchFilter />
        </div>
    );
}

"use client"
import { useEffect, useState } from 'react';
import { Search, Filter, Download, Upload, Package, MoreHorizontal, PlusCircle, ArrowDownUp, RefreshCw } from 'lucide-react';
import ImagePlaceholder from '../../../../public/banners/picture-placeholder.svg'
import Image from 'next/image';

// Types
interface InventoryItem {
    id: number;
    name: string;
    sku: string;
    image: string;
    stock: number;
    available: number;
    status: 'In stock' | 'Low stock' | 'Out of stock';
    variant?: string;
    location?: string;
    supplier?: string;
    restockDate?: string;
    category?: string;
    price: string;
    cost?: string;
}

interface TabProps {
    tabs: string[];
    activeTab: string;
    onChange: (tab: string) => void;
    counts?: Record<string, number>;
}

// Button Component
const Button: React.FC<{
    children: React.ReactNode;
    primary?: boolean;
    className?: string;
    icon?: React.ReactNode;
}> = ({ children, primary = false, className = '', icon }) => {
    return (
        <button
            className={`border border-[#D4D4D4] px-2 py-1 text-[12px] rounded-md flex items-center ${primary
                ? 'bg-[#212121] text-white hover:bg-black'
                : 'bg-white text-[#212121] hover:bg-gray-200'
                } ${className}`}
        >
            {icon && <span className="mr-2">{icon}</span>}
            {children}
        </button>
    );
};

// Header Component
const Header: React.FC = () => {
    return (
        <div className="flex items-center justify-between mb-6">
            <div className="flex items-center">
                <div className="w-6 h-6 mr-2">
                    <Package className="w-6 h-6 text-[#212121]" />
                </div>
                <h1 className="text-[#212121] text-xl font-semibold">Inventory</h1>
            </div>
            <div className="flex space-x-3">
                <Button icon={<Download className="w-4 h-4" />}>Export</Button>
                <Button icon={<Upload className="w-4 h-4" />}>Import</Button>
                <Button primary icon={<PlusCircle className="w-4 h-4" />}>Add inventory</Button>
            </div>
        </div>
    );
};

// Tabs Component
const Tabs: React.FC<TabProps> = ({ tabs, activeTab, onChange, counts }) => {
    return (
        <div className="border-b bg-white rounded-t-md">
            <div className="flex">
                {tabs.map((tab) => (
                    <button
                        key={tab}
                        className={`text-[#212121] font-light px-4 py-2 border-b-2 flex items-center ${activeTab === tab ? 'border-[#212121] text-[#212121] font-semibold' : 'border-transparent'
                            }`}
                        onClick={() => onChange(tab)}
                    >
                        {tab}
                        {counts && counts[tab] !== undefined && (
                            <span className="ml-2 bg-gray-200 text-[#212121] rounded-full px-2 py-0.5 text-xs">
                                {counts[tab]}
                            </span>
                        )}
                    </button>
                ))}
            </div>
        </div>
    );
};

// Stats Cards Component
const StatsCards: React.FC = () => {
    return (
        <div className="grid grid-cols-4 gap-4 mb-6">
            <div className="bg-[#212121] p-4 rounded-lg border">
                <h3 className="text-[12px] text-[#F3F4F6] mb-1">Total inventory</h3>
                <p className="!text-[16px] font-semibold">231</p>
            </div>
            <div className="bg-[#212121] p-4 rounded-lg border">
                <h3 className="text-[12px] text-[#F3F4F6] mb-1">Active inventory</h3>
                <p className="!text-[16px] font-semibold">187</p>
            </div>
            <div className="bg-[#212121] p-4 rounded-lg border">
                <h3 className="text-[12px] text-[#F3F4F6] mb-1">Out of stock</h3>
                <p className="!text-[16px] font-semibold">44</p>
            </div>
            <div className="bg-[#212121] p-4 rounded-lg border">
                <h3 className="text-[12px] text-[#F3F4F6] mb-1">Inventory value</h3>
                <p className="!text-[16px] font-semibold">Rp 23.5M</p>
            </div>
        </div>
    );
};

// Search and Filter Component
const SearchFilter: React.FC = () => {
    return (
        <div className="bg-white flex justify-between items-center px-4 py-2">
            <div className="relative w-1/3">
                <Search className="absolute left-3 top-2.5 w-4 h-4 text-[#212121]" />
                <input
                    type="text"
                    placeholder="Search inventory"
                    className="pl-10 pr-4 py-2 text-[#212121] text-[12px] w-full border rounded-md border-[#F1F1F1]"
                />
            </div>
            <div className="flex space-x-2">
                <Button icon={<Filter className="w-4 h-4 text-[12px] text-[#212121]" />}>Filter</Button>
                <Button icon={<ArrowDownUp className="w-4 h-4 text-[12px] text-[#212121]" />}>Sort</Button>
                <button className="text-[12px] p-2 border rounded-md hover:bg-gray-100">
                    <RefreshCw className="w-4 h-4 text-[#212121]" />
                </button>
            </div>
        </div>
    );
};

// Status Badge Component
const StatusBadge: React.FC<{ status: string }> = ({ status }) => {
    let bgColor = 'bg-green-100 text-green-800';

    if (status === 'Low stock') {
        bgColor = 'bg-yellow-100 text-yellow-800';
    } else if (status === 'Out of stock') {
        bgColor = 'bg-red-100 text-red-800';
    }

    return (
        <span className={`px-2 py-1 rounded-md text-xs ${bgColor}`}>
            {status}
        </span>
    );
};

// Inventory Table Component
const InventoryTable: React.FC<{ items: InventoryItem[] }> = ({ items }) => {
    return (
        <div className="bg-white rounded-b-md">
            <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                    <tr>
                        <th className="w-12 p-4">
                            <input type="checkbox" className="rounded" />
                        </th>
                        <th className="p-4 text-left text-[#212121] font-semibold text-[12px]">Product</th>
                        <th className="p-4 text-left text-[#212121] font-semibold text-[12px]">SKU</th>
                        <th className="p-4 text-left text-[#212121] font-semibold text-[12px]">Status</th>
                        <th className="p-4 text-right text-[#212121] font-semibold text-[12px]">Stock</th>
                        <th className="p-4 text-right text-[#212121] font-semibold text-[12px]">Available</th>
                        <th className="p-4 text-right text-[#212121] font-semibold text-[12px]">Price</th>
                        <th className="w-12 p-4"></th>
                    </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                    {items.map((item) => (
                        <tr key={item.id} className="hover:bg-gray-50">
                            <td className="p-4">
                                <input type="checkbox" className="rounded" />
                            </td>
                            <td className="p-4">
                                <div className="flex items-center">
                                    <Image
                                        width={100}
                                        height={100}
                                        src={ImagePlaceholder.src}
                                        alt="Product Image"
                                        className="w-8 h-8 object-cover mr-3 rounded-md border"
                                    />
                                    <div>
                                        <div className="text-[12px] font-semibold text-[#212121]">{item.name}</div>
                                        {item.variant && <div className="text-[11px] text-[#212121] rounded-lg bg-[#F3F4F6] w-fit py-0 px-2">{item.variant}</div>}
                                    </div>
                                </div>
                            </td>
                            <td className="p-4 text-[#212121] text-[12px]">{item.sku}</td>
                            <td className="p-4">
                                <StatusBadge status={item.status} />
                            </td>
                            <td className="p-4 text-[#212121] text-right text-[12px]">{item.stock}</td>
                            <td className="p-4 text-[#212121] text-right text-[12px]">{item.available}</td>
                            <td className="p-4 text-[#212121] text-right text-[12px]">{item.price}</td>
                            <td className="p-4 text-[#212121] text-right text-[12px]">
                                <button className="p-1 hover:bg-gray-100 rounded">
                                    <MoreHorizontal className="w-5 h-5 text-[#212121]" />
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

// Main Component
const Page: React.FC = () => {
    const [activeTab, setActiveTab] = useState('All inventory');
    const tabs = ['All inventory', 'In stock', 'Low stock', 'Out of stock'];
    const tabCounts = {
        'All inventory': 231,
        'In stock': 187,
        'Low stock': 24,
        'Out of stock': 20
    };

    const [items, setItems] = useState<InventoryItem[]>([]);

    useEffect(() => {
        setItems([
            {
                id: 1,
                name: 'Batik Tulis Motif Parang',
                sku: 'BT-001',
                image: '/api/placeholder/80/80',
                stock: 25,
                available: 23,
                status: 'In stock',
                variant: 'Hitam',
                price: 'Rp 450,000'
            },
            {
                id: 2,
                name: 'Tas Anyaman Rotan',
                sku: 'TR-102',
                image: '/api/placeholder/80/80',
                stock: 12,
                available: 10,
                status: 'In stock',
                variant: 'Natural',
                price: 'Rp 320,000'
            },
            {
                id: 3,
                name: 'Songket Palembang',
                sku: 'SP-035',
                image: '/api/placeholder/80/80',
                stock: 5,
                available: 5,
                status: 'Low stock',
                variant: 'Merah',
                price: 'Rp 1,200,000'
            },
            {
                id: 4,
                name: 'Gula Aren Organik',
                sku: 'GA-250',
                image: '/api/placeholder/80/80',
                stock: 50,
                available: 47,
                status: 'In stock',
                variant: '250g',
                price: 'Rp 35,000'
            },
            {
                id: 5,
                name: 'Keripik Pisang Coklat',
                sku: 'KP-100',
                image: '/api/placeholder/80/80',
                stock: 0,
                available: 0,
                status: 'Out of stock',
                variant: '100g',
                price: 'Rp 15,000'
            },
            {
                id: 6,
                name: 'Tenun Ikat Lombok',
                sku: 'TI-221',
                image: '/api/placeholder/80/80',
                stock: 8,
                available: 8,
                status: 'Low stock',
                variant: 'Biru',
                price: 'Rp 850,000'
            }
        ])
    }, [])

    return (
        <div className="container mx-auto p-6 bg-[#F1F1F1] h-full">
            <Header />
            <StatsCards />
            <Tabs
                tabs={tabs}
                activeTab={activeTab}
                onChange={setActiveTab}
                counts={tabCounts}
            />
            <SearchFilter />
            <InventoryTable items={items} />
        </div>
    );
};

export default Page;
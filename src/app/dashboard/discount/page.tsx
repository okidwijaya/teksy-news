"use client"

import React, { useEffect, useState } from 'react';
import { Settings, Tag, ShoppingBag, Truck, Package, Download, Car, Combine } from 'lucide-react';
import SearchAndFilter from "@/components/DashboardComponents/SearchAndFilter";
import Link from 'next/link';

interface Discount {
    id: number;
    title: string;
    description: string;
    status: 'Active' | 'Expired' | 'Scheduled';
    method: 'Code' | 'Automatic';
    type: {
        icon: 'tag' | 'bag' | 'truck' | 'package';
        text: string;
    };
    combinations: boolean;
    used: number;
    hasAttachment?: boolean;
}

// HeaderButton Component
const HeaderButton: React.FC<{ children: React.ReactNode; primary?: boolean }> = ({ children, primary = false }) => {
    return (
        <button
            className={`border border-[#D4D4D4] px-2 py-1 text-[12px] font-light rounded-md transition-colors ${primary
                ? 'bg-[#212121] text-[#FFFFFF] hover:bg-[#000000]'
                : 'bg-white hover:bg-gray-200'
                }`}
        >
            {children}
        </button>
    );
};

const Header: React.FC = () => {
    return (
        <div className="flex items-center justify-between mb-6 text-[#212121]">
            <div className="flex items-center">
                <Settings className="w-6 h-6 mr-2 text-[#212121]" />
                <h1 className="text-xl font-semibold">Discount</h1>
            </div>
            <div className="flex space-x-3">
                <div className="flex items-center space-x-3">
                    <HeaderButton>
                        <div className="flex items-center">
                            Export
                            <Download className="ml-1 w-4 h-4" />
                        </div>
                    </HeaderButton>
                    <HeaderButton primary>
                        <Link href="/dashboard/discount/new">Create discount</Link>
                    </HeaderButton>
                </div>
            </div>
        </div>
    );
};

const Page: React.FC = () => {
    const [discounts, setDiscounts] = useState<Discount[]>([]);

    const [selectedDiscounts, setSelectedDiscounts] = useState<number[]>([]);
    const [selectAll, setSelectAll] = useState<boolean>(false);

    const tabs = ['All', 'Active', 'Scheduled', 'Expired'];

    const handleSelectAll = () => {
        if (selectAll) {
            setSelectedDiscounts([]);
        } else {
            setSelectedDiscounts(discounts.map(discount => discount.id));
        }
        setSelectAll(!selectAll);
    };

    const handleSelectDiscount = (id: number) => {
        if (selectedDiscounts.includes(id)) {
            setSelectedDiscounts(selectedDiscounts.filter(discountId => discountId !== id));
            setSelectAll(false);
        } else {
            setSelectedDiscounts([...selectedDiscounts, id]);
            if (selectedDiscounts.length + 1 === discounts.length) {
                setSelectAll(true);
            }
        }
    };

    const getTypeIcon = (iconType: string) => {
        switch (iconType) {
            case 'tag':
                return <Tag className="text-[#212121] w-4 h-4" />;
            case 'bag':
                return <ShoppingBag className="text-[#212121] w-4 h-4" />;
            case 'truck':
                return <Truck className="text-[#212121] w-4 h-4" />;
            case 'package':
                return <Package className="text-[#212121] w-4 h-4" />;
            default:
                return <Tag className="text-[#212121] w-4 h-4" />;
        }
    };

    const getActionIcons = () => {
        return (
            <div className="flex items-center space-x-2">
                <button className="text-[#212121] hover:text-black">
                    <Tag className="text-[#212121] w-4 h-4" />
                </button>
                <button className="text-[#212121] hover:text-black">
                    <Car className="text-[#212121] w-4 h-4" />
                </button>
                <button className="text-[#212121] hover:text-black">
                    <Combine className="text-[#212121] w-4 h-4" />
                </button>
            </div>
        );
    };

    useEffect(() => {        setDiscounts([
            {
                id: 1,
                title: 'Code BXGY Discount - SUMMERBOGO',
                description: 'Buy 1 item, get 1 item free • One use per customer',
                status: 'Expired',
                method: 'Code',
                type: {
                    icon: 'tag',
                    text: 'Buy X Get Y'
                },
                combinations: false,
                used: 0
            },
            {
                id: 2,
                title: 'Buy one, get the second 10 percent off',
                description: 'Buy 1 item, get 1 item at 10% off',
                status: 'Expired',
                method: 'Automatic',
                type: {
                    icon: 'tag',
                    text: 'Buy X Get Y'
                },
                combinations: false,
                used: 0
            },
            {
                id: 3,
                title: 'Buy three, get 30 percent off',
                description: '30% off The Complete Snowboard (Ice / Medium) • Minimum quantity of 3',
                status: 'Expired',
                method: 'Automatic',
                type: {
                    icon: 'tag',
                    text: 'Amount off products'
                },
                combinations: false,
                used: 0
            },
            {
                id: 4,
                title: 'Free Shipping Discount - FREESHIP2023',
                description: 'Free shipping on one-time purchase products • Minimum quantity of 3 • For all countries • Applies to shipping rates under Rp100.00',
                status: 'Expired',
                method: 'Code',
                type: {
                    icon: 'truck',
                    text: 'Free shipping'
                },
                combinations: false,
                used: 0
            },
            {
                id: 5,
                title: 'BLACKFRIDAY',
                description: '80% off one-time purchase products • Minimum quantity of 1',
                status: 'Expired',
                method: 'Code',
                type: {
                    icon: 'package',
                    text: 'Amount off order'
                },
                combinations: false,
                used: 0,
                hasAttachment: true
            }
        ])}, []);

    return (
        <div className="bg-[#F1F1F1] h-full p-4">
            <Header />
            <div className="max-w-7xl mx-auto bg-white rounded-lg shadow">
                <SearchAndFilter tabs={tabs} />

                <div className="overflow-x-auto">
                    <table className="w-full text-left">
                        <thead>
                            <tr className="bg-[#F3F4F6] border-b border-gray-200">
                                <th className="px-4 py-2 text-[12px] font-light w-10">
                                    <input
                                        type="checkbox"
                                        className="rounded"
                                        checked={selectAll}
                                        onChange={handleSelectAll}
                                    />
                                </th>
                                <th className="px-4 py-2 text-[12px] font-light text-gray-700">Title</th>
                                <th className="px-4 py-2 text-[12px] font-light text-gray-700">Status</th>
                                <th className="px-4 py-2 text-[12px] font-light text-gray-700">Method</th>
                                <th className="px-4 py-2 text-[12px] font-light text-gray-700">Type</th>
                                <th className="px-4 py-2 text-[12px] font-light text-gray-700">Combinations</th>
                                <th className="px-4 py-2 text-[12px] font-light text-gray-700">Used</th>
                            </tr>
                        </thead>
                        <tbody>
                            {discounts.map((discount) => (
                                <tr key={discount.id} className="border-b border-gray-200 hover:bg-gray-50">
                                    <td className="p-4">
                                        <input
                                            type="checkbox"
                                            className="rounded"
                                            checked={selectedDiscounts.includes(discount.id)}
                                            onChange={() => handleSelectDiscount(discount.id)}
                                        />
                                    </td>
                                    <td className="p-4">
                                        <div>
                                            <div className="font-semibold text-[12px] flex items-center text-black">
                                                {discount.title}
                                                <span>
                                                    {discount.hasAttachment && (
                                                        <svg className="ml-2 w-4 h-4 text-[#212121] text-[12px] font-light" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                                            <path d="M21.44 11.05l-9.19 9.19a6 6 0 01-8.49-8.49l9.19-9.19a4 4 0 015.66 5.66l-9.2 9.19a2 2 0 01-2.83-2.83l8.49-8.48" />
                                                        </svg>
                                                    )}
                                                </span>
                                            </div>
                                            <div className="text-[12px] text-[#212121]">{discount.description}</div>
                                        </div>
                                    </td>
                                    <td className="p-4 text-[12px] font-light text-[#212121]">
                                        <span className={`inline-flex items-center px-2.5 py-0.5 rounded-md 
                                                ${discount.status === 'Active' ? 'bg-green-100 text-green-800' :
                                                discount.status === 'Scheduled' ? 'bg-blue-100 text-blue-800' :
                                                    'bg-gray-100 text-gray-800'}`}>
                                            {discount.status}
                                        </span>
                                    </td>
                                    <td className="p-4 text-[12px] font-light text-[#212121]">{discount.method}</td>
                                    <td className="p-4 text-[12px] font-light text-[#212121]">
                                        <div className="flex items-center">
                                            {getTypeIcon(discount.type.icon)}
                                            <span className="ml-2">{discount.type.text}</span>
                                        </div>
                                    </td>
                                    <td className="p-4 text-[12px] font-light text-[#212121]">
                                        {getActionIcons()}
                                    </td>
                                    <td className="p-4 text-[12px] font-light text-[#212121]">{discount.used}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                <div className="p-4 text-center text-gray-600 border-t border-gray-200">
                    Learn more about <a href="#" className="text-blue-600 hover:underline">discounts</a>
                </div>
            </div>
        </div>
    );
};

export default Page;
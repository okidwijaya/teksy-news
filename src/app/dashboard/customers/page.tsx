"use client"
import { useEffect, useState } from 'react';
import { Search, ChevronDown, RefreshCw, Mail } from 'lucide-react';
import Link from 'next/link';

// Types
interface Customer {
    id: number;
    name: string;
    emailSubscription: 'Not subscribed' | 'Subscribed';
    location?: string;
    orders: number;
    amountSpent: string;
    hasMailIcon?: boolean;
}

// Button Component
// const Button: React.FC<{
//     children: React.ReactNode;
//     primary?: boolean;
//     className?: string;
// }> = ({ children, primary = false, className = '' }) => {
//     return (
//         <button
//             className={`px-4 py-2 rounded-md ${primary
//                 ? 'bg-gray-900 text-white hover:bg-gray-800'
//                 : 'bg-gray-100 hover:bg-gray-200'
//                 } ${className}`}
//         >
//             {children}
//         </button>
//     );
// };

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

// Header Component
const Header: React.FC = () => {
    return (
        <div className="flex items-center justify-between mb-6 text-[#212121]">
            <div className="flex items-center">
                <div className="w-6 h-6 mr-2">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M20 12V8h-4V4h-4V0H4v8H0v4v8h12v-4h4v-4h4z" />
                    </svg>
                </div>
                <h1 className="text-xl font-semibold">Products</h1>
            </div>
            <div className="flex space-x-3">
                <HeaderButton>Export</HeaderButton>
                <HeaderButton>Import</HeaderButton>
                <HeaderButton primary>
                    <Link href="/dashboard/customers/new">Add Customer</Link>
                </HeaderButton>
            </div>
        </div>
    );
};

// Stats Bar Component
const StatsBar: React.FC = () => {
    return (
        <div className="flex justify-between items-center px-4 py-2 bg-white rounded-lg border border-gray-200 mb-4 text-[#212121]">
            <div className="flex space-x-6">
                <p className="border-r border-r-[#D4D4D4] pr-6 font-semibold text-[#212121]">4 customers</p>
                <p className="font-light text-[#212121]">100% of your customer base</p>
            </div>
            <HeaderButton>
                <div className="flex items-center">
                    Add Filter
                    <ChevronDown className="ml-1 w-4 h-4" />
                </div>
            </HeaderButton>
        </div>
    );
};

// Search Component
const SearchBar: React.FC = () => {
    return (
        <div className="flex justify-between items-center py-2 px-4 bg-white rounded-lg border mb-4">
            <div className="relative flex-grow">
                <Search className="absolute left-0 top-2 w-4 h-4 text-[#212121]" />
                <input
                    type="text"
                    placeholder="Search customers"
                    className="pl-6 pr-4 py-2 w-full border-0 focus:outline-none focus:ring-0 text-[12px] text-[#212121]"
                />
            </div>
            <button className="p-2 hover:bg-gray-100 rounded-md">
                <RefreshCw className="w-4 h-4 text-gray-500" />
            </button>
        </div>
    );
};

// Customer Table Component
const CustomerTable: React.FC<{ customers: Customer[] }> = ({ customers }) => {
    return (
        <div className="bg-white rounded-lg border overflow-hidden">
            <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-white">
                    <tr>
                        <th className="w-10 py-2 px-4">
                            <input type="checkbox" className="rounded" />
                        </th>
                        <th className="py-2 px-4 text-left text-[#212121] text-[12px] font-semibold">Customer name</th>
                        <th className="py-2 px-4 text-left text-[#212121] text-[12px] font-semibold">Email subscription</th>
                        <th className="py-2 px-4 text-left text-[#212121] text-[12px] font-semibold">Location</th>
                        <th className="py-2 px-4 text-left text-[#212121] text-[12px] font-semibold">Orders</th>
                        <th className="py-2 px-4 text-right text-[#212121] text-[12px] font-semibold">Amount spent</th>
                    </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                    {customers.map((customer) => (
                        <tr key={customer.id} className="hover:bg-gray-50">
                            <td className="py-2 px-4">
                                <input type="checkbox" className="rounded" />
                            </td>
                            <td className="py-2 px-4 text-[#212121] text-[12px] font-medium">{customer.name}</td>
                            <td className="py-2 px-4 text-[#212121] text-[12px]">
                                <div className="flex items-center">
                                    <span className="px-3 py-1 bg-gray-100 text-[#212121] rounded-md text-[12px]">
                                        {customer.emailSubscription}
                                    </span>
                                    {customer.hasMailIcon && (
                                        <Mail className="ml-2 w-4 h-4 text-[#212121]" />
                                    )}
                                </div>
                            </td>
                            <td className="py-2 px-4 text-[#212121] text-[12px]">{customer.location || ''}</td>
                            <td className="py-2 px-4 text-[#212121] text-[12px]">{customer.orders} orders</td>
                            <td className="py-2 px-4 text-[#212121] text-[12px] text-right">{customer.amountSpent}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

// Main Component
const Page: React.FC = () => {
    const [customers, setCustomers] = useState<Customer[]>([]);

    useEffect(() => {
        setCustomers([
            {
                id: 1,
                name: 'oki rahmansah',
                emailSubscription: 'Not subscribed',
                location: 'demak, JT, Indonesia',
                orders: 0,
                amountSpent: 'Rp 0.00'
            },
            {
                id: 2,
                name: 'Ayumu Hirano',
                emailSubscription: 'Not subscribed',
                location: '',
                orders: 0,
                amountSpent: 'Rp 0.00'
            },
            {
                id: 3,
                name: 'Russell Winfield',
                emailSubscription: 'Not subscribed',
                location: 'Toronto, Canada',
                orders: 0,
                amountSpent: 'Rp 0.00',
                hasMailIcon: true
            },
            {
                id: 4,
                name: 'Karine Ruby',
                emailSubscription: 'Not subscribed',
                location: '',
                orders: 0,
                amountSpent: 'Rp 0.00'
            }
        ])
    }, [])

    return (
        <div className="container mx-auto p-6 bg-[#F1F1F1] h-full">
            <Header />
            <StatsBar />
            <SearchBar />
            <CustomerTable customers={customers} />
        </div>
    );
};

export default Page;
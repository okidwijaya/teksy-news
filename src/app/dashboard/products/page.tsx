"use client"
import { useEffect, useState } from 'react';
import { ChevronDown, ChevronLeft, ChevronRight } from 'lucide-react';
import StatsOverview from '@/components/DashboardComponents/StatsCardOverview';
import ImagePlaceholder from '../../../../public/banners/picture-placeholder.svg'
import SearchAndFilter from '@/components/DashboardComponents/SearchAndFilter';
import Image from 'next/image';
import Link from 'next/link';

// Types
interface Product {
    id: number;
    name: string;
    status: 'Draft' | 'Active' | 'Archived';
    inventory: string;
    category?: string;
    imageUrl: string;
    catalogs: number;
}

interface ProductTableProps {
    products: Product[];
}

interface PaginationProps {
    currentPage: number;
    totalPages: number;
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

// Header Component
const Header: React.FC = () => {
    return (
        <div className="flex items-center justify-between mb-6 text-[#212121] flex-wrap md:flex-nowrap">
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
                <HeaderButton>
                    <div className="flex items-center">
                        More actions
                        <ChevronDown className="ml-1 w-4 h-4" />
                    </div>
                </HeaderButton>
                <HeaderButton primary>
                    <Link href="/dashboard/products/new">Add product</Link>
                </HeaderButton>
            </div>
        </div>
    );
};

// Product Table Component
const ProductTable: React.FC<ProductTableProps> = ({ products }) => {
    return (
        <div className="border-none rounded-lg overflow-scroll h-[500px]">
            <table className="min-w-full border-none">
                <thead className='border-none'>
                    <tr className="bg-gray-50">
                        <th className="font-semibold text-[10px] text-gray-500 w-10 p-3">
                            <input type="checkbox" className="rounded" />
                        </th>
                        <th className="font-semibold text-[12px] text-gray-500 p-3 text-left">Product</th>
                        <th className="font-semibold text-[12px] text-gray-500 p-3 text-left">Status</th>
                        <th className="font-semibold text-[12px] text-gray-500 p-3 text-left">Inventory</th>
                        <th className="font-semibold text-[12px] text-gray-500 p-3 text-left">Category</th>
                        <th className="font-semibold text-[12px] text-gray-500 p-3 text-left">Channels</th>
                        <th className="font-semibold text-[12px] text-gray-500 p-3 text-left">Catalogs</th>
                    </tr>
                </thead>
                <tbody>
                    {products.map((product) => (
                        <tr key={product.id} className="border-t border-t-[#E4E4E4] hover:bg-gray-50">
                            <td className="p-3 text-[#212121] text-[12px] font-light">
                                <input type="checkbox" className="rounded" />
                            </td>
                            <td className="p-3 text-[#212121] text-[12px] font-light">
                                <div className="flex items-center">
                                    <Image width={100} height={100} src={ImagePlaceholder.src} alt="product.name" className="w-8 h-8 object-cover mr-3" />
                                    <span>{product.name}</span>
                                </div>
                            </td>
                            <td className="p-3 text-[#212121] text-[12px] font-light">
                                <span className="px-2 py-1 bg-blue-100 text-blue-800 rounded-md text-sm">
                                    {product.status}
                                </span>
                            </td>
                            <td className="p-3 text-[#212121] text-[12px] font-light">{product.inventory}</td>
                            <td className="p-3 text-[#212121] text-[12px] font-light">{product.category || ''}</td>
                            <td className="p-3 text-[#212121] text-[12px] font-light"></td>
                            <td className="p-3 text-[#212121] text-[12px] font-light">{product.catalogs}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

// Pagination Component
const Pagination: React.FC<PaginationProps> = ({ currentPage, totalPages }) => {
    return (
        <div className="flex items-center justify-between mt-4">
            <div className="text-sm text-gray-600">
                {currentPage}-{totalPages}
            </div>
            <div className="flex items-center">
                <button className="p-2 rounded hover:bg-gray-100">
                    <ChevronLeft className="w-5 h-5" />
                </button>
                <button className="p-2 rounded hover:bg-gray-100">
                    <ChevronRight className="w-5 h-5" />
                </button>
            </div>
        </div>
    );
};

// Main Component
const Page: React.FC = () => {
    const tabs = ['All', 'Active', 'Draft', 'Archived'];
    const [products, setProducts] = useState<Product[]>([]);
    useEffect(() => {
        setProducts([
            {
                id: 1,
                name: 'Dark Spot Serum',
                status: 'Draft',
                inventory: 'Inventory not tracked',
                imageUrl: '/api/placeholder/50/50',
                catalogs: 1
            },
            {
                id: 2,
                name: 'Liquid Pore Exfoliant',
                status: 'Draft',
                inventory: 'Inventory not tracked',
                imageUrl: '/api/placeholder/50/50',
                catalogs: 1
            },
            {
                id: 3,
                name: 'Emergency Spot Patch',
                status: 'Draft',
                inventory: 'Inventory not tracked',
                imageUrl: '/api/placeholder/50/50',
                catalogs: 1
            },
            {
                id: 4,
                name: 'Emergency Spot Clusters',
                status: 'Draft',
                inventory: 'Inventory not tracked',
                imageUrl: '/api/placeholder/50/50',
                catalogs: 1
            },
            {
                id: 5,
                name: 'Cream Moisturizer',
                status: 'Draft',
                inventory: 'Inventory not tracked',
                imageUrl: '/api/placeholder/50/50',
                catalogs: 1
            },
            {
                id: 6,
                name: 'Moisturize Cleanser',
                status: 'Draft',
                inventory: 'Inventory not tracked',
                imageUrl: '/api/placeholder/50/50',
                catalogs: 1
            },
            {
                id: 7,
                name: 'Acne Cleanser',
                status: 'Draft',
                inventory: '1,019 in stock for 6 variants',
                category: 'Hobbies & Creative Arts',
                imageUrl: '/api/placeholder/50/50',
                catalogs: 1
            },
            {
                id: 8,
                name: 'LED High Tops',
                status: 'Draft',
                inventory: 'Inventory not tracked',
                imageUrl: '/api/placeholder/50/50',
                catalogs: 1
            },
            {
                id: 9,
                name: 'Striped Skirt and Top',
                status: 'Draft',
                inventory: 'Inventory not tracked',
                imageUrl: '/api/placeholder/50/50',
                catalogs: 1
            }
        ])
    }, [])

    return (
        <div className="bg-[#F1F1F1] p-4 mb-8 w-full h-full">
            <Header />
            <StatsOverview />
            <div className='bg-white my-4 rounded-md border border-[#E4E4E4] flex flex-col'>
                <SearchAndFilter tabs={tabs} />
                <ProductTable products={products} />
                <Pagination currentPage={1} totalPages={44} />
            </div>
        </div>
    );
};

export default Page;
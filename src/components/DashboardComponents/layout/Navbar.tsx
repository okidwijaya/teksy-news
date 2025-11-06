'use client';

import React, { useState } from 'react';
import { Search, Bell } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import logo from "../../../../public/final-logo.svg";

export default function Navbar() {
    const [searchQuery, setSearchQuery] = useState('');

    return (
        <div className="w-full h-16 bg-[#212121] text-white px-4 flex items-center justify-between">
            <div className="flex items-center space-x-4 pl-10 md:pl-0 w-fit md:w-full md:max-w-[196px]">
                <div className="flex items-center">
                    <Link href="/" className='w-6 h-6 mr-auto ml-0'>
                        <Image
                            width={24}
                            height={24}
                            src={logo}
                            alt="Loading..."
                            className="w-6 h-6 object-contain block"
                        />
                    </Link>
                </div>
            </div>

            <div className="flex-grow max-w-2xl mx-4">
                <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <Search className="h-5 w-5 text-[#D7C5F8]" />
                    </div>
                    <input
                        type="text"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="block w-full pl-10 pr-3 py-2 rounded-md bg-[#222222] border border-[#D7C5F8] text-gray-200 text-[12px] placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="Search"
                    />
                    <div className="absolute inset-y-0 right-3 hidden md:flex items-center">
                        <div className="text-gray-400 text-xs bg-gray-700 px-1.5 py-0.5 rounded">⌘</div>
                        <div className="ml-1 text-gray-400 text-xs bg-gray-700 px-1.5 py-0.5 rounded">K</div>
                    </div>
                </div>
            </div>

            <div className="flex items-center space-x-4">
                <button className="p-2 rounded-md hover:bg-gray-800">
                    <Bell size={20} />
                </button>
                <div className="flex items-center">
                    <div className="bg-[#D7C5F8] h-6 w-6 rounded-md flex items-center justify-center text-[#6B57E4] font-light text-[12px]">
                        <span>QT</span>
                    </div>
                    <span className="ml-2 text-[12px] hidden md:block">Quickstart (e2b0e49)</span>
                </div>
            </div>
        </div>
    );
}
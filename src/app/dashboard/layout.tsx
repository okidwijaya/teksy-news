"use client"

import React from 'react';
import Navbar from '@/components/DashboardComponents/layout/Navbar';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import Sidebar from '@/components/DashboardComponents/layout/Sidebar';

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
        const [sidebarOpen, setSidebarOpen] = useState(false);

    const handleSidebarCloseByMenu = () => {
        setSidebarOpen(false);
    };
    return (
        <div className='w-full h-screen grid grid-cols-1'>
            <Navbar />
            <div className="relative bg-[#F1F1F1] flex flex-row overflow-hidden">
                <div className='hidden md:block'>
                    <Sidebar />
                </div>

                <button
                    className={`md:hidden w-fit h-[30px] block top-4 left-4 fixed inset-0 z-30 bg-gray-900/50 duration-200 ease-in-out opacity-100}`}
                    onClick={() => setSidebarOpen(true)}
                >
                    <Menu className='text-white' />
                </button>

                <div
                    className={`fixed inset-y-0 left-0 z-40 w-64 transform overflow-y-auto bg-white transition duration-200 ease-in-out sidebarContainer ${sidebarOpen ? '!block' : 'hidden'} md:hidden ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'
                        }`}
                >
                    <div className="flex items-center justify-between border-b px-4 py-2 bg-[#212121] ">
                        <h2 className="text-[14px]text-white font-semibold">Welcome</h2>
                        <button
                            onClick={() => setSidebarOpen(false)}
                            className="rounded-md p-2 text-white hover:bg-gray-100 hover:text-black"
                        >
                            <X className="h-4 w-4 text-white" />
                        </button>
                    </div>
                    <Sidebar onClick={handleSidebarCloseByMenu} />
                </div>

                <main className="w-full h-full p-0 overflow-auto">
                    {children}
                    <footer className="hidden border-t bg-white px-4 py-4 text-center text-sm text-gray-500 md:px-6 h-full">
                        <p>© 2025 Cloudsand. All rights reserved.</p>
                    </footer>
                </main>
            </div>
        </div>
    );
}

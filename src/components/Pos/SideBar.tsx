import React, { useState } from 'react';
import {
    Home,
    Package,
    TrendingUp,
    ShoppingCart,
    FileText,
    CreditCard,
    Users,
    Lock,
    Globe,
    Wallet,
    BarChart3,
    Settings,
    LogOut,
    Search,
    ChevronDown,
    ChevronUp
} from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import logo from "../../../public/final-logo.svg";

interface MenuItem {
    id: string;
    label: string;
    icon: React.ReactNode;
    href?: string;
    badge?: string;
    children?: MenuItem[];
}

interface SidebarProps {
    display?: boolean;
    hideFn?: () => void;
    screenSize?: boolean;
}

const Sidebar = ({display, hideFn, screenSize}: SidebarProps) => {
    const [openMenus, setOpenMenus] = useState<string[]>(['sales']);
    const [activeItem, setActiveItem] = useState('sales-transaction');

    const menuItems: MenuItem[] = [
        {
            id: 'dashboard',
            label: 'Dashboard',
            icon: <Home size={12} />,
            href: '/dashboard'
        },
        {
            id: 'inventory',
            label: 'Inventory',
            icon: <Package size={12} />,
            children: []
        },
        {
            id: 'sales',
            label: 'Sales',
            icon: <TrendingUp size={12} />,
            children: [
                {
                    id: 'reservations',
                    label: 'Reservations',
                    icon: <Globe size={12} />,
                    badge: 'Coming soon'
                },
                {
                    id: 'order-processing',
                    label: 'Order Processing',
                    icon: <Globe size={12} />,
                    badge: 'Coming soon'
                },
                {
                    id: 'sales-transaction',
                    label: 'Sales Transaction',
                    icon: <ShoppingCart size={12} />,
                    href: '/sales/transaction'
                },
                {
                    id: 'sales-orders',
                    label: 'Sales Orders',
                    icon: <FileText size={12} />,
                    href: '/sales/orders'
                },
                {
                    id: 'invoice',
                    label: 'Invoice',
                    icon: <CreditCard size={12} />,
                    href: '/sales/invoice'
                },
                {
                    id: 'customers',
                    label: 'Customers',
                    icon: <Users size={12} />,
                    href: '/sales/customers'
                }
            ]
        },
        {
            id: 'purchase',
            label: 'Purchase',
            icon: <Lock size={12} />,
            children: []
        },
        {
            id: 'customer-portal',
            label: 'Customer Portal',
            icon: <Users size={12} />,
            children: []
        },
        {
            id: 'table',
            label: 'Table',
            icon: <Globe size={12} />,
            badge: 'Coming soon'
        },
        {
            id: 'wallet',
            label: 'Wallet',
            icon: <Wallet size={12} />,
            href: '/wallet'
        },
        {
            id: 'report',
            label: 'Report',
            icon: <BarChart3 size={12} />,
            children: []
        }
    ];

    const toggleMenu = (id: string) => {
        setOpenMenus(prev =>
            prev.includes(id)
                ? prev.filter(menuId => menuId !== id)
                : [...prev, id]
        );
    };

    const handleItemClick = (id: string, hasChildren: boolean) => {
        if (hasChildren) {
            toggleMenu(id);
        } else {
            setActiveItem(id);
        }
    };

    return (
        // <div className={`${isMobileScreen ? "absolute z-50 top-0 right-0 w-full h-screen bg-[#1212125f]" : "hidden"}`}></div>
        <div className={`${display ? "flex" : "hidden"} ${screenSize ? "" : ""} flex-col h-screen w-full max-w-[220px] bg-white border-r border-gray-200`}>
            <div className="p-2 flex items-center flex-row gap-2 border-b border-gray-200">
                {display ? <p onClick={hideFn}>Hide Menu</p> : <></>}
                <Link
                    href="/"
                    className="text-lg w-fit font-bold text-[#E5E7EB] hover:text-[#F96E2A] transition-colors duration-200"
                >
                    <Image
                        src={logo}
                        alt="KITA DEV"
                        width={24}
                        height={24}
                        priority
                    />
                </Link>
                <div className="text-xs text-[#121212]">KITA POS</div>
            </div>

            <div className="p-4 border-b border-gray-200">
                <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={12} />
                    <input
                        type="text"
                        placeholder="Search"
                        className="w-full pl-10 pr-4 py-1 border border-gray-200 rounded-lg text-[12px] focus:outline-none focus:ring-2 focus:ring-[#121212] focus:border-transparent"
                    />
                </div>
            </div>

            <div className="flex-1 overflow-y-auto">
                <div className="px-4 py-4">
                    <div className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">Menu</div>

                    <nav className="space-y-1">
                        {menuItems.map((item) => (
                            <div key={item.id}>
                                <button
                                    onClick={() => handleItemClick(item.id, !!item.children)}
                                    className={`w-full flex items-center justify-between px-2 py-1 text-[12px] rounded-lg transition-colors ${activeItem === item.id && !item.children
                                        ? 'bg-blue-50 text-black'
                                        : 'text-gray-700 hover:bg-gray-50'
                                        }`}
                                >
                                    <div className="flex items-center gap-2">
                                        <span className={activeItem === item.id && !item.children ? 'text-[#121212]' : 'text-gray-500'}>
                                            {item.icon}
                                        </span>
                                        <span className="font-medium">{item.label}</span>
                                    </div>

                                    {item.badge && (
                                        <span className="text-[10px] text-gray-400">{item.badge}</span>
                                    )}

                                    {item.children && (
                                        openMenus.includes(item.id)
                                            ? <ChevronUp size={12} className="text-gray-400" />
                                            : <ChevronDown size={12} className="text-gray-400" />
                                    )}
                                </button>

                                {item.children && openMenus.includes(item.id) && (
                                    <div className="ml-3 mt-0 space-y-1">
                                        {item.children.map((child) => (
                                            <button
                                                key={child.id}
                                                onClick={() => setActiveItem(child.id)}
                                                className={`w-full flex items-center gap-2 px-2 py-1 rounded-lg text-[12px] transition-colors ${activeItem === child.id
                                                    ? 'bg-blue-50 text-black'
                                                    : 'text-gray-600 hover:bg-gray-50'
                                                    }`}
                                            >
                                                <span className={activeItem === child.id ? 'text-black' : 'text-gray-400'}>
                                                    {child.icon}
                                                </span>
                                                <span className="font-medium">{child.label}</span>
                                            </button>
                                        ))}
                                    </div>
                                )}
                            </div>
                        ))}
                    </nav>
                </div>
            </div>

            <div className="border-t border-gray-200 flex gap-2 flex-col pt-2 px-0">
                <button className="w-full flex items-center gap-2 px-6 py-0 text-[12px] text-gray-700 hover:bg-gray-50 transition-colors">
                    <Settings size={12} className="text-gray-500" />
                    <span className="font-medium">Settings</span>
                </button>

                <button className="w-full flex items-center gap-2 px-6 py-0 text-[12px] text-gray-700 hover:bg-gray-50 transition-colors">
                    <LogOut size={12} className="text-gray-500" />
                    <span className="font-medium">Log out</span>
                </button>

                <div className="flex items-center gap-3 px-4 pt-2 pb-6 border-t border-gray-200">
                    <div className="w-8 h-8 text-[12px] rounded-full bg-gray-800 flex items-center justify-center text-white font-semibold">
                        HD
                    </div>
                    <div>
                        <div className="text-[12px] font-semibold text-gray-900">Hanin Dhiya</div>
                        <div className="text-[10px] text-gray-500">Admin</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Sidebar;
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
    BarChart3,
    Package,
    Settings,
    ShoppingCart,
    Store,
    User,
    Users,
    Warehouse,
    BadgePercent,
} from 'lucide-react';

const mainNavItems = [
    {
        title: 'Home',
        href: '/dashboard',
        icon: <BarChart3 className="mr-2 h-4 w-4" />,
    },
    {
        title: 'Products',
        href: '/dashboard/products',
        icon: <Package className="mr-2 h-4 w-4" />,
    },
    {
        title: 'Collection',
        href: '/dashboard/products/collection/',
    },
    {
        title: 'Add Collection',
        href: '/dashboard/products/collection/new',
    },
    {
        title: 'Add Products',
        href: '/dashboard/products/new',
    },
    {
        title: 'Inventory',
        href: '/dashboard/inventory',
        icon: <Warehouse className="mr-2 h-4 w-4" />,
    },
    {
        title: 'Orders',
        href: '/dashboard/orders',
        icon: <ShoppingCart className="mr-2 h-4 w-4" />,
    },
    {
        title: 'Add Orders',
        href: '/dashboard/orders/new',
    },
    {
        title: 'Discount',
        href: '/dashboard/discount',
        icon: <BadgePercent className="mr-2 h-4 w-4" />,
    },
    {
        title: 'Create Discount',
        href: '/dashboard/discount/new',
    },
    {
        title: 'Customers',
        href: '/dashboard/customers',
        icon: <Users className="mr-2 h-4 w-4" />,
    },
    {
        title: 'Customers',
        href: '/dashboard/customers/new',
    },
    {
        title: 'Analytics',
        href: '/dashboard/analytics',
        icon: <BarChart3 className="mr-2 h-4 w-4" />,
    },
];

const settingsNavItems = [
    {
        title: 'General Settings',
        href: '/dashboard/settings',
        icon: <Settings className="mr-2 h-4 w-4" />,
    },
    {
        title: 'Account',
        href: '/dashboard/settings/account',
        icon: <User className="mr-2 h-4 w-4" />,
    },
    {
        title: 'Store Details',
        href: '/dashboard/settings/store',
        icon: <Store className="mr-2 h-4 w-4" />,
    },
    {
        title: 'POS',
        href: '/dashboard/settings/pos',
        icon: <ShoppingCart className="mr-2 h-4 w-4" />,
    },
    {
        title: 'Team Management',
        href: '/dashboard/settings/team',
        icon: <Users className="mr-2 h-4 w-4" />,
    },
];

const getChildMenu = (href: string) => {
  const slashCount = href.split('/').filter(Boolean).length;
  return slashCount >= 3 ? 'pl-9' : '';
};

export function Sidebar() {
    const pathname = usePathname();

    return (
        <aside className="sidebar w-64 border-r-gray-500 bg-[#EBEBEB] text-[#212121] py-4 md:flex justify-between flex-col h-full">
            <div className="flex-1 overflow-auto px-3 py-2 flex flex-col justify-between">
                <nav className="flex flex-col">
                    {mainNavItems.map((item) => (
                        <Link
                            key={item.href}
                            href={item.href}
                            className={`${getChildMenu(item.href)} flex items-center rounded-md px-3 py-2 text-sm font-medium hover:bg-gray-100 ${pathname === item.href ? "bg-gray-100 text-black font-semibold" : "text-gray-900"
                                }`}
                        >
                            {item.icon}
                            {item.title}
                        </Link>
                    ))}
                </nav>

                <div className="mt-6">
                    <h3 className="mb-2 px-3 text-xs font-semibold uppercase tracking-wider text-[gray-500]">
                        Settings
                    </h3>
                    <nav className="flex flex-col">
                        {settingsNavItems.map((item) => (
                            <Link
                                key={item.href}
                                href={item.href}
                                className={`flex items-center rounded-md px-3 py-2 text-sm font-medium hover:bg-gray-100 ${pathname === item.href ? "bg-gray-100 text-black font-semibold" : "text-gray-900"
                                    }`}
                            >
                                {item.icon}
                                {item.title}
                            </Link>
                        ))}
                    </nav>
                </div>

                <div className="mt-6 border-t-gray-500 pt-4">
                    <div className="flex items-center px-3 py-2">
                        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-200">
                            <User className="h-4 w-4 text-gray-500" />
                        </div>
                        <div className="ml-3">
                            <p className="text-sm font-medium">Admin User</p>
                            <p className="text-xs text-gray-500">admin@example.com</p>
                        </div>
                    </div>
                    <Link
                        href="/auth/signout"
                        className="mt-2 flex w-full items-center rounded-md px-3 py-2 text-sm font-medium text-red-600 hover:bg-red-50"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="mr-2 h-4 w-4"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                            />
                        </svg>
                        Sign Out
                    </Link>
                </div>
            </div>
        </aside>
    );
}

export default Sidebar;
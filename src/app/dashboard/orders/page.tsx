'use client';

import React from 'react';
import PageHeader from '@/components/DashboardComponents/OrderPageHeader';
import OrdersSummary from '@/components/DashboardComponents/OrderSummaryComponent';
// import OrderTabs from '@/components/DashboardComponents/OrderTabComponent';
import OrdersTable from '@/components/DashboardComponents/OrderTableComponent';
import SearchAndFilter from '@/components/DashboardComponents/SearchAndFilter';

export default function OrdersPage() {
    const tabs = ['All', 'Unfulfilled', 'Unpaid', 'Open', 'Archived'];
    const orders = [
        {
            id: '1',
            orderNumber: '1003',
            date: 'Nov 14 at 5:08 am',
            customer: 'oki rahmansah',
            channel: 'Online Store',
            total: 'Rp 864.55',
            paymentStatus: 'paid' as const,
            fulfillmentStatus: 'unfulfilled' as const,
            itemCount: 1,
        },
        {
            id: '2',
            orderNumber: '1002',
            date: 'Oct 13 at 11:55 pm',
            customer: 'oki rahmansah',
            channel: 'Online Store',
            total: 'Rp 372,900.00',
            paymentStatus: 'paid' as const,
            fulfillmentStatus: 'fulfilled' as const,
            itemCount: 1,
            deliveryStatus: 'Tracking added',
        },
        {
            id: '3',
            orderNumber: '1001',
            date: 'Oct 13 at 8:10 am',
            customer: 'oki rahmansah',
            channel: 'Online Store',
            total: 'Rp 372,900.00',
            paymentStatus: 'paid' as const,
            fulfillmentStatus: 'unfulfilled' as const,
            itemCount: 1,
        },
    ];

    return (
        <div className="flex flex-col h-full bg-[#F1F1F1] py-4">
            <PageHeader title="Orders" />

            <div className="flex-1 px-4 pb-6 space-y-6">
                <OrdersSummary />

                <div className="bg-white rounded-lg border border-gray-200 min-w-full overflow-scroll">
                    <SearchAndFilter tabs={tabs} />
                    <OrdersTable orders={orders} />
                </div>
            </div>
        </div>
    );
}
'use client';

import React, { useState } from 'react';
import OrderRow from '../OrderRowComponent';
import OrdersTableHeader from '../OrderTableHeader';

interface Order {
    id: string;
    orderNumber: string;
    date: string;
    customer: string;
    channel: string;
    total: string;
    paymentStatus: 'paid' | 'unpaid';
    fulfillmentStatus: 'fulfilled' | 'unfulfilled';
    itemCount: number;
    deliveryStatus?: string;
}

interface OrdersTableProps {
    orders: Order[];
}

export default function OrdersTable({ orders }: OrdersTableProps) {
    const [selectedOrders, setSelectedOrders] = useState<string[]>([]);

    const toggleOrderSelection = (id: string) => {
        if (selectedOrders.includes(id)) {
            setSelectedOrders(selectedOrders.filter(orderId => orderId !== id));
        } else {
            setSelectedOrders([...selectedOrders, id]);
        }
    };

    return (
        <div className="bg-white rounded-lg border border-gray-200 overflow-scroll">
            <OrdersTableHeader />

            <div className="divide-y divide-gray-200 w-full min-w-[920px]">
                {orders.map((order) => (
                    <OrderRow
                        key={order.id}
                        order={order}
                        isSelected={selectedOrders.includes(order.id)}
                        onSelect={toggleOrderSelection}
                    />
                ))}
            </div>

            {orders.length === 0 && (
                <div className="py-8 text-center text-gray-500">
                    No orders found
                </div>
            )}
        </div>
    );
}
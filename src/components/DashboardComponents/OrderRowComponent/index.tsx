'use client';

import React from 'react';
import StatusBadge from '../StatusBadgeComponent';

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

interface OrderRowProps {
    order: Order;
    isSelected: boolean;
    onSelect: (id: string) => void;
}

export default function OrderRow({ order, isSelected, onSelect }: OrderRowProps) {
    return (
        <div className="grid grid-cols-9 py-2 px-2 border-b border-gray-200 hover:bg-gray-50">
            <div className="flex items-center">
                <input
                    type="checkbox"
                    checked={isSelected}
                    onChange={() => onSelect(order.id)}
                    className="h-4 w-4 mr-4 rounded border-gray-300"
                />
                <span className="text-black font-light !text-[10px]">#{order.orderNumber}</span>
            </div>

            <div className="text-[#212121] text-[10px]">
                <p>{order.date}</p>
            </div>

            <div className="text-[#212121] text-[10px]">
                <p>{order.customer}</p>
            </div>

            <div className="text-[#212121] text-[10px]">
                <p>{order.channel}</p>
            </div>

            <div className="text-[#212121] text-[10px]">
                <p>{order.total}</p>
            </div>

            <div>
                <StatusBadge status={order.paymentStatus} />
            </div>

            <div>
                <StatusBadge status={order.fulfillmentStatus} />
            </div>

            <div className="text-[#212121] text-[10px]">
                <p>{order.itemCount} item{order.itemCount !== 1 ? 's' : ''}</p>
            </div>

            <div>
                {order.deliveryStatus ? (
                    <StatusBadge status="tracking" label={order.deliveryStatus} />
                ) : null}
            </div>
        </div>
    );
}
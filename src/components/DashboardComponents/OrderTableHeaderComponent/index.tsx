'use client';

import React from 'react';
import { ChevronDown } from 'lucide-react';


export default function OrdersTableHeader() {
    return (
        <div className="grid grid-cols-7 border-t border-b border-gray-200 py-2 px-4 bg-white text-sm text-gray-500">
            <div className="flex items-center">
                <input type="checkbox" className="h-4 w-4 mr-4 rounded border-gray-300" />
                <span className="font-medium">Order</span>
            </div>

            <div className="flex items-center">
                <span className="font-medium">Date</span>
                <ChevronDown className="h-4 w-4 ml-1" />
            </div>

            <div className="flex items-center">
                <span className="font-medium">Customer</span>
            </div>

            <div className="flex items-center">
                <span className="font-medium">Channel</span>
            </div>

            <div className="flex items-center">
                <span className="font-medium">Total</span>
            </div>

            <div className="flex items-center">
                <span className="font-medium">Payment status</span>
            </div>

            <div className="flex items-center">
                <span className="font-medium">Fulfillment status</span>
            </div>

            <div className="flex items-center">
                <span className="font-medium">Items</span>
            </div>

            <div className="flex items-center">
                <span className="font-medium">Delivery status</span>
            </div>
        </div>
    );
}
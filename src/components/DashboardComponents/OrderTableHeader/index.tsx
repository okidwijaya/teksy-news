'use client';

import React from 'react';
import { ChevronDown } from 'lucide-react';

export default function OrdersTableHeader() {
  return (
    <div className="grid grid-cols-9 border-t border-b border-gray-200 p-2 bg-white text-[12px] text-gray-500">
      <div className="flex items-center">
        <input type="checkbox" className="font-[12px] h-4 w-4 mr-4 rounded border-gray-300" />
        <span className="font-light">Order</span>
      </div>
      
      <div className="flex items-center font-[12px]">
        <span className="font-light">Date</span>
        <ChevronDown className="h-4 w-4 ml-1" />
      </div>
      
      <div className="flex items-center font-[12px]">
        <span className="font-light">Customer</span>
      </div>
      
      <div className="flex items-center font-[12px]">
        <span className="font-light">Channel</span>
      </div>
      
      <div className="flex items-center font-[12px]">
        <span className="font-light">Total</span>
      </div>
      
      <div className="flex items-center font-[12px]">
        <span className="font-light">Payment status</span>
      </div>
      
      <div className="flex items-center font-[12px]">
        <span className="font-light">Fulfillment status</span>
      </div>
      
      <div className="flex items-center font-[12px]">
        <span className="font-light">Items</span>
      </div>
      
      <div className="flex items-center font-[12px]">
        <span className="font-light">Delivery status</span>
      </div>
    </div>
  );
}
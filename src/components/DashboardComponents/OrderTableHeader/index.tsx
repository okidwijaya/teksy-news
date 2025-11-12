'use client';

import React from 'react';
import { ChevronDown } from 'lucide-react';

export default function OrdersTableHeader() {
  return (
    <div className="grid grid-cols-9 border-t border-b border-gray-200 p-2 bg-white !text-[10px] text-gray-500 w-full min-w-[920px] overflow-scroll">
      <div className="flex items-center">
        <input type="checkbox" className="!text-[10px] h-4 w-4 mr-4 rounded border-gray-300" />
        <span className="font-light">Order</span>
      </div>
      
      <div className="flex items-center !text-[10px]">
        <span className="font-light">Date</span>
        <ChevronDown className="h-4 w-4 ml-1" />
      </div>
      
      <div className="flex items-center !text-[10px]">
        <span className="font-light">Customer</span>
      </div>
      
      <div className="flex items-center !text-[10px]">
        <span className="font-light">Channel</span>
      </div>
      
      <div className="flex items-center !text-[10px]">
        <span className="font-light">Total</span>
      </div>
      
      <div className="flex items-center !text-[10px]">
        <span className="font-light">Payment status</span>
      </div>
      
      <div className="flex items-center !text-[10px]">
        <span className="font-light">Fulfillment status</span>
      </div>
      
      <div className="flex items-center !text-[10px]">
        <span className="font-light">Items</span>
      </div>
      
      <div className="flex items-center !text-[10px]">
        <span className="font-light">Delivery status</span>
      </div>
    </div>
  );
}
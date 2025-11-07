'use client';

import React from 'react';
import { ChevronDown, Package } from 'lucide-react';
import Link from 'next/link';

interface PageHeaderProps {
  title: string;
  locationFilter?: boolean;
  actionButtons?: boolean;
}

export default function PageHeader({
  title,
  locationFilter = true,
  actionButtons = true
}: PageHeaderProps) {
  return (
    <div className="flex items-center justify-between pt-2 pb-6 px-4 flex-wrap md:flex-nowrap">
      <div className="flex items-center space-x-3">
        <div className="flex items-center">
          <div className="w-6 h-6 mr-2">
            <Package className="w-6 h-6 text-[#212121]" />
          </div>
          <h1 className="text-[#212121] text-xl font-semibold">{title}</h1>
        </div>

        {locationFilter && (
          <button className="flex items-center bg-white font-light rounded-md border border-gray-200 py-2 px-3 text-[#212121] hover:bg-gray-200">
            <span>All locations</span>
            <ChevronDown className="h-4 w-4 ml-2" />
          </button>
        )}
      </div>

      {actionButtons && (
        <div className="flex items-center space-x-3">
          <button className="bg-white border-[#D4D4D4] border rounded-md py-1 px-2 text-[#212121] text-[12px] font-light hover:bg-white">
            Export
          </button>

          <button className="bg-white border-[#D4D4D4] border rounded-md py-1 px-2 text-[#212121] text-[12px] font-light hover:bg-gray-200 flex items-center">
            <span>More actions</span>
            <ChevronDown className="h-4 w-4 ml-2" />
          </button>

          <Link href="/dashboard/orders/new" className="bg-gray-900 rounded-md py-1 px-2 text-white text-[12px] font-light hover:bg-gray-800">
            Create order
          </Link>
        </div>
      )}
    </div>
  );
}
'use client';

import React from 'react';
import { ChevronDown } from 'lucide-react';

export default function ChannelSelector() {
  return (
    <button className="flex items-center bg-white border border-gray-200 rounded-md py-2 px-4 text-gray-700 hover:bg-gray-50">
      <span className="font-medium">All channels</span>
      <ChevronDown className="h-5 w-5 ml-2 text-gray-500" />
    </button>
  );
}
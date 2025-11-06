'use client';

import React from 'react';
import { Calendar } from 'lucide-react';

export default function DateFilter() {
  return (
    <button className="flex items-center bg-white border border-gray-200 rounded-md py-2 px-4 text-gray-700 hover:bg-gray-50">
      <Calendar className="h-5 w-5 mr-2 text-gray-500" />
      <span className="font-medium">Last 30 days</span>
    </button>
  );
}
'use client';

import React from 'react';
import { Info } from 'lucide-react';

interface StatCardProps {
  title: string;
  value: string | number;
  subValue?: string;
  showInfoIcon?: boolean;
}

export default function StatCard({ 
  title, 
  value, 
  subValue, 
  showInfoIcon = false 
}: StatCardProps) {
  return (
    <div className="flex flex-col">
      <div className="flex items-center mb-1">
        <h3 className="text-gray-700 font-medium text-sm">{title}</h3>
        {showInfoIcon && (
          <Info className="h-4 w-4 ml-2 text-gray-400" />
        )}
      </div>
      <div className="flex items-center">
        <span className="text-gray-900 text-2xl font-semibold">{value}</span>
        {subValue && (
          <span className="text-gray-500 ml-2 text-sm">—</span>
        )}
      </div>
    </div>
  );
}
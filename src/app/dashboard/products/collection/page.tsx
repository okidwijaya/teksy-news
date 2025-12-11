"use client"

import React, { useState } from 'react';
import { Search, MoreHorizontal, RotateCcw, Plus, ArrowUpDown } from 'lucide-react';

interface Collection {
  id: string;
  title: string;
  products: number;
  condition: string;
  icon: string;
  iconBg: string;
}

const collectionsData: Collection[] = [
  {
    id: '1',
    title: 'Value sets',
    products: 44,
    condition: 'Price is greater than 0',
    icon: '📊',
    iconBg: 'bg-green-100'
  },
  {
    id: '2',
    title: 'Routine essentials',
    products: 44,
    condition: 'Price is greater than 0',
    icon: '🏠',
    iconBg: 'bg-orange-100'
  },
  {
    id: '3',
    title: 'Apparel',
    products: 44,
    condition: 'Price is greater than 0',
    icon: '👕',
    iconBg: 'bg-blue-100'
  },
  {
    id: '4',
    title: 'Boards',
    products: 44,
    condition: 'Price is greater than 0',
    icon: '🏄',
    iconBg: 'bg-purple-100'
  },
  {
    id: '5',
    title: 'Home page',
    products: 2,
    condition: '',
    icon: '🏠',
    iconBg: 'bg-gray-100'
  },
  {
    id: '6',
    title: 'New Arrivals',
    products: 0,
    condition: '',
    icon: '📊',
    iconBg: 'bg-green-100'
  },
  {
    id: '7',
    title: 'Best Sellers',
    products: 0,
    condition: '',
    icon: '🏠',
    iconBg: 'bg-orange-100'
  },
  {
    id: '8',
    title: 'Automated Collection',
    products: 8,
    condition: 'Price is less than 800.00\nPrice is greater than 200.00',
    icon: '⚙️',
    iconBg: 'bg-gray-100'
  },
  {
    id: '9',
    title: 'Hydrogen',
    products: 3,
    condition: '',
    icon: '⚙️',
    iconBg: 'bg-gray-100'
  }
];

const Page: React.FC = () => {
  const [selectedCollections, setSelectedCollections] = useState<string[]>([]);
  const [allSelected, setAllSelected] = useState(false);

  const handleSelectAll = () => {
    if (allSelected) {
      setSelectedCollections([]);
    } else {
      setSelectedCollections(collectionsData.map(c => c.id));
    }
    setAllSelected(!allSelected);
  };

  const handleSelectCollection = (id: string) => {
    if (selectedCollections.includes(id)) {
      setSelectedCollections(selectedCollections.filter(cId => cId !== id));
    } else {
      setSelectedCollections([...selectedCollections, id]);
    }
  };

  return (
    <div className="bg-white">
      <div className="flex items-center justify-between p-6 border-b border-gray-200">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 rounded-full bg-gray-800 flex items-center justify-center">
            <div className="w-3 h-3 border-2 border-white rounded-sm"></div>
          </div>
          <h1 className="text-xl font-semibold text-gray-900">Collections</h1>
        </div>
        <button className="bg-gray-900 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-gray-800 transition-colors">
          Create collection
        </button>
      </div>

      <div className="p-6 border-b border-gray-200">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <button className="flex items-center gap-2 px-3 py-2 bg-gray-100 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-200 transition-colors">
              All
              <Plus className="w-4 h-4" />
            </button>
          </div>
          <div className="flex items-center gap-3">
            <button className="p-2 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-lg transition-colors">
              <RotateCcw className="w-5 h-5" />
            </button>
            <button className="p-2 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-lg transition-colors">
              <Search className="w-5 h-5" />
            </button>
            <button className="p-2 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-lg transition-colors">
              <MoreHorizontal className="w-5 h-5" />
            </button>
            <button className="p-2 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-lg transition-colors">
              <ArrowUpDown className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-gray-50 border-b border-gray-200">
            <tr>
              <th className="w-12 p-4 font-semibold text-[12px] text-gray-500">
                <input
                  type="checkbox"
                  checked={allSelected}
                  onChange={handleSelectAll}
                  className="w-4 h-4 text-gray-900 rounded border-gray-300 focus:ring-gray-500"
                />
              </th>
              <th className="font-semibold text-[12px] text-gray-500 p-3 text-left">Title</th>
              <th className="font-semibold text-[12px] text-gray-500 p-3 text-left">Products</th>
              <th className="font-semibold text-[12px] text-gray-500 p-3 text-left">Product conditions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {collectionsData.map((collection) => (
              <tr key={collection.id} className="hover:bg-gray-50 transition-colors">
                <td className="p-3 text-[#212121] text-[12px] font-light">
                  <input
                    type="checkbox"
                    checked={selectedCollections.includes(collection.id)}
                    onChange={() => handleSelectCollection(collection.id)}
                    className="w-4 h-4 text-gray-900 rounded border-gray-300 focus:ring-gray-500"
                  />
                </td>
                <td className="p-3 text-[#212121] text-[12px] font-light">
                  <div className="flex items-center gap-3">
                    <div className={`w-8 h-8 rounded ${collection.iconBg} flex items-center justify-center text-sm`}>
                      {collection.icon}
                    </div>
                    <span className="text-sm font-medium text-gray-900">{collection.title}</span>
                    {(collection.title === 'Automated Collection' || collection.title === 'Hydrogen') && (
                      <span className="text-xs text-gray-500">Excluded from Point of Sale</span>
                    )}
                  </div>
                </td>
                <td className="p-3 text-[#212121] text-[12px] font-light">
                  <span className="text-sm text-gray-900">{collection.products}</span>
                </td>
                <td className="p-3 text-[#212121] text-[12px] font-light">
                  <span className="text-sm text-gray-600 whitespace-pre-line">{collection.condition}</span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Page;
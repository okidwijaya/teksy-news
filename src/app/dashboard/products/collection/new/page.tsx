'use client'

import React, { useState } from 'react';
import { 
  Bold, 
  Italic, 
  Underline, 
  AlignLeft, 
  Link, 
  Image as ImageIcon, 
  MoreHorizontal, 
  Code, 
  ChevronDown,
  Search,
  Tag,
  Edit,
  Upload
} from 'lucide-react';

const Page: React.FC = () => {
  const [title, setTitle] = useState('e.g. Summer collection, Under $100, Staff picks');
  const [description, setDescription] = useState('');
  const [collectionType, setCollectionType] = useState('manual');
  const [salesChannels, setSalesChannels] = useState({
    onlineStore: true,
    pointOfSale: false
  });
  
  const [searchProducts, setSearchProducts] = useState('');
  const [sortBy, setSortBy] = useState('Best selling');

  const handleSalesChannelChange = (channel: 'onlineStore' | 'pointOfSale') => {
    setSalesChannels(prev => ({
      ...prev,
      [channel]: !prev[channel]
    }));
  };

  return (
    <div className="bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-full bg-gray-800 flex items-center justify-center">
              <div className="w-3 h-3 border-2 border-white rounded-sm"></div>
            </div>
            <span className="text-gray-500">→</span>
            <h1 className="text-xl font-semibold text-gray-900">Create collection</h1>
          </div>
          <button className="bg-gray-900 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-gray-800 transition-colors">
            Save
          </button>
        </div>
      </div>

      <div className="flex gap-6 p-6 max-w-7xl mx-auto">
        {/* Main Content */}
        <div className="flex-1 space-y-6">
          {/* Title Section */}
          <div className="bg-white rounded-lg p-6 shadow-sm">
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Title</label>
                <input
                  type="text"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-500"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Description</label>
                <div className="border border-gray-300 rounded-lg">
                  {/* Rich Text Editor Toolbar */}
                  <div className="flex items-center gap-1 p-2 border-b border-gray-200 bg-gray-50">
                    <select className="text-sm border-none bg-transparent focus:outline-none">
                      <option>Paragraph</option>
                    </select>
                    <div className="w-px h-4 bg-gray-300 mx-1"></div>
                    <button className="p-1 hover:bg-gray-200 rounded">
                      <Bold className="w-4 h-4" />
                    </button>
                    <button className="p-1 hover:bg-gray-200 rounded">
                      <Italic className="w-4 h-4" />
                    </button>
                    <button className="p-1 hover:bg-gray-200 rounded">
                      <Underline className="w-4 h-4" />
                    </button>
                    <button className="p-1 hover:bg-gray-200 rounded">
                      <span className="w-4 h-4 flex items-center justify-center text-xs font-bold">A</span>
                    </button>
                    <div className="w-px h-4 bg-gray-300 mx-1"></div>
                    <button className="p-1 hover:bg-gray-200 rounded">
                      <AlignLeft className="w-4 h-4" />
                    </button>
                    <div className="w-px h-4 bg-gray-300 mx-1"></div>
                    <button className="p-1 hover:bg-gray-200 rounded">
                      <Link className="w-4 h-4" />
                    </button>
                    <button className="p-1 hover:bg-gray-200 rounded">
                      <ImageIcon className="w-4 h-4" />
                    </button>
                    <button className="p-1 hover:bg-gray-200 rounded">
                      <Tag className="w-4 h-4" />
                    </button>
                    <div className="w-px h-4 bg-gray-300 mx-1"></div>
                    <button className="p-1 hover:bg-gray-200 rounded">
                      <MoreHorizontal className="w-4 h-4" />
                    </button>
                    <div className="ml-auto">
                      <button className="p-1 hover:bg-gray-200 rounded">
                        <Code className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                  <textarea
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    className="w-full p-3 border-none focus:outline-none resize-none"
                    rows={4}
                    placeholder="Enter description..."
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Collection Type */}
          <div className="bg-white rounded-lg p-6 shadow-sm">
            <h3 className="text-lg font-medium text-gray-900 mb-4">Collection type</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <input
                  type="radio"
                  id="manual"
                  name="collectionType"
                  value="manual"
                  checked={collectionType === 'manual'}
                  onChange={(e) => setCollectionType(e.target.value)}
                  className="mt-1 w-4 h-4 text-blue-600"
                />
                <div>
                  <label htmlFor="manual" className="block font-medium text-gray-900">Manual</label>
                  <p className="text-sm text-gray-600 mt-1">
                    Add products to this collection one by one. Learn more about{' '}
                    <a href="#" className="text-blue-600 hover:underline">manual collections</a>.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <input
                  type="radio"
                  id="smart"
                  name="collectionType"
                  value="smart"
                  checked={collectionType === 'smart'}
                  onChange={(e) => setCollectionType(e.target.value)}
                  className="mt-1 w-4 h-4 text-blue-600"
                />
                <div>
                  <label htmlFor="smart" className="block font-medium text-gray-900">Smart</label>
                  <p className="text-sm text-gray-600 mt-1">
                    Existing and future products that match the conditions you set will automatically be added to this collection. Learn more about{' '}
                    <a href="#" className="text-blue-600 hover:underline">smart collections</a>.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Products Section */}
          <div className="bg-white rounded-lg p-6 shadow-sm">
            <h3 className="text-lg font-medium text-gray-900 mb-4">Products</h3>
            <div className="flex gap-4 mb-6">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                <input
                  type="text"
                  value={searchProducts}
                  onChange={(e) => setSearchProducts(e.target.value)}
                  placeholder="Search products"
                  className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                Browse
              </button>
              <div className="relative">
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="appearance-none bg-white border border-gray-300 rounded-lg px-3 py-2 pr-8 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                >
                  <option>Sort: Best selling</option>
                  <option>Sort: Newest</option>
                  <option>Sort: Price low to high</option>
                  <option>Sort: Price high to low</option>
                </select>
                <ChevronDown className="absolute right-2 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
              </div>
            </div>

            {/* Empty State */}
            <div className="text-center py-12">
              <div className="w-16 h-16 mx-auto mb-4 border-2 border-dashed border-gray-300 rounded-lg flex items-center justify-center">
                <Tag className="w-8 h-8 text-gray-400" />
              </div>
              <p className="text-gray-600 mb-2">There are no products in this collection.</p>
              <p className="text-gray-600">
                Search or <a href="#" className="text-blue-600 hover:underline">browse</a> to add products.
              </p>
            </div>
          </div>

          {/* Search Engine Listing */}
          <div className="bg-white rounded-lg p-6 shadow-sm">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-medium text-gray-900">Search engine listing</h3>
              <button className="p-1 hover:bg-gray-100 rounded">
                <Edit className="w-4 h-4 text-gray-500" />
              </button>
            </div>
            <p className="text-sm text-gray-600">
              Add a title and description to see how this collection might appear in a search engine listing
            </p>
          </div>
        </div>

        {/* Sidebar */}
        <div className="w-80 space-y-6">
          {/* Publishing */}
          <div className="bg-white rounded-lg p-6 shadow-sm">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-medium text-gray-900">Publishing</h3>
              <button className="text-blue-600 hover:underline text-sm">Manage</button>
            </div>
            <div className="space-y-3">
              <div>
                <p className="font-medium text-gray-900 mb-2">Sales channels</p>
                <div className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    id="onlineStore"
                    checked={salesChannels.onlineStore}
                    onChange={() => handleSalesChannelChange('onlineStore')}
                    className="w-4 h-4 text-blue-600 rounded"
                  />
                  <label htmlFor="onlineStore" className="text-sm text-gray-700">Online Store</label>
                  <div className="w-4 h-4 rounded bg-gray-300 flex items-center justify-center ml-auto">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                </div>
                <div className="flex items-center gap-2 mt-2">
                  <input
                    type="checkbox"
                    id="pointOfSale"
                    checked={salesChannels.pointOfSale}
                    onChange={() => handleSalesChannelChange('pointOfSale')}
                    className="w-4 h-4 text-blue-600 rounded"
                  />
                  <label htmlFor="pointOfSale" className="text-sm text-gray-700">Point of Sale</label>
                </div>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="bg-white rounded-lg p-6 shadow-sm">
            <h3 className="text-lg font-medium text-gray-900 mb-4">Image</h3>
            <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
              <Upload className="w-8 h-8 text-gray-400 mx-auto mb-2" />
              <p className="text-sm font-medium text-gray-900 mb-1">Add Image</p>
              <p className="text-xs text-gray-500">or drop an image to upload</p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Page;
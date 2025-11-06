'use client';
import React, { useState } from 'react';
import {
  Search,
  MoreHorizontal,
  Edit3,
  X,
  Info,
  ChevronDown,
  Globe
} from 'lucide-react';

// Define types for our data structures
interface Product {
  id: number;
  name: string;
  variant: string;
  sku: string;
  price: number;
  quantity: number;
  image: string;
}

interface OrderData {
  searchProduct: string;
  customer: string;
  notes: string;
  tags: string;
  paymentDueLater: boolean;
  currency: string;
  market: string;
}

const Page: React.FC = () => {
  // Initialize state with proper types
  const [orderData, setOrderData] = useState<OrderData>({
    searchProduct: '',
    customer: '',
    notes: 'No notes',
    tags: '',
    paymentDueLater: false,
    currency: 'Indonesian Rupiah (IDR Rp)',
    market: 'Indonesia'
  });

  const [products, setProducts] = useState<Product[]>([
    {
      id: 1,
      name: 'The 3p Fulfilled Snowboard',
      variant: 'Red',
      sku: 'sku-hosted-1',
      price: 2629.95,
      quantity: 1,
      image: '/api/placeholder/60/60'
    }
  ]);

  // Handler functions
  const handleInputChange = (field: string, value: string | boolean) => {
    setOrderData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleQuantityChange = (productId: number, quantity: number) => {
    setProducts(prev => prev.map(product =>
      product.id === productId
        ? { ...product, quantity: Math.max(1, quantity) }
        : product
    ));
  };

  const removeProduct = (productId: number) => {
    setProducts(prev => prev.filter(product => product.id !== productId));
  };

  // Calculation functions
  const calculateSubtotal = () => {
    return products.reduce((sum, product) => sum + (product.price * product.quantity), 0);
  };

  const calculateTax = () => {
    return calculateSubtotal() * 0.10; // 10% VAT
  };

  const calculateTotal = () => {
    return calculateSubtotal() + calculateTax();
  };

  const formatCurrency = (amount: number) => {
    return `Rp ${amount.toLocaleString('id-ID', { minimumFractionDigits: 2 })}`;
  };

  return (
    <div className="bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex items-center gap-2 mb-6">
          <div className="p-2 border border-gray-300 rounded-md bg-white">
            <div className="w-4 h-4 border-2 border-gray-400 rounded"></div>
          </div>
          <ChevronDown className="w-4 h-4 text-gray-500" />
          <h1 className="text-xl font-semibold text-gray-900">Create order</h1>
        </div>

        {/* Main content grid */}
        <div className="grid grid-cols-1 lg:grid-cols-1 gap-6">
          {/* Left column */}
          <div className="grid grid-cols-1 gap-4">
            {/* Products Section */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-200">
              <div className="p-6 border-b border-gray-200">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-lg font-medium text-gray-900">Products</h2>
                  <button className="p-1 hover:bg-gray-100 rounded">
                    <MoreHorizontal className="w-5 h-5 text-gray-500" />
                  </button>
                </div>

                {/* Search and Actions */}
                <div className="flex gap-2 mb-4">
                  <div className="flex-1 relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                    <input
                      type="text"
                      placeholder="Search products"
                      className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      value={orderData.searchProduct}
                      onChange={(e) => handleInputChange('searchProduct', e.target.value)}
                    />
                  </div>
                  <button className="px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-50">
                    Browse
                  </button>
                  <button className="px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-50">
                    Add custom item
                  </button>
                </div>

                {/* Product Headers */}
                <div className="grid grid-cols-12 gap-4 mb-4 text-sm font-medium text-gray-700">
                  <div className="col-span-6">Product</div>
                  <div className="col-span-3">Quantity</div>
                  <div className="col-span-3">Total</div>
                </div>
              </div>

              {/* Product List */}
              <div className="p-6">
                {products.map((product) => (
                  <div key={product.id} className="grid grid-cols-12 gap-4 items-center py-4 border-b border-gray-100 last:border-b-0">
                    <div className="col-span-6 flex items-center gap-3">
                      <div className="w-12 h-12 bg-gradient-to-br from-cyan-400 to-teal-500 rounded-md flex items-center justify-center">
                        <div className="w-8 h-8 bg-white/20 rounded-sm"></div>
                      </div>
                      <div>
                        <h3 className="font-medium text-gray-900">{product.name}</h3>
                        <p className="text-sm text-gray-600">{product.variant}</p>
                        <p className="text-sm text-gray-500">{product.sku}</p>
                        <p className="text-sm font-medium text-blue-600">{formatCurrency(product.price)}</p>
                      </div>
                    </div>
                    <div className="col-span-3">
                      <input
                        type="number"
                        min="1"
                        value={product.quantity}
                        onChange={(e) => handleQuantityChange(product.id, parseInt(e.target.value) || 1)}
                        className="w-20 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    </div>
                    <div className="col-span-3 flex items-center justify-between">
                      <span className="font-medium text-gray-900">
                        {formatCurrency(product.price * product.quantity)}
                      </span>
                      <button
                        onClick={() => removeProduct(product.id)}
                        className="p-1 hover:bg-gray-100 rounded text-gray-400 hover:text-gray-600"
                      >
                        <X className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Payment Section */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4">
              <h2 className="text-lg font-medium text-gray-900 mb-6">Payment</h2>

              {/* Payment Summary */}
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">Subtotal</span>
                  <div className="flex items-center gap-2">
                    <span className="text-sm text-gray-500">{products.length} item</span>
                    <span className="font-medium">{formatCurrency(calculateSubtotal())}</span>
                  </div>
                </div>

                <div className="flex justify-between items-center">
                  <button className="text-blue-600 hover:text-blue-800 text-sm">Add discount</button>
                  <div className="flex items-center gap-2">
                    <span>—</span>
                    <span className="font-medium">Rp 0.00</span>
                  </div>
                </div>

                <div className="flex justify-between items-center">
                  <button className="text-blue-600 hover:text-blue-800 text-sm">Add shipping or delivery</button>
                  <div className="flex items-center gap-2">
                    <span>—</span>
                    <span className="font-medium">Rp 0.00</span>
                  </div>
                </div>

                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-2">
                    <button className="text-blue-600 hover:text-blue-800 text-sm">Estimated tax</button>
                    <Info className="w-4 h-4 text-gray-400" />
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-sm text-gray-500">VAT 10%</span>
                    <span className="font-medium">{formatCurrency(calculateTax())}</span>
                  </div>
                </div>

                <div className="border-t border-gray-200 pt-4">
                  <div className="flex justify-between items-center">
                    <span className="text-lg font-semibold text-gray-900">Total</span>
                    <span className="text-lg font-semibold text-gray-900">{formatCurrency(calculateTotal())}</span>
                  </div>
                </div>
              </div>

              {/* Payment Options */}
              <div className="mt-6">
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="paymentDueLater"
                    className="mr-3"
                    checked={orderData.paymentDueLater}
                    onChange={(e) => handleInputChange('paymentDueLater', e.target.checked)}
                  />
                  <label htmlFor="paymentDueLater" className="text-sm text-gray-700">
                    Payment due later
                  </label>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-3 mt-6">
                <button className="px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-50">
                  Send invoice
                </button>
                <button className="px-4 py-2 bg-gray-900 text-white rounded-md hover:bg-gray-800 flex items-center gap-2">
                  Collect payment
                  <ChevronDown className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

          {/* Right column */}
          <div className="grid grid-cols-1 gap-4">
            {/* Notes */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-medium text-gray-900">Notes</h3>
                <button className="p-1 hover:bg-gray-100 rounded">
                  <Edit3 className="w-4 h-4 text-gray-500" />
                </button>
              </div>
              <p className="text-gray-600">{orderData.notes}</p>
            </div>

            {/* Customer */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
              <h3 className="text-lg font-medium text-gray-900 mb-4">Customer</h3>
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search or create a customer"
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  value={orderData.customer}
                  onChange={(e) => handleInputChange('customer', e.target.value)}
                />
              </div>
            </div>

            {/* Markets */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-medium text-gray-900">Markets</h3>
                <button className="p-1 hover:bg-gray-100 rounded">
                  <Edit3 className="w-4 h-4 text-gray-500" />
                </button>
              </div>
              <div className="flex items-center gap-2">
                <Globe className="w-4 h-4 text-gray-500" />
                <span className="text-gray-700">{orderData.market}</span>
              </div>
            </div>

            {/* Currency */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
              <h3 className="text-lg font-medium text-gray-900 mb-4">Currency</h3>
              <select
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                value={orderData.currency}
                onChange={(e) => handleInputChange('currency', e.target.value)}
              >
                <option>Indonesian Rupiah (IDR Rp)</option>
                <option>US Dollar (USD $)</option>
                <option>Euro (EUR €)</option>
              </select>
            </div>

            {/* Tags */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-medium text-gray-900">Tags</h3>
                <button className="p-1 hover:bg-gray-100 rounded">
                  <Edit3 className="w-4 h-4 text-gray-500" />
                </button>
              </div>
              <input
                type="text"
                placeholder="Add tags..."
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                value={orderData.tags}
                onChange={(e) => handleInputChange('tags', e.target.value)}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
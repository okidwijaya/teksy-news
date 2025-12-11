'use client'
import React, { useState } from 'react';
import { Percent, Search, Calendar } from 'lucide-react';

interface FormData {
  discountType: string;
  method: string;
  discountCode: string;
  discountValue: string;
  valueType: string;
  appliesTo: string;
  purchaseType: string;
  minRequirement: string;
  minAmount: string;
  minQuantity: string;
  eligibility: string;
  limitTotalUses: boolean;
  limitPerCustomer: boolean;
  totalUsesLimit: string;
  perCustomerLimit: string;
  productDiscounts: boolean;
  orderDiscounts: boolean;
  shippingDiscounts: boolean;
  startDate: string;
  startTime: string;
  setEndDate: boolean;
  endDate: string;
  endTime: string;
  // Buy X Get Y fields
  buyQuantity: string;
  buyProduct: string;
  getQuantity: string;
  getProduct: string;
  getDiscount: string;
  // Free shipping fields
  freeShippingType: string;
  excludeRates: string;
  // Amount fields
  amountThreshold: string;
  amountProduct: string;
  amountCollection: string;
}

export default function Page() {
  const [formData, setFormData] = useState<FormData>({
    discountType: 'amount-off-products',
    method: 'discount-code',
    discountCode: '',
    discountValue: '',
    valueType: 'percentage',
    appliesTo: 'specific-collections',
    purchaseType: 'one-time-purchase',
    minRequirement: 'no-minimum',
    minAmount: '',
    minQuantity: '',
    eligibility: 'all-customers',
    limitTotalUses: false,
    limitPerCustomer: false,
    totalUsesLimit: '',
    perCustomerLimit: '',
    productDiscounts: false,
    orderDiscounts: false,
    shippingDiscounts: false,
    startDate: '2025-06-09',
    startTime: '11:30 PM',
    setEndDate: false,
    endDate: '',
    endTime: '',
    // Buy X Get Y fields
    buyQuantity: '',
    buyProduct: '',
    getQuantity: '',
    getProduct: '',
    getDiscount: '',
    // Free shipping fields
    freeShippingType: 'all-countries',
    excludeRates: '',
    // Amount fields
    amountThreshold: '',
    amountProduct: '',
    amountCollection: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    const isCheckbox = type === 'checkbox';
    const checked = isCheckbox ? (e.target as HTMLInputElement).checked : false;
    setFormData(prev => ({
      ...prev,
      [name]: isCheckbox ? checked : value
    }));
  };

  const handleSave = () => {
    console.log('Saving discount:', formData);
  };

  const handleDiscard = () => {
    // Reset form
  };

  const generateRandomCode = () => {
    const code = Math.random().toString(36).substring(2, 8).toUpperCase();
    setFormData(prev => ({ ...prev, discountCode: code }));
  };

  return (
    <div className="bg-gray-50 p-6">
      <div className="mb-6 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Percent className="w-6 h-6 text-gray-600" />
          <h1 className="text-2xl font-semibold text-gray-900">Create discount</h1>
        </div>
        <div className="flex gap-3">
          <button 
            onClick={handleDiscard}
            className="px-4 py-2 text-gray-600 hover:text-gray-800 font-medium"
          >
            Discard
          </button>
          <button 
            onClick={handleSave}
            className="px-6 py-2 bg-black text-white rounded-lg hover:bg-gray-800 font-medium"
          >
            Save discount
          </button>
        </div>
      </div>

      <div className="flex gap-6">
        <div className="flex-1 space-y-6">
          <div className="bg-white rounded-lg border border-gray-200 p-6">
            <h2 className="text-lg font-medium text-gray-900 mb-6">Discount type</h2>
            
            <div className="space-y-3">
              <label className="flex items-center p-3 border border-gray-200 rounded-lg cursor-pointer hover:bg-gray-50">
                <input
                  type="radio"
                  name="discountType"
                  value="amount-off-products"
                  checked={formData.discountType === 'amount-off-products'}
                  onChange={handleInputChange}
                  className="w-4 h-4 text-blue-600"
                />
                <div className="ml-3">
                  <div className="font-medium text-gray-900">Amount off products</div>
                  <div className="text-sm text-gray-500">Discount specific products or collections</div>
                </div>
              </label>

              <label className="flex items-center p-3 border border-gray-200 rounded-lg cursor-pointer hover:bg-gray-50">
                <input
                  type="radio"
                  name="discountType"
                  value="buy-x-get-y"
                  checked={formData.discountType === 'buy-x-get-y'}
                  onChange={handleInputChange}
                  className="w-4 h-4 text-blue-600"
                />
                <div className="ml-3">
                  <div className="font-medium text-gray-900">Buy X get Y</div>
                  <div className="text-sm text-gray-500">Customers get a discount on specific products when they buy others</div>
                </div>
              </label>

              <label className="flex items-center p-3 border border-gray-200 rounded-lg cursor-pointer hover:bg-gray-50">
                <input
                  type="radio"
                  name="discountType"
                  value="free-shipping"
                  checked={formData.discountType === 'free-shipping'}
                  onChange={handleInputChange}
                  className="w-4 h-4 text-blue-600"
                />
                <div className="ml-3">
                  <div className="font-medium text-gray-900">Free shipping</div>
                  <div className="text-sm text-gray-500">Offer free shipping on orders</div>
                </div>
              </label>

              <label className="flex items-center p-3 border border-gray-200 rounded-lg cursor-pointer hover:bg-gray-50">
                <input
                  type="radio"
                  name="discountType"
                  value="amount-off-order"
                  checked={formData.discountType === 'amount-off-order'}
                  onChange={handleInputChange}
                  className="w-4 h-4 text-blue-600"
                />
                <div className="ml-3">
                  <div className="font-medium text-gray-900">Amount off order</div>
                  <div className="text-sm text-gray-500">Discount the entire order total</div>
                </div>
              </label>
            </div>
          </div>

          <div className="bg-white rounded-lg border border-gray-200 p-6">
            <h2 className="text-lg font-medium text-gray-900 mb-6">Method</h2>
            
            <div className="flex gap-3 mb-6">
              <button
                type="button"
                onClick={() => setFormData(prev => ({ ...prev, method: 'discount-code' }))}
                className={`px-4 py-2 rounded-lg font-medium ${
                  formData.method === 'discount-code'
                    ? 'bg-blue-100 text-blue-800 border border-blue-300'
                    : 'bg-gray-100 text-gray-700 border border-gray-300'
                }`}
              >
                Discount code
              </button>
              <button
                type="button"
                onClick={() => setFormData(prev => ({ ...prev, method: 'automatic-discount' }))}
                className={`px-4 py-2 rounded-lg font-medium ${
                  formData.method === 'automatic-discount'
                    ? 'bg-blue-100 text-blue-800 border border-blue-300'
                    : 'bg-gray-100 text-gray-700 border border-gray-300'
                }`}
              >
                Automatic discount
              </button>
            </div>

            {formData.method === 'discount-code' && (
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Discount Code
                </label>
                <div className="flex gap-2">
                  <input
                    type="text"
                    name="discountCode"
                    value={formData.discountCode}
                    onChange={handleInputChange}
                    className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  <button
                    type="button"
                    onClick={generateRandomCode}
                    className="px-4 py-2 text-blue-600 hover:text-blue-800 font-medium"
                  >
                    Generate random code
                  </button>
                </div>
                <p className="text-sm text-gray-500 mt-1">
                  Customers must enter this code at checkout.
                </p>
              </div>
            )}
          </div>

          {formData.discountType === 'amount-off-products' && (
            <div className="bg-white rounded-lg border border-gray-200 p-6">
              <h2 className="text-lg font-medium text-gray-900 mb-6">Discount Value</h2>
              
              <div className="flex gap-3 mb-4">
                <select
                  name="valueType"
                  value={formData.valueType}
                  onChange={handleInputChange}
                  className="px-3 py-2 border border-gray-300 rounded-md"
                >
                  <option value="percentage">Percentage</option>
                  <option value="fixed-amount">Fixed amount</option>
                </select>
                <input
                  type="number"
                  name="discountValue"
                  value={formData.discountValue}
                  onChange={handleInputChange}
                  placeholder="0"
                  className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <span className="px-3 py-2 text-gray-500">
                  {formData.valueType === 'percentage' ? '%' : '$'}
                </span>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Applies to
                  </label>
                  <select
                    name="appliesTo"
                    value={formData.appliesTo}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md"
                  >
                    <option value="specific-collections">Specific collections</option>
                    <option value="specific-products">Specific products</option>
                    <option value="all-products">All products</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Purchase type
                  </label>
                  <select
                    name="purchaseType"
                    value={formData.purchaseType}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md"
                  >
                    <option value="one-time-purchase">One-time purchase</option>
                    <option value="subscription">Subscription</option>
                    <option value="both">Both</option>
                  </select>
                </div>
              </div>

              <div className="mt-4">
                <div className="flex items-center gap-2 mb-2">
                  <Search className="w-4 h-4 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search collections"
                    className="flex-1 px-3 py-2 border border-gray-300 rounded-md"
                  />
                  <button className="px-4 py-2 text-blue-600 hover:text-blue-800 font-medium">
                    Browse
                  </button>
                </div>
              </div>
            </div>
          )}

          {formData.discountType === 'buy-x-get-y' && (
            <div className="bg-white rounded-lg border border-gray-200 p-6">
              <h2 className="text-lg font-medium text-gray-900 mb-6">Buy X Get Y Configuration</h2>
              
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <h3 className="font-medium text-gray-900 mb-4">Customer buys</h3>
                  <div className="space-y-3">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Quantity
                      </label>
                      <input
                        type="number"
                        name="buyQuantity"
                        value={formData.buyQuantity}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md"
                        placeholder="1"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Product/Collection
                      </label>
                      <input
                        type="text"
                        name="buyProduct"
                        value={formData.buyProduct}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md"
                        placeholder="Search products or collections"
                      />
                    </div>
                  </div>
                </div>
                
                <div>
                  <h3 className="font-medium text-gray-900 mb-4">Customer gets</h3>
                  <div className="space-y-3">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Quantity
                      </label>
                      <input
                        type="number"
                        name="getQuantity"
                        value={formData.getQuantity}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md"
                        placeholder="1"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Product/Collection
                      </label>
                      <input
                        type="text"
                        name="getProduct"
                        value={formData.getProduct}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md"
                        placeholder="Search products or collections"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Discount
                      </label>
                      <div className="flex gap-2">
                        <input
                          type="number"
                          name="getDiscount"
                          value={formData.getDiscount}
                          onChange={handleInputChange}
                          className="flex-1 px-3 py-2 border border-gray-300 rounded-md"
                          placeholder="0"
                        />
                        <select className="px-3 py-2 border border-gray-300 rounded-md">
                          <option value="percentage">% off</option>
                          <option value="free">Free</option>
                          <option value="fixed">$ off</option>
                        </select>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {formData.discountType === 'free-shipping' && (
            <div className="bg-white rounded-lg border border-gray-200 p-6">
              <h2 className="text-lg font-medium text-gray-900 mb-6">Free Shipping Configuration</h2>
              
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Shipping to
                  </label>
                  <select
                    name="freeShippingType"
                    value={formData.freeShippingType}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md"
                  >
                    <option value="all-countries">All countries</option>
                    <option value="specific-countries">Specific countries</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Exclude shipping rates over
                  </label>
                  <div className="flex gap-2">
                    <span className="px-3 py-2 text-gray-500">$</span>
                    <input
                      type="number"
                      name="excludeRates"
                      value={formData.excludeRates}
                      onChange={handleInputChange}
                      className="flex-1 px-3 py-2 border border-gray-300 rounded-md"
                      placeholder="0.00"
                    />
                  </div>
                  <p className="text-sm text-gray-500 mt-1">
                    Customers will see free shipping options that are normally above this amount
                  </p>
                </div>
              </div>
            </div>
          )}

          {formData.discountType === 'amount-off-order' && (
            <div className="bg-white rounded-lg border border-gray-200 p-6">
              <h2 className="text-lg font-medium text-gray-900 mb-6">Discount Value</h2>
              
              <div className="flex gap-3 mb-4">
                <select
                  name="valueType"
                  value={formData.valueType}
                  onChange={handleInputChange}
                  className="px-3 py-2 border border-gray-300 rounded-md"
                >
                  <option value="percentage">Percentage</option>
                  <option value="fixed-amount">Fixed amount</option>
                </select>
                <input
                  type="number"
                  name="discountValue"
                  value={formData.discountValue}
                  onChange={handleInputChange}
                  placeholder="0"
                  className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <span className="px-3 py-2 text-gray-500">
                  {formData.valueType === 'percentage' ? '%' : '$'}
                </span>
              </div>
            </div>
          )}

          <div className="bg-white rounded-lg border border-gray-200 p-6">
            <h2 className="text-lg font-medium text-gray-900 mb-6">Minimum purchase requirements</h2>
            
            <div className="space-y-3">
              <label className="flex items-center">
                <input
                  type="radio"
                  name="minRequirement"
                  value="no-minimum"
                  checked={formData.minRequirement === 'no-minimum'}
                  onChange={handleInputChange}
                  className="w-4 h-4 text-blue-600"
                />
                <span className="ml-2 text-gray-700">No minimum requirements</span>
              </label>
              
              <label className="flex items-center">
                <input
                  type="radio"
                  name="minRequirement"
                  value="minimum-amount"
                  checked={formData.minRequirement === 'minimum-amount'}
                  onChange={handleInputChange}
                  className="w-4 h-4 text-blue-600"
                />
                <span className="ml-2 text-gray-700">Minimum purchase amount (₹)</span>
              </label>
              
              {formData.minRequirement === 'minimum-amount' && (
                <div className="ml-6">
                  <input
                    type="number"
                    name="minAmount"
                    value={formData.minAmount}
                    onChange={handleInputChange}
                    className="w-32 px-3 py-2 border border-gray-300 rounded-md"
                    placeholder="0.00"
                  />
                </div>
              )}
              
              <label className="flex items-center">
                <input
                  type="radio"
                  name="minRequirement"
                  value="minimum-quantity"
                  checked={formData.minRequirement === 'minimum-quantity'}
                  onChange={handleInputChange}
                  className="w-4 h-4 text-blue-600"
                />
                <span className="ml-2 text-gray-700">Minimum quantity of items</span>
              </label>
              
              {formData.minRequirement === 'minimum-quantity' && (
                <div className="ml-6">
                  <input
                    type="number"
                    name="minQuantity"
                    value={formData.minQuantity}
                    onChange={handleInputChange}
                    className="w-32 px-3 py-2 border border-gray-300 rounded-md"
                    placeholder="1"
                  />
                </div>
              )}
            </div>
          </div>

          <div className="bg-white rounded-lg border border-gray-200 p-6">
            <h2 className="text-lg font-medium text-gray-900 mb-6">Eligibility</h2>
            <p className="text-sm text-gray-500 mb-4">Redeemable on all sales channels you have set up</p>
            
            <div className="space-y-3">
              <label className="flex items-center">
                <input
                  type="radio"
                  name="eligibility"
                  value="all-customers"
                  checked={formData.eligibility === 'all-customers'}
                  onChange={handleInputChange}
                  className="w-4 h-4 text-blue-600"
                />
                <span className="ml-2 text-gray-700">All customers</span>
              </label>
              
              <label className="flex items-center">
                <input
                  type="radio"
                  name="eligibility"
                  value="specific-segments"
                  checked={formData.eligibility === 'specific-segments'}
                  onChange={handleInputChange}
                  className="w-4 h-4 text-blue-600"
                />
                <span className="ml-2 text-gray-700">Specific customer segments</span>
              </label>
              
              <label className="flex items-center">
                <input
                  type="radio"
                  name="eligibility"
                  value="specific-customers"
                  checked={formData.eligibility === 'specific-customers'}
                  onChange={handleInputChange}
                  className="w-4 h-4 text-blue-600"
                />
                <span className="ml-2 text-gray-700">Specific customers</span>
              </label>
            </div>
          </div>

          <div className="bg-white rounded-lg border border-gray-200 p-6">
            <h2 className="text-lg font-medium text-gray-900 mb-6">Maximum discount uses</h2>
            
            <div className="space-y-4">
              <label className="flex items-center">
                <input
                  type="checkbox"
                  name="limitTotalUses"
                  checked={formData.limitTotalUses}
                  onChange={handleInputChange}
                  className="w-4 h-4 text-blue-600"
                />
                <span className="ml-2 text-gray-700">Limit number of times this discount can be used in total</span>
              </label>
              
              {formData.limitTotalUses && (
                <div className="ml-6">
                  <input
                    type="number"
                    name="totalUsesLimit"
                    value={formData.totalUsesLimit}
                    onChange={handleInputChange}
                    className="w-32 px-3 py-2 border border-gray-300 rounded-md"
                    placeholder="1"
                  />
                </div>
              )}
              
              <label className="flex items-center">
                <input
                  type="checkbox"
                  name="limitPerCustomer"
                  checked={formData.limitPerCustomer}
                  onChange={handleInputChange}
                  className="w-4 h-4 text-blue-600"
                />
                <span className="ml-2 text-gray-700">Limit to one use per customer</span>
              </label>
            </div>
          </div>

          <div className="bg-white rounded-lg border border-gray-200 p-6">
            <h2 className="text-lg font-medium text-gray-900 mb-6">Combinations</h2>
            
            <div className="space-y-3">
              <label className="flex items-center">
                <input
                  type="checkbox"
                  name="productDiscounts"
                  checked={formData.productDiscounts}
                  onChange={handleInputChange}
                  className="w-4 h-4 text-blue-600"
                />
                <span className="ml-2 text-gray-700">Product discounts</span>
              </label>
              
              <label className="flex items-center">
                <input
                  type="checkbox"
                  name="orderDiscounts"
                  checked={formData.orderDiscounts}
                  onChange={handleInputChange}
                  className="w-4 h-4 text-blue-600"
                />
                <span className="ml-2 text-gray-700">Order discounts</span>
              </label>
              
              <label className="flex items-center">
                <input
                  type="checkbox"
                  name="shippingDiscounts"
                  checked={formData.shippingDiscounts}
                  onChange={handleInputChange}
                  className="w-4 h-4 text-blue-600"
                />
                <span className="ml-2 text-gray-700">Shipping discounts</span>
              </label>
            </div>
          </div>

          <div className="bg-white rounded-lg border border-gray-200 p-6">
            <h2 className="text-lg font-medium text-gray-900 mb-6">Active dates</h2>
            
            <div className="grid grid-cols-2 gap-4 mb-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Start date
                </label>
                <input
                  type="date"
                  name="startDate"
                  value={formData.startDate}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Start time (EDT)
                </label>
                <input
                  type="time"
                  name="startTime"
                  value={formData.startTime}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md"
                />
              </div>
            </div>
            
            <label className="flex items-center">
              <input
                type="checkbox"
                name="setEndDate"
                checked={formData.setEndDate}
                onChange={handleInputChange}
                className="w-4 h-4 text-blue-600"
              />
              <span className="ml-2 text-gray-700">Set end date</span>
            </label>
            
            {formData.setEndDate && (
              <div className="grid grid-cols-2 gap-4 mt-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    End date
                  </label>
                  <input
                    type="date"
                    name="endDate"
                    value={formData.endDate}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    End time (EDT)
                  </label>
                  <input
                    type="time"
                    name="endTime"
                    value={formData.endTime}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md"
                  />
                </div>
              </div>
            )}
          </div>
        </div>

        <div className="w-80">
          <div className="bg-white rounded-lg border border-gray-200 p-6">
            <h3 className="text-lg font-medium text-gray-900 mb-4">Summary</h3>
            
            <div className="space-y-3 text-sm">
              <div>
                <span className="text-gray-500">Type:</span>
                <span className="ml-2 text-gray-900 capitalize">
                  {formData.discountType.replace('-', ' ')}
                </span>
              </div>
              
              <div>
                <span className="text-gray-500">Method:</span>
                <span className="ml-2 text-gray-900 capitalize">
                  {formData.method.replace('-', ' ')}
                </span>
              </div>
              
              {formData.discountCode && (
                <div>
                  <span className="text-gray-500">Code:</span>
                  <span className="ml-2 text-gray-900 font-mono">
                    {formData.discountCode}
                  </span>
                </div>
              )}
              
              {formData.discountValue && (
                <div>
                  <span className="text-gray-500">Value:</span>
                  <span className="ml-2 text-gray-900">
                    {formData.discountValue}{formData.valueType === 'percentage' ? '%' : '$'} off
                  </span>
                </div>
              )}
              
              <div className="pt-3 border-t border-gray-200">
                <div className="flex items-center gap-2 text-green-600">
                  <Calendar className="w-4 h-4" />
                  <span>Active from today</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
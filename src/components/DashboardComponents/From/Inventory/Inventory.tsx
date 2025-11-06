import { FormDataProduct } from '@/lib/productInterface';
import React from 'react';

interface InventoryProps {
  formData: FormDataProduct;
  onChange: (field: keyof FormDataProduct, value: string | boolean) => void;
}

export const Inventory: React.FC<InventoryProps> = ({ formData, onChange }) => {
  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
      <h3 className="text-lg font-medium text-gray-900 mb-4">Inventory</h3>

      <div className="flex items-center mb-4">
        <input
          type="checkbox"
          id="trackQuantity"
          className="mr-2"
          checked={formData.trackQuantity}
          onChange={(e) => onChange('trackQuantity', e.target.checked)}
        />
        <label htmlFor="trackQuantity" className="text-sm text-gray-700">
          Track quantity
        </label>
      </div>

      <div className="mb-4">
        <div className="flex justify-between items-center mb-2">
          <label className="block text-sm font-medium text-gray-700">Quantity</label>
          <button className="text-blue-600 hover:text-blue-800 text-sm">Edit locations</button>
        </div>
        <div className="flex items-center gap-4">
          <span className="text-sm text-gray-700">Jl.Garukya, Tanjung</span>
          <input
            type="text"
            className="w-20 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            value={formData.quantity}
            onChange={(e) => onChange('quantity', e.target.value)}
          />
        </div>
      </div>

      <div className="flex items-center mb-4">
        <input
          type="checkbox"
          id="continueSelling"
          className="mr-2"
          checked={formData.continueSelling}
          onChange={(e) => onChange('continueSelling', e.target.checked)}
        />
        <label htmlFor="continueSelling" className="text-sm text-gray-700">
          Continue selling when out of stock
        </label>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">SKU (Stock Keeping Unit)</label>
          <input
            type="text"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            value={formData.sku}
            onChange={(e) => onChange('sku', e.target.value)}
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Barcode (ISBN, UPC, GTIN, etc.)</label>
          <input
            type="text"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            value={formData.barcode}
            onChange={(e) => onChange('barcode', e.target.value)}
          />
        </div>
      </div>
    </div>
  );
};

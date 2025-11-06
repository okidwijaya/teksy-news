import { FormDataProduct } from '@/lib/productInterface';
import React from 'react';

interface SeoProps {
  formData: FormDataProduct;
  onChange: (field: keyof FormDataProduct, value: string) => void;
}

export const Seo: React.FC<SeoProps> = ({ formData, onChange }) => {
  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
      <div className="flex justify-between items-center">
        <h3 className="text-lg font-medium text-gray-900">Search engine listing</h3>
        <button className="text-blue-600 hover:text-blue-800 text-sm">Edit</button>
      </div>
      <p className="text-sm text-gray-600 mt-2">
        Add a title and description to see how this product might appear in a search engine listing
      </p>

      <div className="mt-4 space-y-4">
        {/* Page Title */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Page title</label>
          <input
            type="text"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            maxLength={70}
            value={formData.seoTitle}
            onChange={(e) => onChange('seoTitle', e.target.value)}
          />
          <p className="text-xs text-gray-500 mt-1">{formData.seoTitle.length} of 70 characters used</p>
        </div>

        {/* Meta Description */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Meta description</label>
          <textarea
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            maxLength={160}
            rows={3}
            value={formData.seoDescription}
            onChange={(e) => onChange('seoDescription', e.target.value)}
          />
          <p className="text-xs text-gray-500 mt-1">{formData.seoDescription.length} of 160 characters used</p>
        </div>

        {/* URL Handle (read-only for now) */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">URL handle</label>
          <input
            type="text"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            value={`products/${formData.title.toLowerCase().replace(/\s+/g, '-')}`}
            readOnly
          />
          <p className="text-xs text-gray-500 mt-1">
            https://yourstore.com/products/{formData.title.toLowerCase().replace(/\s+/g, '-')}
          </p>
        </div>
      </div>
    </div>
  );
};

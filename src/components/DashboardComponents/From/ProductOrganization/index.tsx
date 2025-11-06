import { FormDataProduct } from '@/lib/productInterface';
import React from 'react';

interface ProductOrganizationProps {
    formData: FormDataProduct;
    handleInputChange: (field: keyof FormDataProduct, value: string | number) => void;
}

export const ProductOrganization = ({
    formData,
    handleInputChange,
}: ProductOrganizationProps) => {
    return (
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <h3 className="text-lg font-medium text-gray-900 mb-4">Product organization</h3>

            <div className="space-y-4">
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Type</label>
                    <input
                        type="text"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        value={formData.productType}
                        onChange={(e) => handleInputChange('productType', e.target.value)}
                    />
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Vendor</label>
                    <input
                        type="text"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        value={formData.vendor}
                        onChange={(e) => handleInputChange('vendor', e.target.value)}
                    />
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Collections</label>
                    <input
                        type="text"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        value={formData.collections}
                        onChange={(e) => handleInputChange('collections', e.target.value)}
                    />
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Tags</label>
                    <input
                        type="text"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        value={formData.tags}
                        onChange={(e) => handleInputChange('tags', e.target.value)}
                    />
                </div>
            </div>
        </div>
    );
};

import React from 'react';
import { FormDataProduct } from '@/lib/productInterface';
interface ShippingProps {
    formData: FormDataProduct;
    onChange: (field: keyof FormDataProduct, value: string | boolean) => void;
}

export const Shipping: React.FC<ShippingProps> = ({ formData, onChange }) => {
    return (
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <h3 className="text-lg font-medium text-gray-900 mb-4">Shipping</h3>

            <div className="flex items-center mb-4">
                <input
                    type="checkbox"
                    id="isPhysicalProduct"
                    className="mr-2"
                    checked={formData.isPhysicalProduct}
                    onChange={(e) => onChange('isPhysicalProduct', e.target.checked)}
                />
                <label htmlFor="isPhysicalProduct" className="text-sm text-gray-700">
                    This is a physical product
                </label>
            </div>

            <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-2">Weight</label>
                <div className="flex">
                    <input
                        type="text"
                        className="flex-1 px-3 py-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        value={formData.weight}
                        onChange={(e) => onChange('weight', e.target.value)}
                    />
                    <select
                        value={formData.weightUnit}
                        onChange={(e) => onChange('weightUnit', e.target.value)}
                    >
                        <option value="kg">kg</option>
                        <option value="g">g</option>
                        <option value="lb">lb</option>
                        <option value="oz">oz</option>
                    </select>

                </div>
            </div>

            <button className="text-blue-600 hover:text-blue-800 text-sm">Add customs information</button>
        </div>
    );
};

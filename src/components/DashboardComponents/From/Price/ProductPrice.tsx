import React from 'react';
import { Info } from 'lucide-react';
import { FormDataProduct } from '@/lib/productInterface';

interface ProductPricingProps {
    formData: FormDataProduct;
    onChange: (field: keyof FormDataProduct, value: string | boolean) => void;
}

export const ProductPricing: React.FC<ProductPricingProps> = ({ formData, onChange }) => {
    return (
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <h3 className="text-lg font-medium text-gray-900 mb-4">Pricing</h3>

            <div className="grid grid-cols-2 gap-4 mb-4">
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Price</label>
                    <div className="relative">
                        <span className="absolute left-3 top-2 text-gray-500">Rp</span>
                        <input
                            type="text"
                            className="w-full pl-8 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            value={formData.price}
                            onChange={(e) => onChange('price', e.target.value)}
                        />
                    </div>
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Compare-at price</label>
                    <div className="relative">
                        <span className="absolute left-3 top-2 text-gray-500">Rp</span>
                        <input
                            type="text"
                            className="w-full pl-8 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            value={formData.comparePrice}
                            onChange={(e) => onChange('comparePrice', e.target.value)}
                        />
                        <div className="absolute right-3 top-2">
                            <Info className="w-4 h-4 text-gray-400" />
                        </div>
                    </div>
                </div>
            </div>

            <div className="flex items-center mb-4">
                <input
                    type="checkbox"
                    id="chargeTax"
                    className="mr-2"
                    checked={formData.chargeTax}
                    onChange={(e) => onChange('chargeTax', e.target.checked)}
                />
                <label htmlFor="chargeTax" className="text-sm text-gray-700">
                    Charge tax on this product
                </label>
            </div>

            <div className="grid grid-cols-3 gap-4">
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Cost per item</label>
                    <div className="relative">
                        <span className="absolute left-3 top-2 text-gray-500">Rp</span>
                        <input
                            type="text"
                            className="w-full pl-8 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            value={formData.costPerItem}
                            onChange={(e) => onChange('costPerItem', e.target.value)}
                        />
                        <div className="absolute right-3 top-2">
                            <Info className="w-4 h-4 text-gray-400" />
                        </div>
                    </div>
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Profit</label>
                    <input
                        type="text"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="--"
                        value={formData.profit}
                        onChange={(e) => onChange('profit', e.target.value)}
                    />
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Margin</label>
                    <input
                        type="text"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="--"
                        value={formData.margin}
                        onChange={(e) => onChange('margin', e.target.value)}
                    />
                </div>
            </div>
        </div>
    );
};

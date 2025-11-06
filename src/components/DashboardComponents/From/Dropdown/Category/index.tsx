import React from 'react';

interface CategoryProps {
    value: string;
    onChange: (value: string) => void;
}

export const Category: React.FC<CategoryProps> = ({ value, onChange }) => {
    return (
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-2">Category</label>
                <select
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    value={value}
                    onChange={(e) => onChange(e.target.value)}
                >
                    <option value="">Choose a product category</option>
                    <optgroup label="Popular Categories">
                        <option value="Animals & Pet Supplies">Animals & Pet Supplies</option>
                        <option value="Apparel & Accessories">Apparel & Accessories</option>
                        <option value="Arts & Entertainment">Arts & Entertainment</option>
                        <option value="Baby & Toddler">Baby & Toddler</option>
                        <option value="Business & Industrial">Business & Industrial</option>
                        <option value="Cameras & Optics">Cameras & Optics</option>
                        <option value="Electronics">Electronics</option>
                        <option value="Food, Beverages & Tobacco">Food, Beverages & Tobacco</option>
                        <option value="Furniture & Decor">Furniture & Decor</option>
                        <option value="Health & Beauty">Health & Beauty</option>
                        <option value="Home & Garden">Home & Garden</option>
                        <option value="Luggage & Bags">Luggage & Bags</option>
                        <option value="Musical Instruments">Musical Instruments</option>
                        <option value="Office Supplies">Office Supplies</option>
                        <option value="Religious & Ceremonial">Religious & Ceremonial</option>
                        <option value="Software">Software</option>
                        <option value="Sporting Goods">Sporting Goods</option>
                        <option value="Toys & Games">Toys & Games</option>
                        <option value="Vehicles & Parts">Vehicles & Parts</option>
                    </optgroup>
                </select>
                <p className="text-xs text-gray-500 mt-1">
                    Determines tax rates and aids metafields to improve search, filters, and cross-channel sales
                </p>
            </div>
        </div>
    );
};

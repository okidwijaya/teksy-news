import { FormDataProduct } from '@/lib/productInterface';
import React from 'react';

interface StatusProps {
    value: string;
    onChange: (field: keyof FormDataProduct, value: string | number) => void;
}

export const Status: React.FC<StatusProps> = ({ value, onChange }) => {
    return (
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <h3 className="text-lg font-medium text-gray-900 mb-4">Status</h3>
            <select
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                value={value}
                onChange={(e) => onChange('status', e.target.value)}
            >
                <option value="Active">Active</option>
                <option value="Draft">Draft</option>
                <option value="Archived">Archived</option>
            </select>
        </div>
    );
};

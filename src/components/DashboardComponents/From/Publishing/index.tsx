import { FormDataProduct } from '@/lib/productInterface';
import React from 'react';

interface PublishingProps {
    formData: FormDataProduct;
    handleInputChange: (field: keyof FormDataProduct, value: any) => void;
}

export const Publishing = ({
    formData,
    handleInputChange,
}: PublishingProps) => {
    const channelOptions = ['Online Store', 'Point of Sale', 'Offline Store'];

    const toggleChannel = (channel: string) => {
        const current = formData.channels || [];
        if (current.includes(channel)) {
            handleInputChange(
                'channels',
                current.filter((c) => c !== channel)
            );
        } else {
            handleInputChange('channels', [...current, channel]);
        }
    };

    return (
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-medium text-gray-900">Publishing</h3>
                <button className="text-blue-600 hover:text-blue-800 text-sm">Manage</button>
            </div>

            <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-2">Sales channels</label>
                <div className="flex flex-wrap gap-2">
                    {channelOptions.map((option) => (
                        <button
                            key={option}
                            type="button"
                            onClick={() => toggleChannel(option)}
                            className={`px-3 py-1 rounded-full border text-sm ${formData.channels?.includes(option)
                                ? 'bg-blue-100 text-blue-700 border-blue-400'
                                : 'bg-white text-gray-700 border-gray-300'
                                }`}
                        >
                            {option}
                        </button>
                    ))}
                </div>
            </div>

            <div className="mb-2">
                <label className="block text-sm font-medium text-gray-700 mb-2">Publish date</label>
                <input
                    type="datetime-local"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    value={formData.publishDate}
                    onChange={(e) => handleInputChange('publishDate', e.target.value)}
                />
                <p className="text-xs text-gray-500 mt-1">Choose when the product becomes visible to customers.</p>
            </div>
        </div>
    );
};

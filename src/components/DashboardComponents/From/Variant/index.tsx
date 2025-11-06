import React, { useState } from 'react';
import { Plus, X } from 'lucide-react';
import { FormDataProduct } from '@/lib/productInterface';

interface VariantsProps {
  formData: FormDataProduct;
  onChange: (field: keyof FormDataProduct, value: any) => void;
}

export const Variants: React.FC<VariantsProps> = ({ formData, onChange }) => {
  const [showInput, setShowInput] = useState(false);
  const [optionType, setOptionType] = useState('');
  const [optionValue, setOptionValue] = useState('');

  const handleAddVariant = () => {
    if (!optionType || !optionValue) return;

    const newVariant = { type: optionType, value: optionValue };
    const updatedVariants = [...(formData.variants || []), newVariant];

    onChange('variants', updatedVariants);
    setOptionType('');
    setOptionValue('');
    setShowInput(false);
  };

  const handleRemoveVariant = (index: number) => {
    const updatedVariants = [...(formData.variants || [])];
    updatedVariants.splice(index, 1);
    onChange('variants', updatedVariants);
  };

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
      <h3 className="text-lg font-medium text-gray-900 mb-4">Variants</h3>

      {formData.variants && formData.variants.length > 0 && (
        <div className="flex flex-wrap gap-2 mb-4">
          {formData.variants.map((variant, idx) => (
            <div key={idx} className="bg-gray-100 px-3 py-1 rounded-full text-sm flex items-center gap-2">
              {variant.type}/{variant.value}
              <button onClick={() => handleRemoveVariant(idx)}>
                <X className="w-3 h-3 text-gray-600" />
              </button>
            </div>
          ))}
        </div>
      )}

      {showInput ? (
        <div className="flex gap-2 mb-4">
          <input
            type="text"
            className="px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
            placeholder="Option type (e.g. Color)"
            value={optionType}
            onChange={(e) => setOptionType(e.target.value)}
          />
          <input
            type="text"
            className="px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
            placeholder="Value (e.g. Red)"
            value={optionValue}
            onChange={(e) => setOptionValue(e.target.value)}
          />
          <button
            onClick={handleAddVariant}
            className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
          >
            Save
          </button>
        </div>
      ) : (
        <button
          className="flex items-center gap-2 text-blue-600 hover:text-blue-800 text-sm"
          onClick={() => setShowInput(true)}
        >
          <Plus className="w-4 h-4" />
          Add options like size or color
        </button>
      )}
    </div>
  );
};

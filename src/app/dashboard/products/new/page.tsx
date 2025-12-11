'use client'
import React, { useState } from 'react';
import {
  ChevronDown,
  Plus,
} from 'lucide-react';
import TextInput from '@/components/DashboardComponents/From/Text/TextInput';
import { FormDataProduct } from '@/lib/productInterface';
import { TextEditor } from '@/components/DashboardComponents/From/Text/RichText';
import { MediaUpload } from '@/components/DashboardComponents/From/Media/Image';
import { Category } from '@/components/DashboardComponents/From/Dropdown/Category';
import { ProductPricing } from '@/components/DashboardComponents/From/Price/ProductPrice';
import { Inventory } from '@/components/DashboardComponents/From/Inventory/Inventory';
import { Shipping } from '@/components/DashboardComponents/From/Shipping/Shipping';
import { Seo } from '@/components/DashboardComponents/From/Seo/Seo';
import { Variants } from '@/components/DashboardComponents/From/Variant';
import { ProductOrganization } from '@/components/DashboardComponents/From/ProductOrganization';
import { Publishing } from '@/components/DashboardComponents/From/Publishing';
import { Status } from '@/components/DashboardComponents/From/Status';

const Page: React.FC = () => {
  const [formData, setFormData] = useState<FormDataProduct>({
    title: '',
    description: '',
    price: '0.00',
    comparePrice: '0.00',
    costPerItem: '0.00',
    profit: '',
    margin: '',
    quantity: '0',
    sku: '',
    barcode: '',
    weight: '0.0',
    weightUnit: 'kg',
    seoTitle: '',
    seoDescription: '',
    status: 'Active',
    productType: '',
    vendor: '',
    collections: '',
    tags: '',
    trackQuantity: true,
    continueSelling: false,
    isPhysicalProduct: true,
    chargeTax: false,
    isBold: false,
    isItalic: false,
    isUnderline: false,
    isList: false,
    isCode: false,
    alignment: 'left',
    showImageDialog: false,
    showLinkDialog: false,
    format: 'paragraph',
    media: [],
    variants: [],
    publishDate: new Date().toISOString().slice(0, 16),
    channels: ['Online Store'],
  });

  // const handleInputChange = (field: keyof FormDataProduct, value: string | boolean | string[]) => {
  const handleInputChange = (field: keyof FormDataProduct, value: unknown) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  return (
    <div className="bg-gray-100">
      <div className="bg-white border-b border-gray-200 px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 bg-yellow-400 rounded-full flex items-center justify-center">
                <span className="text-xs font-bold">!</span>
              </div>
              <span className="text-sm text-gray-600">Unsaved product</span>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <button className="px-4 py-2 text-gray-600 hover:text-gray-800">Discard</button>
            <button onClick={() => console.log(formData)} className="px-4 py-2 bg-gray-200 text-gray-600 rounded-md cursor-not-allowed">Save</button>
          </div>
        </div>
      </div>

      <div className="flex">
        <div className="flex-1 p-6">
          <div className="max-w-4xl">
            <div className="flex items-center gap-2 mb-6">
              <ChevronDown className="w-5 h-5 text-gray-600" />
              <h1 className="text-xl font-semibold text-gray-900">Add product</h1>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <div className="lg:col-span-2 space-y-6">
                <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                  <TextInput
                    value={formData.title}
                    onChange={(e) => handleInputChange('title', e.target.value)}
                  />

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Description</label>
                    <TextEditor value={formData} onChange={handleInputChange} />
                  </div>
                </div>
                <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                  <h3 className="text-lg font-medium text-gray-900 mb-4">Media</h3>
                  <MediaUpload
                    value={formData.media}
                    onChange={(newMedia) => handleInputChange("media", newMedia)}
                  />
                </div>

                <Category
                  value={formData.productType}
                  onChange={(val) => handleInputChange('productType', val)}
                />

                <ProductPricing formData={formData} onChange={handleInputChange} />

                <Inventory formData={formData} onChange={handleInputChange} />

                <Shipping formData={formData} onChange={handleInputChange} />

                <Variants
                  formData={formData}
                  onChange={(field, value) => setFormData(prev => ({ ...prev, [field]: value }))}
                />


                <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                  <h3 className="text-lg font-medium text-gray-900 mb-4">Purchase options</h3>
                  <button className="flex items-center gap-2 text-blue-600 hover:text-blue-800 text-sm">
                    <Plus className="w-4 h-4" />
                    Subscriptions, preorders, try before you buy, and more
                  </button>
                </div>

                <Seo formData={formData} onChange={handleInputChange} />
              </div>

              <div className="space-y-6">
                <Status value={formData.status} onChange={handleInputChange} />

                <Publishing
                  formData={formData}
                  handleInputChange={handleInputChange}
                />

                <ProductOrganization
                  formData={formData}
                  handleInputChange={handleInputChange}
                />

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
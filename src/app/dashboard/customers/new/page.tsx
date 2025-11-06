'use client';
import React, { useState } from 'react';
import { User, Edit2 } from 'lucide-react';

interface FormData {
  firstName: string;
  lastName: string;
  language: string;
  email: string;
  phoneNumber: string;
  marketingEmails: boolean;
  smsMarketing: boolean;
  taxSetting: string;
}

export default function Page() {
  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    language: 'English [Default]',
    email: '',
    phoneNumber: '',
    marketingEmails: false,
    smsMarketing: false,
    taxSetting: 'Collect tax'
  });

  const [notes, setNotes] = useState('');
  const [tags, setTags] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    const checked = (e.target as HTMLInputElement).checked;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSave = () => {
    console.log('Saving customer data:', { ...formData, notes, tags });
    // Handle save logic here
  };

  const handleDiscard = () => {
    setFormData({
      firstName: '',
      lastName: '',
      language: 'English [Default]',
      email: '',
      phoneNumber: '',
      marketingEmails: false,
      smsMarketing: false,
      taxSetting: 'Collect tax'
    });
    setNotes('');
    setTags('');
  };

  return (
    <div className="bg-gray-50 p-6">
      {/* Header */}
      <div className="mb-6 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <User className="w-6 h-6 text-gray-600" />
          <h1 className="text-2xl font-semibold text-gray-900">New customer</h1>
        </div>
        <div className="flex gap-3">
          <button 
            onClick={handleDiscard}
            className="px-4 py-2 text-gray-600 hover:text-gray-800 font-medium"
          >
            Discard
          </button>
          <button 
            onClick={handleSave}
            className="px-6 py-2 bg-black text-white rounded-lg hover:bg-gray-800 font-medium"
          >
            Save
          </button>
        </div>
      </div>

      <div className="flex gap-6">
        {/* Main Form */}
        <div className="flex-1 space-y-6">
          {/* Customer Overview */}
          <div className="bg-white rounded-lg border border-gray-200 p-6">
            <h2 className="text-lg font-medium text-gray-900 mb-6">Customer overview</h2>
            
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  First name
                </label>
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Last name
                </label>
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
            </div>

            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Language
              </label>
              <select
                name="language"
                value={formData.language}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option>English [Default]</option>
                <option>Spanish</option>
                <option>French</option>
                <option>German</option>
              </select>
              <p className="text-sm text-gray-500 mt-1">
                This customer will receive notifications in this language.
              </p>
            </div>

            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Email
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Phone number
              </label>
              <div className="flex">
                <select className="px-3 py-2 border border-gray-300 rounded-l-md border-r-0 bg-gray-50">
                  <option>🇺🇸</option>
                  <option>🇬🇧</option>
                  <option>🇨🇦</option>
                </select>
                <input
                  type="tel"
                  name="phoneNumber"
                  value={formData.phoneNumber}
                  onChange={handleInputChange}
                  className="flex-1 px-3 py-2 border border-gray-300 rounded-r-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
            </div>

            <div className="space-y-3 mb-6">
              <label className="flex items-center">
                <input
                  type="checkbox"
                  name="marketingEmails"
                  checked={formData.marketingEmails}
                  onChange={handleInputChange}
                  className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                />
                <span className="ml-2 text-sm text-gray-700">
                  Customer agreed to receive marketing emails.
                </span>
              </label>
              <label className="flex items-center">
                <input
                  type="checkbox"
                  name="smsMarketing"
                  checked={formData.smsMarketing}
                  onChange={handleInputChange}
                  className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                />
                <span className="ml-2 text-sm text-gray-700">
                  Customer agreed to receive SMS marketing text messages.
                </span>
              </label>
            </div>

            <div className="bg-blue-50 border border-blue-200 rounded-md p-4">
              <p className="text-sm text-blue-800">
                You should ask your customers for permission before you subscribe them to your marketing emails or SMS.
              </p>
            </div>
          </div>

          {/* Default Address */}
          <div className="bg-white rounded-lg border border-gray-200 p-6">
            <h2 className="text-lg font-medium text-gray-900 mb-2">Default address</h2>
            <p className="text-sm text-gray-500 mb-4">The primary address of this customer</p>
            
            <button className="flex items-center text-blue-600 hover:text-blue-800 font-medium">
              <span className="w-6 h-6 border-2 border-blue-600 rounded-full flex items-center justify-center mr-3">
                <span className="text-lg">+</span>
              </span>
              Add address
            </button>
          </div>

          {/* Tax Details */}
          <div className="bg-white rounded-lg border border-gray-200 p-6">
            <h2 className="text-lg font-medium text-gray-900 mb-6">Tax details</h2>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Tax settings
              </label>
              <select
                name="taxSetting"
                value={formData.taxSetting}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option>Collect tax</option>
                <option>Tax exempt</option>
              </select>
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <div className="w-80 space-y-6">
          {/* Notes */}
          <div className="bg-white rounded-lg border border-gray-200 p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-medium text-gray-900">Notes</h3>
              <Edit2 className="w-4 h-4 text-gray-400" />
            </div>
            <p className="text-sm text-gray-500 mb-4">
              Notes are private and wont be shared with the customer.
            </p>
            <textarea
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
              rows={4}
              placeholder="Add notes about this customer..."
            />
          </div>

          {/* Tags */}
          <div className="bg-white rounded-lg border border-gray-200 p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-medium text-gray-900">Tags</h3>
              <Edit2 className="w-4 h-4 text-gray-400" />
            </div>
            <input
              type="text"
              value={tags}
              onChange={(e) => setTags(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="Add tags..."
            />
          </div>
        </div>
      </div>
    </div>
  );
}
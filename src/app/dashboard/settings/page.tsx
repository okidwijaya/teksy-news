'use client'

import React from 'react'

export default function Page() {
  return (
    <div className="w-full text-[#212121] mx-auto p-6 space-y-8 h-full bg-[#F1F1F1]">
      <div className="w-full max-w-[820px] mx-auto bg-white border-[#D4D4D4] border rounded-md shadow p-4 space-y-4">
        <h2 className="text-[12px] text-[#212121] font-semibold">Store details</h2>
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <div>
              <p className="font-semibold">Quickstart (e2b0e499)</p>
              <p className="text-[#212121] text-[12px]">okidwijaya@gmail.com • No phone number</p>
            </div>
          </div>
          <div className="border-t border-[#D4D4D4] pt-4">
            <p className="text-[#212121]">
              <strong>Billing address:</strong><br />
              Jl. Gerilya, Tanjung, Purwokerto, Central Java 53171, Indonesia
            </p>
          </div>
        </div>
      </div>

      <div className="w-full max-w-[820px] mx-auto bg-white border-[#D4D4D4] border rounded-md shadow p-4 space-y-6">
        <h2 className="text-[12px] text-[#212121] font-semibold">Store defaults</h2>
        <div>
          <label className="block text-[12px] font-semibold mb-1">Currency display</label>
          <div className="flex items-center justify-between">
            <span className="text-[12px] text-[#212121]">Indonesian Rupiah (IDR Rp)</span>
            <a href="#" className="text-blue-600 text-[12px]">Markets</a>
          </div>
        </div>

        <div>
          <label className="block text-[12px] font-semibold mb-1">Backup Region</label>
          <select className="w-full border border-[#D4D4D4] rounded-md text-[12px] px-2 py-1">
            <option>Indonesia</option>
          </select>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-[12px] font-semibold mb-1">Unit system</label>
            <select className="w-full border border-[#D4D4D4] rounded-md text-[12px] px-2 py-1">
              <option>Metric system</option>
            </select>
          </div>
          <div>
            <label className="block text-[12px] font-semibold mb-1">Default weight unit</label>
            <select className="w-full border border-[#D4D4D4] rounded-md text-[12px] px-2 py-1">
              <option>Kilogram (kg)</option>
            </select>
          </div>
        </div>

        <div>
          <label className="block text-[12px] font-semibold mb-1">Time zone</label>
          <select className="w-full border border-[#D4D4D4] rounded-md text-[12px] px-2 py-1">
            <option>(GMT-05:00) Eastern Time (US & Canada)</option>
          </select>
          <p className="text-[#212121] mt-1">
            Sets the time for when orders and analytics are recorded. To change user level time zone and language visit your <a href="#" className="text-blue-600">account settings</a>
          </p>
        </div>
      </div>

      <div className="w-full max-w-[820px] mx-auto bg-white border-[#D4D4D4] border rounded-md shadow p-4 space-y-4">
        <h2 className="text-[12px] text-[#212121] font-semibold">Order ID</h2>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-[12px] font-semibold mb-1">Prefix</label>
            <input type="text" defaultValue="#" className="text-[12px] w-full border rounded-md px-2 py-1 border-[#D4D4D4]" />
          </div>
          <div>
            <label className="block text-[12px] font-semibold mb-1">Suffix</label>
            <input type="text" className="text-[12px] w-full border rounded-md px-2 py-1 border-[#D4D4D4]" />
          </div>
        </div>
        <p className="text-[#212121]">Your order ID will appear as #1001, #1002, #1003 …</p>
      </div>

      <div className="w-full max-w-[820px] mx-auto bg-white border-[#D4D4D4] border rounded-md shadow p-4 space-y-4">
        <h2 className="text-[12px] text-[#212121] font-semibold">Order processing</h2>
        <fieldset className="space-y-2">
          <legend className="sr-only">Fulfillment options</legend>
          <label className="flex items-center space-x-2">
            <input type="radio" name="fulfill" className="form-radio text-[12px]" />
            <span className='text-[12px]'>Automatically fulfill the order&#39;s line items</span>
          </label>
          <label className="flex items-center space-x-2">
            <input type="radio" name="fulfill" className="form-radio text-[12px]" />
            <span className='text-[12px]'>Automatically fulfill only the gift cards of the order</span>
          </label>
          <label className="flex items-center space-x-2">
            <input type="radio" name="fulfill" defaultChecked className="form-radio text-[12px]" />
            <span className='text-[12px]'>Don&rsquo;t fulfill any of the order&rsquo;s line items automatically</span>
          </label>
        </fieldset>

        <label className="flex items-center space-x-2 pt-4">
          <input type="checkbox" defaultChecked className="form-checkbox text-[12px]" />
          <span className='text-[12px]'>Automatically archive the order</span>
        </label>
        <p className="text-[#212121]">The order will be removed from your list of open orders.</p>
      </div>

      <div className="w-full max-w-[820px] mx-auto bg-white border-[#D4D4D4] border rounded-md shadow p-4">
        <h2 className="text-[12px] text-[#212121] font-semibold mb-2">Brand assets</h2>
        <p className="text-[#212121] mb-4">Integrate brand assets across sales channels, themes, and apps</p>
        <button className="px-4 py-2 bg-[#212121] text-white rounded-md text-[12px]">Manage</button>
      </div>

      <div className="w-full max-w-[820px] mx-auto bg-white border-[#D4D4D4] border rounded-md shadow p-4">
        <h2 className="text-[12px] px-2 py-0 mb-2 text-[#212121] font-semibold">Resources</h2>

        <div className='flex w-full px-2 py-0 flex-col justify-center items-center rounded-md border border-[#D4D4D4] mb-4'>
          <div className="w-full px-2 py-3 border-b border-b-[#D4D4D4] flex justify-between items-center">
            <p className='font-light text-[#212121]'>Change log</p>
            <a href="#" className="text-[#212121] text-[12px]">View change log</a>
          </div>
          <div className="w-full px-2 py-3 border-b border-b-[#D4D4D4] flex justify-between items-center">
            <p className='font-light text-[#212121]'>Shopify Help Center</p>
            <a href="#" className="text-[#212121] text-[12px]">Get help</a>
          </div>
          <div className="w-full px-2 py-3 flex justify-between items-center">
            <p className='font-light text-[#212121]'>Hire a Shopify Partner</p>
            <a href="#" className="text-[#212121] text-[12px]">Hire a Partner</a>
          </div>
        </div>

        <div className='flex w-full px-2 py-0 flex-col justify-center items-center rounded-md border border-[#D4D4D4]'>
          <div className="w-full px-2 py-3 border-b border-b-[#D4D4D4] flex justify-between items-center">
            <p className='font-light text-[#212121]'>Keyboard shortcuts</p>
            <a href="#" className="text-[#212121] text-[12px]">&rsaquo;</a>
          </div>
          <div className="w-full px-2 py-3 flex justify-between items-center">
            <p className='font-light text-[#212121]'>Store activity log</p>
            <a href="#" className="text-[#212121] text-[12px]">&rsaquo;</a>
          </div>
        </div>
      </div>

      <div className="flex justify-end">
        <button className="px-6 py-2 bg-[#212121] text-white rounded-2xl">Save</button>
      </div>
    </div>
  )
}

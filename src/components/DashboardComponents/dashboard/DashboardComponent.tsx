'use client';

import React from 'react';
import { BarChart3, CalendarRangeIcon, Circle, ChevronDown } from 'lucide-react';
import StatsOverview from '../StatsCardOverview/index';
import PromotionalCard from '../PromotionalCard/index';
import BaseButton from '../Button';
import PromoBanner from '../../../../public/banners/banner.webp';

export default function Dashboard() {
  return (
    <>
      <div className="bg-[#F1F1F1] p-6 flex flex-col space-y-4 items-center h-full">
        <div className="w-full max-w-[820px] space-y-4">
          <div className="hidden items-center space-x-3">
            <button className="text-[12px] flex items-center bg-gray-100 border border-gray-200 rounded-md py-1 px-2 text-[#212121] hover:bg-gray-50">
              <BarChart3 className="h-4 w-4 mr-2 text-[#212121]" />
              <span className="font-medium">Analytics</span>
            </button>
          </div>

          <div className="flex space-x-2">
            {/* <DateFilter />
            <ChannelSelector /> */}
            <BaseButton
              label="Last 30 days"
              onClick={() => alert("Clicked!")}
              icon={CalendarRangeIcon}
              iconPosition='left'
              className='font-light'
            />
            <BaseButton
              label="All Channels"
              onClick={() => alert("Clicked!")}
              icon={ChevronDown}
              iconPosition='right'
              className='font-light'
            />
            <BaseButton
              label="30 Live Visitors"
              onClick={() => alert("Clicked!")}
              icon={Circle}
              iconPosition='left'
              className='font-light'
            />
          </div>
        </div>
            
        <div className='w-full max-w-[820px]'>
          <StatsOverview />
        </div>

        <PromotionalCard
          title="Boost conversion with a customized homepage"
          description="Use apps to design a homepage that grabs attention, engages visitors, and drives more sales while helping your business stand out."
          buttonText="View app guide"
          imageUrl={PromoBanner}
        />
      </div>
    </>
  );
}
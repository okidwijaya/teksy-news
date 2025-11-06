'use client';

import React from 'react';
import TimeFilter from '../TimeFilter';
import StatsSummaryItem from '../StatSummaryItemOrder';

export default function OrdersSummary() {
    return (
        <div className="bg-white rounded-lg border border-[#D4D4D4] flex flex-row divide-x divide-[#D4D4D4]">
            <TimeFilter period="Today" />

            <div className="flex-1 grid grid-cols-5">
                <StatsSummaryItem
                    title="Orders"
                    value="0"
                />

                <StatsSummaryItem
                    title="Items ordered"
                    value="0"
                />

                <StatsSummaryItem
                    title="Returns"
                    value="0"
                    currency="IDR"
                />

                <StatsSummaryItem
                    title="Orders fulfilled"
                    value="0"
                />

                <StatsSummaryItem
                    title="Orders delivered"
                    value="0"
                />
            </div>
        </div>
    );
}
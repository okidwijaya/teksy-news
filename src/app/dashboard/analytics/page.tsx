'use client'
import React, { ReactNode, useState } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, ResponsiveContainer, BarChart, Bar, PieChart, Pie, Cell, Tooltip, Legend } from 'recharts';
import { Calendar, TrendingUp, TrendingDown, MoreHorizontal, Download, Filter, Search } from 'lucide-react';

// Sample data for charts
const salesData = [
  { date: '12 AM', value: 0 },
  { date: '2 AM', value: 0 },
  { date: '4 AM', value: 0 },
  { date: '6 AM', value: 0 },
  { date: '8 AM', value: 0 },
  { date: '10 AM', value: 0 },
  { date: '12 PM', value: 0 },
  { date: '2 PM', value: 0 },
  { date: '4 PM', value: 0 },
  { date: '6 PM', value: 0 },
  { date: '8 PM', value: 0 },
  { date: '10 PM', value: 0 },
];

const conversionData = [
  { name: 'Sessions that did not convert', value: 0, color: '#e5e7eb' },
  { name: 'Converted sessions', value: 0, color: '#3b82f6' },
];

const deviceData = [
  { device: 'Desktop', sessions: 0, percentage: '0%' },
  { device: 'Mobile', sessions: 0, percentage: '0%' },
  { device: 'Tablet', sessions: 0, percentage: '0%' },
];

// Interactive Data Table Component
type SortDirection = 'asc' | 'desc';

interface SortConfig {
  key: string | null;
  direction: SortDirection;
}

interface Column {
  key: string;
  label: string;
}

interface DataRecord {
  [key: string]: string | number;
}

interface InteractiveDataTableProps {
  title: string;
  columns: Column[];
  data: DataRecord[]; 
  searchable?: boolean;
}

interface EnhancedMetricCardProps {
  title: string;
  value?: string | number;
  change?: string | number;
  changeType?: 'up' | 'down' | 'neutral';
  subtitle?: string;
  icon?: React.ComponentType<{ className?: string }>;
  trend?: DataRecord[];
}

const EnhancedMetricCard: React.FC<EnhancedMetricCardProps> = ({
  title,
  value,
  change,
  changeType = 'neutral',
  subtitle,
  icon: Icon,
  trend,
}) => (
  <div className="bg-white rounded-lg border border-gray-200 p-4 hover:shadow-md transition-shadow">
    <div className="flex justify-between items-start mb-3">
      <div className="flex items-center space-x-2">
        {Icon && <Icon className="w-4 h-4 text-gray-500" />}
        <h3 className="text-sm font-medium text-gray-700">{title}</h3>
      </div>
      <div className="flex items-center space-x-2">
        {change && (
          <div
            className={`flex items-center text-xs px-2 py-1 rounded-full ${
              changeType === 'up'
                ? 'text-green-700 bg-green-50'
                : changeType === 'down'
                ? 'text-red-700 bg-red-50'
                : 'text-gray-600 bg-gray-50'
            }`}
          >
            {changeType === 'up' && <TrendingUp className="w-3 h-3 mr-1" />}
            {changeType === 'down' && <TrendingDown className="w-3 h-3 mr-1" />}
            {change}
          </div>
        )}
        <MoreHorizontal className="w-4 h-4 text-gray-400 cursor-pointer hover:text-gray-600" />
      </div>
    </div>
    
    <div className="text-2xl font-semibold text-gray-900 mb-2">{value}</div>
    
    {subtitle && <div className="text-xs text-gray-500 mb-2">{subtitle}</div>}
    
    {trend && (
      <div className="h-8 mt-2">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={trend}>
            <Line 
              type="monotone" 
              dataKey="value" 
              stroke="#3b82f6" 
              strokeWidth={2}
              dot={false}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    )}
  </div>
);

// Interactive Chart Card Component
interface InteractiveChartCardProps {
  title: string;
  children?: ReactNode;
  isEmpty?: boolean;
  actions?: boolean;
}

const InteractiveChartCard: React.FC<InteractiveChartCardProps> = ({
  title,
  children,
  isEmpty = false,
  actions = true,
}) => (
  <div className="bg-white rounded-lg border border-gray-200 p-4 hover:shadow-md transition-shadow">
    <div className="flex justify-between items-center mb-4">
      <h3 className="text-sm font-medium text-gray-700">{title}</h3>
      {actions && (
        <div className="flex items-center space-x-2">
          <button className="p-1 hover:bg-gray-100 rounded">
            <Download className="w-4 h-4 text-gray-400" />
          </button>
          <button className="p-1 hover:bg-gray-100 rounded">
            <Filter className="w-4 h-4 text-gray-400" />
          </button>
          <button className="p-1 hover:bg-gray-100 rounded">
            <MoreHorizontal className="w-4 h-4 text-gray-400" />
          </button>
        </div>
      )}
    </div>

    {isEmpty ? (
      <div className="h-48 flex flex-col items-center justify-center text-gray-400">
        <div className="text-sm mb-2">There was no data found for this date range</div>
        <div className="text-xs text-gray-300">Try adjusting your date range or filters</div>
      </div>
    ) : (
      <div className="h-48">{children}</div>
    )}
  </div>
);

// Sales Over Time Chart
const SalesOverTimeChart = () => (
  <InteractiveChartCard title="Total sales over time">
    <ResponsiveContainer width="100%" height="100%">
      <LineChart data={salesData}>
        <CartesianGrid strokeDasharray="3 3" stroke="#f3f4f6" />
        <XAxis 
          dataKey="date" 
          tick={{ fontSize: 12 }}
          stroke="#6b7280"
        />
        <YAxis 
          tick={{ fontSize: 12 }}
          stroke="#6b7280"
        />
        <Tooltip 
          contentStyle={{
            backgroundColor: '#fff',
            border: '1px solid #e5e7eb',
            borderRadius: '6px',
            fontSize: '12px'
          }}
        />
        <Line 
          type="monotone" 
          dataKey="value" 
          stroke="#3b82f6" 
          strokeWidth={2}
          dot={{ fill: '#3b82f6', strokeWidth: 2, r: 4 }}
          activeDot={{ r: 6, stroke: '#3b82f6', strokeWidth: 2 }}
        />
      </LineChart>
    </ResponsiveContainer>
  </InteractiveChartCard>
);

// Conversion Rate Breakdown Chart
const ConversionBreakdownChart = () => (
  <InteractiveChartCard title="Conversion rate breakdown">
    <ResponsiveContainer width="100%" height="100%">
      <PieChart>
        <Pie
          data={conversionData}
          cx="50%"
          cy="50%"
          innerRadius={60}
          outerRadius={80}
          paddingAngle={5}
          dataKey="value"
        >
          {conversionData.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={entry.color} />
          ))}
        </Pie>
        <Tooltip />
        <Legend />
      </PieChart>
    </ResponsiveContainer>
  </InteractiveChartCard>
);

// Device Breakdown Component
const DeviceBreakdownCard = () => (
  <div className="bg-white rounded-lg border border-gray-200 p-4">
    <div className="flex justify-between items-center mb-4">
      <h3 className="text-sm font-medium text-gray-700">Sessions by device type</h3>
      <MoreHorizontal className="w-4 h-4 text-gray-400 cursor-pointer" />
    </div>
    
    <div className="space-y-3">
      {deviceData.map((device, index) => (
        <div key={index} className="flex items-center justify-between py-2">
          <div className="flex items-center space-x-3">
            <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
            <span className="text-sm text-gray-700">{device.device}</span>
          </div>
          <div className="flex items-center space-x-3">
            <span className="text-sm text-gray-500">{device.sessions}</span>
            <span className="text-sm font-medium text-gray-900">{device.percentage}</span>
          </div>
        </div>
      ))}
    </div>
  </div>
);

// Enhanced Sales Breakdown Component
const EnhancedSalesBreakdown = () => {
  const [] = useState(new Set());
  
  const salesItems = [
    { label: 'Gross sales', value: 'IDR 0.00', color: 'text-blue-600', hasDetails: true },
    { label: 'Discounts', value: 'IDR 0.00', color: 'text-red-600', hasDetails: true },
    { label: 'Returns', value: 'IDR 0.00', color: 'text-gray-600', hasDetails: false },
    { label: 'Net sales', value: 'IDR 0.00', color: 'text-green-600', hasDetails: false },
    { label: 'Shipping charges', value: 'IDR 0.00', color: 'text-gray-600', hasDetails: true },
    { label: 'Return fees', value: 'IDR 0.00', color: 'text-gray-600', hasDetails: false },
    { label: 'Taxes', value: 'IDR 0.00', color: 'text-gray-600', hasDetails: true },
  ];

  return (
    <div className="bg-white rounded-lg border border-gray-200 p-4">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-sm font-medium text-gray-700">Total sales breakdown</h3>
        <MoreHorizontal className="w-4 h-4 text-gray-400 cursor-pointer" />
      </div>
      
      <div className="space-y-2">
        {salesItems.map((item, index) => (
          <div key={index} className="group">
            <div className="flex justify-between items-center py-2 hover:bg-gray-50 rounded px-2 -mx-2">
              <div className="flex items-center space-x-2">
                <div className={`w-2 h-2 rounded-full ${
                  item.color.includes('blue') ? 'bg-blue-500' :
                  item.color.includes('red') ? 'bg-red-500' :
                  item.color.includes('green') ? 'bg-green-500' :
                  'bg-gray-400'
                }`}></div>
                <span className={`text-sm ${item.color}`}>{item.label}</span>
              </div>
              <span className="text-sm text-gray-900 font-medium">{item.value}</span>
            </div>
          </div>
        ))}
        
        <div className="border-t pt-3 mt-3">
          <div className="flex justify-between items-center font-semibold bg-gray-50 p-2 rounded">
            <span className="text-sm text-gray-900">Total sales</span>
            <span className="text-sm text-gray-900">IDR 0.00</span>
          </div>
        </div>
      </div>
    </div>
  );
};

const InteractiveDataTable: React.FC<InteractiveDataTableProps> = ({
  title,
  columns,
  data,
  searchable = false,
}) => {
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [sortConfig, setSortConfig] = useState<SortConfig>({
    key: null,
    direction: 'asc',
  });

  const handleSort = (key: string) => {
    let direction: SortDirection = 'asc';
    if (sortConfig.key === key && sortConfig.direction === 'asc') {
      direction = 'desc';
    }
    setSortConfig({ key, direction });
  };

  const filteredData = data.filter(item =>
    Object.values(item).some(value =>
      value?.toString().toLowerCase().includes(searchTerm.toLowerCase())
    )
  );

  return (
    <div className="bg-white rounded-lg border border-gray-200 p-4">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-sm font-medium text-gray-700">{title}</h3>
        <div className="flex items-center space-x-2">
          {searchable && (
            <div className="relative">
              <Search className="w-4 h-4 text-gray-400 absolute left-2 top-1/2 transform -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-8 pr-3 py-1 text-xs border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          )}
          <MoreHorizontal className="w-4 h-4 text-gray-400 cursor-pointer" />
        </div>
      </div>

      {filteredData.length === 0 ? (
        <div className="h-32 flex items-center justify-center text-gray-400 text-sm">
          There was no data found for this date range
        </div>
      ) : (
        <div className="overflow-x-auto">
          <table className="w-full text-xs">
            <thead>
              <tr className="border-b">
                {columns.map((column, index) => (
                  <th
                    key={index}
                    className="text-left py-2 px-2 font-medium text-gray-700 cursor-pointer hover:bg-gray-50"
                    onClick={() => handleSort(column.key)}
                  >
                    {column.label}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {filteredData.map((row, index) => (
                <tr key={index} className="border-b hover:bg-gray-50">
                  {columns.map((column, colIndex) => (
                    <td key={colIndex} className="py-2 px-2 text-gray-600">
                      {row[column.key]}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

// Main Dashboard Component with Enhanced Features
export default function Page() {
  const [dateRange, setDateRange] = useState('Today');
  const [isLoading, setIsLoading] = useState(false);

  const cohortColumns = [
    { key: 'cohort', label: 'Cohort' },
    { key: 'customers', label: 'Customers' },
    { key: 'retention', label: 'Retention rate' },
    { key: 'month0', label: 'Month 0' },
    { key: 'month1', label: 'Month 1' },
    { key: 'month2', label: 'Month 2' },
    { key: 'month3', label: 'Month 3' },
    { key: 'month4', label: 'Month 4' },
  ];

  const cohortData = [
    { cohort: 'All cohorts', customers: 0, retention: '0.0%', month0: '0.0%', month1: '0.0%', month2: '0.0%', month3: '0.0%', month4: '0.0%' },
    { cohort: 'Jan 2024', customers: 0, retention: '0.0%', month0: '0.0%', month1: '0.0%', month2: '0.0%', month3: '0.0%', month4: '0.0%' },
    { cohort: 'Jun 2024', customers: 0, retention: '0.0%', month0: '0.0%', month1: '0.0%', month2: '0.0%', month3: '0.0%', month4: '0.0%' },
  ];

  return (
    <div className="bg-gray-50 p-6">
      {/* Enhanced Header */}
      <div className="mb-6">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
              <BarChart className="w-5 h-5 text-white" />
            </div>
            <h1 className="text-xl font-semibold text-gray-900">Analytics</h1>
          </div>
          <div className="flex items-center space-x-3">
            <select 
              value={dateRange}
              onChange={(e) => setDateRange(e.target.value)}
              className="px-3 py-2 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="Today">Today</option>
              <option value="Yesterday">Yesterday</option>
              <option value="Last 7 days">Last 7 days</option>
              <option value="Last 30 days">Last 30 days</option>
              <option value="Last 90 days">Last 90 days</option>
            </select>
            <button 
              className="px-4 py-2 text-sm text-gray-600 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
              onClick={() => setIsLoading(!isLoading)}
            >
              {isLoading ? 'Loading...' : 'Customize'}
            </button>
          </div>
        </div>
        
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4 text-sm">
            <div className="flex items-center space-x-2">
              <Calendar className="w-4 h-4 text-gray-500" />
              <span className="text-gray-600">{dateRange}</span>
              <span className="text-gray-400">Compare to:</span>
              <span className="text-gray-600">Jun 9, 2025</span>
            </div>
          </div>
          <div className="flex items-center space-x-2 text-xs text-gray-500">
            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
            <span>Real-time data</span>
          </div>
        </div>
      </div>

      {/* Enhanced Top Metrics Row */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        <EnhancedMetricCard 
          title="Gross sales"
          value="IDR 0"
          subtitle="Jun 10"
          changeType="neutral"
          trend={salesData}
        />
        <EnhancedMetricCard 
          title="Returning customer rate"
          value="0%"
          change="0%"
          changeType="neutral"
        />
        <EnhancedMetricCard 
          title="Orders fulfilled"
          value="0"
          change="0"
          changeType="neutral"
        />
        <EnhancedMetricCard 
          title="Orders"
          value="0"
          change="0"
          changeType="neutral"
        />
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
        {/* Sales Over Time Chart */}
        <div className="lg:col-span-2">
          <SalesOverTimeChart />
        </div>
        
        {/* Enhanced Sales breakdown */}
        <EnhancedSalesBreakdown />
      </div>

      {/* Charts Row */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
        <InteractiveChartCard title="Total sales by sales channel" isEmpty />
        <InteractiveChartCard title="Average order value over time" isEmpty>
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={salesData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#f3f4f6" />
              <XAxis dataKey="date" tick={{ fontSize: 12 }} />
              <YAxis tick={{ fontSize: 12 }} />
              <Tooltip />
              <Line type="monotone" dataKey="value" stroke="#10b981" strokeWidth={2} />
            </LineChart>
          </ResponsiveContainer>
        </InteractiveChartCard>
        <InteractiveChartCard title="Total sales by product" isEmpty />
      </div>

      {/* Conversion and Sessions Row */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
        <InteractiveChartCard title="Sessions over time" isEmpty>
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={salesData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#f3f4f6" />
              <XAxis dataKey="date" tick={{ fontSize: 12 }} />
              <YAxis tick={{ fontSize: 12 }} />
              <Tooltip />
              <Bar dataKey="value" fill="#8b5cf6" />
            </BarChart>
          </ResponsiveContainer>
        </InteractiveChartCard>
        <InteractiveChartCard title="Conversion rate over time" isEmpty />
        <ConversionBreakdownChart />
      </div>

      {/* Device and Location Row */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
        <DeviceBreakdownCard />
        <InteractiveChartCard title="Sessions by location" isEmpty />
        <InteractiveChartCard title="Total sales by social referrer" isEmpty />
      </div>

      {/* Enhanced Cohort Analysis */}
      <div className="mb-6">
        <InteractiveDataTable 
          title="Customer cohort analysis"
          columns={cohortColumns}
          data={cohortData}
          searchable={true}
        />
      </div>

      {/* Products and Sessions Row */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        <InteractiveChartCard title="Sessions by landing page" isEmpty />
        <div className="bg-white rounded-lg border border-gray-200 p-4">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-sm font-medium text-gray-700">Products by sell-through rate</h3>
            <div className="flex items-center space-x-2">
              <button className="text-xs text-blue-600 hover:text-blue-700">View all</button>
              <MoreHorizontal className="w-4 h-4 text-gray-400 cursor-pointer" />
            </div>
          </div>
          <div className="space-y-3">
            {[
              { name: 'The Ultimate Showboat - Bundle / Medium - None', rate: '0%', color: 'bg-red-100' },
              { name: 'The Multi-wrapped Snowboard - Medium / Black - der montagiert 4', rate: '0%', color: 'bg-yellow-100' },
              { name: 'The Ethernet or Print Snowboard - Default Title - None', rate: '0%', color: 'bg-blue-100' },
              { name: 'The Womens Sweatshirt - Default Title - None', rate: '0%', color: 'bg-green-100' }
            ].map((product, index) => (
              <div key={index} className="flex items-center justify-between p-3 hover:bg-gray-50 rounded-lg transition-colors">
                <div className="flex items-center space-x-3">
                  <div className={`w-3 h-3 rounded-full ${product.color}`}></div>
                  <span className="text-sm text-gray-700 flex-1">{product.name}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-sm font-medium text-gray-900">{product.rate}</span>
                  <MoreHorizontal className="w-4 h-4 text-gray-300" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Marketing and Referrer Row */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
        <InteractiveChartCard title="Sessions by social referrer" isEmpty />
        <InteractiveChartCard title="Total sales by referrer" isEmpty />
        <InteractiveChartCard title="Sales attributed to marketing" isEmpty />
      </div>

      {/* Bottom Analytics Row */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        <InteractiveChartCard title="Sessions by referrer" isEmpty />
        <InteractiveChartCard title="Total sales by POS location" isEmpty />
      </div>

      {/* POS Staff Sales with Enhanced Layout */}
      <div className="mb-6">
        <div className="bg-white rounded-lg border border-gray-200 p-4">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-sm font-medium text-gray-700">POS staff sales total</h3>
            <div className="flex items-center space-x-2">
              <button className="text-xs text-blue-600 hover:text-blue-700">Export</button>
              <MoreHorizontal className="w-4 h-4 text-gray-400 cursor-pointer" />
            </div>
          </div>
          <div className="h-32 flex items-center justify-center text-gray-400 text-sm bg-gray-50 rounded-lg">
            <div className="text-center">
              <div className="mb-2">There was no data found for this date range</div>
              <button className="text-xs text-blue-600 hover:text-blue-700">Configure POS settings</button>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="mt-8 pt-6 border-t border-gray-200">
        <div className="flex items-center justify-between text-xs text-gray-500">
          <div className="flex items-center space-x-4">
            <span>Last updated: Just now</span>
            <span>•</span>
            <button className="text-blue-600 hover:text-blue-700">Learn more about analytics</button>
          </div>
          <div className="flex items-center space-x-2">
            <span>Powered by Shopify Analytics</span>
          </div>
        </div>
      </div>
    </div>
  );
}
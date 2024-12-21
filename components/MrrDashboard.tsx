import React, { useState } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Megaphone, Calendar, Video, Users, DollarSign, TrendingUp, TrendingDown, Target, AlertCircle, Activity, UserPlus } from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, AreaChart, Area, BarChart as RechartsBarChart, Bar, Cell, ComposedChart } from 'recharts';
import { MetricCardProps, InsightCardProps, ChartProps, MarketingMetricsProps } from '@/types/types';

interface MonthlyData {
  month: string;
  mrr: number;
  momGrowthRate: number;
  cmgr?: number;
}

interface MonthlyDynamicsData {
  month: string;
  newMrr: number;
  reactivation: number;
  expansion: number;
  fxAdjustment: number;
  contraction: number;
  churn: number;
}

interface PurchaseFunnelData {
  stage: string;
  count: number;
  color: string;
}

interface ConversionMetricsData {
  title: string;
  current: number;
  previous: number;
  trend: 'up' | 'down';
  prefix?: string;
  suffix?: string;
}

interface SubscriptionData {
  name: string;
  users: number;
  revenue: number;
  transactions: number;
  avgTransactionValue: number;
  revenueShare: number;
  color: string;
}

interface CustomerMetricsData {
  month: string;
  total_users: number;
  trial_users: number;
  revenue: number;
  trial_to_paid_ratio: number;
  al_to_total_ra: number;
}

interface PackageRevenueData {
  month: string;
  eko_revenue: number;
  premium_revenue: number;
  simple_revenue: number;
  total_users: number;
  trial_users: number;
  trial_to_total_ratio: number;
}

interface LTVMetricsData {
  month: string;
  ltv: number;
  cac: number;
  ltv_cac_ratio: number;
  yearly_avg_cac: number;
  ad_spend: number;
}

interface CohortRevenueData {
  month: string;
  mrr: number;
  start_mrr: number;
  retention_1: number;
  retention_2: number;
  retention_3: number;
  retention_4: number;
  retention_5: number;
  retention_6: number;
  retention_7: number;
  retention_8: number;
  retention_9: number;
  retention_10: number;
  retention_11: number;
  retention_12: number;
}

interface CohortSubscriberData {
  month: string;
  subscribers: number;
  start_value: number;
  retention_1: number;
  retention_2: number;
  retention_3: number;
  retention_4: number;
  retention_5: number;
  retention_6: number;
  retention_7: number;
  retention_8: number;
  retention_9: number;
  retention_10: number;
  retention_11: number;
  retention_12: number;
}

const mockMonthlyData: MonthlyData[] = [
  { month: 'Nov-23', mrr: 109.85, momGrowthRate: 0.00, cmgr: 19.99 },
  { month: 'Dec-23', mrr: 239.70, momGrowthRate: 118.21, cmgr: 19.99 },
  { month: 'Jan-24', mrr: 189.75, momGrowthRate: -20.84, cmgr: 19.99 },
  { month: 'Feb-24', mrr: 189.75, momGrowthRate: 0.00, cmgr: 11.06 },
  { month: 'Mar-24', mrr: 267.13, momGrowthRate: 40.78, cmgr: 11.06 },
  { month: 'Apr-24', mrr: 259.90, momGrowthRate: -2.71, cmgr: 11.06 },
  { month: 'May-24', mrr: 199.93, momGrowthRate: -23.07, cmgr: -3.45 },
  { month: 'Jun-24', mrr: 169.93, momGrowthRate: -15.21, cmgr: -3.45 },
  { month: 'Jul-24', mrr: 179.92, momGrowthRate: 5.88, cmgr: -3.45 },
  { month: 'Aug-24', mrr: 119.93, momGrowthRate: -33.34, cmgr: -30.67 },
  { month: 'Sep-24', mrr: 119.93, momGrowthRate: 0.00, cmgr: -30.67 },
  { month: 'Oct-24', mrr: 39.96, momGrowthRate: -66.68, cmgr: -30.67 },
  { month: 'Nov-24', mrr: 39.96, momGrowthRate: 0.00, cmgr: -30.67 }
];

const mockMonthlyDynamicsData: MonthlyDynamicsData[] = [
  { month: 'Nov-23', newMrr: 219.70, reactivation: 0.00, expansion: 0.00, fxAdjustment: 0.00, contraction: 0.00, churn: -79.90 },
  { month: 'Dec-23', newMrr: 339.60, reactivation: 0.00, expansion: 0.00, fxAdjustment: 0.00, contraction: 0.00, churn: 0.00 },
  { month: 'Jan-24', newMrr: 59.90, reactivation: 0.00, expansion: 0.00, fxAdjustment: 0.00, contraction: 0.00, churn: -239.70 },
  { month: 'Feb-24', newMrr: 59.90, reactivation: 99.90, expansion: 0.00, fxAdjustment: 0.00, contraction: 0.00, churn: -239.70 },
  { month: 'Mar-24', newMrr: 389.00, reactivation: 0.00, expansion: 0.00, fxAdjustment: 0.00, contraction: -39.91, churn: -79.88 },
  { month: 'Apr-24', newMrr: 49.95, reactivation: 9.99, expansion: 0.00, fxAdjustment: 0.00, contraction: -109.10, churn: -29.97 },
  { month: 'May-24', newMrr: 39.96, reactivation: 0.00, expansion: 0.00, fxAdjustment: 0.00, contraction: 0.00, churn: -209.85 },
  { month: 'Jun-24', newMrr: 19.98, reactivation: 9.99, expansion: 0.00, fxAdjustment: 0.00, contraction: 0.00, churn: -59.97 },
  { month: 'Jul-24', newMrr: 19.98, reactivation: 9.99, expansion: 0.00, fxAdjustment: 0.00, contraction: 0.00, churn: -29.97 },
  { month: 'Aug-24', newMrr: 0.00, reactivation: 0.00, expansion: 0.00, fxAdjustment: 0.00, contraction: 0.00, churn: -19.98 },
  { month: 'Sep-24', newMrr: 0.00, reactivation: 0.00, expansion: 0.00, fxAdjustment: 0.00, contraction: 0.00, churn: -69.98 },
  { month: 'Oct-24', newMrr: 0.00, reactivation: 0.00, expansion: 0.00, fxAdjustment: 0.00, contraction: 0.00, churn: -79.97 },
  { month: 'Nov-24', newMrr: 0.00, reactivation: 0.00, expansion: 0.00, fxAdjustment: 0.00, contraction: 0.00, churn: 0.00 }
];

const mockMarketingData: MarketingMetricsProps['data'] = {
  roi: 285,
  spend: 25000,
  cpa: 125,
  conversions: 200
};

const mockPurchaseFunnelData: PurchaseFunnelData[] = [
  { stage: 'Total Reach', count: 179368, color: '#9333EA' },
  { stage: 'Page Views', count: 97876, color: '#A855F7' },
  { stage: 'Visitors', count: 11778, color: '#B575F7' },
  { stage: 'Registrations', count: 210, color: '#C495F7' },
  { stage: 'Paid Customers', count: 41, color: '#D4B5F7' }
];

const mockConversionMetricsData: ConversionMetricsData[] = [
  {
    title: 'Click-to-Signup Rate',
    current: 0.2,
    previous: 0.15,
    trend: 'up',
    suffix: '%'
  },
  {
    title: 'Cost per Reach',
    current: 0.002,
    previous: 0.003,
    trend: 'down',
    prefix: '$'
  },
  {
    title: 'Cost per Click',
    current: 0.15,
    previous: 0.18,
    trend: 'down',
    prefix: '$'
  }
];

const mockSubscriptionData: SubscriptionData[] = [
  { 
    name: 'Eko Package', 
    users: 14, 
    revenue: 429.53, 
    transactions: 43,
    avgTransactionValue: 9.99,
    revenueShare: 20.21,
    color: '#9333EA'
  },
  { 
    name: 'Premium Package', 
    users: 8, 
    revenue: 1236.61, 
    transactions: 25,
    avgTransactionValue: 49.46,
    revenueShare: 58.18,
    color: '#D946EF'
  },
  { 
    name: 'Simple Package', 
    users: 5, 
    revenue: 459.50, 
    transactions: 13,
    avgTransactionValue: 35.35,
    revenueShare: 21.62,
    color: '#A855F7'
  }
];

const packageRevenueData: PackageRevenueData[] = [
  { month: '2023-11', eko_revenue: 0.0, premium_revenue: 79.9, simple_revenue: 29.95, total_users: 3, trial_users: 0, trial_to_total_ratio: 0 },
  { month: '2023-12', eko_revenue: 0.0, premium_revenue: 209.75, simple_revenue: 29.95, total_users: 6, trial_users: 0, trial_to_total_ratio: 0 },
  { month: '2024-01', eko_revenue: 0.0, premium_revenue: 129.85, simple_revenue: 58.9, total_users: 5, trial_users: 0, trial_to_total_ratio: 0 },
  { month: '2024-02', eko_revenue: 0.0, premium_revenue: 99.9, simple_revenue: 89.85, total_users: 5, trial_users: 0, trial_to_total_ratio: 0 },
  { month: '2024-03', eko_revenue: 19.94, premium_revenue: 117.31, simple_revenue: 129.88, total_users: 21, trial_users: 13, trial_to_total_ratio: 61.9 },
  { month: '2024-04', eko_revenue: 59.94, premium_revenue: 119.98, simple_revenue: 79.98, total_users: 15, trial_users: 5, trial_to_total_ratio: 33.33 },
  { month: '2024-05', eko_revenue: 39.96, premium_revenue: 119.98, simple_revenue: 39.99, total_users: 10, trial_users: 3, trial_to_total_ratio: 30 },
  { month: '2024-06', eko_revenue: 49.95, premium_revenue: 119.98, simple_revenue: 0.0, total_users: 9, trial_users: 2, trial_to_total_ratio: 22.22 },
  { month: '2024-07', eko_revenue: 59.94, premium_revenue: 119.98, simple_revenue: 0.0, total_users: 10, trial_users: 2, trial_to_total_ratio: 20 },
  { month: '2024-08', eko_revenue: 59.94, premium_revenue: 59.99, simple_revenue: 0.0, total_users: 7, trial_users: 0, trial_to_total_ratio: 0 },
  { month: '2024-09', eko_revenue: 59.94, premium_revenue: 59.99, simple_revenue: 0.0, total_users: 7, trial_users: 0, trial_to_total_ratio: 0 },
  { month: '2024-10', eko_revenue: 39.96, premium_revenue: 0.0, simple_revenue: 0.0, total_users: 4, trial_users: 0, trial_to_total_ratio: 0 },
  { month: '2024-11', eko_revenue: 39.96, premium_revenue: 0.0, simple_revenue: 0.0, total_users: 4, trial_users: 0, trial_to_total_ratio: 0 }
];

const mockLTVData: LTVMetricsData[] = [
  { month: '23-11', ltv: 36.62, cac: 0.00, ltv_cac_ratio: 0.00, yearly_avg_cac: 6.33, ad_spend: 0.00 },
  { month: '23-12', ltv: 39.95, cac: 0.00, ltv_cac_ratio: 0.00, yearly_avg_cac: 6.33, ad_spend: 0.00 },
  { month: '24-01', ltv: 37.95, cac: 9.34, ltv_cac_ratio: 4.06, yearly_avg_cac: 6.33, ad_spend: 46.69 },
  { month: '24-02', ltv: 37.95, cac: 14.57, ltv_cac_ratio: 2.60, yearly_avg_cac: 6.33, ad_spend: 72.85 },
  { month: '24-03', ltv: 12.72, cac: 2.73, ltv_cac_ratio: 4.65, yearly_avg_cac: 6.33, ad_spend: 57.43 },
  { month: '24-04', ltv: 17.33, cac: 1.99, ltv_cac_ratio: 8.73, yearly_avg_cac: 6.33, ad_spend: 29.78 },
  { month: '24-05', ltv: 19.99, cac: 5.55, ltv_cac_ratio: 3.60, yearly_avg_cac: 6.33, ad_spend: 55.52 },
  { month: '24-06', ltv: 18.88, cac: 0.00, ltv_cac_ratio: 0.00, yearly_avg_cac: 6.33, ad_spend: 0.00 },
  { month: '24-07', ltv: 17.99, cac: 3.80, ltv_cac_ratio: 4.73, yearly_avg_cac: 6.33, ad_spend: 38.04 },
  { month: '24-08', ltv: 17.13, cac: 0.00, ltv_cac_ratio: 0.00, yearly_avg_cac: 6.33, ad_spend: 0.00 },
  { month: '24-09', ltv: 17.13, cac: 0.00, ltv_cac_ratio: 0.00, yearly_avg_cac: 6.33, ad_spend: 0.00 },
  { month: '24-10', ltv: 9.99, cac: 0.00, ltv_cac_ratio: 0.00, yearly_avg_cac: 6.33, ad_spend: 0.00 },
  { month: '24-11', ltv: 9.99, cac: 0.00, ltv_cac_ratio: 0.00, yearly_avg_cac: 6.33, ad_spend: 0.00 }
];

const CustomerMetrics: React.FC<{ data: CustomerMetricsData[] }> = ({ data }) => {
  // Calculate key metrics
  const avgTrialConversion = data.reduce((acc, curr) => acc + curr.trial_to_paid_ratio, 0) / data.filter(d => d.trial_to_paid_ratio > 0).length || 0;
  const currentMonth = data[data.length - 1];
  const previousMonth = data[data.length - 2];
  const revenueChange = ((currentMonth.revenue - previousMonth.revenue) / previousMonth.revenue) * 100;
  const userChange = ((currentMonth.total_users - previousMonth.total_users) / previousMonth.total_users) * 100;
  
  // Format dates to be more concise
  const formattedData = packageRevenueData.map(item => ({
    ...item,
    month: item.month.replace('2023-', '2023-').replace('2024-', '24-')
  }));

  // State for chart filters
  const [userFilters, setUserFilters] = useState({
    trial_users: true,
    paid_users: true
  });

  const [packageFilters, setPackageFilters] = useState({
    eko: true,
    premium: true,
    simple: true
  });

  // Toggle filters
  const toggleUserFilter = (key: keyof typeof userFilters) => {
    setUserFilters(prev => ({ ...prev, [key]: !prev[key] }));
  };

  const togglePackageFilter = (key: keyof typeof packageFilters) => {
    setPackageFilters(prev => ({ ...prev, [key]: !prev[key] }));
  };
  
  return (
    <div className="space-y-8">
      {/* Title Section */}
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-semibold text-gray-900">Customer Growth & Trial Metrics</h2>
      </div>
        {/* Metrics Cards */}
        <div className="grid grid-cols-4 gap-4">
          {/* First Row - User Focused Metrics */}
          <Card className="p-4 bg-gradient-to-br from-indigo-50 to-white border-indigo-100">
            <div className="space-y-1">
              <p className="text-sm text-indigo-600 font-medium">Total Unique Customers</p>
              <p className="text-2xl font-semibold text-indigo-900">41</p>
              <div className="flex items-center space-x-1">
                <span className={`text-sm font-medium text-emerald-600`}>
                  ↑ Overall
                </span>
                <span className="text-xs text-gray-500">lifetime</span>
              </div>
            </div>
          </Card>

          <Card className="p-4 bg-gradient-to-br from-violet-50 to-white border-violet-100">
            <div className="space-y-1">
              <p className="text-sm text-violet-600 font-medium">Trial Users</p>
              <p className="text-2xl font-semibold text-violet-900">26</p>
              <p className="text-xs text-gray-500">total trial users</p>
            </div>
          </Card>

          <Card className="p-4 bg-gradient-to-br from-purple-50 to-white border-purple-100">
            <div className="space-y-1">
              <p className="text-sm text-purple-600 font-medium">Trial to Paid Conversion</p>
              <p className="text-2xl font-semibold text-purple-900">19.51%</p>
              <p className="text-xs text-gray-500">conversion rate</p>
            </div>
          </Card>

          <Card className="p-4 bg-gradient-to-br from-fuchsia-50 to-white border-fuchsia-100">
            <div className="space-y-1">
              <p className="text-sm text-fuchsia-600 font-medium">Average Days to Convert</p>
              <p className="text-2xl font-semibold text-fuchsia-900">97.88</p>
              <p className="text-xs text-gray-500">days</p>
            </div>
          </Card>

          {/* Second Row - Performance Metrics */}
          <Card className="p-4 bg-gradient-to-br from-cyan-50 to-white border-cyan-100">
            <div className="space-y-1">
              <p className="text-sm text-cyan-600 font-medium">Avg Trial Usage</p>
              <p className="text-2xl font-semibold text-cyan-900">1.88</p>
              <p className="text-xs text-gray-500">before conversion</p>
            </div>
          </Card>

          <Card className="p-4 bg-gradient-to-br from-teal-50 to-white border-teal-100">
            <div className="space-y-1">
              <p className="text-sm text-teal-600 font-medium">Revenue per Convert</p>
              <p className="text-2xl font-semibold text-teal-900">${265.70}</p>
              <p className="text-xs text-gray-500">average</p>
            </div>
          </Card>

          <Card className="p-4 bg-gradient-to-br from-emerald-50 to-white border-emerald-100">
            <div className="space-y-1">
              <p className="text-sm text-emerald-600 font-medium">Monthly Revenue</p>
              <p className="text-2xl font-semibold text-emerald-900">
                ${(formattedData[formattedData.length - 1].eko_revenue + 
                   formattedData[formattedData.length - 1].premium_revenue + 
                   formattedData[formattedData.length - 1].simple_revenue).toFixed(2)}
              </p>
              <div className="flex items-center space-x-1">
                <span className={`text-sm font-medium ${revenueChange >= 0 ? 'text-emerald-600' : 'text-rose-600'}`}>
                  {revenueChange >= 0 ? '↑' : '↓'} {Math.abs(revenueChange).toFixed(1)}%
                </span>
                <span className="text-xs text-gray-500">vs last month</span>
              </div>
            </div>
          </Card>

          <Card className="p-4 bg-gradient-to-br from-sky-50 to-white border-sky-100">
            <div className="space-y-1">
              <p className="text-sm text-sky-600 font-medium">Trial to Total Ratio</p>
              <p className="text-2xl font-semibold text-sky-900">{formattedData[formattedData.length - 1].trial_to_total_ratio}%</p>
              <p className="text-xs text-gray-500">current month</p>
            </div>
          </Card>
        </div>
      {/* Charts and Metrics Grid */}
      <div className="space-y-8">
        {/* Charts Row */}
        <div className="grid grid-cols-2 gap-6">
          {/* Monthly User Distribution */}
          <Card className="p-6">
            <CardHeader className="px-0 pt-0">
              <div className="flex justify-between items-center">
                <CardTitle>Monthly User Distribution</CardTitle>
                <div className="flex gap-2">
                  <button
                    onClick={() => toggleUserFilter('trial_users')}
                    className={`px-3 py-1.5 text-xs font-medium rounded-md transition-all ${
                      userFilters.trial_users
                        ? 'bg-indigo-100 text-indigo-700'
                        : 'bg-gray-100 text-gray-600'
                    }`}
                  >
                    Trial Users
                  </button>
                  <button
                    onClick={() => toggleUserFilter('paid_users')}
                    className={`px-3 py-1.5 text-xs font-medium rounded-md transition-all ${
                      userFilters.paid_users
                        ? 'bg-indigo-100 text-indigo-700'
                        : 'bg-gray-100 text-gray-600'
                    }`}
                  >
                    Paid Users
                  </button>
                </div>
              </div>
            </CardHeader>
            <CardContent className="p-0">
              <div className="h-[300px]">
                <ResponsiveContainer width="100%" height="100%">
                  <RechartsBarChart data={formattedData} margin={{ top: 20, right: 30, left: 20, bottom: 20 }}>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#E0E0E0" />
                    <XAxis
                      dataKey="month"
                      angle={-45}
                      textAnchor="end"
                      height={60}
                      tick={{ fontSize: 12, fill: '#666' }}
                      tickMargin={20}
                      axisLine={{ stroke: '#E0E0E0' }}
                    />
                    <YAxis
                      tick={{ fontSize: 12, fill: '#666' }}
                      axisLine={{ stroke: '#E0E0E0' }}
                      label={{
                        value: 'Number of Users',
                        angle: -90,
                        position: 'insideLeft',
                        style: { textAnchor: 'middle', fill: '#666', fontSize: 12 }
                      }}
                    />
                    <Tooltip
                      formatter={(value: any, name: string) => [value, name === 'trial_users' ? 'Trial Users' : 'Paid Users']}
                      contentStyle={{
                        fontSize: 12,
                        backgroundColor: 'rgba(255, 255, 255, 0.96)',
                        border: '1px solid #E0E0E0',
                        borderRadius: '4px',
                        boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
                      }}
                    />
                    {userFilters.trial_users && (
                      <Bar
                        dataKey="trial_users"
                        name="Trial Users"
                        stackId="a"
                        fill="#4F46E5"
                        opacity={0.2}
                        radius={[4, 4, 0, 0]}
                      />
                    )}
                    {userFilters.paid_users && (
                      <Bar
                        dataKey={(data) => data.total_users - data.trial_users}
                        name="Paid Users"
                        stackId="a"
                        fill="#4F46E5"
                        radius={[4, 4, 0, 0]}
                      />
                    )}
                  </RechartsBarChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>

          {/* Monthly Package Revenue */}
          <Card className="p-6">
            <CardHeader className="px-0 pt-0">
              <div className="flex justify-between items-center">
                <CardTitle>Monthly Package Revenue</CardTitle>
                <div className="flex gap-2">
                  <button
                    onClick={() => togglePackageFilter('eko')}
                    className={`px-3 py-1.5 text-xs font-medium rounded-md transition-all ${
                      packageFilters.eko
                        ? 'bg-violet-100 text-violet-700'
                        : 'bg-gray-100 text-gray-600'
                    }`}
                  >
                    Eko Package
                  </button>
                  <button
                    onClick={() => togglePackageFilter('premium')}
                    className={`px-3 py-1.5 text-xs font-medium rounded-md transition-all ${
                      packageFilters.premium
                        ? 'bg-purple-100 text-purple-700'
                        : 'bg-gray-100 text-gray-600'
                    }`}
                  >
                    Premium Package
                  </button>
                  <button
                    onClick={() => togglePackageFilter('simple')}
                    className={`px-3 py-1.5 text-xs font-medium rounded-md transition-all ${
                      packageFilters.simple
                        ? 'bg-fuchsia-100 text-fuchsia-700'
                        : 'bg-gray-100 text-gray-600'
                    }`}
                  >
                    Simple Package
                  </button>
                </div>
              </div>
            </CardHeader>
            <CardContent className="p-0">
              <div className="h-[300px]">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={formattedData} margin={{ top: 20, right: 30, left: 20, bottom: 20 }}>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#E0E0E0" />
                    <XAxis
                      dataKey="month"
                      angle={-45}
                      textAnchor="end"
                      height={60}
                      tick={{ fontSize: 12, fill: '#666' }}
                      tickMargin={20}
                      axisLine={{ stroke: '#E0E0E0' }}
                    />
                    <YAxis
                      tick={{ fontSize: 12, fill: '#666' }}
                      tickFormatter={(value) => `$${value}`}
                      axisLine={{ stroke: '#E0E0E0' }}
                      label={{
                        value: 'Revenue ($)',
                        angle: -90,
                        position: 'insideLeft',
                        style: { textAnchor: 'middle', fill: '#666', fontSize: 12 }
                      }}
                    />
                    <Tooltip
                      formatter={(value: any, name: string) => [
                        `$${Number(value).toFixed(2)}`,
                        name.split('_')[0].charAt(0).toUpperCase() + name.split('_')[0].slice(1) + ' Package'
                      ]}
                      contentStyle={{
                        fontSize: 12,
                        backgroundColor: 'rgba(255, 255, 255, 0.96)',
                        border: '1px solid #E0E0E0',
                        borderRadius: '4px',
                        boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
                      }}
                    />
                    {packageFilters.eko && (
                      <Line
                        type="monotone"
                        dataKey="eko_revenue"
                        name="eko_revenue"
                        stroke="#8B5CF6"
                        strokeWidth={2}
                        dot={{ fill: '#8B5CF6', r: 4 }}
                      />
                    )}
                    {packageFilters.premium && (
                      <Line
                        type="monotone"
                        dataKey="premium_revenue"
                        name="premium_revenue"
                        stroke="#D946EF"
                        strokeWidth={2}
                        dot={{ fill: '#D946EF', r: 4 }}
                      />
                    )}
                    {packageFilters.simple && (
                      <Line
                        type="monotone"
                        dataKey="simple_revenue"
                        name="simple_revenue"
                        stroke="#EC4899"
                        strokeWidth={2}
                        dot={{ fill: '#EC4899', r: 4 }}
                      />
                    )}
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>
        </div>


      </div>
    </div>
  );
};

const MetricCard: React.FC<MetricCardProps> = ({ title, value, trend, change, icon: Icon }) => {
  const isPositive = trend === 'up';
  return (
    <Card className="p-6 space-y-2">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <div className="p-2 bg-purple-100 rounded-lg">
            <Icon className="w-5 h-5 text-purple-600" />
          </div>
          <span className="text-sm font-medium text-gray-500">{title}</span>
        </div>
      </div>
      <div className="space-y-1">
        <h3 className="text-2xl font-semibold text-gray-900">{value}</h3>
        <div className="flex items-center space-x-1">
          {isPositive ? (
            <TrendingUp className="w-4 h-4 text-green-500" />
          ) : (
            <TrendingDown className="w-4 h-4 text-red-500" />
          )}
          <span className={`text-sm font-medium ${isPositive ? 'text-green-500' : 'text-red-500'}`}>
            {change}
          </span>
        </div>
      </div>
    </Card>
  );
};

const MRRAndGrowthChart: React.FC<ChartProps> = ({ data }) => {
  const [filters, setFilters] = useState({
    mrr: true,
    momGrowthRate: true,
    cmgr: false
  });

  const toggleFilter = (key: keyof typeof filters) => {
    setFilters(prev => ({ ...prev, [key]: !prev[key] }));
  };

  const filterConfig = [
    { key: 'mrr', label: 'MRR', color: '#663399' },
    { key: 'momGrowthRate', label: 'MoM Growth Rate (%)', color: '#DC143C' },
    { key: 'cmgr', label: 'CMGR (%)', color: '#2E8B57' }
  ];

  const renderCustomLegend = () => (
    <div className="flex flex-wrap justify-center gap-2 mt-4">
      {filterConfig.map(({ key, label, color }) => (
        <button
          key={key}
          onClick={() => toggleFilter(key as keyof typeof filters)}
          className={`px-4 py-1.5 rounded-md text-sm font-medium transition-all ${
            filters[key as keyof typeof filters]
              ? 'text-white shadow-sm'
              : 'text-gray-600 bg-gray-100'
          }`}
          style={{
            backgroundColor: filters[key as keyof typeof filters] ? color : undefined,
            borderWidth: '1px',
            borderColor: color,
          }}
        >
          {label}
        </button>
      ))}
    </div>
  );

  return (
    <Card className="p-6">
      <CardHeader className="px-0 pt-0">
        <CardTitle>MRR and Growth Metrics Over Time</CardTitle>
      </CardHeader>
      <CardContent className="p-0">
        <div className="h-[400px]">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart 
              data={data} 
              margin={{ top: 20, right: 30, left: 20, bottom: 20 }}
            >
              <CartesianGrid 
                strokeDasharray="3 3" 
                stroke="#E0E0E0"
                vertical={false}
              />
              <XAxis 
                dataKey="month" 
                angle={-45} 
                textAnchor="end" 
                height={60}
                tick={{ fontSize: 12, fill: '#666' }}
                tickMargin={20}
                axisLine={{ stroke: '#E0E0E0' }}
              />
              <YAxis 
                yAxisId="left"
                tick={{ fontSize: 12, fill: '#666' }}
                tickFormatter={(value) => `$${value}`}
                axisLine={{ stroke: '#E0E0E0' }}
              />
              <YAxis 
                yAxisId="right" 
                orientation="right"
                tick={{ fontSize: 12, fill: '#666' }}
                tickFormatter={(value) => `${value}%`}
                axisLine={{ stroke: '#E0E0E0' }}
              />
              <Tooltip 
                formatter={(value: number, name: string) => [
                  name === 'mrr' ? `$${value}` : `${value}%`,
                  name === 'mrr' ? 'MRR' : name === 'momGrowthRate' ? 'MoM Growth Rate' : 'CMGR'
                ]}
                labelStyle={{ fontSize: 12, fontWeight: 500 }}
                contentStyle={{ 
                  fontSize: 12,
                  backgroundColor: 'rgba(255, 255, 255, 0.96)',
                  border: '1px solid #E0E0E0',
                  borderRadius: '4px',
                  boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
                }}
              />
              {filters.mrr && (
                <Line 
                  yAxisId="left"
                  type="monotone" 
                  dataKey="mrr" 
                  name="MRR"
                  stroke="#663399" 
                  strokeWidth={2}
                  dot={{ fill: '#663399', r: 4 }}
                />
              )}
              {filters.momGrowthRate && (
                <Line 
                  yAxisId="right"
                  type="monotone" 
                  dataKey="momGrowthRate" 
                  name="MoM Growth Rate (%)"
                  stroke="#DC143C" 
                  strokeWidth={2}
                  dot={{ fill: '#DC143C', r: 4 }}
                />
              )}
              {filters.cmgr && (
                <Line 
                  yAxisId="right"
                  type="monotone" 
                  dataKey="cmgr" 
                  name="CMGR (%)"
                  stroke="#2E8B57" 
                  strokeWidth={2}
                  dot={{ fill: '#2E8B57', r: 4 }}
                  strokeDasharray="5 5"
                />
              )}
            </LineChart>
          </ResponsiveContainer>
        </div>
        {renderCustomLegend()}
      </CardContent>
    </Card>
  );
};

const MRRDynamics: React.FC<ChartProps> = ({ data }) => {
  const [filters, setFilters] = useState({
    newMrr: true,
    reactivation: true,
    expansion: true,
    fxAdjustment: true,
    contraction: true,
    churn: true
  });

  const toggleFilter = (key: keyof typeof filters) => {
    setFilters(prev => ({ ...prev, [key]: !prev[key] }));
  };

  const filterConfig = [
    { key: 'newMrr', label: 'New MRR', color: '#663399' },
    { key: 'reactivation', label: 'Reactivation', color: '#4B0082' },
    { key: 'expansion', label: 'Expansion', color: '#800080' },
    { key: 'fxAdjustment', label: 'FX Adjustment', color: '#9370DB' },
    { key: 'contraction', label: 'Contraction', color: '#D87093' },
    { key: 'churn', label: 'Churn', color: '#DC143C' }
  ];

  const renderCustomLegend = () => (
    <div className="flex flex-wrap justify-center gap-2 mt-4">
      {filterConfig.map(({ key, label, color }) => (
        <button
          key={key}
          onClick={() => toggleFilter(key as keyof typeof filters)}
          className={`px-4 py-1.5 rounded-md text-sm font-medium transition-all ${
            filters[key as keyof typeof filters]
              ? 'text-white shadow-sm'
              : 'text-gray-600 bg-gray-100'
          }`}
          style={{
            backgroundColor: filters[key as keyof typeof filters] ? color : undefined,
            borderWidth: '1px',
            borderColor: color,
          }}
        >
          {label}
        </button>
      ))}
    </div>
  );

  return (
    <Card className="p-6">
      <CardHeader className="px-0 pt-0">
        <CardTitle>MRR Dynamics</CardTitle>
      </CardHeader>
      <CardContent className="p-0">
        <div className="h-[400px]">
          <ResponsiveContainer width="100%" height="100%">
            <RechartsBarChart 
              data={mockMonthlyDynamicsData}
              margin={{ top: 20, right: 30, left: 20, bottom: 20 }}
              barGap={0}
              barCategoryGap={8}
            >
              <CartesianGrid 
                strokeDasharray="3 3" 
                stroke="#E0E0E0" 
                vertical={false}
              />
              <XAxis 
                dataKey="month" 
                angle={-45} 
                textAnchor="end" 
                height={60}
                interval={0}
                tick={{ fontSize: 12, fill: '#666' }}
                tickMargin={20}
                axisLine={{ stroke: '#E0E0E0' }}
              />
              <YAxis 
                label={{ 
                  value: 'Amount ($)', 
                  angle: -90, 
                  position: 'insideLeft',
                  style: { textAnchor: 'middle', fill: '#666', fontSize: 12 }
                }}
                domain={[-300, 400]}
                tick={{ fontSize: 12, fill: '#666' }}
                tickFormatter={(value) => `$${value}`}
                axisLine={{ stroke: '#E0E0E0' }}
              />
              <Tooltip 
                formatter={(value: number) => [`$${value.toFixed(2)}`, '']}
                labelStyle={{ fontSize: 12, fontWeight: 500 }}
                contentStyle={{ 
                  fontSize: 12,
                  backgroundColor: 'rgba(255, 255, 255, 0.96)',
                  border: '1px solid #E0E0E0',
                  borderRadius: '4px',
                  boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
                }}
              />
              {filterConfig.map(({ key, color }) => 
                filters[key as keyof typeof filters] && (
                  <Bar 
                    key={key}
                    dataKey={key}
                    name={key}
                    stackId="a"
                    fill={color}
                  />
                )
              )}
            </RechartsBarChart>
          </ResponsiveContainer>
        </div>
        {renderCustomLegend()}
      </CardContent>
    </Card>
  );
};

const SubscriptionDistribution: React.FC<{ data: SubscriptionData[] }> = ({ data }) => {
  const totalUsers = data.reduce((acc, curr) => acc + curr.users, 0);
  const totalRevenue = data.reduce((acc, curr) => acc + curr.revenue, 0);
  const totalTransactions = data.reduce((acc, curr) => acc + curr.transactions, 0);

  return (
    <Card className="p-6 mb-8">
      <CardHeader className="px-0 pt-0 pb-6">
        <div className="flex justify-between items-center">
          <CardTitle className="text-xl">Package Distribution & Metrics</CardTitle>
          <div className="text-sm text-gray-500">
            Total Revenue: <span className="font-medium">${totalRevenue.toFixed(2)}</span>
          </div>
        </div>
      </CardHeader>
      <CardContent className="p-0 space-y-8">
        {/* Package Overview Cards */}
        <div className="grid grid-cols-3 gap-6">
          {data.map((subscription) => (
            <div
              key={subscription.name}
              className="p-4 rounded-lg bg-white border border-gray-100 shadow-sm"
              style={{ 
                borderLeft: `4px solid ${subscription.color}`,
                backgroundColor: `${subscription.color}08`
              }}
            >
              <h4 className="text-base font-medium text-gray-900 mb-3">
                {subscription.name}
              </h4>
              <div className="grid grid-cols-2 gap-3">
                <div className="space-y-1">
                  <p className="text-xs text-gray-500">Users</p>
                  <p className="text-sm font-medium text-gray-900">
                    {subscription.users}
                    <span className="text-xs ml-1 text-gray-500">
                      ({((subscription.users / totalUsers) * 100).toFixed(1)}%)
                    </span>
                  </p>
                </div>
                <div className="space-y-1">
                  <p className="text-xs text-gray-500">Revenue</p>
                  <p className="text-sm font-medium text-gray-900">
                    ${subscription.revenue.toFixed(2)}
                  </p>
                </div>
                <div className="space-y-1">
                  <p className="text-xs text-gray-500">Transactions</p>
                  <p className="text-sm font-medium text-gray-900">
                    {subscription.transactions}
                    <span className="text-xs ml-1 text-gray-500">
                      ({((subscription.transactions / totalTransactions) * 100).toFixed(1)}%)
                    </span>
                  </p>
                </div>
                <div className="space-y-1">
                  <p className="text-xs text-gray-500">Avg. Value</p>
                  <p className="text-sm font-medium text-gray-900">
                    ${subscription.avgTransactionValue.toFixed(2)}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-2 gap-8 pb-4">
          {/* Revenue Share Distribution */}
          <div className="h-[280px]">
            <p className="text-sm font-medium text-gray-900 mb-4">Revenue Share Distribution</p>
            <ResponsiveContainer width="100%" height="100%">
              <RechartsBarChart
                data={data}
                layout="vertical"
                margin={{ top: 5, right: 30, left: 40, bottom: 5 }}
                barSize={24}
              >
                <CartesianGrid strokeDasharray="3 3" horizontal={true} vertical={false} stroke="#E5E7EB" />
                <XAxis 
                  type="number" 
                  tickFormatter={(value) => `${value.toFixed(1)}%`}
                  domain={[0, 100]}
                  tick={{ fontSize: 12 }}
                  axisLine={{ stroke: '#E5E7EB' }}
                />
                <YAxis 
                  type="category" 
                  dataKey="name" 
                  tick={{ fontSize: 12 }}
                  axisLine={{ stroke: '#E5E7EB' }}
                  width={120}
                />
                <Tooltip
                  formatter={(value: number) => [`${value.toFixed(1)}%`, 'Revenue Share']}
                  contentStyle={{
                    fontSize: 12,
                    backgroundColor: 'rgba(255, 255, 255, 0.96)',
                    border: '1px solid #E5E7EB',
                    borderRadius: '4px',
                    boxShadow: '0 2px 4px rgba(0,0,0,0.05)'
                  }}
                />
                <Bar dataKey="revenueShare" name="Revenue Share" radius={[0, 4, 4, 0]}>
                  {data.map((entry) => (
                    <Cell key={entry.name} fill={entry.color} fillOpacity={0.9} />
                  ))}
                </Bar>
              </RechartsBarChart>
            </ResponsiveContainer>
          </div>

          {/* Transaction Value Distribution */}
          <div className="h-[280px]">
            <p className="text-sm font-medium text-gray-900 mb-4">Transaction Distribution</p>
            <ResponsiveContainer width="100%" height="100%">
              <RechartsBarChart
                data={data}
                layout="vertical"
                margin={{ top: 5, right: 30, left: 40, bottom: 5 }}
                barSize={24}
              >
                <CartesianGrid strokeDasharray="3 3" horizontal={true} vertical={false} stroke="#E5E7EB" />
                <XAxis 
                  type="number"
                  tick={{ fontSize: 12 }}
                  axisLine={{ stroke: '#E5E7EB' }}
                />
                <YAxis 
                  type="category" 
                  dataKey="name" 
                  tick={{ fontSize: 12 }}
                  axisLine={{ stroke: '#E5E7EB' }}
                  width={120}
                />
                <Tooltip
                  formatter={(value: number) => [value, 'Transactions']}
                  contentStyle={{
                    fontSize: 12,
                    backgroundColor: 'rgba(255, 255, 255, 0.96)',
                    border: '1px solid #E5E7EB',
                    borderRadius: '4px',
                    boxShadow: '0 2px 4px rgba(0,0,0,0.05)'
                  }}
                />
                <Bar dataKey="transactions" name="Transactions" radius={[0, 4, 4, 0]}>
                  {data.map((entry) => (
                    <Cell key={entry.name} fill={entry.color} fillOpacity={0.9} />
                  ))}
                </Bar>
              </RechartsBarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

const InsightCard: React.FC<InsightCardProps> = ({ title, description, icon: Icon, category }) => (
  <Card className="p-6">
    <div className="flex items-start space-x-4">
      <div className="p-2 bg-purple-100 rounded-lg">
        <Icon className="w-6 h-6 text-purple-600" />
      </div>
      <div>
        <div className="flex items-center space-x-2">
          <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
          <span className="px-2 py-1 text-xs font-medium text-purple-600 bg-purple-100 rounded-full">
            {category}
          </span>
        </div>
        <p className="mt-1 text-sm text-gray-600">{description}</p>
      </div>
    </div>
  </Card>
);

const CashMetrics: React.FC<ChartProps> = ({ data }) => (
  <Card>
    <CardHeader>
      <CardTitle>Cash Balance & Burn Rate</CardTitle>
    </CardHeader>
    <CardContent>
      <div className="h-64">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" stroke="#E0E0E0" />
            <XAxis dataKey="month" />
            <YAxis yAxisId="left" />
            <YAxis yAxisId="right" orientation="right" />
            <Tooltip />
            <Legend />
            <Line 
              yAxisId="left"
              type="monotone" 
              dataKey="balance" 
              name="Cash Balance" 
              stroke="#663399" 
              strokeWidth={2}
            />
            <Line 
              yAxisId="right"
              type="monotone" 
              dataKey="burn" 
              name="Burn Rate" 
              stroke="#DC143C" 
              strokeWidth={2}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </CardContent>
  </Card>
);


const SummaryReport: React.FC = () => (
  <Card className="p-6">
    <h3 className="text-lg font-semibold mb-4">Executive Summary</h3>
    <div className="space-y-6">
      <div>
        <h4 className="text-md font-semibold text-gray-900 mb-2">Financial Performance</h4>
        <p className="text-sm text-gray-600">
          TradeWizz demonstrates strong financial health with MRR reaching $72,000 (+10.2% MoM) and ARR of $864,000. 
          Our controlled growth strategy has maintained efficient capital utilization with a decreasing burn rate of $33,000/month.
        </p>
      </div>
      <div>
        <h4 className="text-md font-semibold text-gray-900 mb-2">Growth & Efficiency</h4>
        <p className="text-sm text-gray-600">
          Customer acquisition efficiency has improved significantly, with CAC decreasing by 16.67% while maintaining a healthy LTV:CAC ratio of 12.5. 
          Trial to paid conversion rate stands at 25%, indicating strong product-market fit.
        </p>
      </div>
      <div>
        <h4 className="text-md font-semibold text-gray-900 mb-2">Strategic Outlook</h4>
        <p className="text-sm text-gray-600">
          With a robust NRR of 115% and low churn rate of 2.4%, TradeWizz is well-positioned for scaling. Instagram marketing channel shows promising ROI of 285%, 
          suggesting readiness for expanded marketing initiatives.
        </p>
      </div>
    </div>
  </Card>
);

const EvaluationCard: React.FC = () => (
  <Card className="p-6">
    <h3 className="text-lg font-semibold mb-4">Performance Evaluation</h3>
    <div className="space-y-4">
      <div className="flex items-center gap-2">
        <div className="w-2 h-2 rounded-full bg-green-500"></div>
        <p className="text-sm text-gray-600">Strong unit economics with improving efficiency metrics</p>
      </div>
      <div className="flex items-center gap-2">
        <div className="w-2 h-2 rounded-full bg-green-500"></div>
        <p className="text-sm text-gray-600">Successful validation of marketing channels with positive ROI</p>
      </div>
      <div className="flex items-center gap-2">
        <div className="w-2 h-2 rounded-full bg-yellow-500"></div>
        <p className="text-sm text-gray-600">Cash runway requires attention for upcoming scaling plans</p>
      </div>
      <div className="flex items-center gap-2">
        <div className="w-2 h-2 rounded-full bg-green-500"></div>
        <p className="text-sm text-gray-600">Customer retention and expansion metrics exceed industry standards</p>
      </div>
    </div>
  </Card>
);

const PurchaseFunnel: React.FC<{ data: PurchaseFunnelData[] }> = ({ data }) => {
  const formatNumber = (num: number) => {
    return new Intl.NumberFormat().format(num);
  };

  const campaignMetrics = [
    {
      title: 'Ad Campaigns & Coupons',
      value: '12',
      icon: Megaphone,
      description: 'Targeted campaigns and discount offers',
      gradient: 'from-violet-50 to-white',
      iconBg: 'bg-violet-100',
      iconColor: 'text-violet-600'
    },
    {
      title: 'Digital Marketing Days',
      value: '82',
      icon: Calendar,
      description: 'Days of active marketing',
      gradient: 'from-fuchsia-50 to-white',
      iconBg: 'bg-fuchsia-100',
      iconColor: 'text-fuchsia-600'
    },
    {
      title: 'Webinars Delivered',
      value: '6',
      icon: Video,
      description: 'Educational sessions',
      gradient: 'from-purple-50 to-white',
      iconBg: 'bg-purple-100',
      iconColor: 'text-purple-600'
    },
    {
      title: 'E-commerce Partnerships',
      value: '5',
      icon: Users,
      description: 'Advisor collaborations',
      gradient: 'from-pink-50 to-white',
      iconBg: 'bg-pink-100',
      iconColor: 'text-pink-600'
    }
  ];

  return (
    <div className="grid grid-cols-2 gap-8">
      {/* Funnel Chart */}
      <Card className="p-6">
        <CardHeader className="px-0 pt-0">
          <div className="flex justify-between items-center mb-6">
            <div>
              <CardTitle className="text-xl mb-1">Conversion Funnel</CardTitle>
              <p className="text-sm text-gray-500">Overall conversion journey</p>
            </div>
            <span className="text-sm font-medium text-purple-600">Total Spend: $300.31</span>
          </div>
        </CardHeader>
        <CardContent className="p-0">
          <div className="space-y-4 mb-8">
            {data.map((item, index) => {
              const scaleWidth = 1 - (index * 0.12);
              const heightPx = 64;
              
              return (
                <div 
                  key={item.stage} 
                  className="relative mx-auto"
                  style={{
                    width: `${scaleWidth * 100}%`,
                    height: `${heightPx}px`,
                    marginTop: index === 0 ? '0' : '-8px'
                  }}
                >
                  <div
                    className="absolute inset-0 flex items-center justify-between px-6"
                    style={{
                      backgroundColor: item.color,
                      clipPath: 'polygon(4% 0%, 96% 0%, 100% 100%, 0% 100%)',
                      height: '100%'
                    }}
                  >
                    <span className="text-white text-lg font-medium">
                      {item.stage}
                    </span>
                    <span className="text-white text-lg font-bold">
                      {formatNumber(item.count)}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Calculated Metrics */}
          <div className="mt-8 pt-6 border-t border-gray-200">
            <div className="grid grid-cols-2 gap-8">
              <div className="text-center">
                <p className="text-base text-gray-600 mb-1">Conversion Rate</p>
                <p className="text-2xl font-bold text-purple-600">0.02%</p>
              </div>
              <div className="text-center">
                <p className="text-base text-gray-600 mb-1">Cost per Customer</p>
                <p className="text-2xl font-bold text-purple-600">$7.32</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Campaign Performance Cards */}
      <div className="space-y-4">
        {campaignMetrics.map((metric) => (
          <Card 
            key={metric.title} 
            className={`p-4 bg-gradient-to-br ${metric.gradient} border-${metric.iconColor.split('-')[1]}-100 hover:shadow-md transition-shadow duration-200`}
          >
            <div className="flex items-center space-x-4">
              <div className={`p-3 ${metric.iconBg} rounded-lg`}>
                <metric.icon className={`w-6 h-6 ${metric.iconColor}`} />
              </div>
              <div className="flex-1">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">{metric.value}</h3>
                    <p className="text-sm text-gray-600">{metric.title}</p>
                  </div>
                </div>
                <p className="text-xs text-gray-500 mt-1">{metric.description}</p>
              </div>
            </div>
          </Card>
        ))}

        {/* Additional Performance Metrics */}
        <Card className="p-4 bg-gradient-to-br from-indigo-50 to-white border-indigo-100">
          <div className="grid grid-cols-2 gap-4">
            <div className="text-center p-3 bg-white rounded-lg shadow-sm">
              <p className="text-sm text-gray-600">Visitor to Registration</p>
              <p className="text-xl font-bold text-indigo-600">1.8%</p>
            </div>
            <div className="text-center p-3 bg-white rounded-lg shadow-sm">
              <p className="text-sm text-gray-600">Registration to Customer</p>
              <p className="text-xl font-bold text-indigo-600">19.5%</p>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

const ConversionMetrics: React.FC<{ data: ConversionMetricsData[] }> = ({ data }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {data.map((metric) => (
        <Card key={metric.title} className="p-6 bg-white">
          <div className="space-y-2">
            <h3 className="text-sm font-medium text-gray-600">{metric.title}</h3>
            <div className="flex items-baseline space-x-2">
              <span className="text-2xl font-bold text-gray-900">
                {metric.prefix}{metric.current}{metric.suffix}
              </span>
              <span className={`text-sm font-medium ${
                metric.trend === 'up' ? 'text-green-500' : 'text-red-500'
              }`}>
                {metric.trend === 'up' ? '↑' : '↓'}
                {Math.abs(((metric.current - metric.previous) / metric.previous) * 100).toFixed(1)}%
              </span>
            </div>
            <p className="text-xs text-gray-500">
              vs. previous period: {metric.prefix}{metric.previous}{metric.suffix}
            </p>
          </div>
        </Card>
      ))}
    </div>
  );
};

const LTVAnalysis: React.FC<{ data: LTVMetricsData[] }> = ({ data }) => {
  // Calculate key metrics
  const averageLTV = data.reduce((acc, curr) => acc + curr.ltv, 0) / data.filter(d => d.ltv > 0).length;
  const averageCAC = data.reduce((acc, curr) => acc + curr.cac, 0) / data.filter(d => d.cac > 0).length;
  const averageRatio = data.reduce((acc, curr) => acc + curr.ltv_cac_ratio, 0) / data.filter(d => d.ltv_cac_ratio > 0).length;
  const maxRatio = Math.max(...data.map(d => d.ltv_cac_ratio));
  
  const [filters, setFilters] = useState({
    ltv: true,
    cac: true,
    adSpend: true,
    ratio: true
  });

  const toggleFilter = (key: keyof typeof filters) => {
    setFilters(prev => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <div className="space-y-8 mb-8">
      {/* Title Section */}
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-semibold text-gray-900">LTV & CAC Analysis</h2>
      </div>

      {/* Metric Cards */}
      <div className="grid grid-cols-4 gap-4">
        <Card className="p-4 bg-gradient-to-br from-violet-50 to-white border-violet-100">
          <div className="space-y-1">
            <p className="text-sm text-violet-600 font-medium">Average LTV</p>
            <p className="text-2xl font-semibold text-violet-900">${averageLTV.toFixed(2)}</p>
            <p className="text-xs text-gray-500">per customer</p>
          </div>
        </Card>

        <Card className="p-4 bg-gradient-to-br from-fuchsia-50 to-white border-fuchsia-100">
          <div className="space-y-1">
            <p className="text-sm text-fuchsia-600 font-medium">Average CAC</p>
            <p className="text-2xl font-semibold text-fuchsia-900">${averageCAC.toFixed(2)}</p>
            <p className="text-xs text-gray-500">per acquisition</p>
          </div>
        </Card>

        <Card className="p-4 bg-gradient-to-br from-purple-50 to-white border-purple-100">
          <div className="space-y-1">
            <p className="text-sm text-purple-600 font-medium">Average LTV:CAC</p>
            <p className="text-2xl font-semibold text-purple-900">{averageRatio.toFixed(2)}x</p>
            <p className="text-xs text-gray-500">ratio</p>
          </div>
        </Card>

        <Card className="p-4 bg-gradient-to-br from-indigo-50 to-white border-indigo-100">
          <div className="space-y-1">
            <p className="text-sm text-indigo-600 font-medium">Best LTV:CAC</p>
            <p className="text-2xl font-semibold text-indigo-900">{maxRatio.toFixed(2)}x</p>
            <p className="text-xs text-gray-500">peak ratio</p>
          </div>
        </Card>
      </div>

      {/* Charts Grid */}
      <div className="grid grid-cols-2 gap-6">
        {/* LTV Trends */}
        <Card className="p-6">
          <CardHeader className="px-0 pt-0">
            <div className="flex justify-between items-center">
              <CardTitle>LTV, CAC & Ad Spend Analysis</CardTitle>
              <div className="flex gap-2">
                <button
                  onClick={() => toggleFilter('ltv')}
                  className={`px-3 py-1.5 text-xs font-medium rounded-md transition-all ${
                    filters.ltv
                      ? 'bg-violet-100 text-violet-700'
                      : 'bg-gray-100 text-gray-600'
                  }`}
                >
                  LTV
                </button>
                <button
                  onClick={() => toggleFilter('cac')}
                  className={`px-3 py-1.5 text-xs font-medium rounded-md transition-all ${
                    filters.cac
                      ? 'bg-fuchsia-100 text-fuchsia-700'
                      : 'bg-gray-100 text-gray-600'
                  }`}
                >
                  CAC
                </button>
                <button
                  onClick={() => toggleFilter('adSpend')}
                  className={`px-3 py-1.5 text-xs font-medium rounded-md transition-all ${
                    filters.adSpend
                      ? 'bg-pink-100 text-pink-700'
                      : 'bg-gray-100 text-gray-600'
                  }`}
                >
                  Ad Spend
                </button>
              </div>
            </div>
          </CardHeader>
          <CardContent className="p-0">
            <div className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <ComposedChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 20 }}>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#E0E0E0" />
                  <XAxis
                    dataKey="month"
                    angle={-45}
                    textAnchor="end"
                    height={60}
                    tick={{ fontSize: 12, fill: '#666' }}
                    tickMargin={20}
                    axisLine={{ stroke: '#E0E0E0' }}
                  />
                  <YAxis
                    yAxisId="left"
                    tick={{ fontSize: 12, fill: '#666' }}
                    axisLine={{ stroke: '#E0E0E0' }}
                    tickFormatter={(value) => `$${value}`}
                    label={{ 
                      value: 'Value ($)', 
                      angle: -90, 
                      position: 'insideLeft',
                      style: { textAnchor: 'middle', fill: '#666', fontSize: 12 }
                    }}
                  />
                  <Tooltip
                    cursor={{ strokeDasharray: '3 3' }}
                    contentStyle={{
                      fontSize: 12,
                      backgroundColor: 'rgba(255, 255, 255, 0.96)',
                      border: '1px solid #E0E0E0',
                      borderRadius: '4px',
                      boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
                    }}
                    formatter={(value: any, name: string) => [
                      `$${Number(value).toFixed(2)}`,
                      name === 'ltv' ? 'LTV' : name === 'cac' ? 'CAC' : 'Ad Spend'
                    ]}
                    labelFormatter={(label) => `Month: ${label}`}
                  />
                  {filters.ltv && (
                    <Line
                      yAxisId="left"
                      type="monotone"
                      dataKey="ltv"
                      name="ltv"
                      stroke="#8B5CF6"
                      strokeWidth={2}
                      dot={{ fill: '#8B5CF6', r: 4 }}
                      activeDot={{ r: 6, stroke: '#8B5CF6', strokeWidth: 2 }}
                    />
                  )}
                  {filters.cac && (
                    <Line
                      yAxisId="left"
                      type="monotone"
                      dataKey="cac"
                      name="cac"
                      stroke="#D946EF"
                      strokeWidth={2}
                      dot={{ fill: '#D946EF', r: 4 }}
                      activeDot={{ r: 6, stroke: '#D946EF', strokeWidth: 2 }}
                    />
                  )}
                  {filters.adSpend && (
                    <Bar
                      yAxisId="left"
                      dataKey="ad_spend"
                      name="ad_spend"
                      fill="#EC4899"
                      fillOpacity={0.2}
                      stroke="#EC4899"
                      strokeWidth={1}
                      radius={[4, 4, 0, 0]}
                    />
                  )}
                </ComposedChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        {/* CAC Analysis */}
        <Card className="p-6">
          <CardHeader className="px-0 pt-0">
            <CardTitle>CAC Efficiency & LTV:CAC Ratio</CardTitle>
          </CardHeader>
          <CardContent className="p-0">
            <div className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <ComposedChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 20 }}>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#E0E0E0" />
                  <XAxis
                    dataKey="month"
                    angle={-45}
                    textAnchor="end"
                    height={60}
                    tick={{ fontSize: 12, fill: '#666' }}
                    tickMargin={20}
                    axisLine={{ stroke: '#E0E0E0' }}
                  />
                  <YAxis
                    yAxisId="left"
                    tick={{ fontSize: 12, fill: '#666' }}
                    axisLine={{ stroke: '#E0E0E0' }}
                    tickFormatter={(value) => `$${value}`}
                    label={{ 
                      value: 'CAC ($)', 
                      angle: -90, 
                      position: 'insideLeft',
                      style: { textAnchor: 'middle', fill: '#666', fontSize: 12 }
                    }}
                  />
                  <YAxis
                    yAxisId="right"
                    orientation="right"
                    tick={{ fontSize: 12, fill: '#666' }}
                    axisLine={{ stroke: '#E0E0E0' }}
                    tickFormatter={(value) => `${value}x`}
                    label={{ 
                      value: 'LTV:CAC Ratio', 
                      angle: 90, 
                      position: 'insideRight',
                      style: { textAnchor: 'middle', fill: '#666', fontSize: 12 }
                    }}
                  />
                  <Tooltip
                    cursor={{ strokeDasharray: '3 3' }}
                    contentStyle={{
                      fontSize: 12,
                      backgroundColor: 'rgba(255, 255, 255, 0.96)',
                      border: '1px solid #E0E0E0',
                      borderRadius: '4px',
                      boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
                    }}
                    formatter={(value: any, name: string) => [
                      name === 'cac' ? `$${Number(value).toFixed(2)}` : `${Number(value).toFixed(2)}x`,
                      name === 'cac' ? 'CAC' : 'LTV:CAC Ratio'
                    ]}
                    labelFormatter={(label) => `Month: ${label}`}
                  />
                  <Legend 
                    verticalAlign="top" 
                    height={36}
                    formatter={(value) => value === 'cac' ? 'CAC' : 'LTV:CAC Ratio'}
                  />
                  <Bar
                    yAxisId="left"
                    dataKey="cac"
                    fill="#D946EF"
                    fillOpacity={0.8}
                    radius={[4, 4, 0, 0]}
                  />
                  <Line
                    yAxisId="right"
                    type="monotone"
                    dataKey="ltv_cac_ratio"
                    stroke="#2E8B57"
                    strokeWidth={2}
                    dot={{ fill: '#2E8B57', r: 4 }}
                    activeDot={{ r: 6, stroke: '#2E8B57', strokeWidth: 2 }}
                  />
                </ComposedChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Summary Card */}
      <Card className="p-6 bg-gradient-to-br from-purple-50 via-white to-fuchsia-50">
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-gray-900">Key Findings</h3>
          <div className="grid grid-cols-2 gap-6">
            <div className="space-y-2">
              <h4 className="text-sm font-medium text-purple-900">LTV Trends</h4>
              <p className="text-sm text-gray-600">
                Started strong at ~$40 in late 2023, experienced a decrease to $12-17 range in early 2024,
                stabilized around $17-20 mid-year, and ended at ~$10 by late 2024.
              </p>
            </div>
            <div className="space-y-2">
              <h4 className="text-sm font-medium text-purple-900">CAC Efficiency</h4>
              <p className="text-sm text-gray-600">
                Most efficient month showed $1.99 CAC (March 2024), while the least efficient was $14.57 (February 2024).
                Overall trend shows improving efficiency with strategic marketing optimization.
              </p>
            </div>
            <div className="space-y-2">
              <h4 className="text-sm font-medium text-purple-900">LTV:CAC Performance</h4>
              <p className="text-sm text-gray-600">
                Maintained healthy ratios with best performing at 8.73x and averaging 4.73x,
                consistently above the healthy threshold of 3:1.
              </p>
            </div>
            <div className="space-y-2">
              <h4 className="text-sm font-medium text-purple-900">Growth Potential</h4>
              <p className="text-sm text-gray-600">
                Strong ratios indicate room for increased marketing investment,
                while declining LTV trend suggests need for customer value optimization.
              </p>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
};

type CohortData = CohortRevenueData | CohortSubscriberData;

const getStartValue = (data: CohortData, type: 'revenue' | 'subscribers'): number => {
  if (type === 'revenue' && 'start_mrr' in data) {
    return data.start_mrr;
  } else if (type === 'subscribers' && 'start_value' in data) {
    return data.start_value;
  }
  return 0;
};

interface RetentionTrendsProps {
  revenueData: CohortRevenueData[];
  subscriberData: CohortSubscriberData[];
}

const RetentionTrends = ({ revenueData, subscriberData }: RetentionTrendsProps): JSX.Element => {
  const [activeView, setActiveView] = useState<'revenue' | 'subscribers'>('revenue');
  const [selectedCohorts, setSelectedCohorts] = useState<string[]>([
    'Dec 2023', 'Jan 2024', 'Feb 2024', 'Mar 2024', 'Apr 2024',
    'May 2024', 'Jun 2024', 'Jul 2024'
  ]);

  const toggleCohort = (cohort: string) => {
    setSelectedCohorts(prev => 
      prev.includes(cohort)
        ? prev.filter(c => c !== cohort)
        : [...prev, cohort]
    );
  };

  const activeData = activeView === 'revenue' ? revenueData : subscriberData;
  const months = ['M1', 'M2', 'M3', 'M4', 'M5', 'M6'];
  const cohortColors = {
    'Dec 2023': '#9333EA', // violet
    'Jan 2024': '#E879F9', // fuchsia
    'Feb 2024': '#D946EF', // pink
    'Mar 2024': '#C026D3', // purple
    'Apr 2024': '#A21CAF', // dark purple
    'May 2024': '#86198F', // darker purple
    'Jun 2024': '#701A75', // darkest purple
    'Jul 2024': '#4C0264'  // deep purple
  } as const;

  return (
    <div className="grid grid-cols-2 gap-6">
      {/* Chart */}
      <Card className="p-6">
        <CardHeader className="px-0 pt-0">
          <div className="flex justify-between items-center">
            <CardTitle>Retention Trends</CardTitle>
            <div className="flex gap-2">
              <button
                onClick={() => setActiveView('revenue')}
                className={`px-3 py-1.5 text-xs font-medium rounded-md transition-all ${
                  activeView === 'revenue'
                    ? 'bg-violet-100 text-violet-700'
                    : 'bg-gray-100 text-gray-600'
                }`}
              >
                Revenue
              </button>
              <button
                onClick={() => setActiveView('subscribers')}
                className={`px-3 py-1.5 text-xs font-medium rounded-md transition-all ${
                  activeView === 'subscribers'
                    ? 'bg-violet-100 text-violet-700'
                    : 'bg-gray-100 text-gray-600'
                }`}
              >
                Subscribers
              </button>
            </div>
          </div>
        </CardHeader>
        <CardContent className="p-0">
          <div className="h-[400px]">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart margin={{ top: 20, right: 30, left: 20, bottom: 20 }}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#E0E0E0" />
                <XAxis
                  dataKey="month"
                  type="category"
                  allowDuplicatedCategory={false}
                  tick={{ fontSize: 12, fill: '#666' }}
                  axisLine={{ stroke: '#E0E0E0' }}
                />
                <YAxis
                  domain={[0, 100]}
                  tick={{ fontSize: 12, fill: '#666' }}
                  axisLine={{ stroke: '#E0E0E0' }}
                  tickFormatter={(value) => `${value}%`}
                />
                <Tooltip
                  formatter={(value: any) => [`${value}%`, 'Retention']}
                  contentStyle={{
                    fontSize: 12,
                    backgroundColor: 'rgba(255, 255, 255, 0.96)',
                    border: '1px solid #E0E0E0',
                    borderRadius: '4px',
                    boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
                  }}
                />
                {activeData
                  .filter(cohort => 
                    cohort.month !== 'Average' && 
                    selectedCohorts.includes(cohort.month) &&
                    cohort.retention_1 > 0
                  )
                  .map((cohort) => (
                    <Line
                      key={cohort.month}
                      type="monotone"
                      data={months.map((month, idx) => ({
                        month,
                        value: cohort[`retention_${idx + 1}` as keyof typeof cohort]
                      }))}
                      dataKey="value"
                      name={cohort.month}
                      stroke={cohortColors[cohort.month as keyof typeof cohortColors]}
                      strokeWidth={2}
                      dot={{ 
                        fill: cohortColors[cohort.month as keyof typeof cohortColors],
                        r: 4 
                      }}
                      activeDot={{ r: 6, strokeWidth: 2 }}
                    />
                  ))}
              </LineChart>
            </ResponsiveContainer>
          </div>
          {/* Cohort Selection */}
          <div className="mt-4 flex flex-wrap gap-2">
            {Object.entries(cohortColors).map(([cohort, color]) => (
              <button
                key={cohort}
                onClick={() => toggleCohort(cohort)}
                className={`px-3 py-1.5 text-xs font-medium rounded-md transition-all ${
                  selectedCohorts.includes(cohort)
                    ? 'text-white'
                    : 'bg-gray-100 text-gray-600'
                }`}
                style={{
                  backgroundColor: selectedCohorts.includes(cohort) ? color : undefined,
                  borderWidth: '1px',
                  borderColor: color,
                }}
              >
                {cohort}
              </button>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Stats */}
      <div className="space-y-6">
        <Card className="p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Retention Statistics</h3>
          <div className="space-y-4">
            <div className="p-4 bg-violet-50 rounded-lg">
              <div className="flex justify-between items-center">
                <div>
                  <p className="text-sm font-medium text-violet-600">Average First Month</p>
                  <p className="text-2xl font-semibold text-violet-900">
                    {activeView === 'revenue' ? '98%' : '95%'}
                  </p>
                </div>
                <Users className="w-8 h-8 text-violet-400 opacity-20" />
              </div>
            </div>
            <div className="p-4 bg-violet-50/70 rounded-lg">
              <div className="flex justify-between items-center">
                <div>
                  <p className="text-sm font-medium text-violet-600">Average Third Month</p>
                  <p className="text-2xl font-semibold text-violet-900">
                    {activeView === 'revenue' ? '42%' : '45%'}
                  </p>
                </div>
                <Activity className="w-8 h-8 text-violet-400 opacity-20" />
              </div>
            </div>
            <div className="p-4 bg-violet-50/50 rounded-lg">
              <div className="flex justify-between items-center">
                <div>
                  <p className="text-sm font-medium text-violet-600">Average Sixth Month</p>
                  <p className="text-2xl font-semibold text-violet-900">
                    {activeView === 'revenue' ? '35%' : '39%'}
                  </p>
                </div>
                <Target className="w-8 h-8 text-violet-400 opacity-20" />
              </div>
            </div>
          </div>
        </Card>

        <Card className="p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Analysis</h3>
          <div className="space-y-6">
            <div>
              <h4 className="text-sm font-medium text-gray-600 mb-2">Best Performing</h4>
              <div className="flex items-center gap-2">
                <span className="px-2 py-1 bg-violet-100 text-violet-700 rounded-md text-sm font-medium">
                  Jan-Feb 2024
                </span>
                <span className="text-sm text-gray-600">
                  100% retention through first 6 months
                </span>
              </div>
            </div>
            <div>
              <h4 className="text-sm font-medium text-gray-600 mb-2">Critical Drop-off</h4>
              <div className="flex items-center gap-2">
                <span className="px-2 py-1 bg-violet-100 text-violet-700 rounded-md text-sm font-medium">
                  Month 2-3
                </span>
                <span className="text-sm text-gray-600">
                  Average retention drops by 31%
                </span>
              </div>
            </div>
            <div>
              <h4 className="text-sm font-medium text-gray-600 mb-2">Recent Trend</h4>
              <div className="flex items-center gap-2">
                <span className="px-2 py-1 bg-violet-100 text-violet-700 rounded-md text-sm font-medium">
                  Improving
                </span>
                <span className="text-sm text-gray-600">
                  Last 3 cohorts show better initial retention
                </span>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

const CohortAnalysis: React.FC = () => {
  const [activeView, setActiveView] = useState<'revenue' | 'subscribers'>('revenue');

  // Cohort Revenue Data with Average
  const cohortRevenueData: CohortRevenueData[] = [
    { month: 'Average', mrr: 81.52, start_mrr: 81.52, retention_1: 98, retention_2: 67, retention_3: 42, retention_4: 36, retention_5: 36, retention_6: 35, retention_7: 29, retention_8: 30, retention_9: 26, retention_10: 39, retention_11: 30, retention_12: 18 },
    { month: 'Dec 2023', mrr: 339.60, start_mrr: 339.60, retention_1: 53, retention_2: 29, retention_3: 18, retention_4: 18, retention_5: 18, retention_6: 18, retention_7: 21, retention_8: 21, retention_9: 18, retention_10: 18, retention_11: 18, retention_12: 18 },
    { month: 'Jan 2024', mrr: 59.90, start_mrr: 59.90, retention_1: 100, retention_2: 100, retention_3: 100, retention_4: 100, retention_5: 100, retention_6: 100, retention_7: 100, retention_8: 100, retention_9: 100, retention_10: 100, retention_11: 0, retention_12: 0 },
    { month: 'Feb 2024', mrr: 59.90, start_mrr: 59.90, retention_1: 100, retention_2: 100, retention_3: 100, retention_4: 100, retention_5: 100, retention_6: 100, retention_7: 100, retention_8: 100, retention_9: 100, retention_10: 0, retention_11: 0, retention_12: 0 },
    { month: 'Mar 2024', mrr: 389.00, start_mrr: 389.00, retention_1: 64, retention_2: 26, retention_3: 23, retention_4: 23, retention_5: 23, retention_6: 8, retention_7: 8, retention_8: 8, retention_9: 0, retention_10: 0, retention_11: 0, retention_12: 0 },
    { month: 'Apr 2024', mrr: 49.95, start_mrr: 49.95, retention_1: 100, retention_2: 100, retention_3: 100, retention_4: 100, retention_5: 100, retention_6: 100, retention_7: 100, retention_8: 0, retention_9: 0, retention_10: 0, retention_11: 0, retention_12: 0 },
    { month: 'May 2024', mrr: 39.96, start_mrr: 39.96, retention_1: 100, retention_2: 50, retention_3: 25, retention_4: 25, retention_5: 25, retention_6: 25, retention_7: 0, retention_8: 0, retention_9: 0, retention_10: 0, retention_11: 0, retention_12: 0 },
    { month: 'Jun 2024', mrr: 19.98, start_mrr: 19.98, retention_1: 50, retention_2: 50, retention_3: 50, retention_4: 50, retention_5: 50, retention_6: 0, retention_7: 0, retention_8: 0, retention_9: 0, retention_10: 0, retention_11: 0, retention_12: 0 },
    { month: 'Jul 2024', mrr: 19.98, start_mrr: 19.98, retention_1: 50, retention_2: 50, retention_3: 50, retention_4: 50, retention_5: 0, retention_6: 0, retention_7: 0, retention_8: 0, retention_9: 0, retention_10: 0, retention_11: 0, retention_12: 0 },
    { month: 'Aug 2024', mrr: 0.00, start_mrr: 0.00, retention_1: 0, retention_2: 0, retention_3: 0, retention_4: 0, retention_5: 0, retention_6: 0, retention_7: 0, retention_8: 0, retention_9: 0, retention_10: 0, retention_11: 0, retention_12: 0 },
    { month: 'Sep 2024', mrr: 0.00, start_mrr: 0.00, retention_1: 0, retention_2: 0, retention_3: 0, retention_4: 0, retention_5: 0, retention_6: 0, retention_7: 0, retention_8: 0, retention_9: 0, retention_10: 0, retention_11: 0, retention_12: 0 },
    { month: 'Oct 2024', mrr: 0.00, start_mrr: 0.00, retention_1: 0, retention_2: 0, retention_3: 0, retention_4: 0, retention_5: 0, retention_6: 0, retention_7: 0, retention_8: 0, retention_9: 0, retention_10: 0, retention_11: 0, retention_12: 0 }
  ];

  // Cohort Subscribers Data with Average
  const cohortSubscribersData: CohortSubscriberData[] = [
    { month: 'Average', subscribers: 3.17, start_value: 3.17, retention_1: 95, retention_2: 76, retention_3: 45, retention_4: 39, retention_5: 39, retention_6: 39, retention_7: 35, retention_8: 40, retention_9: 28, retention_10: 50, retention_11: 40, retention_12: 25 },
    { month: 'Dec 2023', subscribers: 17, start_value: 17, retention_1: 74, retention_2: 26, retention_3: 21, retention_4: 21, retention_5: 21, retention_6: 16, retention_7: 16, retention_8: 16, retention_9: 16, retention_10: 16, retention_11: 16, retention_12: 16 },
    { month: 'Jan 2024', subscribers: 1, start_value: 1, retention_1: 100, retention_2: 100, retention_3: 100, retention_4: 100, retention_5: 100, retention_6: 100, retention_7: 100, retention_8: 100, retention_9: 100, retention_10: 100, retention_11: 100, retention_12: 0 },
    { month: 'Feb 2024', subscribers: 1, start_value: 1, retention_1: 100, retention_2: 100, retention_3: 100, retention_4: 100, retention_5: 100, retention_6: 100, retention_7: 100, retention_8: 100, retention_9: 100, retention_10: 100, retention_11: 0, retention_12: 0 },
    { month: 'Mar 2024', subscribers: 19, start_value: 19, retention_1: 89, retention_2: 74, retention_3: 26, retention_4: 21, retention_5: 21, retention_6: 21, retention_7: 16, retention_8: 16, retention_9: 16, retention_10: 0, retention_11: 0, retention_12: 0 },
    { month: 'Apr 2024', subscribers: 5, start_value: 5, retention_1: 100, retention_2: 100, retention_3: 100, retention_4: 100, retention_5: 100, retention_6: 100, retention_7: 100, retention_8: 100, retention_9: 0, retention_10: 0, retention_11: 0, retention_12: 0 },
    { month: 'May 2024', subscribers: 4, start_value: 4, retention_1: 100, retention_2: 100, retention_3: 50, retention_4: 25, retention_5: 25, retention_6: 25, retention_7: 25, retention_8: 0, retention_9: 0, retention_10: 0, retention_11: 0, retention_12: 0 },
    { month: 'Jun 2024', subscribers: 2, start_value: 2, retention_1: 100, retention_2: 50, retention_3: 50, retention_4: 50, retention_5: 50, retention_6: 50, retention_7: 0, retention_8: 0, retention_9: 0, retention_10: 0, retention_11: 0, retention_12: 0 },
    { month: 'Jul 2024', subscribers: 2, start_value: 2, retention_1: 100, retention_2: 50, retention_3: 50, retention_4: 50, retention_5: 50, retention_6: 0, retention_7: 0, retention_8: 0, retention_9: 0, retention_10: 0, retention_11: 0, retention_12: 0 }
  ];

  return (
    <div className="space-y-8 mb-8">
      {/* Title Section */}
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-semibold text-gray-900">Cohort Analysis</h2>
      </div>

      {/* Metric Cards */}
      <div className="grid grid-cols-4 gap-4">
        <Card className="p-4 bg-gradient-to-br from-violet-50 to-white border-violet-100">
          <div className="space-y-1">
            <p className="text-sm text-violet-600 font-medium">Average 1st Month Retention</p>
            <p className="text-2xl font-semibold text-violet-900">78.5%</p>
            <p className="text-xs text-gray-500">across all cohorts</p>
          </div>
        </Card>

        <Card className="p-4 bg-gradient-to-br from-fuchsia-50 to-white border-fuchsia-100">
          <div className="space-y-1">
            <p className="text-sm text-fuchsia-600 font-medium">Average 3rd Month Retention</p>
            <p className="text-2xl font-semibold text-fuchsia-900">55.3%</p>
            <p className="text-xs text-gray-500">across all cohorts</p>
          </div>
        </Card>

        <Card className="p-4 bg-gradient-to-br from-purple-50 to-white border-purple-100">
          <div className="space-y-1">
            <p className="text-sm text-purple-600 font-medium">Best Performing Cohort</p>
            <p className="text-2xl font-semibold text-purple-900">Jan 2024</p>
            <p className="text-xs text-gray-500">100% retention</p>
          </div>
        </Card>

        <Card className="p-4 bg-gradient-to-br from-indigo-50 to-white border-indigo-100">
          <div className="space-y-1">
            <p className="text-sm text-indigo-600 font-medium">Largest Cohort Size</p>
            <p className="text-2xl font-semibold text-indigo-900">19</p>
            <p className="text-xs text-gray-500">Mar 2024 cohort</p>
          </div>
        </Card>
      </div>

      {/* Retention Trends */}
      <RetentionTrends revenueData={cohortRevenueData} subscriberData={cohortSubscribersData} />

      {/* Cohort Table */}
      <Card className="p-6">
        <CardHeader className="px-0 pt-0">
          <div className="flex justify-between items-center">
            <CardTitle>Cohort Analysis</CardTitle>
            <div className="flex gap-2">
              <button
                onClick={() => setActiveView('revenue')}
                className={`px-3 py-1.5 text-xs font-medium rounded-md transition-all ${
                  activeView === 'revenue'
                    ? 'bg-violet-100 text-violet-700'
                    : 'bg-gray-100 text-gray-600'
                }`}
              >
                Revenue
              </button>
              <button
                onClick={() => setActiveView('subscribers')}
                className={`px-3 py-1.5 text-xs font-medium rounded-md transition-all ${
                  activeView === 'subscribers'
                    ? 'bg-violet-100 text-violet-700'
                    : 'bg-gray-100 text-gray-600'
                }`}
              >
                Subscribers
              </button>
            </div>
          </div>
        </CardHeader>
        <CardContent className="p-0">
          <div className="h-[400px] relative overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr>
                  <th className="sticky left-0 bg-white px-4 py-2 text-left font-medium text-gray-900">Cohort</th>
                  <th className="px-4 py-2 text-center font-medium text-gray-900">
                    {activeView === 'revenue' ? 'Start MRR' : 'Start Value'}
                  </th>
                  {Array.from({ length: 12 }, (_, i) => (
                    <th key={i} className="px-4 py-2 text-center font-medium text-gray-900">
                      M{i + 1}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {(activeView === 'revenue' ? cohortRevenueData : cohortSubscribersData).map((cohort, idx) => (
                  <tr key={cohort.month} className={`${idx % 2 === 0 ? 'bg-gray-50' : 'bg-white'} ${cohort.month === 'Average' ? 'font-semibold' : ''}`}>
                    <td className="sticky left-0 bg-inherit px-4 py-2 font-medium text-gray-900">
                      {cohort.month}
                    </td>
                    <td className="px-4 py-2 text-center text-gray-900">
                      {activeView === 'revenue' 
                        ? `$${getStartValue(cohort, 'revenue').toFixed(2)}`
                        : getStartValue(cohort, 'subscribers')
                      }
                    </td>
                    {Array.from({ length: 12 }, (_, i) => {
                      const retention = cohort[`retention_${i + 1}` as keyof typeof cohort] as number;
                      return (
                        <td
                          key={i}
                          className="px-4 py-2 text-center"
                          style={{
                            background: retention
                              ? `rgba(139, 92, 246, ${retention / 100})`
                              : 'transparent',
                            color: retention > 50 ? 'white' : 'black'
                          }}
                        >
                          {retention ? `${retention}%` : '-'}
                        </td>
                      );
                    })}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>

      {/* Summary Card */}
      <Card className="p-6 bg-gradient-to-br from-purple-50 via-white to-fuchsia-50">
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-gray-900">Cohort Analysis Insights</h3>
          <div className="grid grid-cols-2 gap-6">
            <div className="space-y-2">
              <h4 className="text-sm font-medium text-purple-900">Retention Patterns</h4>
              <p className="text-sm text-gray-600">
                Early cohorts (Dec 2023) show moderate retention with gradual decline.
                Recent cohorts demonstrate higher initial retention but steeper drop-offs.
              </p>
            </div>
            <div className="space-y-2">
              <h4 className="text-sm font-medium text-purple-900">Revenue Impact</h4>
              <p className="text-sm text-gray-600">
                March 2024 cohort shows strong initial revenue but significant early churn.
                January and February 2024 cohorts maintain consistent revenue retention.
              </p>
            </div>
            <div className="space-y-2">
              <h4 className="text-sm font-medium text-purple-900">Cohort Performance</h4>
              <p className="text-sm text-gray-600">
                Best performing cohorts initiated in early 2024, maintaining 100% retention.
                Larger cohorts tend to experience more variable retention rates.
              </p>
            </div>
            <div className="space-y-2">
              <h4 className="text-sm font-medium text-purple-900">Recommendations</h4>
              <p className="text-sm text-gray-600">
                Focus on replicating success factors from Jan-Feb 2024 cohorts.
                Implement targeted retention strategies for months 2-3 where significant drops occur.
              </p>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
};

const Dashboard: React.FC = () => {
  // Parse the table data
  const customerData: CustomerMetricsData[] = [
    { month: '2023-11', total_users: 3, trial_users: 0, revenue: 109.85, trial_to_paid_ratio: 0.00, al_to_total_ra: 0.00 },
    { month: '2023-12', total_users: 6, trial_users: 0, revenue: 239.70, trial_to_paid_ratio: 0.00, al_to_total_ra: 0.00 },
    { month: '2024-01', total_users: 5, trial_users: 0, revenue: 189.75, trial_to_paid_ratio: 0.00, al_to_total_ra: 0.00 },
    { month: '2024-02', total_users: 5, trial_users: 0, revenue: 189.75, trial_to_paid_ratio: 0.00, al_to_total_ra: 0.00 },
    { month: '2024-03', total_users: 21, trial_users: 13, revenue: 267.13, trial_to_paid_ratio: 162.50, al_to_total_ra: 61.90 },
    { month: '2024-04', total_users: 15, trial_users: 5, revenue: 259.90, trial_to_paid_ratio: 50.00, al_to_total_ra: 33.33 },
    { month: '2024-05', total_users: 10, trial_users: 3, revenue: 199.93, trial_to_paid_ratio: 42.86, al_to_total_ra: 30.00 },
    { month: '2024-06', total_users: 9, trial_users: 2, revenue: 169.93, trial_to_paid_ratio: 28.57, al_to_total_ra: 22.22 },
    { month: '2024-07', total_users: 10, trial_users: 2, revenue: 179.92, trial_to_paid_ratio: 25.00, al_to_total_ra: 20.00 },
    { month: '2024-08', total_users: 7, trial_users: 0, revenue: 119.93, trial_to_paid_ratio: 0.00, al_to_total_ra: 0.00 },
    { month: '2024-09', total_users: 7, trial_users: 0, revenue: 119.93, trial_to_paid_ratio: 0.00, al_to_total_ra: 0.00 },
    { month: '2024-10', total_users: 4, trial_users: 0, revenue: 39.96, trial_to_paid_ratio: 0.00, al_to_total_ra: 0.00 },
    { month: '2024-11', total_users: 4, trial_users: 0, revenue: 39.96, trial_to_paid_ratio: 0.00, al_to_total_ra: 0.00 }
  ];

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-7xl mx-auto space-y-8">
        {/* Header */}
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-semibold text-gray-900">TradeWizz Investor Dashboard</h1>
          <span className="text-sm text-gray-500">Last updated: Dec 20, 2024</span>
        </div>

        {/* KPI Metrics */}
        <div className="grid grid-cols-3 grid-rows-2 gap-6">
          <MetricCard
            title="ARR"
            value="$864,000"
            trend="up"
            change="+11.11% vs prev month"
            icon={DollarSign}
          />
          <MetricCard
            title="Customer Churn Rate"
            value="2.4%"
            trend="down"
            change="-0.5% vs prev month"
            icon={Users}
          />
          <MetricCard
            title="LTV"
            value="$12,500"
            trend="up"
            change="+15% vs prev month"
            icon={Target}
          />
          <MetricCard
            title="CAC"
            value="$1,000"
            trend="down"
            change="-16.67% vs prev month"
            icon={Activity}
          />
          <MetricCard
            title="LTV:CAC Ratio"
            value="12.5"
            trend="up"
            change="+25% vs prev month"
            icon={Target}
          />
          <MetricCard
            title="NRR"
            value="115%"
            trend="up"
            change="+5% vs prev month"
            icon={TrendingUp}
          />
        </div>

        {/* Key Insights */}
        <div className="grid grid-cols-2 gap-6">
          <InsightCard
            title="Strong Customer Retention"
            description="With a churn rate of only 2.4%, our retention strategy is proving effective. Customer satisfaction and product stickiness are key drivers."
            icon={Users}
            category="Customer Behavior"
          />
          <InsightCard
            title="Efficient Acquisition"
            description="CAC has decreased by 16.67%, while LTV continues to grow, indicating improved marketing efficiency and product market fit."
            icon={UserPlus}
            category="Growth"
          />
        </div>

        {/* MRR Charts Side by Side */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <MRRAndGrowthChart data={mockMonthlyData} />
          <MRRDynamics data={mockMonthlyDynamicsData} />
        </div>

        {/* Subscription Distribution */}
        <SubscriptionDistribution data={mockSubscriptionData} />

        {/* Customer Metrics Section */}
        <CustomerMetrics data={customerData} />

        {/* LTV Analysis Section */}
        <LTVAnalysis data={mockLTVData} />

        {/* Cohort Analysis Section */}
        <CohortAnalysis />

        {/* Purchase Funnel and Instagram Campaign Performance */}
        <PurchaseFunnel data={mockPurchaseFunnelData} />

        {/* Summary and Evaluation */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <SummaryReport />
          <EvaluationCard />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
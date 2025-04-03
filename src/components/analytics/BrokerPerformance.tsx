
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { 
  LineChart, 
  Line, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell
} from "recharts";

// Mock data for KPIs
const kpiData = {
  listingsLive: 24,
  avgViews: 156,
  responseTime: 35,
  dealsClosed: 8,
  currentEarnings: 125000,
  projectedEarnings: 225000,
  leadConversion: 28
};

// Mock data for earnings trend
const earningsData = [
  { month: 'Jan', earnings: 15000 },
  { month: 'Feb', earnings: 18000 },
  { month: 'Mar', earnings: 22000 },
  { month: 'Apr', earnings: 19000 },
  { month: 'May', earnings: 25000 },
  { month: 'Jun', earnings: 26000 },
  { month: 'Jul', earnings: 0 },
  { month: 'Aug', earnings: 0 },
  { month: 'Sep', earnings: 0 },
  { month: 'Oct', earnings: 0 },
  { month: 'Nov', earnings: 0 },
  { month: 'Dec', earnings: 0 }
];

// Mock data for funnel
const funnelData = [
  { name: 'Leads', value: 120 },
  { name: 'Qualified', value: 80 },
  { name: 'Viewing', value: 40 },
  { name: 'Offer', value: 20 },
  { name: 'Closed', value: 8 }
];

// Mock data for activity
const activityData = [
  { name: 'Property Listings', value: 30 },
  { name: 'Client Meetings', value: 25 },
  { name: 'Property Viewings', value: 18 },
  { name: 'Offers Submitted', value: 12 },
  { name: 'Deals Negotiated', value: 10 }
];

// Colors for charts
const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#AF19FF'];

// Format currency
const formatCurrency = (value: number) => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'AED',
    notation: 'compact',
    maximumFractionDigits: 1
  }).format(value);
};

const BrokerPerformance = () => {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-slate-500">
              Listings Live
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{kpiData.listingsLive}</div>
            <p className="text-xs text-slate-500 mt-1">
              Avg. {kpiData.avgViews} views per listing
            </p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-slate-500">
              Lead Response Time
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{kpiData.responseTime} mins</div>
            <p className="text-xs text-slate-500 mt-1">
              Industry avg: 55 mins
            </p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-slate-500">
              Deals Closed (YTD)
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{kpiData.dealsClosed}</div>
            <p className="text-xs text-slate-500 mt-1">
              {kpiData.leadConversion}% lead conversion rate
            </p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-slate-500">
              Earnings (MTD)
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{formatCurrency(kpiData.currentEarnings)}</div>
            <p className="text-xs text-slate-500 mt-1">
              Projected: {formatCurrency(kpiData.projectedEarnings)}
            </p>
          </CardContent>
        </Card>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Earnings Trend (2025)</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart
                  data={earningsData}
                  margin={{
                    top: 5,
                    right: 30,
                    left: 20,
                    bottom: 5,
                  }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" />
                  <YAxis tickFormatter={(value) => `${value/1000}k`} />
                  <Tooltip formatter={(value) => [`${formatCurrency(value as number)}`, 'Earnings']} />
                  <Line type="monotone" dataKey="earnings" stroke="#8884d8" activeDot={{ r: 8 }} />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>Conversion Funnel</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {funnelData.map((item, index) => (
                <div key={index} className="space-y-1">
                  <div className="flex justify-between text-sm">
                    <span>{item.name}</span>
                    <span>{item.value}</span>
                  </div>
                  <Progress value={(item.value / funnelData[0].value) * 100} className="h-2" 
                    style={{ backgroundColor: COLORS[index % COLORS.length] + '40', 
                             '--tw-progress-fill': COLORS[index % COLORS.length] } as React.CSSProperties} />
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Activity Breakdown</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={activityData}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                    outerRadius={80}
                    fill="#8884d8"
                    dataKey="value"
                  >
                    {activityData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>Recent Activity</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center">
                <div className="w-2 h-2 rounded-full bg-green-500 mr-3"></div>
                <div className="flex-1">
                  <p className="font-medium">New Listing Created</p>
                  <p className="text-sm text-slate-500">2BR in Downtown Dubai • {formatCurrency(2500000)}</p>
                </div>
                <div className="text-sm text-slate-500">2 hours ago</div>
              </div>
              
              <div className="flex items-center">
                <div className="w-2 h-2 rounded-full bg-blue-500 mr-3"></div>
                <div className="flex-1">
                  <p className="font-medium">Client Meeting</p>
                  <p className="text-sm text-slate-500">Sarah Johnson • Property Viewing</p>
                </div>
                <div className="text-sm text-slate-500">Yesterday</div>
              </div>
              
              <div className="flex items-center">
                <div className="w-2 h-2 rounded-full bg-purple-500 mr-3"></div>
                <div className="flex-1">
                  <p className="font-medium">Offer Submitted</p>
                  <p className="text-sm text-slate-500">Palm Jumeirah Villa • {formatCurrency(5800000)}</p>
                </div>
                <div className="text-sm text-slate-500">2 days ago</div>
              </div>
              
              <div className="flex items-center">
                <div className="w-2 h-2 rounded-full bg-amber-500 mr-3"></div>
                <div className="flex-1">
                  <p className="font-medium">Commission Received</p>
                  <p className="text-sm text-slate-500">JVC Apartment • {formatCurrency(35000)}</p>
                </div>
                <div className="text-sm text-slate-500">1 week ago</div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default BrokerPerformance;

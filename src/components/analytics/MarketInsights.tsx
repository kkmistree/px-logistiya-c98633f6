import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import {
  AreaChart,
  Area,
  BarChart,
  Bar,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend
} from "recharts";

const pricePerSqmData = [
  { month: 'Jan', riyadh: 1900, jeddah: 1800, dammam: 1850, kaec: 2080, jubail: 2130 },
  { month: 'Feb', riyadh: 1920, jeddah: 1820, dammam: 1860, kaec: 2090, jubail: 2140 },
  { month: 'Mar', riyadh: 1940, jeddah: 1830, dammam: 1865, kaec: 2095, jubail: 2150 },
  { month: 'Apr', riyadh: 1950, jeddah: 1845, dammam: 1870, kaec: 2100, jubail: 2155 },
  { month: 'May', riyadh: 1960, jeddah: 1850, dammam: 1875, kaec: 2105, jubail: 2160 },
  { month: 'Jun', riyadh: 1965, jeddah: 1860, dammam: 1880, kaec: 2110, jubail: 2165 },
];

const roiData = [
  { area: 'Riyadh Industrial City', roi: 7.2 },
  { area: 'Jeddah Industrial City', roi: 6.9 },
  { area: 'Dammam Industrial City', roi: 7.5 },
  { area: 'KAEC Industrial Valley', roi: 6.8 },
  { area: 'Jubail Industrial City', roi: 8.1 },
  { area: 'Sudair City', roi: 7.6 }
];

const transactionData = [
  { quarter: 'Q1 2024', volume: 652, value: 98.5 },
  { quarter: 'Q2 2024', volume: 715, value: 111.2 },
  { quarter: 'Q3 2024', volume: 680, value: 109.8 },
  { quarter: 'Q4 2024', volume: 798, value: 123.6 },
  { quarter: 'Q1 2025', volume: 725, value: 116.2 }
];

const formatCurrency = (value: number) => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'SAR',
    notation: 'compact',
    maximumFractionDigits: 1
  }).format(value);
};

const marketInsights = [
  {
    title: "Industrial Growth",
    description: "Riyadh Industrial City sees 8% MoM increase in warehouse prices",
    action: "Consider investment opportunities in logistics facilities."
  },
  {
    title: "New Development",
    description: "MODON announces Phase 3 expansion in 30 days",
    action: "Alert investors interested in industrial development."
  },
  {
    title: "Yield Analysis",
    description: "Industrial yields rising in Jubail Industrial City",
    subtext: "Current average yield 8.1%, up from 7.5% last quarter."
  },
  {
    title: "Market Trend",
    description: "Dammam industrial corridor showing steady appreciation",
    subtext: "15.9% year-on-year increase in property values."
  }
];

const MarketInsights = () => {
  const [propertyType, setPropertyType] = useState("warehouse");
  const [timeRange, setTimeRange] = useState("6m");
  
  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between gap-4">
        <div className="flex items-center gap-4">
          <div className="w-full sm:w-auto">
            <Select defaultValue={propertyType} onValueChange={setPropertyType}>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Property Type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="warehouse">Warehouses</SelectItem>
                <SelectItem value="factory">Factories</SelectItem>
                <SelectItem value="land">Industrial Land</SelectItem>
                <SelectItem value="logistics">Logistics Facilities</SelectItem>
                <SelectItem value="all">All Properties</SelectItem>
              </SelectContent>
            </Select>
          </div>
          
          <div className="w-full sm:w-auto">
            <Select defaultValue={timeRange} onValueChange={setTimeRange}>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Time Range" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="3m">Last 3 Months</SelectItem>
                <SelectItem value="6m">Last 6 Months</SelectItem>
                <SelectItem value="1y">Last Year</SelectItem>
                <SelectItem value="3y">Last 3 Years</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
        
        <Tabs defaultValue="price" className="w-full sm:w-auto">
          <TabsList>
            <TabsTrigger value="price">Price/sqm</TabsTrigger>
            <TabsTrigger value="roi">ROI</TabsTrigger>
            <TabsTrigger value="volume">Volume</TabsTrigger>
          </TabsList>
        </Tabs>
      </div>
      
      <Card>
        <CardHeader>
          <CardTitle>Price per sqm Trend by Area (SAR)</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="h-[400px]">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart
                data={pricePerSqmData}
                margin={{
                  top: 5,
                  right: 30,
                  left: 20,
                  bottom: 5,
                }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis domain={[1700, 2200]} />
                <Tooltip formatter={(value) => [`SAR ${value}`, 'Price per sqm']} />
                <Legend />
                <Line type="monotone" dataKey="riyadh" name="Riyadh" stroke="#8884d8" activeDot={{ r: 8 }} />
                <Line type="monotone" dataKey="jeddah" name="Jeddah" stroke="#82ca9d" />
                <Line type="monotone" dataKey="dammam" name="Dammam" stroke="#ffc658" />
                <Line type="monotone" dataKey="kaec" name="KAEC" stroke="#ff7300" />
                <Line type="monotone" dataKey="jubail" name="Jubail" stroke="#0088FE" />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>ROI by Industrial Area (%)</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  data={roiData}
                  margin={{
                    top: 5,
                    right: 30,
                    left: 20,
                    bottom: 5,
                  }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="area" tick={{fontSize: 10}} angle={-45} textAnchor="end" height={80} />
                  <YAxis domain={[6, 9]} />
                  <Tooltip formatter={(value) => [`${value}%`, 'ROI']} />
                  <Bar dataKey="roi" fill="#8884d8" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>Transaction Volume & Value</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart
                  data={transactionData}
                  margin={{
                    top: 5,
                    right: 30,
                    left: 20,
                    bottom: 5,
                  }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="quarter" />
                  <YAxis yAxisId="left" />
                  <YAxis yAxisId="right" orientation="right" tickFormatter={(value) => `${value}B`} />
                  <Tooltip formatter={(value, name) => [
                    name === 'volume' ? value : `${value}B`,
                    name === 'volume' ? 'Transactions' : 'Value (SAR)'
                  ]} />
                  <Legend />
                  <Area yAxisId="left" type="monotone" dataKey="volume" name="Transactions" stroke="#8884d8" fill="#8884d8" />
                  <Area yAxisId="right" type="monotone" dataKey="value" name="Value (SAR)" stroke="#82ca9d" fill="#82ca9d" />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>
      </div>
      
      <Card>
        <CardHeader>
          <CardTitle>Saudi Industrial Market Insights</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {marketInsights.map((insight, index) => (
              <div key={index} className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded">
                <h3 className="font-medium">{insight.title}</h3>
                <p className="text-sm text-slate-600 mt-1">{insight.description}</p>
                {insight.action && <p className="text-sm text-slate-600 mt-1">{insight.action}</p>}
                {insight.subtext && <p className="text-sm text-slate-600 mt-1">{insight.subtext}</p>}
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default MarketInsights;

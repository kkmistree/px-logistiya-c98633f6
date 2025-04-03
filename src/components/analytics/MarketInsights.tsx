
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

// Mock data for price per sqft trend
const pricePerSqftData = [
  { month: 'Jan', downtown: 2200, marina: 1900, jvc: 950, hills: 1600 },
  { month: 'Feb', downtown: 2250, marina: 1950, jvc: 960, hills: 1620 },
  { month: 'Mar', downtown: 2300, marina: 2000, jvc: 970, hills: 1650 },
  { month: 'Apr', downtown: 2350, marina: 2050, jvc: 980, hills: 1670 },
  { month: 'May', downtown: 2400, marina: 2100, jvc: 990, hills: 1700 },
  { month: 'Jun', downtown: 2450, marina: 2150, jvc: 1000, hills: 1720 },
];

// Mock data for ROI by area
const roiData = [
  { area: 'Downtown', roi: 4.7 },
  { area: 'Marina', roi: 5.3 },
  { area: 'JVC', roi: 7.1 },
  { area: 'Dubai Hills', roi: 5.8 },
  { area: 'Palm Jumeirah', roi: 4.2 },
  { area: 'Business Bay', roi: 5.6 }
];

// Mock data for transaction volume
const transactionData = [
  { quarter: 'Q1 2024', volume: 15200, value: 28.5 },
  { quarter: 'Q2 2024', volume: 16500, value: 31.2 },
  { quarter: 'Q3 2024', volume: 14800, value: 29.8 },
  { quarter: 'Q4 2024', volume: 17300, value: 33.6 },
  { quarter: 'Q1 2025', volume: 18500, value: 36.2 }
];

// Format currency
const formatCurrency = (value: number) => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'AED',
    notation: 'compact',
    maximumFractionDigits: 1
  }).format(value);
};

const MarketInsights = () => {
  const [propertyType, setPropertyType] = useState("apartment");
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
                <SelectItem value="apartment">Apartments</SelectItem>
                <SelectItem value="villa">Villas</SelectItem>
                <SelectItem value="townhouse">Townhouses</SelectItem>
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
            <TabsTrigger value="price">Price/sqft</TabsTrigger>
            <TabsTrigger value="roi">ROI</TabsTrigger>
            <TabsTrigger value="volume">Volume</TabsTrigger>
          </TabsList>
        </Tabs>
      </div>
      
      <Card>
        <CardHeader>
          <CardTitle>Price per sqft Trend by Area (AED)</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="h-[400px]">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart
                data={pricePerSqftData}
                margin={{
                  top: 5,
                  right: 30,
                  left: 20,
                  bottom: 5,
                }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip formatter={(value) => [`AED ${value}`, 'Price per sqft']} />
                <Legend />
                <Line type="monotone" dataKey="downtown" name="Downtown" stroke="#8884d8" activeDot={{ r: 8 }} />
                <Line type="monotone" dataKey="marina" name="Marina" stroke="#82ca9d" />
                <Line type="monotone" dataKey="jvc" name="JVC" stroke="#ffc658" />
                <Line type="monotone" dataKey="hills" name="Dubai Hills" stroke="#ff7300" />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>ROI by Area (%)</CardTitle>
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
                  <XAxis dataKey="area" />
                  <YAxis domain={[0, 8]} />
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
                    name === 'volume' ? 'Transactions' : 'Value (AED)'
                  ]} />
                  <Legend />
                  <Area yAxisId="left" type="monotone" dataKey="volume" name="Transactions" stroke="#8884d8" fill="#8884d8" />
                  <Area yAxisId="right" type="monotone" dataKey="value" name="Value (AED)" stroke="#82ca9d" fill="#82ca9d" />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>
      </div>
      
      <Card>
        <CardHeader>
          <CardTitle>Market Insights & Alerts</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded">
              <h3 className="font-medium">Downtown Dubai Price Trend</h3>
              <p className="text-sm text-slate-600 mt-1">Prices in Downtown Dubai have increased by 5.3% in the last quarter, outperforming the market average of 3.8%.</p>
            </div>
            
            <div className="bg-amber-50 border-l-4 border-amber-500 p-4 rounded">
              <h3 className="font-medium">JVC Rental Yield Alert</h3>
              <p className="text-sm text-slate-600 mt-1">JVC continues to offer the highest rental yields at 7.1%, making it an attractive area for investors seeking cash flow.</p>
            </div>
            
            <div className="bg-green-50 border-l-4 border-green-500 p-4 rounded">
              <h3 className="font-medium">Market Liquidity</h3>
              <p className="text-sm text-slate-600 mt-1">Transaction volume is up 12% compared to the same period last year, indicating strong market liquidity.</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default MarketInsights;

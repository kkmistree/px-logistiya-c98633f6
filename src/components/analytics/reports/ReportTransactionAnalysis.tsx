
import React, { useState } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { BarChart, Bar, LineChart, Line, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from "recharts";

// Sample transaction analysis data
const monthlyVolumeData = [
  { month: 'Jan', sales: 16845, value: 32.5 },
  { month: 'Feb', sales: 15932, value: 30.8 },
  { month: 'Mar', sales: 17562, value: 34.2 },
  { month: 'Apr', sales: 16103, value: 31.5 },
  { month: 'May', sales: 16780, value: 33.0 },
  { month: 'Jun', sales: 18451, value: 36.2 },
  { month: 'Jul', sales: 17325, value: 34.9 },
  { month: 'Aug', sales: 16568, value: 33.2 },
  { month: 'Sep', sales: 17842, value: 35.7 },
  { month: 'Oct', sales: 18929, value: 40.9 },
  { month: 'Nov', sales: 0, value: 0 },
  { month: 'Dec', sales: 0, value: 0 }
];

const propertyTypeDistribution = [
  { name: 'Apartment', value: 68.5 },
  { name: 'Villa', value: 18.2 },
  { name: 'Townhouse', value: 11.8 },
  { name: 'Other', value: 1.5 }
];

const transactionModeData = [
  { name: 'Off-Plan', value: 71 },
  { name: 'Ready', value: 29 }
];

const bedroomDistribution = [
  { name: 'Studio', value: 17.0 },
  { name: '1 BR', value: 40.8 },
  { name: '2 BR', value: 23.7 },
  { name: '3 BR', value: 9.2 },
  { name: '4 BR', value: 8.0 },
  { name: '5+ BR', value: 1.3 }
];

const priceRangeDistribution = [
  { name: '< AED 500K', value: 24.3 },
  { name: 'AED 500K-1M', value: 34.3 },
  { name: 'AED 1M-2M', value: 25.2 },
  { name: 'AED 2M-3.5M', value: 8.2 },
  { name: 'AED 3.5M-5M', value: 4.1 },
  { name: '> AED 5M', value: 4.0 }
];

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884d8', '#d886af'];

const ReportTransactionAnalysis = () => {
  const [volumeChartType, setVolumeChartType] = useState<string>("bar");
  const [distributionView, setDistributionView] = useState<string>("propertyType");

  return (
    <div className="space-y-6">
      <Card>
        <CardContent className="p-6">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4">
            <h2 className="text-xl font-bold">Transaction Volume & Value (2025)</h2>
            <Tabs value={volumeChartType} onValueChange={setVolumeChartType}>
              <TabsList className="mt-2 sm:mt-0">
                <TabsTrigger value="bar">Bar</TabsTrigger>
                <TabsTrigger value="line">Line</TabsTrigger>
              </TabsList>
            </Tabs>
          </div>

          <div className="h-[400px]">
            {volumeChartType === "bar" ? (
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  data={monthlyVolumeData}
                  margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" />
                  <YAxis yAxisId="left" label={{ value: 'Number of Transactions', angle: -90, position: 'insideLeft' }} />
                  <YAxis yAxisId="right" orientation="right" label={{ value: 'Value (Billions AED)', angle: 90, position: 'insideRight' }} />
                  <Tooltip formatter={(value, name) => [
                    name === 'sales' ? value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") : `AED ${value}B`,
                    name === 'sales' ? 'Transactions' : 'Value'
                  ]} />
                  <Legend />
                  <Bar yAxisId="left" dataKey="sales" fill="#8884d8" name="Transactions" />
                  <Bar yAxisId="right" dataKey="value" fill="#82ca9d" name="Value (AED Billions)" />
                </BarChart>
              </ResponsiveContainer>
            ) : (
              <ResponsiveContainer width="100%" height="100%">
                <LineChart
                  data={monthlyVolumeData}
                  margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" />
                  <YAxis yAxisId="left" label={{ value: 'Number of Transactions', angle: -90, position: 'insideLeft' }} />
                  <YAxis yAxisId="right" orientation="right" label={{ value: 'Value (Billions AED)', angle: 90, position: 'insideRight' }} />
                  <Tooltip formatter={(value, name) => [
                    name === 'sales' ? value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") : `AED ${value}B`,
                    name === 'sales' ? 'Transactions' : 'Value'
                  ]} />
                  <Legend />
                  <Line yAxisId="left" type="monotone" dataKey="sales" stroke="#8884d8" name="Transactions" />
                  <Line yAxisId="right" type="monotone" dataKey="value" stroke="#82ca9d" name="Value (AED Billions)" />
                </LineChart>
              </ResponsiveContainer>
            )}
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardContent className="p-6">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4">
            <h2 className="text-xl font-bold">Transactions Distribution</h2>
            <div className="mt-2 sm:mt-0 flex space-x-2">
              <Button 
                variant={distributionView === "propertyType" ? "default" : "outline"} 
                size="sm"
                onClick={() => setDistributionView("propertyType")}
              >
                Property Type
              </Button>
              <Button 
                variant={distributionView === "bedroom" ? "default" : "outline"} 
                size="sm"
                onClick={() => setDistributionView("bedroom")}
              >
                Bedrooms
              </Button>
              <Button 
                variant={distributionView === "priceRange" ? "default" : "outline"} 
                size="sm"
                onClick={() => setDistributionView("priceRange")}
              >
                Price Range
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={distributionView === "propertyType" 
                      ? propertyTypeDistribution 
                      : distributionView === "bedroom" 
                        ? bedroomDistribution 
                        : priceRangeDistribution}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(1)}%`}
                    outerRadius={100}
                    fill="#8884d8"
                    dataKey="value"
                  >
                    {(distributionView === "propertyType" 
                      ? propertyTypeDistribution 
                      : distributionView === "bedroom" 
                        ? bedroomDistribution 
                        : priceRangeDistribution).map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip formatter={(value) => [`${value}%`, '']} />
                </PieChart>
              </ResponsiveContainer>
            </div>

            <div className="h-[300px]">
              <h3 className="text-lg font-medium mb-2">Transaction Mode</h3>
              <ResponsiveContainer width="100%" height="90%">
                <PieChart>
                  <Pie
                    data={transactionModeData}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(1)}%`}
                    outerRadius={100}
                    fill="#8884d8"
                    dataKey="value"
                  >
                    {transactionModeData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip formatter={(value) => [`${value}%`, '']} />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardContent className="p-6">
          <h2 className="text-xl font-bold mb-4">Transaction Highlights</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded">
              <h3 className="font-medium">Record Month</h3>
              <p className="text-2xl font-bold">18,929</p>
              <p className="text-sm text-slate-600">Transactions in October 2025</p>
              <Badge variant="success" className="mt-2">+14.3% vs Previous Month</Badge>
            </div>
            
            <div className="bg-green-50 border-l-4 border-green-500 p-4 rounded">
              <h3 className="font-medium">Transaction Value</h3>
              <p className="text-2xl font-bold">AED 40.9B</p>
              <p className="text-sm text-slate-600">Total Value in October 2025</p>
              <Badge variant="success" className="mt-2">+14.4% vs Previous Month</Badge>
            </div>
            
            <div className="bg-amber-50 border-l-4 border-amber-500 p-4 rounded">
              <h3 className="font-medium">Off-Plan Sales</h3>
              <p className="text-2xl font-bold">13,467</p>
              <p className="text-sm text-slate-600">71% of Total Transactions</p>
              <Badge variant="success" className="mt-2">+18.4% vs Previous Month</Badge>
            </div>
            
            <div className="bg-purple-50 border-l-4 border-purple-500 p-4 rounded">
              <h3 className="font-medium">YTD Growth</h3>
              <p className="text-2xl font-bold">+75.8%</p>
              <p className="text-sm text-slate-600">vs October 2024</p>
              <Badge variant="success" className="mt-2">Historical High</Badge>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ReportTransactionAnalysis;

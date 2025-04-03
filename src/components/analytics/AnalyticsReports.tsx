
import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import ReportGenerator from "./ReportGenerator";
import { BarChart, Bar, LineChart, Line, AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend, PieChart, Pie, Cell } from "recharts";

// Sample data for visualizations
const monthlyData = [
  { month: 'Jan', sales: 120, listings: 145 },
  { month: 'Feb', sales: 132, listings: 167 },
  { month: 'Mar', sales: 101, listings: 184 },
  { month: 'Apr', sales: 134, listings: 156 },
  { month: 'May', sales: 90, listings: 142 },
  { month: 'Jun', sales: 230, listings: 190 },
  { month: 'Jul', sales: 220, listings: 194 },
  { month: 'Aug', sales: 218, listings: 160 },
  { month: 'Sep', sales: 170, listings: 180 },
  { month: 'Oct', sales: 256, listings: 199 },
  { month: 'Nov', sales: 265, listings: 195 },
  { month: 'Dec', sales: 228, listings: 160 }
];

const quarterlyData = [
  { quarter: 'Q1 2025', transactions: 353, value: 892.5 },
  { quarter: 'Q2 2025', transactions: 454, value: 1210.7 },
  { quarter: 'Q3 2025', transactions: 608, value: 1640.2 },
  { quarter: 'Q4 2025', transactions: 749, value: 2105.8 }
];

const areaData = [
  { name: 'Downtown', value: 32 },
  { name: 'Dubai Marina', value: 25 },
  { name: 'Palm Jumeirah', value: 15 },
  { name: 'JVC', value: 18 },
  { name: 'Business Bay', value: 10 }
];

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884d8'];

const recentReports = [
  { 
    id: 1, 
    title: 'Monthly Market Report - April 2025', 
    type: 'Market Performance', 
    date: 'Apr 3, 2025',
    status: 'completed'
  },
  { 
    id: 2, 
    title: 'Quarterly Market Analysis - Q1 2025', 
    type: 'Transaction Analysis', 
    date: 'Apr 2, 2025',
    status: 'completed'
  },
  { 
    id: 3, 
    title: 'Broker Performance Summary - March 2025', 
    type: 'Broker Performance', 
    date: 'Apr 1, 2025',
    status: 'completed'
  },
  { 
    id: 4, 
    title: 'Area Comparison Report - Dubai Marina vs Downtown', 
    type: 'Areas Comparison', 
    date: 'Mar 28, 2025',
    status: 'completed'
  },
  { 
    id: 5, 
    title: 'Yearly Market Review - 2024', 
    type: 'Market Performance', 
    date: 'Mar 15, 2025',
    status: 'completed'
  }
];

const AnalyticsReports = () => {
  const [activeTab, setActiveTab] = useState("create");

  return (
    <div className="space-y-6">
      <Tabs defaultValue="create" onValueChange={setActiveTab} className="w-full">
        <TabsList className="grid grid-cols-4 mb-6">
          <TabsTrigger value="create">Create Report</TabsTrigger>
          <TabsTrigger value="recent">Recent Reports</TabsTrigger>
          <TabsTrigger value="templates">Report Templates</TabsTrigger>
          <TabsTrigger value="scheduled">Scheduled Reports</TabsTrigger>
        </TabsList>
        
        <TabsContent value="create" className="space-y-6">
          <ReportGenerator />
          
          <Card>
            <CardHeader>
              <CardTitle>Report Metrics</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="space-y-2">
                  <h3 className="text-sm font-medium text-gray-500">Transaction Volume (Monthly)</h3>
                  <div className="h-60">
                    <ResponsiveContainer width="100%" height="100%">
                      <BarChart data={monthlyData}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="month" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Bar dataKey="sales" fill="#8884d8" name="Sales" />
                      </BarChart>
                    </ResponsiveContainer>
                  </div>
                </div>
                
                <div className="space-y-2">
                  <h3 className="text-sm font-medium text-gray-500">Transaction Value (Quarterly)</h3>
                  <div className="h-60">
                    <ResponsiveContainer width="100%" height="100%">
                      <LineChart data={quarterlyData}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="quarter" />
                        <YAxis yAxisId="left" />
                        <Tooltip />
                        <Legend />
                        <Line yAxisId="left" type="monotone" dataKey="value" stroke="#8884d8" name="Value (AED Millions)" />
                      </LineChart>
                    </ResponsiveContainer>
                  </div>
                </div>
                
                <div className="space-y-2">
                  <h3 className="text-sm font-medium text-gray-500">Market Share by Area</h3>
                  <div className="h-60">
                    <ResponsiveContainer width="100%" height="100%">
                      <PieChart>
                        <Pie
                          data={areaData}
                          cx="50%"
                          cy="50%"
                          labelLine={false}
                          outerRadius={80}
                          fill="#8884d8"
                          dataKey="value"
                          label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                        >
                          {areaData.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                          ))}
                        </Pie>
                        <Tooltip />
                      </PieChart>
                    </ResponsiveContainer>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="recent">
          <Card>
            <CardHeader>
              <CardTitle>Recent Reports</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentReports.map((report) => (
                  <div key={report.id} className="flex items-center justify-between p-4 border rounded-lg">
                    <div>
                      <h3 className="font-medium">{report.title}</h3>
                      <div className="flex items-center space-x-2 mt-1">
                        <Badge variant="secondary">{report.type}</Badge>
                        <span className="text-sm text-gray-500">Generated: {report.date}</span>
                      </div>
                    </div>
                    <div className="flex space-x-2">
                      <Button size="sm" variant="outline">View</Button>
                      <Button size="sm">Download</Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="templates">
          <Card>
            <CardHeader>
              <CardTitle>Report Templates</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <Card className="bg-white shadow-sm border">
                  <CardContent className="p-6">
                    <div className="mb-4">
                      <h3 className="font-bold text-lg">Market Summary</h3>
                      <p className="text-sm text-gray-500">Key market insights and trends</p>
                    </div>
                    <div className="space-y-2 text-sm">
                      <div className="flex items-center">
                        <span className="w-3 h-3 rounded-full bg-blue-500 mr-2"></span>
                        <span>Transaction volume</span>
                      </div>
                      <div className="flex items-center">
                        <span className="w-3 h-3 rounded-full bg-green-500 mr-2"></span>
                        <span>Price trends</span>
                      </div>
                      <div className="flex items-center">
                        <span className="w-3 h-3 rounded-full bg-purple-500 mr-2"></span>
                        <span>Area performance</span>
                      </div>
                      <div className="flex items-center">
                        <span className="w-3 h-3 rounded-full bg-yellow-500 mr-2"></span>
                        <span>Property types</span>
                      </div>
                    </div>
                    <Button className="w-full mt-4">Use Template</Button>
                  </CardContent>
                </Card>
                
                <Card className="bg-white shadow-sm border">
                  <CardContent className="p-6">
                    <div className="mb-4">
                      <h3 className="font-bold text-lg">Broker Performance</h3>
                      <p className="text-sm text-gray-500">Individual and team analytics</p>
                    </div>
                    <div className="space-y-2 text-sm">
                      <div className="flex items-center">
                        <span className="w-3 h-3 rounded-full bg-blue-500 mr-2"></span>
                        <span>Closed deals</span>
                      </div>
                      <div className="flex items-center">
                        <span className="w-3 h-3 rounded-full bg-green-500 mr-2"></span>
                        <span>Commission earned</span>
                      </div>
                      <div className="flex items-center">
                        <span className="w-3 h-3 rounded-full bg-purple-500 mr-2"></span>
                        <span>Listings managed</span>
                      </div>
                      <div className="flex items-center">
                        <span className="w-3 h-3 rounded-full bg-yellow-500 mr-2"></span>
                        <span>Client satisfaction</span>
                      </div>
                    </div>
                    <Button className="w-full mt-4">Use Template</Button>
                  </CardContent>
                </Card>
                
                <Card className="bg-white shadow-sm border">
                  <CardContent className="p-6">
                    <div className="mb-4">
                      <h3 className="font-bold text-lg">Detailed Area Analysis</h3>
                      <p className="text-sm text-gray-500">Deep dive into specific areas</p>
                    </div>
                    <div className="space-y-2 text-sm">
                      <div className="flex items-center">
                        <span className="w-3 h-3 rounded-full bg-blue-500 mr-2"></span>
                        <span>Price per sqft</span>
                      </div>
                      <div className="flex items-center">
                        <span className="w-3 h-3 rounded-full bg-green-500 mr-2"></span>
                        <span>Transaction volume</span>
                      </div>
                      <div className="flex items-center">
                        <span className="w-3 h-3 rounded-full bg-purple-500 mr-2"></span>
                        <span>Rental yields</span>
                      </div>
                      <div className="flex items-center">
                        <span className="w-3 h-3 rounded-full bg-yellow-500 mr-2"></span>
                        <span>Off-plan vs ready</span>
                      </div>
                    </div>
                    <Button className="w-full mt-4">Use Template</Button>
                  </CardContent>
                </Card>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="scheduled">
          <Card>
            <CardHeader>
              <CardTitle>Scheduled Reports</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 border rounded-lg">
                  <div>
                    <h3 className="font-medium">Weekly Performance Summary</h3>
                    <div className="flex items-center space-x-2 mt-1">
                      <Badge variant="outline">Weekly</Badge>
                      <span className="text-sm text-gray-500">Every Monday at 9:00 AM</span>
                    </div>
                  </div>
                  <div className="flex space-x-2">
                    <Button size="sm" variant="outline">Edit</Button>
                    <Button size="sm" variant="destructive">Disable</Button>
                  </div>
                </div>
                
                <div className="flex items-center justify-between p-4 border rounded-lg">
                  <div>
                    <h3 className="font-medium">Monthly Market Overview</h3>
                    <div className="flex items-center space-x-2 mt-1">
                      <Badge variant="outline">Monthly</Badge>
                      <span className="text-sm text-gray-500">1st day of each month</span>
                    </div>
                  </div>
                  <div className="flex space-x-2">
                    <Button size="sm" variant="outline">Edit</Button>
                    <Button size="sm" variant="destructive">Disable</Button>
                  </div>
                </div>
                
                <div className="flex items-center justify-between p-4 border rounded-lg">
                  <div>
                    <h3 className="font-medium">Quarterly Performance Assessment</h3>
                    <div className="flex items-center space-x-2 mt-1">
                      <Badge variant="outline">Quarterly</Badge>
                      <span className="text-sm text-gray-500">Last day of each quarter</span>
                    </div>
                  </div>
                  <div className="flex space-x-2">
                    <Button size="sm" variant="outline">Edit</Button>
                    <Button size="sm" variant="destructive">Disable</Button>
                  </div>
                </div>
                
                <div className="flex items-center justify-between p-4 border rounded-lg">
                  <div>
                    <h3 className="font-medium">Annual Market Report</h3>
                    <div className="flex items-center space-x-2 mt-1">
                      <Badge variant="outline">Yearly</Badge>
                      <span className="text-sm text-gray-500">January 15th each year</span>
                    </div>
                  </div>
                  <div className="flex space-x-2">
                    <Button size="sm" variant="outline">Edit</Button>
                    <Button size="sm" variant="destructive">Disable</Button>
                  </div>
                </div>
              </div>
              
              <div className="mt-6 flex justify-end">
                <Button>
                  Create New Scheduled Report
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default AnalyticsReports;

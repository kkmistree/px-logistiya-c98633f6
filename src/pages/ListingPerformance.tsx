
import React from "react";
import AppShell from "@/components/layout/AppShell";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { BarChart, Bar, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from "recharts";
import { ArrowUp, ArrowDown, Eye, Save } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const ListingPerformance = () => {
  // Saudi industrial listings performance data
  const viewsData = [
    { month: 'Jan', warehouses: 1240, factories: 980, land: 720, logistics: 1080 },
    { month: 'Feb', warehouses: 1350, factories: 1050, land: 690, logistics: 1250 },
    { month: 'Mar', warehouses: 1480, factories: 1120, land: 780, logistics: 1380 },
    { month: 'Apr', warehouses: 1520, factories: 1280, land: 850, logistics: 1420 },
    { month: 'May', warehouses: 1640, factories: 1350, land: 920, logistics: 1510 },
    { month: 'Jun', warehouses: 1580, factories: 1280, land: 880, logistics: 1450 },
  ];

  const inquiriesData = [
    { month: 'Jan', warehouses: 78, factories: 65, land: 48, logistics: 72 },
    { month: 'Feb', warehouses: 85, factories: 68, land: 52, logistics: 78 },
    { month: 'Mar', warehouses: 92, factories: 75, land: 58, logistics: 84 },
    { month: 'Apr', warehouses: 96, factories: 82, land: 63, logistics: 90 },
    { month: 'May', warehouses: 108, factories: 88, land: 68, logistics: 98 },
    { month: 'Jun', warehouses: 102, factories: 84, land: 64, logistics: 94 },
  ];

  // Top performing listings (Saudi industrial properties)
  const topListings = [
    { 
      id: 1,
      title: "Logistics Warehouse in Riyadh Industrial City",
      type: "Warehouse", 
      location: "Riyadh Industrial City",
      price: "SAR 18,500,000", 
      views: 243, 
      inquiries: 18, 
      changeWeek: "+12%",
      trend: "up"
    },
    { 
      id: 2,
      title: "Factory Complex in Jeddah Industrial Zone",
      type: "Factory", 
      location: "Jeddah Industrial City",
      price: "SAR 22,450,000", 
      views: 187, 
      inquiries: 15, 
      changeWeek: "+8%",
      trend: "up"
    },
    { 
      id: 3,
      title: "Industrial Land in Dammam 2nd Industrial City",
      type: "Land", 
      location: "Dammam Industrial City",
      price: "SAR 12,100,000", 
      views: 165, 
      inquiries: 12, 
      changeWeek: "+5%",
      trend: "up"
    },
    { 
      id: 4,
      title: "Manufacturing Facility in Jubail Industrial City",
      type: "Factory", 
      location: "Jubail Industrial City",
      price: "SAR 35,400,000", 
      views: 142, 
      inquiries: 9, 
      changeWeek: "-2%",
      trend: "down"
    },
    { 
      id: 5,
      title: "Logistics Center in KAEC Industrial Valley",
      type: "Logistics", 
      location: "KAEC Industrial Valley",
      price: "SAR 20,850,000", 
      views: 138, 
      inquiries: 8, 
      changeWeek: "+4%",
      trend: "up"
    }
  ];

  return (
    <AppShell>
      <div className="space-y-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div>
            <h1 className="text-2xl font-bold text-estate-primary">Listing Performance</h1>
            <p className="text-slate-500">Analyze and optimize your industrial property listings in Saudi Arabia</p>
          </div>
          
          <div className="flex items-center gap-3">
            <Select defaultValue="30days">
              <SelectTrigger className="w-[140px]">
                <SelectValue placeholder="Time period" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="7days">Last 7 days</SelectItem>
                <SelectItem value="30days">Last 30 days</SelectItem>
                <SelectItem value="90days">Last 90 days</SelectItem>
                <SelectItem value="year">Last year</SelectItem>
              </SelectContent>
            </Select>
            
            <Select defaultValue="all">
              <SelectTrigger className="w-[160px]">
                <SelectValue placeholder="Property Type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Properties</SelectItem>
                <SelectItem value="warehouse">Warehouses</SelectItem>
                <SelectItem value="factory">Factories</SelectItem>
                <SelectItem value="land">Industrial Land</SelectItem>
                <SelectItem value="logistics">Logistics Centers</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <Card className="bg-white">
            <CardContent className="p-4">
              <div className="flex flex-col">
                <span className="text-sm text-slate-500">Total Views</span>
                <span className="text-2xl font-semibold">8,742</span>
                <div className="flex items-center mt-1 text-green-500 text-xs">
                  <ArrowUp size={14} />
                  <span>+18% from last month</span>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card className="bg-white">
            <CardContent className="p-4">
              <div className="flex flex-col">
                <span className="text-sm text-slate-500">Inquiries</span>
                <span className="text-2xl font-semibold">584</span>
                <div className="flex items-center mt-1 text-green-500 text-xs">
                  <ArrowUp size={14} />
                  <span>+14% from last month</span>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card className="bg-white">
            <CardContent className="p-4">
              <div className="flex flex-col">
                <span className="text-sm text-slate-500">Conversion Rate</span>
                <span className="text-2xl font-semibold">6.7%</span>
                <div className="flex items-center mt-1 text-green-500 text-xs">
                  <ArrowUp size={14} />
                  <span>+0.8% from last month</span>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card className="bg-white">
            <CardContent className="p-4">
              <div className="flex flex-col">
                <span className="text-sm text-slate-500">Avg. Time on Market</span>
                <span className="text-2xl font-semibold">42 days</span>
                <div className="flex items-center mt-1 text-red-500 text-xs">
                  <ArrowDown size={14} />
                  <span>-5 days from last month</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
        
        <Tabs defaultValue="views">
          <TabsList>
            <TabsTrigger value="views">Page Views</TabsTrigger>
            <TabsTrigger value="inquiries">Inquiries</TabsTrigger>
          </TabsList>
          
          <TabsContent value="views" className="mt-4">
            <Card>
              <CardHeader>
                <CardTitle>Page Views by Property Type</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="h-[400px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart
                      data={viewsData}
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
                      <Tooltip />
                      <Legend />
                      <Line type="monotone" dataKey="warehouses" name="Warehouses" stroke="#8884d8" />
                      <Line type="monotone" dataKey="factories" name="Factories" stroke="#82ca9d" />
                      <Line type="monotone" dataKey="land" name="Industrial Land" stroke="#ffc658" />
                      <Line type="monotone" dataKey="logistics" name="Logistics Centers" stroke="#ff7300" />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="inquiries" className="mt-4">
            <Card>
              <CardHeader>
                <CardTitle>Inquiries by Property Type</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="h-[400px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart
                      data={inquiriesData}
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
                      <Tooltip />
                      <Legend />
                      <Bar dataKey="warehouses" name="Warehouses" fill="#8884d8" />
                      <Bar dataKey="factories" name="Factories" fill="#82ca9d" />
                      <Bar dataKey="land" name="Industrial Land" fill="#ffc658" />
                      <Bar dataKey="logistics" name="Logistics Centers" fill="#ff7300" />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
        
        <Card>
          <CardHeader>
            <CardTitle>Top Performing Listings</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b">
                    <th className="text-left pb-3 font-medium text-slate-500">Property</th>
                    <th className="text-left pb-3 font-medium text-slate-500">Type</th>
                    <th className="text-left pb-3 font-medium text-slate-500">Location</th>
                    <th className="text-left pb-3 font-medium text-slate-500">Price</th>
                    <th className="text-left pb-3 font-medium text-slate-500">Views</th>
                    <th className="text-left pb-3 font-medium text-slate-500">Inquiries</th>
                    <th className="text-left pb-3 font-medium text-slate-500">Weekly Change</th>
                  </tr>
                </thead>
                <tbody>
                  {topListings.map((listing) => (
                    <tr key={listing.id} className="border-b hover:bg-slate-50">
                      <td className="py-3">
                        <div className="font-medium">{listing.title}</div>
                      </td>
                      <td className="py-3">{listing.type}</td>
                      <td className="py-3">{listing.location}</td>
                      <td className="py-3">{listing.price}</td>
                      <td className="py-3">
                        <div className="flex items-center gap-1">
                          <Eye size={14} className="text-slate-500" />
                          <span>{listing.views}</span>
                        </div>
                      </td>
                      <td className="py-3">
                        <div className="flex items-center gap-1">
                          <Save size={14} className="text-slate-500" />
                          <span>{listing.inquiries}</span>
                        </div>
                      </td>
                      <td className="py-3">
                        <Badge className={listing.trend === "up" ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"}>
                          {listing.changeWeek}
                        </Badge>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Card>
            <CardHeader>
              <CardTitle>Listing Optimization Insights</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded">
                <h3 className="font-medium">Add More Facility Photos</h3>
                <p className="text-sm text-slate-600 mt-1">Listings with 8+ photos get 32% more views than those with fewer images.</p>
              </div>
              
              <div className="bg-green-50 border-l-4 border-green-500 p-4 rounded">
                <h3 className="font-medium">Add Industrial Certifications</h3>
                <p className="text-sm text-slate-600 mt-1">Properties with MODON or Royal Commission certifications receive 27% more inquiries.</p>
              </div>
              
              <div className="bg-amber-50 border-l-4 border-amber-500 p-4 rounded">
                <h3 className="font-medium">Update Pricing Strategy</h3>
                <p className="text-sm text-slate-600 mt-1">Riyadh Industrial City listings priced between SAR 1,800-2,000/sqm sell 24% faster.</p>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>Area Performance</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <div>
                    <div className="font-medium">Riyadh Industrial City</div>
                    <div className="text-sm text-slate-500">Highest conversion rate</div>
                  </div>
                  <Badge className="bg-green-100 text-green-800">8.2%</Badge>
                </div>
                
                <div className="flex justify-between items-center">
                  <div>
                    <div className="font-medium">Jubail Industrial City</div>
                    <div className="text-sm text-slate-500">Highest avg. price/sqm</div>
                  </div>
                  <Badge className="bg-blue-100 text-blue-800">SAR 2,350</Badge>
                </div>
                
                <div className="flex justify-between items-center">
                  <div>
                    <div className="font-medium">KAEC Industrial Valley</div>
                    <div className="text-sm text-slate-500">Fastest growing inquiries</div>
                  </div>
                  <Badge className="bg-purple-100 text-purple-800">+35%</Badge>
                </div>
                
                <div className="flex justify-between items-center">
                  <div>
                    <div className="font-medium">Dammam 2nd Industrial City</div>
                    <div className="text-sm text-slate-500">Best value for logistics</div>
                  </div>
                  <Badge className="bg-amber-100 text-amber-800">SAR 1,720/sqm</Badge>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </AppShell>
  );
};

export default ListingPerformance;

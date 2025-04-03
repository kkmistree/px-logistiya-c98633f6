
import React, { useState } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { LineChart, Line, AreaChart, Area, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from "recharts";

// Sample price analysis data
const monthlyPriceData = [
  { month: 'Jan', villa: 2973, apartment: 1218, townhouse: 1653 },
  { month: 'Feb', villa: 2981, apartment: 1225, townhouse: 1664 },
  { month: 'Mar', villa: 2992, apartment: 1232, townhouse: 1671 },
  { month: 'Apr', villa: 3005, apartment: 1238, townhouse: 1680 },
  { month: 'May', villa: 3019, apartment: 1245, townhouse: 1689 },
  { month: 'Jun', villa: 3032, apartment: 1252, townhouse: 1698 },
  { month: 'Jul', villa: 3045, apartment: 1258, townhouse: 1707 },
  { month: 'Aug', villa: 3057, apartment: 1265, townhouse: 1716 },
  { month: 'Sep', villa: 3069, apartment: 1271, townhouse: 1724 },
  { month: 'Oct', villa: 3080, apartment: 1277, townhouse: 1732 },
  { month: 'Nov', villa: 3090, apartment: 1283, townhouse: 1740 },
  { month: 'Dec', villa: 3100, apartment: 1290, townhouse: 1748 }
];

const propertyTypeData = [
  { type: "Apartment", medianPrice: "AED 1,218,230", pricePerSqft: "AED 979", yoyChange: "+5.2%", trend: "up" },
  { type: "Villa", medianPrice: "AED 2,973,793", pricePerSqft: "AED 1,502", yoyChange: "+8.7%", trend: "up" },
  { type: "Townhouse", medianPrice: "AED 1,653,450", pricePerSqft: "AED 1,103", yoyChange: "+6.4%", trend: "up" },
  { type: "Penthouse", medianPrice: "AED 5,821,600", pricePerSqft: "AED 2,235", yoyChange: "+12.1%", trend: "up" },
  { type: "Studio", medianPrice: "AED 624,850", pricePerSqft: "AED 1,150", yoyChange: "+3.8%", trend: "up" }
];

const areaAnalysisData = [
  { area: "Dubai Marina", apartment: 1535, villa: null, townhouse: null, change: "+7.2%" },
  { area: "Downtown Dubai", apartment: 2245, villa: null, townhouse: null, change: "+9.8%" },
  { area: "Palm Jumeirah", apartment: 2850, villa: 6475, townhouse: null, change: "+11.2%" },
  { area: "JVC", apartment: 892, villa: null, townhouse: 1150, change: "+4.3%" },
  { area: "Business Bay", apartment: 1420, villa: null, townhouse: null, change: "+6.7%" },
  { area: "Arabian Ranches", apartment: null, villa: 1375, townhouse: 1245, change: "+5.9%" }
];

const ReportPriceAnalysis = () => {
  const [chartType, setChartType] = useState("line");

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 gap-6">
        <Card>
          <CardContent className="p-6">
            <h2 className="text-xl font-bold mb-4">Property Price Trends (AED/sqft)</h2>
            
            <Tabs value={chartType} onValueChange={setChartType} className="mb-4">
              <TabsList>
                <TabsTrigger value="line">Line</TabsTrigger>
                <TabsTrigger value="area">Area</TabsTrigger>
                <TabsTrigger value="bar">Bar</TabsTrigger>
              </TabsList>
            </Tabs>
            
            <div className="h-[400px]">
              {chartType === "line" && (
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={monthlyPriceData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip formatter={(value) => [`AED ${value}/sqft`, '']} />
                    <Legend />
                    <Line type="monotone" dataKey="villa" stroke="#8884d8" name="Villa" />
                    <Line type="monotone" dataKey="apartment" stroke="#82ca9d" name="Apartment" />
                    <Line type="monotone" dataKey="townhouse" stroke="#ffc658" name="Townhouse" />
                  </LineChart>
                </ResponsiveContainer>
              )}
              
              {chartType === "area" && (
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={monthlyPriceData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip formatter={(value) => [`AED ${value}/sqft`, '']} />
                    <Legend />
                    <Area type="monotone" dataKey="villa" stackId="1" stroke="#8884d8" fill="#8884d8" name="Villa" />
                    <Area type="monotone" dataKey="apartment" stackId="2" stroke="#82ca9d" fill="#82ca9d" name="Apartment" />
                    <Area type="monotone" dataKey="townhouse" stackId="3" stroke="#ffc658" fill="#ffc658" name="Townhouse" />
                  </AreaChart>
                </ResponsiveContainer>
              )}
              
              {chartType === "bar" && (
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={monthlyPriceData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip formatter={(value) => [`AED ${value}/sqft`, '']} />
                    <Legend />
                    <Bar dataKey="villa" fill="#8884d8" name="Villa" />
                    <Bar dataKey="apartment" fill="#82ca9d" name="Apartment" />
                    <Bar dataKey="townhouse" fill="#ffc658" name="Townhouse" />
                  </BarChart>
                </ResponsiveContainer>
              )}
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-6">
            <h2 className="text-xl font-bold mb-4">Property Type Analysis (2025)</h2>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Property Type</TableHead>
                  <TableHead>Median Price</TableHead>
                  <TableHead>Price per Sqft</TableHead>
                  <TableHead className="text-right">YoY Change</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {propertyTypeData.map((property, index) => (
                  <TableRow key={index}>
                    <TableCell className="font-medium">{property.type}</TableCell>
                    <TableCell>{property.medianPrice}</TableCell>
                    <TableCell>{property.pricePerSqft}</TableCell>
                    <TableCell className="text-right">
                      <Badge variant={property.trend === "up" ? "success" : "destructive"}>
                        {property.yoyChange}
                      </Badge>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-6">
            <h2 className="text-xl font-bold mb-4">Area Price Analysis (AED/sqft)</h2>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Area</TableHead>
                  <TableHead>Apartment</TableHead>
                  <TableHead>Villa</TableHead>
                  <TableHead>Townhouse</TableHead>
                  <TableHead className="text-right">YoY Change</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {areaAnalysisData.map((area, index) => (
                  <TableRow key={index}>
                    <TableCell className="font-medium">{area.area}</TableCell>
                    <TableCell>{area.apartment ? `AED ${area.apartment}` : "-"}</TableCell>
                    <TableCell>{area.villa ? `AED ${area.villa}` : "-"}</TableCell>
                    <TableCell>{area.townhouse ? `AED ${area.townhouse}` : "-"}</TableCell>
                    <TableCell className="text-right">
                      <Badge variant="success">
                        {area.change}
                      </Badge>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default ReportPriceAnalysis;

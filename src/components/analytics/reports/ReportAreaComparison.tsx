
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { BarChart, Bar, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar } from "recharts";

// Sample area comparison data
const areaPerformanceData = [
  { 
    area: "Dubai Marina", 
    transactions: 1784, 
    avgPrice: 1535, 
    yoyPrice: 7.2, 
    yield: 5.8, 
    offPlanPercentage: 65, 
    readyPercentage: 35,
    avgRental: 89000
  },
  { 
    area: "Downtown Dubai", 
    transactions: 1529, 
    avgPrice: 2245, 
    yoyPrice: 9.8, 
    yield: 4.9, 
    offPlanPercentage: 58, 
    readyPercentage: 42,
    avgRental: 110000
  },
  { 
    area: "Palm Jumeirah", 
    transactions: 957, 
    avgPrice: 3540, 
    yoyPrice: 11.2, 
    yield: 4.1, 
    offPlanPercentage: 45, 
    readyPercentage: 55,
    avgRental: 145000
  },
  { 
    area: "JVC", 
    transactions: 2312, 
    avgPrice: 892, 
    yoyPrice: 4.3, 
    yield: 7.1, 
    offPlanPercentage: 72, 
    readyPercentage: 28,
    avgRental: 63500
  },
  { 
    area: "Business Bay", 
    transactions: 1648, 
    avgPrice: 1420, 
    yoyPrice: 6.7, 
    yield: 5.6, 
    offPlanPercentage: 62, 
    readyPercentage: 38,
    avgRental: 79500
  },
  { 
    area: "Dubai Hills Estate", 
    transactions: 1103, 
    avgPrice: 1680, 
    yoyPrice: 8.3, 
    yield: 5.1, 
    offPlanPercentage: 55, 
    readyPercentage: 45,
    avgRental: 85600
  }
];

const priceComparisonData = [
  { month: 'Jan', marina: 1480, downtown: 2180, palm: 3420, jvc: 865, bay: 1380 },
  { month: 'Feb', marina: 1490, downtown: 2195, palm: 3445, jvc: 870, bay: 1390 },
  { month: 'Mar', marina: 1495, downtown: 2205, palm: 3465, jvc: 875, bay: 1395 },
  { month: 'Apr', marina: 1500, downtown: 2215, palm: 3480, jvc: 880, bay: 1400 },
  { month: 'May', marina: 1505, downtown: 2220, palm: 3490, jvc: 882, bay: 1405 },
  { month: 'Jun', marina: 1510, downtown: 2225, palm: 3500, jvc: 885, bay: 1410 },
  { month: 'Jul', marina: 1515, downtown: 2230, palm: 3510, jvc: 887, bay: 1412 },
  { month: 'Aug', marina: 1520, downtown: 2235, palm: 3520, jvc: 890, bay: 1415 },
  { month: 'Sep', marina: 1525, downtown: 2240, palm: 3530, jvc: 892, bay: 1417 },
  { month: 'Oct', marina: 1535, downtown: 2245, palm: 3540, jvc: 895, bay: 1420 }
];

const areaRadarData = [
  {
    area: "Price Growth",
    "Dubai Marina": 72,
    "Downtown Dubai": 98,
    "Palm Jumeirah": 112,
    "JVC": 43,
    "Business Bay": 67
  },
  {
    area: "Rental Yield",
    "Dubai Marina": 58,
    "Downtown Dubai": 49,
    "Palm Jumeirah": 41,
    "JVC": 71,
    "Business Bay": 56
  },
  {
    area: "Transaction Volume",
    "Dubai Marina": 78,
    "Downtown Dubai": 65,
    "Palm Jumeirah": 42,
    "JVC": 100,
    "Business Bay": 72
  },
  {
    area: "Off-Plan Demand",
    "Dubai Marina": 65,
    "Downtown Dubai": 58,
    "Palm Jumeirah": 45,
    "JVC": 72,
    "Business Bay": 62
  },
  {
    area: "Price/sqft",
    "Dubai Marina": 43,
    "Downtown Dubai": 63,
    "Palm Jumeirah": 100,
    "JVC": 25,
    "Business Bay": 40
  }
];

const ReportAreaComparison = () => {
  return (
    <div className="space-y-6">
      <Card>
        <CardContent className="p-6">
          <h2 className="text-xl font-bold mb-4">Area Performance Comparison (AED/sqft)</h2>
          <div className="h-[400px]">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={priceComparisonData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip formatter={(value) => [`AED ${value}/sqft`, '']} />
                <Legend />
                <Line type="monotone" dataKey="marina" name="Dubai Marina" stroke="#8884d8" />
                <Line type="monotone" dataKey="downtown" name="Downtown Dubai" stroke="#82ca9d" />
                <Line type="monotone" dataKey="palm" name="Palm Jumeirah" stroke="#ffc658" />
                <Line type="monotone" dataKey="jvc" name="JVC" stroke="#ff8042" />
                <Line type="monotone" dataKey="bay" name="Business Bay" stroke="#0088fe" />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>
      
      <Card>
        <CardContent className="p-6">
          <h2 className="text-xl font-bold mb-4">Area Metrics Comparison</h2>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Area</TableHead>
                <TableHead>Transactions</TableHead>
                <TableHead>Avg Price/sqft</TableHead>
                <TableHead>YoY Price Change</TableHead>
                <TableHead>Rental Yield</TableHead>
                <TableHead>Avg. Rental (AED/year)</TableHead>
                <TableHead>Off-Plan %</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {areaPerformanceData.map((area, index) => (
                <TableRow key={index}>
                  <TableCell className="font-medium">{area.area}</TableCell>
                  <TableCell>{area.transactions.toLocaleString()}</TableCell>
                  <TableCell>AED {area.avgPrice}</TableCell>
                  <TableCell>
                    <Badge variant="success">+{area.yoyPrice}%</Badge>
                  </TableCell>
                  <TableCell>{area.yield}%</TableCell>
                  <TableCell>AED {area.avgRental.toLocaleString()}</TableCell>
                  <TableCell>{area.offPlanPercentage}%</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardContent className="p-6">
            <h2 className="text-xl font-bold mb-4">Top 5 Areas by Transaction Volume</h2>
            <div className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  data={areaPerformanceData.slice(0, 5)}
                  layout="vertical"
                  margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis type="number" />
                  <YAxis dataKey="area" type="category" width={100} />
                  <Tooltip formatter={(value) => [value.toLocaleString(), 'Transactions']} />
                  <Bar dataKey="transactions" fill="#8884d8" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-6">
            <h2 className="text-xl font-bold mb-4">Top 5 Areas by Price Growth</h2>
            <div className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  data={[...areaPerformanceData].sort((a, b) => b.yoyPrice - a.yoyPrice).slice(0, 5)}
                  layout="vertical"
                  margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis type="number" />
                  <YAxis dataKey="area" type="category" width={100} />
                  <Tooltip formatter={(value) => [`${value}%`, 'YoY Price Growth']} />
                  <Bar dataKey="yoyPrice" fill="#82ca9d" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>
      </div>
      
      <Card>
        <CardContent className="p-6">
          <h2 className="text-xl font-bold mb-4">Area Performance Radar</h2>
          <div className="h-[400px]">
            <ResponsiveContainer width="100%" height="100%">
              <RadarChart outerRadius={150} data={areaRadarData}>
                <PolarGrid />
                <PolarAngleAxis dataKey="area" />
                <PolarRadiusAxis angle={30} domain={[0, 100]} />
                <Radar name="Dubai Marina" dataKey="Dubai Marina" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
                <Radar name="Downtown Dubai" dataKey="Downtown Dubai" stroke="#82ca9d" fill="#82ca9d" fillOpacity={0.6} />
                <Radar name="Palm Jumeirah" dataKey="Palm Jumeirah" stroke="#ffc658" fill="#ffc658" fillOpacity={0.6} />
                <Radar name="JVC" dataKey="JVC" stroke="#ff8042" fill="#ff8042" fillOpacity={0.6} />
                <Radar name="Business Bay" dataKey="Business Bay" stroke="#0088fe" fill="#0088fe" fillOpacity={0.6} />
                <Legend />
                <Tooltip />
              </RadarChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ReportAreaComparison;

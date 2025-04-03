
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  LineChart,
  Line,
  Legend
} from "recharts";
import { formatCurrency } from "@/utils/format";
import { Badge } from "@/components/ui/badge";
import { ChartContainer, ChartTooltipContent } from "@/components/ui/chart";
import { ArrowUpRight, CheckCircle, Clock, DollarSign, FileText, Users } from "lucide-react";

// Mock data for deals overview
const dealsSummary = {
  total: 35,
  open: 18,
  closed: 17,
  value: 87500000,
  commission: 1750000,
  avgCloseTime: 45
};

// Mock data for deals by stage
const dealsByStage = [
  { name: "Initial", value: 6 },
  { name: "Documents", value: 8 },
  { name: "Legal", value: 4 },
  { name: "Closed", value: 17 }
];

// Mock data for monthly deals
const monthlyDeals = [
  { name: "Jan", value: 4 },
  { name: "Feb", value: 3 },
  { name: "Mar", value: 5 },
  { name: "Apr", value: 6 },
  { name: "May", value: 2 },
  { name: "Jun", value: 3 },
  { name: "Jul", value: 4 },
  { name: "Aug", value: 3 },
  { name: "Sep", value: 5 },
  { name: "Oct", value: 0 },
  { name: "Nov", value: 0 },
  { name: "Dec", value: 0 }
];

// Mock data for match funnel
const matchFunnel = [
  { name: "Matches Sent", value: 120 },
  { name: "Accepted", value: 72 },
  { name: "Deals Created", value: 48 },
  { name: "Closed", value: 17 }
];

// Colors for the pie chart
const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

const DealsDashboard = () => {
  return (
    <div className="space-y-6">
      <h2 className="text-xl font-semibold mb-4">Deal Performance Dashboard</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-slate-500">
              Total Deals
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{dealsSummary.total}</div>
            <p className="text-xs text-slate-500 mt-1">
              {dealsSummary.open} open, {dealsSummary.closed} closed
            </p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-slate-500">
              Total Value
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{formatCurrency(dealsSummary.value, 'AED')}</div>
            <p className="text-xs text-slate-500 mt-1">
              Avg. {formatCurrency(dealsSummary.value / dealsSummary.total, 'AED')} per deal
            </p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-slate-500">
              Commission Projected
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{formatCurrency(dealsSummary.commission, 'AED')}</div>
            <p className="text-xs text-slate-500 mt-1">
              Avg. {(dealsSummary.commission / dealsSummary.value * 100).toFixed(1)}% rate
            </p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-slate-500">
              Avg. Time to Close
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{dealsSummary.avgCloseTime} days</div>
            <p className="text-xs text-slate-500 mt-1">
              From initial offer to closing
            </p>
          </CardContent>
        </Card>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Deals by Stage</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={dealsByStage}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                    outerRadius={80}
                    fill="#8884d8"
                    dataKey="value"
                  >
                    {dealsByStage.map((entry, index) => (
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
            <CardTitle>Match Funnel</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  data={matchFunnel}
                  layout="vertical"
                  margin={{
                    top: 5,
                    right: 30,
                    left: 100,
                    bottom: 5,
                  }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis type="number" />
                  <YAxis dataKey="name" type="category" />
                  <Tooltip />
                  <Bar dataKey="value" fill="#8884d8" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>
      </div>
      
      <Card>
        <CardHeader>
          <CardTitle>Monthly Deal Performance</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart
                data={monthlyDeals}
                margin={{
                  top: 5,
                  right: 30,
                  left: 20,
                  bottom: 5,
                }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="value" stroke="#8884d8" activeDot={{ r: 8 }} name="Deals Created" />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>
      
      <Card>
        <CardHeader>
          <CardTitle>Recent Deal Activity</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex items-center">
              <div className="w-2 h-2 rounded-full bg-green-500 mr-3"></div>
              <div className="flex-1">
                <p className="font-medium">Palm Jumeirah Villa Deal Closed</p>
                <p className="text-sm text-slate-500">John Smith • {formatCurrency(3500000, 'AED')}</p>
              </div>
              <div className="flex items-center">
                <Badge variant="match">Match Score: 92%</Badge>
                <span className="text-sm text-slate-500 ml-3">2 days ago</span>
              </div>
            </div>
            
            <div className="flex items-center">
              <div className="w-2 h-2 rounded-full bg-blue-500 mr-3"></div>
              <div className="flex-1">
                <p className="font-medium">Downtown Apartment SPA Signed</p>
                <p className="text-sm text-slate-500">Sarah Johnson • {formatCurrency(1800000, 'AED')}</p>
              </div>
              <div className="flex items-center">
                <Badge variant="match">Match Score: 88%</Badge>
                <span className="text-sm text-slate-500 ml-3">3 days ago</span>
              </div>
            </div>
            
            <div className="flex items-center">
              <div className="w-2 h-2 rounded-full bg-amber-500 mr-3"></div>
              <div className="flex-1">
                <p className="font-medium">Business Bay Deposit Paid</p>
                <p className="text-sm text-slate-500">Michael Zhang • {formatCurrency(2100000, 'AED')}</p>
              </div>
              <div className="flex items-center">
                <Badge variant="match">Match Score: 95%</Badge>
                <span className="text-sm text-slate-500 ml-3">1 week ago</span>
              </div>
            </div>
            
            <div className="flex items-center">
              <div className="w-2 h-2 rounded-full bg-purple-500 mr-3"></div>
              <div className="flex-1">
                <p className="font-medium">New Match Proposal - JVC Townhouse</p>
                <p className="text-sm text-slate-500">Waiting for broker approval • {formatCurrency(1500000, 'AED')}</p>
              </div>
              <div className="flex items-center">
                <Badge variant="match">Match Score: 87%</Badge>
                <span className="text-sm text-slate-500 ml-3">1 week ago</span>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default DealsDashboard;

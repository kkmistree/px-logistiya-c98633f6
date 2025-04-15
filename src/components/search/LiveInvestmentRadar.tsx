
import { BarChart, LineChart, PieChart, Map } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { AreaChart, Area, BarChart as RechartsBarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

// Sample data for the charts
const performingZones = [
  { name: 'Riyadh IC', value: 85 },
  { name: 'KAEC', value: 76 },
  { name: 'Dammam LH', value: 68 },
  { name: 'Jeddah IA', value: 62 },
  { name: 'Sudair City', value: 57 }
];

const viewedProperties = [
  { name: 'Logistics', views: 235, listings: 42 },
  { name: 'Warehouse', views: 180, listings: 58 },
  { name: 'Factory', views: 155, listings: 36 },
  { name: 'Mixed-Use', views: 120, listings: 31 },
  { name: 'Specialized', views: 85, listings: 18 }
];

const inboundCapital = [
  { month: 'Jan', amount: 120 },
  { month: 'Feb', amount: 145 },
  { month: 'Mar', amount: 135 },
  { month: 'Apr', amount: 160 },
  { month: 'May', amount: 180 },
  { month: 'Jun', amount: 195 },
  { month: 'Jul', amount: 220 },
  { month: 'Aug', amount: 240 },
];

const LiveInvestmentRadar = () => {
  return (
    <div className="space-y-6">
      <div className="flex flex-col space-y-2 mb-4">
        <h2 className="text-xl font-bold flex items-center">
          <LineChart size={20} className="mr-2 text-purple-500" />
          Live Investment Radar
        </h2>
        <p className="text-slate-600">Real-time market movement and investment signals</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Top Performing Zones */}
        <Card className="shadow-sm hover:shadow-md transition-all duration-300">
          <CardHeader className="pb-2">
            <CardTitle className="text-lg font-semibold flex items-center">
              <BarChart size={18} className="mr-2 text-blue-500" />
              Top Performing Zones
            </CardTitle>
            <CardDescription className="text-xs">Highest ROI industrial areas this week</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <RechartsBarChart
                  data={performingZones}
                  layout="vertical"
                  margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                >
                  <CartesianGrid strokeDasharray="3 3" horizontal={false} />
                  <XAxis type="number" domain={[0, 100]} />
                  <YAxis dataKey="name" type="category" width={80} />
                  <Tooltip
                    formatter={(value) => [`${value} Performance Score`, 'Score']}
                    labelFormatter={() => ''}
                  />
                  <Bar dataKey="value" fill="#8884d8" radius={[0, 4, 4, 0]} />
                </RechartsBarChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        {/* Most Viewed Properties */}
        <Card className="shadow-sm hover:shadow-md transition-all duration-300">
          <CardHeader className="pb-2">
            <CardTitle className="text-lg font-semibold flex items-center">
              <PieChart size={18} className="mr-2 text-green-500" />
              Most Viewed Properties
            </CardTitle>
            <CardDescription className="text-xs">Property types with highest investor interest</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <RechartsBarChart
                  data={viewedProperties}
                  margin={{ top: 20, right: 30, left: 0, bottom: 5 }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="views" name="Views" fill="#82ca9d" />
                </RechartsBarChart>
              </ResponsiveContainer>
            </div>
            <div className="text-center mt-2">
              <Button variant="link" size="sm" className="text-xs">
                View detailed analytics
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Zones with Highest Inbound Capital */}
        <Card className="shadow-sm hover:shadow-md transition-all duration-300">
          <CardHeader className="pb-2">
            <CardTitle className="text-lg font-semibold flex items-center">
              <Map size={18} className="mr-2 text-amber-500" />
              Inbound Investment Capital
            </CardTitle>
            <CardDescription className="text-xs">Capital flow into industrial real estate (M SAR)</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart
                  data={inboundCapital}
                  margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
                >
                  <defs>
                    <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
                      <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" />
                  <YAxis />
                  <Tooltip />
                  <Area
                    type="monotone"
                    dataKey="amount"
                    stroke="#8884d8"
                    fillOpacity={1}
                    fill="url(#colorUv)"
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>
            <div className="text-center mt-2">
              <Button variant="link" size="sm" className="text-xs">
                View capital flow report
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
      
      <Card className="shadow-sm hover:shadow-md transition-all duration-300">
        <CardHeader className="pb-2">
          <CardTitle className="text-lg font-semibold">Investment Opportunity Map</CardTitle>
          <CardDescription className="text-xs">Geographic distribution of high-potential industrial assets</CardDescription>
        </CardHeader>
        <CardContent className="p-4">
          <Tabs defaultValue="roi">
            <TabsList className="grid grid-cols-3 mb-4">
              <TabsTrigger value="roi">ROI Heatmap</TabsTrigger>
              <TabsTrigger value="growth">Growth Areas</TabsTrigger>
              <TabsTrigger value="supply">Supply/Demand</TabsTrigger>
            </TabsList>
            <TabsContent value="roi" className="h-[400px] flex items-center justify-center">
              <div className="text-center flex flex-col items-center p-6 bg-slate-50 rounded-md w-full h-full">
                <Map size={40} className="text-slate-300 mb-3" />
                <h3 className="text-lg font-medium">Interactive Map View</h3>
                <p className="text-slate-500 text-sm max-w-md mx-auto mt-2">
                  Geographic visualization of industrial properties color-coded by ROI potential and investment grade
                </p>
              </div>
            </TabsContent>
            <TabsContent value="growth">
              <div className="text-center flex flex-col items-center p-6 bg-slate-50 rounded-md h-[400px]">
                <LineChart size={40} className="text-slate-300 mb-3" />
                <h3 className="text-lg font-medium">Growth Projection Map</h3>
                <p className="text-slate-500 text-sm max-w-md mx-auto mt-2">
                  Areas with highest projected appreciation and development activity
                </p>
              </div>
            </TabsContent>
            <TabsContent value="supply">
              <div className="text-center flex flex-col items-center p-6 bg-slate-50 rounded-md h-[400px]">
                <BarChart size={40} className="text-slate-300 mb-3" />
                <h3 className="text-lg font-medium">Supply/Demand Index</h3>
                <p className="text-slate-500 text-sm max-w-md mx-auto mt-2">
                  Visualization of market balance between available properties and investor demand
                </p>
              </div>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  );
};

export default LiveInvestmentRadar;

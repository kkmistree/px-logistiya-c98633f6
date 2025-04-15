
import { BarChart, LineChart, ArrowRight } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { BarChart as RechartsBarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';
import { Button } from '@/components/ui/button';

// Sample data for the comparison
const cityComparisonData = [
  {
    name: 'ROI',
    Riyadh: 8.2,
    Jeddah: 7.5,
    Dammam: 8.9,
  },
  {
    name: 'Price Growth',
    Riyadh: 12,
    Jeddah: 9,
    Dammam: 11,
  },
  {
    name: 'Transaction Vol.',
    Riyadh: 78,
    Jeddah: 65,
    Dammam: 55,
  },
];

const MarketComparison = () => {
  return (
    <Card className="shadow-sm hover:shadow-md transition-all duration-300">
      <CardHeader>
        <CardTitle className="text-lg font-semibold flex items-center">
          <BarChart size={18} className="mr-2 text-indigo-500" />
          Dynamic Market Comparison
        </CardTitle>
        <CardDescription className="text-xs">Side-by-side comparison of top industrial zones</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="h-80">
          <ResponsiveContainer width="100%" height="100%">
            <RechartsBarChart
              data={cityComparisonData}
              margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="Riyadh" name="Riyadh" fill="#8884d8" />
              <Bar dataKey="Jeddah" name="Jeddah" fill="#82ca9d" />
              <Bar dataKey="Dammam" name="Dammam" fill="#ffc658" />
            </RechartsBarChart>
          </ResponsiveContainer>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
          <div className="bg-purple-50 p-4 rounded-md border border-purple-100">
            <h4 className="font-medium text-purple-700 mb-1">Riyadh Industrial City</h4>
            <div className="text-sm space-y-1">
              <div className="flex justify-between">
                <span className="text-slate-600">ROI:</span>
                <span className="font-medium">8.2%</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-600">YoY Growth:</span>
                <span className="font-medium">12%</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-600">Investor Interest:</span>
                <span className="font-medium text-green-600">High</span>
              </div>
            </div>
          </div>
          
          <div className="bg-green-50 p-4 rounded-md border border-green-100">
            <h4 className="font-medium text-green-700 mb-1">Jeddah Industrial Area</h4>
            <div className="text-sm space-y-1">
              <div className="flex justify-between">
                <span className="text-slate-600">ROI:</span>
                <span className="font-medium">7.5%</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-600">YoY Growth:</span>
                <span className="font-medium">9%</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-600">Investor Interest:</span>
                <span className="font-medium text-amber-600">Medium</span>
              </div>
            </div>
          </div>
          
          <div className="bg-amber-50 p-4 rounded-md border border-amber-100">
            <h4 className="font-medium text-amber-700 mb-1">Dammam Logistics Hub</h4>
            <div className="text-sm space-y-1">
              <div className="flex justify-between">
                <span className="text-slate-600">ROI:</span>
                <span className="font-medium">8.9%</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-600">YoY Growth:</span>
                <span className="font-medium">11%</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-600">Investor Interest:</span>
                <span className="font-medium text-blue-600">Rising</span>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
      <CardFooter className="border-t border-slate-100 pt-4">
        <Button variant="outline" className="w-full">
          Generate Comprehensive Market Report <ArrowRight size={16} className="ml-2" />
        </Button>
      </CardFooter>
    </Card>
  );
};

export default MarketComparison;

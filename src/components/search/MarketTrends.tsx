
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from 'recharts';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

// Sample data for industrial property market trends
const priceData = [
  { month: 'Jan', price: 2400 },
  { month: 'Feb', price: 2200 },
  { month: 'Mar', price: 2700 },
  { month: 'Apr', price: 2800 },
  { month: 'May', price: 3100 },
  { month: 'Jun', price: 2950 },
  { month: 'Jul', price: 3300 },
  { month: 'Aug', price: 3500 },
  { month: 'Sep', price: 3700 },
];

const areaData = [
  { name: 'Riyadh Industrial City', value: 35 },
  { name: 'Jeddah Industrial Area', value: 28 },
  { name: 'Dammam Industrial', value: 25 },
  { name: 'KAEC Industrial Valley', value: 18 },
  { name: 'Sudair City', value: 12 },
];

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884d8'];

const MarketTrends = () => {
  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-sm font-medium mb-3">Industrial Property Price Trends (SAR/sqm)</h3>
        <div className="h-60">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={priceData} margin={{ top: 5, right: 20, left: 10, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip formatter={(value) => [`${value} SAR/sqm`, 'Price']} />
              <Line type="monotone" dataKey="price" stroke="#3b82f6" strokeWidth={2} dot={{ r: 3 }} />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <h3 className="text-sm font-medium mb-3">Transaction Volume by Area</h3>
          <div className="h-60">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={areaData} layout="vertical" margin={{ top: 5, right: 20, left: 60, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis type="number" />
                <YAxis dataKey="name" type="category" scale="band" />
                <Tooltip />
                <Bar dataKey="value" name="Transactions">
                  {areaData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="space-y-3">
          <h3 className="text-sm font-medium mb-3">Market Highlights</h3>
          
          <div className="p-3 bg-blue-50 border border-blue-100 rounded-md">
            <p className="text-sm font-medium text-blue-700">Price Growth</p>
            <p className="text-xs text-blue-600">Industrial properties have shown 12.5% YoY growth in valuation</p>
          </div>
          
          <div className="p-3 bg-green-50 border border-green-100 rounded-md">
            <p className="text-sm font-medium text-green-700">Yield Improvement</p>
            <p className="text-xs text-green-600">Average rental yields increased to 8.2% for warehouse spaces</p>
          </div>
          
          <div className="p-3 bg-amber-50 border border-amber-100 rounded-md">
            <p className="text-sm font-medium text-amber-700">Emerging Areas</p>
            <p className="text-xs text-amber-600">Sudair City showing fastest growth in new industrial developments</p>
          </div>
          
          <Button variant="outline" className="w-full" size="sm">
            View Complete Market Report <ArrowRight className="ml-2" size={16} />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default MarketTrends;

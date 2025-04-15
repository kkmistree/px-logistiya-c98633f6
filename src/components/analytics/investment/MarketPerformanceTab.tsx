
import { Card } from "@/components/ui/card";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar, PieChart, Pie, Cell } from "recharts";

const priceData = [
  { month: "Jan", industrial: 2000, warehouse: 1800, logistics: 2200 },
  { month: "Feb", industrial: 2100, warehouse: 1900, logistics: 2300 },
  { month: "Mar", industrial: 2200, warehouse: 2000, logistics: 2400 },
  { month: "Apr", industrial: 2300, warehouse: 2100, logistics: 2500 },
  { month: "May", industrial: 2400, warehouse: 2200, logistics: 2600 },
  { month: "Jun", industrial: 2500, warehouse: 2300, logistics: 2700 },
];

const irrData = [
  { type: "Industrial Plot", irr: 16 },
  { type: "Logistics Hub", irr: 17 },
  { type: "Mixed Use", irr: 14 },
];

const regionData = [
  { name: "Riyadh", value: 45 },
  { name: "Jeddah", value: 32 },
  { name: "Eastern Province", value: 23 },
];

const COLORS = ['#10B981', '#3B82F6', '#F59E0B'];

const MarketPerformanceTab = () => {
  return (
    <div className="space-y-6">
      <Card className="p-6">
        <h3 className="text-lg font-semibold mb-4">Market Price Trends</h3>
        <div className="h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={priceData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Line type="monotone" dataKey="industrial" stroke="#10B981" name="Industrial" />
              <Line type="monotone" dataKey="warehouse" stroke="#3B82F6" name="Warehouse" />
              <Line type="monotone" dataKey="logistics" stroke="#F59E0B" name="Logistics" />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </Card>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="p-6">
          <h3 className="text-lg font-semibold mb-4">IRR by Property Type</h3>
          <div className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={irrData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="type" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="irr" fill="#10B981" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </Card>

        <Card className="p-6">
          <h3 className="text-lg font-semibold mb-4">Investment by Region</h3>
          <div className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={regionData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                  outerRadius={100}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {regionData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default MarketPerformanceTab;

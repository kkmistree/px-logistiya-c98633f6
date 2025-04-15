
import { Card } from "@/components/ui/card";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend, AreaChart, Area } from "recharts";

const cashFlowData = [
  { year: '2025', income: 450000, expenses: 180000, netCashFlow: 270000 },
  { year: '2026', income: 480000, expenses: 190000, netCashFlow: 290000 },
  { year: '2027', income: 520000, expenses: 200000, netCashFlow: 320000 },
  { year: '2028', income: 550000, expenses: 210000, netCashFlow: 340000 },
  { year: '2029', income: 600000, expenses: 220000, netCashFlow: 380000 },
  { year: '2030', income: 650000, expenses: 230000, netCashFlow: 420000 },
];

const projectionsData = [
  { year: '2025', conservative: 270000, moderate: 290000, aggressive: 310000 },
  { year: '2026', conservative: 290000, moderate: 320000, aggressive: 350000 },
  { year: '2027', conservative: 320000, moderate: 360000, aggressive: 400000 },
  { year: '2028', conservative: 340000, moderate: 390000, aggressive: 450000 },
  { year: '2029', conservative: 360000, moderate: 420000, aggressive: 500000 },
  { year: '2030', conservative: 380000, moderate: 460000, aggressive: 550000 },
];

const CashFlowTab = () => {
  return (
    <div className="space-y-6">
      <Card className="p-6">
        <h3 className="text-lg font-semibold mb-4">Cash Flow Analysis</h3>
        <div className="h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart
              data={cashFlowData}
              margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="year" />
              <YAxis />
              <Tooltip
                formatter={(value) => [`SAR ${value.toLocaleString()}`, ""]}
                labelFormatter={(label) => `Year: ${label}`}
              />
              <Legend />
              <Line type="monotone" dataKey="income" stroke="#10B981" name="Income" />
              <Line type="monotone" dataKey="expenses" stroke="#EF4444" name="Expenses" />
              <Line type="monotone" dataKey="netCashFlow" stroke="#3B82F6" name="Net Cash Flow" strokeWidth={2} />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </Card>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="p-6">
          <h3 className="text-lg font-semibold mb-4">Cash Flow Projections</h3>
          <div className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart
                data={projectionsData}
                margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="year" />
                <YAxis />
                <Tooltip
                  formatter={(value) => [`SAR ${value.toLocaleString()}`, ""]}
                  labelFormatter={(label) => `Year: ${label}`}
                />
                <Legend />
                <Area type="monotone" dataKey="conservative" stackId="1" stroke="#64748B" fill="#94A3B8" name="Conservative" />
                <Area type="monotone" dataKey="moderate" stackId="2" stroke="#3B82F6" fill="#93C5FD" name="Moderate" />
                <Area type="monotone" dataKey="aggressive" stackId="3" stroke="#10B981" fill="#6EE7B7" name="Aggressive" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </Card>

        <Card className="p-6">
          <h3 className="text-lg font-semibold mb-4">Key Cash Flow Metrics</h3>
          <div className="space-y-4">
            <div className="flex justify-between border-b pb-2">
              <span className="text-slate-600">Initial Investment:</span>
              <span className="font-medium">SAR 5,000,000</span>
            </div>
            <div className="flex justify-between border-b pb-2">
              <span className="text-slate-600">Average Annual Cash Flow:</span>
              <span className="font-medium text-blue-600">SAR 336,667</span>
            </div>
            <div className="flex justify-between border-b pb-2">
              <span className="text-slate-600">Cash-on-Cash Return:</span>
              <span className="font-medium text-green-600">6.73%</span>
            </div>
            <div className="flex justify-between border-b pb-2">
              <span className="text-slate-600">Payback Period:</span>
              <span className="font-medium">14.8 years</span>
            </div>
            <div className="flex justify-between border-b pb-2">
              <span className="text-slate-600">Total 5-Year Cash Flow:</span>
              <span className="font-medium text-green-600">SAR 2,020,000</span>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default CashFlowTab;

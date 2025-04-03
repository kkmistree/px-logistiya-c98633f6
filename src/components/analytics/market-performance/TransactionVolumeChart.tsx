
import { Card, CardContent } from "@/components/ui/card";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

interface TransactionVolumeChartProps {
  data: Array<{ year: string; volume: number; value: number }>;
}

const TransactionVolumeChart = ({ data }: TransactionVolumeChartProps) => {
  return (
    <div className="grid grid-cols-1 gap-4">
      <h2 className="text-xl font-bold mb-0">Transaction volume</h2>
      <Card>
        <CardContent className="p-6">
          <div className="h-[400px]">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart
                data={data}
                margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="year" />
                <YAxis tickFormatter={(value) => `${value / 1000}K`} />
                <Tooltip formatter={(value) => [`${(value as number).toLocaleString()}`, 'Volume']} />
                <Area 
                  type="monotone" 
                  dataKey="volume" 
                  stroke="#8884d8" 
                  fill="#8884d8" 
                  fillOpacity={0.8} 
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default TransactionVolumeChart;

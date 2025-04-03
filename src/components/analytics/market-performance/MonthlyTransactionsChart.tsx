
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

interface MonthlyData {
  month: string;
  volume: number;
}

interface MonthlyTransactionsChartProps {
  data: MonthlyData[];
}

const MonthlyTransactionsChart = ({ data }: MonthlyTransactionsChartProps) => {
  return (
    <div className="grid grid-cols-1 gap-4">
      <h2 className="text-xl font-bold mb-0">Median monthly transactions volume</h2>
      <Card>
        <CardContent className="p-6">
          <div className="flex justify-end gap-2 mb-4">
            <Button
              variant="outline"
              size="sm"
              className="bg-pink-500 text-white"
            >
              Volume
            </Button>
            <Button
              variant="outline"
              size="sm"
            >
              Value
            </Button>
          </div>
          <div className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                data={data}
                margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                barSize={20}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip formatter={(value) => [`${(value as number).toLocaleString()}`, 'Volume']} />
                <Bar dataKey="volume" fill="#d946ef" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default MonthlyTransactionsChart;

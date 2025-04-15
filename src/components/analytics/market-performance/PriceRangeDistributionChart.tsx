
import { Card, CardContent } from "@/components/ui/card";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

interface PriceRangeData {
  year: string;
  below50M: number;
  from50Mto100M: number;
  from100Mto200M: number;
  from200Mto500M: number;
  above500M: number;
}

interface PriceRangeDistributionChartProps {
  data: PriceRangeData[];
}

const PriceRangeDistributionChart = ({ data }: PriceRangeDistributionChartProps) => {
  return (
    <div className="grid grid-cols-1 gap-4">
      <h2 className="text-xl font-bold mb-0">Distribution of sale transactions by price range</h2>
      <Card>
        <CardContent className="p-4">
          <div className="flex items-center justify-center mb-4 text-xs space-x-4">
            <div className="flex items-center">
              <div className="w-3 h-3 bg-cyan-300 mr-1"></div>
              <span>Up to SAR 50M</span>
            </div>
            <div className="flex items-center">
              <div className="w-3 h-3 bg-pink-400 mr-1"></div>
              <span>SAR 50M - SAR 100M</span>
            </div>
            <div className="flex items-center">
              <div className="w-3 h-3 bg-green-400 mr-1"></div>
              <span>SAR 100M - SAR 200M</span>
            </div>
            <div className="flex items-center">
              <div className="w-3 h-3 bg-yellow-400 mr-1"></div>
              <span>SAR 200M - SAR 500M</span>
            </div>
            <div className="flex items-center">
              <div className="w-3 h-3 bg-indigo-400 mr-1"></div>
              <span>Above SAR 500M</span>
            </div>
          </div>
          <div className="h-[400px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                data={data}
                margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                stackOffset="expand"
                barSize={30}
                maxBarSize={35}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="year" />
                <YAxis tickFormatter={(value) => `${(value * 100).toFixed(0)}%`} />
                <Tooltip 
                  formatter={(value, name) => {
                    const labels = {
                      below50M: "Up to SAR 50M",
                      from50Mto100M: "SAR 50M - SAR 100M",
                      from100Mto200M: "SAR 100M - SAR 200M",
                      from200Mto500M: "SAR 200M - SAR 500M",
                      above500M: "Above SAR 500M"
                    };
                    
                    const formattedValue = typeof value === 'number' ? `${value.toFixed(1)}%` : `${value}%`;
                    return [formattedValue, labels[name as keyof typeof labels]];
                  }}
                />
                <Bar dataKey="below50M" stackId="a" fill="#22d3ee" />
                <Bar dataKey="from50Mto100M" stackId="a" fill="#ec4899" />
                <Bar dataKey="from100Mto200M" stackId="a" fill="#4ade80" />
                <Bar dataKey="from200Mto500M" stackId="a" fill="#facc15" />
                <Bar dataKey="above500M" stackId="a" fill="#818cf8" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default PriceRangeDistributionChart;

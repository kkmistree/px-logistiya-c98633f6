
import { Card, CardContent } from "@/components/ui/card";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

interface PriceRangeData {
  year: string;
  below1M: number;
  from1Mto2M: number;
  from2Mto3M: number;
  from3Mto7M: number;
  above7M: number;
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
              <span>Up to AED 1M</span>
            </div>
            <div className="flex items-center">
              <div className="w-3 h-3 bg-pink-400 mr-1"></div>
              <span>AED 1M - AED 2M</span>
            </div>
            <div className="flex items-center">
              <div className="w-3 h-3 bg-green-400 mr-1"></div>
              <span>AED 2M - AED 3.7M</span>
            </div>
            <div className="flex items-center">
              <div className="w-3 h-3 bg-yellow-400 mr-1"></div>
              <span>AED 3.7M - AED 7M</span>
            </div>
            <div className="flex items-center">
              <div className="w-3 h-3 bg-indigo-400 mr-1"></div>
              <span>Above AED 7M</span>
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
                      below1M: "Up to AED 1M",
                      from1Mto2M: "AED 1M - AED 2M",
                      from2Mto3M: "AED 2M - AED 3.7M",
                      from3Mto7M: "AED 3.7M - AED 7M",
                      above7M: "Above AED 7M"
                    };
                    
                    const formattedValue = typeof value === 'number' ? `${value.toFixed(1)}%` : `${value}%`;
                    return [formattedValue, labels[name as keyof typeof labels]];
                  }}
                />
                <Bar dataKey="below1M" stackId="a" fill="#22d3ee" />
                <Bar dataKey="from1Mto2M" stackId="a" fill="#ec4899" />
                <Bar dataKey="from2Mto3M" stackId="a" fill="#4ade80" />
                <Bar dataKey="from3Mto7M" stackId="a" fill="#facc15" />
                <Bar dataKey="above7M" stackId="a" fill="#818cf8" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default PriceRangeDistributionChart;

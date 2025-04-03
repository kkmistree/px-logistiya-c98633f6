
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

interface PropertyPriceChartProps {
  data: Array<{ year: string; volume: number; value: number }>;
}

const PropertyPriceChart = ({ data }: PropertyPriceChartProps) => {
  const [chartType, setChartType] = useState("price");
  
  return (
    <div className="grid grid-cols-1 gap-4">
      <h2 className="text-xl font-bold mb-0">Property price performance (AED)</h2>
      <Card>
        <CardContent className="p-6">
          <div className="flex justify-end mb-4">
            <div className="flex gap-2">
              <Button 
                variant={chartType === "price" ? "default" : "outline"} 
                size="sm"
                onClick={() => setChartType("price")}
                className={chartType === "price" ? "bg-estate-primary text-white" : ""}
              >
                Price
              </Button>
              <Button 
                variant={chartType === "pricePerSqft" ? "default" : "outline"} 
                size="sm"
                onClick={() => setChartType("pricePerSqft")}
                className={chartType === "pricePerSqft" ? "bg-estate-primary text-white" : ""}
              >
                Price per sqft
              </Button>
            </div>
          </div>
          <div className="h-[400px]">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart
                data={data}
                margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="year" />
                <YAxis />
                <Tooltip formatter={(value) => [`AED ${(value as number).toLocaleString()}`, 'Price']} />
                <Area 
                  type="monotone" 
                  dataKey="value" 
                  stroke="#d946ef" 
                  fill="#d946ef" 
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

export default PropertyPriceChart;


import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from "recharts";

interface DistributionData {
  name: string;
  value: number;
}

interface DistributionChartsProps {
  propertyTypeData: DistributionData[];
  bedroomData: DistributionData[];
  priceRangeData: DistributionData[];
  transactionModeData: DistributionData[];
  distributionView: string;
  setDistributionView: (view: string) => void;
}

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884d8', '#d886af'];

const DistributionCharts = ({
  propertyTypeData,
  bedroomData,
  priceRangeData,
  transactionModeData,
  distributionView,
  setDistributionView
}: DistributionChartsProps) => {
  return (
    <Card>
      <CardContent className="p-6">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4">
          <h2 className="text-xl font-bold">Transactions Distribution</h2>
          <div className="mt-2 sm:mt-0 flex space-x-2">
            <Button 
              variant={distributionView === "propertyType" ? "default" : "outline"} 
              size="sm"
              onClick={() => setDistributionView("propertyType")}
            >
              Property Type
            </Button>
            <Button 
              variant={distributionView === "bedroom" ? "default" : "outline"} 
              size="sm"
              onClick={() => setDistributionView("bedroom")}
            >
              Bedrooms
            </Button>
            <Button 
              variant={distributionView === "priceRange" ? "default" : "outline"} 
              size="sm"
              onClick={() => setDistributionView("priceRange")}
            >
              Price Range
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={distributionView === "propertyType" 
                    ? propertyTypeData 
                    : distributionView === "bedroom" 
                      ? bedroomData 
                      : priceRangeData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(1)}%`}
                  outerRadius={100}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {(distributionView === "propertyType" 
                    ? propertyTypeData 
                    : distributionView === "bedroom" 
                      ? bedroomData 
                      : priceRangeData).map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip formatter={(value) => [`${value}%`, '']} />
              </PieChart>
            </ResponsiveContainer>
          </div>

          <div className="h-[300px]">
            <h3 className="text-lg font-medium mb-2">Transaction Mode</h3>
            <ResponsiveContainer width="100%" height="90%">
              <PieChart>
                <Pie
                  data={transactionModeData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(1)}%`}
                  outerRadius={100}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {transactionModeData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip formatter={(value) => [`${value}%`, '']} />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default DistributionCharts;


import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BarChart, LineChart, Bar, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from "recharts";

interface VolumeChartProps {
  data: {
    month: string;
    sales: number;
    value: number;
  }[];
  chartType: string;
  setChartType: (type: string) => void;
}

const VolumeChart = ({ data, chartType, setChartType }: VolumeChartProps) => {
  return (
    <Card>
      <CardContent className="p-6">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4">
          <h2 className="text-xl font-bold">Transaction Volume & Value (2025)</h2>
          <Tabs value={chartType} onValueChange={setChartType}>
            <TabsList className="mt-2 sm:mt-0">
              <TabsTrigger value="bar">Bar</TabsTrigger>
              <TabsTrigger value="line">Line</TabsTrigger>
            </TabsList>
          </Tabs>
        </div>

        <div className="h-[400px]">
          {chartType === "bar" ? (
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                data={data}
                margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis yAxisId="left" label={{ value: 'Number of Transactions', angle: -90, position: 'insideLeft' }} />
                <YAxis yAxisId="right" orientation="right" label={{ value: 'Value (Billions AED)', angle: 90, position: 'insideRight' }} />
                <Tooltip formatter={(value, name) => [
                  name === 'sales' ? value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") : `AED ${value}B`,
                  name === 'sales' ? 'Transactions' : 'Value'
                ]} />
                <Legend />
                <Bar yAxisId="left" dataKey="sales" fill="#8884d8" name="Transactions" />
                <Bar yAxisId="right" dataKey="value" fill="#82ca9d" name="Value (AED Billions)" />
              </BarChart>
            </ResponsiveContainer>
          ) : (
            <ResponsiveContainer width="100%" height="100%">
              <LineChart
                data={data}
                margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis yAxisId="left" label={{ value: 'Number of Transactions', angle: -90, position: 'insideLeft' }} />
                <YAxis yAxisId="right" orientation="right" label={{ value: 'Value (Billions AED)', angle: 90, position: 'insideRight' }} />
                <Tooltip formatter={(value, name) => [
                  name === 'sales' ? value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") : `AED ${value}B`,
                  name === 'sales' ? 'Transactions' : 'Value'
                ]} />
                <Legend />
                <Line yAxisId="left" type="monotone" dataKey="sales" stroke="#8884d8" name="Transactions" />
                <Line yAxisId="right" type="monotone" dataKey="value" stroke="#82ca9d" name="Value (AED Billions)" />
              </LineChart>
            </ResponsiveContainer>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default VolumeChart;

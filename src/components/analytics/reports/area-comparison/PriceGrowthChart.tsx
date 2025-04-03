
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import { areaPerformanceData } from './areaComparisonData';

const PriceGrowthChart = () => {
  return (
    <Card>
      <CardContent className="p-6">
        <h2 className="text-xl font-bold mb-4">Top 5 Areas by Price Growth</h2>
        <div className="h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={[...areaPerformanceData].sort((a, b) => b.yoyPrice - a.yoyPrice).slice(0, 5)}
              layout="vertical"
              margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis type="number" />
              <YAxis dataKey="area" type="category" width={100} />
              <Tooltip formatter={(value) => [`${value}%`, 'YoY Price Growth']} />
              <Bar dataKey="yoyPrice" fill="#82ca9d" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
};

export default PriceGrowthChart;

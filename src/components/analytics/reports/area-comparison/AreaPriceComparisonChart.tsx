
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from "recharts";
import { priceComparisonData } from './areaComparisonData';

const AreaPriceComparisonChart = () => {
  return (
    <Card>
      <CardContent className="p-6">
        <h2 className="text-xl font-bold mb-4">Area Performance Comparison (AED/sqft)</h2>
        <div className="h-[400px]">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={priceComparisonData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip formatter={(value) => [`AED ${value}/sqft`, '']} />
              <Legend />
              <Line type="monotone" dataKey="marina" name="Dubai Marina" stroke="#8884d8" />
              <Line type="monotone" dataKey="downtown" name="Downtown Dubai" stroke="#82ca9d" />
              <Line type="monotone" dataKey="palm" name="Palm Jumeirah" stroke="#ffc658" />
              <Line type="monotone" dataKey="jvc" name="JVC" stroke="#ff8042" />
              <Line type="monotone" dataKey="bay" name="Business Bay" stroke="#0088fe" />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
};

export default AreaPriceComparisonChart;

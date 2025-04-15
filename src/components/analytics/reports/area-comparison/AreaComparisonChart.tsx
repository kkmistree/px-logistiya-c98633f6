
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from "recharts";
import { priceComparisonData } from './areaComparisonData';

const AreaComparisonChart = () => {
  return (
    <Card>
      <CardContent className="p-6">
        <h2 className="text-xl font-bold mb-4">Industrial Area Performance (SAR/sqm)</h2>
        <div className="h-[400px]">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={priceComparisonData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip formatter={(value) => [`SAR ${value}/sqm`, '']} />
              <Legend />
              <Line type="monotone" dataKey="riyadh" name="Riyadh Industrial" stroke="#8884d8" />
              <Line type="monotone" dataKey="jeddah" name="Jeddah Industrial" stroke="#82ca9d" />
              <Line type="monotone" dataKey="jubail" name="Jubail Industrial" stroke="#ffc658" />
              <Line type="monotone" dataKey="dammam" name="Dammam Industrial" stroke="#ff8042" />
              <Line type="monotone" dataKey="kaec" name="KAEC Industrial Valley" stroke="#0088fe" />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
};

export default AreaComparisonChart;

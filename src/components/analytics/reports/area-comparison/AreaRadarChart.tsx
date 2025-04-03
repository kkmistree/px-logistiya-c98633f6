
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { RadarChart, Radar, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer, Legend, Tooltip } from "recharts";
import { areaRadarData } from './areaComparisonData';

const AreaRadarChart = () => {
  return (
    <Card>
      <CardContent className="p-6">
        <h2 className="text-xl font-bold mb-4">Area Performance Radar</h2>
        <div className="h-[400px]">
          <ResponsiveContainer width="100%" height="100%">
            <RadarChart outerRadius={150} data={areaRadarData}>
              <PolarGrid />
              <PolarAngleAxis dataKey="area" />
              <PolarRadiusAxis angle={30} domain={[0, 100]} />
              <Radar name="Dubai Marina" dataKey="Dubai Marina" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
              <Radar name="Downtown Dubai" dataKey="Downtown Dubai" stroke="#82ca9d" fill="#82ca9d" fillOpacity={0.6} />
              <Radar name="Palm Jumeirah" dataKey="Palm Jumeirah" stroke="#ffc658" fill="#ffc658" fillOpacity={0.6} />
              <Radar name="JVC" dataKey="JVC" stroke="#ff8042" fill="#ff8042" fillOpacity={0.6} />
              <Radar name="Business Bay" dataKey="Business Bay" stroke="#0088fe" fill="#0088fe" fillOpacity={0.6} />
              <Legend />
              <Tooltip />
            </RadarChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
};

export default AreaRadarChart;

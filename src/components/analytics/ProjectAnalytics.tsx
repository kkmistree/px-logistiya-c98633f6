
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend
} from "recharts";

// Mock data for project performance
const projectPerformanceData = [
  { name: 'Creek Vista', views: 540, inquiries: 72, meetings: 28 },
  { name: 'Marina Heights', views: 490, inquiries: 63, meetings: 22 },
  { name: 'Palm Resort', views: 680, inquiries: 95, meetings: 36 },
  { name: 'Downtown Lofts', views: 520, inquiries: 68, meetings: 25 },
  { name: 'JVC Oasis', views: 380, inquiries: 42, meetings: 18 }
];

// Mock data for top-performing projects
const topProjects = [
  {
    name: 'Palm Resort',
    developer: 'Emaar Properties',
    views: 680,
    inquiries: 95,
    conversionRate: 14,
    location: 'Palm Jumeirah'
  },
  {
    name: 'Creek Vista',
    developer: 'Dubai Properties',
    views: 540,
    inquiries: 72,
    conversionRate: 13,
    location: 'Dubai Creek Harbour'
  },
  {
    name: 'Downtown Lofts',
    developer: 'DAMAC Properties',
    views: 520,
    inquiries: 68,
    conversionRate: 13,
    location: 'Downtown Dubai'
  },
  {
    name: 'Marina Heights',
    developer: 'Select Group',
    views: 490,
    inquiries: 63,
    conversionRate: 13,
    location: 'Dubai Marina'
  }
];

const ProjectAnalytics = () => {
  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Project Performance Comparison</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="h-[400px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                data={projectPerformanceData}
                margin={{
                  top: 20,
                  right: 30,
                  left: 20,
                  bottom: 5,
                }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="views" name="Page Views" fill="#8884d8" />
                <Bar dataKey="inquiries" name="Inquiries" fill="#82ca9d" />
                <Bar dataKey="meetings" name="Viewings" fill="#ffc658" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Top Performing Projects</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              {topProjects.map((project, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex justify-between items-start">
                    <div>
                      <div className="flex items-center gap-2">
                        <h3 className="font-medium">{project.name}</h3>
                        <Badge>{index + 1}</Badge>
                      </div>
                      <p className="text-sm text-slate-500">{project.developer} • {project.location}</p>
                    </div>
                    <div className="text-right">
                      <p className="font-medium">{project.conversionRate}%</p>
                      <p className="text-xs text-slate-500">Conversion Rate</p>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-3 gap-4 text-center text-sm">
                    <div>
                      <p className="font-medium">{project.views}</p>
                      <p className="text-xs text-slate-500">Page Views</p>
                    </div>
                    <div>
                      <p className="font-medium">{project.inquiries}</p>
                      <p className="text-xs text-slate-500">Inquiries</p>
                    </div>
                    <div>
                      <p className="font-medium">{Math.round(project.inquiries * project.conversionRate / 100)}</p>
                      <p className="text-xs text-slate-500">Viewings</p>
                    </div>
                  </div>
                  
                  <Progress value={index === 0 ? 100 : Math.round((project.views / topProjects[0].views) * 100)} className="h-1" />
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>Project Insights</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded">
                <h3 className="font-medium">Palm Resort is Trending</h3>
                <p className="text-sm text-slate-600 mt-1">Palm Resort has the highest engagement, with 680 page views and 95 inquiries in the last 30 days.</p>
              </div>
              
              <div className="bg-purple-50 border-l-4 border-purple-500 p-4 rounded">
                <h3 className="font-medium">Conversion Leader</h3>
                <p className="text-sm text-slate-600 mt-1">Palm Resort has the highest inquiry-to-viewing conversion rate at 14%.</p>
              </div>
              
              <div className="bg-amber-50 border-l-4 border-amber-500 p-4 rounded">
                <h3 className="font-medium">JVC Oasis Needs Attention</h3>
                <p className="text-sm text-slate-600 mt-1">JVC Oasis has the lowest engagement metrics and may need marketing focus.</p>
              </div>
              
              <div className="bg-green-50 border-l-4 border-green-500 p-4 rounded">
                <h3 className="font-medium">Developer Comparison</h3>
                <p className="text-sm text-slate-600 mt-1">Emaar Properties projects show 23% higher engagement than the average across all developers.</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default ProjectAnalytics;

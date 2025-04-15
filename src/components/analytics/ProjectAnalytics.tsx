
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

// Mock data for Saudi industrial project performance
const projectPerformanceData = [
  { name: 'MODON Riyadh', views: 540, inquiries: 72, meetings: 28 },
  { name: 'Jubail Industrial', views: 490, inquiries: 63, meetings: 22 },
  { name: 'KAEC Phase 3', views: 680, inquiries: 95, meetings: 36 },
  { name: 'Dammam Logistics', views: 520, inquiries: 68, meetings: 25 },
  { name: 'Sudair City Zone 2', views: 380, inquiries: 42, meetings: 18 }
];

// Mock data for top-performing Saudi industrial projects
const topProjects = [
  {
    name: 'KAEC Phase 3',
    developer: 'KAEC Development Co.',
    views: 680,
    inquiries: 95,
    conversionRate: 14,
    location: 'KAEC Industrial Valley'
  },
  {
    name: 'MODON Riyadh',
    developer: 'MODON Industrial Cities',
    views: 540,
    inquiries: 72,
    conversionRate: 13,
    location: 'Riyadh Industrial City'
  },
  {
    name: 'Dammam Logistics',
    developer: 'Dammam Industrial Properties',
    views: 520,
    inquiries: 68,
    conversionRate: 13,
    location: 'Dammam Industrial City'
  },
  {
    name: 'Jubail Industrial',
    developer: 'Royal Commission for Jubail',
    views: 490,
    inquiries: 63,
    conversionRate: 13,
    location: 'Jubail Industrial City'
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
                <Bar dataKey="meetings" name="Site Visits" fill="#ffc658" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Top Performing Industrial Projects</CardTitle>
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
                      <p className="text-xs text-slate-500">Site Visits</p>
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
            <CardTitle>Industrial Project Insights</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded">
                <h3 className="font-medium">KAEC Phase 3 is Trending</h3>
                <p className="text-sm text-slate-600 mt-1">KAEC Phase 3 has the highest engagement, with 680 page views and 95 inquiries in the last 30 days, driven by Vision 2030 industrial initiatives.</p>
              </div>
              
              <div className="bg-purple-50 border-l-4 border-purple-500 p-4 rounded">
                <h3 className="font-medium">Logistics Sector Leading</h3>
                <p className="text-sm text-slate-600 mt-1">Logistics facilities have the highest inquiry-to-visit conversion rate at 14%, outperforming other industrial property types.</p>
              </div>
              
              <div className="bg-amber-50 border-l-4 border-amber-500 p-4 rounded">
                <h3 className="font-medium">Sudair City Zone 2 Needs Attention</h3>
                <p className="text-sm text-slate-600 mt-1">Sudair City Zone 2 has the lowest engagement metrics despite competitive pricing and may need marketing focus.</p>
              </div>
              
              <div className="bg-green-50 border-l-4 border-green-500 p-4 rounded">
                <h3 className="font-medium">Developer Performance</h3>
                <p className="text-sm text-slate-600 mt-1">MODON industrial projects show 23% higher engagement than the average across all industrial developers in Saudi Arabia.</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default ProjectAnalytics;

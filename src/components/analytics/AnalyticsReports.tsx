
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FileDown, FileText, Calendar, BarChart2, User, Building } from "lucide-react";

const reportCategories = [
  {
    name: "Performance Reports",
    description: "Track your personal and team performance metrics",
    reports: [
      { name: "Broker Performance Summary", format: "PDF", type: "performance" },
      { name: "Deals Pipeline Analysis", format: "Excel", type: "performance" },
      { name: "Conversion Rate Analysis", format: "PDF", type: "performance" }
    ]
  },
  {
    name: "Client Reports",
    description: "Insights on client engagement and behavior",
    reports: [
      { name: "Client Engagement Metrics", format: "PDF", type: "client" },
      { name: "Lead Source Analysis", format: "Excel", type: "client" },
      { name: "Client Journey Mapping", format: "PDF", type: "client" }
    ]
  },
  {
    name: "Market Reports",
    description: "Real estate market trends and analysis",
    reports: [
      { name: "Market Price Trends", format: "PDF", type: "market" },
      { name: "Area Comparison Report", format: "PDF", type: "market" },
      { name: "ROI Analysis by Location", format: "Excel", type: "market" }
    ]
  },
  {
    name: "Project Reports",
    description: "Performance metrics for development projects",
    reports: [
      { name: "Project Performance Analysis", format: "PDF", type: "project" },
      { name: "Developer Comparison", format: "Excel", type: "project" },
      { name: "Project Pipeline Forecast", format: "PDF", type: "project" }
    ]
  }
];

const getReportIcon = (type: string) => {
  switch (type) {
    case 'performance':
      return <BarChart2 size={18} className="text-blue-500" />;
    case 'client':
      return <User size={18} className="text-purple-500" />;
    case 'market':
      return <Calendar size={18} className="text-green-500" />;
    case 'project':
      return <Building size={18} className="text-amber-500" />;
    default:
      return <FileText size={18} className="text-slate-500" />;
  }
};

const AnalyticsReports = () => {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {reportCategories.map((category, index) => (
          <Card key={index}>
            <CardHeader>
              <CardTitle>{category.name}</CardTitle>
              <p className="text-sm text-slate-500">{category.description}</p>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {category.reports.map((report, reportIndex) => (
                  <div key={reportIndex} className="flex items-center justify-between p-3 bg-slate-50 rounded-md">
                    <div className="flex items-center gap-3">
                      {getReportIcon(report.type)}
                      <div>
                        <p className="font-medium">{report.name}</p>
                        <p className="text-xs text-slate-500">{report.format} Format</p>
                      </div>
                    </div>
                    <Button variant="outline" size="sm">
                      <FileDown size={16} className="mr-2" />
                      Download
                    </Button>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
      
      <Card>
        <CardHeader>
          <CardTitle>Custom Reports</CardTitle>
          <p className="text-sm text-slate-500">Create tailored reports with the metrics that matter to you</p>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="bg-slate-50 p-4 rounded-md">
              <h3 className="font-medium mb-2">Build a Custom Report</h3>
              <p className="text-sm text-slate-600 mb-4">
                Select metrics, date ranges, and visualization options to create personalized reports.
              </p>
              <Button>Create Custom Report</Button>
            </div>
            
            <div className="space-y-2">
              <h3 className="font-medium">Recent Custom Reports</h3>
              
              <div className="flex justify-between items-center p-3 bg-white border border-slate-200 rounded-md">
                <div className="flex items-center gap-3">
                  <FileText size={18} className="text-slate-500" />
                  <div>
                    <p className="font-medium">Downtown Dubai Market Analysis</p>
                    <p className="text-xs text-slate-500">Created 3 days ago • PDF Format</p>
                  </div>
                </div>
                <Button variant="outline" size="sm">
                  <FileDown size={16} className="mr-2" />
                  Download
                </Button>
              </div>
              
              <div className="flex justify-between items-center p-3 bg-white border border-slate-200 rounded-md">
                <div className="flex items-center gap-3">
                  <FileText size={18} className="text-slate-500" />
                  <div>
                    <p className="font-medium">Q2 Performance Summary</p>
                    <p className="text-xs text-slate-500">Created 1 week ago • Excel Format</p>
                  </div>
                </div>
                <Button variant="outline" size="sm">
                  <FileDown size={16} className="mr-2" />
                  Download
                </Button>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default AnalyticsReports;

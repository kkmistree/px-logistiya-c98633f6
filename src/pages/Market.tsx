
import React from "react";
import AppShell from "@/components/layout/AppShell";
import { Card, CardContent } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";
import { Building2, TrendingUp, BarChart3, Map } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

const Market = () => {
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleExportReport = () => {
    toast({
      title: "Report Export Started",
      description: "Your market analytics report is being generated",
    });
  };

  return (
    <AppShell>
      <div className="space-y-6">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <div>
            <h1 className="text-2xl font-bold">Market Analytics</h1>
            <p className="text-sm text-slate-500">Analyze Saudi Arabian industrial market trends</p>
          </div>
          <div className="flex gap-2">
            <Button variant="outline" onClick={handleExportReport}>
              <BarChart3 size={16} className="mr-2" />
              Export Report
            </Button>
            <Button>
              <Map size={16} className="mr-2" />
              View Full Map
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Card className="hover:shadow-md transition-all cursor-pointer relative overflow-hidden border-l-4 border-l-blue-500" 
                onClick={() => navigate('/analytics/riyadh')}>
            <div className="absolute top-0 right-0 bg-blue-500 text-white px-2 py-1 text-xs">
              Top Growth
            </div>
            <CardContent className="p-6">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-lg font-semibold mb-2">Riyadh Industrial Market</h3>
                  <p className="text-sm text-slate-600">
                    Explore industrial property trends, demand, and investment opportunities in Riyadh's industrial cities.
                  </p>
                </div>
                <Building2 className="text-blue-500" size={24} />
              </div>
              <div className="flex gap-2 mt-4">
                <div className="px-2 py-1 bg-blue-50 text-blue-700 text-xs rounded-full">12.3% Growth</div>
                <div className="px-2 py-1 bg-blue-50 text-blue-700 text-xs rounded-full">94.5% Occupancy</div>
              </div>
            </CardContent>
          </Card>
          
          <Card className="hover:shadow-md transition-all cursor-pointer relative overflow-hidden border-l-4 border-l-green-500"
                onClick={() => navigate('/analytics/jeddah')}>
            <div className="absolute top-0 right-0 bg-green-500 text-white px-2 py-1 text-xs">
              Port Access
            </div>
            <CardContent className="p-6">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-lg font-semibold mb-2">Jeddah Industrial Market</h3>
                  <p className="text-sm text-slate-600">
                    Analyze market trends for logistics, manufacturing, and industrial properties in Jeddah's industrial zones.
                  </p>
                </div>
                <Building2 className="text-green-500" size={24} />
              </div>
              <div className="flex gap-2 mt-4">
                <div className="px-2 py-1 bg-green-50 text-green-700 text-xs rounded-full">9.7% Growth</div>
                <div className="px-2 py-1 bg-green-50 text-green-700 text-xs rounded-full">91.2% Occupancy</div>
              </div>
            </CardContent>
          </Card>
          
          <Card className="hover:shadow-md transition-all cursor-pointer relative overflow-hidden border-l-4 border-l-amber-500"
                onClick={() => navigate('/analytics/dammam')}>
            <div className="absolute top-0 right-0 bg-amber-500 text-white px-2 py-1 text-xs">
              Energy Hub
            </div>
            <CardContent className="p-6">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-lg font-semibold mb-2">Dammam Industrial Market</h3>
                  <p className="text-sm text-slate-600">
                    Review market dynamics for industrial properties in Dammam's industrial cities and surrounding areas.
                  </p>
                </div>
                <Building2 className="text-amber-500" size={24} />
              </div>
              <div className="flex gap-2 mt-4">
                <div className="px-2 py-1 bg-amber-50 text-amber-700 text-xs rounded-full">10.5% Growth</div>
                <div className="px-2 py-1 bg-amber-50 text-amber-700 text-xs rounded-full">89.8% Occupancy</div>
              </div>
            </CardContent>
          </Card>
        </div>
        
        <Card>
          <CardContent className="p-6">
            <h2 className="text-xl font-semibold mb-4 flex items-center">
              <TrendingUp size={20} className="mr-2 text-estate-primary" />
              Market Overview
            </h2>
            <div className="space-y-4">
              <p className="text-slate-600">
                The Saudi industrial real estate market continues to show strong growth in 2025, driven by Vision 2030 
                initiatives and increased manufacturing investment. Key industrial cities like those managed by MODON 
                are seeing high occupancy rates and increasing demand for modern logistics facilities.
              </p>
              <p className="text-slate-600">
                Recent market trends show particular strength in specialized industrial facilities supporting 
                technology manufacturing, automotive industry development, and renewable energy infrastructure.
              </p>
            </div>
          </CardContent>
        </Card>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card className="shadow-sm">
            <CardContent className="p-6">
              <h3 className="text-lg font-semibold mb-4 flex items-center">
                <BarChart3 size={18} className="mr-2 text-estate-primary" />
                Market Performance Metrics
              </h3>
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-slate-50 p-3 rounded-lg border border-slate-100">
                    <p className="text-sm text-slate-500">Avg. Rental Yield</p>
                    <p className="text-xl font-bold">8.2%</p>
                    <p className="text-xs text-emerald-600">↑ 0.4% vs 2024</p>
                  </div>
                  <div className="bg-slate-50 p-3 rounded-lg border border-slate-100">
                    <p className="text-sm text-slate-500">Occupancy Rate</p>
                    <p className="text-xl font-bold">94.5%</p>
                    <p className="text-xs text-emerald-600">↑ 2.3% vs 2024</p>
                  </div>
                  <div className="bg-slate-50 p-3 rounded-lg border border-slate-100">
                    <p className="text-sm text-slate-500">Price per Sq.m</p>
                    <p className="text-xl font-bold">3,850 SAR</p>
                    <p className="text-xs text-emerald-600">↑ 5.2% vs 2024</p>
                  </div>
                  <div className="bg-slate-50 p-3 rounded-lg border border-slate-100">
                    <p className="text-sm text-slate-500">New Supply</p>
                    <p className="text-xl font-bold">1.2M sq.m</p>
                    <p className="text-xs text-emerald-600">↑ 15% vs 2024</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card className="shadow-sm">
            <CardContent className="p-6">
              <h3 className="text-lg font-semibold mb-4 flex items-center">
                <Map size={18} className="mr-2 text-estate-primary" />
                Regional Comparison
              </h3>
              <div className="space-y-4">
                <div className="grid grid-cols-3 gap-3">
                  <div className="bg-blue-50 p-3 rounded-lg border border-blue-100">
                    <p className="text-sm font-medium text-blue-800">Riyadh</p>
                    <div className="flex justify-between mt-2">
                      <span className="text-xs text-slate-600">Growth:</span>
                      <span className="text-xs font-medium">12.3%</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-xs text-slate-600">Volume:</span>
                      <span className="text-xs font-medium">High</span>
                    </div>
                  </div>
                  
                  <div className="bg-green-50 p-3 rounded-lg border border-green-100">
                    <p className="text-sm font-medium text-green-800">Jeddah</p>
                    <div className="flex justify-between mt-2">
                      <span className="text-xs text-slate-600">Growth:</span>
                      <span className="text-xs font-medium">9.7%</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-xs text-slate-600">Volume:</span>
                      <span className="text-xs font-medium">Medium</span>
                    </div>
                  </div>
                  
                  <div className="bg-amber-50 p-3 rounded-lg border border-amber-100">
                    <p className="text-sm font-medium text-amber-800">Dammam</p>
                    <div className="flex justify-between mt-2">
                      <span className="text-xs text-slate-600">Growth:</span>
                      <span className="text-xs font-medium">10.5%</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-xs text-slate-600">Volume:</span>
                      <span className="text-xs font-medium">Medium</span>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </AppShell>
  );
};

export default Market;

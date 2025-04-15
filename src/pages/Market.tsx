
import React from "react";
import AppShell from "@/components/layout/AppShell";
import { Card, CardContent } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";

const Market = () => {
  const navigate = useNavigate();

  return (
    <AppShell>
      <div className="space-y-6">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <div>
            <h1 className="text-2xl font-bold">Market Analytics</h1>
            <p className="text-sm text-slate-500">Analyze Saudi Arabian industrial market trends</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Card className="hover:shadow-md transition-all cursor-pointer" 
                onClick={() => navigate('/analytics/riyadh')}>
            <CardContent className="p-6">
              <h3 className="text-lg font-semibold mb-2">Riyadh Industrial Market</h3>
              <p className="text-sm text-slate-600">
                Explore industrial property trends, demand, and investment opportunities in Riyadh's industrial cities.
              </p>
            </CardContent>
          </Card>
          
          <Card className="hover:shadow-md transition-all cursor-pointer"
                onClick={() => navigate('/analytics/jeddah')}>
            <CardContent className="p-6">
              <h3 className="text-lg font-semibold mb-2">Jeddah Industrial Market</h3>
              <p className="text-sm text-slate-600">
                Analyze market trends for logistics, manufacturing, and industrial properties in Jeddah's industrial zones.
              </p>
            </CardContent>
          </Card>
          
          <Card className="hover:shadow-md transition-all cursor-pointer"
                onClick={() => navigate('/analytics/dammam')}>
            <CardContent className="p-6">
              <h3 className="text-lg font-semibold mb-2">Dammam Industrial Market</h3>
              <p className="text-sm text-slate-600">
                Review market dynamics for industrial properties in Dammam's industrial cities and surrounding areas.
              </p>
            </CardContent>
          </Card>
        </div>
        
        <Card>
          <CardContent className="p-6">
            <h2 className="text-xl font-semibold mb-4">Market Overview</h2>
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

        {/* Add market trends charts and data */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card className="shadow-sm">
            <CardContent className="p-6">
              <h3 className="text-lg font-semibold mb-4">Market Performance Metrics</h3>
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
                
                <div className="h-[200px] bg-slate-50 rounded-lg border border-slate-100 p-3 flex items-center justify-center">
                  <p className="text-slate-400">Industrial Property Price Chart</p>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card className="shadow-sm">
            <CardContent className="p-6">
              <h3 className="text-lg font-semibold mb-4">Regional Comparison</h3>
              <div className="space-y-4">
                <div className="h-[120px] bg-slate-50 rounded-lg border border-slate-100 p-3 flex items-center justify-center">
                  <p className="text-slate-400">Region Comparison Chart</p>
                </div>
                
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
                
                <div className="h-[100px] bg-slate-50 rounded-lg border border-slate-100 p-3 flex items-center justify-center">
                  <p className="text-slate-400">Transaction Volume Trends</p>
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

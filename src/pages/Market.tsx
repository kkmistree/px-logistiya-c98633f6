
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
      </div>
    </AppShell>
  );
};

export default Market;

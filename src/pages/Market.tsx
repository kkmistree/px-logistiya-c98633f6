
import React from "react";
import AppShell from "@/components/layout/AppShell";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Market = () => {
  return (
    <AppShell>
      <div className="space-y-6">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <div>
            <h1 className="text-xl sm:text-2xl font-bold">Market Analytics</h1>
            <p className="text-sm text-slate-500">Analyze Saudi Arabian industrial market trends</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <Card>
            <CardHeader>
              <CardTitle>Riyadh Industrial Market</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-slate-500">
                Explore industrial property trends, demand, and investment opportunities in Riyadh's industrial cities.
              </p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>Jeddah Industrial Market</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-slate-500">
                Analyze market trends for logistics, manufacturing, and industrial properties in Jeddah's industrial zones.
              </p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>Dammam Industrial Market</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-slate-500">
                Review market dynamics for industrial properties in Dammam's industrial cities and surrounding areas.
              </p>
            </CardContent>
          </Card>
        </div>
        
        <Card>
          <CardHeader>
            <CardTitle>Market Overview</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="mb-4">
              The Saudi industrial real estate market continues to show strong growth in 2025, driven by Vision 2030 
              initiatives and increased manufacturing investment. Key industrial cities like those managed by MODON 
              are seeing high occupancy rates and increasing demand for modern logistics facilities.
            </p>
            <p>
              Recent market trends show particular strength in specialized industrial facilities supporting 
              technology manufacturing, automotive industry development, and renewable energy infrastructure.
            </p>
          </CardContent>
        </Card>
      </div>
    </AppShell>
  );
};

export default Market;

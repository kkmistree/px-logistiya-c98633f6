
import React from "react";
import AppShell from "@/components/layout/AppShell";

const Analytics = () => {
  return (
    <AppShell>
      <div className="space-y-6">
        <div>
          <h1 className="text-2xl font-bold text-estate-primary">Analytics</h1>
          <p className="text-slate-500">Insights and performance metrics for your business</p>
        </div>
        
        <div className="bg-white rounded-lg border border-slate-200 shadow-sm p-8 text-center">
          <h2 className="text-xl font-semibold mb-2">Analytics Coming Soon</h2>
          <p className="text-slate-500 mb-4">
            This section is under development. It will soon provide detailed analytics and insights 
            about your listings, clients, deals, and overall business performance.
          </p>
        </div>
      </div>
    </AppShell>
  );
};

export default Analytics;

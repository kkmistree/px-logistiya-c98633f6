
import React from "react";
import AppShell from "@/components/layout/AppShell";

const Developers = () => {
  return (
    <AppShell>
      <div className="space-y-6">
        <div>
          <h1 className="text-2xl font-bold text-estate-primary">Developer Hub</h1>
          <p className="text-slate-500">Manage and explore developer projects</p>
        </div>
        
        <div className="bg-white rounded-lg border border-slate-200 shadow-sm p-8 text-center">
          <h2 className="text-xl font-semibold mb-2">Developer Hub Coming Soon</h2>
          <p className="text-slate-500 mb-4">
            This section is under development. It will soon provide tools to manage and track developer projects, 
            off-plan properties, and project launches.
          </p>
        </div>
      </div>
    </AppShell>
  );
};

export default Developers;

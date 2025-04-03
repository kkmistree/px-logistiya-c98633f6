
import React from "react";
import AppShell from "@/components/layout/AppShell";

const Knowledge = () => {
  return (
    <AppShell>
      <div className="space-y-6">
        <div>
          <h1 className="text-2xl font-bold text-estate-primary">Knowledge Base</h1>
          <p className="text-slate-500">Resources and educational materials</p>
        </div>
        
        <div className="bg-white rounded-lg border border-slate-200 shadow-sm p-8 text-center">
          <h2 className="text-xl font-semibold mb-2">Knowledge Base Coming Soon</h2>
          <p className="text-slate-500 mb-4">
            This section is under development. It will soon provide educational resources, 
            market insights, and best practices for real estate professionals.
          </p>
        </div>
      </div>
    </AppShell>
  );
};

export default Knowledge;

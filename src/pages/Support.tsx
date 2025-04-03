
import React from "react";
import AppShell from "@/components/layout/AppShell";

const Support = () => {
  return (
    <AppShell>
      <div className="space-y-6">
        <div>
          <h1 className="text-2xl font-bold text-estate-primary">Help & Support</h1>
          <p className="text-slate-500">Get assistance and support resources</p>
        </div>
        
        <div className="bg-white rounded-lg border border-slate-200 shadow-sm p-8 text-center">
          <h2 className="text-xl font-semibold mb-2">Support Center Coming Soon</h2>
          <p className="text-slate-500 mb-4">
            This section is under development. It will soon provide help documentation, 
            FAQs, and support resources to assist you with using the platform.
          </p>
        </div>
      </div>
    </AppShell>
  );
};

export default Support;

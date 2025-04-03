
import React from "react";
import AppShell from "@/components/layout/AppShell";

const Settings = () => {
  return (
    <AppShell>
      <div className="space-y-6">
        <div>
          <h1 className="text-2xl font-bold text-estate-primary">Settings</h1>
          <p className="text-slate-500">Configure platform settings and preferences</p>
        </div>
        
        <div className="bg-white rounded-lg border border-slate-200 shadow-sm p-8 text-center">
          <h2 className="text-xl font-semibold mb-2">Settings Coming Soon</h2>
          <p className="text-slate-500 mb-4">
            This section is under development. It will soon provide controls for configuring 
            the platform according to your preferences and requirements.
          </p>
        </div>
      </div>
    </AppShell>
  );
};

export default Settings;

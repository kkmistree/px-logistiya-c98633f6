
import React from "react";
import AppShell from "@/components/layout/AppShell";

const Deals = () => {
  return (
    <AppShell>
      <div className="space-y-6">
        <div>
          <h1 className="text-2xl font-bold text-estate-primary">Deal Rooms</h1>
          <p className="text-slate-500">Manage your active deals and transactions</p>
        </div>
        
        <div className="bg-white rounded-lg border border-slate-200 shadow-sm p-8 text-center">
          <h2 className="text-xl font-semibold mb-2">Deal Rooms Coming Soon</h2>
          <p className="text-slate-500 mb-4">
            This section is under development. It will soon provide tools to manage your deals from 
            initial offer through to closing, with document management and milestone tracking.
          </p>
        </div>
      </div>
    </AppShell>
  );
};

export default Deals;

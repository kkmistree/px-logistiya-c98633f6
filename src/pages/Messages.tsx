
import React from "react";
import AppShell from "@/components/layout/AppShell";

const Messages = () => {
  return (
    <AppShell>
      <div className="space-y-6">
        <div>
          <h1 className="text-2xl font-bold text-estate-primary">Messages</h1>
          <p className="text-slate-500">Communicate with clients and colleagues</p>
        </div>
        
        <div className="bg-white rounded-lg border border-slate-200 shadow-sm p-8 text-center">
          <h2 className="text-xl font-semibold mb-2">Messages Coming Soon</h2>
          <p className="text-slate-500 mb-4">
            This section is under development. It will soon provide a messaging platform to 
            communicate with your clients, team members, and partner agencies.
          </p>
        </div>
      </div>
    </AppShell>
  );
};

export default Messages;


import { useState } from "react";
import AppShell from "@/components/layout/AppShell";
import AIAssistant from "@/components/home/AIAssistant";
import StatCards from "@/components/dashboard/StatCards";
import SearchSection from "@/components/dashboard/SearchSection";
import DashboardHeader from "@/components/dashboard/DashboardHeader";
import DashboardWidgets from "@/components/dashboard/DashboardWidgets";
import ListingDialog from "@/components/dashboard/ListingDialog";
import ClientDialog from "@/components/dashboard/ClientDialog";

const Index = () => {
  const [showAddListing, setShowAddListing] = useState<boolean>(false);
  const [showAddClient, setShowAddClient] = useState<boolean>(false);
  
  const getCurrentDate = () => {
    const options: Intl.DateTimeFormatOptions = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    return new Date().toLocaleDateString('en-US', options);
  };

  return (
    <AppShell>
      <div className="space-y-6">
        <DashboardHeader getCurrentDate={getCurrentDate} />
        
        <StatCards />
        
        <SearchSection />
        
        <DashboardWidgets />
      </div>
      
      {/* Dialogs */}
      <ListingDialog open={showAddListing} onOpenChange={setShowAddListing} />
      <ClientDialog open={showAddClient} onOpenChange={setShowAddClient} />
      
      <AIAssistant />
    </AppShell>
  );
};

export default Index;

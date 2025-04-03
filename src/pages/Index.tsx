
import { useState } from "react";
import AppShell from "@/components/layout/AppShell";
import AIAssistant from "@/components/home/AIAssistant";
import StatCards from "@/components/dashboard/StatCards";
import SearchSection from "@/components/dashboard/SearchSection";
import DashboardHeader from "@/components/dashboard/DashboardHeader";
import DashboardWidgets from "@/components/dashboard/DashboardWidgets";
import ListingDialog from "@/components/dashboard/ListingDialog";
import ClientDialog from "@/components/dashboard/ClientDialog";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import ProjectDetail from "@/components/property/ProjectDetail";
import { Property } from "@/types/property";

const Index = () => {
  const [showAddListing, setShowAddListing] = useState<boolean>(false);
  const [showAddClient, setShowAddClient] = useState<boolean>(false);
  const [selectedProperty, setSelectedProperty] = useState<Property | null>(null);
  
  const getCurrentDate = () => {
    const options: Intl.DateTimeFormatOptions = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    return new Date().toLocaleDateString('en-US', options);
  };

  const handleAddListing = () => {
    setShowAddListing(true);
  };

  const handleAddClient = () => {
    setShowAddClient(true);
  };
  
  const handleViewProperty = (property: Property) => {
    setSelectedProperty(property);
  };

  return (
    <AppShell>
      <div className="space-y-6">
        <DashboardHeader 
          getCurrentDate={getCurrentDate} 
          onAddListing={handleAddListing}
          onAddClient={handleAddClient}
        />
        
        <StatCards />
        
        <SearchSection />
        
        <DashboardWidgets 
          onAddListing={handleAddListing}
          onAddClient={handleAddClient}
          onViewProperty={handleViewProperty}
        />
      </div>
      
      {/* Dialogs */}
      <ListingDialog open={showAddListing} onOpenChange={setShowAddListing} />
      <ClientDialog open={showAddClient} onOpenChange={setShowAddClient} />
      
      <Dialog open={!!selectedProperty} onOpenChange={(open) => !open && setSelectedProperty(null)}>
        <DialogContent className="sm:max-w-[1000px] p-0">
          {selectedProperty && (
            <ProjectDetail 
              property={selectedProperty} 
              onClose={() => setSelectedProperty(null)} 
            />
          )}
        </DialogContent>
      </Dialog>
      
      <AIAssistant />
    </AppShell>
  );
};

export default Index;

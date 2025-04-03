
import { useState } from "react";
import AppShell from "@/components/layout/AppShell";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import DealHeader from "@/components/deals/DealHeader";
import DealsList from "@/components/deals/DealsList";
import DealsDashboard from "@/components/deals/DealsDashboard";

const Deals = () => {
  const [activeTab, setActiveTab] = useState("all");
  
  return (
    <AppShell>
      <div className="space-y-6">
        <DealHeader />
        
        <Tabs defaultValue="all" onValueChange={setActiveTab}>
          <TabsList className="mb-6">
            <TabsTrigger value="all">All Deals</TabsTrigger>
            <TabsTrigger value="initiated">Initiated</TabsTrigger>
            <TabsTrigger value="docs">Docs in Progress</TabsTrigger>
            <TabsTrigger value="legal">Legal Review</TabsTrigger>
            <TabsTrigger value="closed">Closed</TabsTrigger>
            <TabsTrigger value="dashboard">Dashboard</TabsTrigger>
          </TabsList>
          
          <TabsContent value="all">
            <DealsList status="all" />
          </TabsContent>
          
          <TabsContent value="initiated">
            <DealsList status="initiated" />
          </TabsContent>
          
          <TabsContent value="docs">
            <DealsList status="docs" />
          </TabsContent>
          
          <TabsContent value="legal">
            <DealsList status="legal" />
          </TabsContent>
          
          <TabsContent value="closed">
            <DealsList status="closed" />
          </TabsContent>
          
          <TabsContent value="dashboard">
            <DealsDashboard />
          </TabsContent>
        </Tabs>
      </div>
    </AppShell>
  );
};

export default Deals;

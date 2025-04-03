
import { useState } from "react";
import AppShell from "@/components/layout/AppShell";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import AnalyticsHeader from "@/components/analytics/AnalyticsHeader";
import BrokerPerformance from "@/components/analytics/BrokerPerformance";
import MarketInsights from "@/components/analytics/MarketInsights";
import ProjectAnalytics from "@/components/analytics/ProjectAnalytics";
import AnalyticsReports from "@/components/analytics/AnalyticsReports";

const Analytics = () => {
  return (
    <AppShell>
      <div className="space-y-6">
        <AnalyticsHeader />
        
        <Tabs defaultValue="performance">
          <TabsList className="mb-6">
            <TabsTrigger value="performance">Broker Performance</TabsTrigger>
            <TabsTrigger value="market">Market Insights</TabsTrigger>
            <TabsTrigger value="projects">Project Analytics</TabsTrigger>
            <TabsTrigger value="reports">Reports</TabsTrigger>
          </TabsList>
          
          <TabsContent value="performance">
            <BrokerPerformance />
          </TabsContent>
          
          <TabsContent value="market">
            <MarketInsights />
          </TabsContent>
          
          <TabsContent value="projects">
            <ProjectAnalytics />
          </TabsContent>
          
          <TabsContent value="reports">
            <AnalyticsReports />
          </TabsContent>
        </Tabs>
      </div>
    </AppShell>
  );
};

export default Analytics;

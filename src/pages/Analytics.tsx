
import { useState } from "react";
import AppShell from "@/components/layout/AppShell";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import AnalyticsHeader from "@/components/analytics/AnalyticsHeader";
import BrokerPerformance from "@/components/analytics/BrokerPerformance";
import MarketInsights from "@/components/analytics/MarketInsights";
import ProjectAnalytics from "@/components/analytics/ProjectAnalytics";
import AnalyticsReports from "@/components/analytics/AnalyticsReports";
import MarketPerformance from "@/components/analytics/MarketPerformance";
import MarketShare from "@/components/analytics/MarketShare";
import AreasComparison from "@/components/analytics/AreasComparison";
import TransactionAnalysis from "@/components/analytics/TransactionAnalysis";

const Analytics = () => {
  const [activeTab, setActiveTab] = useState("performance");

  return (
    <AppShell>
      <div className="space-y-6">
        <AnalyticsHeader />
        
        <Tabs value={activeTab} onValueChange={setActiveTab}>
          <TabsList className="mb-6 flex flex-wrap">
            <TabsTrigger value="performance">Broker Performance</TabsTrigger>
            <TabsTrigger value="market">Market Insights</TabsTrigger>
            <TabsTrigger value="projects">Project Analytics</TabsTrigger>
            <TabsTrigger value="marketPerformance">Market Performance</TabsTrigger>
            <TabsTrigger value="marketShare">Market Share</TabsTrigger>
            <TabsTrigger value="areasComparison">Areas Comparison</TabsTrigger>
            <TabsTrigger value="transactions">Transactions</TabsTrigger>
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
          
          <TabsContent value="marketPerformance">
            <MarketPerformance />
          </TabsContent>
          
          <TabsContent value="marketShare">
            <MarketShare />
          </TabsContent>
          
          <TabsContent value="areasComparison">
            <AreasComparison />
          </TabsContent>
          
          <TabsContent value="transactions">
            <TransactionAnalysis />
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


import { useState } from "react";
import AppShell from "@/components/layout/AppShell";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import AnalyticsHeader from "@/components/analytics/AnalyticsHeader";
import MarketInsights from "@/components/analytics/MarketInsights";
import ProjectAnalytics from "@/components/analytics/ProjectAnalytics";
import AnalyticsReports from "@/components/analytics/AnalyticsReports";
import MarketPerformance from "@/components/analytics/market-performance/MarketPerformance";
import MarketShare from "@/components/analytics/MarketShare";
import AreasComparison from "@/components/analytics/AreasComparison";
import AreaAnalysis from "@/components/analytics/AreaAnalysis";
import TransactionAnalysis from "@/components/analytics/TransactionAnalysis";
import ReportGenerator from "@/components/analytics/ReportGenerator";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";

const Analytics = () => {
  const [activeTab, setActiveTab] = useState("market");
  const [showReportGenerator, setShowReportGenerator] = useState(false);

  return (
    <AppShell>
      <div className="space-y-6">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <AnalyticsHeader />
          <Button 
            onClick={() => setShowReportGenerator(!showReportGenerator)}
            className="bg-blue-600 hover:bg-blue-700"
          >
            <Download className="mr-2 h-4 w-4" />
            {showReportGenerator ? "Hide Report Generator" : "Generate Custom Report"}
          </Button>
        </div>
        
        {showReportGenerator && (
          <div className="mb-6">
            <ReportGenerator />
          </div>
        )}
        
        <Tabs defaultValue={activeTab} value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="mb-6 flex flex-wrap">
            <TabsTrigger value="market">Market Insights</TabsTrigger>
            <TabsTrigger value="projects">Project Analytics</TabsTrigger>
            <TabsTrigger value="marketPerformance">Market Performance</TabsTrigger>
            <TabsTrigger value="marketShare">Market Share</TabsTrigger>
            <TabsTrigger value="areaAnalysis">Area Analysis</TabsTrigger>
            <TabsTrigger value="areasComparison">Areas Comparison</TabsTrigger>
            <TabsTrigger value="transactions">Transactions</TabsTrigger>
            <TabsTrigger value="reports">Reports</TabsTrigger>
          </TabsList>
          
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
          
          <TabsContent value="areaAnalysis">
            <AreaAnalysis />
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

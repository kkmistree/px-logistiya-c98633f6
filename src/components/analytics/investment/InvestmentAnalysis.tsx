
import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Download, Upload, Play } from "lucide-react";
import MarketPerformanceTab from "./MarketPerformanceTab";
import PropertyAnalysisTab from "./PropertyAnalysisTab";
import CashFlowTab from "./CashFlowTab";
import SensitivityTab from "./SensitivityTab";

const InvestmentAnalysis = () => {
  const [activeTab, setActiveTab] = useState("market");

  return (
    <div className="space-y-6">
      <div className="flex flex-col space-y-4">
        <div>
          <h1 className="text-2xl font-bold">Investment Analysis</h1>
          <p className="text-slate-500">Analyze investment performance and projections across your portfolio</p>
        </div>
        
        <div className="flex flex-wrap gap-2">
          <Button variant="outline" size="sm">
            <Upload className="w-4 h-4 mr-2" />
            Import Data
          </Button>
          <Button variant="outline" size="sm">
            <Download className="w-4 h-4 mr-2" />
            Export Report
          </Button>
          <Button size="sm">
            <Play className="w-4 h-4 mr-2" />
            Run Analysis
          </Button>
        </div>
      </div>

      <Tabs defaultValue={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="mb-4">
          <TabsTrigger value="market">Market Performance</TabsTrigger>
          <TabsTrigger value="property">Property Analysis</TabsTrigger>
          <TabsTrigger value="cashflow">Cash Flow</TabsTrigger>
          <TabsTrigger value="sensitivity">Sensitivity Analysis</TabsTrigger>
        </TabsList>

        <TabsContent value="market">
          <MarketPerformanceTab />
        </TabsContent>

        <TabsContent value="property">
          <PropertyAnalysisTab />
        </TabsContent>

        <TabsContent value="cashflow">
          <CashFlowTab />
        </TabsContent>

        <TabsContent value="sensitivity">
          <SensitivityTab />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default InvestmentAnalysis;

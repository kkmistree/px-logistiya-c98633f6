
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { formatCurrency } from "@/utils/format";

interface MetricCardProps {
  title: string;
  value: string;
  change: string;
  trend: "up" | "down";
  timeframe: string;
}

const MetricCard = ({ title, value, change, trend, timeframe }: MetricCardProps) => {
  return (
    <Card className="bg-slate-900 text-white">
      <CardContent className="p-6">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-sm font-medium text-slate-300">{title}</h3>
          <Badge variant="outline" className="text-xs text-slate-300">{timeframe}</Badge>
        </div>
        <p className="text-2xl font-bold mt-2">{value}</p>
        <div className="flex items-center mt-1">
          <Badge variant={trend === "up" ? "success" : "destructive"} className="text-xs">
            {change} {trend === "up" ? "↑" : "↓"}
          </Badge>
        </div>
      </CardContent>
    </Card>
  );
};

interface ReportMetricsProps {
  timeframe: "daily" | "weekly" | "monthly" | "yearly";
  propertyType?: string;
  area?: string;
}

const ReportMetrics = ({ timeframe, propertyType = "all", area = "all" }: ReportMetricsProps) => {
  // In a real implementation, this data would be fetched based on the timeframe, property type, and area
  const getTimeframeLabel = () => {
    switch (timeframe) {
      case "daily":
        return "Today";
      case "weekly":
        return "This Week";
      case "monthly":
        return "This Month";
      case "yearly":
        return "This Year";
      default:
        return "Current Period";
    }
  };

  return (
    <div className="space-y-6">
      <h2 className="text-xl font-bold">Key Metrics <span className="text-slate-500 font-normal text-sm">({getTimeframeLabel()})</span></h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <MetricCard
          title="Transaction Volume"
          value={timeframe === "daily" ? "8" : timeframe === "weekly" ? "45" : timeframe === "monthly" ? "185" : "2,845"}
          change={timeframe === "daily" ? "+12.3%" : timeframe === "weekly" ? "+8.7%" : timeframe === "monthly" ? "+14.3%" : "+18.7%"}
          trend="up"
          timeframe={getTimeframeLabel()}
        />
        
        <MetricCard
          title="Transaction Value"
          value={timeframe === "daily" ? "SAR 135M" : timeframe === "weekly" ? "SAR 1.2B" : timeframe === "monthly" ? "SAR 24.9B" : "SAR 326B"}
          change={timeframe === "daily" ? "+8.5%" : timeframe === "weekly" ? "+10.2%" : timeframe === "monthly" ? "+14.4%" : "+22.1%"}
          trend="up"
          timeframe={getTimeframeLabel()}
        />
        
        <MetricCard
          title="Median Price"
          value={timeframe === "daily" ? "SAR 14,125,000" : timeframe === "weekly" ? "SAR 13,850,000" : timeframe === "monthly" ? "SAR 13,950,000" : "SAR 15,395,000"}
          change={timeframe === "daily" ? "+0.8%" : timeframe === "weekly" ? "+1.2%" : timeframe === "monthly" ? "+3.6%" : "+4.6%"}
          trend="up"
          timeframe={getTimeframeLabel()}
        />
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <MetricCard
          title="Median Price per sqm"
          value={timeframe === "daily" ? "SAR 1,852" : timeframe === "weekly" ? "SAR 1,848" : timeframe === "monthly" ? "SAR 1,845" : "SAR 1,845"}
          change={timeframe === "daily" ? "+1.2%" : timeframe === "weekly" ? "+0.9%" : timeframe === "monthly" ? "+3.1%" : "+3.1%"}
          trend="up"
          timeframe={getTimeframeLabel()}
        />
        
        <MetricCard
          title="Industrial Yield"
          value={timeframe === "daily" ? "7.5%" : timeframe === "weekly" ? "7.4%" : timeframe === "monthly" ? "7.3%" : "7.3%"}
          change={timeframe === "daily" ? "+0.3%" : timeframe === "weekly" ? "+0.2%" : timeframe === "monthly" ? "+0.4%" : "+0.4%"}
          trend="up"
          timeframe={getTimeframeLabel()}
        />
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <MetricCard
          title="Under-Development Sales"
          value={timeframe === "daily" ? "5" : timeframe === "weekly" ? "28" : timeframe === "monthly" ? "85" : "1,284"}
          change={timeframe === "daily" ? "+15.2%" : timeframe === "weekly" ? "+12.8%" : timeframe === "monthly" ? "+18.4%" : "+27.2%"}
          trend="up"
          timeframe={getTimeframeLabel()}
        />
        
        <MetricCard
          title="Ready Property Sales"
          value={timeframe === "daily" ? "3" : timeframe === "weekly" ? "17" : timeframe === "monthly" ? "100" : "1,561"}
          change={timeframe === "daily" ? "+5.4%" : timeframe === "weekly" ? "+3.2%" : timeframe === "monthly" ? "+7.1%" : "+9.5%"}
          trend="up"
          timeframe={getTimeframeLabel()}
        />
        
        <MetricCard
          title="Average Time on Market"
          value={timeframe === "daily" ? "16.3 weeks" : timeframe === "weekly" ? "16.2 weeks" : timeframe === "monthly" ? "16.9 weeks" : "17.5 weeks"}
          change={timeframe === "daily" ? "-2.7%" : timeframe === "weekly" ? "-3.5%" : timeframe === "monthly" ? "-7.2%" : "-8.4%"}
          trend="down"
          timeframe={getTimeframeLabel()}
        />
      </div>
    </div>
  );
};

export default ReportMetrics;

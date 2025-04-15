
import { TrendingUp, ArrowUpCircle, ChevronRight } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

interface InsightItem {
  label: string;
  value: string;
  trend: number;
}

const MarketInsightCard = () => {
  const navigate = useNavigate();
  const insights: InsightItem[] = [
    { label: "Average ROI", value: "8.5%", trend: 12 },
    { label: "Occupancy Rate", value: "94%", trend: 5 },
    { label: "Market Growth", value: "15%", trend: 8 }
  ];

  return (
    <Card>
      <CardHeader className="pb-2">
        <CardTitle className="flex items-center text-lg">
          <TrendingUp size={18} className="mr-2 text-green-500" />
          Market Performance
        </CardTitle>
        <CardDescription>Latest market trends and analytics</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-2">
          {insights.map((insight) => (
            <div key={insight.label} className="flex justify-between items-center p-2 bg-slate-50 rounded">
              <div className="flex flex-col">
                <span className="text-sm font-medium">{insight.label}</span>
                <span className="text-lg font-semibold">{insight.value}</span>
              </div>
              <div className="flex items-center text-green-600">
                <ArrowUpCircle size={14} className="mr-1" />
                {insight.trend}%
              </div>
            </div>
          ))}
          <Button 
            variant="secondary" 
            size="sm" 
            className="w-full mt-2" 
            onClick={() => navigate('/analytics')}
          >
            View Full Analytics
            <ChevronRight size={14} className="ml-1" />
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default MarketInsightCard;

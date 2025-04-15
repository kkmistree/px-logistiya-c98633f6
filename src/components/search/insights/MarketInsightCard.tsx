
import { TrendingUp, ArrowUp, BarChart3, PieChart, AlertCircle } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

interface InsightItem {
  label: string;
  value: string;
  change: {
    value: string;
    positive: boolean;
  };
  icon: React.ReactNode;
}

const MarketInsightCard = () => {
  const navigate = useNavigate();
  
  const insights: InsightItem[] = [
    { 
      label: "Avg. Industrial ROI", 
      value: "8.7%", 
      change: { value: "+0.6%", positive: true },
      icon: <PieChart size={18} className="text-blue-500" />
    },
    { 
      label: "YoY Price Growth", 
      value: "12.5%", 
      change: { value: "+2.3%", positive: true },
      icon: <TrendingUp size={18} className="text-green-500" />
    },
    { 
      label: "Transaction Volume", 
      value: "↑ 15%", 
      change: { value: "+5%", positive: true },
      icon: <BarChart3 size={18} className="text-purple-500" />
    }
  ];

  return (
    <Card className="border-slate-200">
      <CardHeader className="pb-3 bg-slate-50 border-b border-slate-100">
        <CardTitle className="text-lg font-semibold flex items-center">
          <TrendingUp size={18} className="mr-2 text-estate-primary" />
          Market Pulse
        </CardTitle>
        <CardDescription>
          Industrial sector performance indicators
        </CardDescription>
      </CardHeader>
      
      <CardContent className="p-4">
        <div className="space-y-3">
          {insights.map((insight, index) => (
            <div 
              key={index} 
              className="flex justify-between items-center p-3 bg-slate-50 rounded-md border border-slate-100"
            >
              <div className="flex items-center">
                <div className="mr-3 p-1.5 bg-white rounded-md border border-slate-100">
                  {insight.icon}
                </div>
                <div>
                  <p className="text-xs text-slate-500">{insight.label}</p>
                  <p className="text-base font-semibold">{insight.value}</p>
                </div>
              </div>
              <div className={`px-2 py-1 rounded-md text-xs font-medium ${
                insight.change.positive ? 'bg-green-50 text-green-700' : 'bg-red-50 text-red-700'
              }`}>
                {insight.change.value}
              </div>
            </div>
          ))}
        </div>
      </CardContent>
      
      <CardFooter className="pt-0 pb-4 px-4">
        <div className="w-full">
          <div className="flex items-center bg-amber-50 p-2 rounded-md border border-amber-100 mb-3">
            <AlertCircle size={14} className="text-amber-500 mr-2 flex-shrink-0" />
            <p className="text-xs text-amber-700">
              Riyadh Industrial City shows highest growth rate in Q2 2025
            </p>
          </div>
          
          <Button 
            variant="outline" 
            size="sm" 
            className="w-full text-estate-primary hover:bg-estate-primary/5 border-estate-primary/20"
            onClick={() => navigate('/analytics')}
          >
            View Full Market Analysis
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
};

export default MarketInsightCard;

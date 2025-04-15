
import { TrendingUp, ArrowUp, BarChart3, PieChart, AlertCircle, Info } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

interface InsightItem {
  label: string;
  value: string;
  change: {
    value: string;
    positive: boolean;
  };
  icon: React.ReactNode;
  description?: string;
}

const MarketInsightCard = () => {
  const navigate = useNavigate();
  
  const insights: InsightItem[] = [
    { 
      label: "Avg. Industrial ROI", 
      value: "8.7%", 
      change: { value: "+0.6%", positive: true },
      icon: <PieChart size={18} className="text-blue-500" />,
      description: "Return on investment for industrial properties across Saudi Arabia"
    },
    { 
      label: "YoY Price Growth", 
      value: "12.5%", 
      change: { value: "+2.3%", positive: true },
      icon: <TrendingUp size={18} className="text-green-500" />,
      description: "Year-over-year price appreciation for industrial assets"
    },
    { 
      label: "Transaction Volume", 
      value: "↑ 15%", 
      change: { value: "+5%", positive: true },
      icon: <BarChart3 size={18} className="text-purple-500" />,
      description: "Increase in transaction volume compared to previous quarter"
    }
  ];

  return (
    <Card className="border-slate-200 shadow-sm hover:shadow-md transition-all duration-300">
      <CardHeader className="pb-3 bg-slate-50 border-b border-slate-100">
        <div className="flex justify-between items-start">
          <CardTitle className="text-lg font-semibold flex items-center">
            <TrendingUp size={18} className="mr-2 text-estate-primary" />
            Market Pulse
          </CardTitle>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant="ghost" size="icon" className="h-6 w-6">
                  <Info size={14} className="text-slate-400" />
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p className="max-w-xs text-xs">Key performance indicators for the industrial real estate market</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
        <CardDescription className="text-xs mt-1">
          Industrial sector performance indicators
        </CardDescription>
      </CardHeader>
      
      <CardContent className="p-4">
        <div className="space-y-3">
          {insights.map((insight, index) => (
            <TooltipProvider key={index}>
              <Tooltip>
                <TooltipTrigger asChild>
                  <div 
                    className="flex justify-between items-center p-3 bg-slate-50 rounded-md border border-slate-100 hover:border-slate-200 cursor-help transition-colors"
                  >
                    <div className="flex items-center">
                      <div className="mr-3 p-1.5 bg-white rounded-md border border-slate-100">
                        {insight.icon}
                      </div>
                      <div>
                        <p className="text-xs text-slate-500">{insight.label}</p>
                        <p className="text-lg font-bold">{insight.value}</p>
                      </div>
                    </div>
                    <div className={`px-2 py-1 rounded-md text-xs font-medium ${
                      insight.change.positive ? 'bg-green-50 text-green-700' : 'bg-red-50 text-red-700'
                    }`}>
                      {insight.change.value}
                    </div>
                  </div>
                </TooltipTrigger>
                <TooltipContent side="right">
                  <p className="text-xs max-w-xs">{insight.description}</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          ))}
        </div>
      </CardContent>
      
      <CardFooter className="pt-0 pb-4 px-4">
        <div className="w-full">
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <div className="flex items-center bg-amber-50 p-2 rounded-md border border-amber-100 mb-3 cursor-help">
                  <AlertCircle size={14} className="text-amber-500 mr-2 flex-shrink-0" />
                  <p className="text-xs text-amber-700">
                    Riyadh Industrial City shows highest growth rate in Q2 2025
                  </p>
                </div>
              </TooltipTrigger>
              <TooltipContent>
                <p className="text-xs max-w-xs">Industrial properties in Riyadh have outperformed other regions this quarter with 15.3% growth</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
          
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

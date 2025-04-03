
import { ArrowUpRight, TrendingUp, TrendingDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";

const MarketInsights = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  
  const insights = [
    {
      title: "Dubai Marina 1BR prices up 8% MoM",
      description: "Consider exit strategy for investments in this area.",
      trend: "up",
      category: "Price Trends",
      action: () => {
        toast({
          title: "Price trends analysis",
          description: "Opening detailed analysis for Dubai Marina 1BR"
        });
        navigate("/analytics?location=Dubai+Marina&type=1BR");
      }
    },
    {
      title: "Sobha Hartland Phase 3 launches in 30 days",
      description: "Notify investors interested in premium developments.",
      trend: "info",
      category: "Launch Alerts",
      action: () => {
        toast({
          title: "Launch alert",
          description: "Setting reminder for Sobha Hartland Phase 3 launch"
        });
      }
    },
    {
      title: "Rental yields declining in JVC for studios",
      description: "Current average yield: 6.2%, down from 7.1% last quarter.",
      trend: "down",
      category: "Rental Market",
      action: () => {
        toast({
          title: "Rental market analysis",
          description: "Opening detailed rental yield report for JVC studios"
        });
        navigate("/analytics?metric=rental_yield&location=JVC&type=Studio");
      }
    },
    {
      title: "Palm Jumeirah showing steady appreciation",
      description: "12.5% year-on-year increase in property values.",
      trend: "up",
      category: "Investment",
      action: () => {
        toast({
          title: "Investment analysis",
          description: "Opening detailed appreciation report for Palm Jumeirah"
        });
        navigate("/analytics?location=Palm+Jumeirah&metric=appreciation");
      }
    },
  ];

  const handleViewAll = () => {
    navigate("/analytics");
  };

  return (
    <div className="bg-white rounded-lg shadow-sm p-4">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold text-estate-primary">AI Market Insights</h2>
        <Button 
          variant="ghost" 
          size="sm" 
          className="text-estate-secondary"
          onClick={handleViewAll}
        >
          View All <ArrowUpRight size={16} className="ml-1" />
        </Button>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {insights.map((insight, index) => (
          <Card 
            key={index} 
            className="p-4 border border-slate-200 hover:border-estate-secondary/50 transition-colors cursor-pointer"
            onClick={insight.action}
          >
            <div className="flex justify-between">
              <span className="text-xs font-medium text-slate-500 bg-slate-100 px-2 py-1 rounded-full">
                {insight.category}
              </span>
              {insight.trend === "up" && (
                <TrendingUp size={18} className="text-estate-success" />
              )}
              {insight.trend === "down" && (
                <TrendingDown size={18} className="text-estate-danger" />
              )}
            </div>
            <h3 className="text-sm font-semibold mt-2 text-estate-primary">{insight.title}</h3>
            <p className="text-xs text-slate-600 mt-1">{insight.description}</p>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default MarketInsights;

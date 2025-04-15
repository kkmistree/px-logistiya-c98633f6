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
      title: "Industrial Growth",
      description: "Dammam Industrial City sees 15% QoQ increase in warehouse demand",
      category: "Price Trends",
      action: () => {
        toast({
          title: "Market Analysis",
          description: "Opening detailed analysis for Dammam Industrial City"
        });
        navigate("/analytics?location=Dammam&type=warehouse");
      }
    },
    {
      title: "New Development",
      description: "MODON announces Phase 4 expansion in Sudair Industrial City",
      category: "Development",
      action: () => {
        toast({
          title: "Development Alert",
          description: "Setting reminder for Sudair Industrial City Phase 4"
        });
      }
    },
    {
      title: "Yield Analysis",
      description: "Industrial yields rising in Jeddah Industrial City",
      category: "Investment",
      subtext: "Current average yield: 8.5%, up from 7.2% last quarter"
    },
    {
      title: "Market Trend",
      description: "Riyadh industrial corridor showing steady appreciation",
      category: "Market Analysis",
      subtext: "18.5% year-on-year increase in property values"
    },
  ];

  const handleViewAll = () => {
    navigate("/analytics");
  };

  return (
    <div className="bg-white rounded-lg shadow-sm p-4">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold text-estate-primary">Industrial Market Insights</h2>
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
              {insight.title.includes("Growth") && (
                <TrendingUp size={18} className="text-estate-success" />
              )}
              {insight.title.includes("Yield") && (
                <TrendingUp size={18} className="text-estate-success" />
              )}
            </div>
            <h3 className="text-sm font-semibold mt-2 text-estate-primary">{insight.title}</h3>
            <p className="text-xs text-slate-600 mt-1">{insight.description}</p>
            {insight.subtext && (
              <p className="text-xs text-estate-secondary mt-1">{insight.subtext}</p>
            )}
          </Card>
        ))}
      </div>
    </div>
  );
};

export default MarketInsights;

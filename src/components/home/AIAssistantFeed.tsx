import { ArrowUpRight, Brain, AlertTriangle, MessageSquare, Factory } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";

const AIAssistantFeed = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  
  const insights = [
    {
      id: "ai1",
      message: "New industrial land allocation in Dammam Industrial City - 3 plots match your investor criteria",
      action: "View Matches",
      type: "opportunity",
      priority: "high"
    },
    {
      id: "ai2",
      message: "MODON announces new regulations for industrial facilities in Riyadh",
      action: "Review Changes",
      type: "market",
      priority: "high"
    },
    {
      id: "ai3",
      message: "2 warehouses in Jeddah Industrial City match recent search criteria",
      action: "View Properties",
      type: "mandate",
      priority: "medium"
    },
    {
      id: "ai4",
      message: "Industrial land prices in Sudair City up 12% - consider portfolio review",
      action: "Analyze Market",
      type: "opportunity",
      priority: "medium"
    }
  ];

  const handleViewAll = () => {
    navigate("/ai-assistant");
  };
  
  const handleTakeAction = (insightId: string) => {
    const insight = insights.find(i => i.id === insightId);
    
    if (insight) {
      toast({
        title: "AI Assistant",
        description: `Taking action on: ${insight.message}`
      });
      
      switch(insight.type) {
        case "client":
          navigate("/clients/details/123");
          break;
        case "market":
          navigate("/analytics?location=Palm+Jumeirah");
          break;
        case "mandate":
          navigate("/mandates/matches");
          break;
        case "opportunity":
          navigate("/opportunities/new");
          break;
        default:
          navigate("/ai-assistant");
      }
    }
  };
  
  const getInsightIcon = (type: string) => {
    switch(type) {
      case "client": return <MessageSquare size={16} className="text-blue-500" />;
      case "market": return <AlertTriangle size={16} className="text-amber-500" />;
      case "mandate": return <Factory size={16} className="text-purple-500" />;
      case "opportunity": return <Brain size={16} className="text-green-500" />;
      default: return <Brain size={16} className="text-slate-500" />;
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-sm p-4">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold text-estate-primary">AI Market Intelligence</h2>
        <Button 
          variant="ghost" 
          size="sm" 
          className="text-estate-secondary"
          onClick={handleViewAll}
        >
          View All <ArrowUpRight size={16} className="ml-1" />
        </Button>
      </div>
      
      <div className="space-y-3">
        {insights.map((insight) => (
          <Card 
            key={insight.id}
            className={`p-3 border cursor-pointer transition-colors ${
              insight.priority === "high" 
                ? "border-purple-200 hover:border-purple-300 bg-purple-50" 
                : "border-slate-200 hover:border-slate-300"
            }`}
            onClick={() => handleTakeAction(insight.id)}
          >
            <div className="flex items-start gap-3">
              <div className="mt-0.5">
                {getInsightIcon(insight.type)}
              </div>
              <div className="flex-1">
                <p className="text-sm font-medium text-estate-primary">{insight.message}</p>
              </div>
              <Button 
                size="sm" 
                className={insight.priority === "high" ? "bg-purple-600 hover:bg-purple-700 text-white" : ""}
                variant={insight.priority === "high" ? "default" : "outline"}
                onClick={(e) => {
                  e.stopPropagation();
                  handleTakeAction(insight.id);
                }}
              >
                {insight.action}
              </Button>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default AIAssistantFeed;

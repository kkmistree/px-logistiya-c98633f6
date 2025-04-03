
import { ArrowUpRight, Brain, AlertTriangle, MessageSquare, Rocket } from "lucide-react";
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
      message: "You haven't contacted Mohammed Al Farsi in 7 days.",
      action: "Schedule Follow-up",
      type: "client",
      priority: "medium"
    },
    {
      id: "ai2",
      message: "Palm Jumeirah prices jumped 9% — suggest exit strategy?",
      action: "Create Strategy",
      type: "market",
      priority: "high"
    },
    {
      id: "ai3",
      message: "This mandate matches 2 new listings — send shortlist?",
      action: "View Matches",
      type: "mandate",
      priority: "high"
    },
    {
      id: "ai4",
      message: "3 clients looking for Dubai Hills — new listing available",
      action: "Send Alerts",
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
  
  // Helper to get icon based on insight type
  const getInsightIcon = (type: string) => {
    switch(type) {
      case "client": return <MessageSquare size={16} className="text-blue-500" />;
      case "market": return <AlertTriangle size={16} className="text-amber-500" />;
      case "mandate": return <Rocket size={16} className="text-purple-500" />;
      case "opportunity": return <Brain size={16} className="text-green-500" />;
      default: return <Brain size={16} className="text-slate-500" />;
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-sm p-4">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold text-estate-primary">AI Assistant Feed</h2>
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

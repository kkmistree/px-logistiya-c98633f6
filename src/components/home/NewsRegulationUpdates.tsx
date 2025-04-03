
import { ArrowUpRight, FileText, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";

const NewsRegulationUpdates = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  
  const updates = [
    {
      id: "n1",
      title: "DLD announces new service fees for property registration",
      date: "Apr 1, 2025",
      source: "Dubai Land Department",
      url: "#",
      type: "regulation"
    },
    {
      id: "n2",
      title: "UAE Central Bank updates mortgage lending requirements",
      date: "Mar 28, 2025",
      source: "UAE Central Bank",
      url: "#",
      type: "regulation"
    },
    {
      id: "n3",
      title: "JVC introduces new zoning rules for mixed-use developments",
      date: "Mar 25, 2025",
      source: "RERA",
      url: "#",
      type: "community"
    }
  ];

  const handleViewAll = () => {
    navigate("/news-updates");
  };
  
  const handleReadMore = (updateId: string, event: React.MouseEvent) => {
    event.stopPropagation();
    const update = updates.find(u => u.id === updateId);
    
    toast({
      title: "Opening article",
      description: `Reading article: ${update?.title}`
    });
    
    // In a real app, would open the URL in a new tab
    window.open(update?.url, '_blank');
  };
  
  const handleUpdateClick = (updateId: string) => {
    navigate(`/news-updates/${updateId}`);
  };

  return (
    <div className="bg-white rounded-lg shadow-sm p-4">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold text-estate-primary">News & Regulation Updates</h2>
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
        {updates.map((update) => (
          <Card 
            key={update.id} 
            className="p-3 border border-slate-200 hover:border-estate-secondary/50 transition-colors cursor-pointer"
            onClick={() => handleUpdateClick(update.id)}
          >
            <div className="flex items-start justify-between">
              <div className="flex gap-3">
                <FileText size={16} className={update.type === "regulation" ? "text-blue-500" : "text-green-500"} />
                <div>
                  <h3 className="text-sm font-medium text-estate-primary">{update.title}</h3>
                  <div className="flex items-center text-xs text-slate-500 mt-1">
                    <span>{update.date}</span>
                    <span className="mx-1">•</span>
                    <span>{update.source}</span>
                  </div>
                </div>
              </div>
              
              <Button 
                size="sm" 
                variant="ghost" 
                className="text-estate-secondary"
                onClick={(e) => handleReadMore(update.id, e)}
              >
                <ExternalLink size={14} />
              </Button>
            </div>
          </Card>
        ))}
      </div>
      
      <Button 
        variant="outline" 
        size="sm" 
        className="w-full mt-3 text-estate-primary"
        onClick={() => navigate("/knowledge-base")}
      >
        View Knowledge Base
      </Button>
    </div>
  );
};

export default NewsRegulationUpdates;

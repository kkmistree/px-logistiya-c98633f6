
import { ArrowUpRight, Building, Eye, Plus, Share2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useNavigate } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";

const DeveloperWatchlist = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  
  const developments = [
    {
      id: "dev1",
      name: "Sobha SeaHaven",
      phase: "Phase 2",
      status: "Just Launched",
      developer: "Sobha",
      isHot: true,
      inventory: 24
    },
    {
      id: "dev2",
      name: "Ellington Reserve",
      phase: "Penthouse Collection",
      status: "Registration Open",
      developer: "Ellington",
      isHot: false,
      inventory: 8
    },
    {
      id: "dev3",
      name: "Emaar Beach Vista",
      phase: "Tower B",
      status: "Coming Soon",
      developer: "Emaar",
      isHot: true,
      inventory: 40
    }
  ];

  const handleViewAll = () => {
    navigate("/developments");
  };
  
  const handleRequestUnits = (developmentId: string) => {
    toast({
      title: "Unit request sent",
      description: "Your request for inventory has been submitted to the developer"
    });
  };
  
  const handleAddToMandate = (developmentId: string) => {
    toast({
      title: "Adding to mandate",
      description: "Select which client mandate to add this development to"
    });
    navigate(`/mandates/add-development/${developmentId}`);
  };
  
  const handleOpenDevelopment = (developmentId: string) => {
    navigate(`/developments/${developmentId}`);
  };

  return (
    <div className="bg-white rounded-lg shadow-sm p-4">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold text-estate-primary">Developer Watchlist</h2>
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
        {developments.map((dev) => (
          <Card 
            key={dev.id} 
            className={`p-3 border ${dev.isHot ? 'border-red-200' : 'border-slate-200'} hover:border-estate-secondary/50 transition-colors`}
          >
            <div className="flex justify-between items-start">
              <div>
                <div className="flex items-center gap-2">
                  <h3 className="font-medium text-estate-primary">{dev.name}</h3>
                  <Badge variant="outline" className={dev.isHot ? 'text-red-500 border-red-200 bg-red-50' : ''}>
                    {dev.phase}
                  </Badge>
                  {dev.isHot && (
                    <Badge className="bg-red-500">Hot</Badge>
                  )}
                </div>
                <p className="text-xs text-slate-600 mt-1">
                  <span className="font-medium">{dev.developer}</span> • {dev.status}
                </p>
                <p className="text-xs text-slate-500 mt-1">
                  <Building size={12} className="inline mr-1" /> 
                  {dev.inventory} units available in your inventory
                </p>
              </div>
              
              <Button 
                variant="ghost" 
                size="sm" 
                className="text-estate-secondary"
                onClick={() => handleOpenDevelopment(dev.id)}
              >
                <Eye size={16} />
              </Button>
            </div>
            
            <div className="flex gap-2 mt-3">
              <Button 
                size="sm" 
                className="flex-1 bg-estate-primary hover:bg-estate-primary/90 text-white text-xs"
                onClick={() => handleRequestUnits(dev.id)}
              >
                Request Units
              </Button>
              <Button 
                size="sm" 
                variant="outline" 
                className="flex-1 text-xs"
                onClick={() => handleAddToMandate(dev.id)}
              >
                <Plus size={14} className="mr-1" /> Add to Mandate
              </Button>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default DeveloperWatchlist;

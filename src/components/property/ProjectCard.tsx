
import { Property } from "@/types/property";
import { cn } from "@/lib/utils";
import { Building, Calendar, MapPin, Heart, Share2, ExternalLink } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { formatCurrency } from "@/utils/format";
import { useState } from "react";
import { toast } from "sonner";

interface ProjectCardProps {
  property: Property;
  className?: string;
  onClick?: () => void;
}

const ProjectCard = ({ property, className, onClick }: ProjectCardProps) => {
  const [isSaved, setIsSaved] = useState(false);
  
  const handleSaveProject = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsSaved(!isSaved);
    toast.success(isSaved ? "Project removed from saved projects" : "Project saved successfully");
  };

  const handleShareProject = (e: React.MouseEvent) => {
    e.stopPropagation();
    toast.success("Project link copied to clipboard");
  };

  const getStatusColor = (status: Property["status"]) => {
    switch (status) {
      case "available":
        return 'bg-green-500 text-white';
      case "under-development":
        return 'bg-estate-secondary text-white';
      case "investment-opportunity":
        return 'bg-blue-500 text-white';
      default:
        return 'bg-slate-500 text-white';
    }
  };

  const formatCompletionDate = (date?: string) => {
    if (!date) return "Ready";
    const d = new Date(date);
    return `${d.toLocaleString('default', { month: 'short' })} ${d.getFullYear()}`;
  };

  return (
    <div 
      className={cn(
        "project-card flex flex-col bg-white border rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all cursor-pointer", 
        className
      )}
      onClick={onClick}
    >
      <div className="relative">
        <div className="absolute top-3 left-3 z-10 flex flex-col gap-2">
          <Badge className={cn("rounded-md", getStatusColor(property.status))}>
            {property.status === "available" ? "Available" : 
             property.status === "under-development" ? "Under Development" : "Investment Opportunity"}
          </Badge>
          
          {property.matchScore && (
            <Badge variant="default" className="bg-purple-600 text-white rounded-md">
              {property.matchScore}% Match
            </Badge>
          )}

          {property.exclusive && (
            <Badge variant="outline" className="bg-amber-500 text-white border-none rounded-md">
              Exclusive
            </Badge>
          )}
        </div>
        
        <div className="absolute top-3 right-3 z-10 flex gap-1">
          <Button 
            size="icon" 
            variant="ghost" 
            className="bg-white/90 hover:bg-white text-estate-primary rounded-full h-8 w-8"
            onClick={handleShareProject}
          >
            <Share2 size={14} />
          </Button>

          <Button 
            size="icon" 
            variant="ghost" 
            className={`${isSaved ? 'bg-estate-primary text-white' : 'bg-white/90 hover:bg-white text-estate-primary'} rounded-full h-8 w-8`}
            onClick={handleSaveProject}
          >
            <Heart size={14} />
          </Button>
        </div>
        
        <img 
          src={property.images[0]} 
          alt={property.title}
          className="h-48 w-full object-cover"
        />
        
        {property.completionDate && (
          <div className="absolute bottom-3 right-3 bg-black/70 text-white text-xs px-2 py-1 rounded">
            Delivery: {formatCompletionDate(property.completionDate)}
          </div>
        )}
      </div>
      
      <div className="p-4 flex-1 flex flex-col">
        <h3 className="text-lg font-semibold mb-1 text-estate-primary">{property.title}</h3>
        
        <div className="flex items-center gap-1 text-sm text-slate-500 mb-3">
          <MapPin size={14} />
          <span>{property.location.area}, {property.location.community}</span>
        </div>
        
        <div className="flex justify-between mb-3">
          <div className="flex items-center gap-1">
            <Building size={16} className="text-slate-400" />
            <span className="text-sm capitalize">{property.type}</span>
          </div>
          
          {property.developer && (
            <div className="text-sm text-slate-500">
              {property.developer}
            </div>
          )}
        </div>
        
        <div className="flex justify-between items-center mb-4">
          <div className="font-semibold">
            Launch Price: <span className="text-purple-600">{formatCurrency(property.price, "SAR")}</span>
          </div>
          
          <div className="text-sm">
            {property.area} sqm
          </div>
        </div>
        
        <div className="mt-auto">
          <Button size="sm" className="w-full bg-estate-primary hover:bg-estate-primary/90 text-white">
            <ExternalLink size={14} className="mr-1" />
            View Project
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;

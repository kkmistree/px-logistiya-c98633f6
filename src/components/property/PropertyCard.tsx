
import { Property } from "@/types/property";
import { cn } from "@/lib/utils";
import { Building, Calendar, MapPin, Maximize2, Bed, Bath, Heart, Share2, Plus, ExternalLink } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { formatCurrency } from "@/utils/format";
import { useCurrency } from "@/contexts/CurrencyContext";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { toast } from "sonner";

interface PropertyCardProps {
  property: Property;
  className?: string;
}

const PropertyCard = ({ property, className }: PropertyCardProps) => {
  const { currency } = useCurrency();
  
  const getStatusColor = (status: Property["status"]) => {
    switch (status) {
      case "ready":
        return "bg-estate-success text-white";
      case "off-plan":
        return "bg-estate-secondary text-white";
      case "resale":
        return "bg-estate-warning text-white";
      default:
        return "bg-slate-500 text-white";
    }
  };

  const formatCompletionDate = (date?: string) => {
    if (!date) return "Ready";
    const d = new Date(date);
    return `${d.toLocaleString('default', { month: 'short' })} ${d.getFullYear()}`;
  };

  const handleShareProperty = () => {
    toast.success("Property shared to clipboard!");
  };

  const handleAddToClient = (clientName: string) => {
    toast.success(`Property added to ${clientName}'s mandate`);
  };

  return (
    <div className={cn("property-card flex flex-col h-full border rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all", className)}>
      <div className="relative">
        <div className="absolute top-3 left-3 z-10 flex flex-col gap-2">
          <Badge variant="secondary" className={cn("rounded-md", getStatusColor(property.status))}>
            {property.status === "ready" ? "Ready" : 
             property.status === "off-plan" ? "Off-Plan" : "Resale"}
          </Badge>
          
          {property.matchScore && (
            <Badge variant="default" className="bg-estate-accent text-estate-primary rounded-md">
              {property.matchScore}% Match
            </Badge>
          )}

          {property.exclusive && (
            <Badge variant="outline" className="bg-purple-600 text-white border-none rounded-md">
              Exclusive
            </Badge>
          )}
          
          {property.createdAt && new Date(property.createdAt) > new Date(Date.now() - 7 * 24 * 60 * 60 * 1000) && (
            <Badge variant="outline" className="bg-estate-warning/90 text-white border-none rounded-md">
              New
            </Badge>
          )}
        </div>
        
        <div className="absolute top-3 right-3 z-10 flex gap-1">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button size="icon" variant="ghost" className="bg-white/80 hover:bg-white text-estate-primary rounded-full h-8 w-8">
                <Share2 size={14} />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem onClick={handleShareProperty}>Copy Link</DropdownMenuItem>
              <DropdownMenuItem onClick={handleShareProperty}>Share via WhatsApp</DropdownMenuItem>
              <DropdownMenuItem onClick={handleShareProperty}>Share via Email</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <Button size="icon" variant="ghost" className="bg-white/80 hover:bg-white text-estate-primary rounded-full h-8 w-8">
            <Heart size={14} />
          </Button>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button size="icon" variant="ghost" className="bg-white/80 hover:bg-white text-estate-primary rounded-full h-8 w-8">
                <Plus size={14} />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem onClick={() => handleAddToClient("Ahmed Al-Mansour")}>Add to Ahmed's Mandate</DropdownMenuItem>
              <DropdownMenuItem onClick={() => handleAddToClient("Sarah Johnson")}>Add to Sarah's Mandate</DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Add to Deal Room</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
        
        <img 
          src={property.images[0]} 
          alt={property.title}
          className="h-48 w-full object-cover"
        />
      </div>
      
      <div className="p-4 flex-1 flex flex-col">
        <div className="mb-2 flex items-center gap-1 text-sm text-slate-500">
          <MapPin size={14} />
          <span>{property.location.area}, {property.location.community}</span>
        </div>
        
        <h3 className="text-lg font-semibold line-clamp-1 mb-1 text-estate-primary">{property.title}</h3>
        
        <p className="text-sm text-slate-500 line-clamp-2 mb-4">{property.description}</p>
        
        <div className="flex justify-between mb-4">
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
        
        <div className="flex justify-between mb-4">
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1">
              <Bed size={16} className="text-slate-400" />
              <span className="text-sm">{property.bedrooms}</span>
            </div>
            
            <div className="flex items-center gap-1">
              <Bath size={16} className="text-slate-400" />
              <span className="text-sm">{property.bathrooms}</span>
            </div>
            
            <div className="flex items-center gap-1">
              <Maximize2 size={16} className="text-slate-400" />
              <span className="text-sm">{property.area} sqft</span>
            </div>
          </div>
          
          {property.status === "off-plan" && (
            <div className="flex items-center gap-1">
              <Calendar size={16} className="text-slate-400" />
              <span className="text-sm">{formatCompletionDate(property.completionDate)}</span>
            </div>
          )}
        </div>
        
        <div className="mt-auto flex items-end justify-between">
          <div>
            <span className="text-xl font-semibold text-estate-primary">{formatCurrency(property.price, currency.code)}</span>
            <div className="flex flex-col">
              {property.roi && (
                <div className="text-xs text-estate-success font-medium">ROI: {property.roi}%</div>
              )}
              <div className="text-xs text-slate-500">
                {formatCurrency(Math.round(property.price / property.area), currency.code)}/sqft
              </div>
            </div>
          </div>
          
          <Button size="sm" className="bg-estate-primary hover:bg-estate-primary/90 text-white">
            <ExternalLink size={14} className="mr-1" />
            View Details
          </Button>
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;

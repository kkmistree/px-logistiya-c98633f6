
import { Property } from "@/types/property";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { formatCurrency } from "@/utils/format";
import { ArrowUpRight, Building, ExternalLink, Heart, MapPin, Square } from "lucide-react";

interface PropertyListViewProps {
  properties: Property[];
  onPropertySelect: (property: Property) => void;
  showMatchScore?: boolean;
}

const PropertyListView = ({ 
  properties, 
  onPropertySelect, 
  showMatchScore = false 
}: PropertyListViewProps) => {
  const getStatusBadgeClass = (status: Property["status"]) => {
    switch (status) {
      case "available":
        return "bg-green-600 hover:bg-green-700";
      case "under-development":
        return "bg-amber-600 hover:bg-amber-700";
      case "investment-opportunity":
        return "bg-blue-600 hover:bg-blue-700";
      default:
        return "bg-slate-600 hover:bg-slate-700";
    }
  };

  const getStatusLabel = (status: Property["status"]) => {
    switch (status) {
      case "available":
        return "Available";
      case "under-development":
        return "Under Development";
      case "investment-opportunity":
        return "Investment";
      default:
        return status;
    }
  };

  return (
    <div className="space-y-4">
      {properties.map((property) => (
        <div 
          key={property.id}
          className="bg-white border rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow cursor-pointer"
          onClick={() => onPropertySelect(property)}
        >
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
            <div className="md:col-span-3 h-[160px] relative">
              <img 
                src={property.images[0]} 
                alt={property.title} 
                className="w-full h-full object-cover"
              />
              <Badge className={`absolute top-3 left-3 ${getStatusBadgeClass(property.status)}`}>
                {getStatusLabel(property.status)}
              </Badge>
            </div>
            
            <div className="md:col-span-9 p-4 flex flex-col">
              <div className="flex justify-between items-start">
                <h3 className="text-lg font-semibold">{property.title}</h3>
                <div className="text-lg font-bold text-estate-primary">
                  {formatCurrency(property.price)}
                </div>
              </div>
              
              <div className="flex items-center gap-1 text-slate-500 text-sm my-1">
                <MapPin size={14} />
                <span>{property.location.area}, {property.location.community}</span>
              </div>
              
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-x-4 gap-y-1 mt-2 mb-3">
                <div className="flex items-center gap-1 text-sm">
                  <Building size={14} className="text-slate-400" />
                  <span className="capitalize">{property.type}</span>
                </div>
                
                <div className="flex items-center gap-1 text-sm">
                  <Square size={14} className="text-slate-400" />
                  <span>{property.area} sqm</span>
                </div>
                
                {property.status === "available" ? (
                  <div className="flex items-center gap-1 text-green-600 text-sm font-medium">
                    <ArrowUpRight size={14} />
                    <span>Ready to Occupy</span>
                  </div>
                ) : property.status === "under-development" ? (
                  <div className="flex items-center gap-1 text-amber-600 text-sm font-medium">
                    <ArrowUpRight size={14} />
                    <span>Q{Math.floor(Math.random() * 4) + 1} {new Date().getFullYear() + 1}</span>
                  </div>
                ) : null}
              </div>
              
              <p className="text-sm text-slate-600 mb-3 line-clamp-2">{property.description}</p>
              
              <div className="flex flex-wrap gap-1 mb-4">
                {property.tags.map((tag, idx) => (
                  <Badge key={idx} variant="secondary" className="text-xs">
                    {tag}
                  </Badge>
                ))}
                {showMatchScore && property.matchScore && (
                  <Badge className="bg-purple-600 text-white ml-auto">
                    {property.matchScore}% Match
                  </Badge>
                )}
              </div>
              
              <div className="flex justify-between items-center mt-auto">
                <div className="text-sm text-slate-500">
                  {property.developer || "Unknown Developer"}
                </div>
                <div className="space-x-2">
                  <Button size="sm" variant="outline">
                    <Heart size={14} />
                  </Button>
                  <Button size="sm">
                    <ExternalLink size={14} className="mr-1" />
                    View Details
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
      
      {properties.length === 0 && (
        <div className="py-8 sm:py-16 text-center">
          <h3 className="text-lg font-medium text-gray-500">No properties found</h3>
          <p className="text-gray-400 mt-2">Try adjusting your filters or search criteria</p>
        </div>
      )}
    </div>
  );
};

export default PropertyListView;

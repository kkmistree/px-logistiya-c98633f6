
import React from "react";
import { Property } from "@/types/property";
import { Building, MapPin, Warehouse, Square, ArrowUpRight } from "lucide-react";
import { formatCurrency } from "@/utils/format";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

interface PropertyCardProps {
  property: Property;
  onClick?: () => void;
}

const PropertyCard = ({ property, onClick }: PropertyCardProps) => {
  return (
    <Card className="overflow-hidden hover:shadow-md transition-shadow cursor-pointer border border-slate-200" onClick={onClick}>
      <div className="relative">
        <div className="h-[160px] bg-slate-100 relative">
          {property.images && property.images.length > 0 ? (
            <img
              src={property.images[0]}
              alt={property.title}
              className="w-full h-full object-cover"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center bg-slate-200">
              <Warehouse className="text-slate-400" size={40} />
            </div>
          )}
          
          {property.exclusive && (
            <Badge className="absolute top-2 left-2 bg-estate-primary">Exclusive</Badge>
          )}
          
          {property.matchScore && (
            <Badge className="absolute top-2 right-2 bg-green-600">
              {property.matchScore}% Match
            </Badge>
          )}
        </div>
        
        <div className="p-3">
          <div className="flex justify-between items-start mb-2">
            <h3 className="font-medium text-base line-clamp-1">{property.title}</h3>
            <span className="font-bold text-estate-primary">{formatCurrency(property.price)}</span>
          </div>
          
          <div className="flex items-center text-sm text-slate-500 mb-2">
            <MapPin size={14} className="mr-1 flex-shrink-0" />
            <span className="line-clamp-1">
              {property.location.area}, {property.location.community}
            </span>
          </div>
          
          <div className="grid grid-cols-2 gap-x-4 gap-y-1 mb-2 text-sm">
            <div className="flex items-center text-slate-700">
              <Building size={14} className="mr-1" />
              <span>{property.type}</span>
            </div>
            <div className="flex items-center text-slate-700">
              <Square size={14} className="mr-1" />
              <span>{property.area} sqm</span>
            </div>
            {property.roi && (
              <div className="flex items-center text-green-600 font-medium">
                <ArrowUpRight size={14} className="mr-1" />
                <span>ROI {property.roi}%</span>
              </div>
            )}
          </div>
          
          <div className="flex flex-wrap gap-1 mb-3">
            {property.tags.slice(0, 3).map((tag, i) => (
              <Badge key={i} variant="secondary" className="text-xs">
                {tag}
              </Badge>
            ))}
            {property.tags.length > 3 && (
              <Badge variant="outline" className="text-xs">
                +{property.tags.length - 3}
              </Badge>
            )}
          </div>
          
          <Button variant="outline" size="sm" className="w-full text-sm">
            View Details
          </Button>
        </div>
      </div>
    </Card>
  );
};

export default PropertyCard;

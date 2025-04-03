
import React from "react";
import { Property } from "@/types/property";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Building, Clock, Heart, Share2 } from "lucide-react";
import { formatCurrency } from "@/utils/format";

interface PropertyCardProps {
  property: Property;
  messageText: string;
  onMessageChange: (text: string) => void;
  onShareWithClient: (propertyId: string) => void;
  onScheduleViewing: (propertyId: string) => void;
  onSaveProperty: (propertyId: string) => void;
}

const PropertyCard = ({
  property,
  messageText,
  onMessageChange,
  onShareWithClient,
  onScheduleViewing,
  onSaveProperty
}: PropertyCardProps) => {
  return (
    <Card key={property.id} className="overflow-hidden">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-slate-100 min-h-[160px] relative flex items-center justify-center">
          <img 
            src={property.images[0]} 
            alt={property.title}
            className="object-cover w-full h-full absolute inset-0"
          />
          {property.matchScore && (
            <Badge className="absolute top-2 right-2 bg-green-600 hover:bg-green-700">
              {property.matchScore}% Match
            </Badge>
          )}
        </div>
        <div className="md:col-span-2 p-4">
          <div className="flex justify-between">
            <div>
              <h3 className="font-medium text-lg">{property.title}</h3>
              <p className="text-slate-600 text-sm">{property.location.area}, {property.location.community}</p>
            </div>
            <div className="text-right">
              <div className="text-lg font-bold">{formatCurrency(property.price)}</div>
              {property.roi && (
                <Badge variant="outline" className="text-green-600 border-green-200 bg-green-50">
                  {property.roi}% ROI
                </Badge>
              )}
            </div>
          </div>
          
          <div className="grid grid-cols-3 gap-2 my-3 text-sm text-slate-600">
            <div className="flex items-center gap-1">
              <Building size={14} />
              <span>{property.bedrooms} {property.bedrooms === 1 ? 'bed' : 'beds'}</span>
            </div>
            <div>{property.bathrooms} {property.bathrooms === 1 ? 'bath' : 'baths'}</div>
            <div>{property.area} sqft</div>
          </div>
          
          <p className="text-sm text-slate-600 line-clamp-2 mb-3">{property.description}</p>
          
          <div className="flex flex-wrap gap-1 mb-3">
            {property.tags.map((tag, i) => (
              <Badge key={i} variant="secondary" className="text-xs">{tag}</Badge>
            ))}
          </div>
          
          <div className="mt-4">
            <Textarea 
              placeholder="Add a note to send to the client"
              value={messageText}
              onChange={(e) => onMessageChange(e.target.value)}
              className="text-sm mb-2"
              rows={2}
            />
            <div className="flex flex-wrap gap-2">
              <Button 
                variant="default" 
                size="sm"
                className="flex-1"
                onClick={() => onShareWithClient(property.id)}
              >
                <Share2 size={14} className="mr-1" /> Share with Client
              </Button>
              <Button 
                variant="outline" 
                size="sm"
                className="flex-1"
                onClick={() => onScheduleViewing(property.id)}
              >
                <Clock size={14} className="mr-1" /> Schedule Viewing
              </Button>
              <Button 
                variant="outline" 
                size="sm"
                onClick={() => onSaveProperty(property.id)}
              >
                <Heart size={14} />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default PropertyCard;

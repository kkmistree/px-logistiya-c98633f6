
import React from "react";
import { Property } from "@/types/property";
import PropertyCard from "@/components/clients/page/recommendations/PropertyCard";
import { useIsMobile } from "@/hooks/use-mobile";

interface PropertyRecommendationListProps {
  recommendations: Property[];
  messageText: string;
  onMessageChange: (text: string) => void;
  onShareWithClient: (propertyId: string) => void;
  onScheduleViewing: (propertyId: string) => void;
  onSaveProperty: (propertyId: string) => void;
}

const PropertyRecommendationList = ({
  recommendations,
  messageText,
  onMessageChange,
  onShareWithClient,
  onScheduleViewing,
  onSaveProperty
}: PropertyRecommendationListProps) => {
  const isMobile = useIsMobile();
  
  return (
    <div>
      <h3 className="text-md font-medium mb-3">
        Recommended Properties ({recommendations.length})
      </h3>
      
      <div className={`${isMobile ? 'space-y-4' : 'space-y-6'}`}>
        {recommendations.map((property) => (
          <PropertyCard 
            key={property.id}
            property={property}
            messageText={messageText}
            onMessageChange={onMessageChange}
            onShareWithClient={onShareWithClient}
            onScheduleViewing={onScheduleViewing}
            onSaveProperty={onSaveProperty}
          />
        ))}
      </div>
    </div>
  );
};

export default PropertyRecommendationList;

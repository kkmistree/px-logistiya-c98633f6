
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
        Recommended Industrial Assets ({recommendations.length})
      </h3>
      
      <div className="space-y-4">
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
      
      {recommendations.length === 0 && (
        <div className="py-8 sm:py-12 text-center">
          <h3 className="text-lg font-medium text-gray-500">No assets found</h3>
          <p className="text-gray-400 mt-2">Try selecting a different investor</p>
        </div>
      )}
    </div>
  );
};

export default PropertyRecommendationList;

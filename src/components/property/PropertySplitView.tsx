
import { Property } from "@/types/property";
import ProjectCard from "@/components/property/ProjectCard";
import EnhancedMapView from "@/components/property/EnhancedMapView";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

interface PropertySplitViewProps {
  properties: Property[];
  onPropertySelect: (property: Property) => void;
}

const PropertySplitView = ({ properties, onPropertySelect }: PropertySplitViewProps) => {
  const [selectedProperty, setSelectedProperty] = useState<Property | null>(null);
  const [page, setPage] = useState(0);
  const propertiesPerPage = 3;
  const totalPages = Math.ceil(properties.length / propertiesPerPage);
  
  const displayedProperties = properties.slice(
    page * propertiesPerPage, 
    (page + 1) * propertiesPerPage
  );
  
  const handlePropertyHover = (property: Property) => {
    setSelectedProperty(property);
  };
  
  const handleNextPage = () => {
    if (page < totalPages - 1) {
      setPage(page + 1);
    }
  };
  
  const handlePreviousPage = () => {
    if (page > 0) {
      setPage(page - 1);
    }
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div className="order-2 md:order-1">
        <EnhancedMapView 
          properties={properties}
          highlightedProperty={selectedProperty}
        />
      </div>
      
      <div className="order-1 md:order-2 overflow-y-auto max-h-[70vh] bg-slate-50 rounded-md p-4">
        <div className="flex justify-between items-center mb-4">
          <h3 className="font-semibold">
            Showing {displayedProperties.length} of {properties.length} properties
          </h3>
          
          {totalPages > 1 && (
            <div className="flex items-center gap-2">
              <Button 
                variant="outline" 
                size="icon" 
                onClick={handlePreviousPage}
                disabled={page === 0}
              >
                <ChevronLeft className="h-4 w-4" />
              </Button>
              <span className="text-sm">
                {page + 1}/{totalPages}
              </span>
              <Button 
                variant="outline" 
                size="icon"
                onClick={handleNextPage}
                disabled={page === totalPages - 1}
              >
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          )}
        </div>
        
        <div className="space-y-4">
          {displayedProperties.map((property) => (
            <div 
              key={property.id} 
              className="relative transition-all hover:shadow-md"
              onMouseEnter={() => handlePropertyHover(property)}
              onMouseLeave={() => setSelectedProperty(null)}
            >
              {property.matchScore && (
                <div className="absolute top-2 right-2 z-10">
                  <Badge className="bg-estate-primary text-white font-semibold">
                    {property.matchScore}% Match
                  </Badge>
                </div>
              )}
              <ProjectCard 
                property={property}
                onClick={() => onPropertySelect(property)}
              />
            </div>
          ))}
          
          {properties.length === 0 && (
            <div className="py-20 text-center">
              <h3 className="text-lg font-medium text-gray-500">No properties found</h3>
              <p className="text-gray-400 mt-2">Try adjusting your filters or search criteria</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default PropertySplitView;

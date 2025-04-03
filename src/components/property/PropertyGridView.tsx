
import { Property } from "@/types/property";
import ProjectCard from "@/components/property/ProjectCard";
import { Badge } from "@/components/ui/badge";
import { formatCurrency } from "@/utils/format";

interface PropertyGridViewProps {
  properties: Property[];
  onPropertySelect: (property: Property) => void;
  showMatchScore?: boolean;
}

const PropertyGridView = ({ 
  properties, 
  onPropertySelect, 
  showMatchScore = false 
}: PropertyGridViewProps) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {properties.map((property) => (
        <div key={property.id} className="relative">
          {showMatchScore && property.matchScore && (
            <div className="absolute top-2 right-2 z-10">
              <Badge className="bg-estate-primary text-white font-semibold">
                {property.matchScore}% Match
              </Badge>
            </div>
          )}
          <ProjectCard 
            key={property.id} 
            property={property}
            onClick={() => onPropertySelect(property)}
          />
        </div>
      ))}
      
      {properties.length === 0 && (
        <div className="col-span-3 py-20 text-center">
          <h3 className="text-lg font-medium text-gray-500">No properties found</h3>
          <p className="text-gray-400 mt-2">Try adjusting your filters or search criteria</p>
        </div>
      )}
    </div>
  );
};

export default PropertyGridView;

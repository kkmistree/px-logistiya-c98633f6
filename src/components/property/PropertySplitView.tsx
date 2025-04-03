
import { Property } from "@/types/property";
import ProjectCard from "@/components/property/ProjectCard";
import EnhancedMapView from "@/components/property/EnhancedMapView";

interface PropertySplitViewProps {
  properties: Property[];
  onPropertySelect: (property: Property) => void;
}

const PropertySplitView = ({ properties, onPropertySelect }: PropertySplitViewProps) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div className="order-2 md:order-1">
        <EnhancedMapView properties={properties} />
      </div>
      <div className="order-1 md:order-2 overflow-y-auto max-h-[70vh]">
        <div className="space-y-4">
          {properties.slice(0, 5).map((property) => (
            <ProjectCard 
              key={property.id} 
              property={property}
              onClick={() => onPropertySelect(property)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default PropertySplitView;

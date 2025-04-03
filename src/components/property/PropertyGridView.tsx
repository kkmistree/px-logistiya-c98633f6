
import { Property } from "@/types/property";
import ProjectCard from "@/components/property/ProjectCard";

interface PropertyGridViewProps {
  properties: Property[];
  onPropertySelect: (property: Property) => void;
}

const PropertyGridView = ({ properties, onPropertySelect }: PropertyGridViewProps) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {properties.map((property) => (
        <ProjectCard 
          key={property.id} 
          property={property}
          onClick={() => onPropertySelect(property)}
        />
      ))}
    </div>
  );
};

export default PropertyGridView;


import { Property } from "@/types/property";
import PropertyGridView from "@/components/property/PropertyGridView";
import PropertyListView from "@/components/property/PropertyListView";
import PropertySplitView from "@/components/property/PropertySplitView";
import EnhancedMapView from "@/components/property/EnhancedMapView";
import { Pagination } from "@/components/ui/pagination";
import { Button } from "@/components/ui/button";

interface PropertyTabContentProps {
  tabValue: string;
  viewMode: "grid" | "list" | "split";
  properties: Property[];
  onPropertySelect: (property: Property) => void;
}

const PropertyTabContent = ({ tabValue, viewMode, properties, onPropertySelect }: PropertyTabContentProps) => {
  const renderPagination = () => (
    <div className="flex justify-center mt-6">
      <Pagination>
        <div className="flex space-x-2">
          <Button variant="outline" size="sm" disabled>Previous</Button>
          <Button variant="outline" size="sm" className="bg-estate-primary text-white">1</Button>
          <Button variant="outline" size="sm">2</Button>
          <Button variant="outline" size="sm">3</Button>
          <Button variant="outline" size="sm">...</Button>
          <Button variant="outline" size="sm">45</Button>
          <Button variant="outline" size="sm">Next</Button>
        </div>
      </Pagination>
    </div>
  );

  if (tabValue === "map") {
    return <EnhancedMapView properties={properties} />;
  }

  return (
    <>
      {viewMode === "grid" ? (
        <PropertyGridView properties={properties} onPropertySelect={onPropertySelect} />
      ) : viewMode === "list" ? (
        <PropertyListView properties={properties} />
      ) : (
        <PropertySplitView properties={properties} onPropertySelect={onPropertySelect} />
      )}
      
      {viewMode !== "split" && renderPagination()}
    </>
  );
};

export default PropertyTabContent;


import { Property } from "@/types/property";
import PropertyGridView from "@/components/property/PropertyGridView";
import PropertyListView from "@/components/property/PropertyListView";
import PropertySplitView from "@/components/property/PropertySplitView";
import EnhancedMapView from "@/components/property/EnhancedMapView";
import { Pagination } from "@/components/ui/pagination";
import { Button } from "@/components/ui/button";
import { useIsMobile } from "@/hooks/use-mobile";

interface PropertyTabContentProps {
  tabValue: string;
  viewMode: "grid" | "list" | "split";
  properties: Property[];
  onPropertySelect: (property: Property) => void;
}

const PropertyTabContent = ({ tabValue, viewMode, properties, onPropertySelect }: PropertyTabContentProps) => {
  const isMobile = useIsMobile();
  
  const renderPagination = () => (
    <div className="flex justify-center mt-6">
      <Pagination>
        <div className="flex space-x-2 overflow-x-auto pb-2 max-w-full">
          <Button variant="outline" size="sm" disabled>Previous</Button>
          <Button variant="outline" size="sm" className="bg-estate-primary text-white">1</Button>
          {!isMobile && (
            <>
              <Button variant="outline" size="sm">2</Button>
              <Button variant="outline" size="sm">3</Button>
              <Button variant="outline" size="sm">...</Button>
              <Button variant="outline" size="sm">45</Button>
            </>
          )}
          <Button variant="outline" size="sm">Next</Button>
        </div>
      </Pagination>
    </div>
  );

  if (tabValue === "map") {
    return <EnhancedMapView properties={properties} />;
  }

  // On mobile, default to grid view for better experience
  const effectiveViewMode = isMobile && viewMode === "split" ? "grid" : viewMode;

  return (
    <>
      {effectiveViewMode === "grid" ? (
        <PropertyGridView properties={properties} onPropertySelect={onPropertySelect} />
      ) : effectiveViewMode === "list" ? (
        <PropertyListView properties={properties} />
      ) : (
        <PropertySplitView properties={properties} onPropertySelect={onPropertySelect} />
      )}
      
      {effectiveViewMode !== "split" && renderPagination()}
    </>
  );
};

export default PropertyTabContent;

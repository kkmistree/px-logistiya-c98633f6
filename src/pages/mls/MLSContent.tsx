
import { useState } from "react";
import { Property, PropertyFilter } from "@/types/property";
import PropertyFilters from "@/components/property/PropertyFilters";
import ResultsHeader from "@/components/property/ResultsHeader";
import { Tabs, TabsContent } from "@/components/ui/tabs";
import PropertyTabNav from "@/components/property/PropertyTabNav";
import PropertyTabContent from "@/components/property/PropertyTabContent";
import { useIsMobile } from "@/hooks/use-mobile";

interface MLSContentProps {
  properties: Property[];
  filters: PropertyFilter;
  setFilters: (filters: PropertyFilter) => void;
  viewMode: "grid" | "list" | "split";
  filtersVisible: boolean;
  activeTab: string;
  onTabChange: (value: string) => void;
  onPropertySelect: (property: Property) => void;
}

const MLSContent = ({
  properties,
  filters,
  setFilters,
  viewMode,
  filtersVisible,
  activeTab,
  onTabChange,
  onPropertySelect,
}: MLSContentProps) => {
  const [sortOption, setSortOption] = useState("match");
  const isMobile = useIsMobile();

  const getFilteredProperties = () => {
    if (activeTab === "all") return properties;
    return properties.filter(property => property.status === activeTab.replace("-", "_"));
  };

  const filteredProperties = getFilteredProperties();

  return (
    <Tabs defaultValue="all" value={activeTab} onValueChange={onTabChange}>
      <PropertyTabNav activeTab={activeTab} onTabChange={onTabChange} />
      
      <div className="flex justify-end mb-2 sm:mb-4">
        <ResultsHeader 
          properties={filteredProperties} 
          sortOption={sortOption}
          onSortChange={setSortOption}
        />
      </div>
      
      <div className="flex flex-col md:flex-row gap-4">
        {filtersVisible && (
          <div className={`${isMobile ? 'w-full' : 'w-full md:w-64'} shrink-0`}>
            <PropertyFilters filters={filters} setFilters={setFilters} />
          </div>
        )}
        
        <div className="flex-1">
          {["all", "available", "under-development", "investment-opportunity", "map"].map((tab) => (
            <TabsContent key={tab} value={tab} className="m-0">
              <PropertyTabContent 
                tabValue={tab} 
                viewMode={viewMode} 
                properties={filteredProperties} 
                onPropertySelect={onPropertySelect} 
              />
            </TabsContent>
          ))}
        </div>
      </div>
    </Tabs>
  );
};

export default MLSContent;

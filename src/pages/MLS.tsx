
import { useState, useEffect } from "react";
import AppShell from "@/components/layout/AppShell";
import PropertyFilters from "@/components/property/PropertyFilters";
import AIAssistant from "@/components/home/AIAssistant";
import ResultsHeader from "@/components/property/ResultsHeader";
import ProjectDetail from "@/components/property/ProjectDetail";
import ProjectScorecard from "@/components/property/ProjectScorecard";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Tabs, TabsContent } from "@/components/ui/tabs";
import { getProperties } from "@/data/mockData";
import { PropertyFilter } from "@/types/property";
import { toast } from "sonner";
import { useIsMobile } from "@/hooks/use-mobile";

// Import the new components
import PropertySearchBar from "@/components/property/PropertySearchBar";
import PropertyViewOptions from "@/components/property/PropertyViewOptions";
import PropertyTabNav from "@/components/property/PropertyTabNav";
import PropertyTabContent from "@/components/property/PropertyTabContent";

const MLS = () => {
  const [filters, setFilters] = useState<PropertyFilter>({});
  const [viewMode, setViewMode] = useState<"grid" | "list" | "split">("grid");
  const [filtersVisible, setFiltersVisible] = useState(true);
  const [activeTab, setActiveTab] = useState("all");
  const [sortOption, setSortOption] = useState("match");
  const [savedSearch, setSavedSearch] = useState(false);
  const [selectedProperty, setSelectedProperty] = useState<any>(null);
  const [showDetailModal, setShowDetailModal] = useState(false);
  const [showScorecardModal, setShowScorecardModal] = useState(false);
  const isMobile = useIsMobile();
  
  const properties = getProperties(filters);

  // Get properties based on active tab
  const getFilteredProperties = () => {
    if (activeTab === "all") return properties;
    return properties.filter(property => property.status === activeTab.replace("-", "_"));
  };

  const filteredProperties = getFilteredProperties();

  const handleSearch = (query: string) => {
    console.log("Searching for:", query);
    // In a real app, this would trigger an API call with NLP processing
    toast.success(`Smart search executed for: ${query}`);
  };

  const handleSaveSearch = () => {
    setSavedSearch(!savedSearch);
    if (!savedSearch) {
      toast.success("Search saved! You'll receive alerts for new matching properties");
    } else {
      toast.info("Search removed from saved searches");
    }
  };

  const handleTabChange = (value: string) => {
    setActiveTab(value);
  };

  const handlePropertySelect = (property: any) => {
    setSelectedProperty(property);
    setShowDetailModal(true);
  };

  // Automatically hide filters on mobile
  useEffect(() => {
    if (isMobile) {
      setFiltersVisible(false);
    }
  }, [isMobile]);

  // Reset filters visibility when switching tabs on mobile
  useEffect(() => {
    if (isMobile && filtersVisible) {
      setFiltersVisible(false);
    }
  }, [activeTab, isMobile]);

  return (
    <AppShell>
      <div className="space-y-4">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 sm:gap-0">
          <div>
            <h1 className="text-xl sm:text-2xl font-bold text-estate-primary">MLS</h1>
            <p className="text-sm sm:text-base text-slate-500">Search across all properties in Dubai</p>
          </div>
          <PropertyViewOptions 
            viewMode={viewMode}
            setViewMode={setViewMode}
            filtersVisible={filtersVisible}
            setFiltersVisible={setFiltersVisible}
          />
        </div>
        
        <div className="bg-white rounded-lg shadow-sm p-3 sm:p-4 border border-slate-200">
          <Tabs defaultValue="all" value={activeTab} onValueChange={handleTabChange}>
            <PropertyTabNav activeTab={activeTab} onTabChange={handleTabChange} />
            
            <PropertySearchBar 
              onSearch={handleSearch} 
              onSaveSearch={handleSaveSearch} 
              savedSearch={savedSearch} 
            />
            
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
                <TabsContent value="all" className="m-0">
                  <PropertyTabContent 
                    tabValue="all" 
                    viewMode={viewMode} 
                    properties={filteredProperties} 
                    onPropertySelect={handlePropertySelect} 
                  />
                </TabsContent>
                
                <TabsContent value="ready" className="m-0">
                  <PropertyTabContent 
                    tabValue="ready" 
                    viewMode={viewMode} 
                    properties={filteredProperties} 
                    onPropertySelect={handlePropertySelect} 
                  />
                </TabsContent>
                
                <TabsContent value="off-plan" className="m-0">
                  <PropertyTabContent 
                    tabValue="off-plan" 
                    viewMode={viewMode} 
                    properties={filteredProperties} 
                    onPropertySelect={handlePropertySelect} 
                  />
                </TabsContent>
                
                <TabsContent value="resale" className="m-0">
                  <PropertyTabContent 
                    tabValue="resale" 
                    viewMode={viewMode} 
                    properties={filteredProperties} 
                    onPropertySelect={handlePropertySelect} 
                  />
                </TabsContent>
                
                <TabsContent value="map" className="m-0">
                  <PropertyTabContent 
                    tabValue="map" 
                    viewMode={viewMode} 
                    properties={filteredProperties} 
                    onPropertySelect={handlePropertySelect} 
                  />
                </TabsContent>
              </div>
            </div>
          </Tabs>
        </div>
      </div>
      
      <Dialog open={showDetailModal} onOpenChange={setShowDetailModal}>
        <DialogContent className={`${isMobile ? 'w-[95vw] max-w-lg p-0' : 'max-w-4xl p-0'}`}>
          {selectedProperty && (
            <ProjectDetail 
              property={selectedProperty} 
              onClose={() => setShowDetailModal(false)} 
            />
          )}
        </DialogContent>
      </Dialog>
      
      <Dialog open={showScorecardModal} onOpenChange={setShowScorecardModal}>
        <DialogContent className={`${isMobile ? 'w-[95vw] max-w-lg p-0' : 'max-w-4xl p-0'}`}>
          {selectedProperty && (
            <ProjectScorecard 
              property={selectedProperty} 
              onClose={() => setShowScorecardModal(false)} 
            />
          )}
        </DialogContent>
      </Dialog>
      
      <AIAssistant />
    </AppShell>
  );
};

export default MLS;

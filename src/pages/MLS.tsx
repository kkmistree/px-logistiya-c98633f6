
import { useState, useEffect } from "react";
import AppShell from "@/components/layout/AppShell";
import PropertyCard from "@/components/property/PropertyCard";
import ProjectCard from "@/components/property/ProjectCard";
import PropertyFilters from "@/components/property/PropertyFilters";
import AIAssistant from "@/components/home/AIAssistant";
import MapView from "@/components/property/MapView";
import EnhancedMapView from "@/components/property/EnhancedMapView";
import PropertyListView from "@/components/property/PropertyListView";
import ResultsHeader from "@/components/property/ResultsHeader";
import ProjectDetail from "@/components/property/ProjectDetail";
import ProjectScorecard from "@/components/property/ProjectScorecard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Pagination } from "@/components/ui/pagination";
import { getProperties } from "@/data/mockData";
import { PropertyFilter } from "@/types/property";
import { 
  Grid, 
  List, 
  Search, 
  SlidersHorizontal, 
  Map as MapIcon, 
  Split, 
  LayoutGrid, 
  Filter, 
  BookmarkPlus, 
  Share2
} from "lucide-react";
import { toast } from "sonner";

const MLS = () => {
  const [filters, setFilters] = useState<PropertyFilter>({});
  const [viewMode, setViewMode] = useState<"grid" | "list" | "split">("grid");
  const [filtersVisible, setFiltersVisible] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [activeTab, setActiveTab] = useState("all");
  const [sortOption, setSortOption] = useState("match");
  const [savedSearch, setSavedSearch] = useState(false);
  const [selectedProperty, setSelectedProperty] = useState<any>(null);
  const [showDetailModal, setShowDetailModal] = useState(false);
  const [showScorecardModal, setShowScorecardModal] = useState(false);
  
  const properties = getProperties(filters);

  // Get properties based on active tab
  const getFilteredProperties = () => {
    if (activeTab === "all") return properties;
    return properties.filter(property => property.status === activeTab.replace("-", "_"));
  };

  const filteredProperties = getFilteredProperties();

  const handleSearch = () => {
    console.log("Searching for:", searchQuery);
    // In a real app, this would trigger an API call with NLP processing
    toast.success(`Smart search executed for: ${searchQuery}`);
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

  const handleViewScorecard = (e: React.MouseEvent, property: any) => {
    e.stopPropagation();
    setSelectedProperty(property);
    setShowScorecardModal(true);
  };

  useEffect(() => {
    // In a real app, this would fetch properties based on filters
    console.log("Fetching properties with filters:", filters);
  }, [filters]);

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

  return (
    <AppShell>
      <div className="space-y-4">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-2xl font-bold text-estate-primary">MLS</h1>
            <p className="text-slate-500">Search across all properties in Dubai</p>
          </div>
          <div className="flex items-center gap-2">
            <Button 
              variant="outline" 
              size="icon"
              className={viewMode === "grid" ? "bg-estate-primary text-white" : ""}
              onClick={() => setViewMode("grid")}
            >
              <Grid size={18} />
            </Button>
            <Button 
              variant="outline" 
              size="icon"
              className={viewMode === "list" ? "bg-estate-primary text-white" : ""}
              onClick={() => setViewMode("list")}
            >
              <List size={18} />
            </Button>
            <Button 
              variant="outline" 
              size="icon"
              className={viewMode === "split" ? "bg-estate-primary text-white" : ""}
              onClick={() => setViewMode("split")}
            >
              <Split size={18} />
            </Button>
            <Button
              variant="outline"
              size="icon"
              className={filtersVisible ? "bg-estate-primary text-white" : ""}
              onClick={() => setFiltersVisible(!filtersVisible)}
            >
              <SlidersHorizontal size={18} />
            </Button>
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow-sm p-4 border border-slate-200">
          <Tabs defaultValue="all" value={activeTab} onValueChange={handleTabChange}>
            <div className="flex flex-wrap justify-between items-center mb-4">
              <TabsList>
                <TabsTrigger value="all">All Properties</TabsTrigger>
                <TabsTrigger value="ready">Ready</TabsTrigger>
                <TabsTrigger value="off-plan">Off-Plan</TabsTrigger>
                <TabsTrigger value="resale">Resale</TabsTrigger>
                <TabsTrigger value="map">Map View</TabsTrigger>
              </TabsList>
              
              <div className="flex gap-2">
                <Button 
                  variant="outline" 
                  size="sm"
                  className={activeTab === "all" ? "bg-estate-primary text-white" : ""}
                >
                  All
                </Button>
                <Button 
                  variant="outline" 
                  size="sm"
                  className={savedSearch ? "bg-estate-secondary text-white" : ""}
                  onClick={() => toast.success("Showing saved properties")}
                >
                  Saved
                </Button>
              </div>
            </div>
            
            <div className="flex flex-col w-full max-w-full gap-2 mb-4">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400" size={18} />
                <Input 
                  type="search" 
                  placeholder="Try 'Two bedroom in Dubai Marina under 2M with sea view'" 
                  className="pl-10 w-full"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
              <div className="flex justify-between items-center">
                <div className="flex gap-2">
                  <Button className="bg-estate-primary hover:bg-estate-primary/90 text-white" onClick={handleSearch}>
                    Smart Search
                  </Button>
                  <Button 
                    variant="outline" 
                    onClick={handleSaveSearch} 
                    className={savedSearch ? "bg-estate-secondary text-white" : ""}
                  >
                    {savedSearch ? "Saved ✓" : "Save Search"}
                  </Button>
                  <Button variant="outline">
                    <Filter size={16} className="mr-1" />
                    10 Filters
                  </Button>
                </div>
                <ResultsHeader 
                  properties={filteredProperties} 
                  sortOption={sortOption}
                  onSortChange={setSortOption}
                />
              </div>
            </div>
            
            <div className="flex gap-4">
              {filtersVisible && (
                <div className="w-64 shrink-0">
                  <PropertyFilters filters={filters} setFilters={setFilters} />
                </div>
              )}
              
              <div className="flex-1">
                <TabsContent value="all" className="m-0">
                  {viewMode === "grid" ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                      {filteredProperties.map((property) => (
                        <ProjectCard 
                          key={property.id} 
                          property={property}
                          onClick={() => handlePropertySelect(property)}
                        />
                      ))}
                    </div>
                  ) : viewMode === "list" ? (
                    <PropertyListView properties={filteredProperties} />
                  ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="order-2 md:order-1">
                        <EnhancedMapView properties={filteredProperties} />
                      </div>
                      <div className="order-1 md:order-2 overflow-y-auto max-h-[70vh]">
                        <div className="space-y-4">
                          {filteredProperties.slice(0, 5).map((property) => (
                            <ProjectCard 
                              key={property.id} 
                              property={property}
                              onClick={() => handlePropertySelect(property)}
                            />
                          ))}
                        </div>
                      </div>
                    </div>
                  )}
                  
                  {viewMode !== "split" && renderPagination()}
                </TabsContent>
                
                <TabsContent value="ready" className="m-0">
                  {viewMode === "grid" ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                      {filteredProperties.map((property) => (
                        <ProjectCard 
                          key={property.id} 
                          property={property} 
                          onClick={() => handlePropertySelect(property)}
                        />
                      ))}
                    </div>
                  ) : viewMode === "list" ? (
                    <PropertyListView properties={filteredProperties} />
                  ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="order-2 md:order-1">
                        <EnhancedMapView properties={filteredProperties} />
                      </div>
                      <div className="order-1 md:order-2 overflow-y-auto max-h-[70vh]">
                        <div className="space-y-4">
                          {filteredProperties.slice(0, 5).map((property) => (
                            <ProjectCard 
                              key={property.id} 
                              property={property}
                              onClick={() => handlePropertySelect(property)}
                            />
                          ))}
                        </div>
                      </div>
                    </div>
                  )}
                  
                  {viewMode !== "split" && renderPagination()}
                </TabsContent>
                
                <TabsContent value="off-plan" className="m-0">
                  {viewMode === "grid" ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                      {filteredProperties.map((property) => (
                        <ProjectCard 
                          key={property.id} 
                          property={property} 
                          onClick={() => handlePropertySelect(property)}
                        />
                      ))}
                    </div>
                  ) : viewMode === "list" ? (
                    <PropertyListView properties={filteredProperties} />
                  ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="order-2 md:order-1">
                        <EnhancedMapView properties={filteredProperties} />
                      </div>
                      <div className="order-1 md:order-2 overflow-y-auto max-h-[70vh]">
                        <div className="space-y-4">
                          {filteredProperties.slice(0, 5).map((property) => (
                            <ProjectCard 
                              key={property.id} 
                              property={property}
                              onClick={() => handlePropertySelect(property)}
                            />
                          ))}
                        </div>
                      </div>
                    </div>
                  )}
                  
                  {viewMode !== "split" && renderPagination()}
                </TabsContent>
                
                <TabsContent value="resale" className="m-0">
                  {viewMode === "grid" ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                      {filteredProperties.map((property) => (
                        <ProjectCard 
                          key={property.id} 
                          property={property} 
                          onClick={() => handlePropertySelect(property)}
                        />
                      ))}
                    </div>
                  ) : viewMode === "list" ? (
                    <PropertyListView properties={filteredProperties} />
                  ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="order-2 md:order-1">
                        <EnhancedMapView properties={filteredProperties} />
                      </div>
                      <div className="order-1 md:order-2 overflow-y-auto max-h-[70vh]">
                        <div className="space-y-4">
                          {filteredProperties.slice(0, 5).map((property) => (
                            <ProjectCard 
                              key={property.id} 
                              property={property}
                              onClick={() => handlePropertySelect(property)}
                            />
                          ))}
                        </div>
                      </div>
                    </div>
                  )}
                  
                  {viewMode !== "split" && renderPagination()}
                </TabsContent>
                
                <TabsContent value="map" className="m-0">
                  <EnhancedMapView properties={filteredProperties} />
                </TabsContent>
              </div>
            </div>
          </Tabs>
        </div>
      </div>
      
      <Dialog open={showDetailModal} onOpenChange={setShowDetailModal}>
        <DialogContent className="max-w-4xl p-0">
          {selectedProperty && (
            <ProjectDetail 
              property={selectedProperty} 
              onClose={() => setShowDetailModal(false)} 
            />
          )}
        </DialogContent>
      </Dialog>
      
      <Dialog open={showScorecardModal} onOpenChange={setShowScorecardModal}>
        <DialogContent className="max-w-4xl p-0">
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

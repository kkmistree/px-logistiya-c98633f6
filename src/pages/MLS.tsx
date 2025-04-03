
import { useState, useEffect } from "react";
import AppShell from "@/components/layout/AppShell";
import PropertyCard from "@/components/property/PropertyCard";
import PropertyFilters from "@/components/property/PropertyFilters";
import AIAssistant from "@/components/home/AIAssistant";
import MapView from "@/components/property/MapView";
import PropertyListView from "@/components/property/PropertyListView";
import ResultsHeader from "@/components/property/ResultsHeader";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { getProperties } from "@/data/mockData";
import { PropertyFilter } from "@/types/property";
import { Grid, List, Search, SlidersHorizontal } from "lucide-react";
import { toast } from "sonner";

const MLS = () => {
  const [filters, setFilters] = useState<PropertyFilter>({});
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [filtersVisible, setFiltersVisible] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [activeTab, setActiveTab] = useState("all");
  const [sortOption, setSortOption] = useState("match");
  const [savedSearch, setSavedSearch] = useState(false);
  
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

  useEffect(() => {
    // In a real app, this would fetch properties based on filters
    console.log("Fetching properties with filters:", filters);
  }, [filters]);

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
                  <Button variant="outline" onClick={handleSaveSearch} className={savedSearch ? "bg-estate-secondary text-white" : ""}>
                    {savedSearch ? "Saved ✓" : "Save Search"}
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
                        <PropertyCard 
                          key={property.id} 
                          property={property} 
                        />
                      ))}
                    </div>
                  ) : (
                    <PropertyListView properties={filteredProperties} />
                  )}
                </TabsContent>
                
                <TabsContent value="ready" className="m-0">
                  {viewMode === "grid" ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                      {filteredProperties.map((property) => (
                        <PropertyCard 
                          key={property.id} 
                          property={property} 
                        />
                      ))}
                    </div>
                  ) : (
                    <PropertyListView properties={filteredProperties} />
                  )}
                </TabsContent>
                
                <TabsContent value="off-plan" className="m-0">
                  {viewMode === "grid" ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                      {filteredProperties.map((property) => (
                        <PropertyCard 
                          key={property.id} 
                          property={property} 
                        />
                      ))}
                    </div>
                  ) : (
                    <PropertyListView properties={filteredProperties} />
                  )}
                </TabsContent>
                
                <TabsContent value="resale" className="m-0">
                  {viewMode === "grid" ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                      {filteredProperties.map((property) => (
                        <PropertyCard 
                          key={property.id} 
                          property={property} 
                        />
                      ))}
                    </div>
                  ) : (
                    <PropertyListView properties={filteredProperties} />
                  )}
                </TabsContent>
                
                <TabsContent value="map" className="m-0">
                  <MapView properties={filteredProperties} />
                </TabsContent>
              </div>
            </div>
          </Tabs>
        </div>
      </div>
      
      <AIAssistant />
    </AppShell>
  );
};

export default MLS;

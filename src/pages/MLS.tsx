
import { useState, useEffect } from "react";
import AppShell from "@/components/layout/AppShell";
import PropertyCard from "@/components/property/PropertyCard";
import PropertyFilters from "@/components/property/PropertyFilters";
import AIAssistant from "@/components/home/AIAssistant";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { getProperties } from "@/data/mockData";
import { PropertyFilter } from "@/types/property";
import { Grid, List, MapPin, Search, SlidersHorizontal } from "lucide-react";

const MLS = () => {
  const [filters, setFilters] = useState<PropertyFilter>({});
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [filtersVisible, setFiltersVisible] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  
  const properties = getProperties(filters);

  useEffect(() => {
    // In a real app, this would fetch properties based on filters
    console.log("Fetching properties with filters:", filters);
  }, [filters]);

  return (
    <AppShell>
      <div className="space-y-4">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-2xl font-bold text-estate-primary">Universal MLS</h1>
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
          <Tabs defaultValue="all">
            <div className="flex flex-wrap justify-between items-center mb-4">
              <TabsList>
                <TabsTrigger value="all">All Properties</TabsTrigger>
                <TabsTrigger value="ready">Ready</TabsTrigger>
                <TabsTrigger value="off-plan">Off-Plan</TabsTrigger>
                <TabsTrigger value="resale">Resale</TabsTrigger>
                <TabsTrigger value="map">Map View</TabsTrigger>
              </TabsList>
            </div>
            
            <div className="flex w-full max-w-full gap-2 mb-4">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400" size={18} />
                <Input 
                  type="search" 
                  placeholder="Search properties by location, developer, features..." 
                  className="pl-10 w-full"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
              <Button className="bg-estate-primary hover:bg-estate-primary/90 text-white">
                Search
              </Button>
            </div>
            
            <div className="flex gap-4">
              {filtersVisible && (
                <div className="w-64 shrink-0">
                  <PropertyFilters filters={filters} setFilters={setFilters} />
                </div>
              )}
              
              <div className="flex-1">
                <TabsContent value="all" className="m-0">
                  <div className={`grid ${
                    viewMode === "grid" 
                      ? "grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
                      : "grid-cols-1"
                  } gap-4`}>
                    {properties.map((property) => (
                      <PropertyCard 
                        key={property.id} 
                        property={property} 
                        className={viewMode === "list" ? "flex flex-row" : ""}
                      />
                    ))}
                  </div>
                </TabsContent>
                
                <TabsContent value="ready" className="m-0">
                  <div className={`grid ${
                    viewMode === "grid" 
                      ? "grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
                      : "grid-cols-1"
                  } gap-4`}>
                    {properties
                      .filter(property => property.status === "ready")
                      .map((property) => (
                        <PropertyCard 
                          key={property.id} 
                          property={property} 
                          className={viewMode === "list" ? "flex flex-row" : ""}
                        />
                      ))}
                  </div>
                </TabsContent>
                
                <TabsContent value="off-plan" className="m-0">
                  <div className={`grid ${
                    viewMode === "grid" 
                      ? "grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
                      : "grid-cols-1"
                  } gap-4`}>
                    {properties
                      .filter(property => property.status === "off-plan")
                      .map((property) => (
                        <PropertyCard 
                          key={property.id} 
                          property={property} 
                          className={viewMode === "list" ? "flex flex-row" : ""}
                        />
                      ))}
                  </div>
                </TabsContent>
                
                <TabsContent value="resale" className="m-0">
                  <div className={`grid ${
                    viewMode === "grid" 
                      ? "grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
                      : "grid-cols-1"
                  } gap-4`}>
                    {properties
                      .filter(property => property.status === "resale")
                      .map((property) => (
                        <PropertyCard 
                          key={property.id} 
                          property={property} 
                          className={viewMode === "list" ? "flex flex-row" : ""}
                        />
                      ))}
                  </div>
                </TabsContent>
                
                <TabsContent value="map" className="m-0">
                  <div className="relative bg-slate-100 rounded-lg h-[600px] flex items-center justify-center">
                    <div className="text-center">
                      <MapPin size={48} className="mx-auto text-estate-primary opacity-30" />
                      <p className="mt-2 text-slate-500">Map view will be implemented here</p>
                      <Button className="mt-4 bg-estate-primary hover:bg-estate-primary/90 text-white">
                        View as List Instead
                      </Button>
                    </div>
                  </div>
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

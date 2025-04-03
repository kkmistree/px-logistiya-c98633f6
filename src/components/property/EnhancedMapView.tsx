
import { useEffect, useRef, useState } from "react";
import { Property } from "@/types/property";
import { Button } from "@/components/ui/button";
import { Loader2, Map, Layers, Maximize2, MapPin, RefreshCw, Filter, Search } from "lucide-react";
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import ProjectCard from "./ProjectCard";
import { toast } from "sonner";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import ProjectDetail from "./ProjectDetail";

interface EnhancedMapViewProps {
  properties: Property[];
}

const EnhancedMapView = ({ properties }: EnhancedMapViewProps) => {
  const mapRef = useRef<HTMLDivElement>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [mapStyle, setMapStyle] = useState("standard");
  const [selectedProperty, setSelectedProperty] = useState<Property | null>(null);
  const [isDetailOpen, setIsDetailOpen] = useState(false);
  const [visibleProperties, setVisibleProperties] = useState<Property[]>([]);
  const [mapMode, setMapMode] = useState<"satellite" | "map">("map");
  
  useEffect(() => {
    // This would initialize a real map library in a production implementation
    const timer = setTimeout(() => {
      setIsLoading(false);
      setVisibleProperties(properties.slice(0, 10));
    }, 1500);

    return () => clearTimeout(timer);
  }, [properties]);

  const handlePropertySelect = (property: Property) => {
    setSelectedProperty(property);
    setIsDetailOpen(true);
  };

  const handleClosePropertyDetails = () => {
    setIsDetailOpen(false);
  };

  const handleSearchArea = () => {
    toast.success("Searching this area...");
  };

  const renderMapMarker = (property: Property, index: number) => {
    // Calculate different positions based on index to distribute markers
    const positions = [
      { left: '20%', top: '30%' },
      { left: '30%', top: '40%' },
      { left: '40%', top: '50%' },
      { left: '50%', top: '35%' },
      { left: '60%', top: '45%' },
      { left: '70%', top: '50%' },
      { left: '25%', top: '55%' },
      { left: '35%', top: '65%' },
      { left: '45%', top: '70%' },
      { left: '55%', top: '60%' },
    ];
    
    const pos = positions[index % positions.length];
    
    return (
      <div 
        key={property.id}
        className="absolute cursor-pointer group transition-all duration-300"
        style={{ 
          left: pos.left, 
          top: pos.top, 
        }}
        onClick={() => handlePropertySelect(property)}
      >
        <div className="w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center border border-estate-primary group-hover:bg-estate-primary transition-colors z-10">
          <div className="w-8 h-8 bg-estate-primary text-white rounded-full flex items-center justify-center group-hover:bg-white group-hover:text-estate-primary transition-colors font-medium">
            {formatPrice(property.price)}
          </div>
        </div>
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 scale-95 group-hover:opacity-100 group-hover:scale-100 transition-all duration-300 bg-white shadow-lg rounded-lg p-2 z-20 w-48">
          <div className="text-sm font-medium text-estate-primary">{property.title}</div>
          <div className="text-xs text-slate-500">{property.location.area}</div>
        </div>
      </div>
    );
  };

  const formatPrice = (price: number) => {
    if (price >= 1000000) {
      return `${(price / 1000000).toFixed(1)}M`;
    } else if (price >= 1000) {
      return `${(price / 1000).toFixed(0)}K`;
    }
    return price;
  };

  return (
    <div className="relative h-[calc(100vh-180px)] rounded-lg overflow-hidden">
      {isLoading ? (
        <div className="absolute inset-0 flex items-center justify-center bg-slate-100">
          <div className="text-center">
            <Loader2 size={40} className="mx-auto animate-spin text-estate-primary mb-4" />
            <p className="text-slate-500">Loading map data...</p>
          </div>
        </div>
      ) : (
        <>
          <div 
            ref={mapRef} 
            className="h-full w-full bg-slate-200"
            style={{ 
              backgroundImage: mapMode === "map" 
                ? "url('https://api.mapbox.com/styles/v1/mapbox/streets-v11/static/55.2708,25.2048,10,0/1200x600?access_token=placeholder')"
                : "url('https://api.mapbox.com/styles/v1/mapbox/satellite-streets-v11/static/55.2708,25.2048,10,0/1200x600?access_token=placeholder')",
              backgroundSize: "cover",
              backgroundPosition: "center"
            }}
          >
            {visibleProperties.map((property, index) => renderMapMarker(property, index))}
          </div>

          <div className="absolute top-4 left-4 right-4 flex justify-between items-center">
            <div className="flex gap-2">
              <div className="flex">
                <Button 
                  variant={mapMode === "map" ? "default" : "outline"}
                  className={`rounded-r-none ${mapMode === "map" ? "bg-estate-primary text-white" : "bg-white"}`}
                  onClick={() => setMapMode("map")}
                >
                  Map
                </Button>
                <Button 
                  variant={mapMode === "satellite" ? "default" : "outline"}
                  className={`rounded-l-none ${mapMode === "satellite" ? "bg-estate-primary text-white" : "bg-white"}`}
                  onClick={() => setMapMode("satellite")}
                >
                  Satellite
                </Button>
              </div>
              
              <Select value={mapStyle} onValueChange={setMapStyle}>
                <SelectTrigger className="w-[180px] bg-white">
                  <SelectValue placeholder="Map Style" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="standard">Standard</SelectItem>
                  <SelectItem value="cluster">Show Clusters</SelectItem>
                  <SelectItem value="price">Show Price Heatmap</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            <div className="flex gap-2">
              <div className="relative w-64">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400" size={16} />
                <Input placeholder="Search area..." className="pl-10 bg-white" />
              </div>
              
              <Button 
                variant="outline" 
                className="bg-white"
                onClick={handleSearchArea}
              >
                <Filter size={16} className="mr-2" />
                Filters
              </Button>
              
              <Button
                variant="outline"
                className="bg-white"
                onClick={() => toast.success("Map refreshed with latest properties")}
              >
                <RefreshCw size={16} />
              </Button>
              
              <Button
                variant="outline"
                className="bg-white"
                onClick={() => toast.success("Map expanded to fullscreen")}
              >
                <Maximize2 size={16} />
              </Button>
            </div>
          </div>

          <div className="absolute bottom-4 left-4 flex items-center gap-2 bg-white p-2 rounded shadow-md text-sm">
            <Map size={16} className="text-estate-primary" />
            <span>{visibleProperties.length} properties found</span>
          </div>

          <div className="absolute bottom-4 right-4">
            <div className="flex flex-col gap-1">
              <Button variant="outline" className="bg-white h-8 w-8 p-0">+</Button>
              <Button variant="outline" className="bg-white h-8 w-8 p-0">-</Button>
            </div>
          </div>

          <Dialog open={isDetailOpen} onOpenChange={setIsDetailOpen}>
            <DialogContent className="max-w-4xl p-0">
              {selectedProperty && (
                <ProjectDetail property={selectedProperty} onClose={handleClosePropertyDetails} />
              )}
            </DialogContent>
          </Dialog>
        </>
      )}
    </div>
  );
};

export default EnhancedMapView;

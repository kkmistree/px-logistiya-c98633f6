
import { useEffect, useRef, useState } from "react";
import { Property } from "@/types/property";
import { Button } from "@/components/ui/button";
import { Loader2, Map, Layers } from "lucide-react";
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import PropertyCard from "./PropertyCard";

interface MapViewProps {
  properties: Property[];
}

const MapView = ({ properties }: MapViewProps) => {
  const mapRef = useRef<HTMLDivElement>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [mapStyle, setMapStyle] = useState("standard");
  const [selectedProperty, setSelectedProperty] = useState<Property | null>(null);
  const [isDrawingEnabled, setIsDrawingEnabled] = useState(false);

  useEffect(() => {
    // This would initialize a real map library in a production implementation
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  const handlePropertySelect = (property: Property) => {
    setSelectedProperty(property);
  };

  const handleClosePropertyDetails = () => {
    setSelectedProperty(null);
  };

  const toggleDrawMode = () => {
    setIsDrawingEnabled(!isDrawingEnabled);
  };

  return (
    <div className="relative h-[600px] rounded-lg overflow-hidden">
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
              backgroundImage: "url('https://api.mapbox.com/styles/v1/mapbox/streets-v11/static/55.2708,25.2048,10,0/1200x600?access_token=placeholder')",
              backgroundSize: "cover",
              backgroundPosition: "center"
            }}
          >
            {/* Placeholder for actual map component */}
            {properties.slice(0, 5).map((property, index) => (
              <div 
                key={property.id}
                className="absolute w-8 h-8 bg-estate-primary text-white rounded-full flex items-center justify-center cursor-pointer hover:bg-estate-secondary transition-colors"
                style={{ 
                  left: `${20 + (index * 10)}%`, 
                  top: `${30 + (index * 8)}%` 
                }}
                onClick={() => handlePropertySelect(property)}
              >
                {index + 1}
              </div>
            ))}
          </div>

          <div className="absolute top-4 right-4 flex gap-2">
            <Select value={mapStyle} onValueChange={setMapStyle}>
              <SelectTrigger className="w-[180px] bg-white">
                <SelectValue placeholder="Map Style" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="standard">Standard</SelectItem>
                <SelectItem value="satellite">Satellite</SelectItem>
                <SelectItem value="dark">Dark Mode</SelectItem>
              </SelectContent>
            </Select>
            
            <Button 
              variant={isDrawingEnabled ? "default" : "outline"} 
              className={isDrawingEnabled ? "bg-estate-primary text-white" : "bg-white"}
              onClick={toggleDrawMode}
            >
              Draw Area
            </Button>
          </div>

          <div className="absolute bottom-4 left-4 flex items-center gap-2 bg-white p-2 rounded shadow-md text-sm">
            <Map size={16} className="text-estate-primary" />
            <span>Map data provided by Mapbox</span>
          </div>

          <div className="absolute bottom-4 right-4 bg-white p-2 rounded shadow-md">
            <Layers size={20} className="text-estate-primary" />
          </div>

          {selectedProperty && (
            <div className="absolute bottom-0 left-0 w-full md:w-auto md:left-8 md:bottom-8 p-4 transition-all">
              <div className="relative bg-white rounded-lg shadow-lg max-w-md">
                <Button 
                  variant="ghost" 
                  size="sm"
                  onClick={handleClosePropertyDetails}
                  className="absolute top-2 right-2 z-10"
                >
                  ✕
                </Button>
                <PropertyCard property={selectedProperty} />
              </div>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default MapView;

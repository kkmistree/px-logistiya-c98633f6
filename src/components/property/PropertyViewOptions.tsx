
import { Button } from "@/components/ui/button";
import { Grid, List, Split, SlidersHorizontal } from "lucide-react";

interface PropertyViewOptionsProps {
  viewMode: "grid" | "list" | "split";
  setViewMode: (mode: "grid" | "list" | "split") => void;
  filtersVisible: boolean;
  setFiltersVisible: (visible: boolean) => void;
}

const PropertyViewOptions = ({ 
  viewMode, 
  setViewMode, 
  filtersVisible, 
  setFiltersVisible 
}: PropertyViewOptionsProps) => {
  return (
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
  );
};

export default PropertyViewOptions;

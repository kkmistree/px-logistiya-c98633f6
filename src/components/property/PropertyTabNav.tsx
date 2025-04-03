
import { useState } from "react";
import { TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

interface PropertyTabNavProps {
  activeTab: string;
  onTabChange: (value: string) => void;
}

const PropertyTabNav = ({ activeTab, onTabChange }: PropertyTabNavProps) => {
  const [savedFilter, setSavedFilter] = useState(false);

  return (
    <div className="flex flex-wrap justify-between items-center mb-4">
      <TabsList>
        <TabsTrigger 
          value="all" 
          onClick={() => onTabChange("all")}
          className={activeTab === "all" ? "data-[state=active]:bg-estate-primary data-[state=active]:text-white" : ""}
        >
          All Properties
        </TabsTrigger>
        <TabsTrigger 
          value="ready" 
          onClick={() => onTabChange("ready")}
          className={activeTab === "ready" ? "data-[state=active]:bg-estate-primary data-[state=active]:text-white" : ""}
        >
          Ready
        </TabsTrigger>
        <TabsTrigger 
          value="off-plan" 
          onClick={() => onTabChange("off-plan")}
          className={activeTab === "off-plan" ? "data-[state=active]:bg-estate-primary data-[state=active]:text-white" : ""}
        >
          Off-Plan
        </TabsTrigger>
        <TabsTrigger 
          value="resale" 
          onClick={() => onTabChange("resale")}
          className={activeTab === "resale" ? "data-[state=active]:bg-estate-primary data-[state=active]:text-white" : ""}
        >
          Resale
        </TabsTrigger>
        <TabsTrigger 
          value="map" 
          onClick={() => onTabChange("map")}
          className={activeTab === "map" ? "data-[state=active]:bg-estate-primary data-[state=active]:text-white" : ""}
        >
          Map View
        </TabsTrigger>
      </TabsList>
      
      <div className="flex gap-2">
        <Button 
          variant="outline" 
          size="sm"
          className={activeTab === "all" ? "bg-estate-primary text-white" : ""}
          onClick={() => onTabChange("all")}
        >
          All
        </Button>
        <Button 
          variant="outline" 
          size="sm"
          className={savedFilter ? "bg-estate-secondary text-white" : ""}
          onClick={() => {
            setSavedFilter(!savedFilter);
            toast.success("Showing saved properties");
          }}
        >
          Saved
        </Button>
      </div>
    </div>
  );
};

export default PropertyTabNav;

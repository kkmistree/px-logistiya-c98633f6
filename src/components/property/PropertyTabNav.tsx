
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

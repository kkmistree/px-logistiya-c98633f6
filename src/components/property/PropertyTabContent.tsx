
import React from "react";
import { Property } from "@/types/property";
import PropertyGridView from "./PropertyGridView";
import PropertyListView from "./PropertyListView";
import PropertyMapView from "./PropertyMapView";
import NoResults from "./NoResults";

interface PropertyTabContentProps {
  tabValue: string;
  viewMode: "grid" | "list" | "split";
  properties: Property[];
  onPropertySelect: (property: Property) => void;
}

const PropertyTabContent = ({ 
  tabValue, 
  viewMode, 
  properties, 
  onPropertySelect 
}: PropertyTabContentProps) => {
  if (tabValue === "map") {
    return <PropertyMapView properties={properties} onPropertySelect={onPropertySelect} />;
  }
  
  if (properties.length === 0) {
    return <NoResults />;
  }
  
  if (viewMode === "list") {
    return <PropertyListView properties={properties} onPropertySelect={onPropertySelect} />;
  }
  
  return <PropertyGridView properties={properties} onPropertySelect={onPropertySelect} />;
};

export default PropertyTabContent;

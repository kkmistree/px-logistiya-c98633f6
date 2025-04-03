
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { areaData } from "./areas-comparison/areaData";
import AreaFilters from "./areas-comparison/AreaFilters";
import LocationSelectors from "./areas-comparison/LocationSelectors";
import ComparisonCard from "./areas-comparison/ComparisonCard";
import DifferenceBadge from "./areas-comparison/DifferenceBadge";

const AreasComparison = () => {
  const [propertyType, setPropertyType] = useState("all");
  const [status, setStatus] = useState("all");
  const [year, setYear] = useState("2025");
  const [bedroom, setBedroom] = useState("all");
  const [location1, setLocation1] = useState("downtown-dubai");
  const [location2, setLocation2] = useState("dubai-marina");
  
  const location1Data = areaData.find(area => area.id === location1);
  const location2Data = areaData.find(area => area.id === location2);

  return (
    <div className="space-y-6">
      {/* Filters */}
      <AreaFilters 
        propertyType={propertyType}
        setPropertyType={setPropertyType}
        status={status}
        setStatus={setStatus}
        year={year}
        setYear={setYear}
        bedroom={bedroom}
        setBedroom={setBedroom}
      />
      
      {/* Side by side comparison */}
      <div className="bg-slate-900 text-white p-4 rounded-lg">
        <h2 className="text-lg font-semibold mb-1">Area side by side analysis</h2>
      </div>
      
      {/* Location selectors */}
      <LocationSelectors 
        areaData={areaData}
        location1={location1}
        setLocation1={setLocation1}
        location2={location2}
        setLocation2={setLocation2}
      />
      
      {/* Comparison badge */}
      <div className="flex justify-center">
        <Badge className="px-4 py-1 bg-pink-500 text-white">2025</Badge>
      </div>
      
      {/* Metrics comparison grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Left column - Location 1 */}
        <div className="space-y-4">
          <ComparisonCard 
            title="Transactions volume"
            value={location1Data?.totalVolume || ""}
            changeValue={location1Data?.volumeYoY || ""}
            trend={location1Data?.trend || ""}
          />
          
          <ComparisonCard 
            title="Total transaction value"
            value={location1Data?.totalValue || ""}
            changeValue={location1Data?.valueYoY || ""}
            trend={location1Data?.trend || ""}
          />
          
          <ComparisonCard 
            title="Median price per sqft"
            value={location1Data?.medianPricePerSqft || ""}
            changeValue={location1Data?.valueYoY || ""}
            trend={location1Data?.trend || ""}
          />
          
          <ComparisonCard 
            title="Property median price"
            value={location1Data?.medianPrice || ""}
            changeValue={location1Data?.valueYoY || ""}
            trend={location1Data?.trend || ""}
          />
        </div>
        
        {/* Right column - Location 2 */}
        <div className="space-y-4">
          <DifferenceBadge 
            location1Data={location1Data} 
            location2Data={location2Data} 
            type="volume" 
            dataKey="totalVolume"
          />
          
          <ComparisonCard 
            title="Transactions volume"
            value={location2Data?.totalVolume || ""}
            changeValue={location2Data?.volumeYoY || ""}
            trend={location2Data?.trend || ""}
          />
          
          <DifferenceBadge 
            location1Data={location1Data} 
            location2Data={location2Data} 
            type="value" 
            dataKey="totalValue"
          />
          
          <ComparisonCard 
            title="Total transaction value"
            value={location2Data?.totalValue || ""}
            changeValue={location2Data?.valueYoY || ""}
            trend={location2Data?.trend || ""}
          />
          
          <DifferenceBadge 
            location1Data={location1Data} 
            location2Data={location2Data} 
            type="price-sqft" 
            dataKey="medianPricePerSqft"
          />
          
          <ComparisonCard 
            title="Median price per sqft"
            value={location2Data?.medianPricePerSqft || ""}
            changeValue={location2Data?.valueYoY || ""}
            trend={location2Data?.trend || ""}
          />
          
          <DifferenceBadge 
            location1Data={location1Data} 
            location2Data={location2Data} 
            type="price" 
            dataKey="medianPrice"
          />
          
          <ComparisonCard 
            title="Property median price"
            value={location2Data?.medianPrice || ""}
            changeValue={location2Data?.valueYoY || ""}
            trend={location2Data?.trend || ""}
          />
        </div>
      </div>
    </div>
  );
};

export default AreasComparison;

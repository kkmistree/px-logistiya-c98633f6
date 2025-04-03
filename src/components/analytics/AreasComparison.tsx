
import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { areaData } from "./areas-comparison/areaData";
import AreaFilters from "./areas-comparison/AreaFilters";
import LocationSelectors from "./areas-comparison/LocationSelectors";
import ComparisonHeader from "./areas-comparison/ComparisonHeader";
import MetricsGrid from "./areas-comparison/MetricsGrid";
import PercentageDifferences from "./areas-comparison/PercentageDifferences";
import { calculateDifference } from "./areas-comparison/differenceUtils";

const AreasComparison = () => {
  const [propertyType, setPropertyType] = useState("all");
  const [status, setStatus] = useState("all");
  const [year, setYear] = useState("2025");
  const [bedroom, setBedroom] = useState("all");
  const [location1, setLocation1] = useState("downtown-dubai");
  const [location2, setLocation2] = useState("dubai-marina");
  
  const location1Data = areaData.find(area => area.id === location1);
  const location2Data = areaData.find(area => area.id === location2);

  if (!location1Data || !location2Data) return null;

  // Calculate differences for the central badges
  const volumeDiff = calculateDifference(location1Data.totalVolume, location2Data.totalVolume, 'volume');
  const valueDiff = calculateDifference(location1Data.totalValue, location2Data.totalValue, 'value');
  const priceSqftDiff = calculateDifference(location1Data.medianPricePerSqft, location2Data.medianPricePerSqft, 'price-sqft');
  const priceDiff = calculateDifference(location1Data.medianPrice, location2Data.medianPrice, 'price');
  const existingUnitsDiff = calculateDifference(location1Data.existingUnits, location2Data.existingUnits, 'units');
  const upcomingUnitsDiff = calculateDifference(location1Data.upcomingUnits, location2Data.upcomingUnits, 'units');

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
      <ComparisonHeader year={year} />
      
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
        <Badge className="px-4 py-1 bg-pink-500 text-white rounded-full">{year}</Badge>
      </div>
      
      {/* Metrics comparison grid with middle column for differences */}
      <div className="flex items-stretch gap-0 relative">
        {/* Left column - Location 1 */}
        <div className="flex-1">
          <MetricsGrid locationData={location1Data} position="left" />
        </div>
        
        {/* Center column - Percentage differences */}
        <PercentageDifferences 
          location1Data={location1Data}
          location2Data={location2Data}
          volumeDiff={volumeDiff}
          valueDiff={valueDiff}
          priceSqftDiff={priceSqftDiff}
          priceDiff={priceDiff}
          existingUnitsDiff={existingUnitsDiff}
          upcomingUnitsDiff={upcomingUnitsDiff}
        />
        
        {/* Right column - Location 2 */}
        <div className="flex-1">
          <MetricsGrid locationData={location2Data} position="right" />
        </div>
      </div>
    </div>
  );
};

export default AreasComparison;

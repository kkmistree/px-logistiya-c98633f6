
import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { areaData } from "./areas-comparison/areaData";
import AreaFilters from "./areas-comparison/AreaFilters";
import LocationSelectors from "./areas-comparison/LocationSelectors";
import ComparisonItem from "./areas-comparison/ComparisonItem";
import ComparisonDifference from "./areas-comparison/ComparisonDifference";
import { calculateDifference, isHigherValue } from "./areas-comparison/differenceUtils";

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
        <Badge className="px-4 py-1 bg-pink-500 text-white">{year}</Badge>
      </div>
      
      {/* Metrics comparison grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative">
        {/* Left column - Location 1 */}
        <div className="space-y-8">
          <ComparisonItem 
            title="Transactions volume"
            value={location1Data.totalVolume}
            changeValue={location1Data.volumeYoY}
          />
          
          <div className="relative">
            <div className="absolute left-full top-1/2 transform -translate-y-1/2 z-10 translate-x-[-50%]">
              <ComparisonDifference 
                value={Math.abs(volumeDiff).toFixed(1)} 
                isPositive={isHigherValue(location1Data.totalVolume, location2Data.totalVolume, 'volume')}
              />
            </div>
          </div>
          
          <ComparisonItem 
            title="Total transaction value"
            value={location1Data.totalValue}
            changeValue={location1Data.valueYoY}
          />
          
          <div className="relative">
            <div className="absolute left-full top-1/2 transform -translate-y-1/2 z-10 translate-x-[-50%]">
              <ComparisonDifference 
                value={Math.abs(valueDiff).toFixed(1)} 
                isPositive={isHigherValue(location1Data.totalValue, location2Data.totalValue, 'value')}
              />
            </div>
          </div>
          
          <ComparisonItem 
            title="Median price per sqft"
            value={location1Data.medianPricePerSqft}
            changeValue={location1Data.valueYoY}
          />
          
          <div className="relative">
            <div className="absolute left-full top-1/2 transform -translate-y-1/2 z-10 translate-x-[-50%]">
              <ComparisonDifference 
                value={Math.abs(priceSqftDiff).toFixed(1)} 
                isPositive={isHigherValue(location1Data.medianPricePerSqft, location2Data.medianPricePerSqft, 'price-sqft')}
              />
            </div>
          </div>
          
          <ComparisonItem 
            title="Property median price"
            value={location1Data.medianPrice}
            changeValue={location1Data.valueYoY}
          />
          
          <div className="relative">
            <div className="absolute left-full top-1/2 transform -translate-y-1/2 z-10 translate-x-[-50%]">
              <ComparisonDifference 
                value={Math.abs(priceDiff).toFixed(1)} 
                isPositive={isHigherValue(location1Data.medianPrice, location2Data.medianPrice, 'price')}
              />
            </div>
          </div>
          
          <ComparisonItem 
            title="Existing Units"
            value={location1Data.existingUnits}
            changeValue="+5.2%"
          />
          
          <div className="relative">
            <div className="absolute left-full top-1/2 transform -translate-y-1/2 z-10 translate-x-[-50%]">
              <ComparisonDifference 
                value={Math.abs(existingUnitsDiff).toFixed(1)} 
                isPositive={isHigherValue(location1Data.existingUnits, location2Data.existingUnits, 'units')}
              />
            </div>
          </div>
          
          <ComparisonItem 
            title="Upcoming Units"
            value={location1Data.upcomingUnits}
            changeValue="+12.3%"
          />
          
          <div className="relative">
            <div className="absolute left-full top-1/2 transform -translate-y-1/2 z-10 translate-x-[-50%]">
              <ComparisonDifference 
                value={Math.abs(upcomingUnitsDiff).toFixed(1)} 
                isPositive={isHigherValue(location1Data.upcomingUnits, location2Data.upcomingUnits, 'units')}
              />
            </div>
          </div>
        </div>
        
        {/* Right column - Location 2 */}
        <div className="space-y-8">
          <ComparisonItem 
            title="Transactions volume"
            value={location2Data.totalVolume}
            changeValue={location2Data.volumeYoY}
          />
          
          <ComparisonItem 
            title="Total transaction value"
            value={location2Data.totalValue}
            changeValue={location2Data.valueYoY}
          />
          
          <ComparisonItem 
            title="Median price per sqft"
            value={location2Data.medianPricePerSqft}
            changeValue={location2Data.valueYoY}
          />
          
          <ComparisonItem 
            title="Property median price"
            value={location2Data.medianPrice}
            changeValue={location2Data.valueYoY}
          />
          
          <ComparisonItem 
            title="Existing Units"
            value={location2Data.existingUnits}
            changeValue="+3.7%"
          />
          
          <ComparisonItem 
            title="Upcoming Units"
            value={location2Data.upcomingUnits}
            changeValue="+8.5%"
          />
        </div>
      </div>
    </div>
  );
};

export default AreasComparison;

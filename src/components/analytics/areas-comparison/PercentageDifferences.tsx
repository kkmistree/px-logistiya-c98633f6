import React from 'react';
import ComparisonDifference from './ComparisonDifference';
import { isHigherValue } from './differenceUtils';
import { AreaData } from './areaData';

interface PercentageDifferencesProps {
  location1Data: AreaData;
  location2Data: AreaData;
  volumeDiff: string;
  valueDiff: string;
  priceSqftDiff: string;
  priceDiff: string;
  existingUnitsDiff: string;
  upcomingUnitsDiff: string;
}

const PercentageDifferences = ({
  location1Data,
  location2Data,
  volumeDiff,
  valueDiff,
  priceSqftDiff,
  priceDiff,
  existingUnitsDiff,
  upcomingUnitsDiff
}: PercentageDifferencesProps) => {
  return (
    <div className="hidden md:block absolute left-1/2 top-0 bottom-0 transform -translate-x-1/2 w-0.5 bg-slate-700" style={{ zIndex: 1 }}>
      {/* Volume difference */}
      <div className="absolute top-[10%] transform -translate-x-1/2">
        <ComparisonDifference 
          value={volumeDiff} 
          isPositive={isHigherValue(location1Data.totalVolume, location2Data.totalVolume, 'volume')}
        />
      </div>
      
      {/* Value difference */}
      <div className="absolute top-[26.5%] transform -translate-x-1/2">
        <ComparisonDifference 
          value={valueDiff} 
          isPositive={isHigherValue(location1Data.totalValue, location2Data.totalValue, 'value')}
        />
      </div>
      
      {/* Price per sqft difference */}
      <div className="absolute top-[43%] transform -translate-x-1/2">
        <ComparisonDifference 
          value={priceSqftDiff} 
          isPositive={isHigherValue(location1Data.medianPricePerSqft, location2Data.medianPricePerSqft, 'price-sqft')}
        />
      </div>
      
      {/* Median price difference */}
      <div className="absolute top-[59.5%] transform -translate-x-1/2">
        <ComparisonDifference 
          value={priceDiff} 
          isPositive={isHigherValue(location1Data.medianPrice, location2Data.medianPrice, 'price')}
        />
      </div>
      
      {/* Existing units difference */}
      <div className="absolute top-[76%] transform -translate-x-1/2">
        <ComparisonDifference 
          value={existingUnitsDiff} 
          isPositive={isHigherValue(location1Data.existingUnits, location2Data.existingUnits, 'units')}
        />
      </div>
      
      {/* Upcoming units difference */}
      <div className="absolute top-[92.5%] transform -translate-x-1/2">
        <ComparisonDifference 
          value={upcomingUnitsDiff} 
          isPositive={isHigherValue(location1Data.upcomingUnits, location2Data.upcomingUnits, 'units')}
        />
      </div>
    </div>
  );
};

export default PercentageDifferences;

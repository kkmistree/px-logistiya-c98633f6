
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
    <div className="hidden md:flex flex-col justify-between items-center w-16 py-6 bg-slate-800 rounded-lg mx-1">
      {/* Volume difference */}
      <div className="mb-3">
        <ComparisonDifference 
          value={volumeDiff} 
          isPositive={isHigherValue(location1Data.totalVolume, location2Data.totalVolume, 'volume')}
        />
      </div>
      
      {/* Value difference */}
      <div className="mb-3">
        <ComparisonDifference 
          value={valueDiff} 
          isPositive={isHigherValue(location1Data.totalValue, location2Data.totalValue, 'value')}
        />
      </div>
      
      {/* Price per sqft difference */}
      <div className="mb-3">
        <ComparisonDifference 
          value={priceSqftDiff} 
          isPositive={isHigherValue(location1Data.medianPricePerSqm, location2Data.medianPricePerSqm, 'price-sqft')}
        />
      </div>
      
      {/* Median price difference */}
      <div className="mb-3">
        <ComparisonDifference 
          value={priceDiff} 
          isPositive={isHigherValue(location1Data.medianPrice, location2Data.medianPrice, 'price')}
        />
      </div>
      
      {/* Existing units difference */}
      <div className="mb-3">
        <ComparisonDifference 
          value={existingUnitsDiff} 
          isPositive={isHigherValue(location1Data.existingUnits, location2Data.existingUnits, 'units')}
        />
      </div>
      
      {/* Upcoming units difference */}
      <div>
        <ComparisonDifference 
          value={upcomingUnitsDiff} 
          isPositive={isHigherValue(location1Data.upcomingUnits, location2Data.upcomingUnits, 'units')}
        />
      </div>
    </div>
  );
};

export default PercentageDifferences;

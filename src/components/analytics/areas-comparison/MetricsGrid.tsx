
import React from 'react';
import ComparisonItem from './ComparisonItem';
import { AreaData } from './areaData';

interface MetricsGridProps {
  locationData: AreaData;
  position: 'left' | 'right';
}

const MetricsGrid = ({ locationData, position }: MetricsGridProps) => {
  return (
    <div className="space-y-6">
      <ComparisonItem 
        title="Transactions volume"
        value={locationData.totalVolume}
        changeValue={locationData.volumeYoY}
      />
      
      <ComparisonItem 
        title="Total transaction value"
        value={locationData.totalValue}
        changeValue={locationData.valueYoY}
      />
      
      <ComparisonItem 
        title="Median price per sqft"
        value={locationData.medianPricePerSqft}
        changeValue={locationData.valueYoY}
      />
      
      <ComparisonItem 
        title="Property median price"
        value={locationData.medianPrice}
        changeValue={locationData.valueYoY}
      />
      
      <ComparisonItem 
        title="Existing Units"
        value={locationData.existingUnits}
        changeValue={position === 'left' ? "+5.2% YoY Change" : "+3.7% YoY Change"}
      />
      
      <ComparisonItem 
        title="Upcoming Units"
        value={locationData.upcomingUnits}
        changeValue={position === 'left' ? "+12.3% YoY Change" : "+8.5% YoY Change"}
      />
    </div>
  );
};

export default MetricsGrid;

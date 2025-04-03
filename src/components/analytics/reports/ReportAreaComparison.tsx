
import React from 'react';
import AreaPriceComparisonChart from './area-comparison/AreaPriceComparisonChart';
import AreaPerformanceTable from './area-comparison/AreaPerformanceTable';
import TransactionVolumeChart from './area-comparison/TransactionVolumeChart';
import PriceGrowthChart from './area-comparison/PriceGrowthChart';
import AreaRadarChart from './area-comparison/AreaRadarChart';

const ReportAreaComparison = () => {
  return (
    <div className="space-y-6">
      <AreaPriceComparisonChart />
      <AreaPerformanceTable />
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <TransactionVolumeChart />
        <PriceGrowthChart />
      </div>
      
      <AreaRadarChart />
    </div>
  );
};

export default ReportAreaComparison;


import React, { useState } from 'react';
import VolumeChart from './transaction/VolumeChart';
import DistributionCharts from './transaction/DistributionCharts';
import TransactionHighlights from './transaction/TransactionHighlights';

// Sample data definitions
const monthlyVolumeData = [
  { month: 'Jan', sales: 16845, value: 32.5 },
  { month: 'Feb', sales: 15932, value: 30.8 },
  { month: 'Mar', sales: 17562, value: 34.2 },
  { month: 'Apr', sales: 16103, value: 31.5 },
  { month: 'May', sales: 16780, value: 33.0 },
  { month: 'Jun', sales: 18451, value: 36.2 },
  { month: 'Jul', sales: 17325, value: 34.9 },
  { month: 'Aug', sales: 16568, value: 33.2 },
  { month: 'Sep', sales: 17842, value: 35.7 },
  { month: 'Oct', sales: 18929, value: 40.9 },
  { month: 'Nov', sales: 0, value: 0 },
  { month: 'Dec', sales: 0, value: 0 }
];

const propertyTypeDistribution = [
  { name: 'Apartment', value: 68.5 },
  { name: 'Villa', value: 18.2 },
  { name: 'Townhouse', value: 11.8 },
  { name: 'Other', value: 1.5 }
];

const transactionModeData = [
  { name: 'Off-Plan', value: 71 },
  { name: 'Ready', value: 29 }
];

const bedroomDistribution = [
  { name: 'Studio', value: 17.0 },
  { name: '1 BR', value: 40.8 },
  { name: '2 BR', value: 23.7 },
  { name: '3 BR', value: 9.2 },
  { name: '4 BR', value: 8.0 },
  { name: '5+ BR', value: 1.3 }
];

const priceRangeDistribution = [
  { name: '< AED 500K', value: 24.3 },
  { name: 'AED 500K-1M', value: 34.3 },
  { name: 'AED 1M-2M', value: 25.2 },
  { name: 'AED 2M-3.5M', value: 8.2 },
  { name: 'AED 3.5M-5M', value: 4.1 },
  { name: '> AED 5M', value: 4.0 }
];

const ReportTransactionAnalysis = () => {
  const [volumeChartType, setVolumeChartType] = useState<string>("bar");
  const [distributionView, setDistributionView] = useState<string>("propertyType");

  return (
    <div className="space-y-6">
      <VolumeChart 
        data={monthlyVolumeData}
        chartType={volumeChartType}
        setChartType={setVolumeChartType}
      />
      
      <DistributionCharts
        propertyTypeData={propertyTypeDistribution}
        bedroomData={bedroomDistribution}
        priceRangeData={priceRangeDistribution}
        transactionModeData={transactionModeData}
        distributionView={distributionView}
        setDistributionView={setDistributionView}
      />
      
      <TransactionHighlights />
    </div>
  );
};

export default ReportTransactionAnalysis;

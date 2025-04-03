
import { useState } from "react";
import MarketPerformanceFilters from "./MarketPerformanceFilters";
import KeyMetricsCards from "./KeyMetricsCards";
import TransactionVolumeChart from "./TransactionVolumeChart";
import PropertyPriceChart from "./PropertyPriceChart";
import PriceRangeDistributionChart from "./PriceRangeDistributionChart";
import MonthlyTransactionsChart from "./MonthlyTransactionsChart";
import PriceAnalysisTable from "./PriceAnalysisTable";
import { 
  marketData, 
  priceRangeData, 
  monthlyData, 
  marketSummary, 
  propertyTypeData 
} from "./marketData";

const MarketPerformance = () => {
  const [propertyType, setPropertyType] = useState("all");
  const [status, setStatus] = useState("all");
  const [year, setYear] = useState("2025");
  const [bedroom, setBedroom] = useState("all");
  const [area, setArea] = useState("all");
  const [transactionType, setTransactionType] = useState("sales");

  return (
    <div className="space-y-6">
      {/* Filters */}
      <MarketPerformanceFilters 
        propertyType={propertyType}
        setPropertyType={setPropertyType}
        status={status}
        setStatus={setStatus}
        year={year}
        setYear={setYear}
        bedroom={bedroom}
        setBedroom={setBedroom}
        area={area}
        setArea={setArea}
        transactionType={transactionType}
        setTransactionType={setTransactionType}
      />

      {/* Key metrics */}
      <KeyMetricsCards metrics={marketSummary} />

      {/* Transaction volume chart */}
      <TransactionVolumeChart data={marketData} />

      {/* Property price performance chart */}
      <PropertyPriceChart data={marketData} />

      {/* Distribution of sales transactions by price range */}
      <PriceRangeDistributionChart data={priceRangeData} />

      {/* Median monthly transactions volume */}
      <MonthlyTransactionsChart data={monthlyData} />

      {/* Price analysis table */}
      <PriceAnalysisTable data={propertyTypeData} />
    </div>
  );
};

export default MarketPerformance;

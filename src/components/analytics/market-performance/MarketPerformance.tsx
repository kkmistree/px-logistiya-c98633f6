
import { useState } from "react";
import AnalyticsFilters from "../AnalyticsFilters";
import KeyMetricsCards from "./KeyMetricsCards";
import TransactionVolumeChart from "./TransactionVolumeChart";
import PropertyPriceChart from "./PropertyPriceChart";
import PriceRangeDistributionChart from "./PriceRangeDistributionChart";
import MonthlyTransactionsChart from "./MonthlyTransactionsChart";
import PriceAnalysisTable from "./PriceAnalysisTable";
import ReportMetrics from "../ReportMetrics";
import { 
  marketData, 
  priceRangeData, 
  monthlyData, 
  marketSummary, 
  propertyTypeData,
  dailyTransactionData,
  weeklyTransactionData
} from "./marketData";

const MarketPerformance = () => {
  const [propertyType, setPropertyType] = useState("all");
  const [status, setStatus] = useState("all");
  const [timeframe, setTimeframe] = useState("monthly");
  const [bedroom, setBedroom] = useState("all");
  const [area, setArea] = useState("all");
  const [transactionType, setTransactionType] = useState("sales");
  const [fromDate, setFromDate] = useState<Date | undefined>(undefined);
  const [toDate, setToDate] = useState<Date | undefined>(undefined);
  
  // Function to handle filters application
  const handleApplyFilters = () => {
    console.log("Applying filters:", {
      propertyType,
      status,
      timeframe,
      area,
      fromDate,
      toDate
    });
    // In a real application, this would fetch data based on the filters
  };

  return (
    <div className="space-y-6">
      {/* Analytics Filters */}
      <AnalyticsFilters
        propertyType={propertyType}
        setPropertyType={setPropertyType}
        status={status}
        setStatus={setStatus}
        timeframe={timeframe}
        setTimeframe={setTimeframe}
        area={area}
        setArea={setArea}
        fromDate={fromDate}
        setFromDate={setFromDate}
        toDate={toDate}
        setToDate={setToDate}
        showDateRange={true}
        showApplyButton={true}
        onApplyFilters={handleApplyFilters}
      />

      {/* Report Metrics based on the selected timeframe */}
      <ReportMetrics 
        timeframe={timeframe as "daily" | "weekly" | "monthly" | "yearly"} 
        propertyType={propertyType}
        area={area}
      />

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

import { useState } from "react";
import FilterSection from "./transaction/FilterSection";
import TransactionToggle from "./transaction/TransactionToggle";
import KeyMetricsGrid from "./transaction/KeyMetricsGrid";
import TransactionTable from "./transaction/TransactionTable";

// Mock data definitions
const transactionData = [
  {
    id: 1,
    location: "Riyadh Industrial City",
    propertyType: "Warehouse",
    status: "Available",
    price: "SAR 15.3M",
    area: "5,000 sqm",
    date: "Apr 12, 2025"
  },
  {
    id: 2,
    location: "Jeddah Industrial City",
    propertyType: "Factory",
    status: "Under-Development",
    price: "SAR 22.5M",
    area: "8,264 sqm",
    date: "Apr 10, 2025"
  },
  {
    id: 3,
    location: "KAEC Industrial Valley",
    propertyType: "Logistics", 
    status: "Available",
    price: "SAR 18.2M",
    area: "7,938 sqm",
    date: "Apr 07, 2025"
  },
  {
    id: 4,
    location: "Dammam Industrial City",
    propertyType: "Warehouse",
    status: "Available",
    price: "SAR 17.5M",
    area: "6,501 sqm",
    date: "Apr 05, 2025"
  },
  {
    id: 5,
    location: "Jubail Industrial City",
    propertyType: "Factory",
    status: "Under-Development",
    price: "SAR 31.1M",
    area: "12,234 sqm",
    date: "Mar 28, 2025"
  },
  {
    id: 6,
    location: "Sudair City for Industry",
    propertyType: "Land",
    status: "Available",
    price: "SAR 14.2M",
    area: "20,818 sqm",
    date: "Mar 25, 2025"
  },
  {
    id: 7,
    location: "Yanbu Industrial City",
    propertyType: "Factory",
    status: "Under-Development",
    price: "SAR 29.9M",
    area: "10,458 sqm",
    date: "Mar 20, 2025"
  },
  {
    id: 8,
    location: "Rabigh Industrial Zone",
    propertyType: "Warehouse",
    status: "Available",
    price: "SAR 16.6M",
    area: "7,000 sqm",
    date: "Mar 15, 2025"
  }
];

const keyMetrics = [
  {
    title: "Total transactions",
    value: "2,845",
    change: "+18.9% YoY Change",
    trend: "up"
  },
  {
    title: "Total transactions value",
    value: "SAR 91,345,196,037",
    change: "+22.3% YoY Change",
    trend: "up"
  },
  {
    title: "Median price",
    value: "SAR 15,481,852",
    change: "+4.8% YoY Change", 
    trend: "up"
  },
  {
    title: "Median price per sqm",
    value: "SAR 1,845",
    change: "+3.7% YoY Change",
    trend: "up"
  }
];

const TransactionAnalysis = () => {
  const [propertyType, setPropertyType] = useState("all");
  const [status, setStatus] = useState("all");
  const [year, setYear] = useState("2025");
  const [size, setSize] = useState("all");
  const [area, setArea] = useState("all");
  const [transactionType, setTransactionType] = useState("sales");
  const [sortBy, setSortBy] = useState("newest");

  return (
    <div className="space-y-6">
      <FilterSection
        propertyType={propertyType}
        status={status}
        area={area}
        year={year}
        size={size}
        setPropertyType={setPropertyType}
        setStatus={setStatus}
        setArea={setArea}
        setYear={setYear}
        setSize={setSize}
      />
      
      <TransactionToggle 
        transactionType={transactionType}
        setTransactionType={setTransactionType}
      />
      
      <KeyMetricsGrid metrics={keyMetrics} />
      
      <TransactionTable
        transactions={transactionData}
        sortBy={sortBy}
        setSortBy={setSortBy}
      />
    </div>
  );
};

export default TransactionAnalysis;

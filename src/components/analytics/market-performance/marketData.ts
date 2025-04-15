
// Add or update the MetricItem interface to explicitly define trend type
export interface MetricItem {
  title: string;
  value: string;
  change: string;
  trend: "up" | "down";
}

// Market performance data (mock)
export const marketData = [
  { year: '2009', value: 800000, volume: 32000 },
  { year: '2010', value: 900000, volume: 35000 },
  { year: '2011', value: 950000, volume: 30000 },
  { year: '2012', value: 1100000, volume: 33000 },
  { year: '2013', value: 1300000, volume: 62000 },
  { year: '2014', value: 1250000, volume: 58000 },
  { year: '2015', value: 1200000, volume: 55000 },
  { year: '2016', value: 1150000, volume: 54000 },
  { year: '2017', value: 1100000, volume: 56000 },
  { year: '2018', value: 1050000, volume: 52000 },
  { year: '2019', value: 1000000, volume: 53000 },
  { year: '2020', value: 1150000, volume: 53000 },
  { year: '2021', value: 1300000, volume: 65000 },
  { year: '2022', value: 1500000, volume: 90000 },
  { year: '2023', value: 1650000, volume: 140000 },
  { year: '2024', value: 1750000, volume: 196000 },
  { year: '2025', value: 1800000, volume: 75000 }
];

// Price range distribution data for industrial properties
export const priceRangeData = [
  { year: '2009', below50M: 65.2, from50Mto100M: 24.1, from100Mto200M: 7.2, from200Mto500M: 3.5, above500M: 0 },
  { year: '2010', below50M: 52.7, from50Mto100M: 28.9, from100Mto200M: 12.5, from200Mto500M: 5.9, above500M: 0 },
  { year: '2011', below50M: 50.9, from50Mto100M: 29.5, from100Mto200M: 12.8, from200Mto500M: 6.8, above500M: 0 },
  { year: '2012', below50M: 42.7, from50Mto100M: 30.5, from100Mto200M: 15.4, from200Mto500M: 11.4, above500M: 0 },
  { year: '2013', below50M: 42.3, from50Mto100M: 31.1, from100Mto200M: 15.4, from200Mto500M: 11.2, above500M: 0 },
  { year: '2014', below50M: 42.2, from50Mto100M: 28.8, from100Mto200M: 17.8, from200Mto500M: 11.2, above500M: 0 },
  { year: '2015', below50M: 43.5, from50Mto100M: 28.5, from100Mto200M: 16.8, from200Mto500M: 11.2, above500M: 0 },
  { year: '2016', below50M: 46.0, from50Mto100M: 25.8, from100Mto200M: 15.9, from200Mto500M: 12.3, above500M: 0 },
  { year: '2017', below50M: 46.1, from50Mto100M: 31.5, from100Mto200M: 14.4, from200Mto500M: 8.0, above500M: 0 },
  { year: '2018', below50M: 50.2, from50Mto100M: 29.1, from100Mto200M: 13.9, from200Mto500M: 6.8, above500M: 0 },
  { year: '2019', below50M: 48.8, from50Mto100M: 32.9, from100Mto200M: 11.4, from200Mto500M: 6.9, above500M: 0 },
  { year: '2020', below50M: 45.0, from50Mto100M: 32.5, from100Mto200M: 11.0, from200Mto500M: 11.5, above500M: 0 },
  { year: '2021', below50M: 41.4, from50Mto100M: 32.0, from100Mto200M: 16.0, from200Mto500M: 9.2, above500M: 1.4 },
  { year: '2022', below50M: 38.0, from50Mto100M: 33.6, from100Mto200M: 15.9, from200Mto500M: 11.4, above500M: 1.1 },
  { year: '2023', below50M: 40.2, from50Mto100M: 33.4, from100Mto200M: 13.7, from200Mto500M: 11.2, above500M: 1.5 },
  { year: '2024', below50M: 39.4, from50Mto100M: 31.3, from100Mto200M: 15.8, from200Mto500M: 11.5, above500M: 2.0 },
  { year: '2025', below50M: 35.1, from50Mto100M: 32.0, from100Mto200M: 20.3, from200Mto500M: 11.2, above500M: 1.4 }
];

// Monthly volume data for industrial properties
export const monthlyData = [
  { month: 'January', volume: 237 },
  { month: 'February', volume: 280 },
  { month: 'March', volume: 305 },
  { month: 'April', volume: 231 },
  { month: 'May', volume: 250 },
  { month: 'June', volume: 276 },
  { month: 'July', volume: 233 },
  { month: 'August', volume: 192 },
  { month: 'September', volume: 223 },
  { month: 'October', volume: 256 },
  { month: 'November', volume: 250 },
  { month: 'December', volume: 283 }
];

// Market summary stats with proper typing for Saudi industrial market
export const marketSummary: MetricItem[] = [
  {
    title: "Total transaction volume (2024)",
    value: "2.8K",
    change: "+18.7%",
    trend: "up",
  },
  {
    title: "Total transaction value (2024)",
    value: "SAR 326B",
    change: "+22.1%",
    trend: "up",
  },
  {
    title: "Median price (2024)",
    value: "SAR 15,395,000",
    change: "+4.6%",
    trend: "up",
  },
  {
    title: "Median price per sqm (2024)",
    value: "SAR 1,845",
    change: "+3.1%",
    trend: "up",
  },
  {
    title: "Industrial Yield (2024)",
    value: "7.3%",
    change: "+0.4%",
    trend: "up",
  }
];

// Property type data for industrial properties
export const propertyTypeData = [
  { type: "Warehouse", medianPrice: "SAR 12,218,230", pricePerSqm: "SAR 1,479" },
  { type: "Factory", medianPrice: "SAR 29,737,930", pricePerSqm: "SAR 1,902" },
  { type: "Land", medianPrice: "SAR 35,450,000", pricePerSqm: "SAR 850" },
  { type: "Logistics", medianPrice: "SAR 18,725,000", pricePerSqm: "SAR 1,650" }
];

// Daily transaction data
export const dailyTransactionData = [
  { date: '2025-04-01', transactions: 8, value: 115000000 },
  { date: '2025-04-02', transactions: 12, value: 235000000 },
  { date: '2025-04-03', transactions: 6, value: 95000000 }
];

// Weekly transaction data
export const weeklyTransactionData = [
  { week: 'Week 1', transactions: 32, value: 510000000 },
  { week: 'Week 2', transactions: 45, value: 720000000 },
  { week: 'Week 3', transactions: 37, value: 580000000 },
  { week: 'Week 4', transactions: 41, value: 640000000 }
];

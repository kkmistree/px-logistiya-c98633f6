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
  { year: '2025', value: 1800000, volume: 75000 },
];

// Price range distribution data
export const priceRangeData = [
  { year: '2009', below1M: 65.2, from1Mto2M: 24.1, from2Mto3M: 7.2, from3Mto7M: 3.5, above7M: 0 },
  { year: '2010', below1M: 52.7, from1Mto2M: 28.9, from2Mto3M: 12.5, from3Mto7M: 5.9, above7M: 0 },
  { year: '2011', below1M: 50.9, from1Mto2M: 29.5, from2Mto3M: 12.8, from3Mto7M: 6.8, above7M: 0 },
  { year: '2012', below1M: 42.7, from1Mto2M: 30.5, from2Mto3M: 15.4, from3Mto7M: 11.4, above7M: 0 },
  { year: '2013', below1M: 42.3, from1Mto2M: 31.1, from2Mto3M: 15.4, from3Mto7M: 11.2, above7M: 0 },
  { year: '2014', below1M: 42.2, from1Mto2M: 28.8, from2Mto3M: 17.8, from3Mto7M: 11.2, above7M: 0 },
  { year: '2015', below1M: 43.5, from1Mto2M: 28.5, from2Mto3M: 16.8, from3Mto7M: 11.2, above7M: 0 },
  { year: '2016', below1M: 46.0, from1Mto2M: 25.8, from2Mto3M: 15.9, from3Mto7M: 12.3, above7M: 0 },
  { year: '2017', below1M: 46.1, from1Mto2M: 31.5, from2Mto3M: 14.4, from3Mto7M: 8.0, above7M: 0 },
  { year: '2018', below1M: 50.2, from1Mto2M: 29.1, from2Mto3M: 13.9, from3Mto7M: 6.8, above7M: 0 },
  { year: '2019', below1M: 48.8, from1Mto2M: 32.9, from2Mto3M: 11.4, from3Mto7M: 6.9, above7M: 0 },
  { year: '2020', below1M: 45.0, from1Mto2M: 32.5, from2Mto3M: 11.0, from3Mto7M: 11.5, above7M: 0 },
  { year: '2021', below1M: 41.4, from1Mto2M: 32.0, from2Mto3M: 16.0, from3Mto7M: 9.2, above7M: 1.4 },
  { year: '2022', below1M: 38.0, from1Mto2M: 33.6, from2Mto3M: 15.9, from3Mto7M: 11.4, above7M: 1.1 },
  { year: '2023', below1M: 40.2, from1Mto2M: 33.4, from2Mto3M: 13.7, from3Mto7M: 11.2, above7M: 1.5 },
  { year: '2024', below1M: 39.4, from1Mto2M: 31.3, from2Mto3M: 15.8, from3Mto7M: 11.5, above7M: 2.0 },
  { year: '2025', below1M: 35.1, from1Mto2M: 32.0, from2Mto3M: 20.3, from3Mto7M: 11.2, above7M: 1.4 },
];

// Monthly volume data
export const monthlyData = [
  { month: 'January', volume: 4237 },
  { month: 'February', volume: 4180 },
  { month: 'March', volume: 4205 },
  { month: 'April', volume: 4231 },
  { month: 'May', volume: 4250 },
  { month: 'June', volume: 4276 },
  { month: 'July', volume: 4133 },
  { month: 'August', volume: 3892 },
  { month: 'September', volume: 4023 },
  { month: 'October', volume: 4356 },
  { month: 'November', volume: 4150 },
  { month: 'December', volume: 4483 },
];

// Add or update the MetricItem interface to explicitly define trend type
export interface MetricItem {
  title: string;
  value: string;
  change: string;
  trend: "up" | "down";
}

// Market summary stats with proper typing
export const marketSummary: MetricItem[] = [
  {
    title: "Total transaction volume (2024)",
    value: "196K",
    change: "+40.7%",
    trend: "up" as const,
  },
  {
    title: "Total transaction value (2024)",
    value: "AED 426B",
    change: "+36.1%",
    trend: "up" as const,
  },
  {
    title: "Median price (2024)",
    value: "AED 1,395,000",
    change: "-1.6%",
    trend: "down" as const,
  },
  {
    title: "Median price per sqft (2024)",
    value: "AED 1,445",
    change: "+3.1%",
    trend: "up" as const,
  },
  {
    title: "Yield (2024)",
    value: "4.3%",
    change: "+0.2%",
    trend: "up" as const,
  }
];

// Property type data
export const propertyTypeData = [
  { type: "Apartment", medianPrice: "AED 1,218,230", pricePerSqft: "AED 979" },
  { type: "Villa", medianPrice: "AED 2,973,793", pricePerSqft: "AED 1,502" },
];

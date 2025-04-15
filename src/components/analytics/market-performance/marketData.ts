
// Market performance data for Saudi industrial market
export const marketData = [
  { year: '2020', value: 850000, volume: 35000 },
  { year: '2021', value: 980000, volume: 42000 },
  { year: '2022', value: 1250000, volume: 58000 },
  { year: '2023', value: 1650000, volume: 85000 },
  { year: '2024', value: 1950000, volume: 98000 },
  { year: '2025', value: 2100000, volume: 105000 }
];

// Price range distribution data
export const priceRangeData = [
  { year: '2020', below50M: 0.65, from50Mto100M: 0.24, from100Mto200M: 0.07, from200Mto500M: 0.04, above500M: 0 },
  { year: '2021', below50M: 0.56, from50Mto100M: 0.26, from100Mto200M: 0.10, from200Mto500M: 0.08, above500M: 0 },
  { year: '2022', below50M: 0.52, from50Mto100M: 0.27, from100Mto200M: 0.12, from200Mto500M: 0.09, above500M: 0 },
  { year: '2023', below50M: 0.48, from50Mto100M: 0.30, from100Mto200M: 0.13, from200Mto500M: 0.09, above500M: 0 },
  { year: '2024', below50M: 0.41, from50Mto100M: 0.32, from100Mto200M: 0.15, from200Mto500M: 0.12, above500M: 0 },
  { year: '2025', below50M: 0.38, from50Mto100M: 0.34, from100Mto200M: 0.16, from200Mto500M: 0.12, above500M: 0 },
];

// Monthly volume data
export const monthlyData = [
  { month: 'January', volume: 7237 },
  { month: 'February', volume: 8180 },
  { month: 'March', volume: 8205 },
  { month: 'April', volume: 9231 },
  { month: 'May', volume: 9250 },
  { month: 'June', volume: 8976 },
  { month: 'July', volume: 8133 },
  { month: 'August', volume: 7892 },
  { month: 'September', volume: 8023 },
  { month: 'October', volume: 8356 },
  { month: 'November', volume: 8650 },
  { month: 'December', volume: 8483 },
];

// Property type data with correct typings
export interface PropertyTypeData {
  type: string;
  percentage?: number;
  medianPrice: string;
  pricePerSqm: string;
}

export const propertyTypeData: PropertyTypeData[] = [
  { type: 'Warehouse', percentage: 35, medianPrice: "SAR 18,500,000", pricePerSqm: "SAR 1,850" },
  { type: 'Factory', percentage: 28, medianPrice: "SAR 26,750,000", pricePerSqm: "SAR 2,100" },
  { type: 'Logistics', percentage: 20, medianPrice: "SAR 20,300,000", pricePerSqm: "SAR 1,920" },
  { type: 'Land', percentage: 12, medianPrice: "SAR 12,100,000", pricePerSqm: "SAR 950" },
  { type: 'Mixed-use', percentage: 5, medianPrice: "SAR 22,800,000", pricePerSqm: "SAR 2,050" }
];

// Daily transaction data
export const dailyTransactionData = [
  { day: '2025-04-01', volume: 340, value: 754000000 },
  { day: '2025-04-02', volume: 298, value: 620000000 },
  { day: '2025-04-03', volume: 312, value: 689000000 },
  { day: '2025-04-04', volume: 287, value: 598000000 },
  { day: '2025-04-05', volume: 210, value: 432000000 },
  { day: '2025-04-06', volume: 152, value: 320000000 },
  { day: '2025-04-07', volume: 325, value: 712000000 },
];

// Weekly transaction data
export const weeklyTransactionData = [
  { week: '2025-W10', volume: 1850, value: 3920000000 },
  { week: '2025-W11', volume: 2023, value: 4150000000 },
  { week: '2025-W12', volume: 1920, value: 4020000000 },
  { week: '2025-W13', volume: 2120, value: 4350000000 },
  { week: '2025-W14', volume: 1924, value: 4125000000 },
];

// Market summary stats for Saudi industrial market
export interface MetricItem {
  title: string;
  value: string;
  change: string;
  trend: "up" | "down";
}

export const marketSummary: MetricItem[] = [
  {
    title: "Total transaction volume (2024)",
    value: "2.8K",
    change: "+18.7%",
    trend: "up"
  },
  {
    title: "Total transaction value (2024)", 
    value: "SAR 326B",
    change: "+22.1%",
    trend: "up"
  },
  {
    title: "Median price (2024)",
    value: "SAR 15,395,000",
    change: "+4.6%",
    trend: "up"
  },
  {
    title: "Industrial Yield (2024)",
    value: "7.3%", 
    change: "+0.4%",
    trend: "up"
  }
];

// Monthly transactions by industrial area
export const areaTransactions = [
  { 
    area: 'Riyadh Industrial',
    transactions: [120, 135, 142, 128, 145, 160, 155, 148, 170, 182, 175, 168]
  },
  { 
    area: 'Jeddah Industrial',
    transactions: [90, 95, 102, 98, 105, 112, 108, 115, 120, 125, 122, 118]
  },
  {
    area: 'Dammam Industrial',
    transactions: [75, 82, 88, 85, 92, 98, 95, 102, 108, 112, 109, 105] 
  }
];

// Price trends by property type
export const priceData = [
  {
    month: 'Jan',
    Warehouses: 1750,
    Factories: 2100,
    'Logistics Facilities': 1850,
    Land: 950
  },
  {
    month: 'Feb',
    Warehouses: 1760,
    Factories: 2120,
    'Logistics Facilities': 1860,
    Land: 960
  },
  {
    month: 'Mar',
    Warehouses: 1770,
    Factories: 2140,
    'Logistics Facilities': 1870,
    Land: 970
  },
  {
    month: 'Apr',
    Warehouses: 1780,
    Factories: 2160,
    'Logistics Facilities': 1880,
    Land: 980
  },
  {
    month: 'May',
    Warehouses: 1790,
    Factories: 2180,
    'Logistics Facilities': 1890,
    Land: 990
  },
  {
    month: 'Jun',
    Warehouses: 1800,
    Factories: 2200,
    'Logistics Facilities': 1900,
    Land: 1000
  }
];

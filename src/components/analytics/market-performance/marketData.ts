// Market performance data for Saudi industrial market
export const marketData = [
  { year: '2020', value: 850000, volume: 35000 },
  { year: '2021', value: 980000, volume: 42000 },
  { year: '2022', value: 1250000, volume: 58000 },
  { year: '2023', value: 1650000, volume: 85000 },
  { year: '2024', value: 1950000, volume: 98000 },
  { year: '2025', value: 2100000, volume: 105000 }
];

// Property type distribution for industrial properties
export const propertyTypeData = [
  { type: 'Warehouse', percentage: 35 },
  { type: 'Factory', percentage: 28 },
  { type: 'Logistics', percentage: 20 },
  { type: 'Land', percentage: 12 },
  { type: 'Mixed-use', percentage: 5 }
];

// Market summary stats for Saudi industrial market
export const marketSummary = [
  {
    title: "Total transaction volume (2024)",
    value: "2.8K",
    change: "+18.7%",
    trend: "up" as const
  },
  {
    title: "Total transaction value (2024)", 
    value: "SAR 326B",
    change: "+22.1%",
    trend: "up" as const
  },
  {
    title: "Median price (2024)",
    value: "SAR 15,395,000",
    change: "+4.6%",
    trend: "up" as const
  },
  {
    title: "Industrial Yield (2024)",
    value: "7.3%", 
    change: "+0.4%",
    trend: "up" as const
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

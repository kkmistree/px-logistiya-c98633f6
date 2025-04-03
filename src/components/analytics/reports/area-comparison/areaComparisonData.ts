
// Sample area comparison data
export interface AreaPerformanceData {
  area: string; 
  transactions: number; 
  avgPrice: number; 
  yoyPrice: number; 
  yield: number; 
  offPlanPercentage: number; 
  readyPercentage: number;
  avgRental: number;
}

export const areaPerformanceData: AreaPerformanceData[] = [
  { 
    area: "Dubai Marina", 
    transactions: 1784, 
    avgPrice: 1535, 
    yoyPrice: 7.2, 
    yield: 5.8, 
    offPlanPercentage: 65, 
    readyPercentage: 35,
    avgRental: 89000
  },
  { 
    area: "Downtown Dubai", 
    transactions: 1529, 
    avgPrice: 2245, 
    yoyPrice: 9.8, 
    yield: 4.9, 
    offPlanPercentage: 58, 
    readyPercentage: 42,
    avgRental: 110000
  },
  { 
    area: "Palm Jumeirah", 
    transactions: 957, 
    avgPrice: 3540, 
    yoyPrice: 11.2, 
    yield: 4.1, 
    offPlanPercentage: 45, 
    readyPercentage: 55,
    avgRental: 145000
  },
  { 
    area: "JVC", 
    transactions: 2312, 
    avgPrice: 892, 
    yoyPrice: 4.3, 
    yield: 7.1, 
    offPlanPercentage: 72, 
    readyPercentage: 28,
    avgRental: 63500
  },
  { 
    area: "Business Bay", 
    transactions: 1648, 
    avgPrice: 1420, 
    yoyPrice: 6.7, 
    yield: 5.6, 
    offPlanPercentage: 62, 
    readyPercentage: 38,
    avgRental: 79500
  },
  { 
    area: "Dubai Hills Estate", 
    transactions: 1103, 
    avgPrice: 1680, 
    yoyPrice: 8.3, 
    yield: 5.1, 
    offPlanPercentage: 55, 
    readyPercentage: 45,
    avgRental: 85600
  }
];

export const priceComparisonData = [
  { month: 'Jan', marina: 1480, downtown: 2180, palm: 3420, jvc: 865, bay: 1380 },
  { month: 'Feb', marina: 1490, downtown: 2195, palm: 3445, jvc: 870, bay: 1390 },
  { month: 'Mar', marina: 1495, downtown: 2205, palm: 3465, jvc: 875, bay: 1395 },
  { month: 'Apr', marina: 1500, downtown: 2215, palm: 3480, jvc: 880, bay: 1400 },
  { month: 'May', marina: 1505, downtown: 2220, palm: 3490, jvc: 882, bay: 1405 },
  { month: 'Jun', marina: 1510, downtown: 2225, palm: 3500, jvc: 885, bay: 1410 },
  { month: 'Jul', marina: 1515, downtown: 2230, palm: 3510, jvc: 887, bay: 1412 },
  { month: 'Aug', marina: 1520, downtown: 2235, palm: 3520, jvc: 890, bay: 1415 },
  { month: 'Sep', marina: 1525, downtown: 2240, palm: 3530, jvc: 892, bay: 1417 },
  { month: 'Oct', marina: 1535, downtown: 2245, palm: 3540, jvc: 895, bay: 1420 }
];

export const areaRadarData = [
  {
    area: "Price Growth",
    "Dubai Marina": 72,
    "Downtown Dubai": 98,
    "Palm Jumeirah": 112,
    "JVC": 43,
    "Business Bay": 67
  },
  {
    area: "Rental Yield",
    "Dubai Marina": 58,
    "Downtown Dubai": 49,
    "Palm Jumeirah": 41,
    "JVC": 71,
    "Business Bay": 56
  },
  {
    area: "Transaction Volume",
    "Dubai Marina": 78,
    "Downtown Dubai": 65,
    "Palm Jumeirah": 42,
    "JVC": 100,
    "Business Bay": 72
  },
  {
    area: "Off-Plan Demand",
    "Dubai Marina": 65,
    "Downtown Dubai": 58,
    "Palm Jumeirah": 45,
    "JVC": 72,
    "Business Bay": 62
  },
  {
    area: "Price/sqft",
    "Dubai Marina": 43,
    "Downtown Dubai": 63,
    "Palm Jumeirah": 100,
    "JVC": 25,
    "Business Bay": 40
  }
];

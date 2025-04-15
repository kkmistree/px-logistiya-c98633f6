
// Sample area comparison data for Saudi industrial areas
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
    area: "Riyadh Industrial City", 
    transactions: 178, 
    avgPrice: 23500, 
    yoyPrice: 7.2, 
    yield: 7.8, 
    offPlanPercentage: 65, 
    readyPercentage: 35,
    avgRental: 1890000
  },
  { 
    area: "Jeddah Industrial City", 
    transactions: 152, 
    avgPrice: 22450, 
    yoyPrice: 9.8, 
    yield: 6.9, 
    offPlanPercentage: 58, 
    readyPercentage: 42,
    avgRental: 1550000
  },
  { 
    area: "Jubail Industrial City", 
    transactions: 95, 
    avgPrice: 35400, 
    yoyPrice: 11.2, 
    yield: 8.1, 
    offPlanPercentage: 45, 
    readyPercentage: 55,
    avgRental: 2870000
  },
  { 
    area: "Dammam Industrial City", 
    transactions: 231, 
    avgPrice: 18920, 
    yoyPrice: 7.3, 
    yield: 7.5, 
    offPlanPercentage: 72, 
    readyPercentage: 28,
    avgRental: 1420000
  },
  { 
    area: "KAEC Industrial Valley", 
    transactions: 164, 
    avgPrice: 20850, 
    yoyPrice: 6.7, 
    yield: 6.8, 
    offPlanPercentage: 62, 
    readyPercentage: 38,
    avgRental: 1420000
  },
  { 
    area: "Sudair City", 
    transactions: 110, 
    avgPrice: 21600, 
    yoyPrice: 8.3, 
    yield: 7.6, 
    offPlanPercentage: 55, 
    readyPercentage: 45,
    avgRental: 1640000
  }
];

export const priceComparisonData = [
  { month: 'Jan', riyadh: 23100, jeddah: 22180, jubail: 35200, dammam: 18650, kaec: 20700 },
  { month: 'Feb', riyadh: 23190, jeddah: 22250, jubail: 35300, dammam: 18700, kaec: 20780 },
  { month: 'Mar', riyadh: 23250, jeddah: 22300, jubail: 35350, dammam: 18750, kaec: 20850 },
  { month: 'Apr', riyadh: 23300, jeddah: 22350, jubail: 35400, dammam: 18800, kaec: 20900 },
  { month: 'May', riyadh: 23350, jeddah: 22400, jubail: 35450, dammam: 18850, kaec: 20950 },
  { month: 'Jun', riyadh: 23400, jeddah: 22450, jubail: 35500, dammam: 18900, kaec: 21000 },
  { month: 'Jul', riyadh: 23450, jeddah: 22500, jubail: 35550, dammam: 18950, kaec: 21050 },
  { month: 'Aug', riyadh: 23500, jeddah: 22550, jubail: 35600, dammam: 19000, kaec: 21100 },
  { month: 'Sep', riyadh: 23550, jeddah: 22600, jubail: 35650, dammam: 19050, kaec: 21150 },
  { month: 'Oct', riyadh: 23600, jeddah: 22650, jubail: 35700, dammam: 19100, kaec: 21200 }
];

export const areaRadarData = [
  {
    area: "Price Growth",
    "Riyadh Industrial City": 72,
    "Jeddah Industrial City": 98,
    "Jubail Industrial City": 112,
    "Dammam Industrial City": 43,
    "KAEC Industrial Valley": 67
  },
  {
    area: "Rental Yield",
    "Riyadh Industrial City": 78,
    "Jeddah Industrial City": 69,
    "Jubail Industrial City": 81,
    "Dammam Industrial City": 75,
    "KAEC Industrial Valley": 68
  },
  {
    area: "Transaction Volume",
    "Riyadh Industrial City": 78,
    "Jeddah Industrial City": 65,
    "Jubail Industrial City": 42,
    "Dammam Industrial City": 100,
    "KAEC Industrial Valley": 72
  },
  {
    area: "Off-Plan Demand",
    "Riyadh Industrial City": 65,
    "Jeddah Industrial City": 58,
    "Jubail Industrial City": 45,
    "Dammam Industrial City": 72,
    "KAEC Industrial Valley": 62
  },
  {
    area: "Price/sqm",
    "Riyadh Industrial City": 65,
    "Jeddah Industrial City": 63,
    "Jubail Industrial City": 100,
    "Dammam Industrial City": 52,
    "KAEC Industrial Valley": 59
  }
];

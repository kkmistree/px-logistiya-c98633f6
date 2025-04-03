
// Area comparison data
export interface AreaData {
  id: string;
  name: string;
  totalValue: string;
  totalVolume: string;
  medianPrice: string;
  medianPricePerSqft: string;
  valueYoY: string;
  volumeYoY: string;
  trend: "up" | "down" | "mixed";
}

export const areaData: AreaData[] = [
  {
    id: "dubai-marina",
    name: "Dubai Marina & JBR (Marsa Dubai)",
    totalValue: "AED 33.5B",
    totalVolume: "10.3K",
    medianPrice: "AED 2,310,800",
    medianPricePerSqft: "AED 1,900",
    valueYoY: "-17.2%",
    volumeYoY: "-7.8%",
    trend: "down"
  },
  {
    id: "business-bay",
    name: "Business Bay",
    totalValue: "AED 26.9B",
    totalVolume: "12.3K",
    medianPrice: "AED 1,536,888",
    medianPricePerSqft: "AED 2,197",
    valueYoY: "+46.0%",
    volumeYoY: "+24.7%",
    trend: "up"
  },
  {
    id: "palm-jumeirah",
    name: "Palm Jumeirah",
    totalValue: "AED 24.9B",
    totalVolume: "2.7K",
    medianPrice: "AED 3,600,000",
    medianPricePerSqft: "AED 2,449",
    valueYoY: "-20.1%",
    volumeYoY: "-16.5%",
    trend: "down"
  },
  {
    id: "downtown-dubai",
    name: "Downtown Dubai",
    totalValue: "AED 21.8B",
    totalVolume: "5.9K",
    medianPrice: "AED 2,552,500",
    medianPricePerSqft: "AED 2,481",
    valueYoY: "+6.7%",
    volumeYoY: "-7.6%",
    trend: "mixed"
  },
  {
    id: "dubai-hills",
    name: "Dubai Hills Estate (Hadeeq Sheikh Mohammed Bin Rashid)",
    totalValue: "AED 20.5B",
    totalVolume: "8.3K",
    medianPrice: "AED 2,074,888",
    medianPricePerSqft: "AED 2,201",
    valueYoY: "+48.3%",
    volumeYoY: "+34.6%",
    trend: "up"
  },
  {
    id: "jvc",
    name: "Jumeirah Village Circle - JVC (Al Barsha South 4)",
    totalValue: "AED 20.5B",
    totalVolume: "20.2K",
    medianPrice: "AED 872,341",
    medianPricePerSqft: "AED 1,237",
    valueYoY: "+50.9%",
    volumeYoY: "+31.3%",
    trend: "up"
  }
];

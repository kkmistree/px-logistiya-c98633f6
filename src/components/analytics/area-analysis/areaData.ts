
// Area data for analysis
export const areaData = [
  {
    id: "dubai-marina",
    name: "Dubai Marina & JBR (Marsa Dubai)",
    totalValue: "AED 33.5B",
    totalVolume: "10.3K",
    medianPrice: "AED 2,310,800",
    medianPricePerSqft: "AED 1,900",
    valueYoY: "-17.2%",
    volumeYoY: "-7.8%",
    trend: "down",
    existingUnits: "32,800",
    upcomingUnits: "3,250"
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
    trend: "up",
    existingUnits: "25,400",
    upcomingUnits: "8,700"
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
    trend: "down",
    existingUnits: "10,500",
    upcomingUnits: "1,200"
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
    trend: "mixed",
    existingUnits: "12,300",
    upcomingUnits: "2,700"
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
    trend: "up",
    existingUnits: "18,400",
    upcomingUnits: "15,300"
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
    trend: "up",
    existingUnits: "36,800",
    upcomingUnits: "7,400"
  }
];

// Chart data for the price per sqft comparison
export const pricePerSqftData = areaData.map(area => ({
  name: area.name.split(' ')[0],
  price: parseInt(area.medianPricePerSqft.replace("AED ", "").replace(",", "")),
  area: area.name
})).sort((a, b) => b.price - a.price);

// Chart data for the volume comparison
export const volumeData = areaData.map(area => ({
  name: area.name.split(' ')[0],
  volume: parseFloat(area.totalVolume.replace("K", "")),
  area: area.name
})).sort((a, b) => b.volume - a.volume);

export const COLORS = ['#8884d8', '#82ca9d', '#ffc658', '#ff8042', '#0088fe', '#00C49F'];

export type AreaItemType = typeof areaData[0];

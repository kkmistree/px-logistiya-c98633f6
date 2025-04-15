
// Area data for Saudi industrial cities analysis
export const areaData = [
  {
    id: "riyadh-industrial",
    name: "Riyadh Industrial City",
    totalValue: "SAR 33.5B",
    totalVolume: "520",
    medianPrice: "SAR 23,108,000",
    medianPricePerSqm: "SAR 1,900",
    valueYoY: "+12.2%",
    volumeYoY: "+8.8%",
    trend: "up",
    existingUnits: "2,800",
    upcomingUnits: "1,250"
  },
  {
    id: "jeddah-industrial",
    name: "Jeddah Industrial City",
    totalValue: "SAR 26.9B",
    totalVolume: "483",
    medianPrice: "SAR 19,368,880",
    medianPricePerSqm: "SAR 1,797",
    valueYoY: "+16.0%",
    volumeYoY: "+14.7%",
    trend: "up",
    existingUnits: "2,400",
    upcomingUnits: "870"
  },
  {
    id: "dammam-industrial",
    name: "Dammam Industrial City",
    totalValue: "SAR 24.9B",
    totalVolume: "327",
    medianPrice: "SAR 21,600,000",
    medianPricePerSqm: "SAR 1,849",
    valueYoY: "+10.1%",
    volumeYoY: "+7.5%",
    trend: "up",
    existingUnits: "1,850",
    upcomingUnits: "520"
  },
  {
    id: "kaec-industrial",
    name: "KAEC Industrial Valley",
    totalValue: "SAR 21.8B",
    totalVolume: "290",
    medianPrice: "SAR 25,525,000",
    medianPricePerSqm: "SAR 2,081",
    valueYoY: "+6.7%",
    volumeYoY: "-2.6%",
    trend: "mixed",
    existingUnits: "1,230",
    upcomingUnits: "1,700"
  },
  {
    id: "sudair-industrial",
    name: "Sudair City for Industry and Business",
    totalValue: "SAR 20.5B",
    totalVolume: "283",
    medianPrice: "SAR 20,748,880",
    medianPricePerSqm: "SAR 2,201",
    valueYoY: "+18.3%",
    volumeYoY: "+24.6%",
    trend: "up",
    existingUnits: "1,440",
    upcomingUnits: "1,530"
  },
  {
    id: "jubail-industrial",
    name: "Jubail Industrial City",
    totalValue: "SAR 30.5B",
    totalVolume: "402",
    medianPrice: "SAR 28,723,410",
    medianPricePerSqm: "SAR 2,137",
    valueYoY: "+15.9%",
    volumeYoY: "+11.3%",
    trend: "up",
    existingUnits: "2,680",
    upcomingUnits: "740"
  }
];

// Chart data for the price per sqm comparison
export const pricePerSqftData = areaData.map(area => ({
  name: area.name.split(' ')[0],
  price: parseInt(area.medianPricePerSqm.replace("SAR ", "").replace(",", "")),
  area: area.name
})).sort((a, b) => b.price - a.price);

// Chart data for the volume comparison
export const volumeData = areaData.map(area => ({
  name: area.name.split(' ')[0],
  volume: parseFloat(area.totalVolume),
  area: area.name
})).sort((a, b) => b.volume - a.volume);

export const COLORS = ['#8884d8', '#82ca9d', '#ffc658', '#ff8042', '#0088fe', '#00C49F'];

export type AreaItemType = typeof areaData[0];

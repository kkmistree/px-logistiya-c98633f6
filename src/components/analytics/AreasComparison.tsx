
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";

// Mock areas data
const areaData = [
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

const AreasComparison = () => {
  const [propertyType, setPropertyType] = useState("all");
  const [status, setStatus] = useState("all");
  const [year, setYear] = useState("2025");
  const [bedroom, setBedroom] = useState("all");
  const [location1, setLocation1] = useState("downtown-dubai");
  const [location2, setLocation2] = useState("dubai-marina");
  
  const location1Data = areaData.find(area => area.id === location1);
  const location2Data = areaData.find(area => area.id === location2);

  const getBadgeVariant = (trend: string) => {
    switch(trend) {
      case "up": return "success";
      case "down": return "destructive";
      default: return "outline";
    }
  };

  // Calculate relative differences between areas
  const calculateRelativeDifference = (value1: string, value2: string, type: string) => {
    if (type === 'volume') {
      const vol1 = parseFloat(value1.replace('K', ''));
      const vol2 = parseFloat(value2.replace('K', ''));
      return Math.abs(((vol1 - vol2) / vol2) * 100).toFixed(1);
    } else if (type === 'value') {
      const val1 = parseFloat(value1.replace('AED ', '').replace('B', ''));
      const val2 = parseFloat(value2.replace('AED ', '').replace('B', ''));
      return Math.abs(((val1 - val2) / val2) * 100).toFixed(1);
    } else if (type === 'price-sqft') {
      const price1 = parseFloat(value1.replace('AED ', '').replace(',', ''));
      const price2 = parseFloat(value2.replace('AED ', '').replace(',', ''));
      return Math.abs(((price1 - price2) / price2) * 100).toFixed(1);
    } else if (type === 'price') {
      const price1 = parseFloat(value1.replace('AED ', '').replace(/,/g, ''));
      const price2 = parseFloat(value2.replace('AED ', '').replace(/,/g, ''));
      const diff = ((price1 - price2) / price2) * 100;
      return diff.toFixed(1);
    }
    return "0";
  };

  // Determine if location1 value is higher than location2
  const isLocation1Higher = (value1: string, value2: string, type: string) => {
    if (type === 'volume') {
      return parseFloat(value1.replace('K', '')) > parseFloat(value2.replace('K', ''));
    } else if (type === 'value') {
      return parseFloat(value1.replace('AED ', '').replace('B', '')) > parseFloat(value2.replace('AED ', '').replace('B', ''));
    } else if (type === 'price-sqft' || type === 'price') {
      return parseFloat(value1.replace('AED ', '').replace(/,/g, '')) > parseFloat(value2.replace('AED ', '').replace(/,/g, ''));
    }
    return false;
  };

  return (
    <div className="space-y-6">
      {/* Filters */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-3">
        <div>
          <Select value={propertyType} onValueChange={setPropertyType}>
            <SelectTrigger>
              <SelectValue placeholder="Property Type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All</SelectItem>
              <SelectItem value="apartment">Apartment</SelectItem>
              <SelectItem value="villa">Villa</SelectItem>
            </SelectContent>
          </Select>
        </div>
        
        <div>
          <Select value={status} onValueChange={setStatus}>
            <SelectTrigger>
              <SelectValue placeholder="Property Status" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All</SelectItem>
              <SelectItem value="readyBuilt">Ready built</SelectItem>
              <SelectItem value="offPlan">Off-plan</SelectItem>
            </SelectContent>
          </Select>
        </div>
        
        <div>
          <Select value={year} onValueChange={setYear}>
            <SelectTrigger>
              <SelectValue placeholder="Year" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="2025">2025 (Year-to-date)</SelectItem>
              <SelectItem value="2024">2024</SelectItem>
              <SelectItem value="2023">2023</SelectItem>
            </SelectContent>
          </Select>
        </div>
        
        <div>
          <Select value={bedroom} onValueChange={setBedroom}>
            <SelectTrigger>
              <SelectValue placeholder="Bedrooms" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All beds</SelectItem>
              <SelectItem value="studio">Studio</SelectItem>
              <SelectItem value="1">1 Bedroom</SelectItem>
              <SelectItem value="2">2 Bedrooms</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
      
      {/* Side by side comparison */}
      <div className="bg-slate-900 text-white p-4 rounded-lg">
        <h2 className="text-lg font-semibold mb-1">Area side by side analysis</h2>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Location 1 selector */}
        <div>
          <h3 className="text-sm font-medium mb-2">Location</h3>
          <Select value={location1} onValueChange={setLocation1}>
            <SelectTrigger className="bg-slate-100">
              <SelectValue placeholder="Select location" />
            </SelectTrigger>
            <SelectContent>
              {areaData.map(area => (
                <SelectItem key={area.id} value={area.id}>{area.name}</SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        
        {/* Location 2 selector */}
        <div>
          <h3 className="text-sm font-medium mb-2">Compare with</h3>
          <Select value={location2} onValueChange={setLocation2}>
            <SelectTrigger className="bg-slate-100">
              <SelectValue placeholder="Select location" />
            </SelectTrigger>
            <SelectContent>
              {areaData.map(area => (
                <SelectItem key={area.id} value={area.id}>{area.name}</SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>
      
      {/* Comparison badge */}
      <div className="flex justify-center">
        <Badge className="px-4 py-1 bg-pink-500 text-white">2025</Badge>
      </div>
      
      {/* Metrics comparison grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Left column - Location 1 */}
        <div className="space-y-4">
          {/* Transaction volume */}
          <Card className="bg-slate-800 text-white border-none">
            <CardContent className="p-6">
              <h3 className="text-base text-slate-300 mb-1">Transactions volume</h3>
              <p className="text-2xl font-bold">{location1Data?.totalVolume}</p>
              <div className="mt-1">
                <Badge variant={getBadgeVariant(location1Data?.trend || "")}>
                  {location1Data?.volumeYoY} YoY Change
                </Badge>
              </div>
            </CardContent>
          </Card>
          
          {/* Transaction value */}
          <Card className="bg-slate-800 text-white border-none">
            <CardContent className="p-6">
              <h3 className="text-base text-slate-300 mb-1">Total transaction value</h3>
              <p className="text-2xl font-bold">{location1Data?.totalValue}</p>
              <div className="mt-1">
                <Badge variant={getBadgeVariant(location1Data?.trend || "")}>
                  {location1Data?.valueYoY} YoY Change
                </Badge>
              </div>
            </CardContent>
          </Card>
          
          {/* Median price per sqft */}
          <Card className="bg-slate-800 text-white border-none">
            <CardContent className="p-6">
              <h3 className="text-base text-slate-300 mb-1">Median price per sqft</h3>
              <p className="text-2xl font-bold">{location1Data?.medianPricePerSqft}</p>
              <div className="mt-1">
                <Badge variant={getBadgeVariant(location1Data?.trend || "")}>
                  {location1Data?.valueYoY} YoY Change
                </Badge>
              </div>
            </CardContent>
          </Card>
          
          {/* Median price */}
          <Card className="bg-slate-800 text-white border-none">
            <CardContent className="p-6">
              <h3 className="text-base text-slate-300 mb-1">Property median price</h3>
              <p className="text-2xl font-bold">{location1Data?.medianPrice}</p>
              <div className="mt-1">
                <Badge variant={getBadgeVariant(location1Data?.trend || "")}>
                  {location1Data?.valueYoY} YoY Change
                </Badge>
              </div>
            </CardContent>
          </Card>
        </div>
        
        {/* Right column - Location 2 */}
        <div className="space-y-4">
          {/* Relative difference badge for volume */}
          <div className="flex justify-end mb-[-20px] mr-6 z-10 relative">
            <Badge className={`px-3 py-1 ${
              isLocation1Higher(location1Data?.totalVolume || "0", location2Data?.totalVolume || "0", "volume") ? 
                'bg-green-500' : 'bg-red-500'} text-white`}
            >
              {calculateRelativeDifference(
                location1Data?.totalVolume || "0", 
                location2Data?.totalVolume || "0", 
                "volume"
              )}%
            </Badge>
          </div>
          
          {/* Transaction volume */}
          <Card className="bg-slate-800 text-white border-none">
            <CardContent className="p-6">
              <h3 className="text-base text-slate-300 mb-1">Transactions volume</h3>
              <p className="text-2xl font-bold">{location2Data?.totalVolume}</p>
              <div className="mt-1">
                <Badge variant={getBadgeVariant(location2Data?.trend || "")}>
                  {location2Data?.volumeYoY} YoY Change
                </Badge>
              </div>
            </CardContent>
          </Card>
          
          {/* Relative difference badge for value */}
          <div className="flex justify-end mb-[-20px] mr-6 z-10 relative">
            <Badge className={`px-3 py-1 ${
              isLocation1Higher(location1Data?.totalValue || "0", location2Data?.totalValue || "0", "value") ? 
                'bg-green-500' : 'bg-red-500'} text-white`}
            >
              {calculateRelativeDifference(
                location1Data?.totalValue || "0", 
                location2Data?.totalValue || "0", 
                "value"
              )}%
            </Badge>
          </div>
          
          {/* Transaction value */}
          <Card className="bg-slate-800 text-white border-none">
            <CardContent className="p-6">
              <h3 className="text-base text-slate-300 mb-1">Total transaction value</h3>
              <p className="text-2xl font-bold">{location2Data?.totalValue}</p>
              <div className="mt-1">
                <Badge variant={getBadgeVariant(location2Data?.trend || "")}>
                  {location2Data?.valueYoY} YoY Change
                </Badge>
              </div>
            </CardContent>
          </Card>
          
          {/* Relative difference badge for price per sqft */}
          <div className="flex justify-end mb-[-20px] mr-6 z-10 relative">
            <Badge className={`px-3 py-1 ${
              isLocation1Higher(location1Data?.medianPricePerSqft || "0", location2Data?.medianPricePerSqft || "0", "price-sqft") ? 
                'bg-green-500' : 'bg-red-500'} text-white`}
            >
              {calculateRelativeDifference(
                location1Data?.medianPricePerSqft || "0", 
                location2Data?.medianPricePerSqft || "0", 
                "price-sqft"
              )}%
            </Badge>
          </div>
          
          {/* Median price per sqft */}
          <Card className="bg-slate-800 text-white border-none">
            <CardContent className="p-6">
              <h3 className="text-base text-slate-300 mb-1">Median price per sqft</h3>
              <p className="text-2xl font-bold">{location2Data?.medianPricePerSqft}</p>
              <div className="mt-1">
                <Badge variant={getBadgeVariant(location2Data?.trend || "")}>
                  {location2Data?.valueYoY} YoY Change
                </Badge>
              </div>
            </CardContent>
          </Card>
          
          {/* Relative difference badge for median price */}
          <div className="flex justify-end mb-[-20px] mr-6 z-10 relative">
            <Badge className={`px-3 py-1 ${
              isLocation1Higher(location1Data?.medianPrice || "0", location2Data?.medianPrice || "0", "price") ? 
                'bg-green-500' : 'bg-red-500'} text-white`}
            >
              {calculateRelativeDifference(
                location1Data?.medianPrice || "0", 
                location2Data?.medianPrice || "0", 
                "price"
              )}%
            </Badge>
          </div>
          
          {/* Median price */}
          <Card className="bg-slate-800 text-white border-none">
            <CardContent className="p-6">
              <h3 className="text-base text-slate-300 mb-1">Property median price</h3>
              <p className="text-2xl font-bold">{location2Data?.medianPrice}</p>
              <div className="mt-1">
                <Badge variant={getBadgeVariant(location2Data?.trend || "")}>
                  {location2Data?.valueYoY} YoY Change
                </Badge>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default AreasComparison;

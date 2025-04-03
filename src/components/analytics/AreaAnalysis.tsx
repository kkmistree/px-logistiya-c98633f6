import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from "@/components/ui/table";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { PieChart, Pie, BarChart, Bar, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend, Cell } from "recharts";

// Area data (same as used in AreasComparison)
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
const pricePerSqftData = areaData.map(area => ({
  name: area.name.split(' ')[0],
  price: parseInt(area.medianPricePerSqft.replace("AED ", "").replace(",", "")),
  area: area.name
})).sort((a, b) => b.price - a.price);

// Chart data for the volume comparison
const volumeData = areaData.map(area => ({
  name: area.name.split(' ')[0],
  volume: parseFloat(area.totalVolume.replace("K", "")),
  area: area.name
})).sort((a, b) => b.volume - a.volume);

const COLORS = ['#8884d8', '#82ca9d', '#ffc658', '#ff8042', '#0088fe', '#00C49F'];

const AreaAnalysis = () => {
  const [view, setView] = useState<'table' | 'charts'>('table');
  const [sortField, setSortField] = useState("volume-high-to-low");

  const getBadgeVariant = (trend: string) => {
    switch(trend) {
      case "up": return "success";
      case "down": return "destructive";
      default: return "outline";
    }
  };

  const getPercentageClass = (value: string) => {
    if (value.startsWith("+")) return "text-green-500";
    if (value.startsWith("-")) return "text-red-500";
    return "";
  };

  const sortedAreaData = [...areaData].sort((a, b) => {
    switch(sortField) {
      case "volume-high-to-low":
        return parseFloat(b.totalVolume.replace("K", "")) - parseFloat(a.totalVolume.replace("K", ""));
      case "volume-low-to-high":
        return parseFloat(a.totalVolume.replace("K", "")) - parseFloat(b.totalVolume.replace("K", ""));
      case "value-high-to-low":
        return parseFloat(b.totalValue.replace("AED ", "").replace("B", "")) - parseFloat(a.totalValue.replace("AED ", "").replace("B", ""));
      case "value-low-to-high":
        return parseFloat(a.totalValue.replace("AED ", "").replace("B", "")) - parseFloat(b.totalValue.replace("AED ", "").replace("B", ""));
      case "price-high-to-low":
        return parseFloat(b.medianPrice.replace("AED ", "").replace(",", "")) - parseFloat(a.medianPrice.replace("AED ", "").replace(",", ""));
      case "price-low-to-high":
        return parseFloat(a.medianPrice.replace("AED ", "").replace(",", "")) - parseFloat(b.medianPrice.replace("AED ", "").replace(",", ""));
      default:
        return 0;
    }
  });

  return (
    <div className="space-y-6">
      <div className="bg-slate-900 text-white p-4 rounded-lg">
        <h2 className="text-lg font-semibold mb-1">Dubai Area Analysis</h2>
        <p className="text-sm text-slate-300">Comprehensive metrics for Dubai's main residential and commercial areas</p>
      </div>

      <div className="flex flex-col sm:flex-row justify-between gap-4">
        <div className="flex gap-2">
          <Button 
            variant={view === 'table' ? "default" : "outline"} 
            onClick={() => setView('table')}
            className={view === 'table' ? "bg-pink-500 text-white" : ""}
          >
            Table View
          </Button>
          <Button 
            variant={view === 'charts' ? "default" : "outline"} 
            onClick={() => setView('charts')}
            className={view === 'charts' ? "bg-pink-500 text-white" : ""}
          >
            Charts View
          </Button>
        </div>

        <div>
          <Select value={sortField} onValueChange={setSortField}>
            <SelectTrigger className="w-[220px]">
              <SelectValue placeholder="Sort by" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="volume-high-to-low">Volume (High to Low)</SelectItem>
              <SelectItem value="volume-low-to-high">Volume (Low to High)</SelectItem>
              <SelectItem value="value-high-to-low">Value (High to Low)</SelectItem>
              <SelectItem value="value-low-to-high">Value (Low to High)</SelectItem>
              <SelectItem value="price-high-to-low">Price (High to Low)</SelectItem>
              <SelectItem value="price-low-to-high">Price (Low to High)</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      {view === 'table' && (
        <Card>
          <CardContent className="p-0 overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Area</TableHead>
                  <TableHead>Total Value (2024)</TableHead>
                  <TableHead>Total Volume (2024)</TableHead>
                  <TableHead>Median Price (2024)</TableHead>
                  <TableHead>Median Price/sqft (2024)</TableHead>
                  <TableHead>Value YoY</TableHead>
                  <TableHead>Volume YoY</TableHead>
                  <TableHead>Existing Units</TableHead>
                  <TableHead>Upcoming Units</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {sortedAreaData.map((area) => (
                  <TableRow key={area.id}>
                    <TableCell className="font-medium">{area.name}</TableCell>
                    <TableCell>{area.totalValue}</TableCell>
                    <TableCell>{area.totalVolume}</TableCell>
                    <TableCell>{area.medianPrice}</TableCell>
                    <TableCell>{area.medianPricePerSqft}</TableCell>
                    <TableCell>
                      <Badge variant={getBadgeVariant(area.trend)}>
                        {area.valueYoY}
                      </Badge>
                    </TableCell>
                    <TableCell>
                      <Badge variant={getBadgeVariant(area.trend)}>
                        {area.volumeYoY}
                      </Badge>
                    </TableCell>
                    <TableCell>{area.existingUnits}</TableCell>
                    <TableCell>{area.upcomingUnits}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      )}

      {view === 'charts' && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Price per sqft comparison */}
          <Card>
            <CardContent className="pt-6">
              <h3 className="text-lg font-semibold mb-4">Median Price per sqft (AED)</h3>
              <div className="h-[400px]">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart
                    data={pricePerSqftData}
                    layout="vertical"
                    margin={{ top: 5, right: 30, left: 100, bottom: 5 }}
                  >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis type="number" />
                    <YAxis 
                      type="category" 
                      dataKey="name" 
                      width={80}
                    />
                    <Tooltip formatter={(value) => [`${value} AED/sqft`, 'Median Price']} />
                    <Bar dataKey="price" fill="#8884d8">
                      {pricePerSqftData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                      ))}
                    </Bar>
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>

          {/* Transaction volume comparison */}
          <Card>
            <CardContent className="pt-6">
              <h3 className="text-lg font-semibold mb-4">Transaction Volume (thousands)</h3>
              <div className="h-[400px]">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart
                    data={volumeData}
                    layout="vertical"
                    margin={{ top: 5, right: 30, left: 100, bottom: 5 }}
                  >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis type="number" />
                    <YAxis 
                      type="category" 
                      dataKey="name" 
                      width={80}
                    />
                    <Tooltip formatter={(value) => [`${value}K`, 'Transactions']} />
                    <Bar dataKey="volume" fill="#82ca9d">
                      {volumeData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                      ))}
                    </Bar>
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>

          {/* Area Value YoY */}
          <Card>
            <CardContent className="pt-6">
              <h3 className="text-lg font-semibold mb-4">Value Year-over-Year Change (%)</h3>
              <div className="h-[400px]">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart
                    data={areaData.map(area => ({
                      name: area.name.split(' ')[0],
                      change: parseFloat(area.valueYoY.replace("+", "").replace("%", "")),
                      positive: area.valueYoY.startsWith("+")
                    }))}
                    layout="vertical"
                    margin={{ top: 5, right: 30, left: 100, bottom: 5 }}
                  >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis type="number" />
                    <YAxis 
                      type="category" 
                      dataKey="name" 
                      width={80}
                    />
                    <Tooltip formatter={(value) => [`${value}%`, 'YoY Change']} />
                    <Bar dataKey="change" fill="#82ca9d">
                      {areaData.map((entry, index) => (
                        <Cell 
                          key={`cell-${index}`} 
                          fill={entry.valueYoY.startsWith("+") ? "#4ade80" : "#ef4444"} 
                        />
                      ))}
                    </Bar>
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>

          {/* Existing vs Upcoming Units */}
          <Card>
            <CardContent className="pt-6">
              <h3 className="text-lg font-semibold mb-4">Existing vs. Upcoming Units</h3>
              <div className="h-[400px]">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart
                    data={areaData.map(area => ({
                      name: area.name.split(' ')[0],
                      existing: parseInt(area.existingUnits.replace(",", "")),
                      upcoming: parseInt(area.upcomingUnits.replace(",", ""))
                    }))}
                    margin={{ top: 5, right: 30, left: 30, bottom: 5 }}
                  >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip formatter={(value) => [`${value.toLocaleString()}`, '']} />
                    <Legend />
                    <Bar dataKey="existing" name="Existing Units" fill="#8884d8" />
                    <Bar dataKey="upcoming" name="Upcoming Units" fill="#82ca9d" />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  );
};

export default AreaAnalysis;

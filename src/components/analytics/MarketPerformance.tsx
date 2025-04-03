
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar } from "recharts";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { formatCurrency, formatPercentage } from "@/utils/format";

// Market performance data (mock)
const marketData = [
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
const priceRangeData = [
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
const monthlyData = [
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

// Market summary stats
const marketSummary = [
  {
    title: "Total transaction volume (2024)",
    value: "196K",
    change: "+40.7%",
    trend: "up",
  },
  {
    title: "Total transaction value (2024)",
    value: "AED 426B",
    change: "+36.1%",
    trend: "up",
  },
  {
    title: "Median price (2024)",
    value: "AED 1,395,000",
    change: "-1.6%",
    trend: "down",
  },
  {
    title: "Median price per sqft (2024)",
    value: "AED 1,445",
    change: "+3.1%",
    trend: "up",
  },
  {
    title: "Yield (2024)",
    value: "4.3%",
    change: "+0.2%",
    trend: "up",
  }
];

// Property type data
const propertyTypeData = [
  { type: "Apartment", medianPrice: "AED 1,218,230", pricePerSqft: "AED 979" },
  { type: "Villa", medianPrice: "AED 2,973,793", pricePerSqft: "AED 1,502" },
];

const MarketPerformance = () => {
  const [propertyType, setPropertyType] = useState("all");
  const [status, setStatus] = useState("all");
  const [year, setYear] = useState("2025");
  const [bedroom, setBedroom] = useState("all");
  const [area, setArea] = useState("all");
  const [transactionType, setTransactionType] = useState("sales");
  const [chartType, setChartType] = useState("volume");

  return (
    <div className="space-y-6">
      {/* Filters */}
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-3">
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
          <Select value={area} onValueChange={setArea}>
            <SelectTrigger>
              <SelectValue placeholder="Choose area" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All areas</SelectItem>
              <SelectItem value="dubai-marina">Dubai Marina</SelectItem>
              <SelectItem value="downtown">Downtown Dubai</SelectItem>
              <SelectItem value="business-bay">Business Bay</SelectItem>
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
              <SelectItem value="2022">2022</SelectItem>
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
              <SelectItem value="3">3 Bedrooms</SelectItem>
              <SelectItem value="4+">4+ Bedrooms</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      {/* Transaction type toggle */}
      <div className="flex gap-2 justify-center">
        <Button 
          variant={transactionType === "sales" ? "default" : "outline"} 
          onClick={() => setTransactionType("sales")}
          className="bg-estate-primary text-white rounded-full px-6"
        >
          Sales transactions
        </Button>
        <Button 
          variant={transactionType === "rental" ? "default" : "outline"} 
          onClick={() => setTransactionType("rental")}
          className={transactionType === "rental" ? "bg-estate-primary text-white rounded-full px-6" : "rounded-full px-6"}
        >
          Rental contracts
        </Button>
      </div>

      {/* Key metrics */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {marketSummary.slice(0, 3).map((metric, index) => (
          <Card key={index} className="bg-slate-900 text-white">
            <CardContent className="p-6">
              <h3 className="text-sm font-medium text-slate-300">{metric.title}</h3>
              <p className="text-2xl font-bold mt-2">{metric.value}</p>
              <div className="flex items-center mt-1">
                <Badge variant={metric.trend === "up" ? "success" : "destructive"} className="text-xs">
                  YoY Change: {metric.change}
                </Badge>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {marketSummary.slice(3).map((metric, index) => (
          <Card key={index} className="bg-slate-900 text-white">
            <CardContent className="p-6">
              <h3 className="text-sm font-medium text-slate-300">{metric.title}</h3>
              <p className="text-2xl font-bold mt-2">{metric.value}</p>
              <div className="flex items-center mt-1">
                <Badge variant={metric.trend === "up" ? "success" : "destructive"} className="text-xs">
                  YoY Change: {metric.change}
                </Badge>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Property type breakdown */}
      <div className="grid grid-cols-1 gap-4">
        <h2 className="text-xl font-bold mb-0">Transaction volume</h2>
        <Card>
          <CardContent className="p-6">
            <div className="h-[400px]">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart
                  data={marketData}
                  margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="year" />
                  <YAxis tickFormatter={(value) => `${value / 1000}K`} />
                  <Tooltip formatter={(value) => [`${value.toLocaleString()}`, 'Volume']} />
                  <Area 
                    type="monotone" 
                    dataKey="volume" 
                    stroke="#8884d8" 
                    fill="#8884d8" 
                    fillOpacity={0.8} 
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Property price performance */}
      <div className="grid grid-cols-1 gap-4">
        <h2 className="text-xl font-bold mb-0">Property price performance (AED)</h2>
        <Card>
          <CardContent className="p-6">
            <div className="flex justify-end mb-4">
              <div className="flex gap-2">
                <Button 
                  variant={chartType === "price" ? "default" : "outline"} 
                  size="sm"
                  onClick={() => setChartType("price")}
                  className={chartType === "price" ? "bg-estate-primary text-white" : ""}
                >
                  Price
                </Button>
                <Button 
                  variant={chartType === "pricePerSqft" ? "default" : "outline"} 
                  size="sm"
                  onClick={() => setChartType("pricePerSqft")}
                  className={chartType === "pricePerSqft" ? "bg-estate-primary text-white" : ""}
                >
                  Price per sqft
                </Button>
              </div>
            </div>
            <div className="h-[400px]">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart
                  data={marketData}
                  margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="year" />
                  <YAxis />
                  <Tooltip formatter={(value) => [`AED ${value.toLocaleString()}`, 'Price']} />
                  <Area 
                    type="monotone" 
                    dataKey="value" 
                    stroke="#d946ef" 
                    fill="#d946ef" 
                    fillOpacity={0.8} 
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Distribution of sales transactions by price range */}
      <div className="grid grid-cols-1 gap-4">
        <h2 className="text-xl font-bold mb-0">Distribution of sale transactions by price range</h2>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-center mb-4 text-xs space-x-4">
              <div className="flex items-center">
                <div className="w-3 h-3 bg-cyan-300 mr-1"></div>
                <span>Up to AED 1M</span>
              </div>
              <div className="flex items-center">
                <div className="w-3 h-3 bg-pink-400 mr-1"></div>
                <span>AED 1M - AED 2M</span>
              </div>
              <div className="flex items-center">
                <div className="w-3 h-3 bg-green-400 mr-1"></div>
                <span>AED 2M - AED 3.7M</span>
              </div>
              <div className="flex items-center">
                <div className="w-3 h-3 bg-yellow-400 mr-1"></div>
                <span>AED 3.7M - AED 7M</span>
              </div>
              <div className="flex items-center">
                <div className="w-3 h-3 bg-indigo-400 mr-1"></div>
                <span>Above AED 7M</span>
              </div>
            </div>
            <div className="h-[400px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  data={priceRangeData}
                  margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                  stackOffset="expand"
                  barSize={30}
                  maxBarSize={35}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="year" />
                  <YAxis tickFormatter={(value) => `${(value * 100).toFixed(0)}%`} />
                  <Tooltip 
                    formatter={(value, name) => {
                      const labels = {
                        below1M: "Up to AED 1M",
                        from1Mto2M: "AED 1M - AED 2M",
                        from2Mto3M: "AED 2M - AED 3.7M",
                        from3Mto7M: "AED 3.7M - AED 7M",
                        above7M: "Above AED 7M"
                      };
                      return [`${(value).toFixed(1)}%`, labels[name as keyof typeof labels]];
                    }}
                  />
                  <Bar dataKey="below1M" stackId="a" fill="#22d3ee" />
                  <Bar dataKey="from1Mto2M" stackId="a" fill="#ec4899" />
                  <Bar dataKey="from2Mto3M" stackId="a" fill="#4ade80" />
                  <Bar dataKey="from3Mto7M" stackId="a" fill="#facc15" />
                  <Bar dataKey="above7M" stackId="a" fill="#818cf8" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Median monthly transactions volume */}
      <div className="grid grid-cols-1 gap-4">
        <h2 className="text-xl font-bold mb-0">Median monthly transactions volume</h2>
        <Card>
          <CardContent className="p-6">
            <div className="flex justify-end gap-2 mb-4">
              <Button
                variant="outline"
                size="sm"
                className="bg-pink-500 text-white"
              >
                Volume
              </Button>
              <Button
                variant="outline"
                size="sm"
              >
                Value
              </Button>
            </div>
            <div className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  data={monthlyData}
                  margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                  barSize={20}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" />
                  <YAxis />
                  <Tooltip formatter={(value) => [`${value.toLocaleString()}`, 'Volume']} />
                  <Bar dataKey="volume" fill="#d946ef" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Price analysis table */}
      <div className="grid grid-cols-1 gap-4">
        <h2 className="text-xl font-bold">Price analysis (2024)</h2>
        <Card>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Property type</TableHead>
                <TableHead>Median price</TableHead>
                <TableHead>Median price/sqft</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {propertyTypeData.map((row, index) => (
                <TableRow key={index}>
                  <TableCell className="font-medium">{row.type}</TableCell>
                  <TableCell>{row.medianPrice}</TableCell>
                  <TableCell>{row.pricePerSqft}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Card>
      </div>
    </div>
  );
};

export default MarketPerformance;

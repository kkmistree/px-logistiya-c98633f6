
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { BarChart, Bar, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from "recharts";

// Property types market share data
const propertyTypeData = [
  { year: '2009', apartment: 55.8, villa: 5.5 },
  { year: '2010', apartment: 39.3, villa: 7.3 },
  { year: '2011', apartment: 35.6, villa: 7.4 },
  { year: '2012', apartment: 37.3, villa: 6.9 },
  { year: '2013', apartment: 49.5, villa: 13.5 },
  { year: '2014', apartment: 43.3, villa: 13.8 },
  { year: '2015', apartment: 34.5, villa: 12.6 },
  { year: '2016', apartment: 35.8, villa: 11.3 },
  { year: '2017', apartment: 35.9, villa: 12.7 },
  { year: '2018', apartment: 35.0, villa: 9.0 },
  { year: '2019', apartment: 31.7, villa: 11.9 },
  { year: '2020', apartment: 28.9, villa: 12.3 },
  { year: '2021', apartment: 46.5, villa: 19.5 },
  { year: '2022', apartment: 74.1, villa: 25.9 },
  { year: '2023', apartment: 111.4, villa: 34.7 },
  { year: '2024', apartment: 155.7, villa: 30.3 },
  { year: '2025', apartment: 59.5, villa: 7.8 },
];

// Price performance data by property type
const pricePerformanceData = [
  { year: '2009', apartment: 850000, villa: 1800000 },
  { year: '2010', apartment: 890000, villa: 1850000 },
  { year: '2011', apartment: 870000, villa: 1750000 },
  { year: '2012', apartment: 930000, villa: 2150000 },
  { year: '2013', apartment: 1000000, villa: 2550000 },
  { year: '2014', apartment: 1050000, villa: 2550000 },
  { year: '2015', apartment: 980000, villa: 2600000 },
  { year: '2016', apartment: 900000, villa: 2550000 },
  { year: '2017', apartment: 880000, villa: 2600000 },
  { year: '2018', apartment: 850000, villa: 2150000 },
  { year: '2019', apartment: 820000, villa: 1700000 },
  { year: '2020', apartment: 850000, villa: 1750000 },
  { year: '2021', apartment: 950000, villa: 2100000 },
  { year: '2022', apartment: 1050000, villa: 2200000 },
  { year: '2023', apartment: 1100000, villa: 2550000 },
  { year: '2024', apartment: 1220000, villa: 3100000 },
  { year: '2025', apartment: 1250000, villa: 3200000 },
];

// Off-plan vs. Ready built market share data
const propertyStatusData = [
  { year: '2009', offplan: 36.3, readybuilt: 40.8 },
  { year: '2010', offplan: 34.7, readybuilt: 36.3 },
  { year: '2011', offplan: 30.0, readybuilt: 13.0 },
  { year: '2012', offplan: 41.9, readybuilt: 18.4 },
  { year: '2013', offplan: 50.6, readybuilt: 35.4 },
  { year: '2014', offplan: 41.8, readybuilt: 38.8 },
  { year: '2015', offplan: 33.6, readybuilt: 41.3 },
  { year: '2016', offplan: 41.3, readybuilt: 41.9 },
  { year: '2017', offplan: 23.3, readybuilt: 43.3 },
  { year: '2018', offplan: 24.4, readybuilt: 34.9 },
  { year: '2019', offplan: 25.4, readybuilt: 36.3 },
  { year: '2020', offplan: 15.5, readybuilt: 46.4 },
  { year: '2021', offplan: 23.5, readybuilt: 58.5 },
  { year: '2022', offplan: 42.8, readybuilt: 77.3 },
  { year: '2023', offplan: 87.3, readybuilt: 116.7 },
  { year: '2024', offplan: 108.5, readybuilt: 17.5 },
  { year: '2025', offplan: 21.5, readybuilt: 49.5 },
];

// Status price performance data
const statusPriceData = [
  { year: '2009', offplan: 750000, readybuilt: 820000 },
  { year: '2010', offplan: 950000, readybuilt: 850000 },
  { year: '2011', offplan: 850000, readybuilt: 800000 },
  { year: '2012', offplan: 1200000, readybuilt: 950000 },
  { year: '2013', offplan: 1500000, readybuilt: 1000000 },
  { year: '2014', offplan: 1350000, readybuilt: 1100000 },
  { year: '2015', offplan: 1250000, readybuilt: 1050000 },
  { year: '2016', offplan: 1200000, readybuilt: 1050000 },
  { year: '2017', offplan: 1050000, readybuilt: 1200000 },
  { year: '2018', offplan: 950000, readybuilt: 1150000 },
  { year: '2019', offplan: 900000, readybuilt: 1100000 },
  { year: '2020', offplan: 850000, readybuilt: 1050000 },
  { year: '2021', offplan: 1100000, readybuilt: 1250000 },
  { year: '2022', offplan: 1200000, readybuilt: 1400000 },
  { year: '2023', offplan: 1350000, readybuilt: 1450000 },
  { year: '2024', offplan: 1500000, readybuilt: 1600000 },
  { year: '2025', offplan: 1600000, readybuilt: 1650000 },
];

const MarketShare = () => {
  const [propertyType, setPropertyType] = useState("apartment-vs-villa");
  const [area, setArea] = useState("all");
  const [chartView, setChartView] = useState("volume");

  return (
    <div className="space-y-6">
      {/* Filters */}
      <div className="flex flex-col sm:flex-row justify-between gap-4">
        <div className="space-y-2">
          <div className="text-sm font-medium">Go to</div>
          <div className="flex gap-2">
            <Button 
              variant={propertyType === "apartment-vs-villa" ? "default" : "outline"} 
              onClick={() => setPropertyType("apartment-vs-villa")}
              className={propertyType === "apartment-vs-villa" ? "bg-estate-primary text-white" : ""}
              size="sm"
            >
              Apartment vs. Villa
            </Button>
            <Button 
              variant={propertyType === "offplan-vs-ready" ? "default" : "outline"} 
              onClick={() => setPropertyType("offplan-vs-ready")}
              className={propertyType === "offplan-vs-ready" ? "bg-estate-primary text-white" : ""}
              size="sm"
            >
              Off-plan vs. Ready built
            </Button>
          </div>
        </div>

        <div className="space-y-2">
          <div className="text-sm font-medium">Choose area</div>
          <Select value={area} onValueChange={setArea}>
            <SelectTrigger className="w-[200px]">
              <SelectValue placeholder="Choose area" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All areas</SelectItem>
              <SelectItem value="dubai-marina">Dubai Marina</SelectItem>
              <SelectItem value="downtown">Downtown Dubai</SelectItem>
              <SelectItem value="palm-jumeirah">Palm Jumeirah</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      {/* Apartment vs. Villa section */}
      {propertyType === "apartment-vs-villa" && (
        <>
          <div className="bg-slate-900 text-white p-4 rounded-lg">
            <h2 className="text-lg font-semibold mb-1">Apartment vs. Villa</h2>
            <p className="text-sm text-slate-300">Analyze the distribution of property types in Dubai's real estate market.</p>
          </div>

          <div className="grid grid-cols-1 gap-6">
            {/* Market share chart */}
            <Card>
              <CardContent className="pt-6">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-lg font-semibold">Market share of apartment vs. villa</h3>
                  <div className="flex gap-2">
                    <Button 
                      variant={chartView === "volume" ? "default" : "outline"} 
                      onClick={() => setChartView("volume")}
                      size="sm"
                      className={chartView === "volume" ? "bg-pink-500 text-white" : ""}
                    >
                      Volume
                    </Button>
                    <Button 
                      variant={chartView === "value" ? "default" : "outline"} 
                      onClick={() => setChartView("value")}
                      size="sm"
                      className={chartView === "value" ? "bg-pink-500 text-white" : ""}
                    >
                      Value
                    </Button>
                  </div>
                </div>

                <div className="flex justify-center mb-2 text-xs space-x-6">
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-pink-400 mr-1"></div>
                    <span>Apartment</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-cyan-400 mr-1"></div>
                    <span>Villa</span>
                  </div>
                </div>

                <div className="h-[500px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart
                      data={propertyTypeData}
                      margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                      barCategoryGap={10}
                    >
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="year" />
                      <YAxis tickFormatter={(value) => `${value}K`} />
                      <Tooltip formatter={(value) => [`${value.toLocaleString()}K`, '']} />
                      <Bar dataKey="apartment" stackId="a" name="Apartment" fill="#d946ef" />
                      <Bar dataKey="villa" stackId="a" name="Villa" fill="#22d3ee" />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>

            {/* Price performance chart */}
            <Card>
              <CardContent className="pt-6">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-lg font-semibold">Price performance (AED)</h3>
                  <div className="flex gap-2">
                    <Button 
                      variant={chartView === "price" ? "default" : "outline"} 
                      onClick={() => setChartView("price")}
                      size="sm"
                      className={chartView === "price" ? "bg-pink-500 text-white" : ""}
                    >
                      Price
                    </Button>
                    <Button 
                      variant={chartView === "pricePerSqft" ? "default" : "outline"} 
                      onClick={() => setChartView("pricePerSqft")}
                      size="sm"
                      className={chartView === "pricePerSqft" ? "bg-pink-500 text-white" : ""}
                    >
                      Price per sqft
                    </Button>
                  </div>
                </div>

                <div className="flex justify-center mb-2 text-xs space-x-6">
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-pink-400 mr-1 rounded-full"></div>
                    <span>Apartment</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-cyan-400 mr-1 rounded-full"></div>
                    <span>Villa</span>
                  </div>
                </div>

                <div className="h-[400px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart
                      data={pricePerformanceData}
                      margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                    >
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="year" />
                      <YAxis />
                      <Tooltip formatter={(value) => [`AED ${value.toLocaleString()}`, '']} />
                      <Line 
                        type="monotone" 
                        dataKey="apartment" 
                        name="Apartment" 
                        stroke="#d946ef" 
                        dot={{ stroke: '#d946ef', strokeWidth: 2, r: 4 }} 
                        activeDot={{ r: 6 }}
                        strokeWidth={2}
                      />
                      <Line 
                        type="monotone" 
                        dataKey="villa" 
                        name="Villa" 
                        stroke="#22d3ee" 
                        dot={{ stroke: '#22d3ee', strokeWidth: 2, r: 4 }} 
                        activeDot={{ r: 6 }}
                        strokeWidth={2}
                      />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>
          </div>
        </>
      )}

      {/* Off-plan vs. Ready built section */}
      {propertyType === "offplan-vs-ready" && (
        <>
          <div className="bg-slate-900 text-white p-4 rounded-lg">
            <h2 className="text-lg font-semibold mb-1">Off-plan vs. Ready built</h2>
            <p className="text-sm text-slate-300">Analyze the distribution between off-plan and ready property transactions in Dubai's real estate market.</p>
          </div>

          <div className="grid grid-cols-1 gap-6">
            {/* Market share chart */}
            <Card>
              <CardContent className="pt-6">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-lg font-semibold">Market share of off-plan vs. ready built</h3>
                  <div className="flex gap-2">
                    <Button 
                      variant={chartView === "volume" ? "default" : "outline"} 
                      onClick={() => setChartView("volume")}
                      size="sm"
                      className={chartView === "volume" ? "bg-pink-500 text-white" : ""}
                    >
                      Volume
                    </Button>
                    <Button 
                      variant={chartView === "value" ? "default" : "outline"} 
                      onClick={() => setChartView("value")}
                      size="sm"
                      className={chartView === "value" ? "bg-pink-500 text-white" : ""}
                    >
                      Value
                    </Button>
                  </div>
                </div>

                <div className="flex justify-center mb-2 text-xs space-x-6">
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-pink-400 mr-1"></div>
                    <span>Off-plan</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-cyan-400 mr-1"></div>
                    <span>Ready built</span>
                  </div>
                </div>

                <div className="h-[500px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart
                      data={propertyStatusData}
                      margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                      barCategoryGap={10}
                    >
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="year" />
                      <YAxis tickFormatter={(value) => `${value}K`} />
                      <Tooltip formatter={(value) => [`${value.toLocaleString()}K`, '']} />
                      <Bar dataKey="offplan" stackId="a" name="Off-plan" fill="#d946ef" />
                      <Bar dataKey="readybuilt" stackId="a" name="Ready built" fill="#22d3ee" />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>

            {/* Price performance chart */}
            <Card>
              <CardContent className="pt-6">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-lg font-semibold">Price performance (AED)</h3>
                  <div className="flex gap-2">
                    <Button 
                      variant={chartView === "price" ? "default" : "outline"} 
                      onClick={() => setChartView("price")}
                      size="sm"
                      className={chartView === "price" ? "bg-pink-500 text-white" : ""}
                    >
                      Price
                    </Button>
                    <Button 
                      variant={chartView === "pricePerSqft" ? "default" : "outline"} 
                      onClick={() => setChartView("pricePerSqft")}
                      size="sm"
                      className={chartView === "pricePerSqft" ? "bg-pink-500 text-white" : ""}
                    >
                      Price per sqft
                    </Button>
                  </div>
                </div>

                <div className="flex justify-center mb-2 text-xs space-x-6">
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-pink-400 mr-1 rounded-full"></div>
                    <span>Off-plan</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-cyan-400 mr-1 rounded-full"></div>
                    <span>Ready built</span>
                  </div>
                </div>

                <div className="h-[400px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart
                      data={statusPriceData}
                      margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                    >
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="year" />
                      <YAxis />
                      <Tooltip formatter={(value) => [`AED ${value.toLocaleString()}`, '']} />
                      <Line 
                        type="monotone" 
                        dataKey="offplan" 
                        name="Off-plan" 
                        stroke="#d946ef" 
                        dot={{ stroke: '#d946ef', strokeWidth: 2, r: 4 }} 
                        activeDot={{ r: 6 }}
                        strokeWidth={2}
                      />
                      <Line 
                        type="monotone" 
                        dataKey="readybuilt" 
                        name="Ready built" 
                        stroke="#22d3ee" 
                        dot={{ stroke: '#22d3ee', strokeWidth: 2, r: 4 }} 
                        activeDot={{ r: 6 }}
                        strokeWidth={2}
                      />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>
          </div>
        </>
      )}
    </div>
  );
};

export default MarketShare;

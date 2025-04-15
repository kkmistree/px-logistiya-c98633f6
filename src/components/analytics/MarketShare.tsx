
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { BarChart, Bar, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from "recharts";

// Property types market share data for industrial properties
const propertyTypeData = [
  { year: '2020', warehouse: 42.3, factory: 28.5, logistics: 29.2 },
  { year: '2021', warehouse: 44.8, factory: 27.2, logistics: 28.0 },
  { year: '2022', warehouse: 45.2, factory: 26.8, logistics: 28.0 },
  { year: '2023', warehouse: 46.5, factory: 25.9, logistics: 27.6 },
  { year: '2024', warehouse: 47.8, factory: 24.7, logistics: 27.5 },
  { year: '2025', warehouse: 48.2, factory: 24.5, logistics: 27.3 }
];

// Price performance data by property type
const pricePerformanceData = [
  { year: '2020', warehouse: 1850, factory: 2100, logistics: 1950 },
  { year: '2021', warehouse: 1920, factory: 2180, logistics: 2020 },
  { year: '2022', warehouse: 1980, factory: 2250, logistics: 2080 },
  { year: '2023', warehouse: 2050, factory: 2320, logistics: 2150 },
  { year: '2024', warehouse: 2120, factory: 2400, logistics: 2220 },
  { year: '2025', warehouse: 2200, factory: 2480, logistics: 2290 }
];

// Development status market share data
const developmentStatusData = [
  { year: '2020', operational: 65.3, underConstruction: 34.7 },
  { year: '2021', operational: 68.7, underConstruction: 31.3 },
  { year: '2022', operational: 70.2, underConstruction: 29.8 },
  { year: '2023', operational: 72.5, underConstruction: 27.5 },
  { year: '2024', operational: 74.8, underConstruction: 25.2 },
  { year: '2025', operational: 76.5, underConstruction: 23.5 }
];

// Status price performance data
const statusPriceData = [
  { year: '2020', operational: 1950, underConstruction: 1750 },
  { year: '2021', operational: 2020, underConstruction: 1820 },
  { year: '2022', operational: 2080, underConstruction: 1890 },
  { year: '2023', operational: 2150, underConstruction: 1950 },
  { year: '2024', operational: 2220, underConstruction: 2020 },
  { year: '2025', operational: 2290, underConstruction: 2090 }
];

const MarketShare = () => {
  const [propertyType, setPropertyType] = useState("property-types");
  const [area, setArea] = useState("all");
  const [chartView, setChartView] = useState("volume");

  return (
    <div className="space-y-6">
      {/* Filters */}
      <div className="flex flex-col sm:flex-row justify-between gap-4">
        <div className="space-y-2">
          <div className="text-sm font-medium">Analysis Type</div>
          <div className="flex gap-2">
            <Button 
              variant={propertyType === "property-types" ? "default" : "outline"} 
              onClick={() => setPropertyType("property-types")}
              className={propertyType === "property-types" ? "bg-estate-primary text-white" : ""}
              size="sm"
            >
              Property Types
            </Button>
            <Button 
              variant={propertyType === "development-status" ? "default" : "outline"} 
              onClick={() => setPropertyType("development-status")}
              className={propertyType === "development-status" ? "bg-estate-primary text-white" : ""}
              size="sm"
            >
              Development Status
            </Button>
          </div>
        </div>

        <div className="space-y-2">
          <div className="text-sm font-medium">Industrial City</div>
          <Select value={area} onValueChange={setArea}>
            <SelectTrigger className="w-[200px]">
              <SelectValue placeholder="Choose area" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Cities</SelectItem>
              <SelectItem value="riyadh">Riyadh Industrial City</SelectItem>
              <SelectItem value="jeddah">Jeddah Industrial City</SelectItem>
              <SelectItem value="dammam">Dammam Industrial City</SelectItem>
              <SelectItem value="sudair">Sudair Industrial City</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      {/* Property Types section */}
      {propertyType === "property-types" && (
        <>
          <div className="bg-slate-900 text-white p-4 rounded-lg">
            <h2 className="text-lg font-semibold mb-1">Industrial Property Types Analysis</h2>
            <p className="text-sm text-slate-300">Analyze the distribution of industrial property types in Saudi Arabia's industrial cities.</p>
          </div>

          <div className="grid grid-cols-1 gap-6">
            {/* Market share chart */}
            <Card>
              <CardContent className="pt-6">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-lg font-semibold">Market share by property type</h3>
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
                    <span>Warehouses</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-cyan-400 mr-1"></div>
                    <span>Factories</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-purple-400 mr-1"></div>
                    <span>Logistics Facilities</span>
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
                      <YAxis tickFormatter={(value) => `${value}%`} />
                      <Tooltip formatter={(value) => [`${value}%`, '']} />
                      <Bar dataKey="warehouse" stackId="a" name="Warehouses" fill="#d946ef" />
                      <Bar dataKey="factory" stackId="a" name="Factories" fill="#22d3ee" />
                      <Bar dataKey="logistics" stackId="a" name="Logistics" fill="#a855f7" />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>

            {/* Price performance chart */}
            <Card>
              <CardContent className="pt-6">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-lg font-semibold">Price performance (SAR/sqm)</h3>
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
                      variant={chartView === "pricePerSqm" ? "default" : "outline"} 
                      onClick={() => setChartView("pricePerSqm")}
                      size="sm"
                      className={chartView === "pricePerSqm" ? "bg-pink-500 text-white" : ""}
                    >
                      Price per sqm
                    </Button>
                  </div>
                </div>

                <div className="flex justify-center mb-2 text-xs space-x-6">
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-pink-400 mr-1 rounded-full"></div>
                    <span>Warehouses</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-cyan-400 mr-1 rounded-full"></div>
                    <span>Factories</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-purple-400 mr-1 rounded-full"></div>
                    <span>Logistics</span>
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
                      <Tooltip formatter={(value) => [`SAR ${value.toLocaleString()}/sqm`, '']} />
                      <Line 
                        type="monotone" 
                        dataKey="warehouse" 
                        name="Warehouses" 
                        stroke="#d946ef" 
                        dot={{ stroke: '#d946ef', strokeWidth: 2, r: 4 }} 
                        activeDot={{ r: 6 }}
                        strokeWidth={2}
                      />
                      <Line 
                        type="monotone" 
                        dataKey="factory" 
                        name="Factories" 
                        stroke="#22d3ee" 
                        dot={{ stroke: '#22d3ee', strokeWidth: 2, r: 4 }} 
                        activeDot={{ r: 6 }}
                        strokeWidth={2}
                      />
                      <Line 
                        type="monotone" 
                        dataKey="logistics" 
                        name="Logistics" 
                        stroke="#a855f7" 
                        dot={{ stroke: '#a855f7', strokeWidth: 2, r: 4 }} 
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

      {/* Development Status section */}
      {propertyType === "development-status" && (
        <>
          <div className="bg-slate-900 text-white p-4 rounded-lg">
            <h2 className="text-lg font-semibold mb-1">Development Status Analysis</h2>
            <p className="text-sm text-slate-300">Analyze the distribution between operational and under-construction industrial properties.</p>
          </div>

          <div className="grid grid-cols-1 gap-6">
            {/* Market share chart */}
            <Card>
              <CardContent className="pt-6">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-lg font-semibold">Market share by development status</h3>
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
                    <span>Operational</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-cyan-400 mr-1"></div>
                    <span>Under Construction</span>
                  </div>
                </div>

                <div className="h-[500px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart
                      data={developmentStatusData}
                      margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                      barCategoryGap={10}
                    >
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="year" />
                      <YAxis tickFormatter={(value) => `${value}%`} />
                      <Tooltip formatter={(value) => [`${value}%`, '']} />
                      <Bar dataKey="operational" stackId="a" name="Operational" fill="#d946ef" />
                      <Bar dataKey="underConstruction" stackId="a" name="Under Construction" fill="#22d3ee" />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>

            {/* Price performance chart */}
            <Card>
              <CardContent className="pt-6">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-lg font-semibold">Price performance (SAR/sqm)</h3>
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
                      variant={chartView === "pricePerSqm" ? "default" : "outline"} 
                      onClick={() => setChartView("pricePerSqm")}
                      size="sm"
                      className={chartView === "pricePerSqm" ? "bg-pink-500 text-white" : ""}
                    >
                      Price per sqm
                    </Button>
                  </div>
                </div>

                <div className="flex justify-center mb-2 text-xs space-x-6">
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-pink-400 mr-1 rounded-full"></div>
                    <span>Operational</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-cyan-400 mr-1 rounded-full"></div>
                    <span>Under Construction</span>
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
                      <Tooltip formatter={(value) => [`SAR ${value.toLocaleString()}/sqm`, '']} />
                      <Line 
                        type="monotone" 
                        dataKey="operational" 
                        name="Operational" 
                        stroke="#d946ef" 
                        dot={{ stroke: '#d946ef', strokeWidth: 2, r: 4 }} 
                        activeDot={{ r: 6 }}
                        strokeWidth={2}
                      />
                      <Line 
                        type="monotone" 
                        dataKey="underConstruction" 
                        name="Under Construction" 
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


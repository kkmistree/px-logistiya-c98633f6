import { Card, CardContent } from "@/components/ui/card";
import { BarChart, Bar, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Cell } from "recharts";
import { AreaItemType, COLORS } from "./areaData";
import { Button } from "@/components/ui/button";
import { FilterIcon } from "lucide-react";
import AreaFilters from "./AreaFilters";

interface ChartsViewProps {
  pricePerSqftData: Array<{ name: string; price: number; area: string }>;
  volumeData: Array<{ name: string; volume: number; area: string }>;
  areaData: AreaItemType[];
  selectedAreas: string[];
  toggleAreaSelection: (areaId: string) => void;
  showFilters: boolean;
  setShowFilters: (show: boolean) => void;
}

const ChartsView = ({ 
  pricePerSqftData, 
  volumeData, 
  areaData,
  selectedAreas,
  toggleAreaSelection,
  showFilters,
  setShowFilters
}: ChartsViewProps) => {
  // Filter chart data based on selected areas
  const filteredPricePerSqftData = pricePerSqftData.filter(item => 
    selectedAreas.some(id => areaData.find(area => area.id === id)?.name.startsWith(item.name))
  );
  
  const filteredVolumeData = volumeData.filter(item => 
    selectedAreas.some(id => areaData.find(area => area.id === id)?.name.startsWith(item.name))
  );

  const filteredAreaData = areaData.filter(area => selectedAreas.includes(area.id));

  return (
    <>
      <div className="flex justify-end mb-4">
        <Button 
          variant="outline"
          onClick={() => setShowFilters(!showFilters)}
          className="flex items-center"
        >
          <FilterIcon className="mr-2 h-4 w-4" />
          {showFilters ? 'Hide Filters' : 'Filter Areas'}
        </Button>
      </div>

      {showFilters && (
        <AreaFilters 
          areaData={areaData}
          selectedAreas={selectedAreas}
          toggleAreaSelection={toggleAreaSelection}
        />
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Price per sqft comparison */}
        <Card>
          <CardContent className="pt-6">
            <h3 className="text-lg font-semibold mb-4">Median Price per sqft (AED)</h3>
            <div className="h-[400px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  data={filteredPricePerSqftData}
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
                    {filteredPricePerSqftData.map((entry, index) => (
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
                  data={filteredVolumeData}
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
                    {filteredVolumeData.map((entry, index) => (
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
                  data={filteredAreaData.map(area => ({
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
                    {filteredAreaData.map((entry, index) => (
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
                  data={filteredAreaData.map(area => ({
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
    </>
  );
};

export default ChartsView;

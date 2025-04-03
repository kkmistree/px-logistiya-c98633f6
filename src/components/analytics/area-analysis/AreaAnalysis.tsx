
import { useState } from "react";
import { areaData, pricePerSqftData, volumeData } from "./areaData";
import ViewSelector from "./ViewSelector";
import SortSelector from "./SortSelector";
import TableView from "./TableView";
import ChartsView from "./ChartsView";
import PerformanceView from "./PerformanceView";

const AreaAnalysis = () => {
  const [view, setView] = useState<'table' | 'charts' | 'performance'>('table');
  const [sortField, setSortField] = useState("volume-high-to-low");
  const [selectedAreas, setSelectedAreas] = useState<string[]>(areaData.map(area => area.id));
  const [showFilters, setShowFilters] = useState(false);

  const toggleAreaSelection = (areaId: string) => {
    if (selectedAreas.includes(areaId)) {
      if (selectedAreas.length > 1) { // Prevent deselecting all areas
        setSelectedAreas(selectedAreas.filter(id => id !== areaId));
      }
    } else {
      setSelectedAreas([...selectedAreas, areaId]);
    }
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

  const filteredAreaData = sortedAreaData.filter(area => selectedAreas.includes(area.id));

  return (
    <div className="space-y-6">
      <div className="bg-slate-900 text-white p-4 rounded-lg">
        <h2 className="text-lg font-semibold mb-1">Dubai Area Analysis</h2>
        <p className="text-sm text-slate-300">Comprehensive metrics for Dubai's main residential and commercial areas</p>
      </div>

      <div className="flex flex-col sm:flex-row justify-between gap-4">
        <ViewSelector view={view} setView={setView} />
        <SortSelector sortField={sortField} setSortField={setSortField} />
      </div>

      {view === 'table' && <TableView areaData={filteredAreaData} />}

      {view === 'charts' && (
        <ChartsView 
          pricePerSqftData={pricePerSqftData}
          volumeData={volumeData}
          areaData={areaData}
          selectedAreas={selectedAreas}
          toggleAreaSelection={toggleAreaSelection}
          showFilters={showFilters}
          setShowFilters={setShowFilters}
        />
      )}

      {view === 'performance' && <PerformanceView areaData={sortedAreaData} />}
    </div>
  );
};

export default AreaAnalysis;

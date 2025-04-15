
import { Card, CardContent } from "@/components/ui/card";
import { AreaItemType } from "./areaData";
import { getPercentageClass } from "./utils";

interface PerformanceViewProps {
  areaData: AreaItemType[];
}

const PerformanceView = ({ areaData }: PerformanceViewProps) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {areaData.map((area) => (
        <Card key={area.id} className="bg-slate-900 text-white border-slate-700">
          <CardContent className="p-4">
            <h3 className="font-semibold text-sm mb-2">{area.name}</h3>
            <div className="grid grid-cols-2 gap-x-4 gap-y-1 text-xs">
              <div className="text-slate-300">Total Value (2024)</div>
              <div className="text-right">{area.totalValue}</div>
              
              <div className="text-slate-300">Total Volume (2024)</div>
              <div className="text-right">{area.totalVolume}</div>
              
              <div className="text-slate-300">Median Price (2024)</div>
              <div className="text-right">{area.medianPrice}</div>
              
              <div className="text-slate-300">Median Price/sqm (2024)</div>
              <div className="text-right">{area.medianPricePerSqm}</div>
              
              <div className="text-slate-300">Value YoY</div>
              <div className={`text-right ${getPercentageClass(area.valueYoY)}`}>
                {area.valueYoY}
              </div>
              
              <div className="text-slate-300">Volume YoY</div>
              <div className={`text-right ${getPercentageClass(area.volumeYoY)}`}>
                {area.volumeYoY}
              </div>

              <div className="text-slate-300">Existing Units</div>
              <div className="text-right">{area.existingUnits}</div>
              
              <div className="text-slate-300">Upcoming Units</div>
              <div className="text-right">{area.upcomingUnits}</div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default PerformanceView;

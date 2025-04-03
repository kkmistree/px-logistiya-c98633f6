
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { AreaItemType } from "./areaData";

interface AreaFiltersProps {
  areaData: AreaItemType[];
  selectedAreas: string[];
  toggleAreaSelection: (areaId: string) => void;
}

const AreaFilters = ({ areaData, selectedAreas, toggleAreaSelection }: AreaFiltersProps) => {
  return (
    <Card className="p-4">
      <CardContent className="p-0">
        <h3 className="text-lg font-semibold mb-3">Filter Areas for Charts</h3>
        <div className="flex flex-wrap gap-2">
          {areaData.map(area => (
            <Badge 
              key={area.id} 
              variant={selectedAreas.includes(area.id) ? "area" : "outline"}
              className="px-3 py-1 cursor-pointer text-sm"
              onClick={() => toggleAreaSelection(area.id)}
            >
              {area.name.split(' ')[0]}
            </Badge>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default AreaFilters;

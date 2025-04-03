
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { AreaData } from "./areaData";

interface LocationSelectorsProps {
  areaData: AreaData[];
  location1: string;
  setLocation1: (value: string) => void;
  location2: string;
  setLocation2: (value: string) => void;
}

const LocationSelectors = ({
  areaData,
  location1,
  setLocation1,
  location2,
  setLocation2
}: LocationSelectorsProps) => {
  return (
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
  );
};

export default LocationSelectors;

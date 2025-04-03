
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

interface AreaFiltersProps {
  propertyType: string;
  setPropertyType: (value: string) => void;
  status: string;
  setStatus: (value: string) => void;
  year: string;
  setYear: (value: string) => void;
  bedroom: string;
  setBedroom: (value: string) => void;
}

const AreaFilters = ({
  propertyType,
  setPropertyType,
  status,
  setStatus,
  year,
  setYear,
  bedroom,
  setBedroom
}: AreaFiltersProps) => {
  return (
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
  );
};

export default AreaFilters;

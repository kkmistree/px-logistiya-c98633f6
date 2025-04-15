
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

interface FilterSectionProps {
  propertyType: string;
  status: string;
  area: string;
  year: string;
  size: string;
  setPropertyType: (value: string) => void;
  setStatus: (value: string) => void;
  setArea: (value: string) => void;
  setYear: (value: string) => void;
  setSize: (value: string) => void;
}

const FilterSection = ({
  propertyType,
  status,
  area,
  year,
  size,
  setPropertyType,
  setStatus,
  setArea,
  setYear,
  setSize,
}: FilterSectionProps) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-3">
      <div>
        <Select value={propertyType} onValueChange={setPropertyType}>
          <SelectTrigger>
            <SelectValue placeholder="Property Type" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Types</SelectItem>
            <SelectItem value="warehouse">Warehouse</SelectItem>
            <SelectItem value="factory">Factory</SelectItem>
            <SelectItem value="logistics">Logistics</SelectItem>
            <SelectItem value="land">Land</SelectItem>
            <SelectItem value="office">Industrial Office</SelectItem>
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
            <SelectItem value="available">Available</SelectItem>
            <SelectItem value="under-development">Under-Development</SelectItem>
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
            <SelectItem value="riyadh">Riyadh Industrial City</SelectItem>
            <SelectItem value="jeddah">Jeddah Industrial City</SelectItem>
            <SelectItem value="dammam">Dammam Industrial City</SelectItem>
            <SelectItem value="jubail">Jubail Industrial City</SelectItem>
            <SelectItem value="kaec">KAEC Industrial Valley</SelectItem>
            <SelectItem value="sudair">Sudair City</SelectItem>
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
        <Select value={size} onValueChange={setSize}>
          <SelectTrigger>
            <SelectValue placeholder="Area Size" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All sizes</SelectItem>
            <SelectItem value="small">Small (&lt; 5,000 sqm)</SelectItem>
            <SelectItem value="medium">Medium (5,000-10,000 sqm)</SelectItem>
            <SelectItem value="large">Large (&gt; 10,000 sqm)</SelectItem>
          </SelectContent>
        </Select>
      </div>
      
      <div>
        <Select value={propertyType} onValueChange={setPropertyType}>
          <SelectTrigger>
            <SelectValue placeholder="Property metrics" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">Property metrics</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </div>
  );
};

export default FilterSection;

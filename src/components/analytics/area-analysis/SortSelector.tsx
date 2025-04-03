
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

interface SortSelectorProps {
  sortField: string;
  setSortField: (value: string) => void;
}

const SortSelector = ({ sortField, setSortField }: SortSelectorProps) => {
  return (
    <Select value={sortField} onValueChange={setSortField}>
      <SelectTrigger className="w-[220px]">
        <SelectValue placeholder="Sort by" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="volume-high-to-low">Volume (High to Low)</SelectItem>
        <SelectItem value="volume-low-to-high">Volume (Low to High)</SelectItem>
        <SelectItem value="value-high-to-low">Value (High to Low)</SelectItem>
        <SelectItem value="value-low-to-high">Value (Low to High)</SelectItem>
        <SelectItem value="price-high-to-low">Price (High to Low)</SelectItem>
        <SelectItem value="price-low-to-high">Price (Low to High)</SelectItem>
      </SelectContent>
    </Select>
  );
};

export default SortSelector;

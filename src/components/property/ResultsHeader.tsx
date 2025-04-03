
import { Property } from "@/types/property";
import { formatCurrency } from "@/utils/format";
import { useCurrency } from "@/contexts/CurrencyContext";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface ResultsHeaderProps {
  properties: Property[];
  sortOption: string;
  onSortChange: (value: string) => void;
}

const ResultsHeader = ({ properties, sortOption, onSortChange }: ResultsHeaderProps) => {
  const { currency } = useCurrency();
  
  // Calculate average price
  const avgPrice = properties.length > 0
    ? properties.reduce((sum, property) => sum + property.price, 0) / properties.length
    : 0;
  
  // Calculate average ROI
  const propertiesWithRoi = properties.filter(p => typeof p.roi === 'number');
  const avgRoi = propertiesWithRoi.length > 0
    ? propertiesWithRoi.reduce((sum, property) => sum + (property.roi || 0), 0) / propertiesWithRoi.length
    : 0;
  
  return (
    <div className="flex justify-between items-center text-sm">
      <div className="text-slate-600">
        Showing <span className="font-semibold text-estate-primary">{properties.length}</span> properties
        {properties.length > 0 && (
          <>
            <span className="mx-1">|</span>
            Avg Price: <span className="font-semibold">{formatCurrency(avgPrice, currency.code)}</span>
            {avgRoi > 0 && (
              <>
                <span className="mx-1">|</span>
                Avg Yield: <span className="font-semibold text-estate-success">{avgRoi.toFixed(1)}%</span>
              </>
            )}
          </>
        )}
      </div>
      
      <div className="flex items-center gap-2">
        <span className="text-slate-600">Sort by:</span>
        <Select value={sortOption} onValueChange={onSortChange}>
          <SelectTrigger className="w-[160px] h-8 text-sm">
            <SelectValue placeholder="Sort by" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="match">Highest Match</SelectItem>
            <SelectItem value="price-low">Lowest Price</SelectItem>
            <SelectItem value="price-high">Highest Price</SelectItem>
            <SelectItem value="roi">Highest ROI</SelectItem>
            <SelectItem value="newest">Newest</SelectItem>
            <SelectItem value="handover">Handover Date</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </div>
  );
};

export default ResultsHeader;

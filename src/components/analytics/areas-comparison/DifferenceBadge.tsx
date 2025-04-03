
import { Badge } from "@/components/ui/badge";
import { calculateRelativeDifference, isLocation1Higher } from "./compareUtils";
import { AreaData } from "./areaData";

interface DifferenceBadgeProps {
  location1Data?: AreaData;
  location2Data?: AreaData;
  type: 'volume' | 'value' | 'price-sqft' | 'price';
  dataKey: keyof AreaData;
}

const DifferenceBadge = ({ 
  location1Data, 
  location2Data, 
  type, 
  dataKey 
}: DifferenceBadgeProps) => {
  if (!location1Data || !location2Data) return null;
  
  const value1 = location1Data[dataKey];
  const value2 = location2Data[dataKey];
  
  const isHigher = isLocation1Higher(value1, value2, type);
  const difference = calculateRelativeDifference(value1, value2, type);

  return (
    <div className="flex justify-end mb-[-20px] mr-6 z-10 relative">
      <Badge className={`px-3 py-1 ${
        isHigher ? 'bg-green-500' : 'bg-red-500'} text-white`}
      >
        {difference}%
      </Badge>
    </div>
  );
};

export default DifferenceBadge;

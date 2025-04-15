
import { MapPin } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface CategoryItem {
  label: string;
  location: string;
  count: number;
}

interface PropertyCategoryCardProps {
  title: string;
  description: string;
  items: CategoryItem[];
  onItemClick: (location: string) => void;
}

const PropertyCategoryCard = ({ title, description, items, onItemClick }: PropertyCategoryCardProps) => {
  return (
    <Card>
      <CardHeader className="pb-2">
        <CardTitle className="text-lg font-semibold">{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-2 gap-2">
          {items.map((item) => (
            <Button 
              key={item.label} 
              variant="outline" 
              size="sm" 
              className="justify-start hover:bg-slate-100"
              onClick={() => onItemClick(item.location)}
            >
              <MapPin size={14} className="mr-2 text-slate-500" />
              <div className="flex flex-col items-start text-left">
                <span className="text-sm">{item.label}</span>
                <span className="text-xs text-slate-500">{item.count} properties</span>
              </div>
            </Button>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default PropertyCategoryCard;

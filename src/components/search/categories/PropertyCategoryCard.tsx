
import { MapPin, Building2 } from "lucide-react";
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
    <Card className="border-slate-200 overflow-hidden">
      <CardHeader className="pb-3 bg-slate-50 border-b border-slate-100">
        <CardTitle className="text-lg font-semibold flex items-center">
          <Building2 size={18} className="mr-2 text-estate-primary" />
          {title}
        </CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent className="p-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {items.map((item) => (
            <Button 
              key={item.label} 
              variant="outline" 
              size="sm" 
              className="justify-start h-auto py-3 hover:bg-slate-50 hover:border-slate-300 transition-colors"
              onClick={() => onItemClick(item.location)}
            >
              <div className="flex items-start">
                <MapPin size={16} className="mr-2 mt-0.5 text-estate-primary/70 flex-shrink-0" />
                <div className="flex flex-col items-start text-left">
                  <span className="text-sm font-medium">{item.label}</span>
                  <div className="flex items-center mt-1">
                    <span className="text-xs bg-slate-100 text-slate-700 px-2 py-0.5 rounded-full">
                      {item.count} listings
                    </span>
                  </div>
                </div>
              </div>
            </Button>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default PropertyCategoryCard;

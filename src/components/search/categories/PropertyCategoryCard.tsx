
import { MapPin, Building2, Info } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

interface CategoryItem {
  label: string;
  location: string;
  count: number;
  description?: string;
}

interface PropertyCategoryCardProps {
  title: string;
  description: string;
  items: CategoryItem[];
  onItemClick: (location: string) => void;
}

const PropertyCategoryCard = ({ title, description, items, onItemClick }: PropertyCategoryCardProps) => {
  return (
    <Card className="border-slate-200 overflow-hidden shadow-sm hover:shadow-md transition-all duration-300">
      <CardHeader className="pb-3 bg-slate-50 border-b border-slate-100">
        <div className="flex justify-between items-start">
          <CardTitle className="text-lg font-semibold flex items-center">
            <Building2 size={18} className="mr-2 text-estate-primary" />
            {title}
          </CardTitle>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant="ghost" size="icon" className="h-6 w-6">
                  <Info size={14} className="text-slate-400" />
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p className="max-w-xs text-xs">{description}</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
        <CardDescription className="text-xs mt-1">{description}</CardDescription>
      </CardHeader>
      <CardContent className="p-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {items.map((item) => (
            <TooltipProvider key={item.label}>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="justify-start h-auto py-3 hover:bg-slate-50 hover:border-slate-300 transition-colors group"
                    onClick={() => onItemClick(item.location)}
                  >
                    <div className="flex items-start">
                      <MapPin size={16} className="mr-2 mt-0.5 text-estate-primary/70 flex-shrink-0 group-hover:text-estate-primary transition-colors" />
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
                </TooltipTrigger>
                <TooltipContent side="right" className="max-w-xs">
                  {item.description ? (
                    <p className="text-xs">{item.description}</p>
                  ) : (
                    <p className="text-xs">Browse {item.count} properties in {item.label}</p>
                  )}
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default PropertyCategoryCard;


import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search, Filter, BookmarkPlus, Lightbulb } from "lucide-react";
import { toast } from "sonner";
import { useIsMobile } from "@/hooks/use-mobile";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

interface PropertySearchBarProps {
  onSearch: (query: string) => void;
  onSaveSearch: () => void;
  savedSearch: boolean;
}

const PropertySearchBar = ({ onSearch, onSaveSearch, savedSearch }: PropertySearchBarProps) => {
  const [searchQuery, setSearchQuery] = useState("");
  const isMobile = useIsMobile();

  const handleSearch = () => {
    if (!searchQuery.trim()) {
      toast("Please enter a search query");
      return;
    }
    onSearch(searchQuery);
  };

  return (
    <div className="flex flex-col w-full max-w-full gap-3 bg-white p-4 rounded-lg border border-slate-200 shadow-sm">
      <div className="relative flex-1">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400" size={18} />
        <Input 
          type="search" 
          placeholder={isMobile ? "Enter search criteria..." : "Try 'Warehouse in Riyadh Industrial City with loading docks'"}
          className="pl-10 w-full"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>
      <div className="flex flex-wrap gap-2 justify-between items-center">
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button className="bg-estate-primary hover:bg-estate-primary/90 text-white" onClick={handleSearch}>
                <Lightbulb size={16} className="mr-2" />
                Smart Search
              </Button>
            </TooltipTrigger>
            <TooltipContent>
              <p className="text-xs max-w-xs">Our AI-powered search analyzes your query and finds the most relevant properties</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
        <div className="flex gap-2">
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button 
                  variant="outline" 
                  onClick={onSaveSearch} 
                  className={savedSearch ? "bg-estate-secondary text-white" : ""}
                  size={isMobile ? "sm" : "default"}
                >
                  <BookmarkPlus size={isMobile ? 14 : 16} className={isMobile ? "" : "mr-2"} />
                  {savedSearch ? (isMobile ? "Saved" : "Saved ✓") : (isMobile ? "Save" : "Save Search")}
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p className="text-xs">Save this search to receive notifications when new matching properties are listed</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant="outline" size={isMobile ? "sm" : "default"}>
                  <Filter size={isMobile ? 14 : 16} className={isMobile ? "" : "mr-2"} />
                  {!isMobile && "Advanced Filters"}
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p className="text-xs">Apply detailed filters to refine your search results</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
      </div>
    </div>
  );
};

export default PropertySearchBar;

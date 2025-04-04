
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search, Filter, BookmarkPlus } from "lucide-react";
import { toast } from "sonner";
import { useIsMobile } from "@/hooks/use-mobile";

interface PropertySearchBarProps {
  onSearch: (query: string) => void;
  onSaveSearch: () => void;
  savedSearch: boolean;
}

const PropertySearchBar = ({ onSearch, onSaveSearch, savedSearch }: PropertySearchBarProps) => {
  const [searchQuery, setSearchQuery] = useState("");
  const isMobile = useIsMobile();

  const handleSearch = () => {
    onSearch(searchQuery);
  };

  return (
    <div className="flex flex-col w-full max-w-full gap-2 mb-4">
      <div className="relative flex-1">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400" size={18} />
        <Input 
          type="search" 
          placeholder={isMobile ? "Enter search criteria..." : "Try 'Two bedroom in Dubai Marina under 2M with sea view'"}
          className="pl-10 w-full"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>
      <div className="flex flex-wrap gap-2 justify-between items-center">
        <Button className="bg-estate-primary hover:bg-estate-primary/90 text-white" onClick={handleSearch}>
          Smart Search
        </Button>
        <div className="flex gap-2">
          <Button 
            variant="outline" 
            onClick={onSaveSearch} 
            className={savedSearch ? "bg-estate-secondary text-white" : ""}
            size={isMobile ? "sm" : "default"}
          >
            {savedSearch ? (isMobile ? "Saved" : "Saved ✓") : (isMobile ? "Save" : "Save Search")}
          </Button>
          <Button variant="outline" size={isMobile ? "sm" : "default"}>
            <Filter size={isMobile ? 14 : 16} className={isMobile ? "" : "mr-1"} />
            {!isMobile && "10 Filters"}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default PropertySearchBar;

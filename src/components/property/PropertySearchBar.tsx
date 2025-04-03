
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search, Filter, BookmarkPlus } from "lucide-react";
import { toast } from "sonner";

interface PropertySearchBarProps {
  onSearch: (query: string) => void;
  onSaveSearch: () => void;
  savedSearch: boolean;
}

const PropertySearchBar = ({ onSearch, onSaveSearch, savedSearch }: PropertySearchBarProps) => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = () => {
    onSearch(searchQuery);
  };

  return (
    <div className="flex flex-col w-full max-w-full gap-2 mb-4">
      <div className="relative flex-1">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400" size={18} />
        <Input 
          type="search" 
          placeholder="Try 'Two bedroom in Dubai Marina under 2M with sea view'" 
          className="pl-10 w-full"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>
      <div className="flex justify-between items-center">
        <div className="flex gap-2">
          <Button className="bg-estate-primary hover:bg-estate-primary/90 text-white" onClick={handleSearch}>
            Smart Search
          </Button>
          <Button 
            variant="outline" 
            onClick={onSaveSearch} 
            className={savedSearch ? "bg-estate-secondary text-white" : ""}
          >
            {savedSearch ? "Saved ✓" : "Save Search"}
          </Button>
          <Button variant="outline">
            <Filter size={16} className="mr-1" />
            10 Filters
          </Button>
        </div>
      </div>
    </div>
  );
};

export default PropertySearchBar;

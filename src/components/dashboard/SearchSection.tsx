
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import PropertyCard from "@/components/property/PropertyCard";
import { getProperties } from "@/data/mocks/properties";
import { PropertyFilter } from "@/types/property";
import { useToast } from "@/hooks/use-toast";
import { useIsMobile } from "@/hooks/use-mobile";

const SearchSection = () => {
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [filters] = useState<PropertyFilter>({});
  const navigate = useNavigate();
  const { toast } = useToast();
  const isMobile = useIsMobile();
  
  const properties = getProperties(filters);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      toast({
        title: "Search initiated",
        description: `Searching for: ${searchQuery}`,
      });
      navigate(`/search?q=${encodeURIComponent(searchQuery)}`);
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-sm p-3 sm:p-4 border border-slate-200">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 sm:gap-4 mb-3 sm:mb-4">
        <h2 className="text-base sm:text-lg font-semibold text-estate-primary">Smart Asset Search</h2>
        <Button 
          variant="ghost" 
          size="sm" 
          className="text-estate-secondary text-xs sm:text-sm whitespace-nowrap"
          onClick={() => navigate("/mls")}
        >
          {isMobile ? "Advanced" : "Advanced Search"} <Search size={isMobile ? 14 : 16} className="ml-1" />
        </Button>
      </div>
      
      <form onSubmit={handleSearch} className="flex w-full max-w-full gap-2 mb-3 sm:mb-4">
        <div className="relative flex-1">
          <Search className="absolute left-2.5 top-1/2 transform -translate-y-1/2 text-slate-400" size={isMobile ? 16 : 18} />
          <Input 
            type="search" 
            placeholder={isMobile ? "Search industrial assets..." : "Search by location, developer, zoning, features..."}
            className="pl-9 w-full bg-slate-50 h-9 sm:h-10 text-sm"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        <Button 
          type="submit" 
          className="bg-estate-primary hover:bg-estate-primary/90 text-white whitespace-nowrap text-xs sm:text-sm h-9 sm:h-10 px-3 sm:px-4"
        >
          {isMobile ? "Search" : "Search Assets"}
        </Button>
      </form>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
        {properties.slice(0, isMobile ? 1 : 3).map((property) => (
          <PropertyCard key={property.id} property={property} />
        ))}
      </div>
    </div>
  );
};

export default SearchSection;

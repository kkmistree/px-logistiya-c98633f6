
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import PropertyCard from "@/components/property/PropertyCard";
import { getProperties } from "@/data/mockData";
import { PropertyFilter } from "@/types/property";
import { useToast } from "@/hooks/use-toast";

const SearchSection = () => {
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [filters] = useState<PropertyFilter>({});
  const navigate = useNavigate();
  const { toast } = useToast();
  
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
    <div className="bg-white rounded-lg shadow-sm p-4 border border-slate-200">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold text-estate-primary">Smart MLS Search</h2>
        <Button 
          variant="ghost" 
          size="sm" 
          className="text-estate-secondary"
          onClick={() => navigate("/mls")}
        >
          Advanced Search <Search size={16} className="ml-1" />
        </Button>
      </div>
      
      <form onSubmit={handleSearch} className="flex w-full max-w-full gap-2 mb-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400" size={18} />
          <Input 
            type="search" 
            placeholder="Search properties by location, developer, features..." 
            className="pl-10 w-full bg-slate-50"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        <Button 
          type="submit" 
          className="bg-estate-primary hover:bg-estate-primary/90 text-white whitespace-nowrap"
        >
          Search Properties
        </Button>
      </form>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {properties.slice(0, 3).map((property) => (
          <PropertyCard key={property.id} property={property} />
        ))}
      </div>
    </div>
  );
};

export default SearchSection;

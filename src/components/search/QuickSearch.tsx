
import { useState } from "react";
import { Search, Loader2 } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

interface QuickSearchProps {
  onSearch?: (query: string) => void;
}

const QuickSearch = ({ onSearch }: QuickSearchProps) => {
  const [query, setQuery] = useState("");
  const [isSearching, setIsSearching] = useState(false);
  const [placeholder, setPlaceholder] = useState("Search properties, deals, clients...");

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (!query.trim()) return;
    
    setIsSearching(true);
    
    // Simulate AI processing
    setTimeout(() => {
      if (onSearch) {
        onSearch(query);
      }
      console.log("Searching for:", query);
      setIsSearching(false);
      setQuery("");
      // Rotate through different placeholders to showcase AI capabilities
      const placeholders = [
        "Find 2BR in Downtown with 7% ROI",
        "Show off-plan launches in Dubai Marina",
        "Search for clients looking for Palm Jumeirah",
        "Find properties with payment plans under 3 years",
        "Search properties, deals, clients..."
      ];
      const randomPlaceholder = placeholders[Math.floor(Math.random() * placeholders.length)];
      setPlaceholder(randomPlaceholder);
    }, 1000);
  };

  return (
    <div className="px-2 py-3">
      <form onSubmit={handleSearch} className="flex items-center space-x-1">
        <div className="relative flex-1">
          <Input
            type="text"
            placeholder={placeholder}
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="pl-9 pr-4 py-2 bg-sidebar-accent text-sidebar-accent-foreground placeholder:text-sidebar-accent-foreground/50 border-none focus-visible:ring-1 focus-visible:ring-sidebar-ring"
          />
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-sidebar-accent-foreground/70" />
        </div>
        <Button 
          type="submit" 
          size="icon"
          variant="ghost" 
          className="h-8 w-8 bg-sidebar-accent hover:bg-white/20 text-sidebar-accent-foreground"
          disabled={isSearching}
        >
          {isSearching ? <Loader2 className="h-4 w-4 animate-spin" /> : <Search className="h-4 w-4" />}
        </Button>
      </form>
    </div>
  );
};

export default QuickSearch;

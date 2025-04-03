
import { useState, useEffect } from "react";
import { Search as SearchIcon, Loader2 } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

interface QuickSearchProps {
  onSearch?: (query: string) => void;
  fullScreen?: boolean;
  onClose?: () => void;
}

const QuickSearch = ({ onSearch, fullScreen = false, onClose }: QuickSearchProps) => {
  const [query, setQuery] = useState("");
  const [isSearching, setIsSearching] = useState(false);

  // Auto-focus the input field when in full-screen mode
  useEffect(() => {
    if (fullScreen) {
      const timer = setTimeout(() => {
        const inputElement = document.getElementById("quick-search-input");
        if (inputElement) {
          inputElement.focus();
        }
      }, 100);
      return () => clearTimeout(timer);
    }
  }, [fullScreen]);

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
      
      if (!fullScreen) {
        setQuery("");
      }
    }, 1000);
  };

  const searchSuggestions = [
    "Undervalued properties in Dubai Marina",
    "High yield studios",
    "Apartments with a maximum price of $250,000",
    "2 bedroom apartment with high ROI",
    "1 bed, high ROI and high yield"
  ];

  if (fullScreen) {
    return (
      <div className="fixed inset-0 bg-black text-white z-50 flex flex-col">
        <div className="container mx-auto px-4 pt-20 max-w-4xl flex flex-col items-center">
          <div className="mb-2">
            <span className="bg-purple-700/60 text-white text-sm py-1 px-4 rounded-full">
              Find your ideal investment property
            </span>
          </div>
          
          <h1 className="text-4xl font-semibold text-white text-center mb-4">Intuitive Property Search</h1>
          
          <p className="text-white/80 text-center mb-8">
            Simply describe your ideal property, and let us find the perfect match for you!
          </p>
          
          <form onSubmit={handleSearch} className="w-full max-w-2xl mb-8">
            <div className="relative flex">
              <div className="relative flex-grow">
                <Input
                  id="quick-search-input"
                  type="text"
                  placeholder="Search"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  className="pl-10 pr-4 py-6 bg-white text-black placeholder:text-gray-500 border-none text-lg rounded-l-lg h-12"
                />
                <SearchIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-500" />
              </div>
              
              <Button 
                type="submit" 
                className="h-12 px-6 rounded-r-lg bg-purple-600 hover:bg-purple-700"
                disabled={isSearching}
              >
                {isSearching ? <Loader2 className="h-5 w-5 animate-spin" /> : "Search"}
              </Button>
            </div>
          </form>
          
          <div className="flex flex-wrap gap-2 justify-center mb-12">
            {searchSuggestions.map((suggestion, index) => (
              <span 
                key={index} 
                onClick={() => setQuery(suggestion)}
                className="px-4 py-2 bg-white/10 rounded-full text-sm hover:bg-white/20 cursor-pointer transition-colors"
              >
                {suggestion}
              </span>
            ))}
          </div>

          {/* Search results would go here */}
          <div className="text-white text-center mt-8">
            {isSearching ? (
              <div className="flex flex-col items-center">
                <Loader2 className="w-8 h-8 animate-spin mb-4" />
                <p>Searching for properties, deals, and clients...</p>
              </div>
            ) : (
              query.length === 0 && (
                <p className="text-white/50">Enter your query to search</p>
              )
            )}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="px-2 py-3">
      <form onSubmit={handleSearch} className="flex items-center space-x-1">
        <div className="relative flex-1">
          <Input
            type="text"
            placeholder="Quick Search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="pl-9 pr-4 py-2 bg-sidebar-accent text-sidebar-accent-foreground placeholder:text-sidebar-accent-foreground/50 border-none focus-visible:ring-1 focus-visible:ring-sidebar-ring"
          />
          <SearchIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-sidebar-accent-foreground/70" />
        </div>
        <Button 
          type="submit" 
          size="icon"
          variant="ghost" 
          className="h-8 w-8 bg-sidebar-accent hover:bg-white/20 text-sidebar-accent-foreground"
          disabled={isSearching}
        >
          {isSearching ? <Loader2 className="h-4 w-4 animate-spin" /> : <SearchIcon className="h-4 w-4" />}
        </Button>
      </form>
    </div>
  );
};

export default QuickSearch;

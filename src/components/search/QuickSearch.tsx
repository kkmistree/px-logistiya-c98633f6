
import { useState, useEffect } from "react";
import { Search, Loader2, X } from "lucide-react";
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
  const [placeholder, setPlaceholder] = useState("Search properties, deals, clients...");

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
      }
    }, 1000);
  };

  if (fullScreen) {
    return (
      <div className="fixed inset-0 bg-black/95 backdrop-blur-sm z-50 flex flex-col">
        <div className="container mx-auto px-4 pt-20 max-w-4xl">
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-white rounded-md flex items-center justify-center">
                <span className="font-bold text-black text-xl">pX</span>
              </div>
              <h1 className="text-2xl font-semibold text-white">AI-Powered Search</h1>
            </div>
            {onClose && (
              <Button 
                variant="ghost" 
                size="icon" 
                onClick={onClose}
                className="text-white hover:bg-white/10"
              >
                <X className="w-6 h-6" />
              </Button>
            )}
          </div>
          
          <form onSubmit={handleSearch} className="mb-8">
            <div className="relative">
              <Input
                id="quick-search-input"
                type="text"
                placeholder={placeholder}
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="pl-12 pr-4 py-6 bg-white/10 text-white placeholder:text-white/50 border-none ring-1 ring-white/20 focus-visible:ring-white/40 text-lg rounded-xl"
              />
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-6 h-6 text-white/70" />
              
              {query.length > 0 && (
                <Button 
                  type="submit" 
                  variant="ghost" 
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 p-2 h-auto bg-white/10 hover:bg-white/20 text-white rounded-lg"
                  disabled={isSearching}
                >
                  {isSearching ? <Loader2 className="h-5 w-5 animate-spin" /> : <Search className="h-5 w-5" />}
                </Button>
              )}
            </div>
          </form>
          
          <div className="text-white/70 mb-6">
            <p className="text-sm mb-3">Try searching for:</p>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-white/10 rounded-full text-sm hover:bg-white/20 cursor-pointer transition-colors">
                2BR apartments in Downtown
              </span>
              <span className="px-3 py-1 bg-white/10 rounded-full text-sm hover:bg-white/20 cursor-pointer transition-colors">
                Properties with 7%+ ROI
              </span>
              <span className="px-3 py-1 bg-white/10 rounded-full text-sm hover:bg-white/20 cursor-pointer transition-colors">
                Off-plan in Dubai Marina
              </span>
              <span className="px-3 py-1 bg-white/10 rounded-full text-sm hover:bg-white/20 cursor-pointer transition-colors">
                Clients looking for Palm Jumeirah
              </span>
            </div>
          </div>

          {/* Search results would go here */}
          <div className="text-white text-center mt-20">
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


import { useState } from "react";
import QuickSearch from "@/components/search/QuickSearch";
import SearchResults from "@/components/search/SearchResults";
import AppShell from "@/components/layout/AppShell";
import { Property } from "@/types/property";
import { searchProperties } from "@/services/propertyService";

const SearchPage = () => {
  const [searchResults, setSearchResults] = useState<Property[]>([]);
  const [isSearching, setIsSearching] = useState(false);
  
  const handleSearch = (query: string) => {
    console.log("Search query from page:", query);
    setIsSearching(true);
    
    // Process the query to filter properties
    const results = searchProperties(query);
    
    // Simulate API call delay
    setTimeout(() => {
      setSearchResults(results);
      setIsSearching(false);
    }, 1000);
  };

  const handleNewSearch = () => {
    setSearchResults([]);
  };

  return (
    <AppShell>
      <div className="h-full flex flex-col">
        <QuickSearch fullScreen onSearch={handleSearch} />
        
        {/* Search Results Section */}
        {searchResults.length > 0 && !isSearching && (
          <SearchResults 
            searchResults={searchResults}
            onNewSearch={handleNewSearch}
          />
        )}
      </div>
    </AppShell>
  );
};

export default SearchPage;

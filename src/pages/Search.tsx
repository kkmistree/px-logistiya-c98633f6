
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import QuickSearch from "@/components/search/QuickSearch";
import SearchResults from "@/components/search/SearchResults";
import AppShell from "@/components/layout/AppShell";
import { Property } from "@/types/property";
import { searchProperties } from "@/services/propertyService";

const SearchPage = () => {
  const navigate = useNavigate();
  const [searchResults, setSearchResults] = useState<Property[]>([]);
  const [isSearching, setIsSearching] = useState(false);
  
  const handleSearch = (query: string) => {
    console.log("Search query from page:", query);
    setIsSearching(true);
    
    // Simulate API call to search properties
    setTimeout(() => {
      // Process the query to filter properties
      const results = searchProperties(query);
      setSearchResults(results);
      setIsSearching(false);
    }, 1500);
  };
  
  const handleClose = () => {
    navigate(-1);
  };

  const handleNewSearch = () => {
    setSearchResults([]);
  };

  return (
    <AppShell>
      <div className="h-full flex flex-col">
        <QuickSearch fullScreen onSearch={handleSearch} onClose={handleClose} />
        
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

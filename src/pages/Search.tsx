
import { useState } from "react";
import QuickSearch from "@/components/search/QuickSearch";
import SearchResults from "@/components/search/SearchResults";
import AppShell from "@/components/layout/AppShell";
import { Property } from "@/types/property";
import { searchProperties } from "@/services/propertyService";
import { useNavigate } from "react-router-dom";
import { useCurrency } from "@/contexts/CurrencyContext";

const SearchContent = () => {
  const [searchResults, setSearchResults] = useState<Property[]>([]);
  const [isSearching, setIsSearching] = useState(false);
  const navigate = useNavigate();
  const { currency } = useCurrency(); // Get the current platform currency
  
  const handleSearch = (query: string) => {
    console.log("Search query from page:", query);
    setIsSearching(true);
    
    // Process the query to filter properties with the current platform currency
    const results = searchProperties(query, currency.code);
    
    // Simulate API call delay
    setTimeout(() => {
      setSearchResults(results);
      setIsSearching(false);
    }, 1000);
  };

  const handleNewSearch = () => {
    setSearchResults([]);
  };

  const handlePropertyClick = (propertyId: string) => {
    // For now we'll just log it, but in a real app we would navigate to a property details page
    console.log(`Navigating to property: ${propertyId}`);
    // Example of how navigation would work when you have a property page:
    // navigate(`/property/${propertyId}`);
  };

  return (
    <div className="h-full flex flex-col">
      <QuickSearch fullScreen onSearch={handleSearch} />
      
      {/* Search Results Section */}
      {!isSearching && searchResults.length > 0 && (
        <SearchResults 
          searchResults={searchResults}
          onNewSearch={handleNewSearch}
          onPropertyClick={handlePropertyClick}
        />
      )}
      
      {isSearching && (
        <div className="flex justify-center mt-8">
          <div className="flex flex-col items-center">
            <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-[#1A1F2C]"></div>
            <p className="mt-4 text-gray-500">Searching for properties...</p>
          </div>
        </div>
      )}
    </div>
  );
};

// Separate the page component that uses AppShell from the content that uses the currency context
const SearchPage = () => {
  return (
    <AppShell>
      <SearchContent />
    </AppShell>
  );
};

export default SearchPage;

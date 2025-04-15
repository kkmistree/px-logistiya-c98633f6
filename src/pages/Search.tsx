
import { useState } from 'react';
import AppShell from "@/components/layout/AppShell";
import PropertySearchBar from "@/components/property/PropertySearchBar";
import { useSearchParams } from 'react-router-dom';
import { toast } from 'sonner';
import { searchProperties } from '@/services/propertyService';
import SearchResults from '@/components/search/SearchResults';
import QuickSearch from '@/components/search/QuickSearch';
import { Property } from '@/types/property';
import SearchDashboard from '@/components/search/SearchDashboard';

const Search = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('q') || '';
  const [searchResults, setSearchResults] = useState<Property[]>([]);
  const [searching, setSearching] = useState(false);
  const [hasSearched, setHasSearched] = useState(false);
  const [savedSearch, setSavedSearch] = useState(false);

  // Perform search when the page loads with a query parameter
  useState(() => {
    if (query) {
      performSearch(query);
    }
  });

  const performSearch = (searchQuery: string) => {
    if (!searchQuery.trim()) return;
    
    setSearching(true);
    
    try {
      // Use the property service to search for properties
      const results = searchProperties(searchQuery);
      
      // Update search results after a brief delay to simulate processing
      setTimeout(() => {
        setSearchResults(results);
        setSearching(false);
        setHasSearched(true);
        
        toast({
          title: `Found ${results.length} matching properties`,
          description: `Search results for: ${searchQuery}`,
        });
      }, 1000);
    } catch (error) {
      console.error("Search error:", error);
      setSearching(false);
      toast({
        title: "Search error",
        description: "An error occurred while searching. Please try again.",
        variant: "destructive",
      });
    }
  };

  const handleSearch = (searchQuery: string) => {
    // Update URL with search query
    setSearchParams({ q: searchQuery });
    performSearch(searchQuery);
  };

  const handleSaveSearch = () => {
    setSavedSearch(!savedSearch);
    toast({
      title: savedSearch ? "Search removed" : "Search saved",
      description: savedSearch 
        ? "This search has been removed from your saved searches" 
        : "This search has been added to your saved searches"
    });
  };

  const handleNewSearch = () => {
    setSearchResults([]);
    setHasSearched(false);
    setSearchParams({});
  };

  const handlePropertyClick = (propertyId: string) => {
    toast({
      title: "Property selected",
      description: `Viewing details for property ID: ${propertyId}`,
    });
    // In a real app, this would navigate to the property detail page
    // navigate(`/property/${propertyId}`);
  };

  return (
    <AppShell>
      <div className="space-y-6">
        <div className="flex flex-col space-y-2">
          <h1 className="text-3xl font-bold">Smart Deal Discovery</h1>
          <p className="text-lg text-gray-600">
            Discover new opportunities with our AI-powered property search.
          </p>
        </div>

        {!hasSearched ? (
          <>
            <PropertySearchBar 
              onSearch={handleSearch} 
              onSaveSearch={handleSaveSearch}
              savedSearch={savedSearch}
            />
            <QuickSearch onSearch={handleSearch} fullScreen />
            <SearchDashboard />
          </>
        ) : (
          <>
            <PropertySearchBar 
              onSearch={handleSearch}
              onSaveSearch={handleSaveSearch}
              savedSearch={savedSearch}
            />
            <SearchResults 
              searchResults={searchResults} 
              onNewSearch={handleNewSearch}
              onPropertyClick={handlePropertyClick}
            />
          </>
        )}
      </div>
    </AppShell>
  );
};

export default Search;

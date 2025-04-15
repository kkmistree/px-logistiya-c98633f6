
import { useState, useEffect } from 'react';
import AppShell from "@/components/layout/AppShell";
import PropertySearchBar from "@/components/property/PropertySearchBar";
import { useSearchParams } from 'react-router-dom';
import { useToast } from "@/hooks/use-toast";
import { searchProperties } from '@/services/propertyService';
import SearchResults from '@/components/search/SearchResults';
import { Property } from '@/types/property';
import SearchDashboard from '@/components/search/SearchDashboard';
import { Search as SearchIcon } from 'lucide-react';

const Search = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('q') || '';
  const [searchResults, setSearchResults] = useState<Property[]>([]);
  const [searching, setSearching] = useState(false);
  const [hasSearched, setHasSearched] = useState(false);
  const [savedSearch, setSavedSearch] = useState(false);
  const { toast } = useToast();

  // Perform search when the page loads with a query parameter
  useEffect(() => {
    if (query) {
      performSearch(query);
    }
  }, [query]);

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
          description: `Found ${results.length} matching properties`
        });
      }, 1000);
    } catch (error) {
      console.error("Search error:", error);
      setSearching(false);
      toast({
        variant: "destructive",
        description: "An error occurred while searching. Please try again.",
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
      description: `Viewing details for property ID: ${propertyId}`,
    });
  };

  return (
    <AppShell>
      <div className="container mx-auto max-w-7xl px-4 py-6 space-y-6">
        <div className="flex items-center space-x-2 mb-2">
          <div className="bg-estate-primary/10 p-2 rounded-full">
            <SearchIcon size={20} className="text-estate-primary" />
          </div>
          <div>
            <h1 className="text-2xl font-bold">Property Search</h1>
            <p className="text-sm text-slate-500">Find your next industrial investment opportunity</p>
          </div>
        </div>

        <PropertySearchBar 
          onSearch={handleSearch} 
          onSaveSearch={handleSaveSearch}
          savedSearch={savedSearch}
        />

        {hasSearched ? (
          <SearchResults 
            searchResults={searchResults} 
            onNewSearch={handleNewSearch}
            onPropertyClick={handlePropertyClick}
          />
        ) : (
          <SearchDashboard />
        )}
      </div>
    </AppShell>
  );
};

export default Search;

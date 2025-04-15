
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useToast } from "@/hooks/use-toast";
import { 
  Building2, 
  TrendingUp, 
  BarChart3, 
  Zap, 
  Clock,
  BookmarkPlus
} from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import PropertyCategoryCard from './categories/PropertyCategoryCard';
import MarketInsightCard from './insights/MarketInsightCard';
import SearchSuggestionCard from './suggestions/SearchSuggestionCard';
import RecentSearches from './RecentSearches';
import MarketTrends from './MarketTrends';

const propertyTypes = {
  title: "Browse by Property Type",
  description: "Explore industrial assets by category",
  items: [
    { label: "Warehouses", location: "warehouse", count: 58 },
    { label: "Factories", location: "factory", count: 42 },
    { label: "Logistics Centers", location: "logistics", count: 36 },
    { label: "Mixed-Use Industrial", location: "mixed-use", count: 31 }
  ]
};

const locationCategories = {
  title: "Top Industrial Locations",
  description: "Prime investment areas",
  items: [
    { label: "Riyadh Industrial City", location: "riyadh", count: 45 },
    { label: "Jeddah Industrial Area", location: "jeddah", count: 38 },
    { label: "Dammam Logistics Hub", location: "dammam", count: 29 },
    { label: "KAEC Industrial Valley", location: "kaec", count: 24 }
  ]
};

const searchSuggestions = [
  {
    query: "Logistics facilities with cold storage near ports",
    description: "Specialized industrial properties with temperature control and easy port access",
    tags: ["Cold Storage", "Port Access", "Logistics"]
  },
  {
    query: "High-yield warehouses under 10M SAR",
    description: "Affordably priced warehouse investments with above-average returns",
    tags: ["High Yield", "Warehouses", "Under 10M"]
  },
  {
    query: "Factory spaces with expansion potential",
    description: "Manufacturing facilities with adjacent land for future development",
    tags: ["Factories", "Expandable", "Development"]
  }
];

const SearchDashboard = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [activeTab, setActiveTab] = useState("discover");

  const handleCategoryClick = (filter: string) => {
    navigate(`/mls?filter=${filter}`);
    toast({
      description: `Browsing ${filter} properties`
    });
  };

  const handleSuggestionClick = (query: string) => {
    navigate(`/search?q=${encodeURIComponent(query)}`);
  };

  return (
    <div className="mt-8">
      <div className="flex flex-col space-y-2 mb-6">
        <h2 className="text-2xl font-bold">Smart Deal Discovery</h2>
        <p className="text-gray-600">Uncover opportunities tailored to your investment strategy</p>
      </div>
      
      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="mb-6 grid grid-cols-4 md:grid-cols-4 gap-1">
          <TabsTrigger value="discover" className="flex items-center gap-2">
            <Zap size={16} />
            <span className="hidden sm:inline">Discovery</span>
          </TabsTrigger>
          <TabsTrigger value="trends" className="flex items-center gap-2">
            <TrendingUp size={16} />
            <span className="hidden sm:inline">Market Trends</span>
          </TabsTrigger>
          <TabsTrigger value="recent" className="flex items-center gap-2">
            <Clock size={16} />
            <span className="hidden sm:inline">Recent</span>
          </TabsTrigger>
          <TabsTrigger value="saved" className="flex items-center gap-2">
            <BookmarkPlus size={16} />
            <span className="hidden sm:inline">Saved</span>
          </TabsTrigger>
        </TabsList>

        <TabsContent value="discover" className="space-y-6">
          <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
            <div className="xl:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6">
              <PropertyCategoryCard 
                {...propertyTypes}
                onItemClick={handleCategoryClick}
              />
              <PropertyCategoryCard 
                {...locationCategories}
                onItemClick={handleCategoryClick}
              />
            </div>
            <MarketInsightCard />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="md:col-span-3">
              <SearchSuggestionCard 
                suggestions={searchSuggestions}
                onSuggestionClick={handleSuggestionClick}
              />
            </div>
          </div>
        </TabsContent>

        <TabsContent value="trends">
          <MarketTrends />
        </TabsContent>

        <TabsContent value="recent">
          <RecentSearches />
        </TabsContent>

        <TabsContent value="saved">
          <div className="bg-white p-10 rounded-lg border border-slate-200 shadow-sm">
            <div className="flex flex-col items-center justify-center text-center py-10">
              <BookmarkPlus className="h-12 w-12 text-slate-300 mb-4" />
              <h3 className="text-lg font-medium mb-2">No saved searches yet</h3>
              <p className="text-slate-500 max-w-md mb-6">
                Save your search criteria to get notified when new properties match your requirements
              </p>
              <div className="flex items-center gap-2 text-sm text-blue-600">
                <span>Try searching for properties and click "Save Search"</span>
              </div>
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default SearchDashboard;

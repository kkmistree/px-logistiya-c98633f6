
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useToast } from "@/hooks/use-toast";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Lightbulb } from "lucide-react";
import PropertyCategoryCard from './categories/PropertyCategoryCard';
import MarketInsightCard from './insights/MarketInsightCard';
import SearchSuggestionCard from './suggestions/SearchSuggestionCard';
import RecentSearches from './RecentSearches';
import MarketTrends from './MarketTrends';

const propertyCategories = {
  title: "Industrial Property Categories",
  description: "Browse properties by category and location",
  items: [
    { label: "Warehouses", location: "riyadh", count: 45 },
    { label: "Logistics Centers", location: "jeddah", count: 32 },
    { label: "Manufacturing", location: "dammam", count: 28 },
    { label: "Distribution Hubs", location: "industrial-city", count: 24 }
  ]
};

const searchSuggestions = [
  {
    query: "High-yield warehouses in Riyadh Industrial City",
    description: "Properties with ROI > 8% in prime industrial zones",
    tags: ["High Yield", "Prime Location", "Warehouses"]
  },
  {
    query: "Manufacturing facilities near seaports",
    description: "Industrial properties with easy port access",
    tags: ["Manufacturing", "Logistics", "Port Access"]
  },
  {
    query: "Modern logistics centers with cold storage",
    description: "Specialized facilities with temperature control",
    tags: ["Cold Storage", "Modern", "Logistics"]
  }
];

const SearchDashboard = () => {
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleCategoryClick = (location: string) => {
    navigate(`/mls?location=${location}`);
    toast({
      description: `Viewing properties in ${location}`
    });
  };

  const handleSuggestionClick = (query: string) => {
    navigate(`/search?q=${encodeURIComponent(query)}`);
  };

  return (
    <div className="space-y-6 mt-8">
      <Tabs defaultValue="discover" className="w-full">
        <TabsList className="mb-4">
          <TabsTrigger value="discover">Discovery Tools</TabsTrigger>
          <TabsTrigger value="recent">Recent Searches</TabsTrigger>
          <TabsTrigger value="trends">Market Trends</TabsTrigger>
          <TabsTrigger value="saved">Saved Search Alerts</TabsTrigger>
        </TabsList>

        <TabsContent value="discover" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <PropertyCategoryCard 
              {...propertyCategories}
              onItemClick={handleCategoryClick}
            />
            <MarketInsightCard />
            <Card>
              <CardHeader>
                <CardTitle>Search Tips</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex space-x-3">
                    <Lightbulb className="text-amber-500 h-5 w-5 flex-shrink-0" />
                    <p className="text-sm">Use natural language like "warehouses near industrial zones"</p>
                  </div>
                  <div className="flex space-x-3">
                    <Lightbulb className="text-amber-500 h-5 w-5 flex-shrink-0" />
                    <p className="text-sm">Filter by ROI range: "properties with ROI above 8%"</p>
                  </div>
                  <div className="flex space-x-3">
                    <Lightbulb className="text-amber-500 h-5 w-5 flex-shrink-0" />
                    <p className="text-sm">Specify amenities: "warehouse with loading docks and high ceiling"</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="md:col-span-2">
              <SearchSuggestionCard 
                suggestions={searchSuggestions}
                onSuggestionClick={handleSuggestionClick}
              />
            </div>
          </div>
        </TabsContent>

        <TabsContent value="recent">
          <RecentSearches />
        </TabsContent>

        <TabsContent value="trends">
          <MarketTrends />
        </TabsContent>

        <TabsContent value="saved">
          <Card>
            <CardContent className="py-8">
              <div className="text-center">
                <p className="text-slate-500">No saved searches yet.</p>
                <p className="text-sm text-slate-400 mt-1">
                  Save your searches to get notifications about new matching properties.
                </p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default SearchDashboard;


import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useToast } from "@/hooks/use-toast";
import { 
  Building2, 
  TrendingUp, 
  BarChart3, 
  Zap, 
  Clock,
  BookmarkPlus,
  Lightbulb,
  Map,
  Users,
  LineChart,
  BarChart
} from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import PropertyCategoryCard from './categories/PropertyCategoryCard';
import MarketInsightCard from './insights/MarketInsightCard';
import SearchSuggestionCard from './suggestions/SearchSuggestionCard';
import RecentSearches from './RecentSearches';
import MarketTrends from './MarketTrends';
import InvestorSignals from './InvestorSignals';
import LiveInvestmentRadar from './LiveInvestmentRadar';
import MarketComparison from './MarketComparison';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

interface SearchDashboardProps {
  onSearch: (query: string) => void;
  onCategoryClick: (filter: string) => void;
}

const propertyTypes = {
  title: "Browse by Property Type",
  description: "Explore industrial assets by category",
  items: [
    { label: "Warehouses", location: "warehouse", count: 58, description: "Storage facilities for goods and merchandise, typically with loading docks and high ceilings" },
    { label: "Factories", location: "factory", count: 42, description: "Manufacturing facilities designed for production operations with utilities for heavy machinery" },
    { label: "Logistics Centers", location: "logistics", count: 36, description: "Distribution hubs optimized for efficient movement and storage of goods" },
    { label: "Mixed-Use Industrial", location: "mixed-use", count: 31, description: "Combined industrial spaces with office, retail or other commercial components" }
  ]
};

const locationCategories = {
  title: "Top Industrial Locations",
  description: "Prime investment areas",
  items: [
    { label: "Riyadh Industrial City", location: "riyadh", count: 45, description: "Capital region's primary industrial zone with excellent infrastructure and government incentives" },
    { label: "Jeddah Industrial Area", location: "jeddah", count: 38, description: "Port-adjacent industrial zone with strong import/export capabilities" },
    { label: "Dammam Logistics Hub", location: "dammam", count: 29, description: "Eastern province logistics center with Gulf access and petrochemical industry proximity" },
    { label: "KAEC Industrial Valley", location: "kaec", count: 24, description: "Modern planned industrial city with state-of-the-art facilities and tax benefits" }
  ]
};

const searchSuggestions = [
  {
    query: "Logistics facilities with cold storage near ports",
    description: "Specialized industrial properties with temperature control and easy port access",
    tags: ["Cold Storage", "Port Access", "Logistics"],
    metrics: {
      roi: "9.2%",
      growth: "+14%",
      potential: "high" as "high" // Type assertion to match the required enum type
    }
  },
  {
    query: "High-yield warehouses under 10M SAR",
    description: "Affordably priced warehouse investments with above-average returns",
    tags: ["High Yield", "Warehouses", "Under 10M"],
    metrics: {
      roi: "8.5%",
      growth: "+7%",
      potential: "medium" as "medium" // Type assertion to match the required enum type
    }
  },
  {
    query: "Factory spaces with expansion potential",
    description: "Manufacturing facilities with adjacent land for future development",
    tags: ["Factories", "Expandable", "Development"],
    metrics: {
      roi: "6.8%",
      growth: "+11%",
      potential: "high" as "high" // Type assertion to match the required enum type
    }
  }
];

const SearchDashboard = ({ onSearch, onCategoryClick }: SearchDashboardProps) => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [activeTab, setActiveTab] = useState("discover");

  const handleSuggestionClick = (query: string) => {
    onSearch(query);
  };

  const handleRefreshSuggestions = () => {
    toast({
      description: "Search suggestions updated based on latest market data"
    });
  };

  return (
    <div className="mt-4 space-y-6">
      <div className="flex flex-col space-y-2 mb-6">
        <h2 className="text-2xl font-bold">Smart Deal Discovery</h2>
        <p className="text-slate-600">Uncover opportunities tailored to your investment strategy</p>
      </div>
      
      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="mb-6 grid grid-cols-5 gap-1 bg-transparent p-0">
          <TabsTrigger value="discover" className="flex items-center gap-2 data-[state=active]:bg-slate-100 data-[state=active]:text-slate-900 rounded-lg">
            <Zap size={16} />
            <span className="hidden sm:inline">Discovery</span>
          </TabsTrigger>
          <TabsTrigger value="radar" className="flex items-center gap-2 data-[state=active]:bg-slate-100 data-[state=active]:text-slate-900 rounded-lg">
            <LineChart size={16} />
            <span className="hidden sm:inline">Investment Radar</span>
          </TabsTrigger>
          <TabsTrigger value="trends" className="flex items-center gap-2 data-[state=active]:bg-slate-100 data-[state=active]:text-slate-900 rounded-lg">
            <TrendingUp size={16} />
            <span className="hidden sm:inline">Market Trends</span>
          </TabsTrigger>
          <TabsTrigger value="recent" className="flex items-center gap-2 data-[state=active]:bg-slate-100 data-[state=active]:text-slate-900 rounded-lg">
            <Clock size={16} />
            <span className="hidden sm:inline">Recent</span>
          </TabsTrigger>
          <TabsTrigger value="saved" className="flex items-center gap-2 data-[state=active]:bg-slate-100 data-[state=active]:text-slate-900 rounded-lg">
            <BookmarkPlus size={16} />
            <span className="hidden sm:inline">Saved</span>
          </TabsTrigger>
        </TabsList>

        {/* Discovery Tab */}
        <TabsContent value="discover" className="space-y-6 mt-0">
          <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
            <div className="xl:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6">
              <PropertyCategoryCard 
                {...propertyTypes}
                onItemClick={onCategoryClick}
              />
              <PropertyCategoryCard 
                {...locationCategories}
                onItemClick={onCategoryClick}
              />
            </div>
            <MarketInsightCard />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="md:col-span-2">
              <SearchSuggestionCard 
                suggestions={searchSuggestions}
                onSuggestionClick={handleSuggestionClick}
                onRefresh={handleRefreshSuggestions}
              />
            </div>
            <InvestorSignals />
          </div>
        </TabsContent>
        
        {/* Investment Radar Tab */}
        <TabsContent value="radar" className="mt-0">
          <LiveInvestmentRadar />
        </TabsContent>

        {/* Market Trends Tab */}
        <TabsContent value="trends" className="mt-0">
          <div className="space-y-6">
            <MarketTrends />
            <MarketComparison />
          </div>
        </TabsContent>

        {/* Recent Tab */}
        <TabsContent value="recent" className="mt-0">
          <RecentSearches />
        </TabsContent>

        {/* Saved Tab */}
        <TabsContent value="saved" className="mt-0">
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

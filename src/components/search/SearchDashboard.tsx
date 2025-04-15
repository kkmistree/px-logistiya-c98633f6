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
  LineChart
} from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card } from "@/components/ui/card";
import PropertyCategoryCard from './categories/PropertyCategoryCard';
import MarketInsightCard from './insights/MarketInsightCard';
import SearchSuggestionCard from './suggestions/SearchSuggestionCard';
import RecentSearches from './RecentSearches';
import MarketTrends from './MarketTrends';
import InvestorSignals from './InvestorSignals';
import LiveInvestmentRadar from './LiveInvestmentRadar';
import MarketComparison from './MarketComparison';

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
      potential: "high" as "high"
    }
  },
  {
    query: "High-yield warehouses under 10M SAR",
    description: "Affordably priced warehouse investments with above-average returns",
    tags: ["High Yield", "Warehouses", "Under 10M"],
    metrics: {
      roi: "8.5%",
      growth: "+7%",
      potential: "medium" as "medium"
    }
  },
  {
    query: "Factory spaces with expansion potential",
    description: "Manufacturing facilities with adjacent land for future development",
    tags: ["Factories", "Expandable", "Development"],
    metrics: {
      roi: "6.8%",
      growth: "+11%",
      potential: "high" as "high"
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
    <div className="container mx-auto max-w-[1400px] px-4 py-6">
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-2">
          <div className="p-2 rounded-full bg-estate-primary/10">
            <Lightbulb className="h-5 w-5 text-estate-primary" />
          </div>
          <div>
            <h2 className="text-2xl font-semibold text-estate-primary">Smart Deal Discovery</h2>
            <p className="text-sm text-slate-600">Uncover opportunities tailored to your investment strategy</p>
          </div>
        </div>
      </div>

      <Card className="p-6 border-slate-200">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="mb-8 grid w-full grid-cols-5 gap-4 bg-transparent p-0">
            <TabsTrigger 
              value="discover" 
              className="flex items-center gap-2 data-[state=active]:bg-estate-primary data-[state=active]:text-white rounded-lg border border-slate-200 shadow-sm"
            >
              <Zap size={18} />
              <span>Discovery</span>
            </TabsTrigger>
            <TabsTrigger 
              value="radar" 
              className="flex items-center gap-2 data-[state=active]:bg-estate-primary data-[state=active]:text-white rounded-lg border border-slate-200 shadow-sm"
            >
              <LineChart size={18} />
              <span>Investment Radar</span>
            </TabsTrigger>
            <TabsTrigger 
              value="trends" 
              className="flex items-center gap-2 data-[state=active]:bg-estate-primary data-[state=active]:text-white rounded-lg border border-slate-200 shadow-sm"
            >
              <TrendingUp size={18} />
              <span>Market Trends</span>
            </TabsTrigger>
            <TabsTrigger 
              value="recent" 
              className="flex items-center gap-2 data-[state=active]:bg-estate-primary data-[state=active]:text-white rounded-lg border border-slate-200 shadow-sm"
            >
              <Clock size={18} />
              <span>Recent</span>
            </TabsTrigger>
            <TabsTrigger 
              value="saved" 
              className="flex items-center gap-2 data-[state=active]:bg-estate-primary data-[state=active]:text-white rounded-lg border border-slate-200 shadow-sm"
            >
              <BookmarkPlus size={18} />
              <span>Saved</span>
            </TabsTrigger>
          </TabsList>

          <TabsContent value="discover" className="mt-0 space-y-6">
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
          
          <TabsContent value="radar" className="mt-0">
            <LiveInvestmentRadar />
          </TabsContent>

          <TabsContent value="trends" className="mt-0">
            <div className="space-y-6">
              <MarketTrends />
              <MarketComparison />
            </div>
          </TabsContent>

          <TabsContent value="recent" className="mt-0">
            <Card className="border-slate-200">
              <RecentSearches />
            </Card>
          </TabsContent>

          <TabsContent value="saved" className="mt-0">
            <Card className="p-12 text-center border-slate-200">
              <div className="flex flex-col items-center justify-center max-w-md mx-auto">
                <BookmarkPlus className="h-16 w-16 text-slate-300 mb-6" />
                <h3 className="text-xl font-medium mb-3">No saved searches yet</h3>
                <p className="text-slate-500 mb-8">
                  Save your search criteria to get notified when new properties match your requirements
                </p>
                <p className="text-sm text-estate-primary">
                  Try searching for properties and click "Save Search"
                </p>
              </div>
            </Card>
          </TabsContent>
        </Tabs>
      </Card>
    </div>
  );
};

export default SearchDashboard;


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
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
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
    <div className="w-full">
      <div className="bg-white rounded-lg border border-slate-200 shadow-sm mb-6 p-6">
        <div className="flex items-center space-x-3 mb-4">
          <div className="bg-estate-primary/10 p-2 rounded-full">
            <Zap className="h-5 w-5 text-estate-primary" />
          </div>
          <div>
            <h2 className="text-xl font-bold text-estate-primary">Smart Deal Discovery</h2>
            <p className="text-sm text-slate-600">Find your next investment opportunity with AI-powered recommendations</p>
          </div>
        </div>
        
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="bg-slate-100 p-1 mb-6 flex flex-wrap gap-2">
            <TabsTrigger 
              value="discover" 
              className="data-[state=active]:bg-estate-primary data-[state=active]:text-white"
            >
              <Zap size={16} className="mr-2" />
              <span>Discovery</span>
            </TabsTrigger>
            <TabsTrigger 
              value="radar" 
              className="data-[state=active]:bg-estate-primary data-[state=active]:text-white"
            >
              <LineChart size={16} className="mr-2" />
              <span>Investment Radar</span>
            </TabsTrigger>
            <TabsTrigger 
              value="trends" 
              className="data-[state=active]:bg-estate-primary data-[state=active]:text-white"
            >
              <TrendingUp size={16} className="mr-2" />
              <span>Market Trends</span>
            </TabsTrigger>
            <TabsTrigger 
              value="recent" 
              className="data-[state=active]:bg-estate-primary data-[state=active]:text-white"
            >
              <Clock size={16} className="mr-2" />
              <span>Recent</span>
            </TabsTrigger>
            <TabsTrigger 
              value="saved" 
              className="data-[state=active]:bg-estate-primary data-[state=active]:text-white"
            >
              <BookmarkPlus size={16} className="mr-2" />
              <span>Saved</span>
            </TabsTrigger>
          </TabsList>

          <TabsContent value="discover" className="mt-0">
            <div className="space-y-6">
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
            </div>
          </TabsContent>
          
          <TabsContent value="radar" className="mt-0">
            <Card className="border-slate-200">
              <CardHeader className="bg-slate-50 border-b border-slate-100">
                <CardTitle className="text-lg font-semibold flex items-center">
                  <LineChart size={18} className="mr-2 text-estate-primary" />
                  Live Investment Radar
                </CardTitle>
                <CardDescription>Track investment opportunities in real-time across Saudi Arabia</CardDescription>
              </CardHeader>
              <CardContent className="p-6">
                <LiveInvestmentRadar />
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="trends" className="mt-0">
            <div className="space-y-6">
              <Card className="border-slate-200">
                <CardHeader className="bg-slate-50 border-b border-slate-100">
                  <CardTitle className="text-lg font-semibold flex items-center">
                    <TrendingUp size={18} className="mr-2 text-estate-primary" />
                    Market Trends
                  </CardTitle>
                  <CardDescription>Industrial real estate market performance and outlook</CardDescription>
                </CardHeader>
                <CardContent className="p-6">
                  <MarketTrends />
                </CardContent>
              </Card>
              
              <Card className="border-slate-200">
                <CardHeader className="bg-slate-50 border-b border-slate-100">
                  <CardTitle className="text-lg font-semibold flex items-center">
                    <BarChart3 size={18} className="mr-2 text-estate-primary" />
                    Market Comparison
                  </CardTitle>
                  <CardDescription>Compare key metrics across industrial markets</CardDescription>
                </CardHeader>
                <CardContent className="p-6">
                  <MarketComparison />
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="recent" className="mt-0">
            <Card className="border-slate-200">
              <CardHeader className="bg-slate-50 border-b border-slate-100">
                <CardTitle className="text-lg font-semibold flex items-center">
                  <Clock size={18} className="mr-2 text-estate-primary" />
                  Recent Searches
                </CardTitle>
                <CardDescription>Your search history and recently viewed properties</CardDescription>
              </CardHeader>
              <CardContent className="p-6">
                <RecentSearches />
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="saved" className="mt-0">
            <Card className="border-slate-200">
              <CardHeader className="bg-slate-50 border-b border-slate-100">
                <CardTitle className="text-lg font-semibold flex items-center">
                  <BookmarkPlus size={18} className="mr-2 text-estate-primary" />
                  Saved Searches
                </CardTitle>
                <CardDescription>Your bookmarked searches and alerts</CardDescription>
              </CardHeader>
              <CardContent className="p-6">
                <div className="flex flex-col items-center justify-center py-12 text-center">
                  <BookmarkPlus className="h-16 w-16 text-slate-300 mb-6" />
                  <h3 className="text-xl font-medium mb-3">No saved searches yet</h3>
                  <p className="text-slate-500 mb-8 max-w-md">
                    Save your search criteria to get notified when new properties match your requirements
                  </p>
                  <Button variant="outline" className="gap-2">
                    <Map size={16} />
                    <span>Explore Properties</span>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default SearchDashboard;

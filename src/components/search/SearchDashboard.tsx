
import { useState } from 'react';
import { useToast } from "@/components/ui/use-toast";
import { TabsContent } from "@/components/ui/tabs";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import PropertyCategoryCard from './categories/PropertyCategoryCard';
import MarketInsightCard from './insights/MarketInsightCard';
import SearchSuggestionCard from './suggestions/SearchSuggestionCard';
import RecentSearches from './RecentSearches';
import MarketTrends from './MarketTrends';
import InvestorSignals from './InvestorSignals';
import LiveInvestmentRadar from './LiveInvestmentRadar';
import MarketComparison from './MarketComparison';
import SearchDashboardHeader from './components/SearchDashboardHeader';
import SearchDashboardTabs from './components/SearchDashboardTabs';
import SavedSearchesContent from './components/SavedSearchesContent';
import { propertyTypes, locationCategories, searchSuggestions } from './constants/searchData';
import type { SearchDashboardProps } from './types/searchTypes';

const SearchDashboard = ({ onSearch, onCategoryClick }: SearchDashboardProps) => {
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
        <SearchDashboardHeader />
        <SearchDashboardTabs activeTab={activeTab} setActiveTab={setActiveTab}>
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
                <CardTitle className="text-lg font-semibold">Live Investment Radar</CardTitle>
                <CardDescription>Track investment opportunities in real-time across Saudi Arabia</CardDescription>
              </CardHeader>
              <CardContent className="p-6">
                <LiveInvestmentRadar />
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="trends" className="mt-0">
            <div className="space-y-6">
              <MarketTrends />
              <MarketComparison />
            </div>
          </TabsContent>

          <TabsContent value="recent" className="mt-0">
            <Card className="border-slate-200">
              <CardHeader className="bg-slate-50 border-b border-slate-100">
                <CardTitle className="text-lg font-semibold">Recent Searches</CardTitle>
                <CardDescription>Your search history and recently viewed properties</CardDescription>
              </CardHeader>
              <CardContent className="p-6">
                <RecentSearches />
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="saved" className="mt-0">
            <SavedSearchesContent />
          </TabsContent>
        </SearchDashboardTabs>
      </div>
    </div>
  );
};

export default SearchDashboard;

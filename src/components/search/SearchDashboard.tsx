
import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Search, Filter, Building2, MapPin, TrendingUp, ArrowUpCircle, ChevronRight, BarChart3, PieChart, LineChart, Rocket, Lightbulb, Eye } from "lucide-react";
import { useNavigate } from 'react-router-dom';
import { useToast } from "@/hooks/use-toast";
import SearchSuggestions from './SearchSuggestions';
import RecentSearches from './RecentSearches';
import MarketTrends from './MarketTrends';

const SearchDashboard = () => {
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleOpenMls = () => {
    navigate('/mls');
    toast({
      description: "Opening the Industrial Assets page"
    });
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
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="flex items-center">
                  <Building2 size={18} className="mr-2 text-blue-500" /> 
                  Property Categories
                </CardTitle>
                <CardDescription>Browse properties by category</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-2">
                  <Button variant="outline" size="sm" className="justify-start">
                    <MapPin size={14} className="mr-2" /> Industrial Warehouses
                  </Button>
                  <Button variant="outline" size="sm" className="justify-start">
                    <MapPin size={14} className="mr-2" /> Logistics Facilities
                  </Button>
                  <Button variant="outline" size="sm" className="justify-start">
                    <MapPin size={14} className="mr-2" /> Manufacturing Plants
                  </Button>
                  <Button variant="outline" size="sm" className="justify-start">
                    <MapPin size={14} className="mr-2" /> Distribution Centers
                  </Button>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="flex items-center">
                  <TrendingUp size={18} className="mr-2 text-green-500" /> 
                  Investment Performance
                </CardTitle>
                <CardDescription>Market trends and analytics</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="flex justify-between items-center p-2 bg-slate-50 rounded">
                    <span className="text-sm">High ROI Properties</span>
                    <div className="flex items-center text-green-600">
                      <ArrowUpCircle size={14} className="mr-1" /> 12%
                    </div>
                  </div>
                  <div className="flex justify-between items-center p-2 bg-slate-50 rounded">
                    <span className="text-sm">Top Performing Areas</span>
                    <ChevronRight size={14} />
                  </div>
                  <Button variant="secondary" size="sm" className="w-full" onClick={() => navigate('/analytics')}>
                    View Full Analytics
                  </Button>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="flex items-center">
                  <Filter size={18} className="mr-2 text-purple-500" /> 
                  Refined Search
                </CardTitle>
                <CardDescription>Advanced search tools</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <Button variant="outline" size="sm" className="w-full justify-between" onClick={handleOpenMls}>
                    <span>Advanced Filters</span>
                    <Filter size={14} />
                  </Button>
                  <Button variant="outline" size="sm" className="w-full justify-between">
                    <span>Map-Based Search</span>
                    <MapPin size={14} />
                  </Button>
                  <Button variant="outline" size="sm" className="w-full justify-between">
                    <span>Property Comparison</span>
                    <BarChart3 size={14} />
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="md:col-span-2">
              <CardHeader>
                <CardTitle>Smart Search Suggestions</CardTitle>
                <CardDescription>
                  Based on your recent activities and preferences
                </CardDescription>
              </CardHeader>
              <CardContent>
                <SearchSuggestions />
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Search Tips</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex space-x-3">
                    <Lightbulb className="text-amber-500 h-5 w-5 flex-shrink-0" />
                    <p className="text-sm text-slate-700">Use natural language like "high yield warehouses in Riyadh"</p>
                  </div>
                  <div className="flex space-x-3">
                    <Lightbulb className="text-amber-500 h-5 w-5 flex-shrink-0" />
                    <p className="text-sm text-slate-700">Specify price ranges with "under 5 million SAR"</p>
                  </div>
                  <div className="flex space-x-3">
                    <Lightbulb className="text-amber-500 h-5 w-5 flex-shrink-0" />
                    <p className="text-sm text-slate-700">Include investment criteria like "ROI above 8%"</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
        
        <TabsContent value="recent">
          <Card>
            <CardHeader>
              <CardTitle>Recent Search Activity</CardTitle>
              <CardDescription>
                Your recent property searches and views
              </CardDescription>
            </CardHeader>
            <CardContent>
              <RecentSearches />
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="trends">
          <Card>
            <CardHeader>
              <CardTitle>Market Trends & Insights</CardTitle>
              <CardDescription>
                Latest trends in the industrial property market
              </CardDescription>
            </CardHeader>
            <CardContent>
              <MarketTrends />
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="saved">
          <Card>
            <CardHeader>
              <CardTitle>Saved Search Alerts</CardTitle>
              <CardDescription>
                Get notified when new properties match your criteria
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-center py-8">
                <Eye className="h-12 w-12 mx-auto text-slate-300 mb-3" />
                <p className="text-slate-500">You don't have any saved searches yet.</p>
                <p className="text-sm text-slate-400 mt-1">
                  Run a search and click "Save Search" to create alerts.
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

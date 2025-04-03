
import { useState } from "react";
import AppShell from "@/components/layout/AppShell";
import PropertyCard from "@/components/property/PropertyCard";
import MarketInsights from "@/components/home/MarketInsights";
import UpcomingViewings from "@/components/home/UpcomingViewings";
import ActiveDeals from "@/components/home/ActiveDeals";
import AIAssistant from "@/components/home/AIAssistant";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowUpRight, Search, Plus, TrendingUp, Building, Users } from "lucide-react";
import { getProperties } from "@/data/mockData";
import { PropertyFilter } from "@/types/property";
import { formatCurrency } from "@/utils/format";

const Index = () => {
  const [filters, setFilters] = useState<PropertyFilter>({});
  const properties = getProperties(filters);
  
  const stats = [
    { label: "Deal Pipeline", value: formatCurrency(42500000), icon: TrendingUp, change: "+12%" },
    { label: "Active Listings", value: "28", icon: Building, change: "+3" },
    { label: "Active Clients", value: "14", icon: Users, change: "+2" },
  ];

  return (
    <AppShell>
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-2xl font-bold text-estate-primary">Dashboard</h1>
            <p className="text-slate-500">Wednesday, April 3, 2025</p>
          </div>
          <div className="flex gap-2">
            <Button className="bg-estate-primary hover:bg-estate-primary/90 text-white">
              <Plus size={16} className="mr-2" /> Add Listing
            </Button>
            <Button variant="outline" className="border-estate-primary text-estate-primary hover:bg-estate-primary/10">
              <Plus size={16} className="mr-2" /> Add Client
            </Button>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {stats.map((stat, index) => (
            <Card key={index} className="border border-slate-200">
              <CardContent className="p-4 flex justify-between items-center">
                <div>
                  <p className="text-sm text-slate-500">{stat.label}</p>
                  <p className="text-2xl font-semibold text-estate-primary">{stat.value}</p>
                  <p className="text-xs text-estate-success">{stat.change} this month</p>
                </div>
                <div className="w-10 h-10 bg-estate-primary/10 rounded-lg flex items-center justify-center text-estate-primary">
                  <stat.icon size={20} />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="bg-white rounded-lg shadow-sm p-4 border border-slate-200">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-semibold text-estate-primary">Smart MLS Search</h2>
            <Button variant="ghost" size="sm" className="text-estate-secondary">
              Advanced Search <ArrowUpRight size={16} className="ml-1" />
            </Button>
          </div>
          
          <div className="flex w-full max-w-full gap-2 mb-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400" size={18} />
              <Input 
                type="search" 
                placeholder="Search properties by location, developer, features..." 
                className="pl-10 w-full bg-slate-50"
              />
            </div>
            <Button className="bg-estate-primary hover:bg-estate-primary/90 text-white whitespace-nowrap">
              Search Properties
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {properties.slice(0, 3).map((property) => (
              <PropertyCard key={property.id} property={property} />
            ))}
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="md:col-span-1">
            <MarketInsights />
          </div>
          <div className="md:col-span-1">
            <UpcomingViewings />
          </div>
          <div className="md:col-span-1">
            <ActiveDeals />
          </div>
        </div>
      </div>
      
      <AIAssistant />
    </AppShell>
  );
};

export default Index;

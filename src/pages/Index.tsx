
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import AppShell from "@/components/layout/AppShell";
import PropertyCard from "@/components/property/PropertyCard";
import MarketInsights from "@/components/home/MarketInsights";
import UpcomingViewings from "@/components/home/UpcomingViewings";
import ActiveDeals from "@/components/home/ActiveDeals";
import AIAssistant from "@/components/home/AIAssistant";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Dialog, 
  DialogContent, 
  DialogHeader, 
  DialogTitle, 
  DialogDescription,
  DialogFooter,
  DialogTrigger
} from "@/components/ui/dialog";
import { ArrowUpRight, Search, Plus, TrendingUp, Building, Users } from "lucide-react";
import { getProperties } from "@/data/mockData";
import { PropertyFilter } from "@/types/property";
import { formatCurrency } from "@/utils/format";
import { useToast } from "@/hooks/use-toast";

const Index = () => {
  const [filters, setFilters] = useState<PropertyFilter>({});
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [showAddListing, setShowAddListing] = useState<boolean>(false);
  const [showAddClient, setShowAddClient] = useState<boolean>(false);
  const navigate = useNavigate();
  const { toast } = useToast();
  
  const properties = getProperties(filters);
  
  const stats = [
    { label: "Deal Pipeline", value: formatCurrency(42500000), icon: TrendingUp, change: "+12%", onClick: () => navigate("/deals") },
    { label: "Active Listings", value: "28", icon: Building, change: "+3", onClick: () => navigate("/mls") },
    { label: "Active Clients", value: "14", icon: Users, change: "+2", onClick: () => navigate("/clients") },
  ];

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      toast({
        title: "Search initiated",
        description: `Searching for: ${searchQuery}`,
      });
      navigate(`/search?q=${encodeURIComponent(searchQuery)}`);
    }
  };

  const handleAddListing = () => {
    setShowAddListing(false);
    toast({
      title: "Listing created",
      description: "New property has been added successfully",
    });
  };

  const handleAddClient = () => {
    setShowAddClient(false);
    toast({
      title: "Client added",
      description: "New client has been added to your CRM",
    });
  };
  
  const getCurrentDate = () => {
    const options: Intl.DateTimeFormatOptions = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    return new Date().toLocaleDateString('en-US', options);
  };

  return (
    <AppShell>
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-2xl font-bold text-estate-primary">Dashboard</h1>
            <p className="text-slate-500">{getCurrentDate()}</p>
          </div>
          <div className="flex gap-2">
            <Dialog open={showAddListing} onOpenChange={setShowAddListing}>
              <DialogTrigger asChild>
                <Button className="bg-estate-primary hover:bg-estate-primary/90 text-white">
                  <Plus size={16} className="mr-2" /> Add Listing
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                  <DialogTitle>Add New Property Listing</DialogTitle>
                  <DialogDescription>
                    Enter the details of the new property listing below.
                  </DialogDescription>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                  <div className="grid grid-cols-4 items-center gap-4">
                    <label htmlFor="property-title" className="text-right text-sm">
                      Title
                    </label>
                    <Input
                      id="property-title"
                      placeholder="Enter property title"
                      className="col-span-3"
                    />
                  </div>
                  <div className="grid grid-cols-4 items-center gap-4">
                    <label htmlFor="property-price" className="text-right text-sm">
                      Price
                    </label>
                    <Input
                      id="property-price"
                      type="number"
                      placeholder="Enter price"
                      className="col-span-3"
                    />
                  </div>
                  <div className="grid grid-cols-4 items-center gap-4">
                    <label htmlFor="property-location" className="text-right text-sm">
                      Location
                    </label>
                    <Input
                      id="property-location"
                      placeholder="Area, Community"
                      className="col-span-3"
                    />
                  </div>
                </div>
                <DialogFooter>
                  <Button variant="outline" onClick={() => setShowAddListing(false)}>
                    Cancel
                  </Button>
                  <Button onClick={handleAddListing}>Save Listing</Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>
            
            <Dialog open={showAddClient} onOpenChange={setShowAddClient}>
              <DialogTrigger asChild>
                <Button variant="outline" className="border-estate-primary text-estate-primary hover:bg-estate-primary/10">
                  <Plus size={16} className="mr-2" /> Add Client
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                  <DialogTitle>Add New Client</DialogTitle>
                  <DialogDescription>
                    Enter the client's details below to add them to your CRM.
                  </DialogDescription>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                  <div className="grid grid-cols-4 items-center gap-4">
                    <label htmlFor="client-name" className="text-right text-sm">
                      Name
                    </label>
                    <Input
                      id="client-name"
                      placeholder="Full name"
                      className="col-span-3"
                    />
                  </div>
                  <div className="grid grid-cols-4 items-center gap-4">
                    <label htmlFor="client-email" className="text-right text-sm">
                      Email
                    </label>
                    <Input
                      id="client-email"
                      type="email"
                      placeholder="Email address"
                      className="col-span-3"
                    />
                  </div>
                  <div className="grid grid-cols-4 items-center gap-4">
                    <label htmlFor="client-phone" className="text-right text-sm">
                      Phone
                    </label>
                    <Input
                      id="client-phone"
                      placeholder="Phone number"
                      className="col-span-3"
                    />
                  </div>
                  <div className="grid grid-cols-4 items-center gap-4">
                    <label htmlFor="client-type" className="text-right text-sm">
                      Type
                    </label>
                    <select 
                      id="client-type" 
                      className="col-span-3 border border-input rounded-md h-10 px-3"
                    >
                      <option value="buyer">Buyer</option>
                      <option value="seller">Seller</option>
                      <option value="investor">Investor</option>
                      <option value="tenant">Tenant</option>
                      <option value="landlord">Landlord</option>
                    </select>
                  </div>
                </div>
                <DialogFooter>
                  <Button variant="outline" onClick={() => setShowAddClient(false)}>
                    Cancel
                  </Button>
                  <Button onClick={handleAddClient}>Add Client</Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {stats.map((stat, index) => (
            <Card 
              key={index} 
              className="border border-slate-200 hover:border-estate-primary/30 transition-colors cursor-pointer"
              onClick={stat.onClick}
            >
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
            <Button 
              variant="ghost" 
              size="sm" 
              className="text-estate-secondary"
              onClick={() => navigate("/mls")}
            >
              Advanced Search <ArrowUpRight size={16} className="ml-1" />
            </Button>
          </div>
          
          <form onSubmit={handleSearch} className="flex w-full max-w-full gap-2 mb-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400" size={18} />
              <Input 
                type="search" 
                placeholder="Search properties by location, developer, features..." 
                className="pl-10 w-full bg-slate-50"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <Button 
              type="submit" 
              className="bg-estate-primary hover:bg-estate-primary/90 text-white whitespace-nowrap"
            >
              Search Properties
            </Button>
          </form>
          
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

import { ArrowUpRight, Eye, Save, Brush } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";
import { Property } from "@/types/property";

interface ListingPerformanceProps {
  onAddListing?: () => void;
  onViewProperty?: (property: Property) => void;
}

const ListingPerformance = ({ onAddListing, onViewProperty }: ListingPerformanceProps) => {
  const navigate = useNavigate();
  const { toast } = useToast();
  
  const listings = {
    total: {
      active: 18,
      underOffer: 7,
      sold: 32
    },
    topViewed: [
      { id: "p1", title: "Logistics Warehouse in Riyadh", views: 243, saves: 18 },
      { id: "p2", title: "Factory Complex in Jeddah", views: 187, saves: 15 },
      { id: "p3", title: "Industrial Land in Dammam", views: 165, saves: 12 }
    ],
    lowEngagement: [
      { id: "p4", title: "Office Building in KAEC", views: 24, daysSinceUpdate: 14 },
      { id: "p5", title: "Mixed-use Land in Jubail", views: 31, daysSinceUpdate: 10 }
    ]
  };

  const handleViewAll = () => {
    navigate("/ListingPerformance");
  };
  
  const handleRefreshListing = (listingId: string) => {
    toast({
      title: "Refreshing listing",
      description: "Updating listing details and boosting visibility"
    });
    navigate(`/listings/edit/${listingId}`);
  };
  
  const handleViewListing = (listingId: string) => {
    if (onViewProperty) {
      const mockProperty: Property = {
        id: listingId,
        title: listings.topViewed.find(l => l.id === listingId)?.title || 
               listings.lowEngagement.find(l => l.id === listingId)?.title || 
               "Industrial Property Listing",
        description: "Industrial property with excellent connectivity and infrastructure",
        type: "warehouse",
        status: "available",
        price: 15000000,
        area: 5000,
        location: {
          area: "Riyadh Industrial City",
          community: "MODON Zone 3"
        },
        features: ["Loading Docks", "High Power Capacity", "Security"],
        images: ["/placeholder.svg"],
        tags: ["MODON Approved", "Industrial Zone", "High Specification"],
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
      };
      onViewProperty(mockProperty);
    } else {
      navigate(`/listings/${listingId}`);
    }
  };
  
  const handleAddNewListing = () => {
    if (onAddListing) {
      onAddListing();
    } else {
      toast({
        title: "Add New Listing",
        description: "Create a new industrial property listing"
      });
      navigate("/listings/new");
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-sm p-4">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold text-estate-primary">Listing Performance</h2>
        <div className="flex gap-2">
          <Button 
            variant="ghost" 
            size="sm" 
            className="text-estate-secondary"
            onClick={handleViewAll}
          >
            View All <ArrowUpRight size={16} className="ml-1" />
          </Button>
          <Button
            size="sm"
            className="bg-estate-primary hover:bg-estate-primary/90 text-white"
            onClick={handleAddNewListing}
          >
            Add Listing
          </Button>
        </div>
      </div>
      
      <div className="grid grid-cols-3 gap-3 mb-4">
        <Card className="p-3 border border-slate-200 flex flex-col items-center justify-center cursor-pointer hover:bg-slate-50" onClick={handleViewAll}>
          <span className="text-xs font-medium text-slate-500">Active</span>
          <p className="text-xl font-semibold">{listings.total.active}</p>
        </Card>
        
        <Card className="p-3 border border-slate-200 flex flex-col items-center justify-center cursor-pointer hover:bg-slate-50" onClick={handleViewAll}>
          <span className="text-xs font-medium text-slate-500">Under Offer</span>
          <p className="text-xl font-semibold">{listings.total.underOffer}</p>
        </Card>
        
        <Card className="p-3 border border-slate-200 flex flex-col items-center justify-center cursor-pointer hover:bg-slate-50" onClick={handleViewAll}>
          <span className="text-xs font-medium text-slate-500">Sold</span>
          <p className="text-xl font-semibold">{listings.total.sold}</p>
        </Card>
      </div>
      
      <div className="mb-4">
        <h3 className="text-sm font-medium text-estate-primary mb-2">Top Viewed Listings</h3>
        <div className="space-y-2">
          {listings.topViewed.map((listing) => (
            <Card 
              key={listing.id} 
              className="p-3 border border-slate-200 hover:border-estate-secondary/50 transition-colors cursor-pointer"
              onClick={() => handleViewListing(listing.id)}
            >
              <div className="flex justify-between items-center">
                <p className="text-sm font-medium">{listing.title}</p>
                <div className="flex items-center gap-3">
                  <div className="flex items-center gap-1 text-xs text-slate-500">
                    <Eye size={14} />
                    <span>{listing.views}</span>
                  </div>
                  <div className="flex items-center gap-1 text-xs text-slate-500">
                    <Save size={14} />
                    <span>{listing.saves}</span>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
      
      {listings.lowEngagement.length > 0 && (
        <div>
          <h3 className="text-sm font-medium text-estate-primary mb-2">Listings with Low Engagement</h3>
          <div className="space-y-2">
            {listings.lowEngagement.map((listing) => (
              <Card key={listing.id} className="p-3 border border-amber-200 bg-amber-50">
                <div className="flex justify-between items-center">
                  <div>
                    <p className="text-sm font-medium text-amber-800">{listing.title}</p>
                    <p className="text-xs text-amber-700 mt-1">
                      {listing.views} views • Last updated {listing.daysSinceUpdate} days ago
                    </p>
                  </div>
                  <Button 
                    size="sm" 
                    variant="outline"
                    className="border-amber-500 text-amber-600 hover:bg-amber-50"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleRefreshListing(listing.id);
                    }}
                  >
                    <Brush size={14} className="mr-1" /> Refresh
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ListingPerformance;

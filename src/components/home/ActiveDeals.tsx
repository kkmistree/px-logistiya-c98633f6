
import { ArrowUpRight, Activity } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { formatCurrency } from "@/utils/format";
import { useCurrency } from "@/contexts/CurrencyContext";
import { useNavigate } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";

const ActiveDeals = () => {
  const { currency } = useCurrency();
  const navigate = useNavigate();
  const { toast } = useToast();
  
  const deals = [
    {
      id: "d1",
      property: "Riyadh Industrial Warehouse",
      client: "Mohammed Al Farsi",
      price: 23500000,
      status: "Negotiation",
      progress: 40,
      lastActivity: "Offer submitted, awaiting response",
    },
    {
      id: "d2",
      property: "Dammam Factory Facility",
      client: "Eastern Manufacturing Ltd",
      price: 18600000,
      status: "Documentation",
      progress: 70,
      lastActivity: "SPA sent for signature",
    },
    {
      id: "d3",
      property: "Jeddah Logistics Park",
      client: "Al-Mashriq Investments",
      price: 32700000,
      status: "Deposit",
      progress: 60,
      lastActivity: "Deposit paid, preparing transfer",
    },
  ];

  const handleViewAll = () => {
    navigate("/deals");
  };
  
  const handleOpenDealRoom = (dealId: string, event: React.MouseEvent) => {
    event.stopPropagation();
    toast({
      title: "Opening deal room",
      description: "Connecting to secure deal environment"
    });
    navigate(`/deals/${dealId}`);
  };
  
  const handleDealClick = (dealId: string) => {
    navigate(`/deals/${dealId}`);
  };

  return (
    <div className="bg-white rounded-lg shadow-sm p-4">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold text-estate-primary">Active Deals</h2>
        <Button 
          variant="ghost" 
          size="sm" 
          className="text-estate-secondary"
          onClick={handleViewAll}
        >
          All Deals <ArrowUpRight size={16} className="ml-1" />
        </Button>
      </div>
      
      <div className="space-y-4">
        {deals.map((deal) => (
          <Card 
            key={deal.id} 
            className="p-4 border border-slate-200 hover:border-estate-secondary/50 transition-colors cursor-pointer"
            onClick={() => handleDealClick(deal.id)}
          >
            <div className="flex justify-between items-start">
              <div>
                <h3 className="font-medium text-estate-primary">{deal.property}</h3>
                <p className="text-sm text-slate-500 mt-1">Client: {deal.client}</p>
              </div>
              <div className="text-right">
                <span className="font-semibold text-estate-primary">{formatCurrency(deal.price, currency.code)}</span>
                <p className="text-xs font-medium bg-slate-100 rounded-full px-2 py-1 mt-1">
                  {deal.status}
                </p>
              </div>
            </div>
            
            <div className="mt-3">
              <div className="flex justify-between items-center text-xs mb-1">
                <span>Progress</span>
                <span>{deal.progress}%</span>
              </div>
              <Progress value={deal.progress} className="h-2" />
            </div>
            
            <div className="flex items-center mt-3 text-xs text-slate-500">
              <Activity size={14} className="mr-1" />
              <span>{deal.lastActivity}</span>
            </div>
            
            <Button 
              size="sm" 
              className="mt-3 w-full bg-estate-primary hover:bg-estate-primary/90 text-white"
              onClick={(e) => handleOpenDealRoom(deal.id, e)}
            >
              Open Deal Room
            </Button>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default ActiveDeals;


import { ArrowUpRight, Activity } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { formatCurrency } from "@/utils/format";

const ActiveDeals = () => {
  const deals = [
    {
      property: "Dubai Marina Apartment",
      client: "Mohammed Al Farsi",
      price: 3450000,
      status: "Negotiation",
      progress: 40,
      lastActivity: "Offer submitted, awaiting response",
    },
    {
      property: "JVC 1 Bedroom",
      client: "Elena Petrova",
      price: 640000,
      status: "Documentation",
      progress: 70,
      lastActivity: "SPA sent for signature",
    },
    {
      property: "Business Bay Office",
      client: "Hong Wei Investments",
      price: 5200000,
      status: "Deposit",
      progress: 60,
      lastActivity: "Deposit paid, preparing transfer",
    },
  ];

  return (
    <div className="bg-white rounded-lg shadow-sm p-4">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold text-estate-primary">Active Deals</h2>
        <Button variant="ghost" size="sm" className="text-estate-secondary">
          All Deals <ArrowUpRight size={16} className="ml-1" />
        </Button>
      </div>
      
      <div className="space-y-4">
        {deals.map((deal, index) => (
          <Card key={index} className="p-4 border border-slate-200">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="font-medium text-estate-primary">{deal.property}</h3>
                <p className="text-sm text-slate-500 mt-1">Client: {deal.client}</p>
              </div>
              <div className="text-right">
                <span className="font-semibold text-estate-primary">{formatCurrency(deal.price)}</span>
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
            
            <Button size="sm" className="mt-3 w-full bg-estate-primary hover:bg-estate-primary/90 text-white">
              Open Deal Room
            </Button>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default ActiveDeals;

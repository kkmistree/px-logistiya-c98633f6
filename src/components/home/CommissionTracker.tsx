
import { ArrowUpRight, Download, TrendingUp, DollarSign } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { formatCurrency } from "@/utils/format";
import { useCurrency } from "@/contexts/CurrencyContext";
import { useNavigate } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";

const CommissionTracker = () => {
  const { currency } = useCurrency();
  const navigate = useNavigate();
  const { toast } = useToast();
  
  const earnings = {
    monthToDate: 42000,
    pending: 68500,
    projected: 110500,
    breakdown: [
      { id: "d1", property: "Palm Jumeirah Villa", value: 38000, progress: 75 },
      { id: "d2", property: "Downtown Penthouse", value: 12500, progress: 40 },
      { id: "d3", property: "Business Bay Office", value: 18000, progress: 60 },
    ]
  };

  const handleViewAll = () => {
    navigate("/earnings");
  };
  
  const handleDownload = () => {
    toast({
      title: "Generating statement",
      description: "Your earnings statement is being downloaded"
    });
  };
  
  const handleDealClick = (dealId: string) => {
    navigate(`/deals/${dealId}`);
  };

  return (
    <div className="bg-white rounded-lg shadow-sm p-4">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold text-estate-primary">Commission Tracker</h2>
        <Button 
          variant="ghost" 
          size="sm" 
          className="text-estate-secondary"
          onClick={handleViewAll}
        >
          View Details <ArrowUpRight size={16} className="ml-1" />
        </Button>
      </div>
      
      <div className="grid grid-cols-2 gap-4 mb-4">
        <Card className="p-4 border border-slate-200">
          <div className="flex flex-col">
            <span className="text-xs font-medium text-slate-500">Month-to-date</span>
            <div className="flex items-baseline gap-1 mt-1">
              <p className="text-xl font-semibold text-estate-primary">{formatCurrency(earnings.monthToDate, currency.code)}</p>
              <TrendingUp size={16} className="text-estate-success" />
            </div>
          </div>
        </Card>
        
        <Card className="p-4 border border-slate-200">
          <div className="flex flex-col">
            <span className="text-xs font-medium text-slate-500">Pending Commissions</span>
            <p className="text-xl font-semibold text-estate-primary mt-1">{formatCurrency(earnings.pending, currency.code)}</p>
          </div>
        </Card>
      </div>
      
      <Card className="p-4 border border-slate-200 mb-4">
        <div className="flex justify-between items-start">
          <div>
            <span className="text-xs font-medium text-slate-500">Projected this month</span>
            <p className="text-2xl font-semibold text-estate-primary mt-1">{formatCurrency(earnings.projected, currency.code)}</p>
          </div>
          <Button
            size="sm"
            className="flex items-center gap-1 text-estate-secondary"
            variant="outline"
            onClick={handleDownload}
          >
            <Download size={14} />
            <span>Statement</span>
          </Button>
        </div>
      </Card>
      
      <div>
        <h3 className="text-sm font-medium text-estate-primary mb-2">Pending by Deal</h3>
        
        <div className="space-y-4">
          {earnings.breakdown.map((deal) => (
            <div 
              key={deal.id} 
              className="cursor-pointer"
              onClick={() => handleDealClick(deal.id)}
            >
              <div className="flex justify-between items-center text-sm mb-1">
                <span className="font-medium text-estate-primary">{deal.property}</span>
                <span className="text-estate-secondary">{formatCurrency(deal.value, currency.code)}</span>
              </div>
              <Progress value={deal.progress} className="h-2" />
              <p className="text-xs text-slate-500 mt-1">
                {deal.progress}% complete • Est. payout on deal completion
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CommissionTracker;


import { ArrowUpRight, Trophy, Medal } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue 
} from "@/components/ui/select";
import { formatCurrency } from "@/utils/format";
import { useCurrency } from "@/contexts/CurrencyContext";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const BrokerLeaderboard = () => {
  const { currency } = useCurrency();
  const navigate = useNavigate();
  const [timeframe, setTimeframe] = useState("week");
  
  const brokers = {
    week: [
      { id: "u1", name: "Sarah Johnson", dealsCount: 3, pipelineValue: 4500000, commissionEarned: 32000, avatar: "/placeholder.svg" },
      { id: "u2", name: "Mohammed Al Khouri", dealsCount: 2, pipelineValue: 3200000, commissionEarned: 28000, avatar: "/placeholder.svg" },
      { id: "u3", name: "Alex Wong", dealsCount: 2, pipelineValue: 3000000, commissionEarned: 21000, avatar: "/placeholder.svg" },
      { id: "u4", name: "David Miller", dealsCount: 1, pipelineValue: 2800000, commissionEarned: 19000, avatar: "/placeholder.svg" },
      { id: "u5", name: "Fatima Al Zahra", dealsCount: 1, pipelineValue: 2200000, commissionEarned: 17000, avatar: "/placeholder.svg" }
    ],
    month: [
      { id: "u2", name: "Mohammed Al Khouri", dealsCount: 8, pipelineValue: 12400000, commissionEarned: 87000, avatar: "/placeholder.svg" },
      { id: "u1", name: "Sarah Johnson", dealsCount: 7, pipelineValue: 10800000, commissionEarned: 76000, avatar: "/placeholder.svg" },
      { id: "u3", name: "Alex Wong", dealsCount: 6, pipelineValue: 9600000, commissionEarned: 68000, avatar: "/placeholder.svg" },
      { id: "u5", name: "Fatima Al Zahra", dealsCount: 5, pipelineValue: 8200000, commissionEarned: 58000, avatar: "/placeholder.svg" },
      { id: "u4", name: "David Miller", dealsCount: 4, pipelineValue: 7400000, commissionEarned: 52000, avatar: "/placeholder.svg" }
    ],
    quarter: [
      { id: "u3", name: "Alex Wong", dealsCount: 21, pipelineValue: 32500000, commissionEarned: 228000, avatar: "/placeholder.svg" },
      { id: "u2", name: "Mohammed Al Khouri", dealsCount: 19, pipelineValue: 29700000, commissionEarned: 208000, avatar: "/placeholder.svg" },
      { id: "u1", name: "Sarah Johnson", dealsCount: 18, pipelineValue: 28100000, commissionEarned: 197000, avatar: "/placeholder.svg" },
      { id: "u5", name: "Fatima Al Zahra", dealsCount: 16, pipelineValue: 24300000, commissionEarned: 170000, avatar: "/placeholder.svg" },
      { id: "u4", name: "David Miller", dealsCount: 14, pipelineValue: 21800000, commissionEarned: 152000, avatar: "/placeholder.svg" }
    ]
  };

  const handleViewAll = () => {
    navigate("/team/performance");
  };
  
  const handleProfileView = (brokerId: string) => {
    navigate(`/team/profile/${brokerId}`);
  };
  
  const currentList = brokers[timeframe as keyof typeof brokers];
  
  const getPositionIcon = (index: number) => {
    if (index === 0) return <Trophy size={16} className="text-yellow-500" />;
    if (index === 1) return <Trophy size={16} className="text-slate-400" />;
    if (index === 2) return <Trophy size={16} className="text-amber-700" />;
    return <span className="w-4 text-xs font-medium text-slate-500">{index + 1}</span>;
  };

  return (
    <div className="bg-white rounded-lg shadow-sm p-4">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold text-estate-primary">Broker Leaderboard</h2>
        <Button 
          variant="ghost" 
          size="sm" 
          className="text-estate-secondary"
          onClick={handleViewAll}
        >
          View Full Team <ArrowUpRight size={16} className="ml-1" />
        </Button>
      </div>
      
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-sm font-medium text-estate-primary">Top Performers</h3>
        <Select
          value={timeframe}
          onValueChange={setTimeframe}
        >
          <SelectTrigger className="w-[120px] h-8 text-xs">
            <SelectValue placeholder="Select Time" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="week">This Week</SelectItem>
            <SelectItem value="month">This Month</SelectItem>
            <SelectItem value="quarter">This Quarter</SelectItem>
          </SelectContent>
        </Select>
      </div>
      
      <div className="space-y-3">
        {currentList.map((broker, index) => (
          <Card 
            key={broker.id} 
            className={`p-3 border border-slate-200 hover:border-estate-secondary/50 transition-colors cursor-pointer ${
              index === 0 ? 'bg-amber-50' : ''
            }`}
            onClick={() => handleProfileView(broker.id)}
          >
            <div className="flex items-center gap-3">
              <div className="flex items-center justify-center w-6">
                {getPositionIcon(index)}
              </div>
              
              <Avatar className="h-8 w-8">
                <AvatarImage src={broker.avatar} alt={broker.name} />
                <AvatarFallback>{broker.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
              </Avatar>
              
              <div className="flex-1">
                <p className="text-sm font-medium text-estate-primary">{broker.name}</p>
              </div>
              
              <div className="flex flex-col items-end">
                <p className="text-xs font-medium text-estate-primary">
                  {formatCurrency(broker.commissionEarned, currency.code)}
                </p>
                <p className="text-xs text-slate-500">{broker.dealsCount} deals</p>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default BrokerLeaderboard;


import { TrendingUp, Building, Users } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";
import { formatCurrency } from "@/utils/format";

interface StatCard {
  label: string;
  value: string | number;
  icon: React.ElementType;
  change: string;
  onClick: () => void;
}

const StatCards = () => {
  const navigate = useNavigate();
  
  const stats: StatCard[] = [
    { label: "Deal Pipeline", value: formatCurrency(42500000), icon: TrendingUp, change: "+12%", onClick: () => navigate("/deals") },
    { label: "Active Listings", value: "28", icon: Building, change: "+3", onClick: () => navigate("/mls") },
    { label: "Active Clients", value: "14", icon: Users, change: "+2", onClick: () => navigate("/clients") },
  ];

  return (
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
  );
};

export default StatCards;

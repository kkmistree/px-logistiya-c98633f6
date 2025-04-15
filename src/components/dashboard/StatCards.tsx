
import { TrendingUp, Warehouse, Users, Factory } from "lucide-react";
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
    { label: "Investment Pipeline", value: formatCurrency(425000000, 'SAR'), icon: TrendingUp, change: "+12%", onClick: () => navigate("/deals") },
    { label: "Industrial Assets", value: "28", icon: Warehouse, change: "+3", onClick: () => navigate("/mls") },
    { label: "Active Investors", value: "14", icon: Users, change: "+2", onClick: () => navigate("/clients") },
    { label: "Factory Facilities", value: "12", icon: Factory, change: "+1", onClick: () => navigate("/mls?type=factory") },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
      {stats.map((stat, index) => (
        <Card 
          key={index} 
          className="border border-slate-200 hover:border-estate-primary/30 transition-colors cursor-pointer"
          onClick={stat.onClick}
        >
          <CardContent className="p-3 sm:p-4 flex justify-between items-center">
            <div>
              <p className="text-sm text-slate-500">{stat.label}</p>
              <p className="text-lg sm:text-2xl font-semibold text-estate-primary truncate">{stat.value}</p>
              <p className="text-xs text-estate-success">{stat.change} this month</p>
            </div>
            <div className="w-8 h-8 sm:w-10 sm:h-10 bg-estate-primary/10 rounded-lg flex items-center justify-center text-estate-primary">
              <stat.icon size={20} />
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default StatCards;

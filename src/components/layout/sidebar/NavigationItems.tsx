
import { NavLink } from "react-router-dom";
import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";
import {
  Home,
  Building,
  Landmark,
  BriefcaseBusiness,
  LineChart,
  Users,
  MapPin,
  FileText,
  BarChart2,
  MessageSquare,
  Settings,
  HelpCircle,
  BookOpen,
  Building2,
  DollarSign,
} from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
  TooltipProvider,
} from "@/components/ui/tooltip";

export interface NavItem {
  icon: LucideIcon;
  label: string;
  path: string;
}

export const navItems: NavItem[] = [
  { icon: Home, label: "Command Center", path: "/" },
  { icon: Landmark, label: "Investment Intelligence", path: "/analytics" },
  { icon: MapPin, label: "Smart Deal Discovery", path: "/search" },
  { icon: Building2, label: "Industrial Assets", path: "/mls" },
  { icon: BriefcaseBusiness, label: "Deal Packaging", path: "/deals" },
  { icon: Users, label: "Investors & Partners", path: "/clients" },
  { icon: DollarSign, label: "Transaction Center", path: "/transactions" },
  { icon: FileText, label: "Due Diligence Engine", path: "/due-diligence" },
  { icon: Building, label: "Developer Hub", path: "/developers" },
  { icon: LineChart, label: "Market Analytics", path: "/market" },
  { icon: BookOpen, label: "Knowledge Base", path: "/knowledge" },
  { icon: Settings, label: "Settings", path: "/settings" },
  { icon: HelpCircle, label: "Help & Support", path: "/support" },
];

interface NavigationItemsProps {
  items: NavItem[];
  open: boolean;
}

const NavigationItems = ({ items, open }: NavigationItemsProps) => {
  if (open) {
    return (
      <nav className="flex-1 px-3 py-4 overflow-y-auto">
        <ul className="space-y-2">
          {items.map((item, index) => (
            <li key={index}>
              <NavLink
                to={item.path}
                className={({ isActive }) =>
                  cn(
                    "flex items-center py-2 px-3 rounded-lg transition-colors",
                    isActive
                      ? "bg-white/10 text-white"
                      : "text-white/70 hover:bg-white/10 hover:text-white"
                  )
                }
              >
                <item.icon size={20} />
                <span className="ml-3 whitespace-nowrap">
                  {item.label}
                </span>
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    );
  }

  return (
    <nav className="flex-1 px-3 py-4 overflow-y-auto">
      <ul className="space-y-2">
        {items.map((item, index) => (
          <li key={index}>
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <NavLink
                    to={item.path}
                    className={({ isActive }) =>
                      cn(
                        "flex items-center justify-center py-2 rounded-lg transition-colors",
                        isActive
                          ? "bg-white/10 text-white"
                          : "text-white/70 hover:bg-white/10 hover:text-white"
                      )
                    }
                  >
                    <item.icon size={20} />
                  </NavLink>
                </TooltipTrigger>
                <TooltipContent side="right">
                  {item.label}
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavigationItems;

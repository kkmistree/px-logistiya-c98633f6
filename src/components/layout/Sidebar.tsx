
import { cn } from "@/lib/utils";
import {
  Home,
  Search,
  Users,
  Building,
  FileText,
  BarChart2,
  MessageSquare,
  Settings,
  HelpCircle,
  ChevronRight,
  BookOpen,
} from "lucide-react";
import CurrencySwitcher from "@/components/currency/CurrencySwitcher";
import NavigationItems, { NavItem } from "./sidebar/NavigationItems";
import UserMenu from "./sidebar/UserMenu";

interface SidebarProps {
  open: boolean;
  setOpen: (open: boolean) => void;
}

const navItems: NavItem[] = [
  { icon: Home, label: "Command Center", path: "/" },
  { icon: Search, label: "Quick Search", path: "/search" },
  { icon: Search, label: "MLS Search", path: "/mls" },
  { icon: Users, label: "Clients & CRM", path: "/clients" },
  { icon: Building, label: "Developer Hub", path: "/developers" },
  { icon: FileText, label: "Deal Rooms", path: "/deals" },
  { icon: BarChart2, label: "Analytics", path: "/analytics" },
  { icon: MessageSquare, label: "Messages", path: "/messages" },
  { icon: BookOpen, label: "Knowledge", path: "/knowledge" },
  { icon: Settings, label: "Settings", path: "/settings" },
  { icon: HelpCircle, label: "Help & Support", path: "/support" },
];

const Sidebar = ({ open, setOpen }: SidebarProps) => {
  return (
    <aside
      className={cn(
        "fixed left-0 top-0 z-40 h-screen bg-black text-white transition-all duration-300 ease-in-out",
        open ? "w-64" : "w-16",
        "md:block"
      )}
    >
      <div className="flex flex-col h-full">
        <div className={cn(
          "flex items-center h-16 px-4",
          open ? "justify-between" : "justify-center"
        )}>
          {open ? (
            <>
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-white rounded-md flex items-center justify-center">
                  <span className="font-bold text-black">pX</span>
                </div>
                <span className="font-semibold text-xl">pX</span>
              </div>
              <button onClick={() => setOpen(false)} className="p-1 hover:bg-white/10 rounded-full">
                <ChevronRight size={20} />
              </button>
            </>
          ) : (
            <div className="w-8 h-8 bg-white rounded-md flex items-center justify-center">
              <span className="font-bold text-black">pX</span>
            </div>
          )}
        </div>

        <NavigationItems items={navItems} open={open} />

        {open && (
          <div className="px-3 py-2">
            <CurrencySwitcher />
          </div>
        )}

        <UserMenu open={open} />
      </div>
    </aside>
  );
};

export default Sidebar;

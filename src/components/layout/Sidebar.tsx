import { cn } from "@/lib/utils";
import { NavLink } from "react-router-dom";
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

interface SidebarProps {
  open: boolean;
  setOpen: (open: boolean) => void;
}

const Sidebar = ({ open, setOpen }: SidebarProps) => {
  const navItems = [
    { icon: Search, label: "Quick Search", path: "/search" },
    { icon: Home, label: "Command Center", path: "/" },
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

  return (
    <aside
      className={cn(
        "fixed left-0 top-0 z-40 h-screen bg-black text-white transition-all duration-300 ease-in-out",
        open ? "w-64" : "w-20",
        "md:block",
        !open && "md:hover:w-64"
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

        <nav className="flex-1 px-3 py-4 overflow-y-auto">
          <ul className="space-y-2">
            {navItems.map((item, index) => (
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
                  <span
                    className={cn(
                      "ml-3 whitespace-nowrap transition-opacity",
                      open ? "opacity-100" : "opacity-0 md:group-hover:opacity-100"
                    )}
                  >
                    {item.label}
                  </span>
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        <div className="p-4 border-t border-white/10">
          <div className={cn(
            "flex items-center",
            open ? "justify-between" : "justify-center"
          )}>
            {open ? (
              <>
                <div className="flex flex-col">
                  <span className="text-sm font-medium">Kaiyan Mistree</span>
                  <span className="text-xs text-white/70">PropSimplify Real Estate LLC</span>
                </div>
                <div className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center">
                  <span className="text-xs font-medium">KM</span>
                </div>
              </>
            ) : (
              <div className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center">
                <span className="text-xs font-medium">KM</span>
              </div>
            )}
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;

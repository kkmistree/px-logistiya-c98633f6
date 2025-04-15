
import { NavLink } from "react-router-dom";
import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";

export interface NavItem {
  icon: LucideIcon;
  label: string;
  path: string;
}

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
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavigationItems;

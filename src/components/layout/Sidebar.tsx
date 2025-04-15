
import { cn } from "@/lib/utils";
import { ChevronRight } from "lucide-react";
import CurrencySwitcher from "@/components/currency/CurrencySwitcher";
import NavigationItems, { navItems } from "./sidebar/NavigationItems";
import UserMenu from "./sidebar/UserMenu";

interface SidebarProps {
  open: boolean;
  setOpen: (open: boolean) => void;
}

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
                <span className="font-semibold text-xl">propX</span>
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

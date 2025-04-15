
import { useState } from "react";
import { Link } from "react-router-dom";
import { User, CreditCard, Settings, LogOut } from "lucide-react";
import { cn } from "@/lib/utils";
import { 
  Popover, 
  PopoverContent, 
  PopoverTrigger 
} from "@/components/ui/popover";

interface UserMenuProps {
  open: boolean;
}

const UserMenu = ({ open }: UserMenuProps) => {
  const [userMenuOpen, setUserMenuOpen] = useState(false);

  return (
    <div className="p-4 border-t border-white/10">
      <Popover open={userMenuOpen} onOpenChange={setUserMenuOpen}>
        <PopoverTrigger asChild>
          <button 
            className={cn(
              "w-full flex items-center",
              open ? "justify-between" : "justify-center",
              "hover:bg-white/10 rounded-lg p-2 transition-colors"
            )}
          >
            {open ? (
              <>
                <div className="flex flex-col items-start">
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
          </button>
        </PopoverTrigger>
        <PopoverContent 
          className="w-56 bg-black border border-white/10 text-white p-0" 
          align="end" 
          side="top"
          sideOffset={10}
        >
          <div className="p-2">
            <div className="border-b border-white/10 pb-2 mb-2">
              <div className="flex items-center space-x-2 p-2">
                <div className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center">
                  <span className="text-xs font-medium">KM</span>
                </div>
                <div>
                  <p className="text-sm font-medium">Kaiyan Mistree</p>
                  <p className="text-xs text-white/70">kaiyan@propsimplify.com</p>
                </div>
              </div>
            </div>
            
            <div className="space-y-1">
              <Link 
                to="/profile" 
                className="flex items-center space-x-2 hover:bg-white/10 w-full rounded-md p-2 text-left text-sm"
                onClick={() => setUserMenuOpen(false)}
              >
                <User size={16} />
                <span>My Profile</span>
              </Link>
              <Link 
                to="/billing" 
                className="flex items-center space-x-2 hover:bg-white/10 w-full rounded-md p-2 text-left text-sm"
                onClick={() => setUserMenuOpen(false)}
              >
                <CreditCard size={16} />
                <span>Billing</span>
              </Link>
              <Link 
                to="/user-settings" 
                className="flex items-center space-x-2 hover:bg-white/10 w-full rounded-md p-2 text-left text-sm"
                onClick={() => setUserMenuOpen(false)}
              >
                <Settings size={16} />
                <span>Settings</span>
              </Link>
            </div>
            
            <div className="border-t border-white/10 pt-2 mt-2">
              <button className="flex items-center space-x-2 hover:bg-white/10 w-full rounded-md p-2 text-left text-sm text-red-400">
                <LogOut size={16} />
                <span>Sign out</span>
              </button>
            </div>
          </div>
        </PopoverContent>
      </Popover>
    </div>
  );
};

export default UserMenu;

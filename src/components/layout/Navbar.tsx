
import { useState } from "react";
import { useLocation } from "react-router-dom";
import { Search, Bell, MessageSquare, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useIsMobile } from "@/hooks/use-mobile";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

interface NavbarProps {
  sidebarOpen: boolean;
  setSidebarOpen: (open: boolean) => void;
  useMobileDrawer?: boolean;
}

const Navbar = ({ sidebarOpen, setSidebarOpen, useMobileDrawer = false }: NavbarProps) => {
  const [searchOpen, setSearchOpen] = useState(false);
  const location = useLocation();
  const isMobile = useIsMobile();
  
  // Check if we're on the search page
  const isSearchPage = location.pathname === "/search";

  return (
    <div className="sticky top-0 z-30 bg-white border-b border-estate-muted flex items-center justify-between h-14 sm:h-16 px-3 sm:px-4 md:px-6 shadow-sm w-full">
      <div className="flex items-center">
        <Button
          variant="ghost"
          size="icon"
          className="mr-2"
          onClick={() => setSidebarOpen(!sidebarOpen)}
        >
          {sidebarOpen ? <X size={isMobile ? 18 : 20} /> : <Menu size={isMobile ? 18 : 20} />}
        </Button>
        
        {!isSearchPage && !isMobile && (
          <div className="hidden md:flex items-center">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400" size={18} />
              <Input
                type="search"
                placeholder="Search properties, clients, deals..."
                className="pl-10 w-[300px] bg-slate-50"
              />
            </div>
          </div>
        )}
        
        {!isSearchPage && isMobile && (
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setSearchOpen(!searchOpen)}
          >
            <Search size={18} />
          </Button>
        )}
      </div>

      {searchOpen && !isSearchPage && (
        <div className="absolute top-14 sm:top-16 left-0 right-0 bg-white p-3 shadow-md md:hidden z-50">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400" size={16} />
            <Input
              type="search"
              placeholder="Search properties, clients, deals..."
              className="pl-10 w-full bg-slate-50 h-9"
              autoFocus
            />
          </div>
        </div>
      )}

      <div className="flex items-center space-x-1 sm:space-x-2">
        <Button variant="ghost" size="icon" className="relative h-8 w-8 sm:h-9 sm:w-9">
          <Bell size={isMobile ? 18 : 20} />
          <span className="absolute top-0 right-0 w-2 h-2 bg-estate-danger rounded-full"></span>
        </Button>
        
        <Button variant="ghost" size="icon" className="relative h-8 w-8 sm:h-9 sm:w-9">
          <MessageSquare size={isMobile ? 18 : 20} />
          <span className="absolute top-0 right-0 w-2 h-2 bg-estate-secondary rounded-full"></span>
        </Button>
        
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="icon" className="rounded-full h-8 w-8 sm:h-9 sm:w-9">
              <Avatar className="h-7 w-7 sm:h-8 sm:w-8">
                <AvatarImage src="/placeholder.svg" alt="User" />
                <AvatarFallback>AK</AvatarFallback>
              </Avatar>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-48 z-50">
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Profile</DropdownMenuItem>
            <DropdownMenuItem>Settings</DropdownMenuItem>
            <DropdownMenuItem>Dashboard</DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Sign out</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
};

export default Navbar;

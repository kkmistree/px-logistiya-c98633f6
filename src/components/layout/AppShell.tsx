
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import { CurrencyProvider } from "@/contexts/CurrencyContext";
import { useIsMobile } from "@/hooks/use-mobile";
import { Drawer, DrawerContent } from "@/components/ui/drawer";

interface AppShellProps {
  children: React.ReactNode;
}

const AppShell = ({ children }: AppShellProps) => {
  const isMobile = useIsMobile();
  const [sidebarOpen, setSidebarOpen] = useState(!isMobile);
  const [useMobileDrawer, setUseMobileDrawer] = useState(false);

  // Close sidebar by default on mobile devices and detect if we should use a drawer
  useEffect(() => {
    if (isMobile) {
      setSidebarOpen(false);
      
      // Check if we're on a touch device (most likely a mobile device)
      const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
      setUseMobileDrawer(isTouchDevice && window.innerWidth < 640);
    } else {
      setSidebarOpen(true);
      setUseMobileDrawer(false);
    }
  }, [isMobile]);

  return (
    <CurrencyProvider>
      <div className="min-h-screen bg-estate-background flex">
        {/* Standard sidebar for desktop and tablets */}
        {!useMobileDrawer && (
          <Sidebar open={sidebarOpen} setOpen={setSidebarOpen} />
        )}
        
        <div className={cn(
          "flex-1 flex flex-col transition-all duration-300 ease-in-out",
          !useMobileDrawer && sidebarOpen ? "md:ml-64" : "md:ml-16",
          "w-full" // Ensure the content takes full width
        )}>
          <Navbar 
            sidebarOpen={sidebarOpen} 
            setSidebarOpen={setSidebarOpen} 
            useMobileDrawer={useMobileDrawer}
          />
          <main className="flex-1 p-2 sm:p-4 md:p-6 overflow-auto max-w-full">
            {children}
          </main>
        </div>

        {/* Mobile drawer for small screens */}
        {useMobileDrawer && (
          <Drawer>
            <DrawerContent className="h-[80vh]">
              <div className="p-4 h-full overflow-auto">
                <Sidebar open={true} setOpen={() => {}} />
              </div>
            </DrawerContent>
          </Drawer>
        )}
      </div>
    </CurrencyProvider>
  );
};

export default AppShell;

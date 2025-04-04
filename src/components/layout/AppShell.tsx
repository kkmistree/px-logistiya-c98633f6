
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import { CurrencyProvider } from "@/contexts/CurrencyContext";
import { useIsMobile } from "@/hooks/use-mobile";

interface AppShellProps {
  children: React.ReactNode;
}

const AppShell = ({ children }: AppShellProps) => {
  const isMobile = useIsMobile();
  const [sidebarOpen, setSidebarOpen] = useState(!isMobile);

  // Close sidebar by default on mobile devices
  useEffect(() => {
    if (isMobile) {
      setSidebarOpen(false);
    } else {
      setSidebarOpen(true);
    }
  }, [isMobile]);

  return (
    <CurrencyProvider>
      <div className="min-h-screen bg-estate-background flex">
        <Sidebar open={sidebarOpen} setOpen={setSidebarOpen} />
        
        <div className={cn(
          "flex-1 flex flex-col transition-all duration-300 ease-in-out",
          sidebarOpen ? "md:ml-64" : "md:ml-16",
          "w-full" // Ensure the content takes full width
        )}>
          <Navbar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
          <main className="flex-1 p-3 sm:p-4 md:p-6 overflow-auto max-w-full">
            {children}
          </main>
        </div>
      </div>
    </CurrencyProvider>
  );
};

export default AppShell;

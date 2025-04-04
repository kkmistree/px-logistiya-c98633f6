
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import MLS from "./pages/MLS";
import NotFound from "./pages/NotFound";
import Search from "./pages/Search";
import Profile from "./pages/Profile";
import Billing from "./pages/Billing";
import UserSettings from "./pages/UserSettings";
import Clients from "./pages/Clients";
import Developers from "./pages/Developers";
import Deals from "./pages/Deals";
import DealDetail from "./pages/DealDetail";
import Analytics from "./pages/Analytics";
import Messages from "./pages/Messages";
import Knowledge from "./pages/Knowledge";
import Settings from "./pages/Settings";
import Support from "./pages/Support";
import { useEffect } from "react";

const queryClient = new QueryClient();

const App = () => {
  // Add viewport meta tag for better mobile scaling
  useEffect(() => {
    const metaViewport = document.querySelector('meta[name="viewport"]');
    if (metaViewport) {
      metaViewport.setAttribute('content', 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no');
    }
    
    // Add touch-action for better mobile scrolling 
    document.documentElement.style.touchAction = "manipulation";
    
    // Prevent text scaling on orientation change on iOS
    const handleOrientationChange = () => {
      document.documentElement.style.fontSize = "100%";
    };
    
    window.addEventListener('orientationchange', handleOrientationChange);
    
    return () => {
      window.removeEventListener('orientationchange', handleOrientationChange);
    };
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/mls" element={<MLS />} />
            <Route path="/search" element={<Search />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/billing" element={<Billing />} />
            <Route path="/user-settings" element={<UserSettings />} />
            <Route path="/clients" element={<Clients />} />
            <Route path="/developers" element={<Developers />} />
            <Route path="/deals" element={<Deals />} />
            <Route path="/deals/:dealId" element={<DealDetail />} />
            <Route path="/analytics" element={<Analytics />} />
            <Route path="/messages" element={<Messages />} />
            <Route path="/knowledge" element={<Knowledge />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/support" element={<Support />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;

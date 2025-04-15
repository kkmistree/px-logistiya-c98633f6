
import React from "react";
import MandatesSummary from "@/components/home/MandatesSummary";
import ListingPerformance from "@/components/home/ListingPerformance";
import TasksReminders from "@/components/home/TasksReminders";
import CommissionTracker from "@/components/home/CommissionTracker";
import ActiveDeals from "@/components/home/ActiveDeals";
import UpcomingViewings from "@/components/home/UpcomingViewings";
import DeveloperWatchlist from "@/components/home/DeveloperWatchlist";
import MarketInsights from "@/components/home/MarketInsights";
import AIAssistantFeed from "@/components/home/AIAssistantFeed";
import NewsRegulationUpdates from "@/components/home/NewsRegulationUpdates";
import { Property } from "@/types/property";

interface DashboardWidgetsProps {
  onAddListing?: () => void;
  onAddClient?: () => void;
  onViewProperty?: (property: Property) => void;
}

const DashboardWidgets = ({ onAddListing, onAddClient, onViewProperty }: DashboardWidgetsProps) => {
  return (
    <div className="space-y-6">
      {/* Primary Metrics Row */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
        <div className="md:col-span-1">
          <MandatesSummary />
        </div>
        <div className="md:col-span-1">
          <ListingPerformance onAddListing={onAddListing} onViewProperty={onViewProperty} />
        </div>
        <div className="md:col-span-1">
          <TasksReminders />
        </div>
      </div>
      
      {/* Active Deals & Viewings Row */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
        <div className="md:col-span-1">
          <ActiveDeals />
        </div>
        <div className="md:col-span-1">
          <UpcomingViewings />
        </div>
      </div>
      
      {/* Market Intelligence Row */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
        <div className="md:col-span-1">
          <MarketInsights />
        </div>
        <div className="md:col-span-1">
          <DeveloperWatchlist onViewProperty={onViewProperty} />
        </div>
      </div>
      
      {/* AI & News Row */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
        <div className="md:col-span-1">
          <AIAssistantFeed />
        </div>
        <div className="md:col-span-1">
          <NewsRegulationUpdates />
        </div>
      </div>
    </div>
  );
};

export default DashboardWidgets;


import React from "react";
import MandatesSummary from "@/components/home/MandatesSummary";
import ListingPerformance from "@/components/home/ListingPerformance";
import TasksReminders from "@/components/home/TasksReminders";
import CommissionTracker from "@/components/home/CommissionTracker";
import ActiveDeals from "@/components/home/ActiveDeals";
import UpcomingViewings from "@/components/home/UpcomingViewings";
import DeveloperWatchlist from "@/components/home/DeveloperWatchlist";
import MarketInsights from "@/components/home/MarketInsights";
import BrokerLeaderboard from "@/components/home/BrokerLeaderboard";
import AIAssistantFeed from "@/components/home/AIAssistantFeed";
import NewsRegulationUpdates from "@/components/home/NewsRegulationUpdates";

const DashboardWidgets = () => {
  return (
    <>
      {/* Level 2: Main Widgets Grid - First Row */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="md:col-span-1">
          <MandatesSummary />
        </div>
        <div className="md:col-span-1">
          <ListingPerformance />
        </div>
        <div className="md:col-span-1">
          <TasksReminders />
        </div>
      </div>
      
      {/* Level 2: Main Widgets Grid - Second Row */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="md:col-span-1">
          <CommissionTracker />
        </div>
        <div className="md:col-span-1">
          <ActiveDeals />
        </div>
        <div className="md:col-span-1">
          <UpcomingViewings />
        </div>
      </div>
      
      {/* Level 2: Main Widgets Grid - Third Row */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="md:col-span-1">
          <DeveloperWatchlist />
        </div>
        <div className="md:col-span-1">
          <MarketInsights />
        </div>
        <div className="md:col-span-1">
          <BrokerLeaderboard />
        </div>
      </div>
      
      {/* Level 3: Personalized Feed */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="md:col-span-1">
          <AIAssistantFeed />
        </div>
        <div className="md:col-span-1">
          <NewsRegulationUpdates />
        </div>
      </div>
    </>
  );
};

export default DashboardWidgets;

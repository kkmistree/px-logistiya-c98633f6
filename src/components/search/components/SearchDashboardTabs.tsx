
import { ReactNode } from 'react';
import { Zap, LineChart, TrendingUp, Clock, BookmarkPlus } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface SearchDashboardTabsProps {
  activeTab: string;
  setActiveTab: (value: string) => void;
  children: ReactNode;
}

const SearchDashboardTabs = ({ activeTab, setActiveTab, children }: SearchDashboardTabsProps) => {
  return (
    <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
      <TabsList className="bg-slate-100 p-1 mb-6 flex flex-wrap gap-2">
        <TabsTrigger 
          value="discover" 
          className="data-[state=active]:bg-estate-primary data-[state=active]:text-white"
        >
          <Zap size={16} className="mr-2" />
          <span>Discovery</span>
        </TabsTrigger>
        <TabsTrigger 
          value="radar" 
          className="data-[state=active]:bg-estate-primary data-[state=active]:text-white"
        >
          <LineChart size={16} className="mr-2" />
          <span>Investment Radar</span>
        </TabsTrigger>
        <TabsTrigger 
          value="trends" 
          className="data-[state=active]:bg-estate-primary data-[state=active]:text-white"
        >
          <TrendingUp size={16} className="mr-2" />
          <span>Market Trends</span>
        </TabsTrigger>
        <TabsTrigger 
          value="recent" 
          className="data-[state=active]:bg-estate-primary data-[state=active]:text-white"
        >
          <Clock size={16} className="mr-2" />
          <span>Recent</span>
        </TabsTrigger>
        <TabsTrigger 
          value="saved" 
          className="data-[state=active]:bg-estate-primary data-[state=active]:text-white"
        >
          <BookmarkPlus size={16} className="mr-2" />
          <span>Saved</span>
        </TabsTrigger>
      </TabsList>
      {children}
    </Tabs>
  );
};

export default SearchDashboardTabs;

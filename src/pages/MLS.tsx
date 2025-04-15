
import { useState, useEffect } from "react";
import AppShell from "@/components/layout/AppShell";
import AIAssistant from "@/components/home/AIAssistant";
import { getProperties } from "@/data/mocks/properties";
import { PropertyFilter } from "@/types/property";
import { toast } from "sonner";
import { useIsMobile } from "@/hooks/use-mobile";
import MLSHeader from "./mls/MLSHeader";
import MLSContent from "./mls/MLSContent";
import MLSModals from "./mls/MLSModals";

const MLS = () => {
  const [filters, setFilters] = useState<PropertyFilter>({});
  const [viewMode, setViewMode] = useState<"grid" | "list" | "split">("grid");
  const [filtersVisible, setFiltersVisible] = useState(true);
  const [activeTab, setActiveTab] = useState("all");
  const [savedSearch, setSavedSearch] = useState(false);
  const [selectedProperty, setSelectedProperty] = useState<any>(null);
  const [showDetailModal, setShowDetailModal] = useState(false);
  const [showScorecardModal, setShowScorecardModal] = useState(false);
  const isMobile = useIsMobile();
  
  const properties = getProperties(filters);

  const handleSearch = (query: string) => {
    console.log("Searching for:", query);
    toast.success(`Smart search executed for: ${query}`);
  };

  const handleSaveSearch = () => {
    setSavedSearch(!savedSearch);
    if (!savedSearch) {
      toast.success("Search saved! You'll receive alerts for new matching assets");
    } else {
      toast.info("Search removed from saved searches");
    }
  };

  // Automatically hide filters on mobile
  useEffect(() => {
    if (isMobile) {
      setFiltersVisible(false);
    }
  }, [isMobile]);

  // Reset filters visibility when switching tabs on mobile
  useEffect(() => {
    if (isMobile && filtersVisible) {
      setFiltersVisible(false);
    }
  }, [activeTab, isMobile]);

  return (
    <AppShell>
      <div className="space-y-4">
        <MLSHeader 
          viewMode={viewMode}
          setViewMode={setViewMode}
          filtersVisible={filtersVisible}
          setFiltersVisible={setFiltersVisible}
          onSearch={handleSearch}
          onSaveSearch={handleSaveSearch}
          savedSearch={savedSearch}
        />
        
        <div className="bg-white rounded-lg shadow-sm p-3 sm:p-4 border border-slate-200">
          <MLSContent 
            properties={properties}
            filters={filters}
            setFilters={setFilters}
            viewMode={viewMode}
            filtersVisible={filtersVisible}
            activeTab={activeTab}
            onTabChange={setActiveTab}
            onPropertySelect={setSelectedProperty}
          />
        </div>
      </div>
      
      <MLSModals 
        selectedProperty={selectedProperty}
        showDetailModal={showDetailModal}
        setShowDetailModal={setShowDetailModal}
        showScorecardModal={showScorecardModal}
        setShowScorecardModal={setShowScorecardModal}
      />
      
      <AIAssistant />
    </AppShell>
  );
};

export default MLS;

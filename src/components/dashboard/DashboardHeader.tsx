
import React from "react";
import QuickActions from "@/components/home/QuickActions";

interface DashboardHeaderProps {
  getCurrentDate: () => string;
  onAddListing: () => void;
  onAddClient: () => void;
}

const DashboardHeader = ({ getCurrentDate, onAddListing, onAddClient }: DashboardHeaderProps) => {
  return (
    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 sm:gap-4">
      <div>
        <h1 className="text-xl sm:text-2xl font-bold text-estate-primary">Command Center</h1>
        <p className="text-sm sm:text-base text-slate-500">{getCurrentDate()}</p>
      </div>
      <div className="w-full sm:w-auto">
        <QuickActions 
          onAddListing={onAddListing}
          onAddClient={onAddClient}
        />
      </div>
    </div>
  );
};

export default DashboardHeader;

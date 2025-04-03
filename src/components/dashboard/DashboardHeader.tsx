
import React from "react";
import QuickActions from "@/components/home/QuickActions";

interface DashboardHeaderProps {
  getCurrentDate: () => string;
  onAddListing: () => void;
  onAddClient: () => void;
}

const DashboardHeader = ({ getCurrentDate, onAddListing, onAddClient }: DashboardHeaderProps) => {
  return (
    <div className="flex justify-between items-center">
      <div>
        <h1 className="text-2xl font-bold text-estate-primary">Command Center</h1>
        <p className="text-slate-500">{getCurrentDate()}</p>
      </div>
      <div>
        <QuickActions 
          onAddListing={onAddListing}
          onAddClient={onAddClient}
        />
      </div>
    </div>
  );
};

export default DashboardHeader;

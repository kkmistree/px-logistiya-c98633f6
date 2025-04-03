
import React from "react";
import { Button } from "@/components/ui/button";
import { Bell, FileDown } from "lucide-react";

const DeveloperHeader = () => {
  return (
    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
      <div>
        <h1 className="text-2xl font-bold text-estate-primary">Developer Hub</h1>
        <p className="text-slate-500">Browse and manage developer projects, units, and launches</p>
      </div>
      
      <div className="flex gap-2 w-full sm:w-auto">
        <Button variant="outline">
          <Bell size={18} className="mr-2" />
          <span>Launch Alerts</span>
        </Button>
        <Button variant="outline">
          <FileDown size={18} className="mr-2" />
          <span>Export</span>
        </Button>
        <Button>
          Register Project
        </Button>
      </div>
    </div>
  );
};

export default DeveloperHeader;

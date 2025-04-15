
import React from "react";
import { Button } from "@/components/ui/button";
import { Bell, FileDown } from "lucide-react";

const DeveloperHeader = () => {
  return (
    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
      <div>
        <h1 className="text-2xl font-bold text-estate-primary">KSA Industrial Developer Hub</h1>
        <p className="text-slate-500">Browse and manage industrial developers, projects, and investment opportunities across KSA</p>
      </div>
      
      <div className="flex gap-2 w-full sm:w-auto">
        <Button variant="outline">
          <Bell size={18} className="mr-2" />
          <span>Project Alerts</span>
        </Button>
        <Button variant="outline">
          <FileDown size={18} className="mr-2" />
          <span>Export</span>
        </Button>
        <Button>
          Register Industrial Project
        </Button>
      </div>
    </div>
  );
};

export default DeveloperHeader;

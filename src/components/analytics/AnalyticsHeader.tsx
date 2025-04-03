
import React from "react";
import { Button } from "@/components/ui/button";
import { FileDown, Share2 } from "lucide-react";

const AnalyticsHeader = () => {
  return (
    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
      <div>
        <h1 className="text-2xl font-bold text-estate-primary">Analytics</h1>
        <p className="text-slate-500">Business intelligence and performance metrics</p>
      </div>
      
      <div className="flex gap-2 w-full sm:w-auto">
        <Button variant="outline">
          <FileDown size={18} className="mr-2" />
          <span>Export</span>
        </Button>
        <Button variant="outline">
          <Share2 size={18} className="mr-2" />
          <span>Share</span>
        </Button>
      </div>
    </div>
  );
};

export default AnalyticsHeader;

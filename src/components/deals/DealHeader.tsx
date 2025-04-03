
import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, PlusCircle, Filter } from "lucide-react";

const DealHeader = () => {
  return (
    <div className="space-y-4">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-2xl font-bold text-estate-primary">Deal Rooms</h1>
          <p className="text-slate-500">Manage your transactions from initial offer to closing</p>
        </div>
        
        <div className="flex gap-2 w-full sm:w-auto">
          <Button onClick={() => {}}>
            <PlusCircle size={18} className="mr-2" />
            <span>New Deal</span>
          </Button>
        </div>
      </div>
      
      <div className="flex flex-col sm:flex-row justify-between gap-4">
        <div className="relative w-full sm:max-w-md">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400" size={18} />
          <Input
            type="search"
            placeholder="Search deals by client, property, or reference..."
            className="pl-10 w-full"
          />
        </div>
        
        <div className="flex gap-2">
          <Button variant="outline">
            <Filter size={18} className="mr-2" />
            <span>Filter</span>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default DealHeader;

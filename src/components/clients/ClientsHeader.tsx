
import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, UserPlus, Filter } from "lucide-react";

interface ClientsHeaderProps {
  onAddClient: () => void;
}

const ClientsHeader = ({ onAddClient }: ClientsHeaderProps) => {
  return (
    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
      <div>
        <h1 className="text-2xl font-bold text-estate-primary">Clients & CRM</h1>
        <p className="text-slate-500">Manage your clients and interactions</p>
      </div>
      
      <div className="flex flex-col sm:flex-row gap-2 w-full sm:w-auto">
        <div className="relative w-full sm:w-auto">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400" size={18} />
          <Input
            type="search"
            placeholder="Search clients..."
            className="pl-10 w-full"
          />
        </div>
        
        <Button variant="outline" size="icon">
          <Filter size={18} />
        </Button>
        
        <Button onClick={onAddClient}>
          <UserPlus size={18} className="mr-2" />
          Add Client
        </Button>
      </div>
    </div>
  );
};

export default ClientsHeader;

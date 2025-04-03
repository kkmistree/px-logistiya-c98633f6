
import React from "react";
import { ClientFilter } from "@/types/client";
import HeaderTitle from "./header/HeaderTitle";
import SearchBar from "./header/SearchBar";
import FilterPopover from "./header/FilterPopover";
import ActionButtons from "./header/ActionButtons";

interface ClientsHeaderProps {
  onAddClient: () => void;
  onSearch: (query: string) => void;
  onFilterChange: (filters: ClientFilter) => void;
  onImportExport: () => void;
}

const ClientsHeader = ({ 
  onAddClient, 
  onSearch, 
  onFilterChange, 
  onImportExport 
}: ClientsHeaderProps) => {
  return (
    <div className="space-y-4">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <HeaderTitle />
        
        <div className="flex flex-col sm:flex-row gap-2 w-full sm:w-auto">
          <SearchBar onSearch={onSearch} />
          <FilterPopover onFilterChange={onFilterChange} />
          <ActionButtons 
            onAddClient={onAddClient} 
            onImportExport={onImportExport} 
          />
        </div>
      </div>
    </div>
  );
};

export default ClientsHeader;

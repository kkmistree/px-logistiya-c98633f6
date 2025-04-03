
import React, { useState } from "react";
import { Filter, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { ClientFilter } from "@/types/client";

interface FilterPopoverProps {
  onFilterChange: (filters: ClientFilter) => void;
}

const FilterPopover = ({ onFilterChange }: FilterPopoverProps) => {
  const [filters, setFilters] = useState<ClientFilter>({});
  const [activeFilters, setActiveFilters] = useState<string[]>([]);

  const applyFilter = (newFilters: ClientFilter) => {
    const updatedFilters = { ...filters, ...newFilters };
    setFilters(updatedFilters);
    onFilterChange(updatedFilters);
    
    // Update active filters display
    const activeFiltersArray: string[] = [];
    
    if (updatedFilters.types && updatedFilters.types.length > 0) {
      activeFiltersArray.push(`Type: ${updatedFilters.types.length}`);
    }
    
    if (updatedFilters.stage && updatedFilters.stage.length > 0) {
      activeFiltersArray.push(`Stage: ${updatedFilters.stage.length}`);
    }

    if (updatedFilters.location && updatedFilters.location.length > 0) {
      activeFiltersArray.push(`Location: ${updatedFilters.location.length}`);
    }
    
    if (updatedFilters.budget?.min || updatedFilters.budget?.max) {
      activeFiltersArray.push("Budget");
    }
    
    if (updatedFilters.lastContactedDateRange?.from || updatedFilters.lastContactedDateRange?.to) {
      activeFiltersArray.push("Last Contact");
    }
    
    setActiveFilters(activeFiltersArray);
  };

  const clearFilters = () => {
    setFilters({});
    setActiveFilters([]);
    onFilterChange({});
  };

  return (
    <>
      <Popover>
        <PopoverTrigger asChild>
          <Button variant="outline" className="flex gap-2 items-center">
            <Filter size={18} />
            <span className="hidden sm:inline">Filter</span>
            {activeFilters.length > 0 && (
              <Badge className="bg-estate-primary ml-1">{activeFilters.length}</Badge>
            )}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-80 p-4" align="end">
          <div className="space-y-4">
            <h3 className="font-medium">Filter Clients</h3>
            
            <div className="space-y-2">
              <Label htmlFor="client-type">Client Type</Label>
              <Select 
                onValueChange={(value) => applyFilter({ types: [value] })}
                value={filters.types?.[0] || ""}
              >
                <SelectTrigger id="client-type">
                  <SelectValue placeholder="All Types" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="">All Types</SelectItem>
                  <SelectItem value="buyer">Buyers</SelectItem>
                  <SelectItem value="seller">Sellers</SelectItem>
                  <SelectItem value="investor">Investors</SelectItem>
                  <SelectItem value="tenant">Tenants</SelectItem>
                  <SelectItem value="landlord">Landlords</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="client-stage">Client Stage</Label>
              <Select 
                onValueChange={(value) => applyFilter({ stage: [value] })}
                value={filters.stage?.[0] || ""}
              >
                <SelectTrigger id="client-stage">
                  <SelectValue placeholder="All Stages" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="">All Stages</SelectItem>
                  <SelectItem value="new">New</SelectItem>
                  <SelectItem value="contacted">Contacted</SelectItem>
                  <SelectItem value="qualifying">Qualifying</SelectItem>
                  <SelectItem value="matched">Matched</SelectItem>
                  <SelectItem value="viewing">Viewing</SelectItem>
                  <SelectItem value="offer">Offer</SelectItem>
                  <SelectItem value="closed">Closed</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            <div className="space-y-2">
              <Label>Last Contacted</Label>
              <Select 
                onValueChange={(value) => {
                  const today = new Date();
                  const fromDate = new Date();
                  
                  if (value === "today") {
                    // Today
                  } else if (value === "week") {
                    fromDate.setDate(today.getDate() - 7);
                  } else if (value === "month") {
                    fromDate.setMonth(today.getMonth() - 1);
                  } else if (value === "quarter") {
                    fromDate.setMonth(today.getMonth() - 3);
                  } else {
                    return applyFilter({ lastContactedDateRange: undefined });
                  }
                  
                  applyFilter({ 
                    lastContactedDateRange: {
                      from: value ? fromDate.toISOString() : undefined,
                      to: today.toISOString()
                    } 
                  });
                }}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Any time" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="">Any time</SelectItem>
                  <SelectItem value="today">Today</SelectItem>
                  <SelectItem value="week">Last 7 days</SelectItem>
                  <SelectItem value="month">Last 30 days</SelectItem>
                  <SelectItem value="quarter">Last 90 days</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            <div className="space-y-2">
              <Label>Mandate Status</Label>
              <div className="grid grid-cols-2 gap-2">
                <div className="flex items-center space-x-2">
                  <Checkbox id="has-mandate" />
                  <label
                    htmlFor="has-mandate"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    Has Mandate
                  </label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="no-mandate" />
                  <label
                    htmlFor="no-mandate"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    No Mandate
                  </label>
                </div>
              </div>
            </div>
            
            <div className="flex justify-between pt-2">
              <Button variant="ghost" onClick={clearFilters}>
                Reset Filters
              </Button>
              <Button 
                onClick={() => onFilterChange(filters)}
              >
                Apply Filters
              </Button>
            </div>
          </div>
        </PopoverContent>
      </Popover>
      
      {activeFilters.length > 0 && (
        <div className="flex flex-wrap gap-2">
          {activeFilters.map((filter) => (
            <Badge key={filter} variant="secondary" className="flex items-center gap-1 px-3 py-1">
              {filter}
              <X size={14} className="cursor-pointer" onClick={() => {
                // This is just a placeholder - in a real app you'd clear this specific filter
                // and update the filter state
              }} />
            </Badge>
          ))}
          <Button variant="ghost" size="sm" className="h-7" onClick={clearFilters}>
            Clear All
          </Button>
        </div>
      )}
    </>
  );
};

export default FilterPopover;

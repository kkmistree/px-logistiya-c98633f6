
import { useState } from "react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";

interface MarketPerformanceFiltersProps {
  propertyType: string;
  setPropertyType: (value: string) => void;
  status: string;
  setStatus: (value: string) => void;
  year: string;
  setYear: (value: string) => void;
  bedroom: string;
  setBedroom: (value: string) => void;
  area: string;
  setArea: (value: string) => void;
  transactionType: string;
  setTransactionType: (value: string) => void;
}

const MarketPerformanceFilters = ({
  propertyType,
  setPropertyType,
  status,
  setStatus,
  year,
  setYear,
  bedroom,
  setBedroom,
  area,
  setArea,
  transactionType,
  setTransactionType,
}: MarketPerformanceFiltersProps) => {
  return (
    <>
      {/* Filters */}
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-3">
        <div>
          <Select value={propertyType} onValueChange={setPropertyType}>
            <SelectTrigger>
              <SelectValue placeholder="Property Type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All</SelectItem>
              <SelectItem value="apartment">Apartment</SelectItem>
              <SelectItem value="villa">Villa</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div>
          <Select value={status} onValueChange={setStatus}>
            <SelectTrigger>
              <SelectValue placeholder="Property Status" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All</SelectItem>
              <SelectItem value="readyBuilt">Ready built</SelectItem>
              <SelectItem value="offPlan">Off-plan</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div>
          <Select value={area} onValueChange={setArea}>
            <SelectTrigger>
              <SelectValue placeholder="Choose area" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All areas</SelectItem>
              <SelectItem value="dubai-marina">Dubai Marina</SelectItem>
              <SelectItem value="downtown">Downtown Dubai</SelectItem>
              <SelectItem value="business-bay">Business Bay</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div>
          <Select value={year} onValueChange={setYear}>
            <SelectTrigger>
              <SelectValue placeholder="Year" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="2025">2025 (Year-to-date)</SelectItem>
              <SelectItem value="2024">2024</SelectItem>
              <SelectItem value="2023">2023</SelectItem>
              <SelectItem value="2022">2022</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div>
          <Select value={bedroom} onValueChange={setBedroom}>
            <SelectTrigger>
              <SelectValue placeholder="Bedrooms" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All beds</SelectItem>
              <SelectItem value="studio">Studio</SelectItem>
              <SelectItem value="1">1 Bedroom</SelectItem>
              <SelectItem value="2">2 Bedrooms</SelectItem>
              <SelectItem value="3">3 Bedrooms</SelectItem>
              <SelectItem value="4+">4+ Bedrooms</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      {/* Transaction type toggle */}
      <div className="flex gap-2 justify-center">
        <Button 
          variant={transactionType === "sales" ? "default" : "outline"} 
          onClick={() => setTransactionType("sales")}
          className="bg-estate-primary text-white rounded-full px-6"
        >
          Sales transactions
        </Button>
        <Button 
          variant={transactionType === "rental" ? "default" : "outline"} 
          onClick={() => setTransactionType("rental")}
          className={transactionType === "rental" ? "bg-estate-primary text-white rounded-full px-6" : "rounded-full px-6"}
        >
          Rental contracts
        </Button>
      </div>
    </>
  );
};

export default MarketPerformanceFilters;

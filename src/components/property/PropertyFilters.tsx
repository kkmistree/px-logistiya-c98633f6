import { useState } from "react";
import { Slider } from "@/components/ui/slider";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { Checkbox } from "@/components/ui/checkbox";
import { PropertyFilter } from "@/types/property";
import { formatCurrency } from "@/utils/format";

interface PropertyFiltersProps {
  filters: PropertyFilter;
  setFilters: (filters: PropertyFilter) => void;
}

const PropertyFilters = ({ filters, setFilters }: PropertyFiltersProps) => {
  const [priceRange, setPriceRange] = useState<[number, number]>([
    filters.minPrice || 500000,
    filters.maxPrice || 10000000,
  ]);
  
  const [areaRange, setAreaRange] = useState<[number, number]>([
    filters.minArea || 500,
    10000,
  ]);
  
  const [roiRange, setRoiRange] = useState<[number, number]>([
    filters.minROI || 4,
    12,
  ]);
  
  const handlePriceChange = (value: number[]) => {
    setPriceRange([value[0], value[1]]);
  };
  
  const handleAreaChange = (value: number[]) => {
    setAreaRange([value[0], value[1]]);
  };
  
  const handleRoiChange = (value: number[]) => {
    setRoiRange([value[0], value[1]]);
  };
  
  const applyFilters = () => {
    setFilters({
      ...filters,
      minPrice: priceRange[0],
      maxPrice: priceRange[1],
      minArea: areaRange[0],
      minROI: roiRange[0],
    });
  };
  
  const resetFilters = () => {
    setPriceRange([500000, 10000000]);
    setAreaRange([500, 10000]);
    setRoiRange([4, 12]);
    setFilters({});
  };

  const locations = [
    "Dubai Marina",
    "Downtown Dubai",
    "Palm Jumeirah",
    "Jumeirah Village Circle",
    "Business Bay",
    "Dubai Hills Estate",
    "Jumeirah Lake Towers",
    "Arabian Ranches",
    "Damac Hills",
    "Dubailand",
  ];
  
  const developers = [
    "Emaar Properties",
    "Nakheel",
    "Damac Properties",
    "Dubai Properties",
    "Meraas",
    "Azizi Developments",
    "Sobha Realty",
    "Omniyat",
    "Deyaar",
    "Select Group",
  ];
  
  const features = [
    "Sea View",
    "Burj Khalifa View",
    "Private Pool",
    "Private Beach",
    "Gym",
    "Swimming Pool",
    "Security",
    "Parking",
    "Balcony",
    "Smart Home",
    "Furnished",
    "Maid's Room",
  ];

  const handoverYears = ["2024", "2025", "2026", "2027", "2028+"];
  const paymentPlans = ["20/80", "40/60", "50/50", "1% Monthly", "Other"];
  const furnishingOptions = ["Furnished", "Semi-Furnished", "Unfurnished"];
  const listingAgeOptions = ["New Today", "This Week", "This Month", "Any"];

  return (
    <div className="bg-white rounded-lg shadow-sm p-4 h-full overflow-y-auto max-h-[calc(100vh-220px)]">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold text-estate-primary">Filters</h2>
        <Button variant="outline" size="sm" onClick={resetFilters}>
          Reset All
        </Button>
      </div>
      
      <Accordion type="multiple" defaultValue={["price", "type", "bedrooms", "location", "roi"]}>
        <AccordionItem value="price">
          <AccordionTrigger>Price Range</AccordionTrigger>
          <AccordionContent>
            <div className="space-y-4">
              <Slider
                min={500000}
                max={10000000}
                step={100000}
                value={priceRange}
                onValueChange={handlePriceChange}
                className="my-4"
              />
              <div className="flex justify-between">
                <div>
                  <Label>Min</Label>
                  <Input
                    value={formatCurrency(priceRange[0])}
                    readOnly
                    className="text-sm w-32"
                  />
                </div>
                <div>
                  <Label>Max</Label>
                  <Input
                    value={formatCurrency(priceRange[1])}
                    readOnly
                    className="text-sm w-32"
                  />
                </div>
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>
        
        <AccordionItem value="type">
          <AccordionTrigger>Property Type</AccordionTrigger>
          <AccordionContent>
            <div className="grid grid-cols-2 gap-2">
              {["apartment", "villa", "townhouse", "penthouse", "land"].map(type => (
                <div key={type} className="flex items-center space-x-2">
                  <Checkbox
                    id={`type-${type}`}
                    checked={(filters.propertyType || []).includes(type)}
                    onCheckedChange={(checked) => {
                      const currentTypes = filters.propertyType || [];
                      setFilters({
                        ...filters,
                        propertyType: checked
                          ? [...currentTypes, type]
                          : currentTypes.filter(t => t !== type),
                      });
                    }}
                  />
                  <label
                    htmlFor={`type-${type}`}
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 capitalize"
                  >
                    {type}
                  </label>
                </div>
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>
        
        <AccordionItem value="status">
          <AccordionTrigger>Status</AccordionTrigger>
          <AccordionContent>
            <div className="grid grid-cols-1 gap-2">
              {["ready", "off-plan", "resale"].map(status => (
                <div key={status} className="flex items-center space-x-2">
                  <Checkbox
                    id={`status-${status}`}
                    checked={(filters.status || []).includes(status as any)}
                    onCheckedChange={(checked) => {
                      const currentStatus = filters.status || [];
                      setFilters({
                        ...filters,
                        status: checked
                          ? [...currentStatus, status as any]
                          : currentStatus.filter(s => s !== status),
                      });
                    }}
                  />
                  <label
                    htmlFor={`status-${status}`}
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 capitalize"
                  >
                    {status.replace("-", " ")}
                  </label>
                </div>
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>
        
        <AccordionItem value="bedrooms">
          <AccordionTrigger>Bedrooms</AccordionTrigger>
          <AccordionContent>
            <div className="flex flex-wrap gap-2">
              {[0, 1, 2, 3, 4, 5].map(num => (
                <Badge
                  key={num}
                  variant="outline"
                  className={`cursor-pointer ${
                    (filters.bedrooms || []).includes(num)
                      ? "bg-estate-primary text-white"
                      : ""
                  }`}
                  onClick={() => {
                    const current = filters.bedrooms || [];
                    setFilters({
                      ...filters,
                      bedrooms: current.includes(num)
                        ? current.filter(b => b !== num)
                        : [...current, num],
                    });
                  }}
                >
                  {num === 0 ? "Studio" : num === 5 ? "5+" : num}
                </Badge>
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>
        
        <AccordionItem value="area">
          <AccordionTrigger>Area (sq ft)</AccordionTrigger>
          <AccordionContent>
            <div className="space-y-4">
              <Slider
                min={500}
                max={10000}
                step={100}
                value={areaRange}
                onValueChange={handleAreaChange}
                className="my-4"
              />
              <div className="flex justify-between">
                <div>
                  <Label>Min</Label>
                  <Input
                    value={`${areaRange[0]} sqft`}
                    readOnly
                    className="text-sm w-32"
                  />
                </div>
                <div>
                  <Label>Max</Label>
                  <Input
                    value={`${areaRange[1]} sqft`}
                    readOnly
                    className="text-sm w-32"
                  />
                </div>
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>
        
        <AccordionItem value="location">
          <AccordionTrigger>Location</AccordionTrigger>
          <AccordionContent>
            <div className="space-y-2 max-h-40 overflow-y-auto">
              {locations.map(location => (
                <div key={location} className="flex items-center space-x-2">
                  <Checkbox
                    id={`location-${location}`}
                    checked={(filters.location || []).includes(location)}
                    onCheckedChange={(checked) => {
                      const currentLocations = filters.location || [];
                      setFilters({
                        ...filters,
                        location: checked
                          ? [...currentLocations, location]
                          : currentLocations.filter(l => l !== location),
                      });
                    }}
                  />
                  <label
                    htmlFor={`location-${location}`}
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    {location}
                  </label>
                </div>
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>
        
        <AccordionItem value="developer">
          <AccordionTrigger>Developer</AccordionTrigger>
          <AccordionContent>
            <div className="space-y-2 max-h-40 overflow-y-auto">
              {developers.map(developer => (
                <div key={developer} className="flex items-center space-x-2">
                  <Checkbox
                    id={`developer-${developer}`}
                    checked={(filters.developer || []).includes(developer)}
                    onCheckedChange={(checked) => {
                      const currentDevelopers = filters.developer || [];
                      setFilters({
                        ...filters,
                        developer: checked
                          ? [...currentDevelopers, developer]
                          : currentDevelopers.filter(d => d !== developer),
                      });
                    }}
                  />
                  <label
                    htmlFor={`developer-${developer}`}
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    {developer}
                  </label>
                </div>
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>
        
        <AccordionItem value="features">
          <AccordionTrigger>Features</AccordionTrigger>
          <AccordionContent>
            <div className="grid grid-cols-2 gap-2 max-h-48 overflow-y-auto">
              {features.map(feature => (
                <div key={feature} className="flex items-center space-x-2">
                  <Checkbox
                    id={`feature-${feature}`}
                    checked={(filters.features || []).includes(feature)}
                    onCheckedChange={(checked) => {
                      const currentFeatures = filters.features || [];
                      setFilters({
                        ...filters,
                        features: checked
                          ? [...currentFeatures, feature]
                          : currentFeatures.filter(f => f !== feature),
                      });
                    }}
                  />
                  <label
                    htmlFor={`feature-${feature}`}
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    {feature}
                  </label>
                </div>
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>
        
        <AccordionItem value="roi">
          <AccordionTrigger>ROI / Yield %</AccordionTrigger>
          <AccordionContent>
            <div className="space-y-4">
              <Slider
                min={0}
                max={15}
                step={0.5}
                value={roiRange}
                onValueChange={handleRoiChange}
                className="my-4"
              />
              <div className="flex justify-between">
                <div>
                  <Label>Min</Label>
                  <Input
                    value={`${roiRange[0]}%`}
                    readOnly
                    className="text-sm w-32"
                  />
                </div>
                <div>
                  <Label>Max</Label>
                  <Input
                    value={`${roiRange[1]}%`}
                    readOnly
                    className="text-sm w-32"
                  />
                </div>
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>
        
        <AccordionItem value="handover">
          <AccordionTrigger>Handover Date</AccordionTrigger>
          <AccordionContent>
            <div className="space-y-2 max-h-40 overflow-y-auto">
              {handoverYears.map(year => (
                <div key={year} className="flex items-center space-x-2">
                  <Checkbox
                    id={`handover-${year}`}
                    checked={(filters.handoverYear || []).includes(year)}
                    onCheckedChange={(checked) => {
                      const currentYears = filters.handoverYear || [];
                      setFilters({
                        ...filters,
                        handoverYear: checked
                          ? [...currentYears, year]
                          : currentYears.filter(y => y !== year),
                      });
                    }}
                  />
                  <label
                    htmlFor={`handover-${year}`}
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    {year}
                  </label>
                </div>
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>
        
        <AccordionItem value="payment">
          <AccordionTrigger>Payment Plan</AccordionTrigger>
          <AccordionContent>
            <div className="space-y-2 max-h-40 overflow-y-auto">
              {paymentPlans.map(plan => (
                <div key={plan} className="flex items-center space-x-2">
                  <Checkbox
                    id={`plan-${plan}`}
                    checked={(filters.paymentPlan || []).includes(plan)}
                    onCheckedChange={(checked) => {
                      const currentPlans = filters.paymentPlan || [];
                      setFilters({
                        ...filters,
                        paymentPlan: checked
                          ? [...currentPlans, plan]
                          : currentPlans.filter(p => p !== plan),
                      });
                    }}
                  />
                  <label
                    htmlFor={`plan-${plan}`}
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    {plan}
                  </label>
                </div>
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>
        
        <AccordionItem value="reputation">
          <AccordionTrigger>Developer Reputation</AccordionTrigger>
          <AccordionContent>
            <div className="space-y-2">
              <Select
                value={String(filters.developerRating || "0")}
                onValueChange={(value) => {
                  setFilters({
                    ...filters,
                    developerRating: Number(value),
                  });
                }}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select minimum rating" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="0">Any</SelectItem>
                  <SelectItem value="3">3+ Stars</SelectItem>
                  <SelectItem value="4">4+ Stars</SelectItem>
                  <SelectItem value="5">5 Stars</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </AccordionContent>
        </AccordionItem>
        
        <AccordionItem value="listingAge">
          <AccordionTrigger>Listing Age</AccordionTrigger>
          <AccordionContent>
            <div className="flex flex-wrap gap-2">
              {listingAgeOptions.map(option => (
                <Badge
                  key={option}
                  variant="outline"
                  className={`cursor-pointer ${
                    filters.listingAge === option
                      ? "bg-estate-primary text-white"
                      : ""
                  }`}
                  onClick={() => {
                    setFilters({
                      ...filters,
                      listingAge: filters.listingAge === option ? undefined : option,
                    });
                  }}
                >
                  {option}
                </Badge>
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>
        
        <AccordionItem value="furnishing">
          <AccordionTrigger>Furnishing</AccordionTrigger>
          <AccordionContent>
            <div className="flex flex-wrap gap-2">
              {furnishingOptions.map(option => (
                <Badge
                  key={option}
                  variant="outline"
                  className={`cursor-pointer ${
                    (filters.furnishing || []).includes(option)
                      ? "bg-estate-primary text-white"
                      : ""
                  }`}
                  onClick={() => {
                    const current = filters.furnishing || [];
                    setFilters({
                      ...filters,
                      furnishing: current.includes(option)
                        ? current.filter(f => f !== option)
                        : [...current, option],
                    });
                  }}
                >
                  {option}
                </Badge>
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>
        
        <AccordionItem value="exclusive">
          <AccordionTrigger>Listing Type</AccordionTrigger>
          <AccordionContent>
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="exclusive"
                  checked={!!filters.exclusive}
                  onCheckedChange={(checked) => {
                    setFilters({
                      ...filters,
                      exclusive: !!checked,
                    });
                  }}
                />
                <label
                  htmlFor="exclusive"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Exclusive Listings Only
                </label>
              </div>
              
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="direct"
                  checked={!!filters.directFromDeveloper}
                  onCheckedChange={(checked) => {
                    setFilters({
                      ...filters,
                      directFromDeveloper: !!checked,
                    });
                  }}
                />
                <label
                  htmlFor="direct"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Direct From Developer
                </label>
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
      
      <Button 
        className="w-full mt-6 bg-estate-primary hover:bg-estate-primary/90 text-white" 
        onClick={applyFilters}
      >
        Apply Filters
      </Button>
    </div>
  );
};

export default PropertyFilters;

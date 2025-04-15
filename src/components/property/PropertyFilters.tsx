
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Slider } from "@/components/ui/slider";
import { Separator } from "@/components/ui/separator";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { 
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger 
} from "@/components/ui/accordion";
import {
  Check,
  ChevronsUpDown,
  MapPin,
  Warehouse,
  Building,
  Building2,
  SquareAsterisk,
  Minimize2,
  Filter,
  X,
  RefreshCw,
  Truck,
  Factory,
  Landmark,
  HomeIcon,
  LandPlot,
  Layers,
  Clock,
} from "lucide-react";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import { PropertyFilter } from "@/types/property";
import { Badge } from "@/components/ui/badge";
import { Switch } from "@/components/ui/switch";

interface PropertyFiltersProps {
  filters: PropertyFilter;
  setFilters: (filters: PropertyFilter) => void;
}

interface LocationOption {
  value: string;
  label: string;
}

interface PropertyTypeOption {
  value: string;
  label: string;
  icon: React.ReactNode;
}

const PropertyFilters = ({ filters, setFilters }: PropertyFiltersProps) => {
  // UI state
  const [expanded, setExpanded] = useState<Record<string, boolean>>({
    price: true,
    location: true,
    propertyType: true,
    area: false,
    features: false,
    status: false,
    roi: false,
    zoning: false,
    vision2030: false,
    logistics: false,
    completion: false,
  });

  // Price range
  const [priceRange, setPriceRange] = useState<[number, number]>([
    filters.minPrice || 500000,
    filters.maxPrice || 20000000,
  ]);
  
  // Area range
  const [areaRange, setAreaRange] = useState<[number, number]>([
    filters.minArea || 1000,
    filters.maxArea || 50000,
  ]);
  
  // ROI range
  const [roiRange, setRoiRange] = useState<number>(
    filters.minROI || 5
  );
  
  // Location options
  const locationOptions: LocationOption[] = [
    { value: "riyadh_industrial_city", label: "Riyadh Industrial City" },
    { value: "jeddah_industrial_city", label: "Jeddah Industrial City" },
    { value: "dammam_industrial_city", label: "Dammam Industrial City" },
    { value: "modon_sudair", label: "MODON Sudair" },
    { value: "modon_jeddah", label: "MODON Jeddah" },
    { value: "kaec_industrial_valley", label: "KAEC Industrial Valley" },
    { value: "jubail_industrial_city", label: "Jubail Industrial City" },
    { value: "yanbu_industrial_city", label: "Yanbu Industrial City" },
    { value: "ras_al_khair", label: "Ras Al Khair Industrial City" },
    { value: "rabigh", label: "Rabigh" },
  ];
  
  // Property type options
  const propertyTypeOptions: PropertyTypeOption[] = [
    { value: "warehouse", label: "Warehouse", icon: <Warehouse size={14} /> },
    { value: "factory", label: "Factory", icon: <Factory size={14} /> },
    { value: "logistics", label: "Logistics Center", icon: <Truck size={14} /> },
    { value: "land", label: "Industrial Land", icon: <LandPlot size={14} /> },
    { value: "office", label: "Industrial Office", icon: <Building size={14} /> },
    { value: "mixed-use", label: "Mixed-Use Industrial", icon: <Layers size={14} /> },
  ];
  
  // Feature options
  const featureOptions = [
    "Loading Docks",
    "High Ceiling",
    "Power Substation",
    "Security System",
    "Fire System",
    "Chilled Storage",
    "Drainage System",
    "Staff Accommodation",
    "Office Space",
    "24/7 Operation",
    "Waste Management",
    "Parking",
    "Truck Access",
    "HVAC System"
  ];
  
  // Zoning options
  const zoningOptions = [
    "Light Industrial",
    "Heavy Industrial",
    "Logistics",
    "Manufacturing",
    "Storage",
    "Research & Development",
    "Assembly",
    "Processing",
    "Technology",
  ];
  
  // Vision 2030 Alignment options
  const vision2030Options = [
    "Manufacturing Hub",
    "Logistics Hub",
    "Renewable Energy",
    "Export Capacity",
    "Digital Economy",
    "Healthcare",
    "Mining & Minerals",
    "Automotive Industry",
    "Food Processing",
  ];
  
  // Status options
  const statusOptions = [
    { value: "available", label: "Available" },
    { value: "under-development", label: "Under Development" },
    { value: "investment-opportunity", label: "Investment Opportunity" },
  ];
  
  // Apply price filter on price range change with debounce
  useEffect(() => {
    const timer = setTimeout(() => {
      setFilters({
        ...filters,
        minPrice: priceRange[0],
        maxPrice: priceRange[1],
      });
    }, 500);
    
    return () => clearTimeout(timer);
  }, [priceRange]);
  
  // Apply area filter on area range change with debounce
  useEffect(() => {
    const timer = setTimeout(() => {
      setFilters({
        ...filters,
        minArea: areaRange[0],
        maxArea: areaRange[1],
      });
    }, 500);
    
    return () => clearTimeout(timer);
  }, [areaRange]);
  
  // Apply ROI filter on ROI change with debounce
  useEffect(() => {
    const timer = setTimeout(() => {
      setFilters({
        ...filters,
        minROI: roiRange,
      });
    }, 500);
    
    return () => clearTimeout(timer);
  }, [roiRange]);
  
  // Various handlers
  const handleStatusChange = (status: string) => {
    const currentStatuses = filters.status || [];
    let newStatuses;
    
    if (currentStatuses.includes(status as any)) {
      newStatuses = currentStatuses.filter(s => s !== status);
    } else {
      newStatuses = [...currentStatuses, status as "available" | "under-development" | "investment-opportunity"];
    }
    
    setFilters({ ...filters, status: newStatuses });
  };
  
  const handleFeatureChange = (feature: string) => {
    const currentFeatures = filters.features || [];
    let newFeatures;
    
    if (currentFeatures.includes(feature)) {
      newFeatures = currentFeatures.filter(f => f !== feature);
    } else {
      newFeatures = [...currentFeatures, feature];
    }
    
    setFilters({ ...filters, features: newFeatures });
  };
  
  const handleZoningChange = (zoning: string) => {
    const currentZoning = filters.zoning || [];
    let newZoning;
    
    if (currentZoning.includes(zoning)) {
      newZoning = currentZoning.filter(z => z !== zoning);
    } else {
      newZoning = [...currentZoning, zoning];
    }
    
    setFilters({ ...filters, zoning: newZoning });
  };
  
  const handleVision2030Change = (vision: string) => {
    const currentVision = filters.vision2030Alignment || [];
    let newVision;
    
    if (currentVision.includes(vision)) {
      newVision = currentVision.filter(v => v !== vision);
    } else {
      newVision = [...currentVision, vision];
    }
    
    setFilters({ ...filters, vision2030Alignment: newVision });
  };

  const handleLocationSelect = (location: string) => {
    const currentLocations = filters.location || [];
    let newLocations;
    
    if (currentLocations.includes(location)) {
      newLocations = currentLocations.filter(l => l !== location);
    } else {
      newLocations = [...currentLocations, location];
    }
    
    setFilters({
      ...filters,
      location: newLocations,
    });
  };
  
  const handlePropertyTypeSelect = (type: string) => {
    const currentTypes = filters.propertyType || [];
    let newTypes;
    
    if (currentTypes.includes(type)) {
      newTypes = currentTypes.filter(t => t !== type);
    } else {
      newTypes = [...currentTypes, type];
    }
    
    setFilters({
      ...filters,
      propertyType: newTypes,
    });
  };
  
  const handleExclusiveChange = (value: boolean) => {
    setFilters({
      ...filters,
      exclusive: value,
    });
  };
  
  const handleDirectFromDeveloperChange = (value: boolean) => {
    setFilters({
      ...filters,
      directFromDeveloper: value,
    });
  };
  
  const handleMaxPortDistanceChange = (value: number, type: 'seaport' | 'airport' | 'highway') => {
    switch (type) {
      case 'seaport':
        setFilters({ ...filters, maxSeaportDistance: value });
        break;
      case 'airport':
        setFilters({ ...filters, maxAirportDistance: value });
        break;
      case 'highway':
        setFilters({ ...filters, maxHighwayDistance: value });
        break;
    }
  };
  
  // Filter sections toggle
  const toggleSection = (section: string) => {
    setExpanded({ ...expanded, [section]: !expanded[section] });
  };

  // Reset all filters
  const resetFilters = () => {
    setFilters({});
    setPriceRange([500000, 20000000]);
    setAreaRange([1000, 50000]);
    setRoiRange(5);
  };

  // Count active filters for badge
  const countActiveFilters = () => {
    let count = 0;
    if (filters.minPrice || filters.maxPrice) count++;
    if (filters.location && filters.location.length > 0) count++;
    if (filters.propertyType && filters.propertyType.length > 0) count++;
    if (filters.minArea || filters.maxArea) count++;
    if (filters.features && filters.features.length > 0) count++;
    if (filters.status && filters.status.length > 0) count++;
    if (filters.minROI) count++;
    if (filters.zoning && filters.zoning.length > 0) count++;
    if (filters.vision2030Alignment && filters.vision2030Alignment.length > 0) count++;
    if (filters.maxSeaportDistance || filters.maxAirportDistance || filters.maxHighwayDistance) count++;
    if (filters.exclusive) count++;
    if (filters.directFromDeveloper) count++;
    
    return count;
  };
  
  const activeFilterCount = countActiveFilters();

  return (
    <div className="bg-white p-3 sm:p-4 rounded-lg border border-slate-200">
      <div className="flex justify-between items-center mb-4">
        <h3 className="font-semibold flex items-center">
          <Filter className="mr-2 h-4 w-4" />
          Filters
          {activeFilterCount > 0 && (
            <Badge variant="secondary" className="ml-2">
              {activeFilterCount}
            </Badge>
          )}
        </h3>
        {activeFilterCount > 0 && (
          <Button 
            variant="ghost" 
            size="sm" 
            onClick={resetFilters}
            className="text-xs flex items-center"
          >
            <RefreshCw className="mr-1 h-3 w-3" />
            Reset
          </Button>
        )}
      </div>
      
      <div className="space-y-1">
        <Accordion
          type="multiple"
          defaultValue={["price", "location", "propertyType"]}
          className="space-y-1"
        >
          {/* Price Range */}
          <AccordionItem value="price" className="border-b">
            <AccordionTrigger 
              className="py-2 hover:no-underline"
              onClick={() => toggleSection('price')}
            >
              <span className="text-sm font-medium">Price Range</span>
            </AccordionTrigger>
            <AccordionContent>
              <div className="py-2">
                <div className="mb-4">
                  <Slider
                    value={priceRange}
                    min={500000}
                    max={20000000}
                    step={100000}
                    onValueChange={(value) => setPriceRange(value as [number, number])}
                    className="py-4"
                  />
                  <div className="flex justify-between mt-1">
                    <span className="text-xs text-slate-500">
                      {priceRange[0].toLocaleString()} SAR
                    </span>
                    <span className="text-xs text-slate-500">
                      {priceRange[1].toLocaleString()} SAR
                    </span>
                  </div>
                </div>
                <div className="flex gap-2">
                  <div className="w-full">
                    <Label htmlFor="min-price" className="text-xs">Min</Label>
                    <Input
                      id="min-price"
                      type="number"
                      value={priceRange[0]}
                      onChange={(e) => setPriceRange([Number(e.target.value), priceRange[1]])}
                      className="h-8"
                    />
                  </div>
                  <div className="w-full">
                    <Label htmlFor="max-price" className="text-xs">Max</Label>
                    <Input
                      id="max-price"
                      type="number"
                      value={priceRange[1]}
                      onChange={(e) => setPriceRange([priceRange[0], Number(e.target.value)])}
                      className="h-8"
                    />
                  </div>
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>
          
          {/* Location */}
          <AccordionItem value="location" className="border-b">
            <AccordionTrigger 
              className="py-2 hover:no-underline"
              onClick={() => toggleSection('location')}
            >
              <span className="text-sm font-medium">Location</span>
            </AccordionTrigger>
            <AccordionContent>
              <div className="py-2">
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      variant="outline"
                      role="combobox"
                      className="justify-between w-full bg-background"
                    >
                      <div className="flex items-center gap-2">
                        <MapPin className="h-4 w-4 text-slate-500" />
                        <span>
                          {filters.location?.length
                            ? filters.location.length > 1
                              ? `${filters.location.length} locations selected`
                              : locationOptions.find(
                                  (option) => option.value === filters.location[0]
                                )?.label
                            : "Select location"}
                        </span>
                      </div>
                      <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-full p-0" align="start">
                    <Command>
                      <CommandInput placeholder="Search location..." />
                      <CommandEmpty>No location found.</CommandEmpty>
                      <CommandList>
                        <CommandGroup>
                          {locationOptions.map((option) => (
                            <CommandItem
                              key={option.value}
                              onSelect={() => handleLocationSelect(option.value)}
                              className="cursor-pointer"
                            >
                              <Check
                                className={cn(
                                  "mr-2 h-4 w-4",
                                  filters.location?.includes(option.value)
                                    ? "opacity-100"
                                    : "opacity-0"
                                )}
                              />
                              {option.label}
                            </CommandItem>
                          ))}
                        </CommandGroup>
                      </CommandList>
                    </Command>
                  </PopoverContent>
                </Popover>
                {filters.location && filters.location.length > 0 && (
                  <div className="flex flex-wrap gap-1 mt-2">
                    {filters.location.map((loc) => {
                      const location = locationOptions.find(
                        (option) => option.value === loc
                      );
                      return (
                        <Badge
                          key={loc}
                          variant="secondary"
                          className="flex items-center gap-1 text-xs"
                        >
                          {location?.label || loc}
                          <X
                            className="h-3 w-3 cursor-pointer"
                            onClick={() => handleLocationSelect(loc)}
                          />
                        </Badge>
                      );
                    })}
                  </div>
                )}
              </div>
            </AccordionContent>
          </AccordionItem>
          
          {/* Property Type */}
          <AccordionItem value="propertyType" className="border-b">
            <AccordionTrigger 
              className="py-2 hover:no-underline"
              onClick={() => toggleSection('propertyType')}
            >
              <span className="text-sm font-medium">Asset Type</span>
            </AccordionTrigger>
            <AccordionContent>
              <div className="py-2">
                <div className="grid grid-cols-2 gap-2">
                  {propertyTypeOptions.map((option) => (
                    <div
                      key={option.value}
                      className={`flex items-center justify-start gap-2 p-2 rounded-md cursor-pointer border text-sm ${
                        filters.propertyType?.includes(option.value)
                          ? "bg-estate-primary text-white border-estate-primary"
                          : "bg-white text-slate-700 border-slate-200 hover:bg-slate-50"
                      }`}
                      onClick={() => handlePropertyTypeSelect(option.value)}
                    >
                      {option.icon}
                      {option.label}
                    </div>
                  ))}
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>
          
          {/* Area */}
          <AccordionItem value="area" className="border-b">
            <AccordionTrigger 
              className="py-2 hover:no-underline"
              onClick={() => toggleSection('area')}
            >
              <span className="text-sm font-medium">Area (sqm)</span>
            </AccordionTrigger>
            <AccordionContent>
              <div className="py-2">
                <div className="mb-4">
                  <Slider
                    value={areaRange}
                    min={1000}
                    max={50000}
                    step={500}
                    onValueChange={(value) => setAreaRange(value as [number, number])}
                    className="py-4"
                  />
                  <div className="flex justify-between mt-1">
                    <span className="text-xs text-slate-500">
                      {areaRange[0].toLocaleString()} sqm
                    </span>
                    <span className="text-xs text-slate-500">
                      {areaRange[1].toLocaleString()} sqm
                    </span>
                  </div>
                </div>
                <div className="flex gap-2">
                  <div className="w-full">
                    <Label htmlFor="min-area" className="text-xs">Min</Label>
                    <Input
                      id="min-area"
                      type="number"
                      value={areaRange[0]}
                      onChange={(e) => setAreaRange([Number(e.target.value), areaRange[1]])}
                      className="h-8"
                    />
                  </div>
                  <div className="w-full">
                    <Label htmlFor="max-area" className="text-xs">Max</Label>
                    <Input
                      id="max-area"
                      type="number"
                      value={areaRange[1]}
                      onChange={(e) => setAreaRange([areaRange[0], Number(e.target.value)])}
                      className="h-8"
                    />
                  </div>
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>
          
          {/* Status */}
          <AccordionItem value="status" className="border-b">
            <AccordionTrigger 
              className="py-2 hover:no-underline"
              onClick={() => toggleSection('status')}
            >
              <span className="text-sm font-medium">Asset Status</span>
            </AccordionTrigger>
            <AccordionContent>
              <div className="py-2">
                <div className="flex flex-col gap-2">
                  {statusOptions.map((option) => (
                    <div key={option.value} className="flex items-center space-x-2">
                      <Checkbox
                        id={`status-${option.value}`}
                        checked={filters.status?.includes(option.value as any)}
                        onCheckedChange={() => handleStatusChange(option.value)}
                      />
                      <Label
                        htmlFor={`status-${option.value}`}
                        className="text-sm font-normal cursor-pointer"
                      >
                        {option.label}
                      </Label>
                    </div>
                  ))}
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>
          
          {/* ROI */}
          <AccordionItem value="roi" className="border-b">
            <AccordionTrigger 
              className="py-2 hover:no-underline"
              onClick={() => toggleSection('roi')}
            >
              <span className="text-sm font-medium">ROI</span>
            </AccordionTrigger>
            <AccordionContent>
              <div className="py-2">
                <div className="mb-4">
                  <Label htmlFor="roi-slider" className="text-xs">
                    Minimum ROI: <span className="text-estate-primary font-medium">{roiRange}%</span>
                  </Label>
                  <Slider
                    id="roi-slider"
                    value={[roiRange]}
                    min={0}
                    max={15}
                    step={0.5}
                    onValueChange={(value) => setRoiRange(value[0])}
                    className="py-4"
                  />
                  <div className="flex justify-between mt-1">
                    <span className="text-xs text-slate-500">0%</span>
                    <span className="text-xs text-slate-500">15%</span>
                  </div>
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>
          
          {/* Features */}
          <AccordionItem value="features" className="border-b">
            <AccordionTrigger 
              className="py-2 hover:no-underline"
              onClick={() => toggleSection('features')}
            >
              <span className="text-sm font-medium">Features</span>
            </AccordionTrigger>
            <AccordionContent>
              <div className="py-2">
                <div className="grid grid-cols-1 gap-2">
                  {featureOptions.map((feature) => (
                    <div key={feature} className="flex items-center space-x-2">
                      <Checkbox
                        id={`feature-${feature}`}
                        checked={filters.features?.includes(feature)}
                        onCheckedChange={() => handleFeatureChange(feature)}
                      />
                      <Label
                        htmlFor={`feature-${feature}`}
                        className="text-sm font-normal cursor-pointer"
                      >
                        {feature}
                      </Label>
                    </div>
                  ))}
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>
          
          {/* Zoning */}
          <AccordionItem value="zoning" className="border-b">
            <AccordionTrigger 
              className="py-2 hover:no-underline"
              onClick={() => toggleSection('zoning')}
            >
              <span className="text-sm font-medium">Zoning Type</span>
            </AccordionTrigger>
            <AccordionContent>
              <div className="py-2">
                <div className="grid grid-cols-1 gap-2">
                  {zoningOptions.map((zoning) => (
                    <div key={zoning} className="flex items-center space-x-2">
                      <Checkbox
                        id={`zoning-${zoning}`}
                        checked={filters.zoning?.includes(zoning)}
                        onCheckedChange={() => handleZoningChange(zoning)}
                      />
                      <Label
                        htmlFor={`zoning-${zoning}`}
                        className="text-sm font-normal cursor-pointer"
                      >
                        {zoning}
                      </Label>
                    </div>
                  ))}
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>
          
          {/* Vision 2030 Alignment */}
          <AccordionItem value="vision2030" className="border-b">
            <AccordionTrigger 
              className="py-2 hover:no-underline"
              onClick={() => toggleSection('vision2030')}
            >
              <span className="text-sm font-medium">Vision 2030 Alignment</span>
            </AccordionTrigger>
            <AccordionContent>
              <div className="py-2">
                <div className="grid grid-cols-1 gap-2">
                  {vision2030Options.map((vision) => (
                    <div key={vision} className="flex items-center space-x-2">
                      <Checkbox
                        id={`vision-${vision}`}
                        checked={filters.vision2030Alignment?.includes(vision)}
                        onCheckedChange={() => handleVision2030Change(vision)}
                      />
                      <Label
                        htmlFor={`vision-${vision}`}
                        className="text-sm font-normal cursor-pointer"
                      >
                        {vision}
                      </Label>
                    </div>
                  ))}
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>
          
          {/* Logistics */}
          <AccordionItem value="logistics" className="border-b">
            <AccordionTrigger 
              className="py-2 hover:no-underline"
              onClick={() => toggleSection('logistics')}
            >
              <span className="text-sm font-medium">Logistics</span>
            </AccordionTrigger>
            <AccordionContent>
              <div className="py-2 space-y-4">
                <div>
                  <Label className="text-xs mb-1 block">Max Distance to Seaport (km)</Label>
                  <Slider
                    value={[filters.maxSeaportDistance || 100]}
                    min={0}
                    max={200}
                    step={10}
                    onValueChange={(value) => handleMaxPortDistanceChange(value[0], 'seaport')}
                    className="py-4"
                  />
                  <div className="flex justify-between mt-1">
                    <span className="text-xs text-slate-500">0 km</span>
                    <span className="text-xs text-slate-500">
                      {filters.maxSeaportDistance || 100} km
                    </span>
                  </div>
                </div>
                
                <div>
                  <Label className="text-xs mb-1 block">Max Distance to Airport (km)</Label>
                  <Slider
                    value={[filters.maxAirportDistance || 100]}
                    min={0}
                    max={200}
                    step={10}
                    onValueChange={(value) => handleMaxPortDistanceChange(value[0], 'airport')}
                    className="py-4"
                  />
                  <div className="flex justify-between mt-1">
                    <span className="text-xs text-slate-500">0 km</span>
                    <span className="text-xs text-slate-500">
                      {filters.maxAirportDistance || 100} km
                    </span>
                  </div>
                </div>
                
                <div>
                  <Label className="text-xs mb-1 block">Max Distance to Highway (km)</Label>
                  <Slider
                    value={[filters.maxHighwayDistance || 50]}
                    min={0}
                    max={100}
                    step={5}
                    onValueChange={(value) => handleMaxPortDistanceChange(value[0], 'highway')}
                    className="py-4"
                  />
                  <div className="flex justify-between mt-1">
                    <span className="text-xs text-slate-500">0 km</span>
                    <span className="text-xs text-slate-500">
                      {filters.maxHighwayDistance || 50} km
                    </span>
                  </div>
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>
          
          {/* Completion Date */}
          <AccordionItem value="completion" className="border-b">
            <AccordionTrigger 
              className="py-2 hover:no-underline"
              onClick={() => toggleSection('completion')}
            >
              <span className="text-sm font-medium">Completion Year</span>
            </AccordionTrigger>
            <AccordionContent>
              <div className="py-2">
                <RadioGroup defaultValue="all" className="flex flex-col gap-2">
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="all" id="completion-all" />
                    <Label htmlFor="completion-all" className="text-sm font-normal cursor-pointer">
                      All
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="ready" id="completion-ready" />
                    <Label htmlFor="completion-ready" className="text-sm font-normal cursor-pointer">
                      Ready Now
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="2025" id="completion-2025" />
                    <Label htmlFor="completion-2025" className="text-sm font-normal cursor-pointer">
                      2025
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="2026" id="completion-2026" />
                    <Label htmlFor="completion-2026" className="text-sm font-normal cursor-pointer">
                      2026
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="2027" id="completion-2027" />
                    <Label htmlFor="completion-2027" className="text-sm font-normal cursor-pointer">
                      2027+
                    </Label>
                  </div>
                </RadioGroup>
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
        
        <div className="pt-3">
          <div className="flex items-center justify-between py-2">
            <Label htmlFor="exclusive" className="text-sm cursor-pointer">
              Exclusive Listings
            </Label>
            <Switch 
              id="exclusive" 
              checked={filters.exclusive || false}
              onCheckedChange={handleExclusiveChange}
            />
          </div>
          
          <div className="flex items-center justify-between py-2">
            <Label htmlFor="direct" className="text-sm cursor-pointer">
              Direct from Developer
            </Label>
            <Switch 
              id="direct" 
              checked={filters.directFromDeveloper || false}
              onCheckedChange={handleDirectFromDeveloperChange}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyFilters;

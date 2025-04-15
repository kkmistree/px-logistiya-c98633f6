
export const propertyTypes = {
  title: "Browse by Property Type",
  description: "Explore industrial assets by category",
  items: [
    { label: "Warehouses", location: "warehouse", count: 58, description: "Storage facilities for goods and merchandise, typically with loading docks and high ceilings" },
    { label: "Factories", location: "factory", count: 42, description: "Manufacturing facilities designed for production operations with utilities for heavy machinery" },
    { label: "Logistics Centers", location: "logistics", count: 36, description: "Distribution hubs optimized for efficient movement and storage of goods" },
    { label: "Mixed-Use Industrial", location: "mixed-use", count: 31, description: "Combined industrial spaces with office, retail or other commercial components" }
  ]
};

export const locationCategories = {
  title: "Top Industrial Locations",
  description: "Prime investment areas",
  items: [
    { label: "Riyadh Industrial City", location: "riyadh", count: 45, description: "Capital region's primary industrial zone with excellent infrastructure and government incentives" },
    { label: "Jeddah Industrial Area", location: "jeddah", count: 38, description: "Port-adjacent industrial zone with strong import/export capabilities" },
    { label: "Dammam Logistics Hub", location: "dammam", count: 29, description: "Eastern province logistics center with Gulf access and petrochemical industry proximity" },
    { label: "KAEC Industrial Valley", location: "kaec", count: 24, description: "Modern planned industrial city with state-of-the-art facilities and tax benefits" }
  ]
};

export const searchSuggestions = [
  {
    query: "Logistics facilities with cold storage near ports",
    description: "Specialized industrial properties with temperature control and easy port access",
    tags: ["Cold Storage", "Port Access", "Logistics"],
    metrics: {
      roi: "9.2%",
      growth: "+14%",
      potential: "high" as const
    }
  },
  {
    query: "High-yield warehouses under 10M SAR",
    description: "Affordably priced warehouse investments with above-average returns",
    tags: ["High Yield", "Warehouses", "Under 10M"],
    metrics: {
      roi: "8.5%",
      growth: "+7%",
      potential: "medium" as const
    }
  },
  {
    query: "Factory spaces with expansion potential",
    description: "Manufacturing facilities with adjacent land for future development",
    tags: ["Factories", "Expandable", "Development"],
    metrics: {
      roi: "6.8%",
      growth: "+11%",
      potential: "high" as const
    }
  }
];

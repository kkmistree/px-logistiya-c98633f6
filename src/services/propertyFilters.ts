
import { Property } from "@/types/property";

// Filter: Undervalued properties in Dubai Marina
export const filterUndervaluedInMarina = (properties: Property[]): Property[] => {
  return properties.filter(p => 
    p.location.area.toLowerCase().includes("dubai marina") && 
    p.price < 1500000 &&
    p.roi > 7
  );
};

// Filter: High yield studios
export const filterHighYieldStudios = (properties: Property[]): Property[] => {
  return properties.filter(p => 
    p.bedrooms === 0 && 
    p.tags.some(tag => tag.toLowerCase().includes("high yield"))
  );
};

// Filter: Apartments with a maximum price
export const filterApartmentsByMaxPrice = (properties: Property[], maxPrice: number): Property[] => {
  return properties.filter(p => 
    p.type === "apartment" && 
    p.price <= maxPrice  // Ensure we're using <= to include properties up to the max price
  );
};

// Filter: Bedrooms with high ROI
export const filterBedroomsByROI = (properties: Property[], bedrooms: number, minROI: number = 7): Property[] => {
  return properties.filter(p => 
    p.bedrooms === bedrooms && 
    p.type === "apartment" &&
    (p.roi ? p.roi > minROI : false)
  );
};

// Filter: Specific bedrooms with high ROI and high yield
export const filterBedroomsWithHighROIAndYield = (properties: Property[], bedrooms: number): Property[] => {
  return properties.filter(p => 
    p.bedrooms === bedrooms && 
    (p.roi ? p.roi > 8 : false) &&
    p.tags.some(tag => tag.toLowerCase().includes("high yield"))
  );
};

// Generic keyword search across multiple property fields
export const filterByKeyword = (properties: Property[], keyword: string): Property[] => {
  const lowerKeyword = keyword.toLowerCase();
  return properties.filter(p => 
    p.title.toLowerCase().includes(lowerKeyword) || 
    p.description.toLowerCase().includes(lowerKeyword) ||
    p.location.area.toLowerCase().includes(lowerKeyword) ||
    p.tags.some(tag => tag.toLowerCase().includes(lowerKeyword))
  );
};

// Add match score to properties
export const addMatchScore = (properties: Property[]): Property[] => {
  return properties.map(prop => ({
    ...prop,
    matchScore: Math.floor(Math.random() * 30) + 70 // Random score between 70-100
  }));
};

// Limit results to a specific count
export const limitResults = (properties: Property[], limit: number = 5): Property[] => {
  return properties.slice(0, Math.min(limit, properties.length));
};

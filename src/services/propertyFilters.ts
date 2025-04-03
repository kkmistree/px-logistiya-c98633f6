import { Property } from "@/types/property";
import { convertCurrency } from "@/utils/format";

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
export const filterApartmentsByMaxPrice = (
  properties: Property[], 
  maxPrice: number, 
  fromCurrency: string = 'AED',
  platformCurrency: string = 'AED'
): Property[] => {
  // Convert the max price to the platform currency
  const maxPriceInPlatformCurrency = convertCurrency(maxPrice, fromCurrency, platformCurrency);
  
  return properties.filter(p => 
    p.type === "apartment" && 
    p.price <= maxPriceInPlatformCurrency  // Compare with converted value
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
  // If keyword is empty, return an empty array to trigger the fallback
  if (!keyword.trim()) return [];
  
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
  // Ensure we have at least 3 properties
  const actualLimit = Math.max(3, Math.min(limit, properties.length));
  
  // If we have fewer properties than the limit, return all of them
  if (properties.length <= actualLimit) {
    return properties;
  }
  
  // Otherwise, return a random selection of properties
  return properties
    .sort(() => Math.random() - 0.5) // Shuffle the array
    .slice(0, actualLimit);
};

import { Property } from "@/types/property";
import { convertCurrency } from "@/utils/format";

// Filter: Undervalued properties in Riyadh Industrial City
export const filterUndervaluedInRiyadh = (properties: Property[]): Property[] => {
  return properties.filter(p => 
    p.location.area.toLowerCase().includes("riyadh industrial") && 
    p.price < 15000000 &&
    p.roi > 7
  );
};

// Filter: High yield warehouses
export const filterHighYieldWarehouses = (properties: Property[]): Property[] => {
  return properties.filter(p => 
    p.type === "warehouse" && 
    p.tags.some(tag => tag.toLowerCase().includes("high yield"))
  );
};

// Filter: Properties with a maximum price
export const filterPropertiesByMaxPrice = (
  properties: Property[], 
  maxPrice: number, 
  fromCurrency: string = 'SAR',
  platformCurrency: string = 'SAR'
): Property[] => {
  // Convert the max price to the platform currency
  const maxPriceInPlatformCurrency = convertCurrency(maxPrice, fromCurrency, platformCurrency);
  
  return properties.filter(p => 
    p.price <= maxPriceInPlatformCurrency  // Compare with converted value
  );
};

// Filter: Properties with high ROI
export const filterPropertiesByROI = (properties: Property[], type: string, minROI: number = 7): Property[] => {
  return properties.filter(p => 
    p.type === type &&
    (p.roi ? p.roi > minROI : false)
  );
};

// Filter: Specific type with high ROI and high yield
export const filterPropertiesWithHighROIAndYield = (properties: Property[], type: string): Property[] => {
  return properties.filter(p => 
    p.type === type && 
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

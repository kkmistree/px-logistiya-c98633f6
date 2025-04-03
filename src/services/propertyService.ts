
import { Property } from "@/types/property";
import { mockProperties } from "./mockProperties";
import { 
  filterUndervaluedInMarina,
  filterHighYieldStudios,
  filterApartmentsByMaxPrice,
  filterBedroomsByROI,
  filterBedroomsWithHighROIAndYield,
  filterByKeyword,
  addMatchScore,
  limitResults
} from "./propertyFilters";

// This function simulates backend filtering based on search queries
export const searchProperties = (query: string): Property[] => {
  // Start with all mock properties
  let filtered: Property[] = [...mockProperties];
  
  const lowerQuery = query.toLowerCase();
  
  // Apply filters based on query content
  if (lowerQuery.includes("undervalued") && lowerQuery.includes("dubai marina")) {
    filtered = filterUndervaluedInMarina(filtered);
  } 
  // Filter for 'High yield studios'
  else if (lowerQuery.includes("high yield") && lowerQuery.includes("studio")) {
    filtered = filterHighYieldStudios(filtered);
  } 
  // Filter for 'Apartments with a maximum price of $250,000'
  else if (lowerQuery.includes("maximum price") && lowerQuery.includes("250,000")) {
    filtered = filterApartmentsByMaxPrice(filtered, 250000);
  } 
  // Filter for '2 bedroom apartment with high ROI'
  else if (lowerQuery.includes("2 bedroom") && lowerQuery.includes("high roi")) {
    filtered = filterBedroomsByROI(filtered, 2);
  } 
  // Filter for '1 bed, high ROI and high yield'
  else if (lowerQuery.includes("1 bed") && lowerQuery.includes("high roi") && lowerQuery.includes("high yield")) {
    filtered = filterBedroomsWithHighROIAndYield(filtered, 1);
  } 
  // Generic search (fallback)
  else {
    filtered = filterByKeyword(filtered, lowerQuery);
  }
  
  // Limit results and add match scores
  filtered = limitResults(filtered);
  filtered = addMatchScore(filtered);
  
  return filtered;
};

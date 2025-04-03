
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
import { extractCurrencyInfo } from "@/utils/format";
import { currencies, CurrencyCode } from "@/contexts/CurrencyContext";

// This function simulates backend filtering based on search queries
export const searchProperties = (query: string, platformCurrency: CurrencyCode = 'AED'): Property[] => {
  // Start with all mock properties
  let filtered: Property[] = [...mockProperties];
  
  const lowerQuery = query.toLowerCase();
  console.log(`Searching for: "${query}" with platform currency: ${platformCurrency}`);
  
  // Extract currency information if present in the query
  const currencyInfo = extractCurrencyInfo(query);
  console.log("Extracted currency info:", currencyInfo);
  
  // Apply filters based on query content
  if (lowerQuery.includes("undervalued") && lowerQuery.includes("dubai marina")) {
    filtered = filterUndervaluedInMarina(filtered);
  } 
  // Filter for 'High yield studios'
  else if (lowerQuery.includes("high yield") && lowerQuery.includes("studio")) {
    filtered = filterHighYieldStudios(filtered);
  } 
  // Filter for apartments with a maximum price
  else if (
    lowerQuery.includes("maximum price") || 
    lowerQuery.includes("max price") || 
    (currencyInfo && lowerQuery.includes("apartment"))
  ) {
    let maxPrice = 250000; // Default value
    let sourceCurrency: string = platformCurrency;
    
    if (currencyInfo) {
      maxPrice = currencyInfo.amount;
      sourceCurrency = currencyInfo.currency === 'PLATFORM' ? platformCurrency : currencyInfo.currency;
      console.log(`Converting ${maxPrice} ${sourceCurrency} to ${platformCurrency}`);
    }
    
    filtered = filterApartmentsByMaxPrice(filtered, maxPrice, sourceCurrency, platformCurrency);
    console.log(`Found ${filtered.length} properties after price filtering`);
  } 
  // Filter for '2 bedroom apartment with high ROI'
  else if (lowerQuery.includes("2 bedroom") && lowerQuery.includes("high roi")) {
    filtered = filterBedroomsByROI(filtered, 2);
  } 
  // Filter for '1 bed, high ROI and high yield'
  else if (lowerQuery.includes("1 bed") && lowerQuery.includes("high roi") && lowerQuery.includes("high yield")) {
    filtered = filterBedroomsWithHighROIAndYield(filtered, 1);
  } 
  // Generic search (fallback) - ALWAYS return 3-5 properties for any query
  else {
    // For any search, find properties with relevant keywords if possible
    const keywordFiltered = filterByKeyword(filtered, lowerQuery);
    
    // If we found matches with keywords, use those, otherwise just return random properties
    if (keywordFiltered.length > 0) {
      filtered = keywordFiltered;
    } else {
      // Shuffle the array to get random properties
      filtered = [...mockProperties].sort(() => Math.random() - 0.5);
    }
  }
  
  // Always limit results to 3-5 properties and add match scores
  filtered = limitResults(filtered, Math.floor(Math.random() * 3) + 3); // Random number between 3 and 5
  filtered = addMatchScore(filtered);
  
  return filtered;
};

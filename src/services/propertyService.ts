
import { Property } from "@/types/property";
import { mockProperties } from "./mockProperties";
import { 
  filterUndervaluedInRiyadh,
  filterHighYieldWarehouses,
  filterPropertiesByMaxPrice,
  filterPropertiesByROI,
  filterPropertiesWithHighROIAndYield,
  filterByKeyword,
  addMatchScore,
  limitResults
} from "./propertyFilters";
import { extractCurrencyInfo, convertCurrency } from "@/utils/format";
import { currencies, CurrencyCode } from "@/contexts/CurrencyContext";

// This function simulates backend filtering based on search queries
export const searchProperties = (query: string, platformCurrency: CurrencyCode = 'SAR'): Property[] => {
  // Start with all mock properties
  let filtered: Property[] = [...mockProperties];
  
  const lowerQuery = query.toLowerCase();
  console.log(`Searching for: "${query}" with platform currency: ${platformCurrency}`);
  
  // Extract currency information if present in the query
  const currencyInfo = extractCurrencyInfo(query);
  console.log("Extracted currency info:", currencyInfo);
  
  // Apply filters based on query content
  if (lowerQuery.includes("undervalued") && lowerQuery.includes("riyadh industrial")) {
    filtered = filterUndervaluedInRiyadh(filtered);
  } 
  // Filter for 'High yield warehouses'
  else if (lowerQuery.includes("high yield") && lowerQuery.includes("warehouse")) {
    filtered = filterHighYieldWarehouses(filtered);
  } 
  // Filter for properties with a maximum price
  else if (
    lowerQuery.includes("maximum price") || 
    lowerQuery.includes("max price") || 
    (currencyInfo && lowerQuery.includes("property"))
  ) {
    let maxPrice = 15000000; // Default value for industrial
    let sourceCurrency: string = platformCurrency;
    
    if (currencyInfo) {
      maxPrice = currencyInfo.amount;
      sourceCurrency = currencyInfo.currency === 'PLATFORM' ? platformCurrency : currencyInfo.currency;
      console.log(`Converting ${maxPrice} ${sourceCurrency} to ${platformCurrency}`);
    }
    
    filtered = filterPropertiesByMaxPrice(filtered, maxPrice, sourceCurrency, platformCurrency);
    console.log(`Found ${filtered.length} properties after price filtering`);
  } 
  // Filter for properties with high ROI
  else if (lowerQuery.includes("warehouse") && lowerQuery.includes("high roi")) {
    filtered = filterPropertiesByROI(filtered, "warehouse");
  } 
  // Filter for high ROI and high yield
  else if (lowerQuery.includes("factory") && lowerQuery.includes("high roi") && lowerQuery.includes("high yield")) {
    filtered = filterPropertiesWithHighROIAndYield(filtered, "factory");
  } 
  // Generic search (fallback)
  else {
    const keywordFiltered = filterByKeyword(filtered, lowerQuery);
    filtered = keywordFiltered.length > 0 ? keywordFiltered : filtered;
  }
  
  // Always limit results and add match scores
  filtered = limitResults(filtered);
  filtered = addMatchScore(filtered);
  
  return filtered;
};

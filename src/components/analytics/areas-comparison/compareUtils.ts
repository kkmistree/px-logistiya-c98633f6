
import { AreaData } from "./areaData";

// Get badge variant based on trend
export const getBadgeVariant = (trend: string) => {
  switch(trend) {
    case "up": return "success";
    case "down": return "destructive";
    default: return "outline";
  }
};

// Calculate relative differences between areas
export const calculateRelativeDifference = (value1: string, value2: string, type: string) => {
  if (type === 'volume') {
    const vol1 = parseFloat(value1.replace('K', ''));
    const vol2 = parseFloat(value2.replace('K', ''));
    return Math.abs(((vol1 - vol2) / vol2) * 100).toFixed(1);
  } else if (type === 'value') {
    const val1 = parseFloat(value1.replace('AED ', '').replace('B', ''));
    const val2 = parseFloat(value2.replace('AED ', '').replace('B', ''));
    return Math.abs(((val1 - val2) / val2) * 100).toFixed(1);
  } else if (type === 'price-sqft') {
    const price1 = parseFloat(value1.replace('AED ', '').replace(',', ''));
    const price2 = parseFloat(value2.replace('AED ', '').replace(',', ''));
    return Math.abs(((price1 - price2) / price2) * 100).toFixed(1);
  } else if (type === 'price') {
    const price1 = parseFloat(value1.replace('AED ', '').replace(/,/g, ''));
    const price2 = parseFloat(value2.replace('AED ', '').replace(/,/g, ''));
    const diff = ((price1 - price2) / price2) * 100;
    return diff.toFixed(1);
  }
  return "0";
};

// Determine if location1 value is higher than location2
export const isLocation1Higher = (value1: string, value2: string, type: string) => {
  if (type === 'volume') {
    return parseFloat(value1.replace('K', '')) > parseFloat(value2.replace('K', ''));
  } else if (type === 'value') {
    return parseFloat(value1.replace('AED ', '').replace('B', '')) > parseFloat(value2.replace('AED ', '').replace('B', ''));
  } else if (type === 'price-sqft' || type === 'price') {
    return parseFloat(value1.replace('AED ', '').replace(/,/g, '')) > parseFloat(value2.replace('AED ', '').replace(/,/g, ''));
  }
  return false;
};

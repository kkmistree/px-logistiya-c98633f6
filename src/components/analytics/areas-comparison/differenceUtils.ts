
// Calculate the percentage difference between two values
export const calculateDifference = (value1: string, value2: string, type: string): number => {
  if (type === 'volume') {
    const vol1 = parseFloat(value1.replace('K', ''));
    const vol2 = parseFloat(value2.replace('K', ''));
    return parseFloat(((vol1 - vol2) / Math.abs(vol2) * 100).toFixed(1));
  } 
  else if (type === 'value') {
    const val1 = parseFloat(value1.replace('AED ', '').replace('B', ''));
    const val2 = parseFloat(value2.replace('AED ', '').replace('B', ''));
    return parseFloat(((val1 - val2) / Math.abs(val2) * 100).toFixed(1));
  } 
  else if (type === 'price-sqft') {
    const price1 = parseFloat(value1.replace('AED ', '').replace(',', ''));
    const price2 = parseFloat(value2.replace('AED ', '').replace(',', ''));
    return parseFloat(((price1 - price2) / Math.abs(price2) * 100).toFixed(1));
  } 
  else if (type === 'price') {
    const price1 = parseFloat(value1.replace('AED ', '').replace(/,/g, ''));
    const price2 = parseFloat(value2.replace('AED ', '').replace(/,/g, ''));
    return parseFloat(((price1 - price2) / Math.abs(price2) * 100).toFixed(1));
  }
  else if (type === 'units') {
    const units1 = parseFloat(value1.replace(',', ''));
    const units2 = parseFloat(value2.replace(',', ''));
    return parseFloat(((units1 - units2) / Math.abs(units2) * 100).toFixed(1));
  }
  return 0;
};

// Check if the first location has a higher value
export const isHigherValue = (value1: string, value2: string, type: string): boolean => {
  return calculateDifference(value1, value2, type) > 0;
};

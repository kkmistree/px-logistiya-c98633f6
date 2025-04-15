export const formatCurrency = (value: number | string, currencyCode: string = 'AED', options?: Intl.NumberFormatOptions) => {
  // Handle when value is a string
  const numericValue = typeof value === 'string' ? parseFloat(value) : value;
  
  if (isNaN(numericValue)) {
    return `${currencyCode} 0`;
  }
  
  // Default options
  const defaultOptions: Intl.NumberFormatOptions = {
    style: 'currency',
    currency: currencyCode,
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
    ...options
  };

  return new Intl.NumberFormat('en-AE', defaultOptions).format(numericValue);
};

export const formatPercentage = (value: number | string, digits: number = 1) => {
  // Handle when value is a string
  const numericValue = typeof value === 'string' ? parseFloat(value) : value;
  
  if (isNaN(numericValue)) {
    return '0%';
  }
  
  return `${numericValue.toFixed(digits)}%`;
};

// Update exchange rates with more accurate values
const exchangeRates: Record<string, number> = {
  'AED': 1,
  'USD': 3.6725, // 1 USD = 3.6725 AED
  'EUR': 3.9732, // 1 EUR = 3.9732 AED
  'GBP': 4.6799, // 1 GBP = 4.6799 AED
  'SAR': 0.9793, // 1 SAR = 0.9793 AED (fixed)
  'INR': 0.0441, // 1 INR = 0.0441 AED
};

// Improve the currency converter to handle all available currencies
export const convertCurrency = (
  amount: number, 
  fromCurrency: string, 
  toCurrency: string
): number => {
  // If currencies are the same, no conversion needed
  if (fromCurrency === toCurrency) {
    return amount;
  }
  
  // First convert to AED (base currency)
  const amountInAED = fromCurrency === 'AED' 
    ? amount 
    : amount * (exchangeRates[fromCurrency] || 1);
  
  // Then convert from AED to target currency
  return toCurrency === 'AED' 
    ? amountInAED 
    : amountInAED / (exchangeRates[toCurrency] || 1);
};

export const extractCurrencyInfo = (query: string) => {
  // Extract currency and amount from queries like "apartments under $500,000"
  const currencySymbols = {
    '$': 'USD',
    '£': 'GBP',
    '€': 'EUR',
    '¥': 'JPY',
    '﷼': 'SAR',
    '₹': 'INR',
    'AED': 'AED',
    'USD': 'USD',
    'EUR': 'EUR',
    'GBP': 'GBP',
    'JPY': 'JPY',
    'SAR': 'SAR',
    'INR': 'INR'
  };

  // This regex looks for a currency symbol or code followed by a number, or a number followed by a currency code
  const currencyRegex = /(\$|£|€|¥|﷼|₹|AED|USD|EUR|GBP|JPY|SAR|INR)\s*([0-9,.]+[KkMmBb]?)|([0-9,.]+[KkMmBb]?)\s*(AED|USD|EUR|GBP|JPY|SAR|INR)/i;
  const match = query.match(currencyRegex);

  if (!match) {
    return null;
  }

  let currencyCode;
  let amountStr;

  if (match[1] && match[2]) {
    // Format: $500,000 or AED 500,000
    currencyCode = match[1].toUpperCase() in currencySymbols 
      ? currencySymbols[match[1].toUpperCase() as keyof typeof currencySymbols] 
      : match[1];
    amountStr = match[2];
  } else if (match[3] && match[4]) {
    // Format: 500,000 AED
    amountStr = match[3];
    currencyCode = match[4].toUpperCase() in currencySymbols 
      ? currencySymbols[match[4].toUpperCase() as keyof typeof currencySymbols] 
      : match[4];
  } else {
    return null;
  }

  // Handle K, M, B suffixes
  let multiplier = 1;
  if (amountStr.match(/[KkMmBb]$/)) {
    const suffix = amountStr.slice(-1).toUpperCase();
    amountStr = amountStr.slice(0, -1);
    multiplier = suffix === 'K' ? 1000 : suffix === 'M' ? 1000000 : 1000000000;
  }

  // Remove commas and convert to number
  const numericAmount = parseFloat(amountStr.replace(/,/g, '')) * multiplier;

  return {
    currency: currencyCode === 'PLATFORM' ? 'PLATFORM' : currencyCode,
    amount: numericAmount
  };
};

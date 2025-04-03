
export const formatCurrency = (value: number | string, currency: string = 'AED', options?: Intl.NumberFormatOptions) => {
  // Handle when value is a string
  const numericValue = typeof value === 'string' ? parseFloat(value) : value;
  
  if (isNaN(numericValue)) {
    return `${currency} 0`;
  }
  
  // Default options
  const defaultOptions: Intl.NumberFormatOptions = {
    style: 'currency',
    currency: currency,
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

export const extractCurrencyInfo = (query: string) => {
  // Extract currency and amount from queries like "apartments under $500,000"
  const currencySymbols = {
    '$': 'USD',
    '£': 'GBP',
    '€': 'EUR',
    '¥': 'JPY',
    'AED': 'AED',
    'USD': 'USD',
    'EUR': 'EUR',
    'GBP': 'GBP',
    'JPY': 'JPY'
  };

  // This regex looks for a currency symbol or code followed by a number, or a number followed by a currency code
  const currencyRegex = /(\$|£|€|¥|AED|USD|EUR|GBP|JPY)\s*([0-9,.]+[KkMmBb]?)|([0-9,.]+[KkMmBb]?)\s*(AED|USD|EUR|GBP|JPY)/i;
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

export const formatCurrency = (value: number, currencyCode: string = 'AED'): string => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: currencyCode,
    maximumFractionDigits: 0,
  }).format(value);
};

export const formatNumber = (value: number): string => {
  return new Intl.NumberFormat('en-AE').format(value);
};

export const formatDate = (dateString: string): string => {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-AE', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  });
};

export const formatDateTime = (dateString: string): string => {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-AE', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  });
};

export const formatPercentage = (value: number): string => {
  return `${value.toFixed(1)}%`;
};

export const formatPhoneNumber = (phone: string): string => {
  // Simple formatter for UAE numbers, can be expanded based on needs
  if (phone.startsWith('+971')) {
    const cleaned = phone.replace(/\D/g, '').substring(3); // Remove +971
    if (cleaned.length === 9) { // Standard UAE number length
      return `+971 ${cleaned.substring(0, 2)} ${cleaned.substring(2, 5)} ${cleaned.substring(5)}`;
    }
  }
  return phone;
};

// Currency conversion rates (fixed rates for demonstration)
// In a real app, you would fetch these from an API
export const currencyRates: Record<string, number> = {
  AED: 1,      // Base currency
  USD: 3.67,   // 1 USD = 3.67 AED
  GBP: 4.65,   // 1 GBP = 4.65 AED
  EUR: 3.98,   // 1 EUR = 3.98 AED
  SAR: 0.98,   // 1 SAR = 0.98 AED
  INR: 0.044   // 1 INR = 0.044 AED
};

// Convert amount from one currency to another
export const convertCurrency = (
  amount: number, 
  fromCurrency: string = 'AED', 
  toCurrency: string = 'AED'
): number => {
  // If currencies are the same, no conversion needed
  if (fromCurrency === toCurrency) return amount;
  
  // Convert from source currency to AED (base currency)
  const amountInAED = fromCurrency === 'AED' 
    ? amount 
    : amount * currencyRates[fromCurrency];
  
  // Convert from AED to target currency
  return toCurrency === 'AED' 
    ? amountInAED 
    : amountInAED / currencyRates[toCurrency];
};

// Extract currency information from a search query
export const extractCurrencyInfo = (query: string): { 
  amount: number; 
  currency: string;
  originalText: string;
} | null => {
  // Match patterns like $250,000 or 250,000 USD or 250k EUR
  const currencyRegex = /(\$|£|€|₹|﷼|د\.إ)?\s*(\d+[,\d]*(\.\d+)?k?)\s*(USD|EUR|GBP|AED|SAR|INR)?/i;
  const match = query.match(currencyRegex);
  
  if (!match) return null;
  
  const symbolToCode: Record<string, string> = {
    '$': 'USD',
    '£': 'GBP',
    '€': 'EUR',
    '₹': 'INR',
    '﷼': 'SAR',
    'د.إ': 'AED'
  };
  
  let currencyCode = match[4]?.toUpperCase() || (match[1] ? symbolToCode[match[1]] : 'AED');
  
  // If neither symbol nor code is found, assume platform currency (will be determined later)
  if (!currencyCode) currencyCode = 'PLATFORM';
  
  // Process the amount (handle 'k' suffix for thousands)
  let amountStr = match[2].replace(/,/g, '');
  let amount = parseFloat(amountStr.replace('k', ''));
  
  // Multiply by 1000 if 'k' is present
  if (amountStr.toLowerCase().includes('k')) {
    amount *= 1000;
  }
  
  return {
    amount,
    currency: currencyCode,
    originalText: match[0]
  };
};

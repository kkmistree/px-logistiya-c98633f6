
import React, { createContext, useContext, useState, ReactNode, useEffect } from "react";

export type CurrencyCode = "AED" | "USD" | "GBP" | "EUR" | "SAR" | "INR";

export interface Currency {
  code: CurrencyCode;
  symbol: string;
  name: string;
}

export const currencies: Currency[] = [
  { code: "SAR", symbol: "﷼", name: "Saudi Riyal" },
  { code: "USD", symbol: "$", name: "US Dollar" },
  { code: "AED", symbol: "د.إ", name: "UAE Dirham" },
  { code: "GBP", symbol: "£", name: "British Pound" },
  { code: "EUR", symbol: "€", name: "Euro" },
  { code: "INR", symbol: "₹", name: "Indian Rupee" },
];

interface CurrencyContextType {
  currency: Currency;
  setCurrency: (currency: Currency) => void;
}

const CurrencyContext = createContext<CurrencyContextType | undefined>(undefined);

// Local storage key for saving currency preference
const CURRENCY_STORAGE_KEY = 'user-currency-preference';

export const CurrencyProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [currency, setCurrency] = useState<Currency>(() => {
    // Try to load from localStorage on initial render
    const savedCurrency = localStorage.getItem(CURRENCY_STORAGE_KEY);
    if (savedCurrency) {
      try {
        const parsed = JSON.parse(savedCurrency);
        const validCurrency = currencies.find(c => c.code === parsed.code);
        if (validCurrency) return validCurrency;
      } catch (e) {
        // If parsing fails, use default
        console.error("Failed to parse saved currency:", e);
      }
    }
    return currencies[0]; // Default to SAR
  });

  // Save to localStorage whenever currency changes
  useEffect(() => {
    localStorage.setItem(CURRENCY_STORAGE_KEY, JSON.stringify(currency));
    console.log(`Currency changed to ${currency.code}`);
  }, [currency]);

  return (
    <CurrencyContext.Provider value={{ currency, setCurrency }}>
      {children}
    </CurrencyContext.Provider>
  );
};

export const useCurrency = (): CurrencyContextType => {
  const context = useContext(CurrencyContext);
  if (context === undefined) {
    throw new Error("useCurrency must be used within a CurrencyProvider");
  }
  return context;
};

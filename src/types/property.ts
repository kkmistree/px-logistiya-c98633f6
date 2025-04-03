
export interface Property {
  id: string;
  title: string;
  description: string;
  type: 'apartment' | 'villa' | 'townhouse' | 'penthouse' | 'land';
  status: 'ready' | 'off-plan' | 'resale';
  price: number;
  area: number; // sqft
  bedrooms: number;
  bathrooms: number;
  location: {
    area: string;
    community: string;
    coordinates?: {
      lat: number;
      lng: number;
    };
  };
  features: string[];
  images: string[];
  developer?: string;
  completionDate?: string; // ISO date string for off-plan properties
  roi?: number; // Return on Investment percentage
  paymentPlan?: {
    downPayment: number; // percentage
    installments: {
      percentage: number;
      dueDate: string; // description like "On Handover", "60 days after booking"
    }[];
  };
  views?: number;
  createdAt: string; // ISO date string
  updatedAt: string; // ISO date string
  matchScore?: number; // AI-generated match score (0-100)
  tags: string[]; // e.g., "sea view", "high floor", "furnished"
  furnishing?: 'Furnished' | 'Semi-Furnished' | 'Unfurnished';
  exclusive?: boolean;
  directFromDeveloper?: boolean;
  developerRating?: number; // 1-5 stars
}

export interface PropertyFilter {
  minPrice?: number;
  maxPrice?: number;
  minArea?: number;
  maxArea?: number;
  bedrooms?: number[];
  location?: string[];
  propertyType?: string[];
  status?: ('ready' | 'off-plan' | 'resale')[];
  features?: string[];
  minROI?: number;
  developer?: string[];
  completionYear?: number;
  handoverYear?: string[];
  paymentPlan?: string[];
  furnishing?: string[];
  exclusive?: boolean;
  directFromDeveloper?: boolean;
  developerRating?: number;
  listingAge?: string;
}

export interface PropertySearchResult {
  properties: Property[];
  total: number;
  page: number;
  pageSize: number;
}

export interface PropertyComparison {
  properties: Property[];
  comparisonDate: string; // ISO date string
}

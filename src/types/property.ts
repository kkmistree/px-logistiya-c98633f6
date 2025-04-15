
export interface Property {
  id: string;
  title: string;
  description: string;
  type: 'warehouse' | 'factory' | 'logistics' | 'land' | 'office' | 'mixed-use';
  status: 'available' | 'under-development' | 'investment-opportunity';
  price: number;
  area: number; // sqm
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
  completionDate?: string; // ISO date string for under-development properties
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
  tags: string[]; // e.g., "MODON approved", "SEZ", "logistics corridor"
  zoning?: string;
  exclusive?: boolean;
  directFromDeveloper?: boolean;
  developerRating?: number; // 1-5 stars
  esgRating?: number; // Environmental, Social, and Governance rating (1-100)
  vision2030Alignment?: string[]; // Alignment with Saudi Vision 2030 initiatives
  seaportDistance?: number; // Distance to nearest seaport in km
  airportDistance?: number; // Distance to nearest airport in km
  highwayDistance?: number; // Distance to major highway in km
}

export interface PropertyFilter {
  minPrice?: number;
  maxPrice?: number;
  minArea?: number;
  maxArea?: number;
  location?: string[];
  propertyType?: string[];
  status?: ('available' | 'under-development' | 'investment-opportunity')[];
  features?: string[];
  minROI?: number;
  developer?: string[];
  completionYear?: number;
  zoning?: string[];
  vision2030Alignment?: string[];
  minEsgRating?: number;
  exclusive?: boolean;
  directFromDeveloper?: boolean;
  developerRating?: number;
  listingAge?: string;
  maxSeaportDistance?: number;
  maxAirportDistance?: number;
  maxHighwayDistance?: number;
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

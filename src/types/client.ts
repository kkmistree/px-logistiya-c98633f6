
export interface Client {
  id: string;
  name: string;
  email?: string;
  phone?: string;
  type: 'buyer' | 'seller' | 'investor' | 'tenant' | 'landlord';
  assignedTo: string; // user ID of assigned broker/agent
  status: 'active' | 'inactive' | 'archived';
  requirements?: {
    budget: {
      min: number;
      max: number;
    };
    location: string[];
    propertyType: string[];
    bedrooms: number[];
    minArea?: number;
    features?: string[];
    timeline?: string;
    purpose?: 'investment' | 'end-use' | 'both';
    paymentPreference?: 'cash' | 'mortgage' | 'payment-plan';
    notes?: string;
  };
  documents?: {
    id: string;
    name: string;
    type: string;
    url: string;
    uploadedAt: string; // ISO date string
  }[];
  interactions: {
    id: string;
    type: 'call' | 'email' | 'meeting' | 'viewing' | 'offer' | 'note';
    date: string; // ISO date string
    notes?: string;
    propertyId?: string;
    outcome?: string;
    followUpDate?: string; // ISO date string
  }[];
  createdAt: string; // ISO date string
  updatedAt: string; // ISO date string
}

export interface Mandate {
  id: string;
  clientId: string;
  type: 'buy' | 'sell' | 'invest' | 'rent';
  status: 'active' | 'pending' | 'completed' | 'cancelled';
  requirements: {
    budget: {
      min: number;
      max: number;
    };
    location: string[];
    propertyType: string[];
    bedrooms: number[];
    minArea?: number;
    features?: string[];
    timeline?: string;
    purpose?: 'investment' | 'end-use' | 'both';
    paymentPreference?: 'cash' | 'mortgage' | 'payment-plan';
    minROI?: number;
    notes?: string;
  };
  matchedProperties?: string[]; // array of property IDs
  createdAt: string; // ISO date string
  updatedAt: string; // ISO date string
  expiresAt?: string; // ISO date string
  confidentiality: 'public' | 'private' | 'circle-only';
  assignedCircles?: string[]; // array of circle IDs
}

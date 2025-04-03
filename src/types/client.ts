
export interface Client {
  id: string;
  name: string;
  email?: string;
  phone?: string;
  type: 'buyer' | 'seller' | 'investor' | 'tenant' | 'landlord';
  assignedTo: string; // user ID of assigned broker/agent
  status: 'active' | 'inactive' | 'archived';
  stage?: 'new' | 'contacted' | 'qualifying' | 'matched' | 'viewing' | 'offer' | 'closed';
  tags?: string[];
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
  savedProperties?: string[]; // array of property IDs
  viewedProperties?: string[]; // array of property IDs
  sharedProperties?: string[]; // array of property IDs
  shortlistedProperties?: string[]; // array of property IDs
  documents?: {
    id: string;
    name: string;
    type: string;
    url: string;
    uploadedAt: string; // ISO date string
  }[];
  interactions: {
    id: string;
    type: 'call' | 'email' | 'meeting' | 'viewing' | 'offer' | 'note' | 'whatsapp';
    date: string; // ISO date string
    notes?: string;
    propertyId?: string;
    outcome?: string;
    followUpDate?: string; // ISO date string
    summarization?: string; // AI summarization
  }[];
  metrics?: {
    dealsClosed: number;
    totalValue: number;
    avgRoi: number;
    matchRate: number;
    viewingsScheduled: number;
  };
  createdAt: string; // ISO date string
  updatedAt: string; // ISO date string
  lastContactedDate?: string; // ISO date string
}

export interface Mandate {
  id: string;
  clientId: string;
  type: 'buy' | 'sell' | 'invest' | 'rent';
  status: 'active' | 'pending' | 'completed' | 'cancelled';
  priority?: 'low' | 'medium' | 'high' | 'urgent';
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
  tags?: string[]; // e.g., "urgent", "first-time buyer", "cash buyer", "off-plan only"
  matchedProperties?: string[]; // array of property IDs
  createdAt: string; // ISO date string
  updatedAt: string; // ISO date string
  expiresAt?: string; // ISO date string
  confidentiality: 'public' | 'private' | 'circle-only';
  assignedCircles?: string[]; // array of circle IDs
}

export interface ClientFilter {
  types?: string[];
  stage?: string[];
  budget?: {
    min?: number;
    max?: number;
  };
  location?: string[];
  lastContactedDateRange?: {
    from?: string;
    to?: string;
  };
  tags?: string[];
  mandateStatus?: string[];
}

export interface CommunicationLog {
  id: string;
  clientId: string;
  type: 'email' | 'whatsapp' | 'call' | 'meeting' | 'note';
  content: string;
  timestamp: string; // ISO date string
  createdBy: string; // user ID
  attachments?: string[]; // array of attachment URLs
  summarization?: string; // AI summarization
}

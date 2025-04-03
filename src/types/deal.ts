
export interface Deal {
  id: string;
  propertyId: string;
  buyerId?: string; // client ID
  sellerId?: string; // client ID
  buyerAgentId?: string; // user ID
  sellerAgentId?: string; // user ID
  status: 'draft' | 'negotiation' | 'pending' | 'approved' | 'completed' | 'cancelled';
  price: number;
  depositAmount?: number;
  depositPaid?: boolean;
  depositDate?: string; // ISO date string
  commissionRate?: number;
  commissionAmount?: number;
  commissionSplit?: {
    buyerAgent: number;
    sellerAgent: number;
  };
  closingDate?: string; // ISO date string
  documents: {
    id: string;
    type: 'loi' | 'mou' | 'spa' | 'reservation' | 'payment' | 'other';
    name: string;
    url: string;
    status: 'draft' | 'pending' | 'signed' | 'rejected';
    uploadedAt: string; // ISO date string
    uploadedBy: string; // user ID
  }[];
  timeline: {
    stage: string;
    date: string; // ISO date string
    completedBy?: string; // user ID
    notes?: string;
  }[];
  notes?: string;
  createdAt: string; // ISO date string
  updatedAt: string; // ISO date string
}

export interface DealActivity {
  id: string;
  dealId: string;
  type: 'status_change' | 'document_upload' | 'comment' | 'payment' | 'signature';
  timestamp: string; // ISO date string
  userId: string;
  description: string;
  metadata?: Record<string, any>;
}

export interface DealTemplate {
  id: string;
  name: string;
  description?: string;
  stages: {
    id: string;
    name: string;
    order: number;
    requiredDocuments?: string[];
    requiredActions?: string[];
  }[];
  documents: {
    id: string;
    name: string;
    type: string;
    templateUrl?: string;
  }[];
  createdAt: string; // ISO date string
  updatedAt: string; // ISO date string
}

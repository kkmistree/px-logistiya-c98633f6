
import { Deal } from "@/types/deal";

// Define a simplified structure for the deals list that matches the DealsList component's needs
// This is separate from the strict Deal type used in the application
interface SimplifiedDeal {
  id: string;
  property: string;
  client: string;
  price: string;
  status: string;
  statusText: string;
  progress: number;
  date: string;
  lastUpdated: string;
  matchScore: number;
  transactionType: string;
  documents: {
    total: number;
    uploaded: number;
    pending: number;
  };
  dealInfo: {
    deposit?: string;
    commission?: string;
    brokersAccepted?: boolean;
    closing?: string;
  };
}

// Simplified deals used by the DealsList component
export const deals: SimplifiedDeal[] = [
  {
    id: "d1",
    property: "Warehouse Complex - Riyadh Industrial City",
    client: "ACME Industrials LLC",
    price: "SAR 23,500,000",
    status: "pending-approval",
    statusText: "Pending Approval",
    progress: 50,
    date: "2025-03-20",
    lastUpdated: "2025-03-20",
    matchScore: 91,
    transactionType: "Industrial Asset",
    documents: {
      total: 4,
      uploaded: 2,
      pending: 2
    },
    dealInfo: {
      deposit: "SAR 2,350,000",
      commission: "SAR 470,000",
      brokersAccepted: true,
      closing: "2025-05-20"
    }
  },
  {
    id: "d2", 
    property: "Manufacturing Facility - Jubail Industrial City",
    client: "Saudi Manufacturing Corp",
    price: "SAR 31,800,000",
    status: "documents",
    statusText: "Documents Pending",
    progress: 17,
    date: "2025-04-01",
    lastUpdated: "2025-04-01", 
    matchScore: 78,
    transactionType: "Industrial Asset",
    documents: {
      total: 6,
      uploaded: 1,
      pending: 5
    },
    dealInfo: {
      commission: "SAR 636,000",
      brokersAccepted: true
    }
  },
  {
    id: "d3",
    property: "Logistics Hub - Dammam Industrial City",
    client: "Gulf Logistics Ltd",
    price: "SAR 19,100,000",
    status: "completed",
    statusText: "Completed",
    progress: 100,
    date: "2025-03-15",
    lastUpdated: "2025-03-15",
    matchScore: 76,
    transactionType: "Industrial Asset",
    documents: {
      total: 8,
      uploaded: 8,
      pending: 0
    },
    dealInfo: {
      deposit: "SAR 1,910,000",
      commission: "SAR 382,000",
      brokersAccepted: true,
      closing: "2025-03-15"
    }
  }
];

// Standard Deal objects that conform to the Deal type
export const standardDeals: Deal[] = [
  {
    id: "deal1",
    propertyId: "prop1",
    buyerId: "client1",
    sellerId: "client2",
    buyerAgentId: "user1",
    sellerAgentId: "user2",
    status: "pending",
    price: 23500000,
    depositAmount: 2350000,
    depositPaid: true,
    depositDate: "2025-03-15T00:00:00Z",
    commissionRate: 2,
    commissionAmount: 470000,
    commissionSplit: {
      buyerAgent: 235000,
      sellerAgent: 235000
    },
    closingDate: "2025-05-20T00:00:00Z",
    documents: [
      {
        id: "doc1",
        type: "mou",
        name: "Memorandum of Understanding",
        url: "/documents/mou.pdf",
        status: "signed",
        uploadedAt: "2025-03-10T00:00:00Z",
        uploadedBy: "user1"
      },
      {
        id: "doc2",
        type: "spa",
        name: "Sales Purchase Agreement",
        url: "/documents/spa.pdf",
        status: "pending",
        uploadedAt: "2025-03-20T00:00:00Z",
        uploadedBy: "user2"
      }
    ],
    timeline: [
      {
        stage: "Offer Made",
        date: "2025-03-01T00:00:00Z",
        completedBy: "user1",
        notes: "Initial offer submitted"
      },
      {
        stage: "Offer Accepted",
        date: "2025-03-05T00:00:00Z",
        completedBy: "user2",
        notes: "Seller accepted the offer"
      }
    ],
    transactionType: "ready",
    createdAt: "2025-03-01T00:00:00Z",
    updatedAt: "2025-03-20T00:00:00Z"
  },
  {
    id: "deal2",
    propertyId: "prop2",
    buyerId: "client3",
    sellerId: "client4",
    buyerAgentId: "user1",
    status: "draft",
    price: 31800000,
    depositAmount: 3180000,
    depositPaid: false,
    commissionRate: 2,
    commissionAmount: 636000,
    documents: [
      {
        id: "doc3",
        type: "loi",
        name: "Letter of Intent",
        url: "/documents/loi.pdf",
        status: "draft",
        uploadedAt: "2025-04-01T00:00:00Z",
        uploadedBy: "user1"
      }
    ],
    timeline: [
      {
        stage: "Initial Discussion",
        date: "2025-04-01T00:00:00Z",
        completedBy: "user1",
        notes: "Client interested in the property"
      }
    ],
    transactionType: "resale",
    createdAt: "2025-04-01T00:00:00Z",
    updatedAt: "2025-04-01T00:00:00Z"
  },
  {
    id: "deal3",
    propertyId: "prop3",
    buyerId: "client5",
    sellerId: "client6",
    buyerAgentId: "user2",
    sellerAgentId: "user3",
    status: "completed",
    price: 19100000,
    depositAmount: 1910000,
    depositPaid: true,
    depositDate: "2025-02-10T00:00:00Z",
    commissionRate: 2,
    commissionAmount: 382000,
    commissionSplit: {
      buyerAgent: 191000,
      sellerAgent: 191000
    },
    closingDate: "2025-03-15T00:00:00Z",
    documents: [
      {
        id: "doc4",
        type: "mou",
        name: "Memorandum of Understanding",
        url: "/documents/mou.pdf",
        status: "signed",
        uploadedAt: "2025-02-05T00:00:00Z",
        uploadedBy: "user2"
      },
      {
        id: "doc5",
        type: "spa",
        name: "Sales Purchase Agreement",
        url: "/documents/spa.pdf",
        status: "signed",
        uploadedAt: "2025-02-20T00:00:00Z",
        uploadedBy: "user2"
      }
    ],
    timeline: [
      {
        stage: "Offer Made",
        date: "2025-02-01T00:00:00Z",
        completedBy: "user2",
        notes: "Initial offer submitted"
      },
      {
        stage: "Offer Accepted",
        date: "2025-02-03T00:00:00Z",
        completedBy: "user3",
        notes: "Seller accepted the offer"
      }
    ],
    transactionType: "off-plan",
    createdAt: "2025-02-01T00:00:00Z",
    updatedAt: "2025-03-15T00:00:00Z"
  }
];

// Modified utility functions to work with both simplified and standard deals
export const getDeal = (id: string): Deal | undefined => {
  return standardDeals.find(d => d.id === id);
};

export const getDealsByAgent = (agentId: string): Deal[] => {
  return standardDeals.filter(d => d.buyerAgentId === agentId || d.sellerAgentId === agentId);
};

export const getDealsByClient = (clientId: string): Deal[] => {
  return standardDeals.filter(d => d.buyerId === clientId || d.sellerId === clientId);
};

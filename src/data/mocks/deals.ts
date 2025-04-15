
import { Deal } from "@/types/deal";

export const deals: Deal[] = [
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

export const getDeal = (id: string): Deal | undefined => {
  return deals.find(d => d.id === id);
};

export const getDealsByAgent = (agentId: string): Deal[] => {
  return deals.filter(d => d.agent === agentId);
};

export const getDealsByClient = (clientId: string): Deal[] => {
  return deals.filter(d => d.client === clientId);
};

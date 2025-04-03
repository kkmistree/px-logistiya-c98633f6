import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { formatCurrency } from "@/utils/format";
import { Deal } from "@/types/deal";
import { 
  FileText, 
  Users, 
  Clock, 
  CheckCircle, 
  DollarSign,
  Award
} from "lucide-react";

interface DealsListProps {
  status: "all" | "initiated" | "docs" | "legal" | "closed";
}

// Mock data for deals
const mockDeals: Deal[] = [
  {
    id: "deal1",
    propertyId: "prop1",
    buyerId: "client1",
    sellerId: "client2",
    buyerAgentId: "user1",
    sellerAgentId: "user2",
    status: "pending",
    price: 2500000,
    depositAmount: 250000,
    depositPaid: true,
    depositDate: "2025-03-15T00:00:00Z",
    commissionRate: 2,
    commissionAmount: 50000,
    commissionSplit: {
      buyerAgent: 25000,
      sellerAgent: 25000
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
      },
      {
        stage: "MOU Signed",
        date: "2025-03-10T00:00:00Z",
        completedBy: "user1",
        notes: "Both parties signed the MOU"
      }
    ],
    notes: "Clean deal with motivated buyer and seller",
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
    price: 1800000,
    depositAmount: 180000,
    depositPaid: false,
    commissionRate: 2,
    commissionAmount: 36000,
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
    price: 3500000,
    depositAmount: 350000,
    depositPaid: true,
    depositDate: "2025-02-10T00:00:00Z",
    commissionRate: 2,
    commissionAmount: 70000,
    commissionSplit: {
      buyerAgent: 35000,
      sellerAgent: 35000
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
      },
      {
        id: "doc6",
        type: "payment",
        name: "Final Payment Proof",
        url: "/documents/payment.pdf",
        status: "signed",
        uploadedAt: "2025-03-10T00:00:00Z",
        uploadedBy: "user3"
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
      },
      {
        stage: "MOU Signed",
        date: "2025-02-05T00:00:00Z",
        completedBy: "user2",
        notes: "Both parties signed the MOU"
      },
      {
        stage: "SPA Signed",
        date: "2025-02-20T00:00:00Z",
        completedBy: "user3",
        notes: "Both parties signed the SPA"
      },
      {
        stage: "Final Payment",
        date: "2025-03-10T00:00:00Z",
        completedBy: "user2",
        notes: "Final payment processed"
      },
      {
        stage: "Deal Closed",
        date: "2025-03-15T00:00:00Z",
        completedBy: "user3",
        notes: "Property handover completed"
      }
    ],
    createdAt: "2025-02-01T00:00:00Z",
    updatedAt: "2025-03-15T00:00:00Z"
  }
];

// Function to format price
const formatPrice = (price: number) => {
  return formatCurrency(price, 'AED');
};

// Function to format date
const formatDate = (dateString: string) => {
  const date = new Date(dateString);
  return date.toLocaleDateString("en-US", { 
    year: 'numeric', 
    month: 'short', 
    day: 'numeric' 
  });
};

// Function to calculate deal progress
const calculateProgress = (deal: Deal) => {
  const totalStages = 6; // Example: offer, mou, deposit, spa, final payment, closing
  const completedStages = deal.timeline.length;
  return Math.min(100, Math.round((completedStages / totalStages) * 100));
};

// Function to get status badge color
const getStatusColor = (status: string) => {
  switch(status) {
    case 'draft': return 'bg-slate-500';
    case 'negotiation': return 'bg-blue-500';
    case 'pending': return 'bg-amber-500';
    case 'approved': return 'bg-purple-500';
    case 'completed': return 'bg-green-500';
    case 'cancelled': return 'bg-red-500';
    default: return 'bg-slate-500';
  }
};

// Generate match score (new function)
const getMatchScore = (deal: Deal) => {
  return Math.floor(Math.random() * 31) + 70; // Random score between 70-100
};

const DealsList = ({ status }: DealsListProps) => {
  // Filter deals based on status
  const filteredDeals = status === "all" 
    ? mockDeals 
    : mockDeals.filter(deal => {
        if (status === "initiated") return deal.status === "draft" || deal.status === "negotiation";
        if (status === "docs") return deal.status === "pending";
        if (status === "legal") return deal.status === "approved";
        if (status === "closed") return deal.status === "completed";
        return true;
      });
  
  return (
    <div className="space-y-4">
      {filteredDeals.length === 0 ? (
        <div className="text-center py-10">
          <p className="text-slate-500">No deals found in this category</p>
        </div>
      ) : (
        filteredDeals.map(deal => {
          const matchScore = getMatchScore(deal);
          
          return (
            <Card key={deal.id} className="hover:shadow-md transition-shadow cursor-pointer">
              <CardContent className="p-6">
                <div className="flex flex-col md:flex-row justify-between">
                  <div className="flex-1">
                    <div className="flex flex-wrap gap-2 items-center mb-2">
                      <h3 className="font-semibold text-lg">{formatPrice(deal.price)} Deal</h3>
                      <Badge className={getStatusColor(deal.status)}>
                        {deal.status.charAt(0).toUpperCase() + deal.status.slice(1)}
                      </Badge>
                      <Badge variant="match" className="ml-auto">
                        <Award size={12} className="mr-1" />
                        Match Score: {matchScore}%
                      </Badge>
                    </div>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-4">
                      <div>
                        <p className="text-xs text-slate-500">Client</p>
                        <p className="font-medium">John Smith (Buyer)</p>
                      </div>
                      <div>
                        <p className="text-xs text-slate-500">Property</p>
                        <p className="font-medium">Palm Jumeirah Villa</p>
                      </div>
                      <div>
                        <p className="text-xs text-slate-500">Transaction Type</p>
                        <p className="font-medium">Ready Property</p>
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <div className="flex justify-between items-center text-sm">
                        <span>Deal Progress</span>
                        <span>{calculateProgress(deal)}%</span>
                      </div>
                      <Progress value={calculateProgress(deal)} className="h-2" />
                    </div>
                    
                    <div className="flex flex-wrap gap-x-6 gap-y-2 mt-4 text-sm text-slate-600">
                      {deal.depositPaid && (
                        <div className="flex items-center">
                          <CheckCircle size={14} className="text-green-500 mr-2" />
                          <span>Deposit: {formatPrice(deal.depositAmount || 0)}</span>
                        </div>
                      )}
                      
                      <div className="flex items-center">
                        <DollarSign size={14} className="text-blue-500 mr-2" />
                        <span>Commission: {formatPrice(deal.commissionAmount || 0)}</span>
                      </div>
                      
                      <div className="flex items-center">
                        <Users size={14} className="text-purple-500 mr-2" />
                        <span>Both brokers accepted</span>
                      </div>
                      
                      <div className="flex items-center">
                        <FileText size={14} className="text-amber-500 mr-2" />
                        <span>Docs: {deal.documents.length}</span>
                      </div>
                      
                      {deal.closingDate && (
                        <div className="flex items-center">
                          <Clock size={14} className="text-slate-500 mr-2" />
                          <span>Closing: {formatDate(deal.closingDate)}</span>
                        </div>
                      )}
                    </div>
                  </div>
                  
                  <div className="mt-4 md:mt-0 md:ml-4 flex flex-col justify-center items-end">
                    <div className="text-xs text-slate-500 mb-1">Last updated</div>
                    <div className="font-medium">{formatDate(deal.updatedAt)}</div>
                    <div className="mt-3 space-x-2">
                      <button className="text-sm text-blue-600 hover:underline">
                        View Detail
                      </button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          );
        })
      )}
    </div>
  );
};

export default DealsList;

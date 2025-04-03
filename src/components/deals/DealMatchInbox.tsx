
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Clock, DollarSign, FileText, Home, Info, MapPin, User } from "lucide-react";
import { formatCurrency } from "@/utils/format";

// Mock data for deal match proposals
const matchProposals = [
  {
    id: "m1",
    propertyName: "Marina Terrace",
    propertyType: "2 Bedroom Apartment",
    location: "Dubai Marina",
    clientName: "James Wilson",
    clientCriteria: "2BR in Marina, high floor, sea view",
    price: 2200000,
    matchScore: 92,
    commission: 44000,
    commissionSplit: "50/50",
    status: "pending",
    receivedAt: "2025-06-01T08:30:00Z"
  },
  {
    id: "m2",
    propertyName: "Downtown Heights",
    propertyType: "1 Bedroom Apartment",
    location: "Downtown Dubai",
    clientName: "Sarah Chen",
    clientCriteria: "1-2BR in Downtown, investment, high ROI",
    price: 1450000,
    matchScore: 87,
    commission: 29000,
    commissionSplit: "50/50",
    status: "pending",
    receivedAt: "2025-05-30T14:15:00Z"
  },
  {
    id: "m3",
    propertyName: "Palm Vista",
    propertyType: "3 Bedroom Villa",
    location: "Palm Jumeirah",
    clientName: "Mohammed Al Qasimi",
    clientCriteria: "Luxury villa, beachfront, min 3BR",
    price: 8500000,
    matchScore: 94,
    commission: 170000,
    commissionSplit: "40/60",
    status: "accepted",
    receivedAt: "2025-05-28T09:45:00Z"
  },
  {
    id: "m4",
    propertyName: "Business Bay Office",
    propertyType: "Commercial Space",
    location: "Business Bay",
    clientName: "Global Traders LLC",
    clientCriteria: "Office space, 100-150 sqm, Business Bay",
    price: 3800000,
    matchScore: 89,
    commission: 76000,
    commissionSplit: "50/50",
    status: "rejected",
    receivedAt: "2025-05-25T11:20:00Z"
  }
];

// Format date relative to now
const formatRelativeDate = (dateString: string) => {
  const date = new Date(dateString);
  const now = new Date();
  const diffTime = Math.abs(now.getTime() - date.getTime());
  const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
  
  if (diffDays === 0) {
    return "Today";
  } else if (diffDays === 1) {
    return "Yesterday";
  } else if (diffDays < 7) {
    return `${diffDays} days ago`;
  } else {
    return date.toLocaleDateString("en-US", {
      month: "short",
      day: "numeric"
    });
  }
};

const getStatusBadge = (status: string) => {
  switch(status) {
    case "pending":
      return <Badge variant="secondary">Awaiting Response</Badge>;
    case "accepted":
      return <Badge variant="success">Accepted</Badge>;
    case "rejected":
      return <Badge variant="destructive">Declined</Badge>;
    default:
      return <Badge>Unknown</Badge>;
  }
};

const DealMatchInbox = () => {
  return (
    <div className="space-y-6">
      <h2 className="text-xl font-semibold mb-4">Deal Match Inbox</h2>
      
      <div className="space-y-4">
        {matchProposals.map((proposal) => (
          <Card key={proposal.id} className={`overflow-hidden ${proposal.status === 'pending' ? 'border-l-4 border-l-blue-500' : ''}`}>
            <CardContent className="p-6">
              <div className="flex flex-col lg:flex-row gap-6">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-3">
                    <h3 className="font-semibold text-lg">{proposal.propertyName}</h3>
                    <Badge variant="match">Match Score: {proposal.matchScore}%</Badge>
                    {getStatusBadge(proposal.status)}
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <div>
                      <div className="flex items-center mb-2">
                        <Home size={16} className="text-slate-500 mr-2" />
                        <span>{proposal.propertyType}</span>
                      </div>
                      <div className="flex items-center mb-2">
                        <MapPin size={16} className="text-slate-500 mr-2" />
                        <span>{proposal.location}</span>
                      </div>
                      <div className="flex items-center">
                        <DollarSign size={16} className="text-slate-500 mr-2" />
                        <span>{formatCurrency(proposal.price, 'AED')}</span>
                      </div>
                    </div>
                    
                    <div>
                      <div className="flex items-center mb-2">
                        <User size={16} className="text-slate-500 mr-2" />
                        <span>Client: {proposal.clientName}</span>
                      </div>
                      <div className="flex items-start mb-2">
                        <Info size={16} className="text-slate-500 mr-2 mt-0.5" />
                        <span className="text-sm">{proposal.clientCriteria}</span>
                      </div>
                      <div className="flex items-center">
                        <Clock size={16} className="text-slate-500 mr-2" />
                        <span>Received: {formatRelativeDate(proposal.receivedAt)}</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-slate-50 p-3 rounded-lg">
                    <h4 className="font-medium mb-2">Proposed Terms</h4>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                      <div>
                        <p className="text-slate-500">Commission</p>
                        <p className="font-medium">{formatCurrency(proposal.commission, 'AED')}</p>
                      </div>
                      <div>
                        <p className="text-slate-500">Split Ratio</p>
                        <p className="font-medium">{proposal.commissionSplit}</p>
                      </div>
                      <div>
                        <p className="text-slate-500">Required Documents</p>
                        <p className="font-medium">MOU, Client KYC</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                {proposal.status === "pending" && (
                  <div className="flex flex-row lg:flex-col justify-end gap-2 mt-4 lg:mt-0">
                    <Button className="w-full bg-estate-primary hover:bg-estate-primary/90">
                      Accept Terms
                    </Button>
                    <Button variant="outline" className="w-full">
                      Negotiate
                    </Button>
                    <Button variant="outline" className="w-full text-red-500 hover:text-red-700">
                      Decline
                    </Button>
                  </div>
                )}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default DealMatchInbox;

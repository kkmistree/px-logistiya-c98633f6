
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { FileText } from "lucide-react";

// Mock data for deal room messages
const dealRoomMessages = [
  {
    id: "d1",
    title: "Palm Jumeirah Villa - John Smith",
    price: "AED 5.8M",
    lastMessage: {
      content: "The seller has accepted the offer",
      timestamp: "2025-06-10T14:30:00Z",
      sender: { id: "m1", name: "Sarah Johnson", role: "Seller Agent" },
      isRead: false
    },
    status: "offer-accepted",
    stage: "Document Collection",
    unreadCount: 2
  },
  {
    id: "d2",
    title: "Downtown Apartment - Michael Zhang",
    price: "AED 2.2M",
    lastMessage: {
      content: "Please review the attached SPA draft",
      timestamp: "2025-06-09T10:15:00Z",
      sender: { id: "m2", name: "Legal Team", role: "Legal" },
      isRead: true
    },
    status: "docs-review",
    stage: "SPA Review",
    unreadCount: 0
  },
  {
    id: "d3",
    title: "JVC Townhouse - Fatima Al Mansoori",
    price: "AED 1.8M",
    lastMessage: {
      content: "Deposit payment has been confirmed",
      timestamp: "2025-06-08T16:45:00Z",
      sender: { id: "m3", name: "David Chen", role: "Finance" },
      isRead: false
    },
    status: "deposit-paid",
    stage: "Deposit Verification",
    unreadCount: 1
  }
];

// Function to get status badge styles
const getStatusBadge = (status: string) => {
  switch (status) {
    case 'offer-accepted':
      return { label: 'Offer Accepted', color: 'bg-green-500' };
    case 'docs-review':
      return { label: 'Docs Review', color: 'bg-blue-500' };
    case 'deposit-paid':
      return { label: 'Deposit Paid', color: 'bg-amber-500' };
    default:
      return { label: status, color: 'bg-slate-500' };
  }
};

// Format date for display
const formatMessageDate = (dateString: string) => {
  const messageDate = new Date(dateString);
  const today = new Date();
  const yesterday = new Date(today);
  yesterday.setDate(yesterday.getDate() - 1);
  
  if (messageDate.toDateString() === today.toDateString()) {
    return messageDate.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  } else if (messageDate.toDateString() === yesterday.toDateString()) {
    return 'Yesterday';
  } else if (today.getTime() - messageDate.getTime() < 7 * 24 * 60 * 60 * 1000) {
    return messageDate.toLocaleDateString([], { weekday: 'short' });
  } else {
    return messageDate.toLocaleDateString([], { month: 'short', day: 'numeric' });
  }
};

const DealRoomMessages = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <div className="md:col-span-1 space-y-1">
        {dealRoomMessages.map(dealRoom => {
          const statusBadge = getStatusBadge(dealRoom.status);
          
          return (
            <div 
              key={dealRoom.id} 
              className={`p-3 rounded-lg cursor-pointer transition-colors ${
                dealRoom.unreadCount > 0 ? 'bg-blue-50 hover:bg-blue-100' : 'hover:bg-slate-100'
              }`}
            >
              <div className="flex items-center gap-3">
                <div className="relative w-10 h-10 bg-slate-100 rounded-lg flex items-center justify-center">
                  <FileText size={20} className="text-slate-600" />
                </div>
                
                <div className="flex-1 min-w-0">
                  <div className="flex justify-between items-center">
                    <h3 className="font-medium truncate">{dealRoom.title}</h3>
                    <span className="text-xs text-slate-500 whitespace-nowrap ml-2">
                      {formatMessageDate(dealRoom.lastMessage.timestamp)}
                    </span>
                  </div>
                  
                  <div className="flex items-center mt-1">
                    <Badge className={statusBadge.color}>{statusBadge.label}</Badge>
                    <span className="text-xs text-slate-500 ml-2">{dealRoom.price}</span>
                  </div>
                  
                  <div className="flex justify-between items-center mt-1">
                    <p className={`text-sm truncate ${dealRoom.unreadCount > 0 ? 'font-medium' : 'text-slate-500'}`}>
                      <span className="font-medium">{dealRoom.lastMessage.sender.name}: </span>
                      {dealRoom.lastMessage.content}
                    </p>
                    {dealRoom.unreadCount > 0 && (
                      <Badge className="ml-2 bg-estate-primary">{dealRoom.unreadCount}</Badge>
                    )}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      
      <div className="md:col-span-2">
        <Card className="h-full">
          <CardContent className="flex items-center justify-center h-full p-8 text-center">
            <div className="max-w-md">
              <h3 className="text-xl font-medium mb-2">Select a deal room</h3>
              <p className="text-slate-500">
                Choose a deal room conversation to collaborate with clients and stakeholders on transaction details.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default DealRoomMessages;

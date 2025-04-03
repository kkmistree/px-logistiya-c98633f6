
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";

// Mock data for messages
const messages = [
  {
    id: "m1",
    contact: {
      id: "c1",
      name: "John Smith",
      avatar: "https://placehold.co/200?text=JS",
      status: "online"
    },
    lastMessage: {
      content: "Do you have any updates on the Palm Jumeirah villa?",
      timestamp: "2025-06-10T10:30:00Z",
      isRead: false,
      sender: "c1"
    },
    unreadCount: 2
  },
  {
    id: "m2",
    contact: {
      id: "c2",
      name: "Sarah Johnson",
      avatar: "https://placehold.co/200?text=SJ",
      status: "offline"
    },
    lastMessage: {
      content: "I've shared the Downtown apartment details with you.",
      timestamp: "2025-06-09T14:45:00Z",
      isRead: true,
      sender: "user"
    },
    unreadCount: 0
  },
  {
    id: "m3",
    contact: {
      id: "c3",
      name: "Michael Zhang",
      avatar: "https://placehold.co/200?text=MZ",
      status: "online"
    },
    lastMessage: {
      content: "When can we schedule a viewing for the JVC property?",
      timestamp: "2025-06-08T09:15:00Z",
      isRead: false,
      sender: "c3"
    },
    unreadCount: 1
  },
  {
    id: "m4",
    contact: {
      id: "c4",
      name: "Fatima Al Mansoori",
      avatar: "https://placehold.co/200?text=FM",
      status: "away"
    },
    lastMessage: {
      content: "Thank you for your help with the property search.",
      timestamp: "2025-06-07T16:20:00Z",
      isRead: true,
      sender: "c4"
    },
    unreadCount: 0
  },
  {
    id: "m5",
    contact: {
      id: "c5",
      name: "David Chen",
      avatar: "https://placehold.co/200?text=DC",
      status: "offline"
    },
    lastMessage: {
      content: "Let me know when the offer is accepted.",
      timestamp: "2025-06-05T11:30:00Z",
      isRead: true,
      sender: "c5"
    },
    unreadCount: 0
  }
];

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

const DirectMessages = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <div className="md:col-span-1 space-y-1">
        {messages.map(message => (
          <div 
            key={message.id} 
            className={`p-3 rounded-lg cursor-pointer transition-colors ${
              message.unreadCount > 0 ? 'bg-blue-50 hover:bg-blue-100' : 'hover:bg-slate-100'
            }`}
          >
            <div className="flex items-center gap-3">
              <div className="relative">
                <Avatar>
                  <AvatarImage src={message.contact.avatar} alt={message.contact.name} />
                  <AvatarFallback>{message.contact.name.charAt(0)}{message.contact.name.split(' ')[1]?.charAt(0)}</AvatarFallback>
                </Avatar>
                <div className={`absolute bottom-0 right-0 w-3 h-3 rounded-full border-2 border-white ${
                  message.contact.status === 'online' ? 'bg-green-500' :
                  message.contact.status === 'away' ? 'bg-amber-500' : 'bg-slate-300'
                }`}></div>
              </div>
              
              <div className="flex-1 min-w-0">
                <div className="flex justify-between items-center">
                  <h3 className="font-medium truncate">{message.contact.name}</h3>
                  <span className="text-xs text-slate-500 whitespace-nowrap ml-2">
                    {formatMessageDate(message.lastMessage.timestamp)}
                  </span>
                </div>
                <div className="flex justify-between items-center mt-1">
                  <p className={`text-sm truncate ${message.unreadCount > 0 && message.lastMessage.sender !== 'user' ? 'font-medium' : 'text-slate-500'}`}>
                    {message.lastMessage.sender === 'user' && <span>You: </span>}
                    {message.lastMessage.content}
                  </p>
                  {message.unreadCount > 0 && (
                    <Badge className="ml-2 bg-estate-primary">{message.unreadCount}</Badge>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      <div className="md:col-span-2">
        <Card className="h-full">
          <CardContent className="flex items-center justify-center h-full p-8 text-center">
            <div className="max-w-md">
              <h3 className="text-xl font-medium mb-2">Select a conversation</h3>
              <p className="text-slate-500">
                Choose a conversation from the list to view messages and start chatting.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default DirectMessages;

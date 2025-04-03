
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Users } from "lucide-react";

// Mock data for group messages
const groupMessages = [
  {
    id: "g1",
    name: "Dubai Marina Team",
    members: [
      { id: "m1", name: "John Smith", avatar: "https://placehold.co/200?text=JS" },
      { id: "m2", name: "Sarah Johnson", avatar: "https://placehold.co/200?text=SJ" },
      { id: "m3", name: "Michael Zhang", avatar: "https://placehold.co/200?text=MZ" }
    ],
    lastMessage: {
      content: "Let's discuss the new Marina listings tomorrow",
      timestamp: "2025-06-10T15:30:00Z",
      sender: { id: "m1", name: "John Smith" },
      isRead: false
    },
    unreadCount: 3
  },
  {
    id: "g2",
    name: "Palm Project Coordination",
    members: [
      { id: "m2", name: "Sarah Johnson", avatar: "https://placehold.co/200?text=SJ" },
      { id: "m4", name: "Fatima Al Mansoori", avatar: "https://placehold.co/200?text=FM" },
      { id: "m5", name: "David Chen", avatar: "https://placehold.co/200?text=DC" }
    ],
    lastMessage: {
      content: "Updated floor plans are now available",
      timestamp: "2025-06-09T11:20:00Z",
      sender: { id: "m4", name: "Fatima Al Mansoori" },
      isRead: true
    },
    unreadCount: 0
  },
  {
    id: "g3",
    name: "Emaar Coordination",
    members: [
      { id: "m1", name: "John Smith", avatar: "https://placehold.co/200?text=JS" },
      { id: "m3", name: "Michael Zhang", avatar: "https://placehold.co/200?text=MZ" },
      { id: "m5", name: "David Chen", avatar: "https://placehold.co/200?text=DC" }
    ],
    lastMessage: {
      content: "New incentives for Downtown project",
      timestamp: "2025-06-08T09:45:00Z",
      sender: { id: "m5", name: "David Chen" },
      isRead: false
    },
    unreadCount: 1
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

const GroupMessages = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <div className="md:col-span-1 space-y-1">
        {groupMessages.map(group => (
          <div 
            key={group.id} 
            className={`p-3 rounded-lg cursor-pointer transition-colors ${
              group.unreadCount > 0 ? 'bg-blue-50 hover:bg-blue-100' : 'hover:bg-slate-100'
            }`}
          >
            <div className="flex items-center gap-3">
              <div className="relative w-10 h-10 bg-slate-200 rounded-full flex items-center justify-center">
                <Users size={20} className="text-slate-600" />
                <div className="absolute -bottom-1 -right-1 w-5 h-5 rounded-full bg-slate-100 flex items-center justify-center text-xs">
                  {group.members.length}
                </div>
              </div>
              
              <div className="flex-1 min-w-0">
                <div className="flex justify-between items-center">
                  <h3 className="font-medium truncate">{group.name}</h3>
                  <span className="text-xs text-slate-500 whitespace-nowrap ml-2">
                    {formatMessageDate(group.lastMessage.timestamp)}
                  </span>
                </div>
                <div className="flex justify-between items-center mt-1">
                  <p className={`text-sm truncate ${group.unreadCount > 0 ? 'font-medium' : 'text-slate-500'}`}>
                    <span className="font-medium">{group.lastMessage.sender.name.split(' ')[0]}: </span>
                    {group.lastMessage.content}
                  </p>
                  {group.unreadCount > 0 && (
                    <Badge className="ml-2 bg-estate-primary">{group.unreadCount}</Badge>
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
              <h3 className="text-xl font-medium mb-2">Select a group chat</h3>
              <p className="text-slate-500">
                Choose a group conversation from the list to view messages and collaborate with your team.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default GroupMessages;


import { useState } from "react";
import AppShell from "@/components/layout/AppShell";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import MessagesHeader from "@/components/messages/MessagesHeader";
import DirectMessages from "@/components/messages/DirectMessages";
import GroupMessages from "@/components/messages/GroupMessages";
import DealRoomMessages from "@/components/messages/DealRoomMessages";

const Messages = () => {
  return (
    <AppShell>
      <div className="space-y-6">
        <MessagesHeader />
        
        <Tabs defaultValue="direct">
          <TabsList className="mb-6">
            <TabsTrigger value="direct">Direct Messages</TabsTrigger>
            <TabsTrigger value="group">Group Messages</TabsTrigger>
            <TabsTrigger value="dealroom">Deal Room</TabsTrigger>
          </TabsList>
          
          <TabsContent value="direct">
            <DirectMessages />
          </TabsContent>
          
          <TabsContent value="group">
            <GroupMessages />
          </TabsContent>
          
          <TabsContent value="dealroom">
            <DealRoomMessages />
          </TabsContent>
        </Tabs>
      </div>
    </AppShell>
  );
};

export default Messages;

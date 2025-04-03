
import React, { useState } from "react";
import AppShell from "@/components/layout/AppShell";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ClientsTable from "@/components/clients/ClientsTable";
import ClientsHeader from "@/components/clients/ClientsHeader";
import ClientDetails from "@/components/clients/ClientDetails";
import ClientDialog from "@/components/dashboard/ClientDialog";
import { Client } from "@/types/client";
import { useToast } from "@/hooks/use-toast";

const Clients = () => {
  const [selectedClient, setSelectedClient] = useState<Client | null>(null);
  const [showAddClient, setShowAddClient] = useState<boolean>(false);
  const { toast } = useToast();

  // Mock data for demonstration - in a real app, this would come from an API
  const mockClients: Client[] = [
    {
      id: "1",
      name: "John Smith",
      email: "john.smith@example.com",
      phone: "+971 50 123 4567",
      type: "buyer",
      assignedTo: "user123",
      status: "active",
      requirements: {
        budget: {
          min: 1000000,
          max: 2500000
        },
        location: ["Palm Jumeirah", "Dubai Marina"],
        propertyType: ["apartment", "penthouse"],
        bedrooms: [2, 3],
        minArea: 1500,
      },
      interactions: [
        {
          id: "int1",
          type: "call",
          date: new Date().toISOString(),
          notes: "Discussed property requirements"
        }
      ],
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    },
    {
      id: "2",
      name: "Sarah Johnson",
      email: "sarah.j@example.com",
      phone: "+971 50 987 6543",
      type: "seller",
      assignedTo: "user123",
      status: "active",
      interactions: [
        {
          id: "int2",
          type: "meeting",
          date: new Date().toISOString(),
          notes: "Property valuation meeting"
        }
      ],
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    },
    {
      id: "3",
      name: "Mohammed Al Farsi",
      email: "mohammed.f@example.com",
      phone: "+971 55 111 2222",
      type: "investor",
      assignedTo: "user123",
      status: "active",
      requirements: {
        budget: {
          min: 3000000,
          max: 10000000
        },
        location: ["Downtown Dubai", "Business Bay"],
        propertyType: ["apartment"],
        bedrooms: [1, 2],
        minArea: 800,
        purpose: "investment"
      },
      interactions: [
        {
          id: "int3",
          type: "email",
          date: new Date().toISOString(),
          notes: "Sent investment portfolio options"
        }
      ],
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    }
  ];

  const handleClientSelect = (client: Client) => {
    setSelectedClient(client);
  };

  const handleAddInteraction = (clientId: string, interaction: any) => {
    toast({
      title: "Interaction added",
      description: `Added a new ${interaction.type} interaction for client`
    });
  };

  return (
    <AppShell>
      <div className="space-y-6">
        <ClientsHeader onAddClient={() => setShowAddClient(true)} />
        
        <Tabs defaultValue="all" className="w-full">
          <TabsList className="mb-4">
            <TabsTrigger value="all">All Clients</TabsTrigger>
            <TabsTrigger value="buyers">Buyers</TabsTrigger>
            <TabsTrigger value="sellers">Sellers</TabsTrigger>
            <TabsTrigger value="investors">Investors</TabsTrigger>
          </TabsList>
          
          <TabsContent value="all" className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="md:col-span-2">
                <ClientsTable 
                  clients={mockClients} 
                  onClientSelect={handleClientSelect} 
                  selectedClientId={selectedClient?.id}
                />
              </div>
              
              <div className="bg-white rounded-lg border border-slate-200 shadow-sm">
                {selectedClient ? (
                  <ClientDetails 
                    client={selectedClient} 
                    onAddInteraction={handleAddInteraction}
                  />
                ) : (
                  <div className="p-6 text-center text-slate-500">
                    <p>Select a client to view details</p>
                  </div>
                )}
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="buyers">
            <ClientsTable 
              clients={mockClients.filter(c => c.type === 'buyer')} 
              onClientSelect={handleClientSelect}
              selectedClientId={selectedClient?.id}
            />
          </TabsContent>
          
          <TabsContent value="sellers">
            <ClientsTable 
              clients={mockClients.filter(c => c.type === 'seller')} 
              onClientSelect={handleClientSelect}
              selectedClientId={selectedClient?.id}
            />
          </TabsContent>
          
          <TabsContent value="investors">
            <ClientsTable 
              clients={mockClients.filter(c => c.type === 'investor')} 
              onClientSelect={handleClientSelect}
              selectedClientId={selectedClient?.id}
            />
          </TabsContent>
        </Tabs>
      </div>
      
      <ClientDialog open={showAddClient} onOpenChange={setShowAddClient} />
    </AppShell>
  );
};

export default Clients;

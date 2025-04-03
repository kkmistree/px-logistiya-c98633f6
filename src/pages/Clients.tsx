
import React, { useState } from "react";
import AppShell from "@/components/layout/AppShell";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ClientsTable from "@/components/clients/ClientsTable";
import ClientsHeader from "@/components/clients/ClientsHeader";
import ClientDetails from "@/components/clients/ClientDetails";
import ClientDialog from "@/components/clients/ClientDialog";
import { useIsMobile } from "@/hooks/use-mobile";
import { Client, ClientFilter } from "@/types/client";
import { useToast } from "@/hooks/use-toast";
import { Sheet, SheetContent } from "@/components/ui/sheet";

const Clients = () => {
  const [selectedClient, setSelectedClient] = useState<Client | null>(null);
  const [showAddClient, setShowAddClient] = useState<boolean>(false);
  const [showImportExport, setShowImportExport] = useState<boolean>(false);
  const [filters, setFilters] = useState<ClientFilter>({});
  const [searchQuery, setSearchQuery] = useState<string>("");
  const isMobile = useIsMobile();
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
      stage: "matched",
      tags: ["premium", "first-time"],
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
      metrics: {
        dealsClosed: 1,
        totalValue: 2200000,
        avgRoi: 6.3,
        matchRate: 78,
        viewingsScheduled: 4
      },
      interactions: [
        {
          id: "int1",
          type: "call",
          date: new Date().toISOString(),
          notes: "Discussed property requirements"
        },
        {
          id: "int2",
          type: "whatsapp",
          date: new Date(Date.now() - 86400000 * 2).toISOString(),
          notes: "Shared 3 property options"
        }
      ],
      savedProperties: ["prop1", "prop2"],
      viewedProperties: ["prop1"],
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
      lastContactedDate: new Date().toISOString()
    },
    {
      id: "2",
      name: "Sarah Johnson",
      email: "sarah.j@example.com",
      phone: "+971 50 987 6543",
      type: "seller",
      assignedTo: "user123",
      status: "active",
      stage: "qualifying",
      interactions: [
        {
          id: "int2",
          type: "meeting",
          date: new Date(Date.now() - 86400000 * 5).toISOString(),
          notes: "Property valuation meeting"
        }
      ],
      createdAt: new Date(Date.now() - 86400000 * 15).toISOString(),
      updatedAt: new Date(Date.now() - 86400000 * 5).toISOString(),
      lastContactedDate: new Date(Date.now() - 86400000 * 5).toISOString()
    },
    {
      id: "3",
      name: "Mohammed Al Farsi",
      email: "mohammed.f@example.com",
      phone: "+971 55 111 2222",
      type: "investor",
      stage: "viewing",
      assignedTo: "user123",
      status: "active",
      tags: ["premium", "cash-buyer"],
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
      metrics: {
        dealsClosed: 0,
        totalValue: 0,
        avgRoi: 0,
        matchRate: 65,
        viewingsScheduled: 2
      },
      interactions: [
        {
          id: "int3",
          type: "email",
          date: new Date(Date.now() - 86400000 * 3).toISOString(),
          notes: "Sent investment portfolio options"
        }
      ],
      createdAt: new Date(Date.now() - 86400000 * 30).toISOString(),
      updatedAt: new Date(Date.now() - 86400000 * 3).toISOString(),
      lastContactedDate: new Date(Date.now() - 86400000 * 3).toISOString()
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

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    // In a real app, this would filter the clients
  };

  const handleFilterChange = (newFilters: ClientFilter) => {
    setFilters(newFilters);
    // In a real app, this would filter the clients
  };

  const handleImportExport = () => {
    setShowImportExport(true);
  };

  const filteredClients = mockClients; // In a real app, apply filters and search

  return (
    <AppShell>
      <div className="space-y-6">
        <ClientsHeader 
          onAddClient={() => setShowAddClient(true)} 
          onSearch={handleSearch}
          onFilterChange={handleFilterChange}
          onImportExport={handleImportExport}
        />
        
        <Tabs defaultValue="all" className="w-full">
          <TabsList className="mb-4">
            <TabsTrigger value="all">All Clients</TabsTrigger>
            <TabsTrigger value="buyers">Buyers</TabsTrigger>
            <TabsTrigger value="sellers">Sellers</TabsTrigger>
            <TabsTrigger value="investors">Investors</TabsTrigger>
            <TabsTrigger value="funnel">Pipeline</TabsTrigger>
          </TabsList>
          
          <TabsContent value="all" className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="md:col-span-2">
                <ClientsTable 
                  clients={filteredClients} 
                  onClientSelect={handleClientSelect} 
                  selectedClientId={selectedClient?.id}
                />
              </div>
              
              {isMobile ? (
                <Sheet open={!!selectedClient} onOpenChange={(open) => !open && setSelectedClient(null)}>
                  <SheetContent className="w-full sm:max-w-md p-0" side="right">
                    {selectedClient && (
                      <ClientDetails 
                        client={selectedClient} 
                        onAddInteraction={handleAddInteraction}
                      />
                    )}
                  </SheetContent>
                </Sheet>
              ) : (
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
              )}
            </div>
          </TabsContent>
          
          <TabsContent value="buyers">
            <ClientsTable 
              clients={filteredClients.filter(c => c.type === 'buyer')} 
              onClientSelect={handleClientSelect}
              selectedClientId={selectedClient?.id}
            />
          </TabsContent>
          
          <TabsContent value="sellers">
            <ClientsTable 
              clients={filteredClients.filter(c => c.type === 'seller')} 
              onClientSelect={handleClientSelect}
              selectedClientId={selectedClient?.id}
            />
          </TabsContent>
          
          <TabsContent value="investors">
            <ClientsTable 
              clients={filteredClients.filter(c => c.type === 'investor')} 
              onClientSelect={handleClientSelect}
              selectedClientId={selectedClient?.id}
            />
          </TabsContent>
          
          <TabsContent value="funnel">
            <div className="bg-white rounded-lg border border-slate-200 shadow-sm p-6">
              <h3 className="text-lg font-semibold mb-4">Client Pipeline</h3>
              <div className="grid grid-cols-1 lg:grid-cols-7 gap-4">
                {['new', 'contacted', 'qualifying', 'matched', 'viewing', 'offer', 'closed'].map((stage) => (
                  <div key={stage} className="border rounded-lg p-4">
                    <h4 className="font-medium capitalize mb-3">{stage}</h4>
                    <div className="space-y-2">
                      {filteredClients.filter(c => c.stage === stage).map(client => (
                        <div 
                          key={client.id} 
                          className="bg-slate-50 p-2 rounded text-sm cursor-pointer hover:bg-slate-100"
                          onClick={() => handleClientSelect(client)}
                        >
                          {client.name}
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
      
      <ClientDialog open={showAddClient} onOpenChange={setShowAddClient} />
    </AppShell>
  );
};

export default Clients;

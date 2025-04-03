
import React, { useState } from "react";
import AppShell from "@/components/layout/AppShell";
import { Client, ClientFilter } from "@/types/client";
import ClientsHeader from "@/components/clients/ClientsHeader";
import ClientsContent from "@/components/clients/page/ClientsContent";
import ClientDialog from "@/components/clients/ClientDialog";
import { useToast } from "@/hooks/use-toast";

const ClientsPage = () => {
  const [selectedClient, setSelectedClient] = useState<Client | null>(null);
  const [showAddClient, setShowAddClient] = useState<boolean>(false);
  const [showImportExport, setShowImportExport] = useState<boolean>(false);
  const [filters, setFilters] = useState<ClientFilter>({});
  const [searchQuery, setSearchQuery] = useState<string>("");
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
        
        <ClientsContent 
          clients={filteredClients}
          selectedClient={selectedClient}
          onClientSelect={handleClientSelect}
          onAddInteraction={handleAddInteraction}
        />
      </div>
      
      <ClientDialog open={showAddClient} onOpenChange={setShowAddClient} />
    </AppShell>
  );
};

export default ClientsPage;

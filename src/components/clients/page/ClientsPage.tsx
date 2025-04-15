
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
      name: "AlRajhi Investment Corporation",
      email: "investments@alrajhi.com",
      phone: "+966 50 123 4567",
      type: "investor",
      assignedTo: "user123",
      status: "active",
      stage: "matched",
      tags: ["premium", "institutional"],
      requirements: {
        budget: {
          min: 10000000,
          max: 50000000
        },
        location: ["Riyadh Industrial City", "Jeddah Industrial City"],
        propertyType: ["warehouse", "logistics"],
        minArea: 5000,
      },
      metrics: {
        dealsClosed: 3,
        totalValue: 35000000,
        avgRoi: 7.5,
        matchRate: 78,
        viewingsScheduled: 6
      },
      interactions: [
        {
          id: "int1",
          type: "meeting",
          date: new Date().toISOString(),
          notes: "Discussed investment criteria for industrial assets"
        },
        {
          id: "int2",
          type: "email",
          date: new Date(Date.now() - 86400000 * 2).toISOString(),
          notes: "Shared 3 logistics asset opportunities"
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
      name: "Saudi Logistics Company",
      email: "operations@saudilogistics.com",
      phone: "+966 50 987 6543",
      type: "developer",
      assignedTo: "user123",
      status: "active",
      stage: "qualifying",
      interactions: [
        {
          id: "int2",
          type: "meeting",
          date: new Date(Date.now() - 86400000 * 5).toISOString(),
          notes: "Property valuation meeting for logistics hub"
        }
      ],
      createdAt: new Date(Date.now() - 86400000 * 15).toISOString(),
      updatedAt: new Date(Date.now() - 86400000 * 5).toISOString(),
      lastContactedDate: new Date(Date.now() - 86400000 * 5).toISOString()
    },
    {
      id: "3",
      name: "Vision Capital Partners",
      email: "investments@visioncapital.sa",
      phone: "+966 55 111 2222",
      type: "investor",
      stage: "viewing",
      assignedTo: "user123",
      status: "active",
      tags: ["institutional", "vision-2030"],
      requirements: {
        budget: {
          min: 30000000,
          max: 100000000
        },
        location: ["KAEC Industrial Valley", "Riyadh Industrial City"],
        propertyType: ["factory", "warehouse"],
        minArea: 10000,
        purpose: "investment"
      },
      metrics: {
        dealsClosed: 1,
        totalValue: 45000000,
        avgRoi: 6.8,
        matchRate: 65,
        viewingsScheduled: 4
      },
      interactions: [
        {
          id: "int3",
          type: "email",
          date: new Date(Date.now() - 86400000 * 3).toISOString(),
          notes: "Sent industrial portfolio investment options"
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
      description: `Added a new ${interaction.type} interaction for investor`
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

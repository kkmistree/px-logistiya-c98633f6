
import React from "react";
import { Client } from "@/types/client";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ClientsTable from "@/components/clients/ClientsTable";
import ClientDetails from "@/components/clients/ClientDetails";
import { useIsMobile } from "@/hooks/use-mobile";
import { Sheet, SheetContent } from "@/components/ui/sheet";
import ClientsPipeline from "@/components/clients/page/ClientsPipeline";

interface ClientsContentProps {
  clients: Client[];
  selectedClient: Client | null;
  onClientSelect: (client: Client) => void;
  onAddInteraction: (clientId: string, interaction: any) => void;
}

const ClientsContent = ({ 
  clients, 
  selectedClient, 
  onClientSelect, 
  onAddInteraction 
}: ClientsContentProps) => {
  const isMobile = useIsMobile();

  return (
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
              clients={clients} 
              onClientSelect={onClientSelect} 
              selectedClientId={selectedClient?.id}
            />
          </div>
          
          {isMobile ? (
            <Sheet open={!!selectedClient} onOpenChange={(open) => !open && onClientSelect(null as any)}>
              <SheetContent className="w-full sm:max-w-md p-0" side="right">
                {selectedClient && (
                  <ClientDetails 
                    client={selectedClient} 
                    onAddInteraction={onAddInteraction}
                  />
                )}
              </SheetContent>
            </Sheet>
          ) : (
            <div className="bg-white rounded-lg border border-slate-200 shadow-sm">
              {selectedClient ? (
                <ClientDetails 
                  client={selectedClient} 
                  onAddInteraction={onAddInteraction}
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
          clients={clients.filter(c => c.type === 'buyer')} 
          onClientSelect={onClientSelect}
          selectedClientId={selectedClient?.id}
        />
      </TabsContent>
      
      <TabsContent value="sellers">
        <ClientsTable 
          clients={clients.filter(c => c.type === 'seller')} 
          onClientSelect={onClientSelect}
          selectedClientId={selectedClient?.id}
        />
      </TabsContent>
      
      <TabsContent value="investors">
        <ClientsTable 
          clients={clients.filter(c => c.type === 'investor')} 
          onClientSelect={onClientSelect}
          selectedClientId={selectedClient?.id}
        />
      </TabsContent>
      
      <TabsContent value="funnel">
        <ClientsPipeline 
          clients={clients}
          onClientSelect={onClientSelect}
        />
      </TabsContent>
    </Tabs>
  );
};

export default ClientsContent;

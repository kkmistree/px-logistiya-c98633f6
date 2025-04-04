
import React from "react";
import { Client } from "@/types/client";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useIsMobile } from "@/hooks/use-mobile";

interface ClientSelectorProps {
  clients: Client[];
  selectedClientId: string;
  onClientSelect: (clientId: string) => void;
}

const ClientSelector = ({ clients, selectedClientId, onClientSelect }: ClientSelectorProps) => {
  const isMobile = useIsMobile();
  
  return (
    <div className="mb-4 w-full">
      <label htmlFor="client-select" className="block text-sm font-medium text-slate-700 mb-1">
        Select Client
      </label>
      <Select
        value={selectedClientId}
        onValueChange={onClientSelect}
      >
        <SelectTrigger id="client-select" className="w-full">
          <SelectValue placeholder="Select a client" />
        </SelectTrigger>
        <SelectContent className="z-50 max-h-[300px]">
          {clients.map((client) => (
            <SelectItem key={client.id} value={client.id}>
              {client.name} ({client.type})
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
};

export default ClientSelector;

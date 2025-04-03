
import React from "react";
import { Client } from "@/types/client";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

interface ClientSelectorProps {
  clients: Client[];
  selectedClientId: string;
  onClientSelect: (clientId: string) => void;
}

const ClientSelector = ({ clients, selectedClientId, onClientSelect }: ClientSelectorProps) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
      <div>
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
          <SelectContent>
            {clients.map((client) => (
              <SelectItem key={client.id} value={client.id}>
                {client.name} ({client.type})
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
    </div>
  );
};

export default ClientSelector;

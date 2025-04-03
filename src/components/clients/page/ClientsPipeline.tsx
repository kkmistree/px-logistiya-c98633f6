
import React from "react";
import { Client } from "@/types/client";

interface ClientsPipelineProps {
  clients: Client[];
  onClientSelect: (client: Client) => void;
}

const ClientsPipeline = ({ clients, onClientSelect }: ClientsPipelineProps) => {
  const stages = ['new', 'contacted', 'qualifying', 'matched', 'viewing', 'offer', 'closed'];
  
  return (
    <div className="bg-white rounded-lg border border-slate-200 shadow-sm p-6">
      <h3 className="text-lg font-semibold mb-4">Client Pipeline</h3>
      <div className="grid grid-cols-1 lg:grid-cols-7 gap-4">
        {stages.map((stage) => (
          <div key={stage} className="border rounded-lg p-4">
            <h4 className="font-medium capitalize mb-3">{stage}</h4>
            <div className="space-y-2">
              {clients.filter(c => c.stage === stage).map(client => (
                <div 
                  key={client.id} 
                  className="bg-slate-50 p-2 rounded text-sm cursor-pointer hover:bg-slate-100"
                  onClick={() => onClientSelect(client)}
                >
                  {client.name}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ClientsPipeline;

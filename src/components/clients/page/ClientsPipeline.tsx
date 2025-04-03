
import React from "react";
import { Client } from "@/types/client";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Building, Calendar, Mail, Phone, User } from "lucide-react";
import { formatCurrency } from "@/utils/format";

interface ClientsPipelineProps {
  clients: Client[];
  onClientSelect: (client: Client) => void;
}

const ClientsPipeline = ({ clients, onClientSelect }: ClientsPipelineProps) => {
  const stages = [
    { key: 'new', label: 'New Leads', color: 'bg-blue-100 text-blue-800' },
    { key: 'contacted', label: 'Contacted', color: 'bg-purple-100 text-purple-800' },
    { key: 'qualifying', label: 'Qualifying', color: 'bg-amber-100 text-amber-800' },
    { key: 'matched', label: 'Matched', color: 'bg-indigo-100 text-indigo-800' }, 
    { key: 'viewing', label: 'Viewing', color: 'bg-cyan-100 text-cyan-800' },
    { key: 'offer', label: 'Offer', color: 'bg-emerald-100 text-emerald-800' },
    { key: 'closed', label: 'Closed', color: 'bg-green-100 text-green-800' }
  ];
  
  // Calculate total value per stage
  const stageTotals = stages.map(stage => {
    const stageClients = clients.filter(c => c.stage === stage.key);
    const totalValue = stageClients.reduce((sum, client) => {
      return sum + (client.requirements?.budget.max || 0);
    }, 0);
    
    return {
      ...stage,
      count: stageClients.length,
      totalValue
    };
  });
  
  // Format date to display only the date portion
  const formatDate = (dateString?: string) => {
    if (!dateString) return "N/A";
    return new Date(dateString).toLocaleDateString();
  };
  
  // Calculate days in stage
  const getDaysInStage = (clientDate?: string) => {
    if (!clientDate) return "N/A";
    const date = new Date(clientDate);
    const today = new Date();
    const diffTime = Math.abs(today.getTime() - date.getTime());
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays;
  };

  return (
    <div className="space-y-6">
      {/* Pipeline Overview */}
      <Card className="bg-white">
        <CardHeader className="pb-2">
          <CardTitle className="text-lg font-semibold">Client Pipeline</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex items-center space-x-2 overflow-x-auto py-2">
            {stageTotals.map((stage) => (
              <div key={stage.key} className="flex-none text-center">
                <div className={`px-3 py-1 rounded-full text-xs font-medium ${stage.color}`}>
                  {stage.count} {stage.label}
                </div>
                <div className="text-xs mt-1 text-slate-600">
                  {formatCurrency(stage.totalValue)}
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
      
      {/* Detailed Pipeline Kanban Board */}
      <div className="grid grid-cols-1 lg:grid-cols-7 gap-4">
        {stages.map((stage) => {
          const stageClients = clients.filter(c => c.stage === stage.key);
          
          return (
            <div key={stage.key} className="border rounded-lg bg-white">
              <div className={`px-4 py-2 border-b flex justify-between items-center ${stage.color.replace('bg-', 'bg-opacity-30 ')}`}>
                <h4 className="font-medium text-sm">{stage.label}</h4>
                <Badge variant="outline" className="text-xs font-normal">
                  {stageClients.length}
                </Badge>
              </div>
              
              <div className="p-2 space-y-2 max-h-[500px] overflow-y-auto">
                {stageClients.length > 0 ? (
                  stageClients.map(client => (
                    <Card 
                      key={client.id} 
                      className="cursor-pointer hover:shadow-md transition-shadow"
                      onClick={() => onClientSelect(client)}
                    >
                      <CardContent className="p-3">
                        <div className="flex justify-between items-start mb-2">
                          <div>
                            <div className="font-medium text-sm line-clamp-1">{client.name}</div>
                            <div className="flex items-center text-xs text-slate-500 space-x-1">
                              <Badge className="text-[10px]">{client.type}</Badge>
                              {client.tags && client.tags.length > 0 && (
                                <Badge variant="outline" className="text-[10px]">
                                  {client.tags[0]}
                                </Badge>
                              )}
                            </div>
                          </div>
                          <div className="text-xs bg-slate-100 px-2 py-0.5 rounded">
                            {getDaysInStage(client.updatedAt)} days
                          </div>
                        </div>
                        
                        {client.requirements && (
                          <div className="mt-2 pt-2 border-t border-dashed grid grid-cols-2 gap-1 text-xs text-slate-700">
                            <div className="flex items-center">
                              <Building size={12} className="mr-1" />
                              {client.requirements.propertyType?.join(", ") || "Any"}
                            </div>
                            <div className="flex items-center">
                              {formatCurrency(client.requirements.budget.min)} - {formatCurrency(client.requirements.budget.max)}
                            </div>
                          </div>
                        )}
                        
                        <div className="mt-2 pt-2 border-t text-xs text-slate-600 flex justify-between">
                          <div className="flex items-center">
                            <Calendar size={12} className="mr-1" />
                            {formatDate(client.lastContactedDate || client.updatedAt)}
                          </div>
                          <div className="flex space-x-2">
                            {client.email && (
                              <Mail size={12} className="text-blue-500" />
                            )}
                            {client.phone && (
                              <Phone size={12} className="text-green-500" />
                            )}
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))
                ) : (
                  <div className="p-3 text-center text-sm text-slate-500">
                    No clients in this stage
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ClientsPipeline;

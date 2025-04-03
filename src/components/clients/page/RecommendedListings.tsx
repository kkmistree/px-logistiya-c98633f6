
import React, { useState } from "react";
import { Client } from "@/types/client";
import { Card } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import ClientSelector from "@/components/clients/page/recommendations/ClientSelector";
import ClientSummaryCard from "@/components/clients/page/recommendations/ClientSummaryCard";
import PropertyRecommendationList from "@/components/clients/page/recommendations/PropertyRecommendationList";
import { Property } from "@/types/property";
import { getRecommendedProperties } from "@/components/clients/page/recommendations/recommendationUtils";

interface RecommendedListingsProps {
  clients: Client[];
  onClientSelect: (client: Client) => void;
}

const RecommendedListings = ({ clients, onClientSelect }: RecommendedListingsProps) => {
  const [selectedClientId, setSelectedClientId] = useState<string>("");
  const { toast } = useToast();
  const [messageText, setMessageText] = useState<string>(
    "I think this property might be a good match for your investment criteria. Would you like to view it?"
  );
  
  // Get selected client
  const selectedClient = clients.find(client => client.id === selectedClientId);
  
  // Get recommendations for selected client
  const recommendations = selectedClient ? getRecommendedProperties(selectedClient) : [];
  
  const handleShareWithClient = (propertyId: string) => {
    toast({
      title: "Property shared with client",
      description: "The property has been shared with the client via email and WhatsApp."
    });
  };
  
  const handleScheduleViewing = (propertyId: string) => {
    toast({
      title: "Viewing scheduled",
      description: "A viewing request has been sent to the client."
    });
  };
  
  const handleSaveProperty = (propertyId: string) => {
    toast({
      title: "Property saved",
      description: "The property has been saved to the client's profile."
    });
  };
  
  return (
    <div className="space-y-6">
      <div className="bg-white p-4 rounded-lg border border-slate-200 shadow-sm">
        <h2 className="text-lg font-semibold mb-4">Property Recommendations by Client</h2>
        
        <ClientSelector
          clients={clients}
          selectedClientId={selectedClientId}
          onClientSelect={setSelectedClientId}
        />
        
        {selectedClient && (
          <ClientSummaryCard
            client={selectedClient}
            onViewProfile={() => onClientSelect(selectedClient)}
          />
        )}
        
        {selectedClient && recommendations.length > 0 ? (
          <PropertyRecommendationList
            recommendations={recommendations}
            messageText={messageText}
            onMessageChange={setMessageText}
            onShareWithClient={handleShareWithClient}
            onScheduleViewing={handleScheduleViewing}
            onSaveProperty={handleSaveProperty}
          />
        ) : selectedClient ? (
          <div className="text-center py-8 text-slate-500">
            <p>No recommended properties found for this client.</p>
            <p className="text-sm mt-1">Try updating their investment criteria to get property recommendations.</p>
          </div>
        ) : (
          <div className="text-center py-8 text-slate-500">
            <p>Select a client to see property recommendations based on their investment criteria.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default RecommendedListings;

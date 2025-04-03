
import React from "react";
import { Client } from "@/types/client";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { formatCurrency } from "@/utils/format";

interface ClientSummaryCardProps {
  client: Client;
  onViewProfile: () => void;
}

const ClientSummaryCard = ({ client, onViewProfile }: ClientSummaryCardProps) => {
  return (
    <Card className="mb-6">
      <CardHeader className="pb-2">
        <CardTitle className="text-md flex items-center">
          <span className="font-medium">{client.name}</span>
          <Badge className="ml-2" variant={client.type === 'investor' ? 'default' : 'outline'}>
            {client.type === 'investor' ? 'Investor' : 'Buyer'}
          </Badge>
        </CardTitle>
        <CardDescription className="text-sm">
          Budget: {formatCurrency(client.requirements?.budget.min || 0)} - {formatCurrency(client.requirements?.budget.max || 0)}
        </CardDescription>
      </CardHeader>
      <CardContent className="pb-2">
        <div className="grid grid-cols-2 gap-4 text-sm">
          <div>
            <span className="font-medium block">Location Preferences:</span>
            <span className="text-slate-600">
              {client.requirements?.location?.join(', ') || 'No preferences set'}
            </span>
          </div>
          <div>
            <span className="font-medium block">Property Types:</span>
            <span className="text-slate-600">
              {client.requirements?.propertyType?.map(type => 
                type.charAt(0).toUpperCase() + type.slice(1)
              ).join(', ') || 'No preferences set'}
            </span>
          </div>
          <div>
            <span className="font-medium block">Bedrooms:</span>
            <span className="text-slate-600">
              {client.requirements?.bedrooms?.join(', ') || 'No preferences set'}
            </span>
          </div>
          <div>
            <span className="font-medium block">Purpose:</span>
            <span className="text-slate-600">
              {client.requirements?.purpose || 'Not specified'}
            </span>
          </div>
        </div>
      </CardContent>
      <CardFooter>
        <Button variant="outline" size="sm" onClick={onViewProfile}>
          View Full Profile
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ClientSummaryCard;

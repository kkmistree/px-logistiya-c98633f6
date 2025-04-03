
import React, { useState } from "react";
import { Client } from "@/types/client";
import { Property } from "@/types/property";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Building, Check, CheckCircle, Clock, Eye, Heart, Share2 } from "lucide-react";
import { formatCurrency } from "@/utils/format";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

interface RecommendedListingsProps {
  clients: Client[];
  onClientSelect: (client: Client) => void;
}

const RecommendedListings = ({ clients, onClientSelect }: RecommendedListingsProps) => {
  const [selectedClientId, setSelectedClientId] = useState<string>("");
  const { toast } = useToast();
  const [messageText, setMessageText] = useState<string>("I think this property might be a good match for your investment criteria. Would you like to view it?");
  
  // Get selected client
  const selectedClient = clients.find(client => client.id === selectedClientId);
  
  // Mock recommended properties based on client requirements
  const getRecommendedProperties = (client: Client): Property[] => {
    if (!client?.requirements) return [];
    
    // This would typically come from a backend service that matches properties to requirements
    // For this mock, we'll create properties that align with client requirements
    const { budget, location, propertyType, bedrooms } = client.requirements;
    
    const mockProperties: Property[] = [
      {
        id: "prop1",
        title: `${bedrooms?.[0] || 2} Bedroom ${propertyType?.[0] || "Apartment"} in ${location?.[0] || "Dubai Marina"}`,
        description: `Premium ${propertyType?.[0] || "apartment"} with stunning views and high-end finishes. Great ROI potential.`,
        type: (propertyType?.[0] as "apartment" | "villa" | "townhouse" | "penthouse" | "land") || "apartment",
        status: "ready",
        price: budget?.min + ((budget?.max - budget?.min) * 0.7),
        area: 1200,
        bedrooms: bedrooms?.[0] || 2,
        bathrooms: bedrooms?.[0] || 2,
        location: {
          area: location?.[0] || "Dubai Marina",
          community: "Premium Tower"
        },
        features: ["Pool", "Gym", "Security", "Parking"],
        images: ["/placeholder.svg"],
        developer: "Emaar Properties",
        roi: 8.2,
        tags: ["High Yield", "Premium", "Furnished"],
        furnishing: "Furnished",
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
        matchScore: 92
      },
      {
        id: "prop2",
        title: `Luxury ${bedrooms?.[1] || 3} Bedroom ${propertyType?.[0] || "Apartment"} in ${location?.[1] || "Downtown Dubai"}`,
        description: `Spacious ${propertyType?.[0] || "apartment"} with premium finishes. Ideal for investors seeking stable returns.`,
        type: (propertyType?.[0] as "apartment" | "villa" | "townhouse" | "penthouse" | "land") || "apartment",
        status: "ready",
        price: budget?.min + ((budget?.max - budget?.min) * 0.8),
        area: 1500,
        bedrooms: bedrooms?.[1] || 3,
        bathrooms: bedrooms?.[1] || 3,
        location: {
          area: location?.[1] || "Downtown Dubai",
          community: "Boulevard Central"
        },
        features: ["Pool", "Gym", "Security", "Parking", "Balcony"],
        images: ["/placeholder.svg"],
        developer: "DAMAC Properties",
        roi: 7.8,
        tags: ["High Yield", "Premium", "City View"],
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
        matchScore: 88
      },
      {
        id: "prop3",
        title: `${bedrooms?.[0] || 2} Bedroom Off-Plan ${propertyType?.[0] || "Apartment"} in ${location?.[0] || "Dubai Marina"}`,
        description: `Off-plan ${propertyType?.[0] || "apartment"} with attractive payment plan. High projected ROI.`,
        type: (propertyType?.[0] as "apartment" | "villa" | "townhouse" | "penthouse" | "land") || "apartment",
        status: "off-plan",
        price: budget?.min + ((budget?.max - budget?.min) * 0.6),
        area: 1100,
        bedrooms: bedrooms?.[0] || 2,
        bathrooms: bedrooms?.[0] || 2,
        location: {
          area: location?.[0] || "Dubai Marina",
          community: "Marina Vista"
        },
        features: ["Pool", "Gym", "Security", "Smart Home"],
        images: ["/placeholder.svg"],
        developer: "Select Group",
        completionDate: "2025-06-30",
        roi: 9.5,
        paymentPlan: {
          downPayment: 20,
          installments: [
            { percentage: 10, dueDate: "60 days after booking" },
            { percentage: 10, dueDate: "6 months after booking" },
            { percentage: 10, dueDate: "12 months after booking" },
            { percentage: 50, dueDate: "On Handover" }
          ]
        },
        tags: ["Off-Plan", "High ROI", "Payment Plan"],
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
        matchScore: 85
      }
    ];
    
    return mockProperties;
  };
  
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
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div>
            <label htmlFor="client-select" className="block text-sm font-medium text-slate-700 mb-1">
              Select Client
            </label>
            <Select
              value={selectedClientId}
              onValueChange={(value) => setSelectedClientId(value)}
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
        
        {selectedClient && (
          <Card className="mb-6">
            <CardHeader className="pb-2">
              <CardTitle className="text-md flex items-center">
                <span className="font-medium">{selectedClient.name}</span>
                <Badge className="ml-2" variant={selectedClient.type === 'investor' ? 'default' : 'outline'}>
                  {selectedClient.type === 'investor' ? 'Investor' : 'Buyer'}
                </Badge>
              </CardTitle>
              <CardDescription className="text-sm">
                Budget: {formatCurrency(selectedClient.requirements?.budget.min || 0)} - {formatCurrency(selectedClient.requirements?.budget.max || 0)}
              </CardDescription>
            </CardHeader>
            <CardContent className="pb-2">
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <span className="font-medium block">Location Preferences:</span>
                  <span className="text-slate-600">
                    {selectedClient.requirements?.location?.join(', ') || 'No preferences set'}
                  </span>
                </div>
                <div>
                  <span className="font-medium block">Property Types:</span>
                  <span className="text-slate-600">
                    {selectedClient.requirements?.propertyType?.map(type => 
                      type.charAt(0).toUpperCase() + type.slice(1)
                    ).join(', ') || 'No preferences set'}
                  </span>
                </div>
                <div>
                  <span className="font-medium block">Bedrooms:</span>
                  <span className="text-slate-600">
                    {selectedClient.requirements?.bedrooms?.join(', ') || 'No preferences set'}
                  </span>
                </div>
                <div>
                  <span className="font-medium block">Purpose:</span>
                  <span className="text-slate-600">
                    {selectedClient.requirements?.purpose || 'Not specified'}
                  </span>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button variant="outline" size="sm" onClick={() => onClientSelect(selectedClient)}>
                View Full Profile
              </Button>
            </CardFooter>
          </Card>
        )}
        
        {selectedClient && recommendations.length > 0 ? (
          <div>
            <h3 className="text-md font-medium mb-3">
              Recommended Properties ({recommendations.length})
            </h3>
            
            <div className="space-y-6">
              {recommendations.map((property) => (
                <Card key={property.id} className="overflow-hidden">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="bg-slate-100 min-h-[160px] relative flex items-center justify-center">
                      <img 
                        src={property.images[0]} 
                        alt={property.title}
                        className="object-cover w-full h-full absolute inset-0"
                      />
                      {property.matchScore && (
                        <Badge className="absolute top-2 right-2 bg-green-600 hover:bg-green-700">
                          {property.matchScore}% Match
                        </Badge>
                      )}
                    </div>
                    <div className="md:col-span-2 p-4">
                      <div className="flex justify-between">
                        <div>
                          <h3 className="font-medium text-lg">{property.title}</h3>
                          <p className="text-slate-600 text-sm">{property.location.area}, {property.location.community}</p>
                        </div>
                        <div className="text-right">
                          <div className="text-lg font-bold">{formatCurrency(property.price)}</div>
                          {property.roi && (
                            <Badge variant="outline" className="text-green-600 border-green-200 bg-green-50">
                              {property.roi}% ROI
                            </Badge>
                          )}
                        </div>
                      </div>
                      
                      <div className="grid grid-cols-3 gap-2 my-3 text-sm text-slate-600">
                        <div className="flex items-center gap-1">
                          <Building size={14} />
                          <span>{property.bedrooms} {property.bedrooms === 1 ? 'bed' : 'beds'}</span>
                        </div>
                        <div>{property.bathrooms} {property.bathrooms === 1 ? 'bath' : 'baths'}</div>
                        <div>{property.area} sqft</div>
                      </div>
                      
                      <p className="text-sm text-slate-600 line-clamp-2 mb-3">{property.description}</p>
                      
                      <div className="flex flex-wrap gap-1 mb-3">
                        {property.tags.map((tag, i) => (
                          <Badge key={i} variant="secondary" className="text-xs">{tag}</Badge>
                        ))}
                      </div>
                      
                      <div className="mt-4">
                        <Textarea 
                          placeholder="Add a note to send to the client"
                          value={messageText}
                          onChange={(e) => setMessageText(e.target.value)}
                          className="text-sm mb-2"
                          rows={2}
                        />
                        <div className="flex flex-wrap gap-2">
                          <Button 
                            variant="default" 
                            size="sm"
                            className="flex-1"
                            onClick={() => handleShareWithClient(property.id)}
                          >
                            <Share2 size={14} className="mr-1" /> Share with Client
                          </Button>
                          <Button 
                            variant="outline" 
                            size="sm"
                            className="flex-1"
                            onClick={() => handleScheduleViewing(property.id)}
                          >
                            <Clock size={14} className="mr-1" /> Schedule Viewing
                          </Button>
                          <Button 
                            variant="outline" 
                            size="sm"
                            onClick={() => handleSaveProperty(property.id)}
                          >
                            <Heart size={14} />
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
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

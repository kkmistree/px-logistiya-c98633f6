
import React, { useState } from "react";
import { Client } from "@/types/client";
import { 
  Mail, 
  Phone, 
  Calendar, 
  Clock, 
  PlusCircle, 
  Home, 
  Coins,
  MapPin,
  Tag,
  FileText,
  MessageSquare
} from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { formatCurrency } from "@/utils/format";

interface ClientDetailsProps {
  client: Client;
  onAddInteraction: (clientId: string, interaction: any) => void;
}

const ClientDetails = ({ client, onAddInteraction }: ClientDetailsProps) => {
  const [activeTab, setActiveTab] = useState("profile");

  const formatDate = (dateStr: string) => {
    const date = new Date(dateStr);
    return new Intl.DateTimeFormat('en-US', { 
      month: 'short', 
      day: 'numeric', 
      year: 'numeric' 
    }).format(date);
  };

  return (
    <div className="h-full">
      <div className="p-6 border-b">
        <h2 className="text-xl font-semibold mb-1">{client.name}</h2>
        <div className="flex items-center gap-2 text-slate-500 text-sm">
          <span className={`px-2 py-0.5 rounded-full text-xs font-medium 
            ${client.type === 'buyer' ? 'bg-blue-100 text-blue-800' : 
              client.type === 'seller' ? 'bg-green-100 text-green-800' : 
              client.type === 'investor' ? 'bg-purple-100 text-purple-800' : 
              client.type === 'tenant' ? 'bg-amber-100 text-amber-800' : 
              'bg-teal-100 text-teal-800'}`}>
            {client.type.charAt(0).toUpperCase() + client.type.slice(1)}
          </span>
          <span>·</span>
          <span>Added {formatDate(client.createdAt)}</span>
        </div>
      </div>

      <Tabs defaultValue="profile" className="h-[calc(100%-85px)]" onValueChange={setActiveTab}>
        <div className="px-6 pt-4">
          <TabsList className="w-full">
            <TabsTrigger value="profile" className="flex-1">Profile</TabsTrigger>
            <TabsTrigger value="requirements" className="flex-1">Requirements</TabsTrigger>
            <TabsTrigger value="history" className="flex-1">Activity</TabsTrigger>
          </TabsList>
        </div>

        <div className="p-6 overflow-y-auto h-[calc(100%-60px)]">
          <TabsContent value="profile" className="mt-0 space-y-4">
            <div className="space-y-3">
              <h3 className="text-sm font-medium text-slate-500">Contact Information</h3>
              
              {client.email && (
                <div className="flex items-center gap-2">
                  <Mail size={16} className="text-slate-400" />
                  <a href={`mailto:${client.email}`} className="text-estate-primary hover:underline">
                    {client.email}
                  </a>
                </div>
              )}
              
              {client.phone && (
                <div className="flex items-center gap-2">
                  <Phone size={16} className="text-slate-400" />
                  <a href={`tel:${client.phone}`} className="text-estate-primary hover:underline">
                    {client.phone}
                  </a>
                </div>
              )}
            </div>

            <div className="flex flex-col gap-3 pt-4">
              <h3 className="text-sm font-medium text-slate-500">Quick Actions</h3>
              
              <div className="grid grid-cols-2 gap-2">
                <Button variant="outline" size="sm" className="justify-start">
                  <MessageSquare size={16} className="mr-2" />
                  Send Message
                </Button>
                
                <Button variant="outline" size="sm" className="justify-start">
                  <Calendar size={16} className="mr-2" />
                  Schedule Meeting
                </Button>
                
                <Button variant="outline" size="sm" className="justify-start">
                  <FileText size={16} className="mr-2" />
                  Generate Brief
                </Button>
                
                <Button variant="outline" size="sm" className="justify-start">
                  <Home size={16} className="mr-2" />
                  Match Listings
                </Button>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="requirements" className="mt-0">
            {client.requirements ? (
              <div className="space-y-6">
                <div>
                  <h3 className="text-sm font-medium text-slate-500 mb-2">Budget</h3>
                  <div className="text-lg font-semibold text-estate-primary">
                    {formatCurrency(client.requirements.budget.min)} - {formatCurrency(client.requirements.budget.max)}
                  </div>
                </div>

                {client.requirements.location && (
                  <div>
                    <h3 className="text-sm font-medium text-slate-500 mb-2">Preferred Locations</h3>
                    <div className="flex flex-wrap gap-2">
                      {client.requirements.location.map(location => (
                        <div key={location} className="flex items-center gap-1 bg-estate-primary/10 text-estate-primary px-2 py-1 rounded-full text-sm">
                          <MapPin size={14} />
                          <span>{location}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {client.requirements.propertyType && (
                  <div>
                    <h3 className="text-sm font-medium text-slate-500 mb-2">Property Type</h3>
                    <div className="flex flex-wrap gap-2">
                      {client.requirements.propertyType.map(type => (
                        <div key={type} className="flex items-center gap-1 bg-slate-100 px-2 py-1 rounded-full text-sm">
                          <Home size={14} className="text-slate-500" />
                          <span className="capitalize">{type}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {client.requirements.bedrooms && (
                  <div>
                    <h3 className="text-sm font-medium text-slate-500 mb-2">Bedrooms</h3>
                    <div className="flex flex-wrap gap-2">
                      {client.requirements.bedrooms.map(bedroom => (
                        <div key={bedroom} className="bg-slate-100 px-2 py-1 rounded-full text-sm">
                          {bedroom} {bedroom === 1 ? 'Bedroom' : 'Bedrooms'}
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {client.requirements.minArea && (
                  <div>
                    <h3 className="text-sm font-medium text-slate-500 mb-2">Minimum Area</h3>
                    <div className="text-lg font-semibold">
                      {client.requirements.minArea} sqft
                    </div>
                  </div>
                )}

                {client.requirements.purpose && (
                  <div>
                    <h3 className="text-sm font-medium text-slate-500 mb-2">Purpose</h3>
                    <div className="flex items-center gap-1 bg-slate-100 px-2 py-1 rounded-full text-sm inline-block">
                      <Tag size={14} className="text-slate-500" />
                      <span className="capitalize">{client.requirements.purpose}</span>
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <div className="text-center py-6 text-slate-500">
                <p>No requirements specified</p>
                <Button variant="outline" className="mt-2">
                  <PlusCircle size={16} className="mr-2" />
                  Add Requirements
                </Button>
              </div>
            )}
          </TabsContent>

          <TabsContent value="history" className="mt-0">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="text-sm font-medium text-slate-500">Recent Interactions</h3>
                <Button variant="outline" size="sm" onClick={() => onAddInteraction(client.id, { type: 'note' })}>
                  <PlusCircle size={16} className="mr-1" /> Add
                </Button>
              </div>

              {client.interactions && client.interactions.length > 0 ? (
                <div className="space-y-3">
                  {client.interactions.map(interaction => (
                    <div key={interaction.id} className="bg-slate-50 rounded-lg p-3 border border-slate-100">
                      <div className="flex items-center gap-2 mb-1">
                        <span className={`p-1 rounded ${
                          interaction.type === 'call' ? 'bg-blue-100 text-blue-600' :
                          interaction.type === 'meeting' ? 'bg-green-100 text-green-600' :
                          interaction.type === 'email' ? 'bg-purple-100 text-purple-600' :
                          interaction.type === 'viewing' ? 'bg-amber-100 text-amber-600' :
                          'bg-slate-100 text-slate-600'
                        }`}>
                          {interaction.type === 'call' ? <Phone size={14} /> :
                           interaction.type === 'meeting' ? <Calendar size={14} /> :
                           interaction.type === 'email' ? <Mail size={14} /> :
                           interaction.type === 'viewing' ? <Home size={14} /> :
                           <MessageSquare size={14} />}
                        </span>
                        <span className="font-medium capitalize">{interaction.type}</span>
                      </div>
                      <p className="text-sm text-slate-600 mb-2">{interaction.notes}</p>
                      <div className="flex items-center text-xs text-slate-400">
                        <Clock size={12} className="mr-1" />
                        {formatDate(interaction.date)}
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-6 text-slate-500">
                  <p>No interaction history</p>
                </div>
              )}
            </div>
          </TabsContent>
        </div>
      </Tabs>
    </div>
  );
};

export default ClientDetails;

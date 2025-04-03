
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
  MessageSquare,
  Share,
  BarChart,
  User,
  Users,
  ChevronRight,
  FileText as FileIcon,
  ChevronDown,
  ChevronUp,
  Bell,
  Edit,
  Trash
} from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { formatCurrency } from "@/utils/format";
import { 
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import { Progress } from "@/components/ui/progress";

interface ClientDetailsProps {
  client: Client;
  onAddInteraction: (clientId: string, interaction: any) => void;
}

const ClientDetails = ({ client, onAddInteraction }: ClientDetailsProps) => {
  const [activeTab, setActiveTab] = useState("profile");
  const [showAddMandateDialog, setShowAddMandateDialog] = useState(false);
  const [showSharePropertiesDialog, setShowSharePropertiesDialog] = useState(false);

  const formatDate = (dateStr: string) => {
    const date = new Date(dateStr);
    return new Intl.DateTimeFormat('en-US', { 
      month: 'short', 
      day: 'numeric', 
      year: 'numeric' 
    }).format(date);
  };

  const daysSinceContact = () => {
    if (!client.lastContactedDate) return null;
    const lastContact = new Date(client.lastContactedDate);
    const now = new Date();
    const diffTime = Math.abs(now.getTime() - lastContact.getTime());
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays;
  };

  const getStageBadgeColor = (stage?: string) => {
    switch (stage) {
      case 'new': return 'bg-slate-100 text-slate-800';
      case 'contacted': return 'bg-blue-100 text-blue-800';
      case 'qualifying': return 'bg-purple-100 text-purple-800';
      case 'matched': return 'bg-green-100 text-green-800';
      case 'viewing': return 'bg-amber-100 text-amber-800';
      case 'offer': return 'bg-pink-100 text-pink-800';
      case 'closed': return 'bg-teal-100 text-teal-800';
      default: return 'bg-slate-100 text-slate-800';
    }
  };

  const getTypeBadgeColor = (type: string) => {
    switch (type) {
      case 'buyer': return 'bg-blue-100 text-blue-800';
      case 'seller': return 'bg-green-100 text-green-800';
      case 'investor': return 'bg-purple-100 text-purple-800';
      case 'tenant': return 'bg-amber-100 text-amber-800';
      case 'landlord': return 'bg-teal-100 text-teal-800';
      default: return 'bg-slate-100 text-slate-800';
    }
  };

  return (
    <div className="h-full flex flex-col">
      <div className="p-6 border-b">
        <div className="flex items-start justify-between mb-2">
          <div>
            <h2 className="text-xl font-semibold">{client.name}</h2>
            <div className="flex items-center gap-2 text-slate-500 text-sm mt-1">
              <span className={`px-2 py-0.5 rounded-full text-xs font-medium ${getTypeBadgeColor(client.type)}`}>
                {client.type.charAt(0).toUpperCase() + client.type.slice(1)}
              </span>
              {client.stage && (
                <>
                  <span>·</span>
                  <span className={`px-2 py-0.5 rounded-full text-xs font-medium ${getStageBadgeColor(client.stage)}`}>
                    {client.stage.charAt(0).toUpperCase() + client.stage.slice(1)}
                  </span>
                </>
              )}
              <span>·</span>
              <span>Added {formatDate(client.createdAt)}</span>
            </div>
          </div>
          <div className="flex gap-2">
            <Button variant="outline" size="sm">
              <Edit size={14} className="mr-1" />
              Edit
            </Button>
          </div>
        </div>
        
        {client.tags && client.tags.length > 0 && (
          <div className="flex flex-wrap gap-1 mt-2">
            {client.tags.map(tag => (
              <Badge key={tag} variant="secondary" className="text-xs">
                {tag}
              </Badge>
            ))}
          </div>
        )}
      </div>

      <Tabs defaultValue="profile" className="flex-1 flex flex-col" onValueChange={setActiveTab}>
        <div className="px-6 pt-4 border-b">
          <TabsList className="w-full">
            <TabsTrigger value="profile" className="flex-1">Overview</TabsTrigger>
            <TabsTrigger value="mandates" className="flex-1">Mandates</TabsTrigger>
            <TabsTrigger value="properties" className="flex-1">Properties</TabsTrigger>
            <TabsTrigger value="timeline" className="flex-1">Timeline</TabsTrigger>
            <TabsTrigger value="files" className="flex-1">Files</TabsTrigger>
          </TabsList>
        </div>

        <div className="p-6 overflow-y-auto flex-1">
          <TabsContent value="profile" className="mt-0 space-y-6">
            {/* Activity Insights */}
            {daysSinceContact() && daysSinceContact()! > 7 && (
              <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 text-amber-800 text-sm">
                <div className="flex items-start gap-2">
                  <Bell size={16} className="mt-0.5" />
                  <div>
                    <p className="font-medium">Follow-up reminder</p>
                    <p>It's been {daysSinceContact()} days since your last contact. Consider reaching out.</p>
                  </div>
                </div>
              </div>
            )}

            {/* Metrics Summary */}
            {client.metrics && (
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-base font-medium flex items-center">
                    <BarChart size={16} className="mr-2" />
                    Client Metrics
                  </CardTitle>
                </CardHeader>
                <CardContent className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-0">
                  <div className="space-y-1">
                    <p className="text-sm text-slate-500">Deals Closed</p>
                    <p className="text-xl font-semibold">{client.metrics.dealsClosed}</p>
                  </div>
                  <div className="space-y-1">
                    <p className="text-sm text-slate-500">Total Value</p>
                    <p className="text-xl font-semibold">{formatCurrency(client.metrics.totalValue)}</p>
                  </div>
                  <div className="space-y-1">
                    <p className="text-sm text-slate-500">Avg ROI</p>
                    <p className="text-xl font-semibold">{client.metrics.avgRoi.toFixed(1)}%</p>
                  </div>
                  <div className="space-y-1">
                    <p className="text-sm text-slate-500">Match Rate</p>
                    <div className="flex items-center gap-2">
                      <Progress value={client.metrics.matchRate} className="h-2" />
                      <span className="text-sm font-medium">{client.metrics.matchRate}%</span>
                    </div>
                  </div>
                  <div className="space-y-1">
                    <p className="text-sm text-slate-500">Viewings</p>
                    <p className="text-xl font-semibold">{client.metrics.viewingsScheduled}</p>
                  </div>
                </CardContent>
              </Card>
            )}

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

            {client.requirements && (
              <div className="space-y-3">
                <h3 className="text-sm font-medium text-slate-500 flex items-center justify-between">
                  <span>Investment Preferences</span>
                  <Button variant="ghost" size="sm" className="h-7 gap-1 text-xs">
                    <Edit size={12} />
                    Edit
                  </Button>
                </h3>
                
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <p className="text-xs text-slate-500">Budget Range</p>
                    <p className="font-medium">
                      {formatCurrency(client.requirements.budget.min)} - {formatCurrency(client.requirements.budget.max)}
                    </p>
                  </div>
                  
                  <div className="space-y-1">
                    <p className="text-xs text-slate-500">Property Types</p>
                    <div className="flex flex-wrap gap-1">
                      {client.requirements.propertyType.map(type => (
                        <Badge key={type} variant="outline" className="capitalize text-xs">{type}</Badge>
                      ))}
                    </div>
                  </div>
                  
                  <div className="space-y-1">
                    <p className="text-xs text-slate-500">Bedrooms</p>
                    <div className="flex flex-wrap gap-1">
                      {client.requirements.bedrooms.map(bedroom => (
                        <Badge key={bedroom} variant="outline" className="text-xs">
                          {bedroom} {bedroom === 1 ? 'Bedroom' : 'Bedrooms'}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  
                  <div className="space-y-1">
                    <p className="text-xs text-slate-500">Locations</p>
                    <div className="flex flex-wrap gap-1">
                      {client.requirements.location.map(loc => (
                        <Badge key={loc} variant="outline" className="text-xs">{loc}</Badge>
                      ))}
                    </div>
                  </div>
                  
                  {client.requirements.purpose && (
                    <div className="space-y-1">
                      <p className="text-xs text-slate-500">Purpose</p>
                      <Badge variant="outline" className="capitalize text-xs">{client.requirements.purpose}</Badge>
                    </div>
                  )}
                  
                  {client.requirements.minArea && (
                    <div className="space-y-1">
                      <p className="text-xs text-slate-500">Min. Area</p>
                      <p className="font-medium">{client.requirements.minArea} sqft</p>
                    </div>
                  )}
                </div>
              </div>
            )}

            <div className="flex flex-col gap-3 pt-4">
              <h3 className="text-sm font-medium text-slate-500">Quick Actions</h3>
              
              <div className="grid grid-cols-2 gap-2">
                <Button variant="outline" size="sm" className="justify-start" onClick={() => setShowSharePropertiesDialog(true)}>
                  <Share size={16} className="mr-2" />
                  Share Properties
                </Button>
                
                <Button variant="outline" size="sm" className="justify-start">
                  <Calendar size={16} className="mr-2" />
                  Schedule Viewing
                </Button>
                
                <Button variant="outline" size="sm" className="justify-start">
                  <MessageSquare size={16} className="mr-2" />
                  Send WhatsApp
                </Button>
                
                <Button variant="outline" size="sm" className="justify-start">
                  <Mail size={16} className="mr-2" />
                  Send Email
                </Button>
                
                <Button variant="outline" size="sm" className="justify-start">
                  <FileText size={16} className="mr-2" />
                  Generate Teaser
                </Button>
                
                <Button variant="outline" size="sm" className="justify-start">
                  <User size={16} className="mr-2" />
                  Start Deal Room
                </Button>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="mandates" className="mt-0 space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-sm font-medium text-slate-500">Active Mandates</h3>
              <Button size="sm" onClick={() => setShowAddMandateDialog(true)}>
                <PlusCircle size={16} className="mr-2" />
                Create Mandate
              </Button>
            </div>
            
            {client.requirements ? (
              <Card>
                <CardHeader className="pb-2">
                  <div className="flex items-start justify-between">
                    <CardTitle className="text-base font-medium">
                      {client.type === 'buyer' ? 'Purchase Mandate' : 
                       client.type === 'investor' ? 'Investment Mandate' : 'Listing Mandate'}
                    </CardTitle>
                    <HoverCard>
                      <HoverCardTrigger asChild>
                        <Badge className="bg-green-100 text-green-800 hover:bg-green-200 cursor-help">
                          4 Matches
                        </Badge>
                      </HoverCardTrigger>
                      <HoverCardContent className="w-80">
                        <div className="space-y-1">
                          <h4 className="text-sm font-semibold">Property Matches</h4>
                          <p className="text-xs text-slate-500">
                            4 properties match this mandate's criteria. Click to view matches.
                          </p>
                        </div>
                      </HoverCardContent>
                    </HoverCard>
                  </div>
                </CardHeader>
                <CardContent className="pt-0 space-y-3">
                  <div className="grid grid-cols-2 gap-2 text-sm">
                    <div>
                      <span className="text-slate-500">Budget:</span>{' '}
                      <span className="font-medium">{formatCurrency(client.requirements.budget.min)} - {formatCurrency(client.requirements.budget.max)}</span>
                    </div>
                    <div>
                      <span className="text-slate-500">Type:</span>{' '}
                      <span className="font-medium capitalize">{client.requirements.propertyType.join(', ')}</span>
                    </div>
                    <div>
                      <span className="text-slate-500">Bedrooms:</span>{' '}
                      <span className="font-medium">{client.requirements.bedrooms.join(', ')}</span>
                    </div>
                    <div>
                      <span className="text-slate-500">Area:</span>{' '}
                      <span className="font-medium">Min. {client.requirements.minArea} sqft</span>
                    </div>
                    <div className="col-span-2">
                      <span className="text-slate-500">Location:</span>{' '}
                      <span className="font-medium">{client.requirements.location.join(', ')}</span>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="pt-2 flex justify-between">
                  <Button variant="outline" size="sm">
                    <Home size={14} className="mr-1" />
                    View Matches
                  </Button>
                  <div className="flex gap-1">
                    <Button variant="ghost" size="sm"><Edit size={14} /></Button>
                    <Button variant="ghost" size="sm"><Trash size={14} /></Button>
                  </div>
                </CardFooter>
              </Card>
            ) : (
              <div className="text-center py-8 text-slate-500">
                <p className="mb-3">No active mandates</p>
                <Button onClick={() => setShowAddMandateDialog(true)}>
                  <PlusCircle size={16} className="mr-2" />
                  Create Mandate
                </Button>
              </div>
            )}
          </TabsContent>

          <TabsContent value="properties" className="mt-0 space-y-4">
            <div className="grid grid-cols-3 gap-4">
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-base font-medium">Saved</CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <div className="text-2xl font-semibold">{client.savedProperties?.length || 0}</div>
                  <p className="text-sm text-slate-500">properties</p>
                </CardContent>
                <CardFooter className="pt-0">
                  <Button variant="ghost" size="sm" className="w-full justify-between">
                    View All <ChevronRight size={16} />
                  </Button>
                </CardFooter>
              </Card>
              
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-base font-medium">Viewed</CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <div className="text-2xl font-semibold">{client.viewedProperties?.length || 0}</div>
                  <p className="text-sm text-slate-500">properties</p>
                </CardContent>
                <CardFooter className="pt-0">
                  <Button variant="ghost" size="sm" className="w-full justify-between">
                    View All <ChevronRight size={16} />
                  </Button>
                </CardFooter>
              </Card>
              
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-base font-medium">Shared</CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <div className="text-2xl font-semibold">{client.sharedProperties?.length || 0}</div>
                  <p className="text-sm text-slate-500">properties</p>
                </CardContent>
                <CardFooter className="pt-0">
                  <Button variant="ghost" size="sm" className="w-full justify-between">
                    View All <ChevronRight size={16} />
                  </Button>
                </CardFooter>
              </Card>
            </div>

            <div className="bg-slate-50 rounded-lg p-4 mt-4">
              <div className="flex items-center justify-between mb-2">
                <h3 className="font-medium">Recently Shared</h3>
                <Button variant="ghost" size="sm">View All</Button>
              </div>
              <div className="space-y-2">
                <div className="bg-white border rounded-lg p-3 text-sm">
                  <div className="flex justify-between items-start">
                    <div>
                      <p className="font-medium">2BR in Dubai Marina</p>
                      <p className="text-slate-500 text-xs">Shared via WhatsApp, 2 days ago</p>
                    </div>
                    <Button variant="ghost" size="sm" className="h-7">View</Button>
                  </div>
                </div>
                <div className="bg-white border rounded-lg p-3 text-sm">
                  <div className="flex justify-between items-start">
                    <div>
                      <p className="font-medium">3BR Penthouse in Downtown</p>
                      <p className="text-slate-500 text-xs">Shared via Email, 5 days ago</p>
                    </div>
                    <Button variant="ghost" size="sm" className="h-7">View</Button>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="timeline" className="mt-0">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="text-sm font-medium text-slate-500">Activity Timeline</h3>
                <Button variant="outline" size="sm" onClick={() => onAddInteraction(client.id, { type: 'note' })}>
                  <PlusCircle size={16} className="mr-1" /> Add
                </Button>
              </div>

              {client.interactions && client.interactions.length > 0 ? (
                <div className="space-y-4 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px before:h-full before:w-0.5 before:bg-slate-200">
                  {client.interactions.map((interaction, index) => (
                    <div key={interaction.id} className="relative pl-6">
                      <span className={`absolute left-0 top-2 flex items-center justify-center w-10 h-10 rounded-full ${
                        interaction.type === 'call' ? 'bg-blue-100 text-blue-600' :
                        interaction.type === 'meeting' ? 'bg-green-100 text-green-600' :
                        interaction.type === 'email' ? 'bg-purple-100 text-purple-600' :
                        interaction.type === 'viewing' ? 'bg-amber-100 text-amber-600' :
                        interaction.type === 'whatsapp' ? 'bg-teal-100 text-teal-600' :
                        'bg-slate-100 text-slate-600'
                      }`}>
                        {interaction.type === 'call' ? <Phone size={18} /> :
                         interaction.type === 'meeting' ? <Calendar size={18} /> :
                         interaction.type === 'email' ? <Mail size={18} /> :
                         interaction.type === 'viewing' ? <Home size={18} /> :
                         interaction.type === 'whatsapp' ? <MessageSquare size={18} /> :
                         <MessageSquare size={18} />}
                      </span>
                      <div className="bg-white border rounded-lg p-4 shadow-sm">
                        <div className="flex justify-between items-start mb-1">
                          <div className="font-medium capitalize">{interaction.type}</div>
                          <div className="text-xs text-slate-500 flex items-center">
                            <Clock size={12} className="mr-1" />
                            {formatDate(interaction.date)}
                          </div>
                        </div>
                        <p className="text-sm">{interaction.notes}</p>
                        {interaction.followUpDate && (
                          <div className="mt-2 flex items-center text-xs bg-amber-50 text-amber-800 p-1 px-2 rounded">
                            <Bell size={12} className="mr-1" />
                            Follow up on {formatDate(interaction.followUpDate)}
                          </div>
                        )}
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

          <TabsContent value="files" className="mt-0 space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-sm font-medium text-slate-500">Documents</h3>
              <Button size="sm">
                <PlusCircle size={16} className="mr-1" /> Upload
              </Button>
            </div>

            {client.documents && client.documents.length > 0 ? (
              <div className="space-y-2">
                {client.documents.map(doc => (
                  <div key={doc.id} className="flex items-center justify-between bg-white border rounded-lg p-3">
                    <div className="flex items-center">
                      <div className="bg-slate-100 p-2 rounded mr-3">
                        <FileIcon size={20} className="text-slate-600" />
                      </div>
                      <div>
                        <p className="font-medium">{doc.name}</p>
                        <p className="text-xs text-slate-500">Uploaded {formatDate(doc.uploadedAt)}</p>
                      </div>
                    </div>
                    <div className="flex gap-1">
                      <Button variant="ghost" size="sm">View</Button>
                      <Button variant="ghost" size="sm">Download</Button>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-10 text-slate-500 border-2 border-dashed rounded-lg">
                <div className="flex justify-center mb-2">
                  <FileIcon size={32} className="text-slate-400" />
                </div>
                <p className="mb-4">No documents uploaded yet</p>
                <Button>
                  <PlusCircle size={16} className="mr-2" />
                  Upload Document
                </Button>
              </div>
            )}
          </TabsContent>
        </div>
      </Tabs>

      {/* Create Mandate Dialog */}
      <Dialog open={showAddMandateDialog} onOpenChange={setShowAddMandateDialog}>
        <DialogContent className="max-w-md">
          <DialogHeader>
            <DialogTitle>Create New Mandate</DialogTitle>
            <DialogDescription>
              Set up investment criteria for this client to find matching properties.
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-4 py-4">
            <p className="text-sm text-slate-500">
              This feature will be implemented based on the requirements.
            </p>
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setShowAddMandateDialog(false)}>
              Cancel
            </Button>
            <Button onClick={() => setShowAddMandateDialog(false)}>
              Create Mandate
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
      
      {/* Share Properties Dialog */}
      <Dialog open={showSharePropertiesDialog} onOpenChange={setShowSharePropertiesDialog}>
        <DialogContent className="max-w-md">
          <DialogHeader>
            <DialogTitle>Share Properties</DialogTitle>
            <DialogDescription>
              Select properties to share with {client.name}.
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-4 py-4">
            <p className="text-sm text-slate-500">
              This feature will be implemented based on the requirements.
            </p>
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setShowSharePropertiesDialog(false)}>
              Cancel
            </Button>
            <Button onClick={() => setShowSharePropertiesDialog(false)}>
              Share Properties
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default ClientDetails;

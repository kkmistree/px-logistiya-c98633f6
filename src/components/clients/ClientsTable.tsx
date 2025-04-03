
import React from "react";
import { Client } from "@/types/client";
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { MoreHorizontal, Mail, Phone, Calendar, Bell } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";

interface ClientsTableProps {
  clients: Client[];
  onClientSelect: (client: Client) => void;
  selectedClientId?: string;
}

const ClientsTable = ({ clients, onClientSelect, selectedClientId }: ClientsTableProps) => {
  const getTypeColor = (type: string) => {
    switch(type) {
      case 'buyer': return "bg-blue-100 text-blue-800";
      case 'seller': return "bg-green-100 text-green-800";
      case 'investor': return "bg-purple-100 text-purple-800";
      case 'tenant': return "bg-amber-100 text-amber-800";
      case 'landlord': return "bg-teal-100 text-teal-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  const getStageColor = (stage?: string) => {
    switch(stage) {
      case 'new': return "bg-slate-100 text-slate-800";
      case 'contacted': return "bg-blue-100 text-blue-800";
      case 'qualifying': return "bg-purple-100 text-purple-800";
      case 'matched': return "bg-green-100 text-green-800";
      case 'viewing': return "bg-amber-100 text-amber-800";
      case 'offer': return "bg-pink-100 text-pink-800";
      case 'closed': return "bg-teal-100 text-teal-800";
      default: return "bg-slate-100 text-slate-800";
    }
  };

  const formatDate = (dateStr: string) => {
    const date = new Date(dateStr);
    return new Intl.DateTimeFormat('en-US', { 
      month: 'short', 
      day: 'numeric', 
      year: 'numeric' 
    }).format(date);
  };

  const daysFromNow = (dateStr: string) => {
    const date = new Date(dateStr);
    const now = new Date();
    const diffTime = Math.abs(now.getTime() - date.getTime());
    return Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  };

  return (
    <div className="bg-white rounded-lg border border-slate-200 shadow-sm overflow-hidden">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead>Type</TableHead>
            <TableHead className="hidden md:table-cell">Stage</TableHead>
            <TableHead className="hidden md:table-cell">Contact</TableHead>
            <TableHead className="hidden lg:table-cell">Last Activity</TableHead>
            <TableHead className="w-[80px]">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {clients.length === 0 ? (
            <TableRow>
              <TableCell colSpan={6} className="text-center py-8 text-slate-500">
                No clients found
              </TableCell>
            </TableRow>
          ) : (
            clients.map((client) => (
              <TableRow 
                key={client.id} 
                className={`cursor-pointer ${client.id === selectedClientId ? 'bg-estate-primary/5' : ''}`}
                onClick={() => onClientSelect(client)}
              >
                <TableCell className="font-medium">
                  <div className="flex flex-col">
                    {client.name}
                    {client.tags && client.tags.length > 0 && (
                      <div className="flex gap-1 mt-1">
                        {client.tags.slice(0, 2).map(tag => (
                          <Badge key={tag} variant="secondary" className="text-[10px] px-1 py-0">
                            {tag}
                          </Badge>
                        ))}
                        {client.tags.length > 2 && (
                          <Badge variant="secondary" className="text-[10px] px-1 py-0">+{client.tags.length - 2}</Badge>
                        )}
                      </div>
                    )}
                  </div>
                </TableCell>
                <TableCell>
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${getTypeColor(client.type)}`}>
                    {client.type.charAt(0).toUpperCase() + client.type.slice(1)}
                  </span>
                </TableCell>
                <TableCell className="hidden md:table-cell">
                  {client.stage ? (
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStageColor(client.stage)}`}>
                      {client.stage.charAt(0).toUpperCase() + client.stage.slice(1)}
                    </span>
                  ) : (
                    <span className="text-slate-400 text-sm">-</span>
                  )}
                </TableCell>
                <TableCell className="hidden md:table-cell">
                  {client.email && (
                    <div className="flex items-center gap-1 text-sm">
                      <Mail size={14} className="text-slate-400" />
                      <span className="truncate max-w-[150px]">{client.email}</span>
                    </div>
                  )}
                  {client.phone && (
                    <div className="flex items-center gap-1 text-sm">
                      <Phone size={14} className="text-slate-400" />
                      <span>{client.phone}</span>
                    </div>
                  )}
                </TableCell>
                <TableCell className="hidden lg:table-cell">
                  {client.interactions && client.interactions.length > 0 ? (
                    <HoverCard>
                      <HoverCardTrigger asChild>
                        <div className="flex items-center gap-1 text-sm cursor-help">
                          <span className={`p-1 rounded ${
                            client.interactions[0].type === 'call' ? 'bg-blue-100 text-blue-600' :
                            client.interactions[0].type === 'meeting' ? 'bg-green-100 text-green-600' :
                            client.interactions[0].type === 'email' ? 'bg-purple-100 text-purple-600' :
                            client.interactions[0].type === 'viewing' ? 'bg-amber-100 text-amber-600' :
                            client.interactions[0].type === 'whatsapp' ? 'bg-teal-100 text-teal-600' :
                            'bg-slate-100 text-slate-600'
                          }`}>
                            {client.interactions[0].type === 'call' ? <Phone size={12} /> :
                             client.interactions[0].type === 'meeting' ? <Calendar size={12} /> :
                             client.interactions[0].type === 'email' ? <Mail size={12} /> :
                             client.interactions[0].type === 'viewing' ? <Calendar size={12} /> :
                             client.interactions[0].type === 'whatsapp' ? <Phone size={12} /> :
                             <Calendar size={12} />}
                          </span>
                          <span>{daysFromNow(client.interactions[0].date) === 0 ? 'Today' : 
                                 daysFromNow(client.interactions[0].date) === 1 ? 'Yesterday' : 
                                 `${daysFromNow(client.interactions[0].date)} days ago`}</span>
                        </div>
                      </HoverCardTrigger>
                      <HoverCardContent className="w-80 p-4">
                        <div className="space-y-2">
                          <h4 className="text-sm font-semibold capitalize">{client.interactions[0].type}</h4>
                          <p className="text-xs text-slate-500">{formatDate(client.interactions[0].date)}</p>
                          <p className="text-sm">{client.interactions[0].notes}</p>
                        </div>
                      </HoverCardContent>
                    </HoverCard>
                  ) : (
                    <span className="text-slate-400 text-sm">No activity</span>
                  )}
                </TableCell>
                <TableCell>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild onClick={(e) => e.stopPropagation()}>
                      <Button variant="ghost" size="icon">
                        <MoreHorizontal size={16} />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuLabel>Actions</DropdownMenuLabel>
                      <DropdownMenuItem onClick={(e) => e.stopPropagation()}>
                        View Profile
                      </DropdownMenuItem>
                      <DropdownMenuItem onClick={(e) => e.stopPropagation()}>
                        Add Interaction
                      </DropdownMenuItem>
                      <DropdownMenuItem onClick={(e) => e.stopPropagation()}>
                        Schedule Viewing
                      </DropdownMenuItem>
                      <DropdownMenuItem onClick={(e) => e.stopPropagation()}>
                        Share Properties
                      </DropdownMenuItem>
                      <DropdownMenuItem onClick={(e) => e.stopPropagation()}>
                        Edit Client
                      </DropdownMenuItem>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem 
                        onClick={(e) => e.stopPropagation()}
                        className="text-red-600"
                      >
                        Archive Client
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </TableCell>
              </TableRow>
            ))
          )}
        </TableBody>
      </Table>
    </div>
  );
};

export default ClientsTable;


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
import { MoreHorizontal, Mail, Phone, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

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

  const formatDate = (dateStr: string) => {
    const date = new Date(dateStr);
    return new Intl.DateTimeFormat('en-US', { 
      month: 'short', 
      day: 'numeric', 
      year: 'numeric' 
    }).format(date);
  };

  return (
    <div className="bg-white rounded-lg border border-slate-200 shadow-sm overflow-hidden">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead>Type</TableHead>
            <TableHead className="hidden md:table-cell">Contact</TableHead>
            <TableHead className="hidden md:table-cell">Created</TableHead>
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
                <TableCell className="font-medium">{client.name}</TableCell>
                <TableCell>
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${getTypeColor(client.type)}`}>
                    {client.type.charAt(0).toUpperCase() + client.type.slice(1)}
                  </span>
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
                <TableCell className="hidden md:table-cell">
                  {formatDate(client.createdAt)}
                </TableCell>
                <TableCell className="hidden lg:table-cell">
                  {client.interactions && client.interactions.length > 0 ? (
                    <div className="flex items-center gap-1 text-sm">
                      <Calendar size={14} className="text-slate-400" />
                      <span>{formatDate(client.interactions[0].date)}</span>
                    </div>
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

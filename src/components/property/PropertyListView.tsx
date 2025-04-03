
import { Property } from "@/types/property";
import { formatCurrency } from "@/utils/format";
import { useCurrency } from "@/contexts/CurrencyContext";
import { Building, Calendar, MapPin, Maximize2, Bed, Bath, Heart, ExternalLink } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Toggle } from "@/components/ui/toggle";

interface PropertyListViewProps {
  properties: Property[];
}

const PropertyListView = ({ properties }: PropertyListViewProps) => {
  const { currency } = useCurrency();
  
  const getStatusColor = (status: Property["status"]) => {
    switch (status) {
      case "ready":
        return "bg-estate-success text-white";
      case "off-plan":
        return "bg-estate-secondary text-white";
      case "resale":
        return "bg-estate-warning text-white";
      default:
        return "bg-slate-500 text-white";
    }
  };

  const formatCompletionDate = (date?: string) => {
    if (!date) return "Ready";
    const d = new Date(date);
    return `${d.toLocaleString('default', { month: 'short' })} ${d.getFullYear()}`;
  };

  return (
    <div className="border rounded-lg overflow-hidden bg-white">
      <Table>
        <TableHeader className="bg-slate-50">
          <TableRow>
            <TableHead className="w-[100px]">Image</TableHead>
            <TableHead>Property</TableHead>
            <TableHead>Type</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Price</TableHead>
            <TableHead className="text-right">Beds / Baths</TableHead>
            <TableHead className="text-right">Area</TableHead>
            <TableHead className="text-right">ROI</TableHead>
            <TableHead className="text-right">Match</TableHead>
            <TableHead className="text-right">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {properties.map((property) => (
            <TableRow key={property.id} className="hover:bg-slate-50">
              <TableCell className="p-2">
                <div className="h-16 w-24 rounded overflow-hidden">
                  <img 
                    src={property.images[0]} 
                    alt={property.title}
                    className="h-full w-full object-cover"
                  />
                </div>
              </TableCell>
              <TableCell>
                <div>
                  <div className="font-medium">{property.title}</div>
                  <div className="flex items-center text-xs text-slate-500 mt-1">
                    <MapPin size={12} className="mr-1" />
                    {property.location.area}, {property.location.community}
                  </div>
                </div>
              </TableCell>
              <TableCell>
                <div className="flex items-center">
                  <Building size={14} className="text-slate-400 mr-1" />
                  <span className="capitalize">{property.type}</span>
                </div>
              </TableCell>
              <TableCell>
                <Badge variant="secondary" className={getStatusColor(property.status)}>
                  {property.status === "ready" ? "Ready" : 
                  property.status === "off-plan" ? "Off-Plan" : "Resale"}
                </Badge>
                {property.status === "off-plan" && (
                  <div className="flex items-center text-xs mt-1">
                    <Calendar size={12} className="text-slate-400 mr-1" />
                    {formatCompletionDate(property.completionDate)}
                  </div>
                )}
              </TableCell>
              <TableCell>
                <div className="font-semibold">{formatCurrency(property.price, currency.code)}</div>
                <div className="text-xs text-slate-500">
                  {formatCurrency(Math.round(property.price / property.area), currency.code)}/sqft
                </div>
              </TableCell>
              <TableCell className="text-right">
                {property.bedrooms} / {property.bathrooms}
              </TableCell>
              <TableCell className="text-right">
                <div className="flex items-center justify-end">
                  <Maximize2 size={14} className="text-slate-400 mr-1" />
                  {property.area} sqft
                </div>
              </TableCell>
              <TableCell className="text-right">
                {property.roi ? (
                  <span className="text-estate-success font-medium">{property.roi}%</span>
                ) : (
                  <span className="text-slate-400">-</span>
                )}
              </TableCell>
              <TableCell className="text-right">
                {property.matchScore ? (
                  <Badge className="bg-estate-accent text-estate-primary">
                    {property.matchScore}%
                  </Badge>
                ) : (
                  <span className="text-slate-400">-</span>
                )}
              </TableCell>
              <TableCell className="text-right">
                <div className="flex justify-end gap-1">
                  <Toggle size="sm" aria-label="Save property">
                    <Heart size={14} />
                  </Toggle>
                  <Button variant="outline" size="sm">
                    <ExternalLink size={14} className="mr-1" />
                    View
                  </Button>
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default PropertyListView;

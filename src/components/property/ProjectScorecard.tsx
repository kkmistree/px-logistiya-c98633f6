
import { Property } from "@/types/property";
import { Button } from "@/components/ui/button";
import { 
  Download, 
  HelpCircle, 
  Info,
  BarChart2,
  TrendingUp,
  AlertTriangle,
  DollarSign,
  Droplets,
  MapPin,
  Building,
  Calendar,
  User,
  Clock,
  CheckCircle,
} from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { formatCurrency } from "@/utils/format";
import { toast } from "sonner";

interface ProjectScorecardProps {
  property: Property;
  onClose?: () => void;
}

const ProjectScorecard = ({ property, onClose }: ProjectScorecardProps) => {
  const handleDownloadTeaser = () => {
    toast.success("Downloading project teaser...");
  };

  // Function to determine risk level colors
  const getRiskColor = (level: string) => {
    switch (level.toLowerCase()) {
      case 'low':
        return 'text-green-500';
      case 'moderate':
        return 'text-amber-500';
      case 'high':
        return 'text-red-500';
      default:
        return 'text-slate-500';
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
      <div className="relative">
        <div className="p-6">
          <div className="flex justify-between items-start">
            <div>
              <h2 className="text-2xl font-bold text-estate-primary">Scorecard</h2>
            </div>
            {onClose && (
              <Button 
                variant="ghost" 
                size="icon"
                onClick={onClose}
                className="text-slate-500"
              >
                ✕
              </Button>
            )}
          </div>
          
          <div className="mt-4 space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
              <div className="col-span-1 lg:col-span-1">
                <div className="bg-estate-primary/5 p-4 rounded-lg">
                  <img 
                    src={property.images[0]}
                    alt={property.title}
                    className="w-full h-36 object-cover rounded-md mb-3"
                  />
                  
                  <h3 className="text-xl font-semibold mb-2 text-estate-primary">{property.title}</h3>
                  
                  <div className="flex items-center gap-1 text-sm text-slate-600 mb-2">
                    <MapPin size={16} />
                    <span>{property.location.area}, {property.location.community}</span>
                  </div>
                  
                  <Separator className="my-3" />
                  
                  <div className="grid grid-cols-2 gap-2 mb-3">
                    <div>
                      <p className="text-xs text-slate-500">Launch price</p>
                      <p className="font-medium text-purple-600">{formatCurrency(property.price, "AED")}</p>
                    </div>
                    
                    <div className="text-right">
                      <p className="text-xs text-slate-500">Handover</p>
                      <p className="font-medium">Dec 2025</p>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-2 mb-3">
                    <div>
                      <p className="text-xs text-slate-500">Status</p>
                      <p className="font-medium capitalize">{property.status === "off-plan" ? "Under construction" : property.status}</p>
                    </div>
                    
                    <div className="text-right">
                      <p className="text-xs text-slate-500">Bedrooms</p>
                      <p className="font-medium">{property.bedrooms} BR</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-2 mb-4">
                    <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center">
                      <Building size={20} className="text-estate-primary" />
                    </div>
                    <div>
                      <p className="text-xs text-slate-500">Developer</p>
                      <p className="font-medium">{property.developer || "Sobha Realty"}</p>
                    </div>
                  </div>
                  
                  <Button className="w-full bg-purple-600 hover:bg-purple-700 text-white mb-2">
                    Enquiry
                  </Button>
                  
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm" className="flex-1">
                      Scorecard
                    </Button>
                    <Button variant="outline" size="sm" className="flex-1">
                      View Teaser
                    </Button>
                  </div>
                  
                  <div className="flex justify-center mt-2">
                    <Button variant="ghost" size="sm" onClick={handleDownloadTeaser}>
                      <Download size={16} className="mr-1" />
                      Download teaser
                    </Button>
                  </div>
                </div>
              </div>
              
              <div className="col-span-1 lg:col-span-2">
                <div className="bg-slate-50 p-6 rounded-lg h-full">
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="text-lg font-semibold">Property Assessment</h3>
                    <Button variant="ghost" size="sm">
                      <HelpCircle size={16} className="mr-1" />
                      How are these metrics calculated?
                    </Button>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <div className="flex items-center gap-2">
                        <AlertTriangle size={18} className="text-amber-500" />
                        <span className="font-medium">Development risks</span>
                        <Info size={14} className="text-slate-400" />
                      </div>
                      <div className={`font-medium ${getRiskColor('low')}`}>Low</div>
                    </div>
                    
                    <Separator />
                    
                    <div className="flex justify-between items-center">
                      <div className="flex items-center gap-2">
                        <Clock size={18} className="text-purple-500" />
                        <span className="font-medium">Payment plan</span>
                        <Info size={14} className="text-slate-400" />
                      </div>
                      <div className="font-medium flex items-center gap-2">
                        <span>20/40/40</span>
                        <Badge className="bg-amber-100 text-amber-800 border-none">Moderate</Badge>
                      </div>
                    </div>
                    
                    <Separator />
                    
                    <div className="flex justify-between items-center">
                      <div className="flex items-center gap-2">
                        <TrendingUp size={18} className="text-blue-500" />
                        <span className="font-medium">Macro trends</span>
                        <Info size={14} className="text-slate-400" />
                      </div>
                      <div className={`font-medium ${getRiskColor('low')}`}>Positive</div>
                    </div>
                    
                    <Separator />
                    
                    <div className="flex justify-between items-center">
                      <div className="flex items-center gap-2">
                        <Building size={18} className="text-slate-500" />
                        <span className="font-medium">Neighborhood quality</span>
                        <Info size={14} className="text-slate-400" />
                      </div>
                      <div className="flex justify-between items-center gap-2">
                        <span>{property.location.area}</span>
                        <Badge className="bg-green-100 text-green-800 border-none">Good</Badge>
                      </div>
                    </div>
                    
                    <Separator />
                    
                    <div className="flex justify-between items-center">
                      <div className="flex items-center gap-2">
                        <DollarSign size={18} className="text-green-500" />
                        <span className="font-medium">Valuation</span>
                        <Info size={14} className="text-slate-400" />
                      </div>
                      <div className="font-medium text-slate-500">N/A</div>
                    </div>
                    
                    <Separator />
                    
                    <div className="flex justify-between items-center">
                      <div className="flex items-center gap-2">
                        <BarChart2 size={18} className="text-estate-primary" />
                        <span className="font-medium">Expected yield</span>
                        <Info size={14} className="text-slate-400" />
                      </div>
                      <div className="font-medium text-slate-500">N/A</div>
                    </div>
                    
                    <Separator />
                    
                    <div className="flex justify-between items-center">
                      <div className="flex items-center gap-2">
                        <TrendingUp size={18} className="text-purple-500" />
                        <span className="font-medium">Annual ROI</span>
                        <Info size={14} className="text-slate-400" />
                      </div>
                      <div className="font-medium text-slate-500">N/A</div>
                    </div>
                    
                    <Separator />
                    
                    <div className="flex justify-between items-center">
                      <div className="flex items-center gap-2">
                        <Droplets size={18} className="text-blue-500" />
                        <span className="font-medium">Liquidity</span>
                        <Info size={14} className="text-slate-400" />
                      </div>
                      <div className={`font-medium ${getRiskColor('low')}`}>Strong</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectScorecard;

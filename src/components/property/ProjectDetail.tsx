
import React, { useState } from "react";
import { 
  Building, 
  MapPin, 
  Calendar, 
  Download, 
  Heart, 
  Share2, 
  Info, 
  Timer, 
  CheckCircle, 
  AlertCircle,
  BarChart2,
  Square,
  Factory,
  Warehouse
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Property } from "@/types/property";
import { formatCurrency } from "@/utils/format";
import { Separator } from "@/components/ui/separator";
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { toast } from "sonner";

interface ProjectDetailProps {
  property: Property;
  onClose?: () => void;
}

const ProjectDetail = ({ property, onClose }: ProjectDetailProps) => {
  const [activeTab, setActiveTab] = useState("overview");
  const [isSaved, setIsSaved] = useState(false);

  const handleSaveProject = () => {
    setIsSaved(!isSaved);
    toast.success(isSaved ? "Project removed from saved projects" : "Project saved to your dashboard");
  };

  const handleShareProject = () => {
    toast.success("Project link copied to clipboard");
  };

  const handleDownloadTeaser = () => {
    toast.success("Downloading project teaser...");
  };

  const handleAddToMandate = () => {
    toast.success("Project added to client mandate");
  };

  const handleBlockUnit = () => {
    toast.success("Unit blocking initiated");
  };
  
  const handleBookViewing = () => {
    toast.success("Viewing request sent");
  };

  return (
    <div className="bg-white rounded-lg shadow-lg max-h-[90vh] overflow-y-auto">
      <div className="relative">
        <div className="relative h-64 bg-slate-200">
          <img 
            src={property.images[0]} 
            alt={property.title} 
            className="w-full h-full object-cover"
          />
          {onClose && (
            <Button 
              variant="ghost" 
              size="icon"
              className="absolute top-4 right-4 bg-black/30 hover:bg-black/50 text-white rounded-full"
              onClick={onClose}
            >
              ✕
            </Button>
          )}
          <div className="absolute bottom-4 left-4 flex gap-2">
            {property.status === "under-development" && (
              <Badge className="bg-estate-secondary text-white">Under Development</Badge>
            )}
            {property.exclusive && (
              <Badge className="bg-purple-600 text-white">Exclusive</Badge>
            )}
            {property.developer && (
              <Badge className="bg-blue-600 text-white">Direct from Developer</Badge>
            )}
          </div>
        </div>
        
        <div className="p-6">
          <div className="flex justify-between items-start mb-4">
            <div>
              <h1 className="text-2xl font-bold text-estate-primary">{property.title}</h1>
              <div className="flex items-center gap-1 text-slate-500 mt-1">
                <MapPin size={16} />
                <span>{property.location.area}, {property.location.community}</span>
              </div>
            </div>
            
            <div className="text-right">
              <div className="text-2xl font-bold text-estate-primary">
                {formatCurrency(property.price, "SAR")}
              </div>
              <div className="text-sm text-slate-500">
                {formatCurrency(Math.round(property.price / property.area), "SAR")}/sqm
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-2">
                <Building size={18} className="text-estate-primary" />
                <span className="font-medium">Developer:</span>
                <span>{property.developer || "N/A"}</span>
              </div>
              
              <div className="flex items-center gap-2">
                <Calendar size={18} className="text-estate-primary" />
                <span className="font-medium">Handover:</span>
                <span>{property.completionDate ? new Date(property.completionDate).toLocaleDateString('en-US', { month: 'short', year: 'numeric' }) : "Ready"}</span>
              </div>
              
              <div className="flex items-center gap-2">
                <Factory size={18} className="text-estate-primary" />
                <span className="font-medium">Property Type:</span>
                <span className="capitalize">{property.type}</span>
              </div>
            </div>
            
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-2">
                <Square size={18} className="text-estate-primary" />
                <span className="font-medium">Area:</span>
                <span>{property.area} sqm</span>
              </div>
              
              <div className="flex items-center gap-2">
                <Warehouse size={18} className="text-estate-primary" />
                <span className="font-medium">Zoning:</span>
                <span>{property.zoning || "Industrial"}</span>
              </div>
              
              {property.paymentPlan && (
                <div className="flex items-center gap-2">
                  <Timer size={18} className="text-estate-primary" />
                  <span className="font-medium">Payment Plan:</span>
                  <span>{property.paymentPlan.downPayment}% Down, {property.paymentPlan.installments.length} Installments</span>
                </div>
              )}
            </div>
          </div>
          
          <div className="flex flex-wrap gap-2 mb-6">
            <Button 
              variant={isSaved ? "default" : "outline"} 
              className={isSaved ? "bg-estate-primary text-white" : ""}
              onClick={handleSaveProject}
            >
              <Heart size={16} className="mr-2" /> {isSaved ? "Saved" : "Save Project"}
            </Button>
            
            <Button variant="outline" onClick={handleShareProject}>
              <Share2 size={16} className="mr-2" /> Share
            </Button>
            
            <Button variant="outline" onClick={handleDownloadTeaser}>
              <Download size={16} className="mr-2" /> Download Teaser
            </Button>
          </div>
          
          <Tabs defaultValue="overview" value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="w-full justify-start">
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="units">Unit Matrix</TabsTrigger>
              <TabsTrigger value="paymentplan">Payment Plan</TabsTrigger>
              <TabsTrigger value="roi">ROI Analytics</TabsTrigger>
              <TabsTrigger value="masterplan">Masterplan</TabsTrigger>
            </TabsList>
            
            <TabsContent value="overview" className="pt-4">
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-medium mb-2">Project Description</h3>
                  <p className="text-slate-600">{property.description}</p>
                </div>
                
                <div>
                  <h3 className="text-lg font-medium mb-2">Features & Amenities</h3>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                    {property.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-1">
                        <CheckCircle size={16} className="text-green-500" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h3 className="text-lg font-medium mb-2">Location</h3>
                  <div className="h-48 bg-slate-200 rounded-lg">
                    <img 
                      src="https://api.mapbox.com/styles/v1/mapbox/streets-v11/static/55.2708,25.2048,13,0/600x300?access_token=placeholder" 
                      alt="Location Map"
                      className="w-full h-full object-cover rounded-lg"
                    />
                  </div>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="units" className="pt-4">
              <div className="space-y-4">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-medium">Available Units</h3>
                  <div className="text-sm text-slate-500">Showing 10 of 24 units</div>
                </div>
                
                <div className="overflow-auto">
                  <table className="min-w-full divide-y divide-slate-200">
                    <thead className="bg-slate-50">
                      <tr>
                        <th className="px-4 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">Type</th>
                        <th className="px-4 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">Bedrooms</th>
                        <th className="px-4 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">Area (sqft)</th>
                        <th className="px-4 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">Price (AED)</th>
                        <th className="px-4 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">Status</th>
                        <th className="px-4 py-3 text-right text-xs font-medium text-slate-500 uppercase tracking-wider">Action</th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-slate-200">
                      {Array(5).fill(null).map((_, idx) => (
                        <tr key={idx} className="hover:bg-slate-50">
                          <td className="px-4 py-3 text-sm text-slate-700">Villa {idx + 1}</td>
                          <td className="px-4 py-3 text-sm text-slate-700">{property.bedrooms}</td>
                          <td className="px-4 py-3 text-sm text-slate-700">{property.area}</td>
                          <td className="px-4 py-3 text-sm text-slate-700 font-medium">{formatCurrency(property.price, "AED")}</td>
                          <td className="px-4 py-3 text-sm">
                            <Badge className="bg-green-100 text-green-800 border-none">Available</Badge>
                          </td>
                          <td className="px-4 py-3 text-sm text-right">
                            <Button size="sm" variant="outline">View Details</Button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="paymentplan" className="pt-4">
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-medium mb-4">Payment Plan</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <Card>
                      <CardContent className="pt-6">
                        <h4 className="text-md font-medium mb-4">Option 1: {property.paymentPlan ? `${property.paymentPlan.downPayment}/${100-property.paymentPlan.downPayment}` : "20/80"}</h4>
                        
                        <div className="space-y-6">
                          <div className="space-y-2">
                            <div className="flex justify-between items-center">
                              <span className="text-sm font-medium">Down Payment</span>
                              <span className="text-sm font-medium text-purple-600">20%</span>
                            </div>
                            <Progress value={20} className="h-2 bg-slate-100" indicatorColor="bg-purple-600" />
                          </div>
                          
                          <div className="space-y-2">
                            <div className="flex justify-between items-center">
                              <span className="text-sm font-medium">During Construction</span>
                              <span className="text-sm font-medium text-purple-600">40%</span>
                            </div>
                            <Progress value={40} className="h-2 bg-slate-100" indicatorColor="bg-purple-600" />
                          </div>
                          
                          <div className="space-y-2">
                            <div className="flex justify-between items-center">
                              <span className="text-sm font-medium">On Handover</span>
                              <span className="text-sm font-medium text-purple-600">40%</span>
                            </div>
                            <Progress value={40} className="h-2 bg-slate-100" indicatorColor="bg-purple-600" />
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                    
                    <Card>
                      <CardContent className="pt-6">
                        <h4 className="text-md font-medium mb-4">Option 2: 10/90</h4>
                        
                        <div className="space-y-6">
                          <div className="space-y-2">
                            <div className="flex justify-between items-center">
                              <span className="text-sm font-medium">Down Payment</span>
                              <span className="text-sm font-medium text-purple-600">10%</span>
                            </div>
                            <Progress value={10} className="h-2 bg-slate-100" indicatorColor="bg-purple-600" />
                          </div>
                          
                          <div className="space-y-2">
                            <div className="flex justify-between items-center">
                              <span className="text-sm font-medium">During Construction</span>
                              <span className="text-sm font-medium text-purple-600">30%</span>
                            </div>
                            <Progress value={30} className="h-2 bg-slate-100" indicatorColor="bg-purple-600" />
                          </div>
                          
                          <div className="space-y-2">
                            <div className="flex justify-between items-center">
                              <span className="text-sm font-medium">On Handover</span>
                              <span className="text-sm font-medium text-purple-600">60%</span>
                            </div>
                            <Progress value={60} className="h-2 bg-slate-100" indicatorColor="bg-purple-600" />
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-lg font-medium mb-4">Project Timeline</h3>
                  <div className="space-y-6">
                    <div className="flex gap-4">
                      <div className="rounded-full h-8 w-8 bg-green-500 flex items-center justify-center text-white">
                        <CheckCircle size={16} />
                      </div>
                      <div>
                        <div className="font-medium">Construction Started</div>
                        <div className="text-sm text-slate-500">07/10/2024</div>
                      </div>
                    </div>
                    
                    <div className="flex gap-4">
                      <div className="rounded-full h-8 w-8 bg-purple-500 flex items-center justify-center text-white">
                        <Timer size={16} />
                      </div>
                      <div>
                        <div className="font-medium">Expected Completion</div>
                        <div className="text-sm text-slate-500">{property.completionDate ? new Date(property.completionDate).toLocaleDateString('en-US', { month: 'numeric', day: 'numeric', year: 'numeric' }) : "December 2025"}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="roi" className="pt-4">
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-medium mb-4">ROI Analysis</h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                    <Card>
                      <CardContent className="pt-4">
                        <div className="text-sm text-slate-500 mb-1">Expected Yield</div>
                        <div className="text-2xl font-bold text-estate-primary">{property.roi || 5.8}%</div>
                        <div className="text-xs text-green-600">+0.5% vs area average</div>
                      </CardContent>
                    </Card>
                    
                    <Card>
                      <CardContent className="pt-4">
                        <div className="text-sm text-slate-500 mb-1">Annual ROI</div>
                        <div className="text-2xl font-bold text-estate-primary">{property.roi ? property.roi : 6.2}%</div>
                        <div className="text-xs text-green-600">+1.2% year-over-year</div>
                      </CardContent>
                    </Card>
                    
                    <Card>
                      <CardContent className="pt-4">
                        <div className="text-sm text-slate-500 mb-1">Market Trends</div>
                        <div className="text-lg font-bold text-green-600">Positive</div>
                        <div className="text-xs text-slate-500">Based on latest market data</div>
                      </CardContent>
                    </Card>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <AlertCircle size={16} className="text-amber-500" />
                        <span className="font-medium">Development Risk</span>
                      </div>
                      <Badge className="bg-green-100 text-green-800 border-none">Low</Badge>
                    </div>
                    
                    <Separator />
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <BarChart2 size={16} className="text-blue-500" />
                        <span className="font-medium">Neighborhood Quality</span>
                      </div>
                      <Badge className="bg-green-100 text-green-800 border-none">Excellent</Badge>
                    </div>
                    
                    <Separator />
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Info size={16} className="text-purple-500" />
                        <span className="font-medium">Liquidity</span>
                      </div>
                      <Badge className="bg-green-100 text-green-800 border-none">Strong</Badge>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="masterplan" className="pt-4">
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-medium mb-2">Project Masterplan</h3>
                  <div className="h-64 bg-slate-200 rounded-lg">
                    <img 
                      src={property.images[1] || property.images[0]} 
                      alt="Masterplan"
                      className="w-full h-full object-cover rounded-lg"
                    />
                  </div>
                </div>
                
                <div>
                  <h3 className="text-lg font-medium mb-2">Project Overview</h3>
                  <p className="text-slate-600">{property.description}</p>
                </div>
              </div>
            </TabsContent>
          </Tabs>
          
          <div className="flex flex-wrap gap-3 mt-6">
            <Button className="flex-1 bg-estate-primary hover:bg-estate-primary/90 text-white">
              Enquiry
            </Button>
            
            <Button variant="outline" className="flex-1" onClick={handleAddToMandate}>
              Add to Mandate
            </Button>
            
            <Button variant="outline" className="flex-1" onClick={handleBlockUnit}>
              Block Unit
            </Button>
            
            <Button variant="outline" className="flex-1" onClick={handleBookViewing}>
              Book Viewing
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;


import { useState } from "react";
import AppShell from "@/components/layout/AppShell";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CheckCircle2, Clock, FileCheck, FileQuestion, FileSearch, FileX, Plus, Search, Upload } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const DueDiligenceEngine = () => {
  const [activeTab, setActiveTab] = useState("property");
  const [searchQuery, setSearchQuery] = useState("");
  
  // Mock due diligence items
  const dueDiligenceItems = [
    {
      id: "dd-1",
      type: "property",
      name: "Property Title Deed",
      status: "verified",
      date: "2025-03-15",
      notes: "Legal team verified the title deed with the Ministry of Justice records",
      required: true
    },
    {
      id: "dd-2",
      type: "property",
      name: "Building Permits",
      status: "pending",
      date: "2025-03-18",
      notes: "Waiting for full building permit documentation from seller",
      required: true
    },
    {
      id: "dd-3",
      type: "property",
      name: "Environmental Compliance Certificate",
      status: "issue",
      date: "2025-03-20",
      notes: "Issues found with water discharge permits; requires follow-up",
      required: true
    },
    {
      id: "dd-4",
      type: "financial",
      name: "Financial Statements (3 Years)",
      status: "verified",
      date: "2025-03-22",
      notes: "Financial statements reviewed and validated by accounting team",
      required: true
    },
    {
      id: "dd-5",
      type: "financial",
      name: "Cash Flow Projections",
      status: "pending",
      date: "2025-03-25",
      notes: "Awaiting updated projections with adjusted market conditions",
      required: true
    },
    {
      id: "dd-6",
      type: "legal",
      name: "Existing Contracts Review",
      status: "in-progress",
      date: "2025-03-28",
      notes: "Legal team reviewing tenant contracts and service agreements",
      required: true
    },
    {
      id: "dd-7",
      type: "legal",
      name: "Regulatory Compliance Check",
      status: "verified",
      date: "2025-04-01",
      notes: "All regulatory requirements verified with MODON authorities",
      required: true
    },
    {
      id: "dd-8",
      type: "technical",
      name: "Building Technical Audit",
      status: "in-progress",
      date: "2025-04-05",
      notes: "Engineering team completing on-site technical assessment",
      required: true
    }
  ];
  
  const getStatusIcon = (status: string) => {
    switch (status) {
      case "verified": return <CheckCircle2 size={16} className="text-green-500" />;
      case "pending": return <Clock size={16} className="text-amber-500" />;
      case "issue": return <FileX size={16} className="text-red-500" />;
      case "in-progress": return <FileSearch size={16} className="text-blue-500" />;
      default: return <FileQuestion size={16} className="text-slate-500" />;
    }
  };
  
  const getStatusText = (status: string) => {
    switch (status) {
      case "verified": return "Verified";
      case "pending": return "Pending";
      case "issue": return "Issues Found";
      case "in-progress": return "In Progress";
      default: return "Unknown";
    }
  };
  
  const getStatusColor = (status: string) => {
    switch (status) {
      case "verified": return "bg-green-500";
      case "pending": return "bg-amber-500";
      case "issue": return "bg-red-500";
      case "in-progress": return "bg-blue-500";
      default: return "bg-slate-500";
    }
  };
  
  const filteredItems = dueDiligenceItems.filter(item => 
    activeTab === "all" || item.type === activeTab
  );
  
  const completedItemsCount = filteredItems.filter(item => item.status === "verified").length;
  const progress = Math.round((completedItemsCount / filteredItems.length) * 100);

  return (
    <AppShell>
      <div className="space-y-6">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <div>
            <h1 className="text-xl sm:text-2xl font-bold">Due Diligence Engine</h1>
            <p className="text-sm text-slate-500">Manage and track industrial property due diligence process</p>
          </div>
          
          <Button className="bg-estate-primary hover:bg-estate-primary/90">
            <Plus className="mr-2 h-4 w-4" />
            New Due Diligence
          </Button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-lg">
                Current Project: Warehouse Complex - Riyadh Industrial City
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between mb-1 text-sm">
                    <span>Progress</span>
                    <span>{completedItemsCount} of {filteredItems.length} completed</span>
                  </div>
                  <Progress value={progress} className="h-2" />
                </div>
                
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="flex flex-col items-center justify-center p-3 bg-slate-100 rounded">
                    <span className="text-2xl font-bold text-green-600">{dueDiligenceItems.filter(i => i.status === "verified").length}</span>
                    <span className="text-xs text-slate-500">Verified</span>
                  </div>
                  <div className="flex flex-col items-center justify-center p-3 bg-slate-100 rounded">
                    <span className="text-2xl font-bold text-amber-600">{dueDiligenceItems.filter(i => i.status === "pending").length}</span>
                    <span className="text-xs text-slate-500">Pending</span>
                  </div>
                  <div className="flex flex-col items-center justify-center p-3 bg-slate-100 rounded">
                    <span className="text-2xl font-bold text-blue-600">{dueDiligenceItems.filter(i => i.status === "in-progress").length}</span>
                    <span className="text-xs text-slate-500">In Progress</span>
                  </div>
                  <div className="flex flex-col items-center justify-center p-3 bg-slate-100 rounded">
                    <span className="text-2xl font-bold text-red-600">{dueDiligenceItems.filter(i => i.status === "issue").length}</span>
                    <span className="text-xs text-slate-500">Issues</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-lg">Due Diligence Timeline</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex gap-2">
                  <div className="w-2 h-2 rounded-full bg-green-500 mt-2"></div>
                  <div>
                    <p className="text-sm font-medium">Property Title Verified</p>
                    <p className="text-xs text-slate-500">2025-03-15</p>
                  </div>
                </div>
                
                <div className="flex gap-2">
                  <div className="w-2 h-2 rounded-full bg-green-500 mt-2"></div>
                  <div>
                    <p className="text-sm font-medium">Financial Statements Verified</p>
                    <p className="text-xs text-slate-500">2025-03-22</p>
                  </div>
                </div>
                
                <div className="flex gap-2">
                  <div className="w-2 h-2 rounded-full bg-blue-500 mt-2"></div>
                  <div>
                    <p className="text-sm font-medium">Legal Review Started</p>
                    <p className="text-xs text-slate-500">2025-03-28</p>
                  </div>
                </div>
                
                <div className="flex gap-2">
                  <div className="w-2 h-2 rounded-full bg-green-500 mt-2"></div>
                  <div>
                    <p className="text-sm font-medium">Regulatory Compliance Verified</p>
                    <p className="text-xs text-slate-500">2025-04-01</p>
                  </div>
                </div>
                
                <div className="flex gap-2">
                  <div className="w-2 h-2 rounded-full bg-blue-500 mt-2"></div>
                  <div>
                    <p className="text-sm font-medium">Technical Audit Started</p>
                    <p className="text-xs text-slate-500">2025-04-05</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
        
        <div className="flex items-center justify-between mb-4">
          <Tabs value={activeTab} onValueChange={setActiveTab}>
            <TabsList>
              <TabsTrigger value="all">All Items</TabsTrigger>
              <TabsTrigger value="property">Property</TabsTrigger>
              <TabsTrigger value="financial">Financial</TabsTrigger>
              <TabsTrigger value="legal">Legal</TabsTrigger>
              <TabsTrigger value="technical">Technical</TabsTrigger>
            </TabsList>
          </Tabs>
          
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400" size={18} />
            <Input 
              type="search" 
              placeholder="Search items..."
              className="pl-10 w-[250px]"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>
        
        <div className="grid gap-4">
          {filteredItems.map((item) => (
            <Card key={item.id} className="cursor-pointer hover:border-estate-primary/30 transition-colors">
              <CardContent className="p-4">
                <div className="flex flex-col md:flex-row justify-between gap-4">
                  <div className="flex gap-3">
                    {getStatusIcon(item.status)}
                    <div>
                      <h3 className="font-medium">{item.name}</h3>
                      <p className="text-sm text-slate-500">{item.notes}</p>
                      <div className="flex gap-2 mt-2">
                        <Badge variant="outline" className="text-xs">
                          {item.type.charAt(0).toUpperCase() + item.type.slice(1)}
                        </Badge>
                        {item.required && (
                          <Badge variant="outline" className="text-xs bg-amber-100 text-amber-800 border-amber-200">
                            Required
                          </Badge>
                        )}
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex flex-col items-end justify-between">
                    <div className={`px-2 py-1 rounded-full text-xs text-white ${getStatusColor(item.status)}`}>
                      {getStatusText(item.status)}
                    </div>
                    
                    <div className="flex gap-2">
                      <Button variant="outline" size="sm">
                        <Upload className="mr-2 h-4 w-4" />
                        Upload
                      </Button>
                      <Button size="sm">View Details</Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </AppShell>
  );
};

export default DueDiligenceEngine;

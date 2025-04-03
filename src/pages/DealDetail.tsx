
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import AppShell from "@/components/layout/AppShell";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { formatCurrency } from "@/utils/format";
import { ArrowLeft, FileText, MessageSquare, Calendar, CheckCircle, AlertCircle, Clock, User, Paperclip } from "lucide-react";
import { Deal } from "@/types/deal";
import TaskDialog from "@/components/deals/TaskDialog";

const DealDetail = () => {
  const { dealId } = useParams();
  const navigate = useNavigate();
  const [showTaskDialog, setShowTaskDialog] = useState(false);
  const [activeTab, setActiveTab] = useState("overview");
  const [deal, setDeal] = useState<Deal | null>(null);
  
  useEffect(() => {
    // Mock data - in a real app, this would be an API call
    const mockDeal: Deal = {
      id: dealId || "d1",
      propertyId: "p123",
      buyerId: "c456",
      sellerId: "c789",
      status: "negotiation",
      price: 3450000,
      commissionRate: 2,
      commissionAmount: 69000,
      documents: [
        {
          id: "doc1",
          type: "mou",
          name: "Memorandum of Understanding",
          url: "#",
          status: "signed",
          uploadedAt: "2024-03-15T10:30:00Z",
          uploadedBy: "user1"
        },
        {
          id: "doc2",
          type: "spa",
          name: "Sales & Purchase Agreement",
          url: "#",
          status: "pending",
          uploadedAt: "2024-03-20T14:45:00Z",
          uploadedBy: "user1"
        }
      ],
      timeline: [
        {
          stage: "Initiated",
          date: "2024-03-10T09:00:00Z",
          completedBy: "user1",
          notes: "Deal initiated with buyer"
        },
        {
          stage: "Offer Submitted",
          date: "2024-03-12T11:20:00Z",
          completedBy: "user1",
          notes: "Initial offer of AED 3.4M submitted"
        },
        {
          stage: "Negotiation",
          date: "2024-03-14T16:30:00Z",
          completedBy: "user2",
          notes: "Counter offer received at AED 3.5M"
        }
      ],
      notes: "Buyer is very interested but wants to negotiate on the payment schedule.",
      createdAt: "2024-03-10T09:00:00Z",
      updatedAt: "2024-03-20T14:45:00Z"
    };
    
    setDeal(mockDeal);
  }, [dealId]);
  
  if (!deal) {
    return (
      <AppShell>
        <div className="flex justify-center items-center h-64">
          <span>Loading deal information...</span>
        </div>
      </AppShell>
    );
  }
  
  const handleGoBack = () => {
    navigate("/deals");
  };
  
  const handleCreateTask = () => {
    setShowTaskDialog(true);
  };
  
  const getDealStatusColor = (status: Deal["status"]) => {
    switch (status) {
      case "draft": return "bg-slate-500 text-white";
      case "negotiation": return "bg-amber-500 text-white";
      case "pending": return "bg-purple-500 text-white";
      case "approved": return "bg-green-500 text-white";
      case "completed": return "bg-blue-500 text-white";
      case "cancelled": return "bg-red-500 text-white";
      default: return "bg-slate-500 text-white";
    }
  };

  return (
    <AppShell>
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="icon" onClick={handleGoBack}>
              <ArrowLeft size={20} />
            </Button>
            <h1 className="text-2xl font-bold text-estate-primary">Deal Room</h1>
            <Badge className={getDealStatusColor(deal.status)}>
              {deal.status.charAt(0).toUpperCase() + deal.status.slice(1)}
            </Badge>
          </div>
          
          <div className="flex gap-2">
            <Button variant="outline" onClick={handleCreateTask}>
              Create Task
            </Button>
            <Button>Update Status</Button>
          </div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle>Dubai Marina Apartment</CardTitle>
                <div className="text-sm text-slate-500">
                  Property ID: {deal.propertyId}
                </div>
              </CardHeader>
              <CardContent>
                <Tabs defaultValue={activeTab} onValueChange={setActiveTab}>
                  <TabsList className="mb-4">
                    <TabsTrigger value="overview">Overview</TabsTrigger>
                    <TabsTrigger value="documents">Documents</TabsTrigger>
                    <TabsTrigger value="communications">Communications</TabsTrigger>
                    <TabsTrigger value="timeline">Timeline</TabsTrigger>
                    <TabsTrigger value="tasks">Tasks</TabsTrigger>
                  </TabsList>
                  
                  <TabsContent value="overview">
                    <div className="space-y-4">
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <h3 className="text-sm font-medium text-slate-500">Buyer</h3>
                          <p className="font-medium">Mohammed Al Farsi</p>
                        </div>
                        <div>
                          <h3 className="text-sm font-medium text-slate-500">Seller</h3>
                          <p className="font-medium">Dubai Properties LLC</p>
                        </div>
                        <div>
                          <h3 className="text-sm font-medium text-slate-500">Price</h3>
                          <p className="font-medium">{formatCurrency(deal.price, "AED")}</p>
                        </div>
                        <div>
                          <h3 className="text-sm font-medium text-slate-500">Commission</h3>
                          <p className="font-medium">{formatCurrency(deal.commissionAmount || 0, "AED")} ({deal.commissionRate}%)</p>
                        </div>
                      </div>
                      
                      <Separator />
                      
                      <div>
                        <h3 className="text-sm font-medium text-slate-500 mb-2">Deal Notes</h3>
                        <p className="text-sm">{deal.notes}</p>
                      </div>
                      
                      <Separator />
                      
                      <div>
                        <h3 className="text-sm font-medium text-slate-500 mb-2">Key Dates</h3>
                        <div className="space-y-2">
                          <div className="flex justify-between items-center">
                            <div className="flex items-center gap-2">
                              <Calendar size={16} className="text-slate-400" />
                              <span className="text-sm">Created</span>
                            </div>
                            <span className="text-sm">{new Date(deal.createdAt).toLocaleDateString()}</span>
                          </div>
                          <div className="flex justify-between items-center">
                            <div className="flex items-center gap-2">
                              <Calendar size={16} className="text-slate-400" />
                              <span className="text-sm">Last Updated</span>
                            </div>
                            <span className="text-sm">{new Date(deal.updatedAt).toLocaleDateString()}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </TabsContent>
                  
                  <TabsContent value="documents">
                    <div className="space-y-4">
                      {deal.documents.map((doc) => (
                        <Card key={doc.id} className="bg-slate-50">
                          <CardContent className="p-4">
                            <div className="flex justify-between items-center">
                              <div className="flex items-center gap-2">
                                <FileText size={20} className="text-estate-primary" />
                                <div>
                                  <p className="font-medium">{doc.name}</p>
                                  <p className="text-xs text-slate-500">Uploaded {new Date(doc.uploadedAt).toLocaleDateString()}</p>
                                </div>
                              </div>
                              <Badge className={
                                doc.status === "signed" ? "bg-green-500 text-white" : 
                                doc.status === "pending" ? "bg-amber-500 text-white" : 
                                "bg-slate-500 text-white"
                              }>
                                {doc.status.charAt(0).toUpperCase() + doc.status.slice(1)}
                              </Badge>
                            </div>
                          </CardContent>
                        </Card>
                      ))}
                      
                      <Button variant="outline" className="w-full">
                        <Paperclip size={16} className="mr-2" />
                        Upload New Document
                      </Button>
                    </div>
                  </TabsContent>
                  
                  <TabsContent value="communications">
                    <div className="space-y-4">
                      <Card className="bg-slate-50">
                        <CardContent className="p-4">
                          <div className="flex gap-3">
                            <div className="flex-shrink-0 w-8 h-8 rounded-full bg-estate-primary flex items-center justify-center text-white">
                              <User size={16} />
                            </div>
                            <div>
                              <div className="flex items-center gap-2">
                                <p className="font-medium">Sarah Johnson</p>
                                <span className="text-xs text-slate-500">March 15, 2024 • 10:30 AM</span>
                              </div>
                              <p className="text-sm mt-1">The buyer has requested a final walkthrough before signing the SPA.</p>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                      
                      <Card className="bg-slate-50">
                        <CardContent className="p-4">
                          <div className="flex gap-3">
                            <div className="flex-shrink-0 w-8 h-8 rounded-full bg-purple-500 flex items-center justify-center text-white">
                              <User size={16} />
                            </div>
                            <div>
                              <div className="flex items-center gap-2">
                                <p className="font-medium">Ahmed Ali</p>
                                <span className="text-xs text-slate-500">March 13, 2024 • 2:15 PM</span>
                              </div>
                              <p className="text-sm mt-1">All paperwork has been submitted to the Land Department for registration.</p>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                      
                      <div className="relative">
                        <div className="absolute inset-0 flex items-center">
                          <span className="w-full border-t border-slate-200" />
                        </div>
                        <div className="relative flex justify-center">
                          <span className="bg-white px-2 text-xs text-slate-500">Earlier messages</span>
                        </div>
                      </div>
                      
                      <Button variant="outline" className="w-full">
                        <MessageSquare size={16} className="mr-2" />
                        Add New Comment
                      </Button>
                    </div>
                  </TabsContent>
                  
                  <TabsContent value="timeline">
                    <div className="space-y-6">
                      {deal.timeline.map((item, index) => (
                        <div key={index} className="relative pl-6 pb-6">
                          {index < deal.timeline.length - 1 && (
                            <div className="absolute top-0 left-2.5 bottom-0 w-px bg-slate-200" />
                          )}
                          <div className="absolute top-0 left-0 w-5 h-5 rounded-full bg-estate-primary flex items-center justify-center">
                            <div className="w-2.5 h-2.5 rounded-full bg-white" />
                          </div>
                          <div>
                            <div className="flex items-center gap-2">
                              <h3 className="font-medium">{item.stage}</h3>
                              <span className="text-xs text-slate-500">{new Date(item.date).toLocaleDateString()} • {new Date(item.date).toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}</span>
                            </div>
                            <p className="text-sm mt-1">{item.notes}</p>
                          </div>
                        </div>
                      ))}
                      
                      <Button variant="outline" className="w-full">
                        <Clock size={16} className="mr-2" />
                        Add Timeline Event
                      </Button>
                    </div>
                  </TabsContent>
                  
                  <TabsContent value="tasks">
                    <div className="space-y-4">
                      <div className="grid gap-3">
                        <div className="flex items-center p-3 bg-slate-50 rounded-lg border border-slate-200">
                          <CheckCircle size={18} className="text-green-500 mr-3" />
                          <div className="flex-1">
                            <p className="font-medium">Collect buyer ID and passport</p>
                            <p className="text-xs text-slate-500">Due: March 25, 2024 • Assigned to: You</p>
                          </div>
                        </div>
                        
                        <div className="flex items-center p-3 bg-slate-50 rounded-lg border border-slate-200">
                          <AlertCircle size={18} className="text-amber-500 mr-3" />
                          <div className="flex-1">
                            <p className="font-medium">Schedule property inspection</p>
                            <p className="text-xs text-slate-500">Due: March 27, 2024 • Assigned to: Ahmed</p>
                          </div>
                        </div>
                        
                        <div className="flex items-center p-3 bg-slate-50 rounded-lg border border-slate-200">
                          <Clock size={18} className="text-slate-400 mr-3" />
                          <div className="flex-1">
                            <p className="font-medium">Prepare final contract documents</p>
                            <p className="text-xs text-slate-500">Due: April 2, 2024 • Assigned to: Legal Team</p>
                          </div>
                        </div>
                      </div>
                      
                      <Button variant="outline" className="w-full" onClick={handleCreateTask}>
                        <Clock size={16} className="mr-2" />
                        Create New Task
                      </Button>
                    </div>
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>
          </div>
          
          <div className="lg:col-span-1 space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Deal Summary</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h3 className="text-sm font-medium text-slate-500">Current Stage</h3>
                    <div className="mt-2 space-y-2">
                      <div className="flex justify-between items-center text-xs mb-1">
                        <span>Progress</span>
                        <span>40%</span>
                      </div>
                      <div className="w-full bg-slate-100 rounded-full h-2">
                        <div className="bg-estate-primary h-2 rounded-full" style={{ width: "40%" }} />
                      </div>
                      
                      <div className="grid grid-cols-5 gap-1 mt-2">
                        <div className="flex flex-col items-center">
                          <div className="w-2 h-2 rounded-full bg-green-500" />
                          <span className="text-[10px] text-slate-500 mt-1">Initial</span>
                        </div>
                        <div className="flex flex-col items-center">
                          <div className="w-2 h-2 rounded-full bg-green-500" />
                          <span className="text-[10px] text-slate-500 mt-1">Offer</span>
                        </div>
                        <div className="flex flex-col items-center">
                          <div className="w-2 h-2 rounded-full bg-estate-primary" />
                          <span className="text-[10px] text-slate-500 mt-1">Negotiate</span>
                        </div>
                        <div className="flex flex-col items-center">
                          <div className="w-2 h-2 rounded-full bg-slate-300" />
                          <span className="text-[10px] text-slate-500 mt-1">Contract</span>
                        </div>
                        <div className="flex flex-col items-center">
                          <div className="w-2 h-2 rounded-full bg-slate-300" />
                          <span className="text-[10px] text-slate-500 mt-1">Closing</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <Separator />
                  
                  <div>
                    <h3 className="text-sm font-medium text-slate-500 mb-2">Key Contacts</h3>
                    <div className="space-y-3">
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 rounded-full bg-slate-200 flex items-center justify-center">
                          <User size={14} />
                        </div>
                        <div>
                          <p className="text-sm font-medium">Mohammed Al Farsi</p>
                          <p className="text-xs text-slate-500">Buyer</p>
                        </div>
                      </div>
                      
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 rounded-full bg-slate-200 flex items-center justify-center">
                          <User size={14} />
                        </div>
                        <div>
                          <p className="text-sm font-medium">John Smith</p>
                          <p className="text-xs text-slate-500">Seller's Agent</p>
                        </div>
                      </div>
                      
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 rounded-full bg-slate-200 flex items-center justify-center">
                          <User size={14} />
                        </div>
                        <div>
                          <p className="text-sm font-medium">Legal Department</p>
                          <p className="text-xs text-slate-500">Documentation Team</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Upcoming Deadlines</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <Calendar size={16} className="text-red-500" />
                    <div>
                      <p className="text-sm font-medium">Final Offer Submission</p>
                      <p className="text-xs text-slate-500">March 25, 2024</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-2">
                    <Calendar size={16} className="text-amber-500" />
                    <div>
                      <p className="text-sm font-medium">Document Signing</p>
                      <p className="text-xs text-slate-500">April 2, 2024</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-2">
                    <Calendar size={16} className="text-estate-primary" />
                    <div>
                      <p className="text-sm font-medium">Closing Date</p>
                      <p className="text-xs text-slate-500">April 15, 2024</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
      
      <TaskDialog open={showTaskDialog} onOpenChange={setShowTaskDialog} dealId={dealId || ""} />
    </AppShell>
  );
};

export default DealDetail;

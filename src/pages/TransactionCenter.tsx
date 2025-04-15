import { useState } from "react";
import AppShell from "@/components/layout/AppShell";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowDown, ArrowUp, Clock, FileCheck, FileSearch, Filter, Plus, Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const TransactionCenter = () => {
  const [activeTab, setActiveTab] = useState("active");
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");

  // Mock transaction data
  const transactions = [
    { 
      id: "T-2501", 
      property: "Warehouse Complex - Riyadh Industrial City",
      client: "ACME Industrials LLC",
      price: "SAR 23,500,000",
      status: "pending-approval",
      statusText: "Pending Approval",
      date: "2025-04-10",
      documents: 4,
      daysActive: 12
    },
    { 
      id: "T-2489", 
      property: "Manufacturing Facility - Jubail Industrial City",
      client: "Saudi Manufacturing Corp",
      price: "SAR 31,800,000",
      status: "documents",
      statusText: "Documents Pending",
      date: "2025-04-03",
      documents: 6,
      daysActive: 19
    },
    { 
      id: "T-2475", 
      property: "Logistics Hub - Dammam Industrial City",
      client: "Gulf Logistics Ltd",
      price: "SAR 19,100,000",
      status: "negotiation",
      statusText: "In Negotiation",
      date: "2025-03-29",
      documents: 3,
      daysActive: 24
    },
    { 
      id: "T-2461", 
      property: "Industrial Land - KAEC Industrial Valley",
      client: "Vision Investments Group",
      price: "SAR 15,500,000",
      status: "completed",
      statusText: "Completed",
      date: "2025-03-15",
      documents: 8,
      daysActive: 38
    }
  ];

  const getStatusBadgeVariant = (status: string) => {
    switch (status) {
      case "pending-approval": return "secondary";
      case "documents": return "outline";
      case "negotiation": return "secondary";
      case "completed": return "success";
      default: return "default";
    }
  };

  return (
    <AppShell>
      <div className="space-y-6">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <div>
            <h1 className="text-xl sm:text-2xl font-bold">Transaction Center</h1>
            <p className="text-sm text-slate-500">Manage and track all industrial property transactions</p>
          </div>
          
          <Button className="bg-estate-primary hover:bg-estate-primary/90">
            <Plus className="mr-2 h-4 w-4" />
            New Transaction
          </Button>
        </div>
        
        <Tabs value={activeTab} onValueChange={setActiveTab}>
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-4">
            <TabsList>
              <TabsTrigger value="active">Active Deals</TabsTrigger>
              <TabsTrigger value="completed">Completed</TabsTrigger>
              <TabsTrigger value="templates">Templates</TabsTrigger>
            </TabsList>
            
            <div className="flex gap-2 w-full sm:w-auto">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400" size={18} />
                <Input 
                  type="search" 
                  placeholder="Search transactions..."
                  className="pl-10 w-full"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
              
              <Select value={statusFilter} onValueChange={setStatusFilter}>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Statuses</SelectItem>
                  <SelectItem value="pending-approval">Pending Approval</SelectItem>
                  <SelectItem value="documents">Documents Pending</SelectItem>
                  <SelectItem value="negotiation">In Negotiation</SelectItem>
                  <SelectItem value="completed">Completed</SelectItem>
                </SelectContent>
              </Select>
              
              <Button variant="outline" size="icon">
                <Filter size={16} />
              </Button>
            </div>
          </div>
          
          <TabsContent value="active" className="mt-0">
            <div className="grid gap-4">
              {transactions.filter(t => t.status !== "completed").map((transaction) => (
                <Card key={transaction.id} className="cursor-pointer hover:border-estate-primary/30 transition-colors">
                  <CardContent className="p-4">
                    <div className="flex flex-col md:flex-row justify-between gap-4">
                      <div className="space-y-2">
                        <div className="flex items-center gap-2">
                          <h3 className="font-medium">{transaction.property}</h3>
                          <Badge variant={getStatusBadgeVariant(transaction.status)}>
                            {transaction.statusText}
                          </Badge>
                        </div>
                        
                        <p className="text-sm text-slate-500">
                          Client: {transaction.client}
                        </p>
                        
                        <div className="flex gap-4 text-sm">
                          <span className="flex items-center gap-1">
                            <FileCheck size={14} />
                            {transaction.documents} Documents
                          </span>
                          <span className="flex items-center gap-1">
                            <Clock size={14} />
                            {transaction.daysActive} Days Active
                          </span>
                        </div>
                      </div>
                      
                      <div className="flex flex-col items-end justify-between">
                        <div className="text-lg font-semibold text-estate-primary">
                          {transaction.price}
                        </div>
                        
                        <div className="flex gap-2">
                          <Button variant="outline" size="sm">View Details</Button>
                          <Button size="sm">Actions</Button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="completed" className="mt-0">
            <div className="grid gap-4">
              {transactions.filter(t => t.status === "completed").map((transaction) => (
                <Card key={transaction.id} className="cursor-pointer hover:border-estate-primary/30 transition-colors">
                  <CardContent className="p-4">
                    <div className="flex flex-col md:flex-row justify-between gap-4">
                      <div className="space-y-2">
                        <div className="flex items-center gap-2">
                          <h3 className="font-medium">{transaction.property}</h3>
                          <Badge variant="success">
                            {transaction.statusText}
                          </Badge>
                        </div>
                        
                        <p className="text-sm text-slate-500">
                          Client: {transaction.client}
                        </p>
                        
                        <div className="text-sm">
                          Completed on: {new Date(transaction.date).toLocaleDateString()}
                        </div>
                      </div>
                      
                      <div className="flex flex-col items-end justify-between">
                        <div className="text-lg font-semibold text-estate-primary">
                          {transaction.price}
                        </div>
                        
                        <div className="flex gap-2">
                          <Button variant="outline" size="sm">View Details</Button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="templates" className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <Card>
                <CardHeader>
                  <CardTitle>Standard Industrial Deal</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <p className="text-sm text-slate-500">
                    Standard workflow for industrial property transactions with required documentation.
                  </p>
                  <div className="flex justify-between text-sm">
                    <span>8 Stages</span>
                    <span>5 Documents</span>
                  </div>
                  <Button className="w-full" variant="outline">Use Template</Button>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Off-Plan Industrial</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <p className="text-sm text-slate-500">
                    Specialized workflow for off-plan industrial property deals with milestone payments.
                  </p>
                  <div className="flex justify-between text-sm">
                    <span>10 Stages</span>
                    <span>7 Documents</span>
                  </div>
                  <Button className="w-full" variant="outline">Use Template</Button>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Investment Package</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <p className="text-sm text-slate-500">
                    For industrial investment opportunities with multiple stakeholders and due diligence.
                  </p>
                  <div className="flex justify-between text-sm">
                    <span>12 Stages</span>
                    <span>9 Documents</span>
                  </div>
                  <Button className="w-full" variant="outline">Use Template</Button>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </AppShell>
  );
};

export default TransactionCenter;

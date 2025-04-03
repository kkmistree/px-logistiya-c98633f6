
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

interface ClientDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const ClientDialog = ({ open, onOpenChange }: ClientDialogProps) => {
  const [activeTab, setActiveTab] = useState("basic");
  const { toast } = useToast();
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Client added",
      description: "New client has been added successfully"
    });
    onOpenChange(false);
  };
  
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl">
        <DialogHeader>
          <DialogTitle>Add New Client</DialogTitle>
          <DialogDescription>
            Add a new client to your CRM. Fill in the basic information to get started.
          </DialogDescription>
        </DialogHeader>
        
        <form onSubmit={handleSubmit}>
          <Tabs value={activeTab} onValueChange={setActiveTab}>
            <TabsList className="grid grid-cols-3 w-full mb-6">
              <TabsTrigger value="basic">Basic Info</TabsTrigger>
              <TabsTrigger value="requirements">Requirements</TabsTrigger>
              <TabsTrigger value="additional">Additional Details</TabsTrigger>
            </TabsList>
            
            <TabsContent value="basic" className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="client-name">Full Name</Label>
                  <Input id="client-name" placeholder="John Smith" required />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="client-type">Client Type</Label>
                  <Select required>
                    <SelectTrigger id="client-type">
                      <SelectValue placeholder="Select type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="buyer">Buyer</SelectItem>
                      <SelectItem value="seller">Seller</SelectItem>
                      <SelectItem value="investor">Investor</SelectItem>
                      <SelectItem value="tenant">Tenant</SelectItem>
                      <SelectItem value="landlord">Landlord</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="client-email">Email</Label>
                  <Input id="client-email" type="email" placeholder="john@example.com" />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="client-phone">Phone</Label>
                  <Input id="client-phone" placeholder="+971 50 123 4567" />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="client-stage">Pipeline Stage</Label>
                  <Select>
                    <SelectTrigger id="client-stage">
                      <SelectValue placeholder="Select stage" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="new">New</SelectItem>
                      <SelectItem value="contacted">Contacted</SelectItem>
                      <SelectItem value="qualifying">Qualifying</SelectItem>
                      <SelectItem value="matched">Matched</SelectItem>
                      <SelectItem value="viewing">Viewing</SelectItem>
                      <SelectItem value="offer">Offer</SelectItem>
                      <SelectItem value="closed">Closed</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="client-tags">Tags</Label>
                  <Input id="client-tags" placeholder="premium, urgent, cash-buyer" />
                  <p className="text-xs text-slate-500">Separate tags with commas</p>
                </div>
              </div>
              
              <div className="pt-4 flex justify-end">
                <Button type="button" onClick={() => setActiveTab("requirements")}>
                  Continue to Requirements
                </Button>
              </div>
            </TabsContent>
            
            <TabsContent value="requirements" className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="min-budget">Min Budget</Label>
                  <Input id="min-budget" type="number" placeholder="1000000" />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="max-budget">Max Budget</Label>
                  <Input id="max-budget" type="number" placeholder="2000000" />
                </div>
                
                <div className="space-y-2 col-span-2">
                  <Label htmlFor="location">Preferred Locations</Label>
                  <Input id="location" placeholder="Dubai Marina, Downtown Dubai" />
                  <p className="text-xs text-slate-500">Separate multiple locations with commas</p>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="property-type">Property Types</Label>
                  <Input id="property-type" placeholder="apartment, villa" />
                  <p className="text-xs text-slate-500">Separate types with commas</p>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="bedrooms">Bedrooms</Label>
                  <Input id="bedrooms" placeholder="1, 2, 3" />
                  <p className="text-xs text-slate-500">Separate with commas</p>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="min-area">Minimum Area (sqft)</Label>
                  <Input id="min-area" type="number" placeholder="800" />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="purpose">Purpose</Label>
                  <Select>
                    <SelectTrigger id="purpose">
                      <SelectValue placeholder="Select purpose" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="investment">Investment</SelectItem>
                      <SelectItem value="end-use">End Use</SelectItem>
                      <SelectItem value="both">Both</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              
              <div className="pt-4 flex justify-between">
                <Button type="button" variant="outline" onClick={() => setActiveTab("basic")}>
                  Back to Basic Info
                </Button>
                <Button type="button" onClick={() => setActiveTab("additional")}>
                  Continue to Additional Details
                </Button>
              </div>
            </TabsContent>
            
            <TabsContent value="additional" className="space-y-4">
              <div className="grid grid-cols-1 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="notes">Additional Notes</Label>
                  <textarea 
                    id="notes" 
                    className="w-full min-h-32 p-2 border rounded-md"
                    placeholder="Add any additional notes about this client..."
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="assigned-to">Assigned To</Label>
                  <Select>
                    <SelectTrigger id="assigned-to">
                      <SelectValue placeholder="Select broker/agent" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="self">Myself</SelectItem>
                      <SelectItem value="team">My Team</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              
              <div className="pt-4 flex justify-between">
                <Button type="button" variant="outline" onClick={() => setActiveTab("requirements")}>
                  Back to Requirements
                </Button>
                <Button type="submit">
                  Add Client
                </Button>
              </div>
            </TabsContent>
          </Tabs>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default ClientDialog;

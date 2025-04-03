
import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog";
import { useToast } from "@/hooks/use-toast";

interface ClientDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const ClientDialog = ({ open, onOpenChange }: ClientDialogProps) => {
  const { toast } = useToast();

  const handleAddClient = () => {
    onOpenChange(false);
    toast({
      title: "Client added",
      description: "New client has been added to your CRM",
    });
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Add New Client</DialogTitle>
          <DialogDescription>
            Enter the client's details below to add them to your CRM.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <label htmlFor="client-name" className="text-right text-sm">
              Name
            </label>
            <Input
              id="client-name"
              placeholder="Full name"
              className="col-span-3"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <label htmlFor="client-email" className="text-right text-sm">
              Email
            </label>
            <Input
              id="client-email"
              type="email"
              placeholder="Email address"
              className="col-span-3"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <label htmlFor="client-phone" className="text-right text-sm">
              Phone
            </label>
            <Input
              id="client-phone"
              placeholder="Phone number"
              className="col-span-3"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <label htmlFor="client-type" className="text-right text-sm">
              Type
            </label>
            <select 
              id="client-type" 
              className="col-span-3 border border-input rounded-md h-10 px-3"
            >
              <option value="buyer">Buyer</option>
              <option value="seller">Seller</option>
              <option value="investor">Investor</option>
              <option value="tenant">Tenant</option>
              <option value="landlord">Landlord</option>
            </select>
          </div>
        </div>
        <DialogFooter>
          <Button variant="outline" onClick={() => onOpenChange(false)}>
            Cancel
          </Button>
          <Button onClick={handleAddClient}>Add Client</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default ClientDialog;

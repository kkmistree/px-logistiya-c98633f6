
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

interface ListingDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const ListingDialog = ({ open, onOpenChange }: ListingDialogProps) => {
  const { toast } = useToast();

  const handleAddListing = () => {
    onOpenChange(false);
    toast({
      title: "Listing created",
      description: "New property has been added successfully",
    });
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Add New Property Listing</DialogTitle>
          <DialogDescription>
            Enter the details of the new property listing below.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <label htmlFor="property-title" className="text-right text-sm">
              Title
            </label>
            <Input
              id="property-title"
              placeholder="Enter property title"
              className="col-span-3"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <label htmlFor="property-price" className="text-right text-sm">
              Price
            </label>
            <Input
              id="property-price"
              type="number"
              placeholder="Enter price"
              className="col-span-3"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <label htmlFor="property-location" className="text-right text-sm">
              Location
            </label>
            <Input
              id="property-location"
              placeholder="Area, Community"
              className="col-span-3"
            />
          </div>
        </div>
        <DialogFooter>
          <Button variant="outline" onClick={() => onOpenChange(false)}>
            Cancel
          </Button>
          <Button onClick={handleAddListing}>Save Listing</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default ListingDialog;

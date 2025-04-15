
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverTrigger, PopoverContent } from "@/components/ui/popover";
import { useToast } from "@/hooks/use-toast";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { format } from "date-fns";
import { CalendarIcon, Upload } from "lucide-react";
import { Checkbox } from "@/components/ui/checkbox";

const propertySchema = z.object({
  title: z.string().min(3, { message: "Title must be at least 3 characters" }),
  price: z.string().min(1, { message: "Price is required" }),
  location: z.object({
    area: z.string().min(1, { message: "Area is required" }),
    community: z.string().min(1, { message: "City/Community is required" }),
  }),
  type: z.string().min(1, { message: "Property type is required" }),
  area: z.string().min(1, { message: "Area in sqm is required" }),
  description: z.string().min(10, { message: "Description must be at least 10 characters" }),
  features: z.array(z.string()).optional(),
  status: z.string().min(1, { message: "Asset status is required" }),
  developer: z.string().optional(),
  completionDate: z.date().optional(),
  isExclusive: z.boolean().default(false),
  isDirectFromDeveloper: z.boolean().default(false),
});

type PropertyFormValues = z.infer<typeof propertySchema>;

interface ListingDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const ListingDialog = ({ open, onOpenChange }: ListingDialogProps) => {
  const { toast } = useToast();
  const [images, setImages] = useState<File[]>([]);
  
  const form = useForm<PropertyFormValues>({
    resolver: zodResolver(propertySchema),
    defaultValues: {
      title: "",
      price: "",
      location: {
        area: "",
        community: "",
      },
      type: "",
      area: "",
      description: "",
      features: [],
      status: "available",
      developer: "",
      isExclusive: false,
      isDirectFromDeveloper: false,
    },
  });

  const handleAddListing = (values: PropertyFormValues) => {
    // In a real app, this would call an API to save the listing
    console.log("Form values:", values);
    console.log("Images:", images);
    
    onOpenChange(false);
    toast({
      title: "Asset listing created",
      description: `${values.title} has been added successfully`,
    });
    form.reset();
    setImages([]);
  };
  
  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const newFiles = Array.from(e.target.files);
      setImages((prev) => [...prev, ...newFiles]);
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[700px] max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>Add New Industrial Asset</DialogTitle>
          <DialogDescription>
            Enter the details of the industrial property or land for investment.
          </DialogDescription>
        </DialogHeader>
        
        <Form {...form}>
          <form onSubmit={form.handleSubmit(handleAddListing)} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <FormField
                  control={form.control}
                  name="title"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Asset Title</FormLabel>
                      <FormControl>
                        <Input placeholder="Enter asset title" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="price"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Price (SAR)</FormLabel>
                      <FormControl>
                        <Input type="number" placeholder="Enter price" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="location.area"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Region/Industrial Zone</FormLabel>
                      <Select 
                        onValueChange={field.onChange} 
                        defaultValue={field.value}
                      >
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select region or industrial zone" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="Riyadh Industrial City">Riyadh Industrial City</SelectItem>
                          <SelectItem value="Jeddah Industrial City">Jeddah Industrial City</SelectItem>
                          <SelectItem value="Dammam Industrial City">Dammam Industrial City</SelectItem>
                          <SelectItem value="MODON Sudair">MODON Sudair</SelectItem>
                          <SelectItem value="KAEC Industrial Valley">KAEC Industrial Valley</SelectItem>
                          <SelectItem value="Jubail Industrial City">Jubail Industrial City</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="location.community"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>City/Area</FormLabel>
                      <FormControl>
                        <Input placeholder="Enter city or area" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="type"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Asset Type</FormLabel>
                      <Select 
                        onValueChange={field.onChange} 
                        defaultValue={field.value}
                      >
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select asset type" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="warehouse">Warehouse</SelectItem>
                          <SelectItem value="factory">Factory</SelectItem>
                          <SelectItem value="logistics">Logistics Center</SelectItem>
                          <SelectItem value="land">Industrial Land</SelectItem>
                          <SelectItem value="office">Industrial Office</SelectItem>
                          <SelectItem value="mixed-use">Mixed-Use Industrial</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              
              <div className="space-y-4">
                <FormField
                  control={form.control}
                  name="area"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Area (sqm)</FormLabel>
                      <FormControl>
                        <Input type="number" placeholder="Enter area in sqm" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="status"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Asset Status</FormLabel>
                      <Select 
                        onValueChange={field.onChange} 
                        defaultValue={field.value}
                      >
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select asset status" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="available">Available</SelectItem>
                          <SelectItem value="under-development">Under Development</SelectItem>
                          <SelectItem value="investment-opportunity">Investment Opportunity</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="developer"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Developer</FormLabel>
                      <FormControl>
                        <Input placeholder="Enter developer name" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="completionDate"
                  render={({ field }) => (
                    <FormItem className="flex flex-col">
                      <FormLabel>Completion Date</FormLabel>
                      <Popover>
                        <PopoverTrigger asChild>
                          <FormControl>
                            <Button
                              variant="outline"
                              className="w-full text-left font-normal justify-start h-10"
                            >
                              <CalendarIcon className="mr-2 h-4 w-4" />
                              {field.value ? (
                                format(field.value, "PPP")
                              ) : (
                                <span>Pick a date</span>
                              )}
                            </Button>
                          </FormControl>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0">
                          <Calendar
                            mode="single"
                            selected={field.value}
                            onSelect={field.onChange}
                            disabled={(date) =>
                              date < new Date()
                            }
                            initialFocus
                          />
                        </PopoverContent>
                      </Popover>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </div>
            
            <FormField
              control={form.control}
              name="description"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Description</FormLabel>
                  <FormControl>
                    <Textarea 
                      placeholder="Enter asset description" 
                      rows={4}
                      {...field} 
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <div className="space-y-2">
              <FormLabel>Images</FormLabel>
              <div className="flex items-center gap-2">
                <Input 
                  type="file" 
                  accept="image/*" 
                  multiple 
                  onChange={handleImageChange}
                  id="property-images"
                  className="hidden"
                />
                <label 
                  htmlFor="property-images"
                  className="flex items-center justify-center w-full border-2 border-dashed border-slate-200 rounded-md h-20 cursor-pointer hover:bg-slate-50 transition-colors"
                >
                  <div className="flex flex-col items-center gap-1">
                    <Upload size={20} className="text-slate-400" />
                    <span className="text-sm text-slate-500">Click to upload images</span>
                  </div>
                </label>
              </div>
              {images.length > 0 && (
                <div className="flex flex-wrap gap-2 mt-2">
                  {images.map((file, index) => (
                    <div key={index} className="relative">
                      <div className="w-20 h-20 rounded-md bg-slate-100 flex items-center justify-center overflow-hidden">
                        <img 
                          src={URL.createObjectURL(file)} 
                          alt={`Property image ${index}`}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex flex-col space-y-3 justify-end">
                <FormField
                  control={form.control}
                  name="isExclusive"
                  render={({ field }) => (
                    <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                      <FormControl>
                        <Checkbox
                          checked={field.value}
                          onCheckedChange={field.onChange}
                        />
                      </FormControl>
                      <FormLabel className="font-normal">
                        Exclusive Listing
                      </FormLabel>
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="isDirectFromDeveloper"
                  render={({ field }) => (
                    <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                      <FormControl>
                        <Checkbox
                          checked={field.value}
                          onCheckedChange={field.onChange}
                        />
                      </FormControl>
                      <FormLabel className="font-normal">
                        Direct from Developer
                      </FormLabel>
                    </FormItem>
                  )}
                />
              </div>
            </div>
            
            <DialogFooter>
              <Button variant="outline" type="button" onClick={() => onOpenChange(false)}>
                Cancel
              </Button>
              <Button type="submit">Save Asset Listing</Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};

export default ListingDialog;

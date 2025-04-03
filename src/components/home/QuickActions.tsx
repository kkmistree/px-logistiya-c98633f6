
import { 
  Plus, 
  FileSpreadsheet, 
  FolderOpen, 
  FileSearch, 
  ListChecks 
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";

const QuickActions = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  
  const handleMatchListings = () => {
    toast({
      title: "Match in progress",
      description: "Matching listings with current client mandates"
    });
    navigate("/matching");
  };
  
  const handleGenerateClientBrief = () => {
    toast({
      title: "Select a client",
      description: "Choose a client to generate a brief"
    });
    navigate("/client-briefs/new");
  };
  
  const handleOpenDealRoom = () => {
    toast({
      title: "Opening Deal Room",
      description: "Select a deal to manage"
    });
    navigate("/deals");
  };
  
  const handleAddListing = () => {
    toast({
      title: "Add New Listing",
      description: "Create a new property listing"
    });
    navigate("/listings/new");
  };
  
  const handleAddClient = () => {
    toast({
      title: "Add New Client",
      description: "Add a client to your CRM"
    });
    navigate("/clients/new");
  };

  return (
    <div className="flex flex-wrap gap-2">
      <Button 
        className="bg-estate-primary hover:bg-estate-primary/90 text-white"
        onClick={handleAddListing}
      >
        <Plus size={16} className="mr-2" /> Add Listing
      </Button>
      
      <Button 
        variant="outline" 
        className="border-estate-primary text-estate-primary hover:bg-estate-primary/10"
        onClick={handleAddClient}
      >
        <Plus size={16} className="mr-2" /> Add Client
      </Button>
      
      <Button 
        variant="outline"
        className="border-estate-secondary text-estate-secondary hover:bg-estate-secondary/10"
        onClick={handleMatchListings}
      >
        <FileSearch size={16} className="mr-2" /> Match Listings
      </Button>
      
      <Button 
        variant="outline"
        className="border-estate-accent text-estate-primary hover:bg-estate-accent/10"
        onClick={handleGenerateClientBrief}
      >
        <FileSpreadsheet size={16} className="mr-2" /> Generate Brief
      </Button>
      
      <Button 
        variant="outline"
        className="border-purple-500 text-purple-600 hover:bg-purple-50"
        onClick={handleOpenDealRoom}
      >
        <FolderOpen size={16} className="mr-2" /> Deal Room
      </Button>
    </div>
  );
};

export default QuickActions;

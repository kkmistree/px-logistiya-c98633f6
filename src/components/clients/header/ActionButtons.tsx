
import React from "react";
import { Button } from "@/components/ui/button";
import { UserPlus, FileDown, FileUp } from "lucide-react";

interface ActionButtonsProps {
  onAddClient: () => void;
  onImportExport: () => void;
}

const ActionButtons = ({ onAddClient, onImportExport }: ActionButtonsProps) => {
  return (
    <>
      <Button variant="outline" onClick={onImportExport}>
        <div className="flex items-center">
          <FileDown size={16} className="mr-1" />
          <FileUp size={16} />
        </div>
        <span className="hidden sm:inline ml-2">Import/Export</span>
      </Button>
      
      <Button onClick={onAddClient}>
        <UserPlus size={18} className="mr-2" />
        <span className="hidden sm:inline">Add Client</span>
      </Button>
    </>
  );
};

export default ActionButtons;

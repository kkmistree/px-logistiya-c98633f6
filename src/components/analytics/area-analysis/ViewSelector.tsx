
import { Button } from "@/components/ui/button";
import { TableIcon, ChartBarIcon, MapIcon } from "lucide-react";

interface ViewSelectorProps {
  view: 'table' | 'charts' | 'performance';
  setView: (view: 'table' | 'charts' | 'performance') => void;
}

const ViewSelector = ({ view, setView }: ViewSelectorProps) => {
  return (
    <div className="flex gap-2">
      <Button 
        variant={view === 'table' ? "default" : "outline"} 
        onClick={() => setView('table')}
        className={view === 'table' ? "bg-pink-500 text-white" : ""}
      >
        <TableIcon className="mr-2 h-4 w-4" />
        Table View
      </Button>
      <Button 
        variant={view === 'charts' ? "default" : "outline"} 
        onClick={() => setView('charts')}
        className={view === 'charts' ? "bg-pink-500 text-white" : ""}
      >
        <ChartBarIcon className="mr-2 h-4 w-4" />
        Charts View
      </Button>
      <Button 
        variant={view === 'performance' ? "default" : "outline"} 
        onClick={() => setView('performance')}
        className={view === 'performance' ? "bg-pink-500 text-white" : ""}
      >
        <MapIcon className="mr-2 h-4 w-4" />
        Area Performance
      </Button>
    </div>
  );
};

export default ViewSelector;

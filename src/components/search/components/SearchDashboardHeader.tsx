
import { Zap } from "lucide-react";

const SearchDashboardHeader = () => {
  return (
    <div className="flex items-center space-x-3 mb-4">
      <div className="bg-estate-primary/10 p-2 rounded-full">
        <Zap className="h-5 w-5 text-estate-primary" />
      </div>
      <div>
        <h2 className="text-xl font-bold text-estate-primary">Smart Deal Discovery</h2>
        <p className="text-sm text-slate-600">Find your next investment opportunity with AI-powered recommendations</p>
      </div>
    </div>
  );
};

export default SearchDashboardHeader;

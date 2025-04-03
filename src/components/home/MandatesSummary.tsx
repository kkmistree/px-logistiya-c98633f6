
import { ArrowUpRight, Users, FileSearch } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { useNavigate } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";

const MandatesSummary = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  
  const mandates = {
    total: 16,
    matched: 9,
    matchPercentage: 56,
    breakdown: [
      { stage: "New", count: 4, percentage: 25 },
      { stage: "Shortlisted", count: 6, percentage: 38 },
      { stage: "Viewings", count: 4, percentage: 25 },
      { stage: "Offer Stage", count: 2, percentage: 12 },
    ],
    unmatchedCount: 7
  };

  const handleViewAll = () => {
    navigate("/mandates");
  };
  
  const handleFindMatches = () => {
    toast({
      title: "Finding matches",
      description: "Our AI is matching your mandates with available listings"
    });
    navigate("/matching");
  };

  return (
    <div className="bg-white rounded-lg shadow-sm p-4">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold text-estate-primary">Mandates & Client Summary</h2>
        <Button 
          variant="ghost" 
          size="sm" 
          className="text-estate-secondary"
          onClick={handleViewAll}
        >
          View All <ArrowUpRight size={16} className="ml-1" />
        </Button>
      </div>
      
      <div className="grid grid-cols-2 gap-4 mb-4">
        <Card className="p-4 border border-slate-200">
          <div className="flex justify-between items-start">
            <div>
              <span className="text-xs font-medium text-slate-500">Total Mandates</span>
              <p className="text-xl font-semibold mt-1">{mandates.total}</p>
            </div>
            <Users size={20} className="text-estate-primary" />
          </div>
        </Card>
        
        <Card className="p-4 border border-slate-200">
          <div className="flex justify-between items-start">
            <div>
              <span className="text-xs font-medium text-slate-500">Matched with Listings</span>
              <p className="text-xl font-semibold mt-1">{mandates.matchPercentage}%</p>
            </div>
            <FileSearch size={20} className="text-estate-secondary" />
          </div>
        </Card>
      </div>
      
      <div className="space-y-3">
        <h3 className="text-sm font-medium text-estate-primary">Status Breakdown</h3>
        {mandates.breakdown.map((item) => (
          <div key={item.stage} className="space-y-1">
            <div className="flex justify-between text-xs">
              <span>{item.stage}</span>
              <span>{item.count} ({item.percentage}%)</span>
            </div>
            <Progress value={item.percentage} className="h-2" />
          </div>
        ))}
      </div>
      
      {mandates.unmatchedCount > 0 && (
        <Card className="mt-4 p-3 border border-amber-200 bg-amber-50">
          <div className="flex items-start">
            <div className="flex-1">
              <h4 className="text-sm font-medium text-amber-800">
                {mandates.unmatchedCount} Mandates with No Match Yet
              </h4>
              <p className="text-xs text-amber-700 mt-1">Find potential matches in our database</p>
            </div>
            <Button 
              size="sm" 
              className="bg-amber-500 hover:bg-amber-600 text-white"
              onClick={handleFindMatches}
            >
              Find Matches
            </Button>
          </div>
        </Card>
      )}
    </div>
  );
};

export default MandatesSummary;

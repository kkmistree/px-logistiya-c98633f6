
import { BookmarkPlus, Map } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const SavedSearchesContent = () => {
  return (
    <Card className="border-slate-200">
      <CardHeader className="bg-slate-50 border-b border-slate-100">
        <CardTitle className="text-lg font-semibold flex items-center">
          <BookmarkPlus size={18} className="mr-2 text-estate-primary" />
          Saved Searches
        </CardTitle>
        <CardDescription>Your bookmarked searches and alerts</CardDescription>
      </CardHeader>
      <CardContent className="p-6">
        <div className="flex flex-col items-center justify-center py-12 text-center">
          <BookmarkPlus className="h-16 w-16 text-slate-300 mb-6" />
          <h3 className="text-xl font-medium mb-3">No saved searches yet</h3>
          <p className="text-slate-500 mb-8 max-w-md">
            Save your search criteria to get notified when new properties match your requirements
          </p>
          <Button variant="outline" className="gap-2">
            <Map size={16} />
            <span>Explore Properties</span>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default SavedSearchesContent;

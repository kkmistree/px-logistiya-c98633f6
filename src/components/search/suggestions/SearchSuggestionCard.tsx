
import { Lightbulb, Search, ArrowRight } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface Suggestion {
  query: string;
  description: string;
  tags: string[];
}

interface SearchSuggestionCardProps {
  suggestions: Suggestion[];
  onSuggestionClick: (query: string) => void;
}

const SearchSuggestionCard = ({ suggestions, onSuggestionClick }: SearchSuggestionCardProps) => {
  return (
    <Card className="border-slate-200">
      <CardHeader className="pb-3 bg-slate-50 border-b border-slate-100">
        <CardTitle className="text-lg font-semibold flex items-center">
          <Lightbulb size={18} className="mr-2 text-amber-500" />
          Intelligent Search Suggestions
        </CardTitle>
        <CardDescription>Curated searches based on market trends and investor behavior</CardDescription>
      </CardHeader>
      
      <CardContent className="divide-y divide-slate-100">
        {suggestions.map((suggestion, index) => (
          <div 
            key={index}
            className="py-4 first:pt-4 last:pb-4 hover:bg-slate-50/70 cursor-pointer transition-colors px-2 rounded-md -mx-2"
            onClick={() => onSuggestionClick(suggestion.query)}
          >
            <div className="flex items-start gap-3">
              <div className="bg-estate-primary/10 p-2 rounded-md mt-1">
                <Search className="h-4 w-4 text-estate-primary" />
              </div>
              <div className="flex-1">
                <p className="text-sm font-medium text-slate-900">{suggestion.query}</p>
                <p className="text-xs text-slate-500 mt-1 mb-2">{suggestion.description}</p>
                <div className="flex flex-wrap gap-2">
                  {suggestion.tags.map((tag, tagIndex) => (
                    <span 
                      key={tagIndex}
                      className="text-[10px] uppercase tracking-wider px-2 py-1 bg-slate-100 text-slate-700 rounded-md font-medium border border-slate-200"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <Button 
                variant="ghost" 
                size="icon" 
                className="text-estate-primary hover:bg-estate-primary/10 rounded-full h-8 w-8"
              >
                <ArrowRight size={16} />
              </Button>
            </div>
          </div>
        ))}
      </CardContent>
      
      <CardFooter className="pt-3 pb-4 px-4 border-t border-slate-100 bg-slate-50">
        <div className="w-full flex justify-between items-center">
          <span className="text-xs text-slate-500">
            Updated 2 hours ago
          </span>
          <Button 
            variant="ghost" 
            size="sm" 
            className="text-estate-primary h-8"
          >
            Refresh Suggestions
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
};

export default SearchSuggestionCard;

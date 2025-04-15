
import { Lightbulb, Search, ArrowRight, Info } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { useState } from "react";

interface Suggestion {
  query: string;
  description: string;
  tags: string[];
  metrics?: {
    roi?: string;
    growth?: string;
    potential?: "high" | "medium" | "low";
  };
}

interface SearchSuggestionCardProps {
  suggestions: Suggestion[];
  onSuggestionClick: (query: string) => void;
  onRefresh?: () => void;
}

const SearchSuggestionCard = ({ 
  suggestions, 
  onSuggestionClick, 
  onRefresh 
}: SearchSuggestionCardProps) => {
  const [loadingIndex, setLoadingIndex] = useState<number | null>(null);

  const handleClick = (query: string, index: number) => {
    setLoadingIndex(index);
    // Simulate a brief loading state
    setTimeout(() => {
      setLoadingIndex(null);
      onSuggestionClick(query);
    }, 500);
  };

  return (
    <Card className="border-slate-200 shadow-sm hover:shadow-md transition-all duration-300">
      <CardHeader className="pb-3 bg-slate-50 border-b border-slate-100">
        <div className="flex justify-between items-start">
          <CardTitle className="text-lg font-semibold flex items-center">
            <Lightbulb size={18} className="mr-2 text-amber-500" />
            Intelligent Search Suggestions
          </CardTitle>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant="ghost" size="icon" className="h-6 w-6">
                  <Info size={14} className="text-slate-400" />
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p className="max-w-xs text-xs">AI-powered search suggestions based on current market trends and investor behavior</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
        <CardDescription className="text-xs mt-1">Curated searches based on market trends and investor behavior</CardDescription>
      </CardHeader>
      
      <CardContent className="divide-y divide-slate-100">
        {suggestions.map((suggestion, index) => (
          <div 
            key={index}
            className="py-4 first:pt-4 last:pb-4 hover:bg-slate-50/70 cursor-pointer transition-colors px-2 rounded-md -mx-2"
            onClick={() => handleClick(suggestion.query, index)}
          >
            <div className="flex items-start gap-3">
              <div className="bg-estate-primary/10 p-2 rounded-md mt-1">
                <Search className="h-4 w-4 text-estate-primary" />
              </div>
              <div className="flex-1">
                <p className="text-sm font-medium text-slate-900">{suggestion.query}</p>
                <p className="text-xs text-slate-500 mt-1 mb-2">{suggestion.description}</p>
                
                {suggestion.metrics && (
                  <div className="flex gap-2 mb-2">
                    {suggestion.metrics.roi && (
                      <span className="text-xs bg-green-50 text-green-700 px-2 py-0.5 rounded-md font-medium">
                        ROI: {suggestion.metrics.roi}
                      </span>
                    )}
                    {suggestion.metrics.growth && (
                      <span className="text-xs bg-blue-50 text-blue-700 px-2 py-0.5 rounded-md font-medium">
                        Growth: {suggestion.metrics.growth}
                      </span>
                    )}
                    {suggestion.metrics.potential && (
                      <span className={`text-xs px-2 py-0.5 rounded-md font-medium ${
                        suggestion.metrics.potential === 'high' 
                          ? 'bg-purple-50 text-purple-700' 
                          : suggestion.metrics.potential === 'medium'
                            ? 'bg-amber-50 text-amber-700'
                            : 'bg-gray-50 text-gray-700'
                      }`}>
                        {suggestion.metrics.potential.charAt(0).toUpperCase() + suggestion.metrics.potential.slice(1)} Potential
                      </span>
                    )}
                  </div>
                )}
                
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
                className="text-estate-primary hover:bg-estate-primary/10 rounded-full h-8 w-8 flex-shrink-0"
              >
                {loadingIndex === index ? (
                  <div className="h-4 w-4 border-2 border-estate-primary/20 border-t-estate-primary rounded-full animate-spin" />
                ) : (
                  <ArrowRight size={16} />
                )}
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
            onClick={onRefresh}
          >
            Refresh Suggestions
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
};

export default SearchSuggestionCard;

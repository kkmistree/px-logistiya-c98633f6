
import { Lightbulb, Search } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
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
    <Card>
      <CardHeader>
        <CardTitle className="text-lg">Smart Search Suggestions</CardTitle>
        <CardDescription>Based on market trends and your preferences</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid gap-3">
          {suggestions.map((suggestion, index) => (
            <div 
              key={index}
              className="p-3 bg-slate-50 rounded-lg hover:bg-slate-100 cursor-pointer transition-colors"
              onClick={() => onSuggestionClick(suggestion.query)}
            >
              <div className="flex items-start gap-3">
                <Search className="mt-1 h-4 w-4 text-slate-500" />
                <div>
                  <p className="text-sm font-medium">{suggestion.query}</p>
                  <p className="text-xs text-slate-500 mt-1">{suggestion.description}</p>
                  <div className="flex gap-2 mt-2">
                    {suggestion.tags.map((tag, tagIndex) => (
                      <span 
                        key={tagIndex}
                        className="text-xs px-2 py-1 bg-white rounded-full border border-slate-200"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default SearchSuggestionCard;

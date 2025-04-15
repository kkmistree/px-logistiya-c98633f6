
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { useNavigate } from 'react-router-dom';
import { Rocket, TrendingUp, Building2, PieChart } from 'lucide-react';

const SearchSuggestions = () => {
  const navigate = useNavigate();
  const [suggestions] = useState([
    {
      id: 1,
      title: 'High-yield warehouses in Industrial City',
      description: 'Properties with ROI > 8%',
      query: 'high yield warehouses in riyadh industrial city',
      icon: TrendingUp,
      color: 'text-green-500'
    },
    {
      id: 2,
      title: 'Undervalued properties in Dammam',
      description: 'Industrial assets below market value',
      query: 'undervalued industrial properties dammam',
      icon: PieChart,
      color: 'text-blue-500'
    },
    {
      id: 3,
      title: 'New logistics facilities',
      description: 'Recently built, high specs',
      query: 'new modern logistics facilities',
      icon: Building2,
      color: 'text-purple-500'
    },
    {
      id: 4,
      title: 'High potential growth areas',
      description: 'Emerging industrial zones',
      query: 'emerging industrial zones high growth potential',
      icon: Rocket,
      color: 'text-amber-500'
    },
  ]);

  const handleSuggestionClick = (query: string) => {
    navigate(`/search?q=${encodeURIComponent(query)}`);
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
      {suggestions.map((suggestion) => (
        <div 
          key={suggestion.id}
          className="p-3 border rounded-lg hover:bg-slate-50 cursor-pointer"
          onClick={() => handleSuggestionClick(suggestion.query)}
        >
          <div className="flex items-start space-x-3">
            <div className={`mt-0.5 ${suggestion.color}`}>
              <suggestion.icon size={18} />
            </div>
            <div className="flex-1">
              <h4 className="text-sm font-medium">{suggestion.title}</h4>
              <p className="text-xs text-slate-500 mb-2">{suggestion.description}</p>
              <Button variant="ghost" size="sm" className="h-7 px-2 text-xs">
                Search Now
              </Button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SearchSuggestions;

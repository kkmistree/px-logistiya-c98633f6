
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Clock, Trash2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { formatDistanceToNow } from 'date-fns';

const RecentSearches = () => {
  const navigate = useNavigate();
  const [searches, setSearches] = useState([
    {
      id: 1,
      query: "Warehouse in Riyadh Industrial City",
      date: new Date(2025, 3, 12),
      results: 14
    },
    {
      id: 2,
      query: "Logistics facilities under 5M SAR",
      date: new Date(2025, 3, 10),
      results: 7
    },
    {
      id: 3,
      query: "High ROI industrial properties",
      date: new Date(2025, 3, 8),
      results: 23
    },
    {
      id: 4,
      query: "Factory space with loading docks",
      date: new Date(2025, 3, 5),
      results: 9
    }
  ]);

  const handleSearch = (query: string) => {
    navigate(`/search?q=${encodeURIComponent(query)}`);
  };

  const handleRemove = (id: number) => {
    setSearches(searches.filter(search => search.id !== id));
  };

  return (
    <div className="space-y-3">
      {searches.map(search => (
        <div key={search.id} className="flex items-center justify-between p-3 border rounded-lg">
          <div className="flex items-center space-x-3">
            <Clock size={18} className="text-slate-400" />
            <div>
              <p className="text-sm font-medium">{search.query}</p>
              <div className="flex items-center space-x-3 mt-1">
                <span className="text-xs text-slate-500">
                  {formatDistanceToNow(search.date, { addSuffix: true })}
                </span>
                <span className="text-xs text-slate-500">
                  {search.results} results
                </span>
              </div>
            </div>
          </div>
          <div className="flex space-x-2">
            <Button 
              variant="ghost" 
              size="sm" 
              onClick={() => handleSearch(search.query)}
            >
              Search Again
            </Button>
            <Button 
              variant="ghost" 
              size="sm"
              onClick={() => handleRemove(search.id)}
            >
              <Trash2 size={14} className="text-slate-400" />
            </Button>
          </div>
        </div>
      ))}

      {searches.length === 0 && (
        <div className="text-center py-8">
          <p className="text-slate-500">No recent searches</p>
          <p className="text-sm text-slate-400 mt-1">
            Your search history will appear here
          </p>
        </div>
      )}
    </div>
  );
};

export default RecentSearches;

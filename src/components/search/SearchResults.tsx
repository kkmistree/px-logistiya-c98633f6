
import { Property } from "@/types/property";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

interface SearchResultsProps {
  searchResults: Property[];
  onNewSearch: () => void;
  onPropertyClick?: (propertyId: string) => void;
}

const SearchResults = ({ searchResults, onNewSearch, onPropertyClick }: SearchResultsProps) => {
  const resultCount = searchResults.length;
  
  return (
    <div className="mt-8 px-4">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-medium">
          Search Results <span className="text-purple-600 font-bold">({resultCount})</span>
        </h2>
        <Button 
          variant="outline" 
          size="sm" 
          onClick={onNewSearch}
          className="border-[#1A1F2C] text-[#1A1F2C] hover:bg-[#1A1F2C]/10"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          New Search
        </Button>
      </div>
      
      {resultCount > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {searchResults.map(property => (
            <div 
              key={property.id} 
              className="border rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow cursor-pointer"
              onClick={() => onPropertyClick && onPropertyClick(property.id)}
            >
              <div className="h-40 bg-gray-200 relative">
                <img 
                  src={property.images[0] || "/placeholder.svg"} 
                  alt={property.title}
                  className="w-full h-full object-cover"
                />
                {property.matchScore && (
                  <div className="absolute top-2 right-2 bg-[#1A1F2C] text-white text-xs font-medium px-2 py-1 rounded-full">
                    {property.matchScore}% Match
                  </div>
                )}
              </div>
              
              <div className="p-4">
                <h3 className="font-medium truncate">{property.title}</h3>
                <p className="text-gray-600 text-sm mb-2">{property.location.area}</p>
                
                <div className="flex justify-between items-center">
                  <span className="font-semibold">${property.price.toLocaleString()}</span>
                  {property.roi && (
                    <span className="text-green-600 text-sm font-medium">
                      ROI: {property.roi}%
                    </span>
                  )}
                </div>
                
                <div className="flex items-center text-sm text-gray-500 mt-2">
                  <span className="mr-3">{property.bedrooms} {property.bedrooms === 1 ? 'bed' : 'beds'}</span>
                  <span className="mr-3">{property.bathrooms} {property.bathrooms === 1 ? 'bath' : 'baths'}</span>
                  <span>{property.area} sqft</span>
                </div>
                
                <div className="mt-3 flex flex-wrap gap-1">
                  {property.tags.slice(0, 3).map((tag, index) => (
                    <span key={index} className="text-xs bg-gray-100 px-2 py-1 rounded">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center py-8">
          <p className="text-gray-500">No properties found matching your search criteria.</p>
        </div>
      )}
    </div>
  );
};

export default SearchResults;

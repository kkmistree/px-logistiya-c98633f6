
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import QuickSearch from "@/components/search/QuickSearch";
import AppShell from "@/components/layout/AppShell";
import { Property } from "@/types/property";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

const SearchPage = () => {
  const navigate = useNavigate();
  const [searchResults, setSearchResults] = useState<Property[]>([]);
  const [isSearching, setIsSearching] = useState(false);
  
  const handleSearch = (query: string) => {
    console.log("Search query from page:", query);
    setIsSearching(true);
    
    // Simulate API call to search properties
    setTimeout(() => {
      // Process the query to filter properties
      const results = generateMockResults(query);
      setSearchResults(results);
      setIsSearching(false);
    }, 1500);
  };
  
  const handleClose = () => {
    navigate(-1);
  };

  // This function simulates backend filtering based on search queries
  const generateMockResults = (query: string): Property[] => {
    const mockProperties: Property[] = [
      {
        id: "prop1",
        title: "Luxurious 2 Bedroom in Dubai Marina",
        description: "High-end apartment with sea view, perfect for investment with high ROI",
        type: "apartment",
        status: "ready",
        price: 1200000,
        area: 1200,
        bedrooms: 2,
        bathrooms: 2,
        location: {
          area: "Dubai Marina",
          community: "Marina Promenade"
        },
        features: ["Sea View", "Balcony", "Gym", "Pool"],
        images: ["/placeholder.svg"],
        roi: 8.5,
        views: 120,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
        tags: ["sea view", "high ROI", "furnished"]
      },
      {
        id: "prop2",
        title: "Studio Apartment in Downtown Dubai",
        description: "Modern studio with high rental yield in the heart of Downtown",
        type: "apartment",
        status: "ready",
        price: 800000,
        area: 500,
        bedrooms: 0,
        bathrooms: 1,
        location: {
          area: "Downtown Dubai",
          community: "Burj Khalifa District"
        },
        features: ["City View", "Furnished", "Gym"],
        images: ["/placeholder.svg"],
        roi: 7.2,
        views: 95,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
        tags: ["high yield", "investment", "furnished"]
      },
      {
        id: "prop3",
        title: "1 Bedroom with High ROI in JVC",
        description: "Affordable 1 bedroom with excellent rental yield and high ROI",
        type: "apartment",
        status: "ready",
        price: 450000,
        area: 750,
        bedrooms: 1,
        bathrooms: 1,
        location: {
          area: "Jumeirah Village Circle",
          community: "JVC"
        },
        features: ["Balcony", "Parking", "Security"],
        images: ["/placeholder.svg"],
        roi: 9.5,
        views: 75,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
        tags: ["high ROI", "high yield", "investment"]
      },
      {
        id: "prop4",
        title: "Luxurious 3 Bedroom Villa in Palm Jumeirah",
        description: "Stunning waterfront villa with private pool",
        type: "villa",
        status: "ready",
        price: 12000000,
        area: 4500,
        bedrooms: 3,
        bathrooms: 4,
        location: {
          area: "Palm Jumeirah",
          community: "Frond K"
        },
        features: ["Private Pool", "Beach Access", "Smart Home"],
        images: ["/placeholder.svg"],
        roi: 5.2,
        views: 210,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
        tags: ["luxury", "waterfront", "smart home"]
      },
      {
        id: "prop5",
        title: "Off-Plan 2 Bedroom in Dubai Marina",
        description: "Premium off-plan property with attractive payment plan",
        type: "apartment",
        status: "off-plan",
        price: 1800000,
        area: 1500,
        bedrooms: 2,
        bathrooms: 2,
        location: {
          area: "Dubai Marina",
          community: "Marina Horizon"
        },
        features: ["Sea View", "Premium Finishes", "Smart Home"],
        images: ["/placeholder.svg"],
        developer: "Emaar Properties",
        completionDate: "2025-12-01",
        roi: 7.8,
        paymentPlan: {
          downPayment: 20,
          installments: [
            { percentage: 40, dueDate: "On Handover" },
            { percentage: 40, dueDate: "12 months after handover" }
          ]
        },
        views: 85,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
        tags: ["off-plan", "payment plan", "investment"]
      }
    ];

    // Filter logic based on search query
    let filtered: Property[] = [...mockProperties];
    
    const lowerQuery = query.toLowerCase();
    
    // Filter for 'Undervalued properties in Dubai Marina'
    if (lowerQuery.includes("undervalued") && lowerQuery.includes("dubai marina")) {
      filtered = filtered.filter(p => 
        p.location.area.toLowerCase().includes("dubai marina") && 
        p.price < 1500000 &&
        p.roi > 7
      );
    } 
    // Filter for 'High yield studios'
    else if (lowerQuery.includes("high yield") && lowerQuery.includes("studio")) {
      filtered = filtered.filter(p => 
        p.bedrooms === 0 && 
        p.tags.some(tag => tag.toLowerCase().includes("high yield"))
      );
    } 
    // Filter for 'Apartments with a maximum price of $250,000'
    else if (lowerQuery.includes("maximum price") && lowerQuery.includes("250,000")) {
      filtered = filtered.filter(p => 
        p.type === "apartment" && 
        p.price <= 250000
      );
    } 
    // Filter for '2 bedroom apartment with high ROI'
    else if (lowerQuery.includes("2 bedroom") && lowerQuery.includes("high roi")) {
      filtered = filtered.filter(p => 
        p.bedrooms === 2 && 
        p.type === "apartment" &&
        (p.roi ? p.roi > 7 : false)
      );
    } 
    // Filter for '1 bed, high ROI and high yield'
    else if (lowerQuery.includes("1 bed") && lowerQuery.includes("high roi") && lowerQuery.includes("high yield")) {
      filtered = filtered.filter(p => 
        p.bedrooms === 1 && 
        (p.roi ? p.roi > 8 : false) &&
        p.tags.some(tag => tag.toLowerCase().includes("high yield"))
      );
    } 
    // Generic search (fallback)
    else {
      filtered = filtered.filter(p => 
        p.title.toLowerCase().includes(lowerQuery) || 
        p.description.toLowerCase().includes(lowerQuery) ||
        p.location.area.toLowerCase().includes(lowerQuery) ||
        p.tags.some(tag => tag.toLowerCase().includes(lowerQuery))
      );
    }
    
    // Add a match score to each result for demonstration
    return filtered.map(prop => ({
      ...prop,
      matchScore: Math.floor(Math.random() * 30) + 70 // Random score between 70-100
    }));
  };

  return (
    <AppShell>
      <div className="h-full flex flex-col">
        <QuickSearch fullScreen onSearch={handleSearch} onClose={handleClose} />
        
        {/* Search Results Section */}
        {searchResults.length > 0 && !isSearching && (
          <div className="mt-8 px-4">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-2xl font-medium">Search Results</h2>
              <Button variant="outline" size="sm" onClick={() => setSearchResults([])}>
                <ArrowLeft className="mr-2 h-4 w-4" />
                New Search
              </Button>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {searchResults.map(property => (
                <div key={property.id} className="border rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                  <div className="h-40 bg-gray-200 relative">
                    <img 
                      src={property.images[0] || "/placeholder.svg"} 
                      alt={property.title}
                      className="w-full h-full object-cover"
                    />
                    {property.matchScore && (
                      <div className="absolute top-2 right-2 bg-purple-600 text-white text-xs font-medium px-2 py-1 rounded-full">
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
          </div>
        )}
      </div>
    </AppShell>
  );
};

export default SearchPage;


import React from "react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

// Mock data for area guides
const areaGuides = [
  {
    id: "a1",
    name: "Downtown Dubai",
    image: "https://placehold.co/600x400?text=Downtown+Dubai",
    description: "The heart of Dubai featuring Burj Khalifa, Dubai Mall, and Dubai Opera.",
    stats: {
      avgPrice: 2350,
      roi: 4.8,
      demand: "High"
    },
    features: ["Iconic Views", "Luxury Lifestyle", "Tourist Hub"]
  },
  {
    id: "a2",
    name: "Dubai Marina",
    image: "https://placehold.co/600x400?text=Dubai+Marina",
    description: "Vibrant waterfront community with a stunning skyline and marina promenade.",
    stats: {
      avgPrice: 1900,
      roi: 5.3,
      demand: "High"
    },
    features: ["Waterfront", "Walkable", "Beach Access"]
  },
  {
    id: "a3",
    name: "Palm Jumeirah",
    image: "https://placehold.co/600x400?text=Palm+Jumeirah",
    description: "Iconic man-made island with luxury villas and apartments.",
    stats: {
      avgPrice: 3200,
      roi: 4.2,
      demand: "High"
    },
    features: ["Beachfront", "Exclusive", "Luxury"]
  },
  {
    id: "a4",
    name: "Jumeirah Village Circle",
    image: "https://placehold.co/600x400?text=JVC",
    description: "Family-friendly community with a mix of apartments and villas.",
    stats: {
      avgPrice: 950,
      roi: 7.1,
      demand: "Medium"
    },
    features: ["Affordable", "Family-Friendly", "Community"]
  },
  {
    id: "a5",
    name: "Dubai Hills Estate",
    image: "https://placehold.co/600x400?text=Dubai+Hills",
    description: "Upscale residential community with parks, golf course, and retail.",
    stats: {
      avgPrice: 1650,
      roi: 5.8,
      demand: "High"
    },
    features: ["Golf Course", "New Development", "Green Spaces"]
  },
  {
    id: "a6",
    name: "Business Bay",
    image: "https://placehold.co/600x400?text=Business+Bay",
    description: "Commercial and residential hub adjacent to Downtown Dubai.",
    stats: {
      avgPrice: 1750,
      roi: 5.6,
      demand: "Medium"
    },
    features: ["Central Location", "Canal Views", "Mixed-Use"]
  }
];

const AreaGuides = () => {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {areaGuides.map((area) => (
          <Card key={area.id} className="overflow-hidden hover:shadow-md transition-shadow">
            <div className="aspect-video w-full overflow-hidden">
              <img 
                src={area.image} 
                alt={area.name} 
                className="w-full h-full object-cover transition-transform hover:scale-105" 
              />
            </div>
            
            <CardContent className="p-4">
              <h3 className="font-semibold text-lg mb-2">{area.name}</h3>
              <p className="text-sm text-slate-600 mb-4">{area.description}</p>
              
              <div className="grid grid-cols-3 gap-2 mb-4">
                <div className="text-center p-2 bg-slate-50 rounded">
                  <p className="text-xs text-slate-500">Avg. AED/sqft</p>
                  <p className="font-medium">{area.stats.avgPrice}</p>
                </div>
                <div className="text-center p-2 bg-slate-50 rounded">
                  <p className="text-xs text-slate-500">ROI</p>
                  <p className="font-medium">{area.stats.roi}%</p>
                </div>
                <div className="text-center p-2 bg-slate-50 rounded">
                  <p className="text-xs text-slate-500">Demand</p>
                  <p className="font-medium">{area.stats.demand}</p>
                </div>
              </div>
              
              <div className="flex flex-wrap gap-2">
                {area.features.map((feature, index) => (
                  <Badge key={index} variant="outline" className="bg-slate-100 text-slate-700">
                    {feature}
                  </Badge>
                ))}
              </div>
            </CardContent>
            
            <CardFooter className="p-4 pt-0 flex justify-end">
              <button className="text-sm text-blue-600 hover:underline">View Full Guide</button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default AreaGuides;

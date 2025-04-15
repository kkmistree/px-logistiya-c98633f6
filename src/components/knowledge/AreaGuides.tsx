
import React from "react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

// Mock data for industrial area guides in Saudi Arabia
const areaGuides = [
  {
    id: "a1",
    name: "Riyadh Industrial City",
    image: "https://placehold.co/600x400?text=Riyadh+Industrial+City",
    description: "Primary industrial hub in Riyadh with multiple manufacturing and logistics facilities.",
    stats: {
      avgPrice: 1900,
      roi: 7.8,
      demand: "High"
    },
    features: ["MODON Approved", "Logistics Hub", "Manufacturing"]
  },
  {
    id: "a2",
    name: "Jeddah Industrial City",
    image: "https://placehold.co/600x400?text=Jeddah+Industrial+City",
    description: "Major industrial complex with access to Red Sea shipping routes and logistics networks.",
    stats: {
      avgPrice: 1797,
      roi: 6.9,
      demand: "High"
    },
    features: ["Port Access", "Manufacturing", "Export Hub"]
  },
  {
    id: "a3",
    name: "Jubail Industrial City",
    image: "https://placehold.co/600x400?text=Jubail+Industrial+City",
    description: "World's largest industrial city focusing on petrochemical industries and manufacturing.",
    stats: {
      avgPrice: 2137,
      roi: 8.1,
      demand: "High"
    },
    features: ["Petrochemical Hub", "Energy Industry", "Port Access"]
  },
  {
    id: "a4",
    name: "Dammam Industrial City",
    image: "https://placehold.co/600x400?text=Dammam+Industrial+City",
    description: "Strategic industrial area with access to Arabian Gulf and proximity to key markets.",
    stats: {
      avgPrice: 1849,
      roi: 7.5,
      demand: "Medium"
    },
    features: ["Energy Sector", "Logistics", "Manufacturing"]
  },
  {
    id: "a5",
    name: "KAEC Industrial Valley",
    image: "https://placehold.co/600x400?text=KAEC+Industrial+Valley",
    description: "Emerging industrial and economic city with state-of-the-art infrastructure and business facilities.",
    stats: {
      avgPrice: 2081,
      roi: 6.8,
      demand: "High"
    },
    features: ["SEZ Benefits", "Vision 2030 Project", "Logistics Hub"]
  },
  {
    id: "a6",
    name: "Sudair City for Industry",
    image: "https://placehold.co/600x400?text=Sudair+City",
    description: "Developing industrial city focused on manufacturing, logistics, and warehousing operations.",
    stats: {
      avgPrice: 2201,
      roi: 7.6,
      demand: "Medium"
    },
    features: ["Vision 2030 Initiative", "Manufacturing Hub", "Strategic Location"]
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
                  <p className="text-xs text-slate-500">Avg. SAR/sqm</p>
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

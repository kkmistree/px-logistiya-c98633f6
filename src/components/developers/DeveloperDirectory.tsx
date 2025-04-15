
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

// Mock data for developers
const developers = [
  {
    id: "d1",
    name: "Saudi Economic Development Co.",
    logo: "https://placehold.co/100x60?text=SEDC",
    projectCount: 28,
    tier: "Platinum",
    location: "Riyadh",
  },
  {
    id: "d2",
    name: "MODON",
    logo: "https://placehold.co/100x60?text=MODON",
    projectCount: 22,
    tier: "Gold",
    location: "Jeddah",
  },
  {
    id: "d3",
    name: "KAEC",
    logo: "https://placehold.co/100x60?text=KAEC",
    projectCount: 19,
    tier: "Platinum",
    location: "King Abdullah Economic City",
  },
  {
    id: "d4",
    name: "Jubail Industrial City",
    logo: "https://placehold.co/100x60?text=Jubail",
    projectCount: 12,
    tier: "Gold",
    location: "Eastern Province",
  },
  {
    id: "d5",
    name: "Dammam Industrial Development",
    logo: "https://placehold.co/100x60?text=DID",
    projectCount: 16,
    tier: "Gold",
    location: "Dammam",
  },
  {
    id: "d6",
    name: "Sudair City Development",
    logo: "https://placehold.co/100x60?text=Sudair",
    projectCount: 8,
    tier: "Silver",
    location: "Sudair",
  },
];

const DeveloperDirectory = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {developers.map((developer) => (
        <Card key={developer.id} className="overflow-hidden hover:shadow-md transition-shadow">
          <CardContent className="p-6">
            <div className="flex items-center space-x-4">
              <div className="w-20 h-12 bg-slate-100 flex items-center justify-center rounded">
                <img 
                  src={developer.logo} 
                  alt={developer.name} 
                  className="max-w-full max-h-full object-contain" 
                />
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-lg">{developer.name}</h3>
                <div className="flex items-center mt-1 space-x-2">
                  <span className="text-sm text-slate-500">{developer.location}</span>
                  <span className="text-sm text-slate-500">•</span>
                  <span className="text-sm text-slate-500">{developer.projectCount} Projects</span>
                </div>
              </div>
            </div>
            
            <div className="mt-4 flex justify-between items-center">
              <Badge className={
                developer.tier === "Platinum" 
                  ? "bg-purple-600" 
                  : developer.tier === "Gold" 
                  ? "bg-amber-500" 
                  : "bg-slate-400"
              }>
                {developer.tier} Developer
              </Badge>
              <button className="text-sm text-blue-600 hover:underline">
                View Profile
              </button>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default DeveloperDirectory;

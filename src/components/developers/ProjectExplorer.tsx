
import React from "react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface ProjectExplorerProps {
  viewMode: "grid" | "list";
}

// Mock data for KSA industrial projects
const projects = [
  {
    id: "p1",
    name: "Riyadh Industrial City - Advanced Manufacturing Zone",
    developer: "MODON",
    image: "https://placehold.co/600x400?text=Riyadh+Industrial",
    location: "Northern Riyadh",
    type: "Industrial Park",
    startingPrice: 8500000,
    handoverDate: "Q4 2025",
    roi: 6.5,
    stage: "active",
    badges: ["Exclusive", "Advanced Utilities"],
    paymentPlan: "60/40"
  },
  {
    id: "p2",
    name: "Jeddah Industrial Logistics Hub",
    developer: "Saudi Industrial Development Company",
    image: "https://placehold.co/600x400?text=Jeddah+Logistics",
    location: "South Jeddah",
    type: "Logistics Zone",
    startingPrice: 5200000,
    handoverDate: "Q2 2026",
    roi: 5.8,
    stage: "active",
    badges: ["Port Access"],
    paymentPlan: "50/50"
  },
  {
    id: "p3",
    name: "NEOM Industrial Valley",
    developer: "NEOM",
    image: "https://placehold.co/600x400?text=NEOM+Industrial",
    location: "NEOM Region",
    type: "Advanced Manufacturing",
    startingPrice: 12700000,
    handoverDate: "Q3 2026",
    roi: 4.9,
    stage: "active",
    badges: ["Renewable Energy"],
    paymentPlan: "30/70"
  },
  {
    id: "p4",
    name: "Jubail Petrochemical Zone",
    developer: "Royal Commission for Jubail",
    image: "https://placehold.co/600x400?text=Jubail+Petrochemical",
    location: "Jubail Industrial City",
    type: "Specialized Industrial",
    startingPrice: 7800000,
    handoverDate: "Q1 2027",
    roi: 7.2,
    stage: "coming_soon",
    badges: [],
    paymentPlan: "20/80"
  },
  {
    id: "p5",
    name: "Dammam Logistics Park",
    developer: "Dammam Industrial City",
    image: "https://placehold.co/600x400?text=Dammam+Logistics",
    location: "Eastern Province",
    type: "Logistics Center",
    startingPrice: 6500000,
    handoverDate: "Q4 2025",
    roi: 5.3,
    stage: "active",
    badges: ["Export Facilities"],
    paymentPlan: "40/60"
  },
  {
    id: "p6",
    name: "Sudair Industrial City",
    developer: "Sudair City for Industry and Business",
    image: "https://placehold.co/600x400?text=Sudair+Industrial",
    location: "Sudair",
    type: "Industrial Zone",
    startingPrice: 4200000,
    handoverDate: "Q2 2025",
    roi: 6.0,
    stage: "active",
    badges: ["Vision 2030"],
    paymentPlan: "25/75"
  },
];

const formatPrice = (price: number) => {
  if (price >= 1000000) {
    return `SAR ${(price / 1000000).toFixed(1)}M`;
  }
  return `SAR ${(price / 1000).toFixed(0)}K`;
};

const ProjectExplorer = ({ viewMode }: ProjectExplorerProps) => {
  if (viewMode === "grid") {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          <Card key={project.id} className="overflow-hidden hover:shadow-md transition-shadow">
            <div className="relative">
              <img 
                src={project.image} 
                alt={project.name} 
                className="w-full h-48 object-cover" 
              />
              <div className="absolute top-2 left-2 flex flex-wrap gap-1">
                {project.stage === "coming_soon" && (
                  <Badge className="bg-orange-500">Coming Soon</Badge>
                )}
                {project.stage === "active" && (
                  <Badge className="bg-green-500">Active</Badge>
                )}
              </div>
              <div className="absolute top-2 right-2 flex flex-wrap gap-1">
                {project.badges.map((badge, index) => (
                  <Badge key={index} variant="outline" className="bg-black/50 text-white border-none">
                    {badge}
                  </Badge>
                ))}
              </div>
            </div>
            
            <CardContent className="p-4">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-semibold text-lg">{project.name}</h3>
                  <p className="text-sm text-slate-500">{project.developer}</p>
                </div>
                <Badge className="bg-blue-600">
                  {project.roi}% ROI
                </Badge>
              </div>
              
              <div className="mt-3 grid grid-cols-2 gap-2">
                <div>
                  <p className="text-xs text-slate-500">Starting Price</p>
                  <p className="font-medium">{formatPrice(project.startingPrice)}</p>
                </div>
                <div>
                  <p className="text-xs text-slate-500">Location</p>
                  <p className="font-medium">{project.location}</p>
                </div>
                <div>
                  <p className="text-xs text-slate-500">Handover</p>
                  <p className="font-medium">{project.handoverDate}</p>
                </div>
                <div>
                  <p className="text-xs text-slate-500">Payment Plan</p>
                  <p className="font-medium">{project.paymentPlan}</p>
                </div>
              </div>
            </CardContent>
            
            <CardFooter className="p-4 bg-slate-50 flex justify-between">
              <button className="text-sm text-blue-600 hover:underline">
                View Details
              </button>
              <button className="text-sm text-blue-600 hover:underline">
                Share
              </button>
            </CardFooter>
          </Card>
        ))}
      </div>
    );
  }
  
  // List view
  return (
    <div className="space-y-4">
      {projects.map((project) => (
        <div key={project.id} className="bg-white rounded-lg border border-slate-200 hover:shadow-md transition-shadow p-4 flex flex-col md:flex-row gap-4">
          <div className="relative w-full md:w-48 h-32 flex-shrink-0">
            <img 
              src={project.image} 
              alt={project.name} 
              className="w-full h-full object-cover rounded-md" 
            />
            <div className="absolute top-2 left-2">
              {project.stage === "coming_soon" && (
                <Badge className="bg-orange-500">Coming Soon</Badge>
              )}
              {project.stage === "active" && (
                <Badge className="bg-green-500">Active</Badge>
              )}
            </div>
          </div>
          
          <div className="flex-1">
            <div className="flex flex-wrap justify-between items-start">
              <div>
                <h3 className="font-semibold text-lg">{project.name}</h3>
                <p className="text-sm text-slate-500">{project.developer} • {project.location}</p>
                <div className="mt-1 flex flex-wrap gap-1">
                  {project.badges.map((badge, index) => (
                    <Badge key={index} variant="outline" className="bg-slate-100 text-slate-700">
                      {badge}
                    </Badge>
                  ))}
                </div>
              </div>
              <Badge className="bg-blue-600 mt-1">
                {project.roi}% ROI
              </Badge>
            </div>
            
            <div className="mt-3 grid grid-cols-2 sm:grid-cols-4 gap-4">
              <div>
                <p className="text-xs text-slate-500">Starting Price</p>
                <p className="font-medium">{formatPrice(project.startingPrice)}</p>
              </div>
              <div>
                <p className="text-xs text-slate-500">Type</p>
                <p className="font-medium">{project.type}</p>
              </div>
              <div>
                <p className="text-xs text-slate-500">Handover</p>
                <p className="font-medium">{project.handoverDate}</p>
              </div>
              <div>
                <p className="text-xs text-slate-500">Payment Plan</p>
                <p className="font-medium">{project.paymentPlan}</p>
              </div>
            </div>
            
            <div className="mt-4 flex justify-end gap-3">
              <button className="text-sm text-blue-600 hover:underline">
                View Details
              </button>
              <button className="text-sm text-blue-600 hover:underline">
                Share
              </button>
              <button className="text-sm text-blue-600 hover:underline">
                Add to Mandate
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProjectExplorer;

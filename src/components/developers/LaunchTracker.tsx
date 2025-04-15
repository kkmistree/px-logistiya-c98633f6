
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { CalendarDays, Bell } from "lucide-react";

// Mock data for KSA industrial launches
const launches = [
  {
    id: "l1",
    projectName: "Riyadh Industrial City - Advanced Manufacturing Zone",
    developer: "MODON",
    image: "https://placehold.co/600x400?text=Riyadh+Industrial",
    location: "Northern Riyadh",
    launchDate: "2025-06-15",
    registrationOpen: true,
    type: "Industrial Park",
    startingPrice: "SAR 8.5M",
    paymentPlan: "40/60",
    highlights: ["Petrochemical Support", "Customs Clearance", "Advanced Industrial Utilities"]
  },
  {
    id: "l2",
    projectName: "Jeddah Industrial Logistics Hub",
    developer: "Saudi Industrial Development Company",
    image: "https://placehold.co/600x400?text=Jeddah+Logistics",
    location: "South Jeddah",
    launchDate: "2025-07-01",
    registrationOpen: true,
    type: "Commercial Warehouses",
    startingPrice: "SAR 5.2M",
    paymentPlan: "30/70",
    highlights: ["Port Access", "Customs Bonded", "Cold Storage"]
  },
  {
    id: "l3",
    projectName: "NEOM Industrial Valley",
    developer: "NEOM",
    image: "https://placehold.co/600x400?text=NEOM+Industrial",
    location: "NEOM Region",
    launchDate: "2025-08-10",
    registrationOpen: false,
    type: "Advanced Manufacturing",
    startingPrice: "SAR 12.7M",
    paymentPlan: "50/50",
    highlights: ["Renewable Energy", "Smart Factory", "AI Integration"]
  },
  {
    id: "l4",
    projectName: "Jubail Advanced Materials Park",
    developer: "Royal Commission for Jubail",
    image: "https://placehold.co/600x400?text=Jubail+Materials",
    location: "Jubail Industrial City",
    launchDate: "2025-09-05",
    registrationOpen: false,
    type: "Specialized Industrial",
    startingPrice: "SAR 7.8M",
    paymentPlan: "25/75",
    highlights: ["Petrochemical Access", "Export Facilities", "Technical Support"]
  },
];

// Function to format date
const formatDate = (dateString: string) => {
  const date = new Date(dateString);
  return date.toLocaleDateString("en-US", { 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
  });
};

// Calculate days until launch
const getDaysUntil = (dateString: string) => {
  const today = new Date();
  const launchDate = new Date(dateString);
  const diffTime = launchDate.getTime() - today.getTime();
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  return diffDays;
};

const LaunchTracker = () => {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-semibold">Upcoming KSA Industrial Project Launches</h2>
        <Button variant="outline" size="sm">
          <CalendarDays size={16} className="mr-2" />
          Calendar View
        </Button>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {launches.map((launch) => {
          const daysUntil = getDaysUntil(launch.launchDate);
          
          return (
            <Card key={launch.id} className="overflow-hidden hover:shadow-md transition-shadow">
              <div className="flex flex-col md:flex-row">
                <div className="relative w-full md:w-1/3">
                  <img 
                    src={launch.image} 
                    alt={launch.projectName} 
                    className="w-full h-full object-cover min-h-[160px]" 
                  />
                  <div className="absolute top-2 left-2">
                    <Badge className="bg-purple-600">
                      {daysUntil} Days Until Launch
                    </Badge>
                  </div>
                </div>
                
                <CardContent className="p-4 flex-1">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="font-semibold text-lg">{launch.projectName}</h3>
                      <p className="text-sm text-slate-500">
                        {launch.developer} • {launch.location} • {launch.type}
                      </p>
                    </div>
                  </div>
                  
                  <div className="mt-2">
                    <p className="text-sm">
                      <span className="font-medium">Launch Date:</span> {formatDate(launch.launchDate)}
                    </p>
                    <p className="text-sm">
                      <span className="font-medium">Starting From:</span> {launch.startingPrice}
                    </p>
                    <p className="text-sm">
                      <span className="font-medium">Payment Plan:</span> {launch.paymentPlan}
                    </p>
                  </div>
                  
                  <div className="mt-3 flex flex-wrap gap-1">
                    {launch.highlights.map((highlight, index) => (
                      <Badge key={index} variant="outline" className="bg-slate-100 text-slate-700">
                        {highlight}
                      </Badge>
                    ))}
                  </div>
                  
                  <div className="mt-4 flex justify-between items-center">
                    {launch.registrationOpen ? (
                      <Button size="sm">Register Interest</Button>
                    ) : (
                      <Button variant="outline" size="sm">
                        <Bell size={16} className="mr-2" />
                        Notify Me
                      </Button>
                    )}
                    <button className="text-sm text-blue-600 hover:underline">
                      More Info
                    </button>
                  </div>
                </CardContent>
              </div>
            </Card>
          );
        })}
      </div>
    </div>
  );
};

export default LaunchTracker;

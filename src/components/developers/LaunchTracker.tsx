
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { CalendarDays, Bell } from "lucide-react";

// Mock data for launches
const launches = [
  {
    id: "l1",
    projectName: "Sunset Heights",
    developer: "Emaar Properties",
    image: "https://placehold.co/600x400?text=Sunset+Heights",
    location: "Dubai Hills",
    launchDate: "2025-06-15",
    registrationOpen: true,
    type: "Apartment",
    startingPrice: "AED 1.2M",
    paymentPlan: "20/80",
    highlights: ["Sea View", "Park Access", "Smart Home"]
  },
  {
    id: "l2",
    projectName: "Grand Central",
    developer: "DAMAC Properties",
    image: "https://placehold.co/600x400?text=Grand+Central",
    location: "Dubai South",
    launchDate: "2025-07-01",
    registrationOpen: true,
    type: "Mixed Use",
    startingPrice: "AED 950K",
    paymentPlan: "40/60",
    highlights: ["Metro Access", "Retail Space", "Gym"]
  },
  {
    id: "l3",
    projectName: "Azure Gardens",
    developer: "Meraas",
    image: "https://placehold.co/600x400?text=Azure+Gardens",
    location: "Jumeirah",
    launchDate: "2025-08-10",
    registrationOpen: false,
    type: "Villa",
    startingPrice: "AED 3.5M",
    paymentPlan: "30/70",
    highlights: ["Private Pool", "Beach Access", "Smart Home"]
  },
  {
    id: "l4",
    projectName: "Skyline Residences",
    developer: "Sobha",
    image: "https://placehold.co/600x400?text=Skyline+Residences",
    location: "Downtown Dubai",
    launchDate: "2025-09-05",
    registrationOpen: false,
    type: "Apartment",
    startingPrice: "AED 1.8M",
    paymentPlan: "50/50",
    highlights: ["Burj Views", "Concierge", "Infinity Pool"]
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
        <h2 className="text-xl font-semibold">Upcoming Project Launches</h2>
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

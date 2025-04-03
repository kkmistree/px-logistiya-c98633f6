
import { ArrowUpRight, Clock, Users, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const UpcomingViewings = () => {
  const viewings = [
    {
      property: "Palm Jumeirah Villa",
      client: "Mohammed Al Farsi",
      location: "Palm Jumeirah, Frond M",
      time: "Today, 2:00 PM",
      status: "confirmed",
    },
    {
      property: "Downtown Apartment",
      client: "Elena Petrova",
      location: "Burj Vista, Downtown Dubai",
      time: "Tomorrow, 10:30 AM",
      status: "pending",
    },
    {
      property: "Dubai Hills Villa",
      client: "James Wilson",
      location: "Sidra Villas, Dubai Hills",
      time: "Thursday, 4:15 PM",
      status: "confirmed",
    },
  ];

  return (
    <div className="bg-white rounded-lg shadow-sm p-4">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold text-estate-primary">Upcoming Viewings</h2>
        <Button variant="ghost" size="sm" className="text-estate-secondary">
          View Calendar <ArrowUpRight size={16} className="ml-1" />
        </Button>
      </div>
      
      <div className="space-y-3">
        {viewings.map((viewing, index) => (
          <Card key={index} className="p-3 flex justify-between items-center border border-slate-200">
            <div>
              <h3 className="font-medium text-estate-primary text-sm">{viewing.property}</h3>
              <div className="flex items-center mt-1">
                <Users size={14} className="text-slate-400 mr-1" />
                <span className="text-xs text-slate-600">{viewing.client}</span>
              </div>
              <div className="flex items-center mt-1">
                <MapPin size={14} className="text-slate-400 mr-1" />
                <span className="text-xs text-slate-600">{viewing.location}</span>
              </div>
              <div className="flex items-center mt-1">
                <Clock size={14} className="text-slate-400 mr-1" />
                <span className="text-xs text-slate-600">{viewing.time}</span>
              </div>
            </div>
            
            <div className="flex flex-col items-end">
              <span className={`text-xs font-medium px-2 py-1 rounded-full ${
                viewing.status === "confirmed" 
                  ? "bg-green-100 text-green-800" 
                  : "bg-yellow-100 text-yellow-800"
              }`}>
                {viewing.status === "confirmed" ? "Confirmed" : "Pending"}
              </span>
              <Button variant="ghost" size="sm" className="text-estate-secondary mt-2">
                Details
              </Button>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default UpcomingViewings;

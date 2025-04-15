
import { Client } from "@/types/client";
import { Property } from "@/types/property";

export const getRecommendedProperties = (client: Client): Property[] => {
  if (!client?.requirements) return [];
  
  // This would typically come from a backend service that matches properties to requirements
  // For this mock, we'll create properties that align with client requirements
  const { budget, location, propertyType } = client.requirements;
  
  const mockProperties: Property[] = [
    {
      id: "prop1",
      title: `${propertyType?.[0] || "Warehouse"} in ${location?.[0] || "Riyadh Industrial City"}`,
      description: `Premium ${propertyType?.[0] || "warehouse"} with excellent logistics connectivity and high-end specifications. Great ROI potential.`,
      type: (propertyType?.[0] as "warehouse" | "factory" | "logistics" | "land" | "office" | "mixed-use") || "warehouse",
      status: "available",
      price: budget?.min + ((budget?.max - budget?.min) * 0.7),
      area: 5000,
      location: {
        area: location?.[0] || "Riyadh Industrial City",
        community: "MODON Zone 1"
      },
      features: ["Loading Bays", "Security", "High Ceiling", "Fire System"],
      images: ["/placeholder.svg"],
      developer: "MODON Industrial Development",
      roi: 8.2,
      tags: ["High Yield", "MODON Approved", "SEZ", "Vision 2030 Aligned"],
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
      matchScore: 92,
      zoning: "Industrial",
      vision2030Alignment: ["Logistics Hub", "Manufacturing"],
      seaportDistance: 120,
      airportDistance: 45,
      highwayDistance: 5
    },
    {
      id: "prop2",
      title: `Large ${propertyType?.[0] || "Factory"} in ${location?.[1] || "Jeddah Industrial City"}`,
      description: `Spacious ${propertyType?.[0] || "factory"} with premium specifications. Ideal for investors seeking stable returns.`,
      type: (propertyType?.[0] as "warehouse" | "factory" | "logistics" | "land" | "office" | "mixed-use") || "factory",
      status: "available",
      price: budget?.min + ((budget?.max - budget?.min) * 0.8),
      area: 8000,
      location: {
        area: location?.[1] || "Jeddah Industrial City",
        community: "Industrial Valley"
      },
      features: ["High Power Capacity", "Water Supply", "Loading Docks", "Office Space"],
      images: ["/placeholder.svg"],
      developer: "KAEC Industrial Development",
      roi: 7.8,
      tags: ["High Yield", "Export Ready", "Logistics Corridor"],
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
      matchScore: 88,
      zoning: "Heavy Industrial",
      vision2030Alignment: ["Manufacturing", "Export Hub"],
      seaportDistance: 20,
      airportDistance: 35,
      highwayDistance: 2
    },
    {
      id: "prop3",
      title: `${propertyType?.[0] || "Logistics"} Development in ${location?.[0] || "Riyadh Industrial City"}`,
      description: `Under-development ${propertyType?.[0] || "logistics"} facility with attractive payment plan. High projected ROI.`,
      type: (propertyType?.[0] as "warehouse" | "factory" | "logistics" | "land" | "office" | "mixed-use") || "logistics",
      status: "under-development",
      price: budget?.min + ((budget?.max - budget?.min) * 0.6),
      area: 6500,
      location: {
        area: location?.[0] || "Riyadh Industrial City",
        community: "Logistics Hub"
      },
      features: ["Modern Design", "Smart Systems", "Security", "Sustainable"],
      images: ["/placeholder.svg"],
      developer: "Saudi Logistics Development",
      completionDate: "2025-06-30",
      roi: 9.5,
      paymentPlan: {
        downPayment: 20,
        installments: [
          { percentage: 10, dueDate: "60 days after booking" },
          { percentage: 10, dueDate: "6 months after booking" },
          { percentage: 10, dueDate: "12 months after booking" },
          { percentage: 50, dueDate: "On Handover" }
        ]
      },
      tags: ["Under Development", "High ROI", "Payment Plan", "MODON Approved"],
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
      matchScore: 85,
      zoning: "Logistics",
      vision2030Alignment: ["Logistics Hub"],
      seaportDistance: 110,
      airportDistance: 40,
      highwayDistance: 3
    }
  ];
  
  return mockProperties;
};

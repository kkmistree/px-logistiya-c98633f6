
import { Client } from "@/types/client";
import { Property } from "@/types/property";

export const getRecommendedProperties = (client: Client): Property[] => {
  if (!client?.requirements) return [];
  
  // This would typically come from a backend service that matches properties to requirements
  // For this mock, we'll create properties that align with client requirements
  const { budget, location, propertyType, bedrooms } = client.requirements;
  
  const mockProperties: Property[] = [
    {
      id: "prop1",
      title: `${bedrooms?.[0] || 2} Bedroom ${propertyType?.[0] || "Apartment"} in ${location?.[0] || "Dubai Marina"}`,
      description: `Premium ${propertyType?.[0] || "apartment"} with stunning views and high-end finishes. Great ROI potential.`,
      type: (propertyType?.[0] as "apartment" | "villa" | "townhouse" | "penthouse" | "land") || "apartment",
      status: "ready",
      price: budget?.min + ((budget?.max - budget?.min) * 0.7),
      area: 1200,
      bedrooms: bedrooms?.[0] || 2,
      bathrooms: bedrooms?.[0] || 2,
      location: {
        area: location?.[0] || "Dubai Marina",
        community: "Premium Tower"
      },
      features: ["Pool", "Gym", "Security", "Parking"],
      images: ["/placeholder.svg"],
      developer: "Emaar Properties",
      roi: 8.2,
      tags: ["High Yield", "Premium", "Furnished"],
      furnishing: "Furnished",
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
      matchScore: 92
    },
    {
      id: "prop2",
      title: `Luxury ${bedrooms?.[1] || 3} Bedroom ${propertyType?.[0] || "Apartment"} in ${location?.[1] || "Downtown Dubai"}`,
      description: `Spacious ${propertyType?.[0] || "apartment"} with premium finishes. Ideal for investors seeking stable returns.`,
      type: (propertyType?.[0] as "apartment" | "villa" | "townhouse" | "penthouse" | "land") || "apartment",
      status: "ready",
      price: budget?.min + ((budget?.max - budget?.min) * 0.8),
      area: 1500,
      bedrooms: bedrooms?.[1] || 3,
      bathrooms: bedrooms?.[1] || 3,
      location: {
        area: location?.[1] || "Downtown Dubai",
        community: "Boulevard Central"
      },
      features: ["Pool", "Gym", "Security", "Parking", "Balcony"],
      images: ["/placeholder.svg"],
      developer: "DAMAC Properties",
      roi: 7.8,
      tags: ["High Yield", "Premium", "City View"],
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
      matchScore: 88
    },
    {
      id: "prop3",
      title: `${bedrooms?.[0] || 2} Bedroom Off-Plan ${propertyType?.[0] || "Apartment"} in ${location?.[0] || "Dubai Marina"}`,
      description: `Off-plan ${propertyType?.[0] || "apartment"} with attractive payment plan. High projected ROI.`,
      type: (propertyType?.[0] as "apartment" | "villa" | "townhouse" | "penthouse" | "land") || "apartment",
      status: "off-plan",
      price: budget?.min + ((budget?.max - budget?.min) * 0.6),
      area: 1100,
      bedrooms: bedrooms?.[0] || 2,
      bathrooms: bedrooms?.[0] || 2,
      location: {
        area: location?.[0] || "Dubai Marina",
        community: "Marina Vista"
      },
      features: ["Pool", "Gym", "Security", "Smart Home"],
      images: ["/placeholder.svg"],
      developer: "Select Group",
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
      tags: ["Off-Plan", "High ROI", "Payment Plan"],
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
      matchScore: 85
    }
  ];
  
  return mockProperties;
};


import { Property } from "@/types/property";

// Mock property data used for searching
export const mockProperties: Property[] = [
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
  },
  {
    id: "prop6",
    title: "Budget-Friendly Studio in JVC",
    description: "Affordable studio apartment with great rental potential",
    type: "apartment",
    status: "ready",
    price: 380000,
    area: 400,
    bedrooms: 0,
    bathrooms: 1,
    location: {
      area: "Jumeirah Village Circle",
      community: "JVC"
    },
    features: ["Balcony", "Pool", "Gym"],
    images: ["/placeholder.svg"],
    roi: 8.8,
    views: 68,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    tags: ["high yield", "budget", "investment"]
  },
  {
    id: "prop7",
    title: "Exclusive 1 Bedroom in Business Bay",
    description: "Modern 1 bedroom with high rental yield and canal views",
    type: "apartment",
    status: "ready",
    price: 820000,
    area: 680,
    bedrooms: 1,
    bathrooms: 1,
    location: {
      area: "Business Bay",
      community: "Executive Towers"
    },
    features: ["Canal View", "Premium Finishes", "Gym"],
    images: ["/placeholder.svg"],
    roi: 8.9,
    views: 90,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    tags: ["high ROI", "high yield", "canal view"]
  },
  {
    id: "prop8",
    title: "Marina View Studio",
    description: "Compact studio with marina views and premium amenities",
    type: "apartment",
    status: "ready",
    price: 650000,
    area: 450,
    bedrooms: 0,
    bathrooms: 1,
    location: {
      area: "Dubai Marina",
      community: "Marina Diamond"
    },
    features: ["Marina View", "Swimming Pool", "24/7 Security"],
    images: ["/placeholder.svg"],
    roi: 7.8,
    views: 65,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    tags: ["high yield", "marina view", "investment"]
  },
  {
    id: "prop9",
    title: "Affordable 2 Bedroom in JVC",
    description: "Spacious 2 bedroom apartment with excellent ROI potential",
    type: "apartment",
    status: "ready",
    price: 750000,
    area: 1100,
    bedrooms: 2,
    bathrooms: 2,
    location: {
      area: "Jumeirah Village Circle",
      community: "JVC"
    },
    features: ["Balcony", "Parking", "Pool"],
    images: ["/placeholder.svg"],
    roi: 8.3,
    views: 55,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    tags: ["high ROI", "family-friendly", "investment"]
  },
  {
    id: "prop10",
    title: "Budget 1 Bedroom in Silicon Oasis",
    description: "Affordable 1 bedroom with excellent rental yield",
    type: "apartment",
    status: "ready",
    price: 320000,
    area: 650,
    bedrooms: 1,
    bathrooms: 1,
    location: {
      area: "Dubai Silicon Oasis",
      community: "Silicon Gates"
    },
    features: ["Balcony", "Parking", "Gym"],
    images: ["/placeholder.svg"],
    roi: 9.8,
    views: 42,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    tags: ["high ROI", "high yield", "budget"]
  }
];

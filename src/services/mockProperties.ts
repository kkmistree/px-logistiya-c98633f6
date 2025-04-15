
import { Property } from "@/types/property";

// Mock property data used for searching
export const mockProperties: Property[] = [
  {
    id: "prop1",
    title: "Premium Warehouse in Riyadh Industrial City",
    description: "High-end warehouse with excellent logistics connectivity and modern facilities",
    type: "warehouse",
    status: "available",
    price: 12000000,
    area: 5000,
    location: {
      area: "Riyadh Industrial City",
      community: "MODON Zone 1"
    },
    features: ["Loading Docks", "High Ceiling", "Security System", "Fire System"],
    images: ["/placeholder.svg"],
    roi: 8.5,
    views: 120,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    tags: ["MODON Approved", "High ROI", "High Specification"],
    zoning: "Light Industrial",
    vision2030Alignment: ["Manufacturing Hub", "Logistics Hub"]
  },
  {
    id: "prop2",
    title: "Factory Complex in Jeddah Industrial City",
    description: "Modern factory with high power capacity in the heart of Jeddah Industrial City",
    type: "factory",
    status: "available",
    price: 18000000,
    area: 8000,
    location: {
      area: "Jeddah Industrial City",
      community: "Industrial Valley"
    },
    features: ["Power Substation", "Water Supply", "Loading Docks", "Office Space"],
    images: ["/placeholder.svg"],
    roi: 7.2,
    views: 95,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    tags: ["High Yield", "Investment", "Manufacturing"],
    zoning: "Heavy Industrial",
    vision2030Alignment: ["Export Capacity", "Manufacturing Hub"]
  },
  {
    id: "prop3",
    title: "Logistics Center with High ROI in KAEC",
    description: "Logistics facility with excellent connectivity to seaport and major highways",
    type: "logistics",
    status: "available",
    price: 14500000,
    area: 7500,
    location: {
      area: "KAEC Industrial Valley",
      community: "Logistics Hub"
    },
    features: ["Loading Bays", "Truck Access", "Security", "Parking"],
    images: ["/placeholder.svg"],
    roi: 9.5,
    views: 75,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    tags: ["High ROI", "High Yield", "Investment"],
    zoning: "Logistics",
    seaportDistance: 15,
    airportDistance: 45,
    highwayDistance: 3
  },
  {
    id: "prop4",
    title: "Large Industrial Land in Jubail Industrial City",
    description: "Strategic industrial land with excellent utilities and infrastructure",
    type: "land",
    status: "available",
    price: 22000000,
    area: 20000,
    location: {
      area: "Jubail Industrial City",
      community: "South Zone"
    },
    features: ["Flat Terrain", "Utilities Connected", "Road Access", "Ready Infrastructure"],
    images: ["/placeholder.svg"],
    roi: 6.2,
    views: 210,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    tags: ["Investment", "Development Opportunity", "Strategic Location"],
    zoning: "Heavy Industrial",
    seaportDistance: 8,
    airportDistance: 65,
    highwayDistance: 2
  },
  {
    id: "prop5",
    title: "Under-Development Warehouse Complex in Riyadh",
    description: "Premium under-development warehouse complex with attractive payment plan",
    type: "warehouse",
    status: "under-development",
    price: 16800000,
    area: 10000,
    location: {
      area: "Riyadh Industrial City",
      community: "MODON Zone 3"
    },
    features: ["Modern Design", "High Ceiling", "Loading Bays", "Office Space"],
    images: ["/placeholder.svg"],
    developer: "Saudi Industrial Development Co.",
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
    tags: ["Under Development", "Payment Plan", "Investment"],
    zoning: "Light Industrial",
    vision2030Alignment: ["Manufacturing Hub"]
  },
  {
    id: "prop6",
    title: "Affordable Industrial Office Space in Dammam",
    description: "Modern office space suitable for industrial business operations",
    type: "office",
    status: "available",
    price: 4800000,
    area: 800,
    location: {
      area: "Dammam Industrial City",
      community: "Business District"
    },
    features: ["Modern Amenities", "Meeting Rooms", "Parking", "Security"],
    images: ["/placeholder.svg"],
    roi: 8.8,
    views: 68,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    tags: ["High Yield", "Office Space", "Business Operations"],
    zoning: "Light Industrial"
  },
  {
    id: "prop7",
    title: "Strategic Logistics Hub in Jeddah",
    description: "Modern logistics facility with excellent connection to seaport",
    type: "logistics",
    status: "available",
    price: 18200000,
    area: 9500,
    location: {
      area: "Jeddah Industrial City",
      community: "Logistics Zone"
    },
    features: ["Loading Bays", "High Clearance", "Security System", "Office Space"],
    images: ["/placeholder.svg"],
    roi: 8.9,
    views: 90,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    tags: ["High ROI", "High Yield", "Strategic Location"],
    zoning: "Logistics",
    seaportDistance: 12,
    airportDistance: 35,
    highwayDistance: 5
  },
  {
    id: "prop8",
    title: "Mixed-Use Industrial Complex in Sudair",
    description: "Versatile industrial complex suitable for multiple business operations",
    type: "mixed-use",
    status: "available",
    price: 15000000,
    area: 12000,
    location: {
      area: "MODON Sudair",
      community: "Central District"
    },
    features: ["Flexible Space", "Loading Areas", "Office Space", "24/7 Security"],
    images: ["/placeholder.svg"],
    roi: 7.8,
    views: 65,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    tags: ["High Yield", "Flexible Usage", "Investment"],
    zoning: "Mixed Industrial",
    vision2030Alignment: ["Manufacturing Hub", "Digital Economy"]
  },
  {
    id: "prop9",
    title: "Large Factory in Jubail Industrial City",
    description: "Spacious factory with excellent infrastructure and connectivity",
    type: "factory",
    status: "available",
    price: 24000000,
    area: 15000,
    location: {
      area: "Jubail Industrial City",
      community: "Manufacturing Zone"
    },
    features: ["High Power Capacity", "Water Supply", "Loading Docks", "Storage Areas"],
    images: ["/placeholder.svg"],
    roi: 8.3,
    views: 55,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    tags: ["High ROI", "Manufacturing", "Investment"],
    zoning: "Heavy Industrial",
    vision2030Alignment: ["Manufacturing Hub"]
  },
  {
    id: "prop10",
    title: "Budget Industrial Land in Dammam",
    description: "Affordable industrial land with development potential",
    type: "land",
    status: "available",
    price: 8500000,
    area: 10000,
    location: {
      area: "Dammam Industrial City",
      community: "East Zone"
    },
    features: ["Flat Terrain", "Services Nearby", "Road Access"],
    images: ["/placeholder.svg"],
    roi: 9.8,
    views: 42,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    tags: ["High ROI", "High Yield", "Development Opportunity"],
    zoning: "Light Industrial",
    seaportDistance: 25,
    airportDistance: 30,
    highwayDistance: 5
  },
  // Adding two more industrial properties
  {
    id: "prop11",
    title: "Investment Opportunity in KAEC Industrial Valley",
    description: "Strategic investment opportunity in growing industrial region",
    type: "warehouse",
    status: "investment-opportunity",
    price: 13500000,
    area: 7000,
    location: {
      area: "KAEC Industrial Valley",
      community: "Investment Zone"
    },
    features: ["Strategic Location", "Growth Potential", "Modern Infrastructure"],
    images: ["/placeholder.svg"],
    roi: 10.5,
    views: 38,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    tags: ["Investment", "High Yield", "Strategic"],
    zoning: "Light Industrial",
    vision2030Alignment: ["Logistics Hub", "Export Capacity"]
  },
  {
    id: "prop12",
    title: "Under-Development Logistics Hub in Yanbu",
    description: "Modern logistics facility under construction with excellent ROI potential",
    type: "logistics",
    status: "under-development",
    price: 19500000,
    area: 12000,
    location: {
      area: "Yanbu Industrial City",
      community: "Logistics District"
    },
    features: ["Modern Design", "Smart Systems", "High Specification", "Office Space"],
    images: ["/placeholder.svg"],
    developer: "Yanbu Development Company",
    completionDate: "2026-06-30",
    roi: 8.8,
    paymentPlan: {
      downPayment: 20,
      installments: [
        { percentage: 30, dueDate: "6 months after booking" },
        { percentage: 30, dueDate: "On Handover" },
        { percentage: 20, dueDate: "12 months after handover" }
      ]
    },
    views: 45,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    tags: ["Under Development", "High ROI", "Strategic Location"],
    zoning: "Logistics",
    vision2030Alignment: ["Logistics Hub"],
    seaportDistance: 10,
    airportDistance: 40,
    highwayDistance: 3
  }
];

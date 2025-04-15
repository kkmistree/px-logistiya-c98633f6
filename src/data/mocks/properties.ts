import { Property } from "@/types/property";

export const properties: Property[] = [
  {
    id: "p1",
    title: "Premium Warehouse in Riyadh Industrial City",
    description: "Modern warehouse with excellent logistics connectivity, high ceilings, and premium loading facilities in MODON Industrial City.",
    type: "warehouse",
    status: "available",
    price: 15500000,
    area: 8500,
    location: {
      area: "Riyadh Industrial City",
      community: "MODON Zone 2",
      coordinates: {
        lat: 25.0819,
        lng: 55.1443,
      },
    },
    features: ["Loading Docks", "High Ceiling", "Security System", "Fire System", "Office Space"],
    images: [
      "/lovable-uploads/f6ee3927-d73f-4aaf-8d91-38a12314d6ba.png",
      "/lovable-uploads/1c0bbef2-a150-4840-be85-c4610bd91d4f.png"
    ],
    developer: "MODON Development",
    roi: 7.8,
    views: 342,
    createdAt: "2023-10-15T08:30:00Z",
    updatedAt: "2023-11-01T14:22:00Z",
    matchScore: 87,
    tags: ["MODON approved", "high ceiling", "premium", "modern"],
    zoning: "Light Industrial",
    vision2030Alignment: ["Logistics Hub"]
  },
  {
    id: "p2",
    title: "Under-Development Factory in KAEC",
    description: "Modern factory facility in a new development in KAEC Industrial Valley with excellent payment plan options.",
    type: "factory",
    status: "under-development",
    price: 23000000,
    area: 12000,
    location: {
      area: "KAEC Industrial Valley",
      community: "Manufacturing District",
      coordinates: {
        lat: 25.1964,
        lng: 55.2748,
      },
    },
    features: ["High Power Capacity", "Water Supply", "Loading Docks", "Office Space"],
    images: [
      "/lovable-uploads/84e27764-eb7b-4219-91a5-479e5ffcaaa7.png",
      "/lovable-uploads/53ffa3eb-4728-4360-b338-329f0f6c8359.png"
    ],
    developer: "Saudi Industrial Co.",
    completionDate: "2025-06-30T00:00:00Z",
    roi: 9.2,
    paymentPlan: {
      downPayment: 20,
      installments: [
        {
          percentage: 10,
          dueDate: "60 days after booking",
        },
        {
          percentage: 10,
          dueDate: "6 months after booking",
        },
        {
          percentage: 10,
          dueDate: "12 months after booking",
        },
        {
          percentage: 50,
          dueDate: "On Handover",
        },
      ],
    },
    views: 218,
    createdAt: "2023-11-05T10:15:00Z",
    updatedAt: "2023-11-10T09:45:00Z",
    matchScore: 92,
    tags: ["under-development", "payment plan", "KAEC", "investment"],
    zoning: "Heavy Industrial",
    vision2030Alignment: ["Manufacturing Hub"]
  },
  {
    id: "p3",
    title: "Large Industrial Land in Jeddah",
    description: "Strategic industrial land in Jeddah Industrial City with excellent access to seaport.",
    type: "land",
    status: "available",
    price: 25000000,
    area: 30000,
    location: {
      area: "Jeddah Industrial City",
      community: "South Zone",
      coordinates: {
        lat: 25.1124,
        lng: 55.1387,
      },
    },
    features: ["Flat Terrain", "Utilities Connected", "Road Access", "Seaport Proximity"],
    images: [
      "/lovable-uploads/0fd1798b-18a4-427a-b90e-6fce5280ea30.png"
    ],
    developer: "Jeddah Industrial Development",
    roi: 6.2,
    views: 573,
    createdAt: "2023-09-20T12:00:00Z",
    updatedAt: "2023-11-12T16:30:00Z",
    matchScore: 76,
    tags: ["development land", "strategic location", "seaport access"],
    zoning: "Heavy Industrial",
    seaportDistance: 15,
    airportDistance: 45,
    highwayDistance: 5
  },
  {
    id: "p4",
    title: "Logistics Center in Dammam Industrial City",
    description: "Well-maintained logistics facility in Dammam Industrial City with excellent connectivity.",
    type: "logistics",
    status: "available",
    price: 16500000,
    area: 9500,
    location: {
      area: "Dammam Industrial City",
      community: "Logistics Zone",
      coordinates: {
        lat: 25.0453,
        lng: 55.2302,
      },
    },
    features: ["Loading Bays", "Truck Access", "Security", "Office Space"],
    images: [
      "/placeholder.svg", 
      "/placeholder.svg",
      "/placeholder.svg"
    ],
    developer: "Dammam Logistics",
    roi: 7.8,
    views: 189,
    createdAt: "2023-10-30T15:45:00Z",
    updatedAt: "2023-11-05T11:20:00Z",
    matchScore: 85,
    tags: ["high roi", "logistics", "investment"],
    seaportDistance: 25,
    airportDistance: 30,
    highwayDistance: 3
  },
  {
    id: "p5",
    title: "Under-Development Warehouse Complex in Sudair",
    description: "Spacious warehouse complex in a new industrial development in MODON Sudair with generous payment plan options.",
    type: "warehouse",
    status: "under-development",
    price: 18200000,
    area: 11000,
    location: {
      area: "MODON Sudair",
      community: "Industrial Park",
      coordinates: {
        lat: 25.0093,
        lng: 55.3032,
      },
    },
    features: ["Loading Docks", "High Ceiling", "Security", "Office Space"],
    images: [
      "/placeholder.svg", 
      "/placeholder.svg",
      "/placeholder.svg"
    ],
    developer: "MODON Development",
    completionDate: "2025-12-31T00:00:00Z",
    roi: 8.5,
    paymentPlan: {
      downPayment: 10,
      installments: [
        {
          percentage: 10,
          dueDate: "6 months after booking",
        },
        {
          percentage: 10,
          dueDate: "12 months after booking",
        },
        {
          percentage: 10,
          dueDate: "18 months after booking",
        },
        {
          percentage: 60,
          dueDate: "On Handover",
        },
      ],
    },
    views: 267,
    createdAt: "2023-11-02T09:30:00Z",
    updatedAt: "2023-11-14T14:10:00Z",
    matchScore: 79,
    tags: ["under-development", "MODON approved", "payment plan"],
    zoning: "Light Industrial",
    vision2030Alignment: ["Manufacturing Hub", "Logistics Hub"]
  },
  {
    id: "p6",
    title: "Industrial Office Complex in KAEC",
    description: "Premium industrial office complex in KAEC with excellent amenities for business operations.",
    type: "office",
    status: "available",
    price: 12000000,
    area: 5200,
    location: {
      area: "KAEC Industrial Valley",
      community: "Business District",
      coordinates: {
        lat: 25.1864,
        lng: 55.2769,
      },
    },
    features: ["Modern Amenities", "Meeting Rooms", "Security", "Parking"],
    images: [
      "/placeholder.svg", 
      "/placeholder.svg",
      "/placeholder.svg"
    ],
    developer: "KAEC Business Development",
    roi: 7.8,
    views: 431,
    createdAt: "2023-09-15T14:20:00Z",
    updatedAt: "2023-11-08T17:45:00Z",
    matchScore: 81,
    tags: ["office", "business operations", "modern"],
    zoning: "Light Industrial"
  },
];

export const getProperties = (filters?: any) => {
  return properties;
};

export const getProperty = (id: string) => {
  return properties.find(p => p.id === id);
};

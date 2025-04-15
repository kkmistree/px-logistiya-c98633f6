import { Property } from "@/types/property";
import { User } from "@/types/user";
import { Client } from "@/types/client";
import { Deal } from "@/types/deal";

// Sample property data
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
      "/placeholder.svg", 
      "/placeholder.svg",
      "/placeholder.svg"
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
      "/placeholder.svg", 
      "/placeholder.svg",
      "/placeholder.svg"
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
      "/placeholder.svg", 
      "/placeholder.svg",
      "/placeholder.svg"
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

// Sample user data
export const users: User[] = [
  {
    id: "u1",
    name: "Ahmed Khan",
    email: "ahmed.khan@example.com",
    role: "broker",
    company: "Saudi Industrial Investments",
    license: "MODON12345",
    avatar: "/placeholder.svg",
    phone: "+966 50 123 4567",
    bio: "Specializing in industrial properties across Saudi Arabia with 10+ years of experience.",
    specializations: ["Industrial Properties", "Investment Advisory", "Under-Development"],
    languages: ["English", "Arabic", "Urdu"],
    joinedAt: "2022-05-12T00:00:00Z",
    lastActive: "2023-11-15T09:30:00Z",
    dealsClosed: 87,
    totalVolume: 320000000,
    verification: {
      emailVerified: true,
      identityVerified: true,
      licenseVerified: true,
    },
    settings: {
      notifications: {
        email: true,
        push: true,
        sms: true,
      },
      privacy: {
        showProfile: true,
        showContact: true,
        showActivity: false,
      },
    },
  },
  {
    id: "u2",
    name: "Sarah Al-Mutairi",
    email: "sarah.almutairi@example.com",
    role: "agent",
    company: "Saudi Industrial Investments",
    license: "MODON67890",
    avatar: "/placeholder.svg",
    phone: "+966 54 987 6543",
    bio: "Under-development property specialist with a focus on investment opportunities in KSA industrial zones.",
    specializations: ["Under-Development", "Investment Properties", "Vision 2030"],
    languages: ["English", "Arabic"],
    joinedAt: "2022-08-20T00:00:00Z",
    lastActive: "2023-11-14T15:45:00Z",
    dealsClosed: 42,
    totalVolume: 198000000,
    verification: {
      emailVerified: true,
      identityVerified: true,
      licenseVerified: true,
    },
    settings: {
      notifications: {
        email: true,
        push: true,
        sms: false,
      },
      privacy: {
        showProfile: true,
        showContact: true,
        showActivity: true,
      },
    },
  },
];

const clientRequirements = {
  budget: {
    min: 10000000,
    max: 25000000,
  },
  location: ["Riyadh Industrial City", "KAEC Industrial Valley", "Jeddah Industrial City"],
  propertyType: ["warehouse", "logistics"],
  minArea: 5000,
  features: ["Loading Docks", "Security", "High Ceiling"],
  timeline: "6 months",
  purpose: "investment" as const,
  paymentPreference: "cash" as const,
};

// Update the first client with industrial requirements
export const clients: Client[] = [
  {
    id: "c1",
    name: "Mohammed Al Farsi",
    email: "m.alfarsi@example.com",
    phone: "+966 50 555 1234",
    type: "investor",
    assignedTo: "u1",
    status: "active",
    requirements: clientRequirements,
    documents: [
      {
        id: "d1",
        name: "Commercial Registration",
        type: "identification",
        url: "/placeholder.svg",
        uploadedAt: "2023-10-05T10:30:00Z",
      },
      {
        id: "d2",
        name: "Investment Mandate",
        type: "mandate",
        url: "/placeholder.svg",
        uploadedAt: "2023-10-10T14:15:00Z",
      },
    ],
    interactions: [
      {
        id: "i1",
        type: "call",
        date: "2023-10-01T11:00:00Z",
        notes: "Initial discussion about investment goals in Riyadh Industrial City.",
        outcome: "Positive - interested in warehouses",
        followUpDate: "2023-10-08T11:00:00Z",
      },
      {
        id: "i2",
        type: "viewing",
        date: "2023-10-12T15:00:00Z",
        notes: "Viewed 3 properties in Riyadh Industrial City.",
        propertyId: "p1",
        outcome: "Very interested in property p1",
        followUpDate: "2023-10-15T11:00:00Z",
      },
    ],
    createdAt: "2023-09-28T08:45:00Z",
    updatedAt: "2023-11-10T16:30:00Z",
  },
  {
    id: "c2",
    name: "Elena Petrova",
    email: "elena.p@example.com",
    phone: "+966 54 999 8877",
    type: "investor",
    assignedTo: "u2",
    status: "active",
    requirements: {
      ...clientRequirements,
      propertyType: ["factory", "land"],
      location: ["KAEC Industrial Valley", "Jubail Industrial City"],
      minArea: 10000,
      features: ["High Power Capacity", "Water Supply", "Road Access"],
      timeline: "12 months",
      paymentPreference: "payment-plan" as const,
    },
    documents: [
      {
        id: "d3",
        name: "Commercial Registration",
        type: "identification",
        url: "/placeholder.svg",
        uploadedAt: "2023-10-18T09:20:00Z",
      },
    ],
    interactions: [
      {
        id: "i3",
        type: "email",
        date: "2023-10-15T13:30:00Z",
        notes: "Sent information about payment plans for KAEC properties.",
        outcome: "Requested more details about specific projects",
        followUpDate: "2023-10-20T13:30:00Z",
      },
      {
        id: "i4",
        type: "meeting",
        date: "2023-10-25T10:00:00Z",
        notes: "Met to discuss requirements in detail. Interested in under-development options.",
        outcome: "Positive - wants to view 3 specific projects",
        followUpDate: "2023-11-01T10:00:00Z",
      },
    ],
    createdAt: "2023-10-12T15:20:00Z",
    updatedAt: "2023-11-05T11:45:00Z",
  },
];

// Sample deal data
export const deals: Deal[] = [
  {
    id: "d1",
    propertyId: "p1",
    buyerId: "c1",
    sellerId: undefined, // Developer direct
    buyerAgentId: "u1",
    sellerAgentId: undefined,
    status: "negotiation",
    price: 15000000, // Negotiated down from listing price
    depositAmount: 750000,
    depositPaid: true,
    depositDate: "2023-11-05T00:00:00Z",
    commissionRate: 2,
    commissionAmount: 300000,
    commissionSplit: {
      buyerAgent: 100,
      sellerAgent: 0,
    },
    documents: [
      {
        id: "doc1",
        type: "reservation",
        name: "Reservation Form",
        url: "/placeholder.svg",
        status: "signed",
        uploadedAt: "2023-11-05T10:30:00Z",
        uploadedBy: "u1",
      },
      {
        id: "doc2",
        type: "loi",
        name: "Letter of Intent",
        url: "/placeholder.svg",
        status: "signed",
        uploadedAt: "2023-11-06T14:15:00Z",
        uploadedBy: "u1",
      },
      {
        id: "doc3",
        type: "spa",
        name: "Sale & Purchase Agreement",
        url: "/placeholder.svg",
        status: "pending",
        uploadedAt: "2023-11-10T09:45:00Z",
        uploadedBy: "u1",
      },
    ],
    timeline: [
      {
        stage: "Initial Interest",
        date: "2023-10-12T15:00:00Z",
        completedBy: "u1",
        notes: "Client very interested after viewing property",
      },
      {
        stage: "Offer Submitted",
        date: "2023-10-30T11:30:00Z",
        completedBy: "u1",
        notes: "Offer of 15M SAR submitted to developer",
      },
      {
        stage: "Offer Accepted",
        date: "2023-11-02T16:45:00Z",
        completedBy: "u1",
        notes: "Developer accepted the offer",
      },
      {
        stage: "Reservation Fee Paid",
        date: "2023-11-05T10:00:00Z",
        completedBy: "u1",
        notes: "Client paid 5% reservation fee",
      },
    ],
    notes: "Client is very particular about handover date. Need to ensure developer confirms exact timeline.",
    createdAt: "2023-10-30T11:30:00Z",
    updatedAt: "2023-11-10T09:45:00Z",
  },
  {
    id: "d2",
    propertyId: "p4",
    buyerId: "c2",
    sellerId: undefined, // Current owner not modeled in this sample
    buyerAgentId: "u2",
    sellerAgentId: undefined,
    status: "pending",
    price: 16000000, // Negotiated down from listing price
    depositAmount: 800000,
    depositPaid: true,
    depositDate: "2023-11-08T00:00:00Z",
    commissionRate: 2,
    commissionAmount: 320000,
    commissionSplit: {
      buyerAgent: 100,
      sellerAgent: 0,
    },
    documents: [
      {
        id: "doc4",
        type: "loi",
        name: "Letter of Intent",
        url: "/placeholder.svg",
        status: "signed",
        uploadedAt: "2023-11-07T13:20:00Z",
        uploadedBy: "u2",
      },
      {
        id: "doc5",
        type: "payment",
        name: "Deposit Receipt",
        url: "/placeholder.svg",
        status: "signed",
        uploadedAt: "2023-11-08T11:05:00Z",
        uploadedBy: "u2",
      },
    ],
    timeline: [
      {
        stage: "Initial Interest",
        date: "2023-11-01T10:00:00Z",
        completedBy: "u2",
        notes: "Client interested after seeing property details",
      },
      {
        stage: "Property Viewing",
        date: "2023-11-03T14:30:00Z",
        completedBy: "u2",
        notes: "Client viewed the property and liked it",
      },
      {
        stage: "Offer Submitted",
        date: "2023-11-05T09:15:00Z",
        completedBy: "u2",
        notes: "Offer of 16M SAR submitted to seller",
      },
      {
        stage: "Offer Accepted",
        date: "2023-11-06T16:30:00Z",
        completedBy: "u2",
        notes: "Seller accepted the offer",
      },
      {
        stage: "Deposit Paid",
        date: "2023-11-08T10:45:00Z",
        completedBy: "u2",
        notes: "Client paid 5% deposit",
      },
    ],
    notes: "Client wants to complete quickly as they are entering Saudi market by end of month.",
    createdAt: "2023-11-05T09:15:00Z",
    updatedAt: "2023-11-08T11:05:00Z",
  },
];

// Helper functions to get mock data
export const getProperties = (filters?: any) => {
  // In a real app, this would apply the filters
  return properties;
};

export const getProperty = (id: string) => {
  return properties.find(p => p.id === id);
};

export const getUser = (id: string) => {
  return users.find(u => u.id === id);
};

export const getClient = (id: string) => {
  return clients.find(c => c.id === id);
};

export const getDeal = (id: string) => {
  return deals.find(d => d.id === id);
};

export const getClientsByAgent = (agentId: string) => {
  return clients.filter(c => c.assignedTo === agentId);
};

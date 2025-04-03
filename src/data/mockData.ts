
import { Property } from "@/types/property";
import { User } from "@/types/user";
import { Client } from "@/types/client";
import { Deal } from "@/types/deal";

// Sample property data
export const properties: Property[] = [
  {
    id: "p1",
    title: "Luxury 3 Bedroom Apartment in Dubai Marina",
    description: "Stunning 3 bedroom apartment with panoramic sea views in the heart of Dubai Marina. Features high-end finishes, floor-to-ceiling windows, and premium appliances.",
    type: "apartment",
    status: "ready",
    price: 3500000,
    area: 2100,
    bedrooms: 3,
    bathrooms: 3.5,
    location: {
      area: "Dubai Marina",
      community: "Marina Promenade",
      coordinates: {
        lat: 25.0819,
        lng: 55.1443,
      },
    },
    features: ["Sea View", "Balcony", "Gym", "Swimming Pool", "Concierge", "Smart Home", "Parking"],
    images: [
      "/placeholder.svg", 
      "/placeholder.svg",
      "/placeholder.svg"
    ],
    developer: "Emaar Properties",
    roi: 5.8,
    views: 342,
    createdAt: "2023-10-15T08:30:00Z",
    updatedAt: "2023-11-01T14:22:00Z",
    matchScore: 87,
    tags: ["sea view", "high floor", "furnished", "premium"],
  },
  {
    id: "p2",
    title: "Off-Plan 2 Bedroom in Downtown Dubai",
    description: "Modern 2 bedroom apartment in a new development in Downtown Dubai. Close to Dubai Mall and Burj Khalifa with excellent payment plan options.",
    type: "apartment",
    status: "off-plan",
    price: 2300000,
    area: 1450,
    bedrooms: 2,
    bathrooms: 2,
    location: {
      area: "Downtown Dubai",
      community: "Burj Vista",
      coordinates: {
        lat: 25.1964,
        lng: 55.2748,
      },
    },
    features: ["Burj Khalifa View", "Balcony", "Gym", "Swimming Pool", "Children's Play Area"],
    images: [
      "/placeholder.svg", 
      "/placeholder.svg",
      "/placeholder.svg"
    ],
    developer: "Emaar Properties",
    completionDate: "2025-06-30T00:00:00Z",
    roi: 6.2,
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
    tags: ["off-plan", "payment plan", "downtown", "investment"],
  },
  {
    id: "p3",
    title: "Palm Jumeirah Villa with Private Beach",
    description: "Exclusive 5 bedroom villa on Palm Jumeirah with private beach access, infinity pool, and stunning views of the Dubai skyline.",
    type: "villa",
    status: "ready",
    price: 25000000,
    area: 8500,
    bedrooms: 5,
    bathrooms: 6,
    location: {
      area: "Palm Jumeirah",
      community: "Frond M",
      coordinates: {
        lat: 25.1124,
        lng: 55.1387,
      },
    },
    features: ["Private Beach", "Infinity Pool", "Home Theater", "Private Garden", "Maid's Room", "Driver's Room", "Smart Home", "Elevator"],
    images: [
      "/placeholder.svg", 
      "/placeholder.svg",
      "/placeholder.svg"
    ],
    developer: "Nakheel",
    roi: 4.2,
    views: 573,
    createdAt: "2023-09-20T12:00:00Z",
    updatedAt: "2023-11-12T16:30:00Z",
    matchScore: 76,
    tags: ["private beach", "luxury", "premium", "skyline view"],
  },
  {
    id: "p4",
    title: "Resale 1 Bedroom in JVC",
    description: "Well-maintained 1 bedroom apartment in Jumeirah Village Circle. Perfect for first-time buyers or investors looking for strong rental yields.",
    type: "apartment",
    status: "resale",
    price: 650000,
    area: 850,
    bedrooms: 1,
    bathrooms: 1.5,
    location: {
      area: "Jumeirah Village Circle",
      community: "Bloom Towers",
      coordinates: {
        lat: 25.0453,
        lng: 55.2302,
      },
    },
    features: ["Balcony", "Gym", "Swimming Pool", "Covered Parking", "Security"],
    images: [
      "/placeholder.svg", 
      "/placeholder.svg",
      "/placeholder.svg"
    ],
    developer: "Bloom Properties",
    roi: 7.8,
    views: 189,
    createdAt: "2023-10-30T15:45:00Z",
    updatedAt: "2023-11-05T11:20:00Z",
    matchScore: 85,
    tags: ["high roi", "affordable", "investment"],
  },
  {
    id: "p5",
    title: "Off-Plan 4 Bedroom Townhouse in Dubailand",
    description: "Spacious 4 bedroom townhouse in a new family-friendly community in Dubailand with generous payment plan options.",
    type: "townhouse",
    status: "off-plan",
    price: 3200000,
    area: 3200,
    bedrooms: 4,
    bathrooms: 4,
    location: {
      area: "Dubailand",
      community: "The Valley",
      coordinates: {
        lat: 25.0093,
        lng: 55.3032,
      },
    },
    features: ["Private Garden", "Maid's Room", "Community Park", "Schools Nearby", "Retail Outlets"],
    images: [
      "/placeholder.svg", 
      "/placeholder.svg",
      "/placeholder.svg"
    ],
    developer: "Emaar Properties",
    completionDate: "2025-12-31T00:00:00Z",
    roi: 5.5,
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
    tags: ["off-plan", "family-friendly", "payment plan"],
  },
  {
    id: "p6",
    title: "Luxury Penthouse in Business Bay",
    description: "Opulent 4 bedroom penthouse in Business Bay with stunning views of Burj Khalifa and Dubai Canal. Features private terrace and premium designer finishes.",
    type: "penthouse",
    status: "ready",
    price: 12000000,
    area: 5200,
    bedrooms: 4,
    bathrooms: 5,
    location: {
      area: "Business Bay",
      community: "The Opus",
      coordinates: {
        lat: 25.1864,
        lng: 55.2769,
      },
    },
    features: ["Burj Khalifa View", "Private Terrace", "Private Pool", "Smart Home", "Private Elevator", "Home Automation"],
    images: [
      "/placeholder.svg", 
      "/placeholder.svg",
      "/placeholder.svg"
    ],
    developer: "Omniyat",
    roi: 4.8,
    views: 431,
    createdAt: "2023-09-15T14:20:00Z",
    updatedAt: "2023-11-08T17:45:00Z",
    matchScore: 81,
    tags: ["luxury", "penthouse", "burj khalifa view", "designer"],
  },
];

// Sample user data
export const users: User[] = [
  {
    id: "u1",
    name: "Ahmed Khan",
    email: "ahmed.khan@example.com",
    role: "broker",
    company: "Dubai Prime Realty",
    license: "DLD12345",
    avatar: "/placeholder.svg",
    phone: "+971 50 123 4567",
    bio: "Specializing in luxury properties across Dubai with 10+ years of experience.",
    specializations: ["Luxury Properties", "Investment Advisory", "Off-Plan"],
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
    name: "Sarah Williams",
    email: "sarah.williams@example.com",
    role: "agent",
    company: "Dubai Prime Realty",
    license: "DLD67890",
    avatar: "/placeholder.svg",
    phone: "+971 54 987 6543",
    bio: "Off-plan property specialist with a focus on investment opportunities in Dubai.",
    specializations: ["Off-Plan", "Investment Properties", "First-Time Buyers"],
    languages: ["English", "French"],
    joinedAt: "2022-08-20T00:00:00Z",
    lastActive: "2023-11-14T15:45:00Z",
    dealsClosed: 42,
    totalVolume: 98000000,
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

// Sample client data
export const clients: Client[] = [
  {
    id: "c1",
    name: "Mohammed Al Farsi",
    email: "m.alfarsi@example.com",
    phone: "+971 50 555 1234",
    type: "investor",
    assignedTo: "u1",
    status: "active",
    requirements: {
      budget: {
        min: 2000000,
        max: 5000000,
      },
      location: ["Dubai Marina", "Downtown Dubai", "Palm Jumeirah"],
      propertyType: ["apartment", "penthouse"],
      bedrooms: [2, 3],
      minArea: 1500,
      features: ["Sea View", "Gym", "Swimming Pool"],
      timeline: "3 months",
      purpose: "investment",
      paymentPreference: "cash",
    },
    documents: [
      {
        id: "d1",
        name: "Passport Copy",
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
        notes: "Initial discussion about investment goals in Dubai Marina.",
        outcome: "Positive - interested in 2-3 bedroom apartments",
        followUpDate: "2023-10-08T11:00:00Z",
      },
      {
        id: "i2",
        type: "viewing",
        date: "2023-10-12T15:00:00Z",
        notes: "Viewed 3 properties in Dubai Marina.",
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
    phone: "+971 54 999 8877",
    type: "buyer",
    assignedTo: "u2",
    status: "active",
    requirements: {
      budget: {
        min: 1000000,
        max: 2500000,
      },
      location: ["Downtown Dubai", "Business Bay"],
      propertyType: ["apartment"],
      bedrooms: [1, 2],
      minArea: 800,
      features: ["Burj Khalifa View", "Modern", "Security"],
      timeline: "6 months",
      purpose: "end-use",
      paymentPreference: "payment-plan",
    },
    documents: [
      {
        id: "d3",
        name: "Passport Copy",
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
        notes: "Sent information about payment plans for Downtown properties.",
        outcome: "Requested more details about specific projects",
        followUpDate: "2023-10-20T13:30:00Z",
      },
      {
        id: "i4",
        type: "meeting",
        date: "2023-10-25T10:00:00Z",
        notes: "Met to discuss requirements in detail. Interested in off-plan options.",
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
    price: 3450000, // Negotiated down from listing price
    depositAmount: 172500,
    depositPaid: true,
    depositDate: "2023-11-05T00:00:00Z",
    commissionRate: 2,
    commissionAmount: 69000,
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
        notes: "Offer of 3.45M AED submitted to developer",
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
    price: 640000, // Negotiated down from listing price
    depositAmount: 32000,
    depositPaid: true,
    depositDate: "2023-11-08T00:00:00Z",
    commissionRate: 2,
    commissionAmount: 12800,
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
        notes: "Offer of 640K AED submitted to seller",
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
    notes: "Client wants to complete quickly as they are relocating to Dubai by end of month.",
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

export const getDealsByProperty = (propertyId: string) => {
  return deals.filter(d => d.propertyId === propertyId);
};

export const getDealsByClient = (clientId: string) => {
  return deals.filter(d => d.buyerId === clientId || d.sellerId === clientId);
};

export const getDealsByAgent = (agentId: string) => {
  return deals.filter(d => d.buyerAgentId === agentId || d.sellerAgentId === agentId);
};

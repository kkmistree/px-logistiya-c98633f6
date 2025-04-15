import { Client } from "@/types/client";

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
      propertyType: ["factory", "land"],
      location: ["KAEC Industrial Valley", "Jubail Industrial City"],
      minArea: 10000,
      features: ["High Power Capacity", "Water Supply", "Road Access"],
      timeline: "12 months",
      paymentPreference: "payment-plan" as const,
      budget: {
        min: 15000000,
        max: 30000000,
      },
      purpose: "investment" as const
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

export const getClient = (id: string) => {
  return clients.find(c => c.id === id);
};

export const getClientsByAgent = (agentId: string) => {
  return clients.filter(c => c.assignedTo === agentId);
};

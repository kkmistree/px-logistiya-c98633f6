import { Deal } from "@/types/deal";

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

export const getDeal = (id: string) => {
  return deals.find(d => d.id === id);
};

import { User } from "@/types/user";

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

export const getUser = (id: string) => {
  return users.find(u => u.id === id);
};

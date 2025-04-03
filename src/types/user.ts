
export interface User {
  id: string;
  name: string;
  email: string;
  role: 'broker' | 'agent' | 'admin' | 'developer';
  company?: string;
  license?: string;
  avatar?: string;
  phone?: string;
  bio?: string;
  specializations?: string[];
  languages?: string[];
  joinedAt: string; // ISO date string
  lastActive?: string; // ISO date string
  dealsClosed?: number;
  totalVolume?: number; // total transaction volume
  verification: {
    emailVerified: boolean;
    identityVerified: boolean;
    licenseVerified: boolean;
  };
  settings: {
    notifications: {
      email: boolean;
      push: boolean;
      sms: boolean;
    };
    privacy: {
      showProfile: boolean;
      showContact: boolean;
      showActivity: boolean;
    };
  };
}

export interface UserCircle {
  id: string;
  name: string;
  description?: string;
  members: {
    userId: string;
    role: 'admin' | 'member';
    joinedAt: string; // ISO date string
  }[];
  createdAt: string; // ISO date string
  updatedAt: string; // ISO date string
  isPrivate: boolean;
  rules?: string[];
}

export interface UserStats {
  userId: string;
  period: 'day' | 'week' | 'month' | 'quarter' | 'year';
  stats: {
    viewings: number;
    leads: number;
    deals: number;
    volume: number;
    commission: number;
  };
}

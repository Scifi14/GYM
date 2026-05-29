export interface Program {
  id: string;
  code: string; // e.g. "01 // SYSTEM"
  title: string;
  category: string;
  duration: string;
  intensity: string;
  description: string;
  features: string[];
}

export interface Trainer {
  id: string;
  name: string;
  role: string;
  imageUrl: string;
  bio: string;
  focus: string;
  stats: {
    experience: string;
    velocity: string;
    precision: string;
  };
  certifications: string[];
}

export interface Transformation {
  id: string;
  athlete: string;
  age: number;
  duration: string;
  metricLabel: string;
  beforeValue: number;
  afterValue: number;
  imageUrl: string;
  achievement: string;
  quote: string;
}

export interface MembershipTier {
  id: string;
  name: string;
  price: string;
  period: string;
  tierSymbol: string;
  description: string;
  features: string[];
  isPopular?: boolean;
}

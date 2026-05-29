export interface Course {
  id: string;
  title: string;
  category: string;
  description: string;
  duration: string;
  targetAudience: string;
  iconName: string;
  highlights: string[];
  features: string[];
}

export interface Achievement {
  value: string;
  numericValue: number;
  label: string;
  description: string;
  suffix: string;
}

export interface Benefit {
  id: string;
  title: string;
  description: string;
  gridSpan: string; // Tailwind grid span classes
  iconName: string;
  colorPreset: 'purple' | 'cyan' | 'pink' | 'emerald' | 'amber' | 'blue';
}

export interface Book {
  id: string;
  title: string;
  edition: string;
  description: string;
  coverColor: string; // gradient CSS style
  textAccent: string;
  pages: number;
  targetAge: string;
  image?: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  school?: string;
  quote: string;
  rating: number;
  avatarSeed: string;
}

export interface Milestone {
  year: string;
  title: string;
  description: string;
}

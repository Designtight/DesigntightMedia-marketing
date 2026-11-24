export type ServiceOption =
  | 'Website design'
  | 'Social media management'
  | 'AI assistant / receptionist'
  | 'Marketing and automation package'
  | 'Local Presence ($299/mo)'
  | 'Growth Engine ($599/mo)'
  | 'AI Business Suite ($999/mo)'
  | 'Not sure yet';

export interface LeadFormData {
  name: string;
  business: string;
  email: string;
  phone: string;
  service: ServiceOption;
  message: string;
}

export interface PricingPlan {
  id: string;
  tag: string;
  name: string;
  price: string;
  period: string;
  setup: string;
  featured?: boolean;
  features: string[];
  ctaText: string;
  serviceOption: ServiceOption;
}

export type BlogCategory =
  | 'All'
  | 'Web Design'
  | 'Social Media'
  | 'AI Automation'
  | 'Local SEO';

export interface BlogSection {
  heading: string;
  paragraphs: string[];
}

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  category: Exclude<BlogCategory, 'All'>;
  date: string;
  readTime: string;
  author: string;
  authorRole: string;
  coverImage?: string;
  coverAlt: string;
  featured?: boolean;
  keyTakeaways: string[];
  sections: BlogSection[];
  recommendedService: ServiceOption;
  ctaLabel: string;
}
